# Pinpoint 를 이용한 성능진단

* APM(Application Performance Management) : 장애 검증
  * Pinpoint
  * Scouter
  * glowroot
* Profiling Tool : 튜닝을 위한 것, CPU, Memory, Coverage
 * Your Kit
 * JProfiler
 * JProbe

## 구성도

* HBase Storage, Pinpoint Web UI가 다시 설치등을 하면 Pinpoint Agent도 다시 실행
* Thrift : 정해진 포맷으로 주면 알아서 처리해줌

## 설치

* [pinpoint - Github](https://github.com/naver/pinpoint)
* git clone https://github.com/naver/pinpoint.git
* git checkout 1.6.x
* mvn install -Dmaven.test.skip=true
  * java home이 잘 설정되어있지 않으면 오류 (6, 7, 8)
* brew install unix2dos # Mac 만 해당
  * cd pinpoint/quickstart
  * dos2unix bin/*.sh
  * dos2unix conf/*
* bin/start-hbase.sh # In pinpoint/quickstart
* bin/init-hbase.sh
* bin/start-collector.sh
  * tail -f logs/quickstart.collector.log
* bin/start-testapp.sh
* bin/start-web.sh

## 개요

* [Pinpoint - Deview](https://www.slideshare.net/deview/164-pinpoint)
* hbase는 하나를 써야한다.
```
/Library/Java/JavaVirtualMachines/jdk1.8.0_112.jdk/Contents/Home/bin/java
-javaagent:/Users/donghyun/Workspace/pinpoint/pinpoint/quickstart/agent/target/pinpoint-agent/pinpoint-bootstrap-1.6.1.jar
-Dpinpoint.agentId=test-agent # 이걸 다르게
-Dpinpoint.applicationName=TESTAPP
-classpath /usr/local/Cellar/maven/3.3.9/libexec/boot/plexus-classworlds-2.5.2.jar -Dclassworlds.conf=/usr/local/Cellar/maven/3.3.9/libexec/bin/m2.conf -Dmaven.home=/usr/local/Cellar/maven/3.3.9/libexec -Dmaven.multiModuleProjectDirectory=/Users/donghyun/Workspace/pinpoint/pinpoint/quickstart org.codehaus.plexus.classworlds.launcher.Launcher -f /Users/donghyun/Workspace/pinpoint/pinpoint/quickstart/testapp/pom.xml clean package tomcat7:run -Dmaven.pinpoint.identifier=pinpoint-quickstart-testapp -Dmaven.pinpoint.version=1.6.1
```
* BCI(Byto Code Instrumentation)
  * ASM
  * BCEL
  * Javassist
* Dapper

## 설정

* conf/pinpoint.config
  * collector 설정
  * 프로파일러 설정
