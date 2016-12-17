# Bash script to check running process

```bash
#!/bin/sh

SERVICE="$1"
RESULT=`ps -a | sed -n /${SERVICE}/p`

if [ "${RESULT:-null}" = null ]; then
    echo "Not running: $(date)" >> /var/log/log.txt
else
    echo "Running:  $(date)" >> /var/log/log.txt
fi
```