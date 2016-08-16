# Windows 에서 이름의 파일 & 폴더 삭제

```
The source file name(s) are larger than is supported by the file system. Try moving to a location which has a shorter path name, or try renaming to shorter name(s) before attempting this operation.
```

### 파일

```bash
ren ~%2FMo~1 2m
rm 2m
```

### 폴더

```bash
mkdir empty
robocopy "empty" "longpath" /MIR
rm -r empty
rm -r longpath
```

### Reference

* [긴 이름의 파일/폴더 삭제하는 법](http://www.sysnet.pe.kr/Default.aspx?mode=2&sub=0&detail=1&pageno=0&wid=1576&rssMode=1&wtype=0)

