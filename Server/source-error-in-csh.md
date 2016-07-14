# csh에서 source 명령어 오류

### Problem

```bash
$ source .bash_profile

if: Expression Syntax.

$ echo $SHELL
/bin/csh
$ pstree
|-sshd---sshd---sshd---csh
```

csh에서 실행이 되지 않아서 발생하는 오류이다.

### Solution

```bash
$ exec bash
$ pstree
|-sshd---sshd---bash---pstree
```

bash쉘로 수정하면 오류가 발생하지 않는다.

### Reference

* [source 명령어 실행 불가 ( if 에러 )](http://www.sosnote.com/665)