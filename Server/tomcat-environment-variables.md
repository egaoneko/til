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

### Reference

* [[tomcat] setenv.sh](http://knight76.tistory.com/entry/tomcat-setenvsh)
