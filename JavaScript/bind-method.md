# bind 메서드

```javascript
fun.bind(thisArg[, arg1[, arg2[, ...]]])
```

>bind() 메서드는 호출 시 this 예약어와 함수의 파라미터 일부가 주어진 값으로 미리 설정되는 새로운 함수를 생성한다. 새로 만들어진 함수를 호출할 때, this 예약어의 값은 bind()에 주어진 첫 번째 인자이며, 함수의 파라미터는 bind()에 주어진 두 번째 부터의 파라미터이다.

>[Function.prototype.bind()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)


### Example

```javascript
var p = "window.p";

var obj = {
	p : "obj.p"
};

setTimeout(function() {
	console.log(this.p);   // "window.p"
}, 1000);

setTimeout( function() {
	console.log(this.p);    // "obj.p"
}.bind(obj), 1000);
```

기본적으로 핸들러로 호출되는 람다함수(익명함수)들의 this는 전역객체(window)이기 때문에 이밴트 핸들러의 콜백함수로 호출이될때도 특정 객체와 연결하여 this를 유지 하고싶을때 bind 함수로 해결할수 있다. bind함수가 실행 될때, 함수를 특정객체의 범위에 묶어버리는 것이다.

### Reference

* [[JavaScript] bind메서드 - 함수 this를 변경](http://mylife365.tistory.com/81)