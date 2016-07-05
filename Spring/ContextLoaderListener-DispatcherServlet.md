# ContextLoaderListener & DispatcherServlet

* 각각 WebApplicationContext의 인스턴스를 생성한다.
* ContextLoaderListener가 생성한 컨텍스트가 Root Context가 된다.
* DispatcherServlet이 생성한 인스턴스는 Root Context를 부모로 하는 자식 컨텍스트가 된다.

### DispatcherServlet

```xml
<!-- 인사관리 -->
<servlet>
    <servlet-name>insaServlet</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>/WEB-INF/insa-context.xml</param-value>
    </init-param>
    <load-on-startup>1</load-on-startup>
</servlet>

<servlet-mapping>
    <servlet-name>insaServlet</servlet-name>
    <url-pattern>/insa</url-pattern>
</servlet-mapping>

<!-- 영업관리 -->
<servlet>
    <servlet-name>saleServlet</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>/WEB-INF/sale-context.xml</param-value>
    </init-param>
    <load-on-startup>1</load-on-startup>
</servlet>

<servlet-mapping>
<servlet-name>saleServlet</servlet-name>
    <url-pattern>/sale</url-pattern>
</servlet-mapping>
```

* DispatcherServlet은 자체가 서블릿이므로 1개 이상의 DispatcherServlet이 설정되어 기동되는 것이 가능하다.
* DispatcherServlet은 기본적으로  ``WEB-INF/`` 디렉터리에 위치한 ``[서블릿이름]-servlet.xml`` 파일로부터 스프링 설정 정보를 읽어온다.
* 기본 설정 파일이 아닌 파일들로부터 설정 정보를 읽어오기 위해서는 DispatcherServlet을 설정할 때 contextConfigLocation초기화 파라미터에 설정 파일 목록을 지정하면 한다.
* 초기화 파라미터는 설정 파일 목록을 값으로 갖는데 이때 각 설정 파일은 콤마(","), 공백 문자,(" "), 탭(\t), 줄 바꿈(\n), 세미콜론(";") 을 이용하여 구분한다.
* /insa 요청이 오면 insaServlet으로 정의된 DispatcherServlet이 요청을 처리하며 설정 파일로는 insa-context.xml을 사용하며, 영업쪽도 동일하다.
* 인사쪽과 영업쪽은 서로 다른 Context에서 독립적으로 운영되므로 서로 공통 자바빈 같은 것을 공유할수가 없다.

### ContextLoaderListener

* 두 컨트롤러가 공통 자바빈 등을 사용한다면 ContextLoaderListener를 이용하여 정의한다.
* ContextLoaderListener는 contextConfigLocation을 명시하지 않으면 ``/WEB-INF/applicationContext.xml`` 파일을 설정파일로 사용한다.
* 클래스 패스에 위치한 파일로부터 설정 정보를 읽어 오고 싶다면 다음과 같이 ``classpath:``접두어를 사용하여 설정 파일을 명시하면 된다.

```xml
<listener>
             <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
</listener>
<context-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>
        /WEB-INF/ insa-context.xml
        /WEB-INF/ sale-context.xml
    </param-value>
</context-param>

<!—인사관리 -->
<servlet>
    <servlet-name>insaServlet</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
</servlet>

<servlet-mapping>
    <servlet-name> insaServlet </servlet-name>
    <url-pattern>/insa</url-pattern>
</servlet-mapping>

<!—영업관리 -->
<servlet>
    <servlet-name>saleServlet</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
</servlet>

<servlet-mapping>
    <servlet-name> saleServlet </servlet-name>
    <url-pattern>/sale</url-pattern>
</servlet-mapping>
```

### Addition

* DispatcherServlet은 Front Controller로서 서블릿 컨테이너에서 HTTP 프로토콜을 통해 들어오는 모든 요청을 프리젠테이션 계층의 제일 앞에 둬서 처리할 수 있는 컨트롤러이다.

* DispatcherServlet은 서블릿 컨테이너가 생성하고 관리하는 오브젝트로서 스프링이 관여하는 오브젝트가 아니므로 직접 DI를 해줄 방법이 없고 대신 ``web.xml``에서 설정한 WebApplicationContext를 참고하여 필요한 전략을 DI하여 사용한다.

### Reference

* [ContextLoaderListener, DispatcherServlet이란](http://www.oraclejavanew.kr/bbs/board.php?bo_table=LecSpring&wr_id=185)
* [DispatcherServlet 설정 및 스프링 컨텍스트 설정](http://uip80.tistory.com/entry/DispatcherServlet-%EC%84%A4%EC%A0%95-%EB%B0%8F-%EC%8A%A4%ED%94%84%EB%A7%81-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8-%EC%84%A4%EC%A0%95)