# Get windows system info

## Bat

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

## NSIS

```bash
# define installer name
Name "PC Info"
OutFile "pc_info.exe"

# uncomment the following line to make the installer silent by default.
; SilentInstall silent

# set desktop as install directory
InstallDir $DESKTOP

Function .onInit
  MessageBox MB_YESNO|MB_ICONQUESTION "PC 정보를 출력하시겠습니까?" \
    /SD IDYES IDNO no IDYES yes
  
  yes:
    SetSilent silent
    CreateDirectory "$INSTDIR\report"
    MESSAGEBOX MB_OK|MB_ICONINFORMATION "PC 정보 문서의 출력을 시작합니다.(1/2)"
    ExecWait '"$COMMONFILES\Microsoft Shared\MSInfo\msinfo32" /report "$INSTDIR\report\report.txt"'
    MESSAGEBOX MB_OK|MB_ICONINFORMATION "PC 정보 문서의 출력을 시작합니다.(2/2)"
    ExecWait '"$COMMONFILES\Microsoft Shared\MSInfo\msinfo32" /nfo "$INSTDIR\report\report.nfo"'
    MESSAGEBOX MB_OK|MB_ICONINFORMATION "출력을 완료하였습니다."
    Goto done
  no:
    SetSilent silent
    Goto done
  done:
FunctionEnd
 
# default section start
Section
SectionEnd
```

## Reference

* [시스템 정보(MSINFO32) 스위치를 사용하는 방법](https://support.microsoft.com/ko-kr/help/300887/how-to-use-system-information-msinfo32-command-line-tool-switches)