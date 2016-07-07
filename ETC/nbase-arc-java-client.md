# nBase-ARC java client

### nBase-ARC Introduction

nbase-arc (n-base-ARC) is an open source distributed memory store based on Redis. It provides a zone of clusters where each cluster is composed of synchronously replicated Redis server groups which can scale-in/out without service interruption.

### Compatible libraries
Client is compatible with jedis 2.7.2 and spring data redis 1.3.5.RELEASE.
* jedis(https://github.com/xetorthio/jedis)
* Spring data redis(http://projects.spring.io/spring-data-redis/)

### Usage
Use it as a maven dependency:
```xml
<dependencies>
    <dependency>
        <groupId>com.navercorp</groupId>
        <artifactId>nbase-arc-java-client</artifactId>
        <version>1.4.6</version>
    </dependency>
</dependencies>
```

To use it just:
```java
    final GatewayConfig config = new GatewayConfig();
    config.setZkAddress("zookeeper-address");
    config.setClusterName("cluster-name");

    final GatewayClient client = new GatewayClient(config);
    client.set("name", "clark kent");
    String name = client.get("name");

    client.destroy();
```

Configure RedisClusterTemplate:
```xml
    <bean id="gatewayConfig" class="com.navercorp.redis.cluster.gateway.GatewayConfig">
      <property name="zkAddress" value="zookeeper-address""/>
      <property name="clusterName" value="cluster-name"/>
    </bean>

    <bean id="redisCulsterConnectionFactory" class="com.navercorp.redis.cluster.spring.RedisClusterConnectionFactory" destroy-method="destroy">
        <property name="config" ref="gatewayConfig"/>
    </bean>

    <bean id="redisTemplate" class="com.navercorp.redis.cluster.spring.StringRedisClusterTemplate">
        <property name="connectionFactory" ref="redisCulsterConnectionFactory"/>
    </bean>
```


```java
@Autowired
private StringRedisClusterTemplate redisTemplate;

public void usage() {
     redisTemplate.opsForValue().set("name", "clark kent", 10, TimeUnit.SECONDS);
     String value = redisTemplate.opsForValue().get("name");
}
```

### Reference

* [nBase-ARC github](https://github.com/naver/nbase-arc)
* [nBase-ARC: Redis Cluster](http://d2.naver.com/helloworld/614607)