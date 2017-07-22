# CSV & Excel download

## Controller
```java
@RequestMapping("/export")
public String export() {
    return "export";
}
```

## View
```java
<META HTTP-EQUIVE="CONTENT-TYPE" CONTENT="TEXT/HTML; CHARSET=KSC5601">
<%@page language="java" trimDirectiveWhitespaces="true" %>
<%@ page language="java" contentType="text/html; charset=utf-8" %>
<%@ page import="java.io.ByteArrayOutputStream" %>
<%@ page import="java.net.URLDecoder" %>
<%@ page import="org.apache.commons.codec.binary.Base64" %>
<%

    //xlsx, csv, xml 등의 형식을 작성하여 base64 로 인코딩하여 data 파라메터로 post 요청을 합니다.
    //참고로 org.apache.commons.codec.binary.Base64 클래스 사용을 위해는 commons-codec-1.4.jar 파일이 필요합니다.


    ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

    String data = request.getParameter("data"); // 파라메터 data
    String extension = request.getParameter("extension"); // 파라메터 확장자
    String fileName = request.getParameter("filename"); // 파라메터 파일명
    fileName = URLDecoder.decode(fileName);
    fileName = java.net.URLEncoder.encode(fileName, "UTF-8").replace("+", "%20").replace("%5B", "[").replace("%5D", "]").replace("%3A", ":").replace(
            "%28", "(").replace("%29", ")");

    byte[] dataByte = Base64.decodeBase64(data.getBytes()); // 데이터 base64 디코딩

    // csv 를 엑셀에서 열기 위해서는 euc-kr 로 작성해야 함.
    if (extension.equals("csv")) {
        String sting = new String(dataByte, "utf-8");
        outputStream.write(sting.getBytes("euc-kr"));
    } else {
        outputStream.write(dataByte);
    }

    String filename = fileName + "." + extension; // 다운로드 될 파일명

    response.reset();
    response.setContentType("application/octet-stream");
    response.setHeader("Content-Disposition", "attachment; filename=" + filename);
    response.setHeader("Content-Length", String.valueOf(outputStream.size()));

    out.clear();
    pageContext.pushBody();
    ServletOutputStream sos = response.getOutputStream();
    sos.write(outputStream.toByteArray());
    sos.flush();
    sos.close();
%>
```

## Sender

```javascript
var form = $('<form action="/report/export.nhn" method="post"></form>');
form.append($('<input>', {
    'name': 'extension',
    'value': 'csv',
    'type': 'hidden'
}));
form.append($('<input>', {
    'name': 'filename',
    'value': 'test',
    'type': 'hidden'
}));
form.append($('<input>', {
    'name': 'data',
    'value': window.btoa(data),
    'type': 'hidden'
}));
form.appendTo('body').submit();
```

* Unicode base64 encoding은 [base64 encoding decoding](../javascript/base64-encoding-decoding.md) 를 참조

## Tips

```
sylk 파일임을 확인했지만 로드할 수 없습니다.
```

CSV 파일로 저장할때 위와 같은 경고를 볼 수 있는데, 이 경우는 첫번째 컬럼에 ID라는 문자가 있어서 발생한다. 제거하면 정상 작동한다.

* [SYLK 파일 형식이 잘못되었을 경우 해결방법](https://m.blog.naver.com/PostView.nhn?blogId=okydoky0&logNo=10147259406&proxyReferer=https%3A%2F%2Fwww.google.co.kr%2F)
