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

* [HBase Downloads](Apache download site)
* [Scripts](https://github.com/naver/pinpoint/tree/master/hbase/scripts)

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

```
2015-05-18 09:56:17,825 INFO  [main] Configuration.deprecation: hadoop.native.lib is deprecated. Instead, use io.native.lib.available
2015-05-18 09:56:38,614 ERROR [main] zookeeper.RecoverableZooKeeper: ZooKeeper exists failed after 4 attempts
2015-05-18 09:56:38,615 WARN  [main] zookeeper.ZKUtil: hconnection-0x3e5e898b0x0, quorum=localhost:2181, baseZNode=/hbase Unable to set watcher on znode (/hbase/hbaseid)
org.apache.zookeeper.KeeperException$ConnectionLossException: KeeperErrorCode = ConnectionLoss for /hbase/hbaseid
```

### Reference

* [Pinpoint GitHub](https://github.com/naver/pinpoint)
* [D2 Hellow world](http://d2.naver.com/helloworld/1194202)
* [Naver Pinpoint 소개 및 설치(2) - Pinpoint 설치](http://dev2.prompt.co.kr/34)
* [HDFS - HBase 설치](http://develop.sunshiny.co.kr/887)
