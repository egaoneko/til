# Linux에 JDK 설치하기

### JDK 다운로드

* [JDK downloads page - Oracle](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
* [인증없이 Java JDK 다운로드 하기](./downloading-java-jdk-without-certification.md)

### 압축 풀기

```bash
gunzip jdk-8-linux-i586.tar.gz
tar -xvf jdk-8-linux-i586.tar
```

### 폴더 이동 및 심볼릭 링크 생성

```bash
sudo mv jdk1.8.0 /usr/local
sudo cd /usr/local
sudo ln -s jdk1.8.0 java
```

### profile 수정하기

```
/etc/profile
~/.bash_profile
```

상단의 profile들 중 필요에 맞게 수정한다.

```bash
sudo vi /etc/profile
sudo source /etc/profile
```

```
JAVA_HOME=/usr/local/java
CLASSPATH=.:$JAVA_HOME/lib/tools.jar
PATH=$PATH:$JAVA_HOME/bin
export JAVA_HOME CLASSPATH PATH
```

### 기본적으로 설정된 java를 변경

```bash
sudo mv /usr/bin/java /usr/bin/java-old
java -version
javac -version
```

### Reference

* [CentOS 6.5 리눅스에 JSP 서비스를 위한 JDK 설치하기](http://originalchoi.tistory.com/19)