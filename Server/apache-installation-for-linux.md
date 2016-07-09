# Linux에 Apache 설치하기

### 다운받아야 할 패키지들

* [apache](http://www.apache.org/dyn/closer.cgi) : [http://mirror.navercorp.com/apache/httpd/](http://mirror.navercorp.com/apache/httpd/)
* [apr/apr-util](https://apr.apache.org) : [http://mirror.navercorp.com/apache/apr/](http://mirror.navercorp.com/apache/apr/)
* [pcre](http://www.pcre.org) : [ftp://ftp.csx.cam.ac.uk/pub/software/programming/pcre/](ftp://ftp.csx.cam.ac.uk/pub/software/programming/pcre/)

### Apache 다운로드 및 압축 해제  

```bash
wget http://mirror.navercorp.com/apache/httpd/httpd-2.4.23.tar.gz
tar xvfz httpd-2.4.23.tar.gz
```

### Apache 설치를 위한 존속성 패키지들 설치

#### apr 설치 및 컴파일

```bash
wget http://mirror.navercorp.com/apache/apr/apr-1.5.2.tar.gz
tar xvfz apr-1.5.2.tar.gz
cd apr-1.5.2.tar.gz
./configure
make
make install
```

#### apr-util 설치 및 컴파일

```bash
cd ..
wget http://mirror.navercorp.com/apache/apr/apr-util-1.5.4.tar.gz
tar xvfz apr-util-1.5.4.tar.gz
cd apr-util-1.5.4
./configure --with-apr=/usr/local/apr
make
make install
```

#### apr-util 설치 및 컴파일

```bash
cd ..
wget ftp://ftp.csx.cam.ac.uk/pub/software/programming/pcre/pcre-8.39.tar.gz
tar xvfz pcre-8.39.tar.gz
cd pcre-8.39
./configure --prefix=/usr/local/pcre
make
make install
```

### Apache 컴파일

```bash
cd ..
cd httpd-2.4.23
./configure --prefix=/usr/local/apache --enable-http  --enable-info --enable-cgi --enable-so --with-pcre=/usr/local/pcre
make
make install
```

### Apache 구동

```bash
/usr/local/apache/bin/httpd -k start
```

### 발생한 오류들

#### configure error no acceptable c compiler found in $path

```bash
rpm -qa|grep gcc
sudo yum -y install gcc
```

``gcc``가 설치되어 있다면 설치된 경로를 PATH(``/etc/profile``)에 추가한다. 없다면 ``gcc``를 설치한다.

[configure에서 no acceptable C compiler found in $PATH 오류](http://junemoon.tistory.com/30)

#### rm: cannot remove `libtoolT': No such file or directory

```bash
cp -arp libtool libtoolT
```

[apache source 설치시 장애 상황](http://leeahnlee.tistory.com/18)
 
#### configure: error: You need a C++ compiler for C++ support.

```bash
sudo yum -y install gcc gcc-c++
```

[[CentOS] C, C++ 컴파일러를 설치하자](http://blog.acu.pe.kr/28)
 
#### configure error size of void * is less than size of long

아파치를 설치하기 위해선 앞서 설치한 ``apr``, ``apr-util``, ``pcre``가 필요한데, 이 패키지들과 ``Apache``의 버전이 안맞아서 나는 에러이다. ``httpd``버전을 변경해 보자.

[[Apache] error: size of "void*" is less than size of "long"](http://blog.naver.com/PostView.nhn?blogId=fantasisty&logNo=20202489087&categoryNo=36&parentCategoryNo=0&viewDate=¤tPage=1&postListTopCurrentPage=1&from=postView)

### Reference

* [[LINUX/CENTOS] 컴파일을 이용하여 APACHE 최신버전을 설치하자](http://www.atblog.co.kr/?p=6255)