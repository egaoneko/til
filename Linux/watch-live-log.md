# 실시간으로 로그 보기

```bash
[root@ls ]# tail -f /var/log/messages
```

`/var/log/messages` 파일을 실시간으로 화면에 출력한다(log 모니터링에 사용됨)

* f : 파일의 마지막 10라인을 실시간으로 계속해서 출력
* F : 파일 변동 시 실시간으로 보여주되 로그파일처럼 특정 시간이 지난 후 파일이 변하게 되면 새로운 파일을 오픈하여 보여줌 (다시 명령을 실행할 필요가 없음)

### Reference

* [리눅스 tail 명령어 [실시간으로 로그 보기]](http://windfree.tistory.com/40)