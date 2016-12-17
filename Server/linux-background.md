# Linux background

* jobs  : 현재 백그라운드로 돌아가는 프로그램 리스트
* fg : 백그라운드로 실행되는 프로그램을 포그라운드
* & :  프로세스를 백그라운드로 실행
* nohup : 터미널에서 로그아웃을 해도 실행시킨 프로그램은 종료되지 계속 실행
 
```bash
#>  top &                << top을 백그라운드로 실행

#>   jobs                   << 백그라운드로 실행되는 프로그램을 확인
[1]+  Stopped                 top
#>   fg %1                 << 백그라운드로 실행되는 top명령을 다시 불러움

nohup /usr/local/java/bin/java -jar XDreamyi3shop.jar &
```

## Reference

* [
리눅스 - 프로세스 백그라운드 실행](http://mustbegames.tistory.com/18)