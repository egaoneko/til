# NDC & MDC

로깅은 복잡한 분산 응용에서 매우 유용하다. 실생활에 쓰이는 대다수의 복잡한 분산 시스템들은 멀티쓰레드로 동작하고, 웹프로그램도 역시 멀티쓰레드로 동작한다. 이때 각 서블릿은 동시에 여러 클라이언트들의 요청을 처리하지만, 해당 서블릿에 작성된 로깅코드는 같다.

한 클라이언트의 로깅 출력은 다른 클라이언트의 그것과 구분 되어져야 할 필요가 있는데, 이것을 위한 하나의 접근법이 바로 클라이언트당 서로 다른 로깅 쓰레드를 실행하는 것이다. 그러나 이 솔루션은 항상 이상적인 것은 아니다. 보다 덜 복잡한 접근법은 각 로깅 출력에 몇가지의 클라이언트에 특징적인 정보를 같이 출력하는 것이다.

## NDC(Nested Diagnostic Context)

log4j 의 NDC 클래스는 NDC 스택안의 정보를 관리하기 위해 아래의 메소들을 이용한다.

* `public static void pop()` : `context` 를 종료할때 이 메소드가 호출됨
* `public static void push(String message)` : 현재 쓰레드를 위한 `diagnostic context` 를 추가한다.
* `public static void remove()` : 쓰레드를 종료할때 호출됨. 해당 특정 쓰레드를 위한 `diagnostic context` 를 제거한다.

`NDC` 클래스내의 모든 메소드들이 정적 메소드인 점에 주목하자. `NDC` 는 문맥정보의 스택으로써 쓰레드별로 관리되어진다. 한 쓰레드의 `run()` 메소드를 떠날때 `NDC` 의 `remove()` 메소드가 호출되는지 확인하는 것이 매우 중요하다. 이것은 쓰레드의 GC 를 보장한다.
흥미있는 것은, `NDC` 클래스의 `inherit(Stack stack)` 메소드를 호출함으로써 다른 쓰레드로부터 `NDC` 를 상속할 수 있다.
이것은 우리가 2개의 서로 다른 쓰레드들간에 문맥정보를 비교하길 원하는 경우에 매우 유용하다.


## MDC(Message Diagnostic Context)

`MDC` 는 `java.util.Map` 형식을 이용하여 클라이언트 특징적인 데이타를 저장하기 위한 메카니즘이다. 이 `Map` 의 `key` 는, `appender` 와 함께 사용되어진 `Layout` 객체와 함께 명시되어진 `conversion pattern` 안에서, 그것의 `value` 에 의해 대치될 수 있다.

`MDC` 클래스 클래스는 `Map` 안에 저장된 `key` 와 `value` 를 조작하기 위해 아래의 메소드들을 가진다.

* `public static Object get(String key)` : `key` 와 연관된 `Object` 를 얻음
* `public static void put(String key, Object value)` : `key` 와 연관된 `Object` 를 저장
* `public static void remove(String key)` : `key` 와 연관된 `Object` 매핑을 제거

## Example

다음은 `MDC`, `NDC` 객체와 관련된 개념을 설명한다.

우리가 멀티쓰레드로 동작되는 자바 서블릿 프로그램을 가졌다고 상상하자. 그리고 이 서블릿은 동시에 여러 클라이언트들의 요청을 처리한다고 가정하자. 우리는 클라이언트의 `IP` 처럼 각 클라이언트에 유일한 정보와 함께 로그를 출력할 것이다. 각 클라이언트의 요청을 위한 각각의 로깅 출력을 구별하기 위해 `MDC` 와 `NDC` 를 이용할 것이다.

`doPost()` 메소드내에 다음 코드를 넣는 것으로 시작한다.

```java
public void doPost(HttpServletRequest req, HttpServletResponse res) throws Exception {
    String remoteAddress = req.getRemoteAddr();
    String remoteHost = req.getRemoteHost();
    
    // pushing to NDC
    NDC.push(remoteHos);
    // mapping in MDC
    MDC.put("remoteAddress", remoteAddress);
    logger.info("invoked the loggingServlet...");
    PrintWriter writer = res.getWriter();
    writer.println("Check your web server console..");
    writer.flush();
    writer.close();
}
```

`NDC` 안의 `remote host name` 을 얻고 `MDC` 안의 `remote host address` 를 얻는다.
이제 `log4j.properties` 파일을 수정해보자.

