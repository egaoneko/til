# Bash script to check running process

```bash
#!/bin/sh

SERVICE="$1"
RESULT=`ps -a | sed -n /${SERVICE}/p`

if [ "${RESULT:-null}" = null ]; then
    echo "not running"
else
    echo "running"
fi
```