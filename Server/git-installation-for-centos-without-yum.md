# CentOS에 yum없이 Git 설치하기

### Problem

```
Failed to connect to repository : Command "/usr/bin/git config --local credential.username donghyun" returned status code 129: stdout: stderr: error: unknown option `local'
```

Jenkins에서 Git Plugin을 사용하니 상단과 같은 오류 메시지를 보았다. 오류의 원인을 찾아보니 [stack overflow](http://stackoverflow.com/questions/32499990/jenkins-git-plugin-using-local-when-authenticating-with-https)에서 git 버전이 오래된 버전이면 발생한다고 한다.

>he Jenkins git plugin wiki page says
>
>```
>a recent Git runtime is required (1.7.9 minimum, 1.8.x recommended)
>```
>
>Unfortunately, the CentOS 6 (and Red Hat 6) git version is too old (git version 1.7.1), as is the Debian 6 git version (git version 1.7.2.5). The CentOS 7 version and Debian 7 and Debian 8 versions of command line git are new enough to support credentials.

### Solution

```bash
wget http://springdale.math.ias.edu/data/puias/computational/6/x86_64/git-1.8.3.1-1.sdl6.x86_64.rpm
wget http://springdale.math.ias.edu/data/puias/computational/6/x86_64/perl-Git-1.8.3.1-1.sdl6.noarch.rpm
sudo yum remove git -y
sudo yum localinstall git-*.rpm perl-Git-*.noarch.rpm -y
```

### Reference

* [RHEL/CentOS 6에 git 1.8 설치하기](https://www.lesstif.com/pages/viewpage.action?pageId=14745759)
* [stack overflow](http://stackoverflow.com/questions/21820715/how-to-install-latest-version-of-git-on-centos-6-x-7-x)