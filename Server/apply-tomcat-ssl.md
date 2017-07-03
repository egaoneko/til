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

## Tips

### keytool error:

`keytool` 명령 실행 시 다음과 같은 오류가 발생할 수 있습니다.

```
keytool error: java.io.IOException: Keystore was tampered with, or password was incorrect
```
이 오류는 `user.home` 디렉토리 내에 이미 `.keystore` 파일이 생성되어 있는 경우 발생을 합니다.
그러므로 폴더에서 이 파일을 삭제한 후 keytool 명령을 다시 실행하십시오.

### 한글 인코딩

```xml
<Connector port="8443" protocol="HTTP/1.1" SSLEnabled="true" maxThreads="150" scheme="https" secure="true" clientAuth="false" sslProtocol="TLS" ketstoreFile="tomcatssl.cer" keystorePass="123qwe" URIEncoding="UTF-8" />
```

## Reference

* [Tomcat SSL 적용](http://ujfish-project.tistory.com/11)
* http://www.oracle.com/technology/global/kr/sample_code/tutorials/bc4jvsm/over/setup.html
* http://www.oracle.com/technology/global/kr/sample_code/tutorials/bc4jvsm/over/setup.html