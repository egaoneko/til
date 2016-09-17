# Rasberry Pi

### Mac에서 설치

* [Raspberry PI SD Installer OS X](https://github.com/RayViljoen/Raspberry-PI-SD-Installer-OS-X)

```bash
sudo ./install ~/Downloads/wheezyDebian.img # 설치할 SD 카드 선택
```

### SSH를 통한 접속

```bash
ssh pi@raspberrypi.local
# password는 raspberry
```

### 설정

```bash
sudo raspi-config
```

1. **Expand Filesystem** : 메모리 카드 전체 용량을 사용하도록 파티션 크기 재조정.
2. **Change User Password** : pi 계정의 비밀번호 재설정.
3. Enable Boot to Desktop/Scratch : X-Window 환경으로 부팅하도록 설정.
4. **Internationalisation Options** : 언어, 기준시간, 키보드 레이아웃 설정. (en_GB.UTF-8 UTF-8, en_US.UTF-8 UTF-8, ko_kr.UTF-8 UTF-8)
5. Enable Camera : 라즈베리 파이 카메라 단자 켜기/끄기 설정.
6. Add to Rastrack : Rastrack 서버서 이 라즈베리 파이 추가.
7. Overclock : 오버클럭 설정.
8. **Advanced Options** : 추가 설정.
9. About raspi-config : 이 설정에 대해.

#### Wifi 설정

```bash
sudo iwlist wlan0 scan
sudo vi /etc/wpa_supplicant/wpa_supplicant.conf

sudo ifdown wlan0
sudo ifup wlan0
ifconfig
```

```bash
network={
    ssid="HARUAIR_AP"
    psk="goawayfreerider"
}
```

* [Raspberry Pi 3](http://maker1st.tistory.com/2)의 경우 와이파이와 블루투스가 내장되어있다. 와이파이의 경우 Raspberry Pi 및 공유기의 지역 설정을 `US`로 맞춰주어야 한다고 한다.
* Menu - Preferences - Raspberry Pi Configuration - Localisation - Set Locale - US(USA)

#### 호스트명 변경

```bash
sudo vi /etc/hostname # rassberrypi
sudo vi /etc/hosts # 127.0.1.1 rassberrypi
sudo /etc/init.d/hostname.sh
sudo reboot
```

### ClusterHAT

```bash
ssh pi@controller.local
# password는 raspberry
# Zero는 p1, p2, p3, p4
```

```bash
# clusterhat <action> <devices>
clusterhat on all # Turn power to all Pi Zero on
clusterhat off all # Turn power to all Pi Zero off
clusterhat on p1 # Turn power on to Pi Zero in slot P1
clusterhat on p1 p3 p4 # Turn power to Pi Zeros in slot P1, P3 and P4 on
```

* [CLUSTERHAT](http://clusterhat.com/)
* [ClusterHAT Review for the Raspberry Pi Zero](http://climbers.net/sbc/clusterhat-review-raspberry-pi-zero/)

네트워크에 연결하면, 연결되어있는 Raspberry Pi Zero들 또한 네트워크에 연결되어, 주소로 연결할 수 있다.

# USB 케이블 네트워크 공유

microSD의 `config.txt` 파일에 아래 내용에 대한 주석 해제

```
dtoverlay=dwc2
```

System Pereference > Share > Internet Share > RNDIS/Ethernet Gadget 선택

### Reference

* [한글 키보드 및 언어설정 하기](http://www.rasplay.org/?p=3786)
* [Raspbian 설치 및 초기 설정](http://ssal.me/dev/?p=463)
* [라즈베리 파이 2 구입 및 설치기](http://haruair.com/blog/2903)
* [라즈베리파이 제로 USB 케이블 연결만으로 설정하고 사용하기](http://blog.naver.com/alkydes/220759201374)