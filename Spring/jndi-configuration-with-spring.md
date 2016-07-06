# JNDI 설정 & Spring 연동

### JNDI란?
* JNDI는 Java Naming and Directory Interface의 약자이다.
* 디렉터리 서비스에 접근하는데 필요한 API이며 애플리케이션은 이 API를 사용하여 서버의 자원을 찾을 수 있다. 여기서 자원이라함은 데이터베이스 서버나 메시징 시스템과 같이 다른 시스템과의 연결을 제공하는 객체이다. 특히 JDBC 자원을 데이터 소스라고 부른다.
* 자원을 서버에 등록할 떄는 고유한 JNDI 이름을 붙인다. JNDI 이름은 사용자에게 친숙한 디렉터리 경로 형태를 가진다. (예: JDBC 자원 -> jdbc/mydb)

| 이름 |  설명  |
|:---:|-------|
| java:comp/env | 응용 프로그램 환경 항목 |
| java:comp/env/jdbc | JDBC 데이터 소스 |
| java:comp/ejb | EJB 컴포넌트 |
| java:comp/UserTransaction | UserTransaction 객체 |
| java:comp/env/mail | JavaMail 연결 객체 |
| java:comp/env/url | URL 정보 |
| java:comp/env/jms | JMS 연결 객체 |

* ``jdbc/mydb``라는 데이터 소스가 있어, 서버에서 이 자원을 찾으려면 ``java:comp/env/jdbc/mydb`` JNDI 이름으로 찾아야 한다.

### tomcat-jdbc.jar 복사 하기

``tomcat-jdbc.jar`` 라이브러리를 ``%TOMCAT_HOME%/lib`` 디렉토리로 복사한다.

**Tomcat 7.x 이전 버전**

* commons-dbcp.jar
* commons-pool.jar
* commons-collection.jar
* 3rd driver library (oracle, ms-sql, mysql, db2)

**Tomcat 7.x 이후 버전**
* tomcat-jdbc.jar
* 3rd driver library (oracle, ms-sql, mysql, db2)

### server.xml에서 DataSource 설정 하기
``%TOMCAT_HOME%/conf/server.xml``에 있는 ``<GlobalNamingResources>``
에 DataSource를 추가한다.

```xml
<GlobalNamingResources>
        <!-- jdbc 셋팅 -->
         <Resource name="jdbc/testDB"
         auth="Container"
         type="javax.sql.DataSource" 
         factory="org.apache.tomcat.jdbc.pool.DataSourceFactory"
         maxActive="100"
         minIdle="10"
         maxWait="10000"
         initialSize="10"
         driverClassName="com.mysql.jdbc.Driver"
         defaultAutoCommit="false"
         username="root"
         password="root"
         closeMethod="close"
         url="jdbc:mysql://127.0.0.1:3316/testDB" />
</GlobalNamingResources>
```

* 여기서 ``<Resource>`` 부분을 ``%TOMCAT_HOME%/conf/context.xml``에 되는 것 같다.

### context.xml에서 DataSource 링크 설정
``%TOMCAT_HOME%/conf/context.xml``에 있는 ``<Context>``
에 ResourceLink를 추가한다.

```xml
<Context docBase="beyondj2ee" path="/beyondj2ee"
                    reloadable="true" source="org.eclipse.jst.jee.server:beyondj2ee">
        <ResourceLink global="jdbc/testDB" name="jdbc/testDB"
                        type="javax.sql.DataSource" />
</Context>
```

### web.xml에서 DataSource 참조 설정 하기
context.xml에 선언된 DataSource를 님들의 웹 어플리케이션에서 쓸 수 있도록
web.xml에 설정한다.
(※ 반드시 ``<Context>``의 안에 선언된 ``<ResourceLink>`` 태그의 ``name``속성의 같과
동일해야 한다. 즉 (name="jdbc/testDB" == res-ref-name))

```xml
<resource-ref>
        <description>DB Connection</description>
        <res-ref-name>jdbc/testDB</res-ref-name>
        <res-type>javax.sql.DataSource</res-type>
        <res-auth>Container</res-auth>
</resource-ref>
```

### Spring에서 bean 설정 하기

```xml
<bean id="dataSource" class="org.springframework.jndi.JndiObjectFactoryBean">
        <property name="jndiName" value="java:/comp/env/jdbc/testDB" />
</bean>
```

### Reference
* [자바 웹 개발 워크북](http://book.naver.com/bookdb/book_detail.nhn?bid=7623127)
* [JNDI(Java Naming Directory Interface) 데이타베이스 다루는 방법](http://kenu.github.io/tomcat70/docs/jndi-datasource-examples-howto.html)
* [Tomcat 7 환경에서 JNDI DataSource + Spring 연동 방법](http://beyondj2ee.tumblr.com/post/14508592466/tomcat-7-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-jndi-datasource-spring-%EC%97%B0%EB%8F%99-%EB%B0%A9%EB%B2%95)
* [[Spring 레퍼런스] 13장 JDBC를 사용한 데이터 접근 #1](https://blog.outsider.ne.kr/882)