```java
log4j.appender.testAppender.layout.conversionPattern=%x    -%X{remoteAddress} %m%n
```

* `%x` : `NDC` 정보를 표시
* `%X{변수명}` : `MDC` 정보를 표시

`MDC` 패턴안에 명시된 변수명이 코드내에서 명시했던 변수명과 동일해야 함을 주의해야한다.

위의 결과를 토대로 로깅 결과를 살펴 보면 아래의 형식으로 출력될 것이다.

```
hostname1 - host address1 invoked the LogingServlet...
hostname2 - host address2 invoked the LogingServlet...
```

`NDC` 와 `MDC` 정보의 이용이 로깅 출력을 구별하는데 있어서 얼마나 유용한지를 분명히 보여준다.

## MDC in Logback

`Request` 또는 사용자별로 특정한 정보를 로그로 남기기 위해서 사용할 수 있는것이 `MDC`이다. `MDC`는 `Mapped Diagnostic Context`의 약자로 쓰레드 별로 존재하는 `Map`과 유사한 객체이다. 하나의 `request`를 처리하기 위해서 `thread`를 사용하므로 이 `MDC`를 이용함으로써 사용자정보를 남길 수 있고 `Logback`은 `MDC`를 이용한 다양한 기능을 제공한다. 일반적인 `web` 환경의 경우 `ServeltFilter`를 이용하여 해당 `MDC`의 정보를 관리하면 좀더 손쉽게 해당정보를 관리할 수 있다.

다음은 `ServletFilter` 를 이용하여 `MDC`의 정보를 기록하는 `MDCServletFilter` 클래스이다. 요청처리전 `requst`와 `session` 정보를 이용하여 필요한 정보를 `MDC`에 넣고 요청이 처리가 완료되면 `MDC`의 값을 `clear` 한다.

```java
    public class MDCServletFilter implements Filter{

        public void doFilter(ServletRequest request, ServletResponse response,
            FilterChain chain) throws IOException, ServletException {
            insertIntoMDC(request);
            try{
                chain.doFilter(request, response); 
            }finally{
                clearMDC();
            }	
        }	
		
        private void insertIntoMDC(ServletRequest request){
            MDC.put(REMOTE_HOST_MDC_KEY, request.getRemoteHost());
		
            if (request instanceof HttpServletRequest){
                HttpServletRequest httpServletRequest = (HttpServletRequest) request;
			
                StringBuffer requestURL = httpServletRequest.getRequestURL();
                if (requestURL != null) {
                    MDC.put(REQUEST_URL_MDC_KEY, requestURL.toString());
		    	}
                HttpSession session = httpServletRequest.getSession();
		    
                if (session != null && session.getAttribute(USER_ID_MDC_KEY) != null){
                    MDC.put(USER_ID_MDC_KEY, (String)session.getAttribute(USER_ID_MDC_KEY));
                }
		    
            }		
        }
    ...
```

**주의할 점은 필터를 이용하여 `MDC`에 기록한 값은 처리가 `request` 처리가 끝난 후 반드시 `clear`를 해줘야 한다는 점이다.**
`MDCServletFilter`는 플러그인 설치시 `web.xml`에 등록이 된다.

```xml
    <filter>
        <filter-name>mdcServletFilter</filter-name>
        <filter-class>....logback.filter.MDCServletFilter</filter-class>
    </filter>
    <filter-mapping>
        <filter-name>mdcServletFilter</filter-name>
        <url-pattern>*.do</url-pattern>
    </filter-mapping>
```

## Refence

* [NDC & MDC ?](http://egloos.zum.com/charmpa/v/2543451)
* [Pro Apache Log4j, Second Edition](https://books.google.co.kr/books?id=vHvY008Zq-YC&pg=PA32&lpg=PA32&dq=MDC+message+diagnostic+context&source=bl&ots=yh8_38YZ5F&sig=BifOgpHuola3QDwtRmOiS7jl7T4&hl=ko&ei=17PJSo-YBYXosQO64dyhBQ&sa=X&oi=book_result&ct=result&resnum=1#v=onepage&q=MDC%20message%20diagnostic%20context&f=false)
* [4.MDC(Mapped Diagnostic Context)](http://dev.anyframejava.org/docs/anyframe/plugin/optional/logback/1.0.0/reference/html/ch04.html)