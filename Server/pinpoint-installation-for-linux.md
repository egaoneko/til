# Linux에 Pinpoint 설치하기

Pinpoint는 대규모 분산 시스템의 성능을 분석하고 문제를 진단, 처리하는 플랫폼이다.

### Requirements

* JDK 6 installed
* JDK 7 installed
* JDK 8 installed
* Maven 3.2.x+ installed
* JAVA_6_HOME environment variable set to JDK 6 home directory.
* JAVA_7_HOME environment variable set to JDK 7 home directory.
* JAVA_8_HOME environment variable set to JDK 8+ home directory.

### Pinpoint QuickStart

```bash
git clone https://github.com/naver/pinpoint.git
cd pinpoint
mvn install -Dmaven.test.skip=true
```

#### Maven build error
```
...
[ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoFailureException
```

Maven build 도중에 에러가 발생한다면, ``JAVA_6_HOME``, ``JAVA_7_HOME``, ``JAVA_8_HOME`` 세 path가 모두 등록되어있는지 확인해보자.

* [github issue](https://github.com/naver/pinpoint/issues/241)

### HBase 설치

**Download & Start** - Run ``quickstart/bin/start-hbase.sh``
**Initialize Tables** - Run ``quickstart/bin/init-hbase.sh``

* [HBase Downloads](Apache download site)
* [Scripts](https://github.com/naver/pinpoint/tree/master/hbase/scripts)
* [HDFS - HBase 설치](http://develop.sunshiny.co.kr/887)

```bash
gzip -d hbase-0.94.26.tar.gz
tar xvf hbase-0.94.26.tar

$HBASE_HOME/bin/start-hbase.sh
$HBASE_HOME/bin/hbase shell hbase-create.hbase
```

* [github issue](https://github.com/naver/pinpoint/issues/1000)

#### HBase와 ZooKeeper 관계성(의존)

* HBase는 ZooKeeper(분산 상호조정)에 의존적이며 기본적으로 ZooKeeper 인스턴스를 사용하여 전반적인 클러스터 상태를 관리
* ZooKeeper를 통해서 리전(RegionServer) 할당

##### ZooKeeper 중지시 에러 발생

HBase Shell 실행중 주키퍼 접속이 되지 않을때, list 검색은 되지만 테이블 신규  생성은 되지 않음

* [HDFS- Zookeeper 설치](http://develop.sunshiny.co.kr/886)
* [Zookeeper 설치](http://blog.iotinfra.net/?p=1375)

```
2015-05-18 09:56:17,825 INFO  [main] Configuration.deprecation: hadoop.native.lib is deprecated. Instead, use io.native.lib.available
2015-05-18 09:56:38,614 ERROR [main] zookeeper.RecoverableZooKeeper: ZooKeeper exists failed after 4 attempts
2015-05-18 09:56:38,615 WARN  [main] zookeeper.ZKUtil: hconnection-0x3e5e898b0x0, quorum=localhost:2181, baseZNode=/hbase Unable to set watcher on znode (/hbase/hbaseid)
org.apache.zookeeper.KeeperException$ConnectionLossException: KeeperErrorCode = ConnectionLoss for /hbase/hbaseid
```

###### Solution

``quickstart/hbase/hbase/logs/hbase-username.log``에서 아래와 같은 오류를 확인했다.

```
hbase java.net.BindException: Cannot assign requested address
```

``/etc/hosts``에서 ``localhost``의 설정을 아래와 같이 변경하면 정상적으로 작동하였다.

```bash
127.0.0.1 UG-BLR-L030.example.com UG-BLR-L030 localhost
192.168.0.105 UG-BLR-L030.example.com UG-BLR-L030
::1 UG-BLR-L030.example.com UG-BLR-L030
```

* [[Hbase] 구동시에 regionserver 에서 마스터서버 주소를 localhost 로 접속을 시도할 경우 (Attempting connect to Master server at localhost)](http://blog.leekyoungil.com/?p=173)
* [Cannot assign requested address](http://stackoverflow.com/questions/30012822/cannot-assign-requested-address)

### Start Pinpoint Daemons

**HBase** - Run ``quickstart/bin/start-hbase.sh``

**Collector** - Run `quickstart/bin/start-collector.sh`

**Web UI** - Run `quickstart/bin/start-web.sh`

**TestApp** - Run `quickstart/bin/start-testapp.sh`

### Stopping

**HBase** - Run `quickstart/bin/stop-hbase.sh`

**Collector** - Run `quickstart/bin/stop-collector.sh`

**Web UI** - Run `quickstart/bin/stop-web.sh`

**TestApp** - Run `quickstart/bin/stop-testapp.sh`

### agent 설정

``{$TOMCAT_HOME}/bin/setenv/sh`` 에 아래와 같이 세팅한다. 그리고 해당 경로에 ``pinpoint.config`` 파일에 ``collector Server ip``를 수정하고 톰캣을 실행시킨다.

```bash
PINPOINT_AGENT_HOME={Pinpoint Agent 경로} # "/home1/user/pinpoint/quickstart/agent/target/pinpoint-agent"
PINPOINT_AGENT_ID={Agent ID} # "$HOSTNAME.tomcat1"
PINPOINT_APPLICATION_NAME={Application Name} # "test.server"

CATALINA_OPTS=" -javaagent:$PINPOINT_AGENT_HOME/pinpoint-bootstrap-`cat $PINPOINT_AGENT_HOME/VERSION`.jar -Dpinpoint.agentId=$PINPOINT_AGENT_ID -Dpinpoint.applicationName=$PINPOINT_APPLICATION_NAME"
```

### Reference

* [Pinpoint GitHub](https://github.com/naver/pinpoint)
* [QuickStart Guide](https://github.com/naver/pinpoint/blob/master/quickstart/README.md)
* [Installation Guide](https://github.com/naver/pinpoint/blob/master/doc/installation.md)
* [D2 Hellow world](http://d2.naver.com/helloworld/1194202)
* [Naver Pinpoint 소개 및 설치(2) - Pinpoint 설치](http://dev2.prompt.co.kr/34)
* [[CentOS 7.1] 네이버 오픈소스 APM PINPOINT 설치하기](http://ifmkl.tistory.com/265)

