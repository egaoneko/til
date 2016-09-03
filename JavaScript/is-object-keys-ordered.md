# Object key 순서 보장 여부

```javascript
var obj = {  A : "나는", B : "당신을", C : "사랑합니다" };
 
for (var key in obj) {
    console.log(obj[key]);
}
```

IE : 나는 당신을 사랑합니다
Chrome : 나는 당신을 사랑합니다

```javascript
var obj = {  3 : "나는", 1 : "당신을", 2 : "사랑합니다" };
 
for (var key in obj) {
    console.log(obj[key]);
}
```

IE : 나는 당신을 사랑합니다
Chrome : 당신을 사랑합니다 나는

### ECMA-262 Section 12.6.4
The mechanics of enumerating the properties … is implementation dependent.
(속성을 열거하는 방법은 구현에 의존적이다.)
