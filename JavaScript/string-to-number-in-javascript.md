# String to Number in JavaScript

### 자동형변환

```javascript
// 숫자를 스트링로 바꾸기
var tt = 2
tt += "";
alert(typeof tt);   // Result : string

// 스트링을 숫자로 바꾸기
tt = "2"
tt *= 1;
alert(typeof tt);    // Result : number
```

### Number(), String() 이용한 타입변환

```javascript
// 숫자를 스트링로 바꾸기
var tt = 2
alert(typeof tt);    // Result : number
tt = String(tt);
alert(typeof tt);    // Result : string

// 스트링을 숫자로 바꾸기
tt = "2"
alert(typeof tt);    // Result : string
tt = Number(tt);
alert(typeof tt);    // Result : number
```

### parseInt(), parseFloat() 이용한 형변환

```javascript
var tt = "2"
alert(typeof tt);    // Result : string
tt = parseInt(tt);
alert(typeof tt);    // Result : number
            
tt = "2"
alert(typeof tt);    // Result : string
tt = parseFloat(tt);
alert(typeof tt);    // Result : number
```

### Reference

* [Javascript에서 String을 Number타입으로 바꾸기](https://blog.outsider.ne.kr/361)