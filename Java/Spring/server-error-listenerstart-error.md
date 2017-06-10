# SEVER: Error listenerStart 오류

### Error
```
SEVERE: Error listenerStart
SEVERE: Context [/xxxxx] startup failed due to previous errors
```

### Solution
```xml
<context-param>
	<param-name>contextConfigLocation</param-name>
	<param-value>
		/WEB-INF/spring/applicationContext.xml
		/WEB-INF/spring/nbase-arc-config.xml,
		/WEB-INF/spring/ehcache-config.xml
	</param-value>
</context-param>
```

``web.xml`` 및 ``/WEB-INF/**.xml``에 설정을 잘 못 한 경우였다. 특히 ``<beans>``의 속성 값 설정에서도 오류가 발생하니 확인해보자.

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:cache="http://www.springframework.org/schema/cache"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
              http://www.springframework.org/schema/beans/spring-beans.xsd
              http://www.springframework.org/schema/cache
              http://www.springframework.org/schema/cache/spring-cache.xsd">
```
