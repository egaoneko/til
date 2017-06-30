# Tomcat encoding problem

## conf/server.xml

> tomcat 문서를 살펴보면 HTTP body의 입력 스트림은 기본으로 UTF-8을 이용하여 디코딩한다. 반면 URL은 `ISO-8859-1`으로 디코딩한다.
브라우저에서 Form 데이터는 기본설정으로 UTF-8 인코딩하므로 Form으로 전송되는 POST는 문제가 없었던 것이다. 그럼 tomcat의 설정에서 URL 인코딩 방법을 변경하기만 하면 문제는 해결된다.

```xml
<Connector port="8080" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443"
               URIEncoding="UTF-8"/>

<!-- mod_jk -->
<Connector port="8009" protocol="AJP/1.3" URIEncoding="UTF-8"/>
```


> 물론 URL상의 모든 문자들은 `UTF-8`로 인코딩되어 있어야 하고 이는 WWW 컨소시엄의 권장사항이다.

```xml
<a href="show.xhtml?p=<%=java.net.URLEncoder("넥스트리소프트", "UTF-8")%>">넥스트리</a>
```

## Reference

* [Tomcat 한글 Encoding 문제](http://greatkim91.tistory.com/50)