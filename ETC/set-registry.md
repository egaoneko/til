# Set registry

## Bat

```bash

if exist %windir%\SysWOW64 (
	reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\<APP>" /v <Reg> /t REG_DWORD /d 0 /f
)else (
	reg add "HKEY_LOCAL_MACHINE\SOFTWARE\<APP>" /v <Reg> /t REG_DWORD /d 0 /f
)
```

## NSIS

```bash
!include LogicLib.nsh

# define installer name
Name "Seat WebGL Installer"
OutFile "seat_webgl_installer.exe"
RequestExecutionLevel admin ;Require admin rights on NT6+ (When UAC is turned on)
 
# set desktop as install directory
InstallDir $DESKTOP
 
# default section start
Section
 
# Write registry
ClearErrors
SetRegView 64
ReadRegStr $0 HKLM "SOFTWARE\Wow6432Node\Microsoft\Internet Explorer\MAIN" "EnableWebGLPerformanceMonitor"
SetRegView 32
ReadRegStr $0 HKLM "SOFTWARE\Microsoft\Internet Explorer\MAIN" "EnableWebGLPerformanceMonitor"

${IF} $0 == 0
	MESSAGEBOX MB_OK "이미 설치되어 있습니다."
${ELSE}
	SetRegView 64
	WriteRegDWORD HKLM "SOFTWARE\Wow6432Node\Microsoft\Internet Explorer\MAIN" "EnableWebGLPerformanceMonitor" 0
	SetRegView 32
	WriteRegStr HKLM "SOFTWARE\Microsoft\Internet Explorer\MAIN" "EnableWebGLPerformanceMonitor" 0
	MESSAGEBOX MB_OK "설치되었습니다."
${ENDIF}

# define uninstaller name
WriteUninstaller $INSTDIR\seat_webgl_uninstaller.exe
 
 
#-------
# default section end
SectionEnd
 
# create a section to define what the uninstaller does.
# the section will always be named "Uninstall"
Section "Uninstall"
 
# Always delete uninstaller first
Delete $INSTDIR\seat_webgl_uninstaller.exe

# Delete registry
SetRegView 64
WriteRegStr HKLM "SOFTWARE\<APP>" "<Reg>" ""
SetRegView 32
WriteRegStr HKLM "SOFTWARE\<APP>" "<Reg>" ""
MESSAGEBOX MB_OK "삭제되었습니다."

SectionEnd
```

## 확인

* `Window + R` > `regedit`