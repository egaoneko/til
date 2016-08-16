# vim 화면 분할

```
:(v)split FileName
```

### 화면 나누기

#### 수직 창 분할

:sp
:10sp (새로 만드는 수직 창을 10칸짜리로)
:new filename

#### 파일 브라우징

:20vs ./

#### 수평 창 분할

:vsplit
:vs filename (파일네임은 옵션, 안지정하면 빈 화면으로)
:20vs


### 화면 이동 및 정리, 닫기

#### 커서 이동

Ctrl + w, w   - 다음으로 커서 이동
Ctrl + w, W    - 이전으로 커서 이동)
Ctrl + w, [H J K L]  - 커서 이동


#### 화면 닫기

:q (현재 화면 닫기)
:qa (모두 닫기)

CTRL + w, c(or q)  (현재화면 닫기)
CTRL + W, o (현재 화면만 남기고 모두 닫기)

#### 화면 위치 바꾸기

CTRL + w, r   - 순환적으로 위치 바꾸기
CTRL + w, r   - 다음 화면과 위치 바꾸기


#### 창 크기 변경

Ctrl + w, = (창 크기 균등하게)
Ctrl + w, _ (현재 창의 높이를 최대로)
Ctrl + w, | (현재 창의 너비를 최대로)

Ctrl + w, [n] + (창의 높이를 n 만큼 증가)
:resize +n
Ctrl + w, [n] - (창의 높이를 n 만큼 감소)
:resize -n

z[n] (현재 창의 높이를 n으로 설정)

Ctrl + w, [n] > (현재 창의 너비를 n만큼 증가)
Ctrl + w, [n] < (현재 창의 너비를 n만큼 감소)

### Reference

* [화면 나누기 및 버퍼 관리](http://anster.tistory.com/64)