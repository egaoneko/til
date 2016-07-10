# Linux에 Maven 설치하기

### Maven 다운로드

* [Maven downloads page - Apache](https://maven.apache.org/)

### 압축 풀기

```bash
gunzip apache-maven-3.3.9-bin.tar.gz
tar xvf apache-maven-3.3.9-bin.tar.gz
```

### 폴더 이동 및 심볼릭 링크 생성

```bash
sudo mv apache-maven-3.3.9 /opt
sudo ln -s /opt/apache-maven-3.3.9 /opt/maven
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
export M2_HOME=/opt/maven
export PATH=$PATH:$M2_HOME/bin
```

### setting.xml 수정하기

``%M2_HOME%/conf/settings.xml`` 파일을 찾아 수정한다. ``repository`` 는 기본적으로 ``[사용자계정]/.m2`` 이며, 사용자 정의로 설정을 할 수가 있다. 

```xml
<!– localRepository
   | The path to the local repository maven will use to store artifacts.
   |
   | Default: ~/.m2/repository
  –>
  <localRepository>/data/repository/maven</localRepository>
```

### 설치확인

```bash
mvn -version
```

### Reference

* [centos maven 설치](https://devblood.wordpress.com/2013/10/08/centos-maven-%EC%84%A4%EC%B9%98/)