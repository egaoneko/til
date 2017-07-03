# Tomcat SSL 적용

## Keysotre 생성

```bash
keytool -genkey -alias tomcatssl -keyalg RSA
```

## cer file 생성

```bash
keytool -export -alias tomcatssl -rfc -file tomcatssl.cer
```

## Tomcat 설정

* cer 파일 `ketstoreFile` 기본경로(톰캣 `conf`)로 복사하거나 혹은  `keystoreFile` 절대경로로 지정
* `conf/server.xml` 설정

```xml
<Connector port="8443" protocol="HTTP/1.1" SSLEnabled="true" maxThreads="150" scheme="https" secure="true" clientAuth="false" sslProtocol="TLS" ketstoreFile="tomcatssl.cer" keystorePass="123qwe" URIEncoding="UTF-8" />
```

## IntelliJ 설정

* Run/Debug Configurations
* Tomcat Server Settings > HTTPs ports > 443 입력

![IntelliJ HTTPS](../img/Server/apply-tomcat-ssl/intellij-https.png)

## Tips

### keytool error:

`keytool` 명령 실행 시 다음과 같은 오류가 발생할 수 있다.

```
keytool error: java.io.IOException: Keystore was tampered with, or password was incorrect
```
이 오류는 `user.home` 디렉토리 내에 이미 `.keystore` 파일이 생성되어 있는 경우 발생을 한다. 그러므로 폴더에서 이 파일을 삭제한 후 `keytool` 명령을 다시 실행한다.

### 한글 인코딩

한글 인코딩이 깨지는 경우가 발생하는데, 아래와 같이 `server.xml`을 설정할 때 `URIEncoding="UTF-8"`를 넣어주면 된다.

```xml
<Connector port="8443" protocol="HTTP/1.1" SSLEnabled="true" maxThreads="150" scheme="https" secure="true" clientAuth="false" sslProtocol="TLS" ketstoreFile="tomcatssl.cer" keystorePass="123qwe" URIEncoding="UTF-8" />
```

### 서버 실행 중 SSL 오류

위 모든 사항을 적용하고도 Tomcat에서 SSL이 정상작동하지 않는 경우가 있다. 이유는 모르겠으나 Tomcat을 재설치할 경우 잘 동작한다.

## Reference

* [Tomcat SSL 적용](http://ujfish-project.tistory.com/11)
* http://www.oracle.com/technology/global/kr/sample_code/tutorials/bc4jvsm/over/setup.html
* http://www.oracle.com/technology/global/kr/sample_code/tutorials/bc4jvsm/over/setup.html