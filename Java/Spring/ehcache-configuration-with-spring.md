# Spring에서 EHCache 설정

### 개요

> 지금 소개해드릴 Ehcache는 오픈소스(아파치 라이센스 2.0)이면서 표준 기반 cache 입니다. 자바 기반의 cache로 폭넓게 사용 되고 있는데 이것은 다른 인기있는 라이브러리 또는 프레임워크와 같이 통합해서 사용하고 있기 때문입니다.
>참고로 Ehcache는 독립적인 캐시 데몬을 가지지 않습니다. 이것은 memCached와 다른점이고 또한 원격 지원을 하는 Redis와도 다른점입니다.
>이말인즉슨 Ehcache는 어플리케이션 구동시 내부적으로 동작합니다. 따라서 원격 캐시 서버를 사용하며 생길 수 있는 네트워크 지연 또는 단절로 인한 데이터 유실이 거의 없을뿐더러 같은 로컬 머신일지라도 별도로 구동하는 memCached와는 다르게 EhCache는 라이프사이클을 애플리케이션과 함께 합니다. [Ehcache Usage & Example(Basic)](http://jdm.kr/blog/207)

### Dependencies
```xml
<!-- EHCache -->
<dependency>
	<groupId>org.springframework</groupId>
	<artifactId>spring-context</artifactId>
	<version>3.2.9.RELEASE</version>
</dependency>
<dependency>
	<groupId>net.sf.ehcache</groupId>
	<artifactId>ehcache</artifactId>
	<version>2.9.0</version>
</dependency>
```

### ehcache.xml
``WEB-INF/ root`` 디렉토리에 다음과 같은 내용의 ``ehcache.xml``파일을 생성한다.

```xml
<ehcache>
    <diskStore path="java.io.tmpdir"/>

    <cache name="ticketCache"
           maxEntriesLocalHeap="10000"
           maxEntriesLocalDisk="1002"
           eternal="false"
           diskSpoolBufferSizeMB="20"
           timeToIdleSeconds="300" timeToLiveSeconds="600"
           memoryStoreEvictionPolicy="LFU"
           transactionalMode="off">
        <persistence strategy="localTempSwap" />
    </cache>
</ehcache>
```

### bean 설정
아래의 코드를 applicationContext.xml 등 spring configuration파일에 설정한다.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:cache="http://www.springframework.org/schema/cache"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
              http://www.springframework.org/schema/beans/spring-beans.xsd
              http://www.springframework.org/schema/cache
              http://www.springframework.org/schema/cache/spring-cache.xsd">

    <cache:annotation-driven cache-manager="cacheManager"/>
    <bean id="cacheManager" class="org.springframework.cache.ehcache.EhCacheCacheManager">
        <property name="cacheManager">
            <bean class="org.springframework.cache.ehcache.EhCacheManagerFactoryBean">
                <property name="configLocation" value="/WEB-INF/ehcache.xml"/>
                <!--property name="configLocation" value="classpath:ehcache.xml"/-->
            </bean>
        </property>
    </bean>
</beans>
```

### Example

```java
    @Cacheable(value = "ticketCache", key="#ticketNo")
    public Ticket findByNo(int ticketNo) {
        String sql = "SELECT * FROM ticket where ticket_no = ?";

        slowQuery(2000);
        System.out.println("findByNo is running...");

        return jdbcTemplate.queryForObject(sql,
                new Object[]{(long)ticketNo},
                new RowMapper<Ticket>() {
                    @Override
                    public Ticket mapRow(ResultSet rs, int rowNum) throws SQLException {
                        return new Ticket(rs.getInt(1), rs.getInt(2), rs.getInt(27));
                    }
                }
        );
    }

    private void slowQuery(long seconds) {
        try {
            Thread.sleep(seconds);
        } catch (InterruptedException e) {
            throw new IllegalArgumentException(e);
        }
    }
```

### Reference
* [Ehcache Documentation](http://www.ehcache.org/documentation/)
* [XML Configuration](http://www.ehcache.org/generated/2.10.2/html/ehc-all/#page/Ehcache_Documentation_Set%2Fco-cfgbasics_xml_configuration.html%23)
* [Example web.xml Configuration](http://www.ehcache.org/generated/2.10.2/html/ehc-all/#page/Ehcache_Documentation_Set%2Fre-sam_webxml_configuration_example.html%23)
* [Code Samples](http://www.ehcache.org/documentation/2.8/code-samples.html)
* [Ehcache Usage & Example(Basic)](http://jdm.kr/blog/207)
* [EhCache](http://www.egovframe.go.kr/wiki/doku.php?id=egovframework:rte2:fdl:ehcache)
* [EHCache를 이용한 캐시 구현](http://javacan.tistory.com/entry/133)
* [Spring Caching and Ehcache example](http://www.mkyong.com/spring/spring-caching-and-ehcache-example/)
* [Spring 3.1과 ehcache](https://sonegy.wordpress.com/2011/12/29/spring-3-1%EA%B3%BC-ehcache/)
* [spring cache의 적용(ehcache)](http://ironheel.tistory.com/44)
* [스프링 데이터 레디스](http://arahansa.github.io/docs_spring/redis.html)