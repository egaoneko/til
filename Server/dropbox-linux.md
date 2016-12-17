# Dropbox linux

## 설치

* 32-bit:

```bash
$ cd ~ && wget -O - "https://www.dropbox.com/download?plat=lnx.x86" | tar xzf -
```

* 64-bit:

```bash
$ cd ~ && wget -O - "https://www.dropbox.com/download?plat=lnx.x86_64" | tar xzf -
```

* locale 설정

```bash
$ sudo locale-gen ko_KR.UTF-8
```

```bash
$ sudo vi /etc/default/locale
LANG="ko_KR.UTF-8"
LANGUAGE="ko_KR:ko:en_US:en"
```

```bash
$ locale
LANG=ko_KR.UTF-8
LANGUAGE=ko_KR:ko:en_US:en
LC_CTYPE="ko_KR.UTF-8"
LC_NUMERIC="ko_KR.UTF-8"
LC_TIME="ko_KR.UTF-8"
LC_COLLATE="ko_KR.UTF-8"
LC_MONETARY="ko_KR.UTF-8"
LC_MESSAGES="ko_KR.UTF-8"
LC_PAPER="ko_KR.UTF-8"
LC_NAME="ko_KR.UTF-8"
LC_ADDRESS="ko_KR.UTF-8"
LC_TELEPHONE="ko_KR.UTF-8"
LC_MEASUREMENT="ko_KR.UTF-8"
LC_IDENTIFICATION="ko_KR.UTF-8"
LC_ALL=
```

```bash
# ValueError: unknown locale: UTF-8 in Python
# ~/.profile

export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
```

## init.d 스크립트

```bash
$ sudo vi /etc/init.d/dropbox

#!/bin/sh
#dropbox service
DROPBOX_USERS="username"
  
DAEMON=.dropbox-dist/dropboxd
  
start() {
   echo "Starting dropbox..."
   for dbuser in $DROPBOX_USERS; do
       HOMEDIR=`getent passwd $dbuser | cut -d: -f6`
       if [ -x $HOMEDIR/$DAEMON ]; then
           HOME="$HOMEDIR" start-stop-daemon -b -o -c $dbuser -S -u $dbuser -x $HOMEDIR/$DAEMON
       fi
   done
}
  
stop() {
   echo "Stopping dropbox..."
   for dbuser in $DROPBOX_USERS; do
       HOMEDIR=`getent passwd $dbuser | cut -d: -f6`
       if [ -x $HOMEDIR/$DAEMON ]; then
           start-stop-daemon -o -c $dbuser -K -u $dbuser -x $HOMEDIR/$DAEMON
       fi
   done
}
  
status() {
   for dbuser in $DROPBOX_USERS; do
       dbpid=`pgrep -u $dbuser dropbox`
       if [ -z $dbpid ] ; then
           echo "dropboxd for USER $dbuser: not running."
       else
           echo "dropboxd for USER $dbuser: running (pid $dbpid)"
       fi
   done
}
  
case "$1" in
  
   start)
       start
       ;;
   stop)
       stop
       ;;
   restart|reload|force-reload)
       stop
       start
       ;;
   status)
       status
       ;;
   *)
       echo "Usage: /etc/init.d/dropbox {start|stop|reload|force-reload|restart|status}"
       exit 1
  
esac
  
exit 0
```

```bash
$ sudo chmod +x /etc/init.d/dropbox
$ sudo update-rc.d dropbox defaults
```

```bash
$ cat /var/log/boot.log | grep dropbox
Starting dropbox...
```

## Backup 스크립트

```bash
$ cd ~/Dropbox
$ mkdir backup
```

```bash
$ vi backup.sh

#! /bin/bash
# script to create a tar backup file
# of the pogo plug device
 
# directory to place backups
BACKUPDIR=/백업파일경로
 
# file name YYYY-MM-DDHH:MM:SS.tgz
BACKUPNAME=`date +%F%T`.tar
 
# remove dashes and colons from file name
BACKUPNAME=${BACKUPNAME//[-|:]/}
 
# root directory for the backup
SOURCE=/백업할폴더
 
# number of sets to keep : 백업 파일 갯수 지정
NUMSETS=5
 
# perform the backup
tar -cvpzf $BACKUPDIR/$BACKUPNAME $SOURCE
 
# delete older files greater than $NUMSET
cd $BACKUPDIR
LINS=$((NUMSETS + 1))
if [[ $(ls $BACKUPDIR | wc -l) > $NUMSETS ]]
then
        stat -c "%Y %n" * | sort -rn | tail -n +"$LINS" |
        cut -d ' ' -f 1 --complement | xargs -d '\n' rm
fi
```

```bash
$ crontab -e

0 2 * * * /root/backup.sh
```