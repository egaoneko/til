# Tomcat environment variables

### setenv.sh

``catalina.sh``에서 아래와 같이 환경병수를 읽어 온다.

```bash
# Ensure that any user defined CLASSPATH variables are not used on startup,
# but allow them to be specified in setenv.sh, in rare case when it is needed.
CLASSPATH=

if [ -r "$CATALINA_BASE/bin/setenv.sh" ]; then
  . "$CATALINA_BASE/bin/setenv.sh"
elif [ -r "$CATALINA_HOME/bin/setenv.sh" ]; then
  . "$CATALINA_HOME/bin/setenv.sh"
fi
```

``setenv.sh`` 에 원하는 정보를 넣어주면 된다.

```bash
#!/bin/bash

export CATALINA_OPTS="$CATALINA_OPTS -server -Doperation.mode=dev -Dfile.encoding=UTF8 -Dorg.apache.catalina.STRICT_SERVLET_COMPLIANCE=true -Duser.timezone=GMT+9 -Xmx256m -XX:MaxPermSize=52m"
```

### JVM 설정

```bash
#!/bin/bash

CATALINA_OPTS="$CATALINA_OPTS -server -d64 -Xms1G -XX:PermSize=128m -XX:MaxPermSize=128m -XX:+UseG1GC -XX:+AggressiveOpts -Djava.net.preferIPv4Stack=true -Djava.awt.headless=true"
```

#### JVM 메모리 옵션

* -server : Server HotSpot JVM을 사용한다. Server HotSpot JVM은 Desktop용 Appkication을 구동하는데 유리하다. 성능 최적화(Optimization)에 필요한 모든 과정을 최대한으로 수행한다. Application의 시작시간은 느리지만, 일정 시간이 흐르면 Client HotSpot JVM에 비해 훨씬 뛰어난 성능을 보장한다. (참고) Jdk 1.5부터는 Server-Class머신인 경우에는 -server 옵션이 기본적용된다. Server-Class머신이란 2장 이상의 CPU와 2G이상의 메모리를 갖춘 머신을 의미한다.

* -Xms<size> : Java Heap의 최초 크기(Start Size)를 지정한다. Java Heap은 -Xms 옵션으로 지정한 크기로 시작하며 최대 -Xmx옵션으로 지정한 크기만큼 커진다. Sun HotSpt JVM 계열에서는 최초 크기와 최대 크기를 동일하게 부여할 것을 권장한다. 크기의 동적인 변경에 의한 오버 헤들를 최소화하기 위해서이다.

* -Xmx<size> : Java Heap의 최대 크기(Maximum Size)를 지정한다. -Xms 옵션으로 지정한 크기로 시작하며 최대 -Xmx옵션으로 지정한 크기만큼 커진다. Sun HotSpt JVM 계열에서는 최초 크기와 최대 크기를 동일하게 부여할 것을 권장한다. 크기의 동적인 변경에 의한 오버 헤들를 최소화하기 위해서이다.

* -XX:NewSize=<Value> : Young Generation의 시작 크기를 지정한다. Young Generation의 크기는 NewSize옵션(시작크기)과 MaxNewSize옵션(최대크기)에 의해 결정된다

* -XX:MaxNewSize=<value> : Young Generation의 최대 크기를 지정한다. Young Generation의 크기는 NewSize옵션(시작크기)과 MaxNewSize옵션(최대크기)에 의해 결정된다

* -XX:PermSize=<size> : Permanent Generation의 최초 크기를 지정한다. Permanent Generation의 최대 크기는 MaxPermSize옵션에 의해 지정된다. 많은 수의 Class를 로딩하는 Application은 크기의 Permanent Generation을 필요로 하며, Permanent Generation의 크기가 작아서 Class를 로딩하지 못하면 Out of Memory Error가 발생한다.

* -XX:MaxPermSize=<size> : Permanent Generation의 최대 크기를 지정한다. Permanent Generation의 시작 크기는 PermSize옵션에 의해 지정된다. 많은 수의 Class를 로딩하는 Application은 PermSize와 MaxPermSize옵션을 이용해 Permanent Generation의 크기를 크게 해주는 것이 좋다. Permanent Generation의 크기가 작을 경우에는 Out of Memory Error가 발생한다.

* -XX:NewRatio=<value> : Young Generation과 Old Generation의 비율을 결정한다. 예를 들어 이 값이 2이면 Yong:Old = 1:2가 되고, Young Generation의 크기는 전체 Java  heap의 1/3이 된다.

* -XX:SurvivorRatio=<value> : Survivor Space와 Eden Space의 비율을 지정한다. 만일 이 값이 6이면, To Survivor Ratio:From Survivor Ratio:Eden Space = 1:1:6 이 된다 즉, 하나의 Survivor Space의 크기가 Young Generation의 1/8 이 된다. Survivor Space의 크기가 크면 Tenured Generation으로 옮겨가기 전의 중간 버퍼 영역이 커지는 셈이다. 따라서 Full GC의 빈도를 줄이는 역할을 할 수 있다. 반면 Eden Space의 크기가 줄어들므로 Mirror GC가 자주 발생하게 된다.

* -XX:ReservedCodeCacheSize=<value> : Code Cache의 최대 사이즈의 크기(byte) 설정

* -XX:+DisableExplicitGC : System.gc 호출에 의한 Explicit GC를 비활성화한다. RMI에 의한 Explicit GC나 Applicaton에서의 Explicit GC를 원천적으로 방지하고자 할 경우에 사용된다.

* -XX:+UseConcMarkSweepGC : CMS Collector를 사용할 지의 여부를 지정한다. GC Pause에 의한 사용자 응답 시간 저하 현상을 줄이고자 할 경우에 사용이 권장된다.

* -XX:+AggressiveOpts : 최신 HotSpot VM 성능을 최적화

* -Djava.net.preferIPv4Stack : IPv4인식하도록 만들기 위해

* -Djava.awt.headless : 비윈도우 환경에서 GUI 클래스를 사용할 수 있게 하는 옵션

### Reference

* [[tomcat] setenv.sh](http://knight76.tistory.com/entry/tomcat-setenvsh)
* [[Tomcat] 톰켓 catalina.sh 메모리 설정 및 로그 위치 변경](http://javafactory.tistory.com/entry/Tomcat-%ED%86%B0%EC%BC%93-catalinash-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EC%84%A4%EC%A0%95-%EB%B0%8F-%EB%A1%9C%EA%B7%B8-%EC%9C%84%EC%B9%98-%EB%B3%80%EA%B2%BD)
