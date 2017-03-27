# Get windows system info

```bash
@echo off

:: 폴더 생성
rmdir /s /q report
if not exist "report\" mkdir report

:: 출력 파일 이름
set reportFilename=report

:: 시스템 정보 출력
echo 시스템 정보를 출력하고 있습니다......
Msinfo32 /nfo report\%reportFilename%.nfo

echo 시스템 정보를 출력하고 있습니다......
Msinfo32 /report report\%reportFilename%.txt
```