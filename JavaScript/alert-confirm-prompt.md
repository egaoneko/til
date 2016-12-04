# alert & confirm & prompt

## alert

```javascript
var returnValue = alert("Alert");
document.write(returnValue);
```

경고 메세지를 전달하기 위한 대화상자를 표시

* `확인` 버튼만 띄워준다
* 리턴값 : `undefined`(리턴값 없음)

## confirm

```javascript
var returnValue = confirm("Confirm");
document.write(returnValue);
```

사용자의 확인을 받기 위한 대화 상자를 표시

* `확인`, `취소` 버튼을 띄워준다
* 리턴값 : `true` or `false`


## prompt

```javascript
var returnValue = prompt("Prompt", "");
document.write(returnValue);
```

사용자로 부터 내용을 입력받을 수 있는 대화상자를 표시

* `확인`, `취소` 버튼과 `입력창`을 띄워준다
* 리턴값 : `null` or `입력값`

## Reference

* [간단한 창 띄우기(alert / confirm / prompt)](http://ggoreb.tistory.com/21)