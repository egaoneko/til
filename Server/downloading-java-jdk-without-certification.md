# 인증없이 Java JDK 다운로드 하기

```
wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" [URL]
```

상단의 코드에 ``[URL]``부분에 다운로드 받고자하는 URL을 넣어 사용하면 된다.

### UPDATED FOR JDK 8u92

##### RPM:
```
wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u92-b14/jdk-8u92-linux-x64.rpm
```

##### TAR GZ:

```
wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u92-b14/jdk-8u92-linux-x64.tar.gz
```

##### RPM using curl:

```
curl -v -j -k -L -H "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u92-b14/jdk-8u92-linux-x64.rpm > jdk-8u92-linux-x64.rpm
```

>-j -> junk cookies
>-k -> ignore certificates
>-L -> follow redirects
>-H [arg] -> headers
>curl can be used in place of wget.

### UPDATE FOR JDK 7u79

##### TAR GZ:

```
wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/7u79-b15/jdk-7u79-linux-x64.tar.gz
```

##### RPM using curl:

```
curl -v -j -k -L -H "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/7u79-b15/jdk-7u79-linux-x64.rpm > jdk-7u79-linux-x64.rpm
```

### ORIGINAL ANSWER FROM 9th June 2012

```
wget --no-cookies --header "Cookie: gpw_e24=http%3A%2F%2Fwww.oracle.com" "http://download.oracle.com/otn-pub/java/jdk/7/jdk-7-linux-x64.tar.gz"
```

### Reference

* [[stack overflow]Downloading Java JDK on Linux via wget is shown license page instead](http://stackoverflow.com/questions/10268583/downloading-java-jdk-on-linux-via-wget-is-shown-license-page-instead)

