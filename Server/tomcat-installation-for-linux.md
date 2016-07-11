# Linux에 Tomcat 설치하기

하단의 링크의 JDK 설치하기가 선행되어야 한다.
[Linux에 JDK 설치하기](./jdk-installation-for-linux.md)

### Tomcat 다운로드

[Tomcat7 downloads page - Apache Tomcat](http://tomcat.apache.org/download-70.cgi)

```bash
wget http://mirror.apache-kr.org/tomcat/tomcat-7/v7.0.70/bin/apache-tomcat-7.0.70.tar.gz
```

### 압축 풀기

```bash
gunzip apache-tomcat-7.0.70.tar.gz
tar -xvf apache-tomcat-7.0.70.tar.gz
```

### 폴더 이동 및 심볼릭 링크 생성

```bash
sudo mkdir /usr/local/server
sudo mv apache-tomcat-7.0.70 /usr/local/server
sudo cd /usr/local/server
sudo ln -s apache-tomcat-7.0.70 tomcat
```

### profile 수정하기

```
/etc/profile
~/.bash_profile
```

상단의 profile들 중 필요에 맞게 수정한다.

```bash
sudo vi /etc/profile
sudo source /etc/profile
```

```
JAVA_HOME=/usr/local/java
CATALINA_HOME=/usr/local/server/tomcat
CLASSPATH=.:$JAVA_HOME/lib/tools.jar:$CATALINA_HOME/lib-jsp-api.jar:$CATALINA_HOME/lib/servlet-api.jar
PATH=$PATH:$JAVA_HOME/bin:$CATALINA_HOME/bin
export JAVA_HOME CLASSPATH PATH CATALINA_HOME
```

### Tomcat 실행하기

```bash
/usr/local/server/tomcat/bin/startup.sh
/usr/local/server/tomcat/bin/shutdown.sh
```

### Tomcat 사용자계정 권한 설정

```bash
sudo chown userId:groupId /usr/local/server/apache-tomcat-7.0.70 -R
```

### JNDI 설정

JNDI 설정이 필요하다면 하단의 문서를 참조하여 설정한다.

[JNDI 설정](../Spring/jndi-configuration-with-spring.md)

### 배포

* 톰캣 중지 -> 배포 -> 톰캣 시작

```bash
jar xvf websample.zip
/usr/local/server/tomcat/bin/shutdown.sh
rm -rf /usr/local/server/apache-tomcat-7.0.70/webapps/websample/
mv websample /usr/local/server/apache-tomcat-7.0.70/webapps/
rm -f websample.zip
/usr/local/server/tomcat/bin/startup.sh
```

### Reference

* [CentOS 6.5 리눅스에 JSP 서비스를 위한 Tomcat 설치하기](http://luckyyowu.tistory.com/124)