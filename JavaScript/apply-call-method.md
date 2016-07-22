# apply & call method

함수에는 ``apply()``와 ``call()`` 두 가지 메서드가 있다. 이들 메서드는 모두 소유자인 함수를 호출하면서 ``this``를 넘기는데, 결과적으로는 함수 내부에서 ``this`` 객체의 값을 바꾸는 것이나 마찬가지이다.

### apply method

```javascript
fun.apply(thisArg, [argsArray])
```

>``apply()``메소드는 주어진 ``this``값과 ``arguments``로 함수를 호출한다.
``arguments``에는 배열(또는 유사배열객체 array-like object)가 올 수 있다.
>
> 이 함수의 구문은 거의 ``call()``구문과 유사하다. 기본적으로 다른 점은 ``call()``은 함수에 전달될 여러 개의 인자를 받는데 비해, ``apply()``는 배열로 된 하나의 인자를 받는다는 점이다.
>
>[Function.prototype.apply()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

### apply example

```javascript
function sum(num1, num2) {
	return num1 + num2;
}

function callSum1(num1, num2) {
	return sum.apply(this, arguments);	// arguments 객체를 넘깁니다.
}

function callSum2(num1, num2) {	// 배열을 넘깁니다. 
	return sum.apply(this, [num1, num2]);
}

alert(callSum1(10, 10));	// 20
alert(callSum2(10, 10));	// 20
```

### call method

```javascript
fun.call(thisArg[, arg1[, arg2[, ...]]])
```

>``call()``메소드는 주어진 ``this``값 및 각자에게 제공된 인수를 갖는 함수를 호출한다.
>
>이 함수 구문은 ``apply()``와 거의 동일하지만, 근본 차이는 ``call()``은 인수 목록, 반면에 ``apply()``는 인수 배열 하나를 받는다는 점이다.
>
>[Function.prototype.call()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

### call example

```javascript
function sum(num1, num2) {
	return num1 + num2;
}

function callSum(num1, num2) {
	return sum.call(this, num1, num2);
}

alert(callSum(10, 10));	// 20					
```

### Addition

``apply()``와 ``call()``의 진가는 매개변수를 전달해 호출하는 것이 아니라 ``this``를 바꾸는데 있다.

```javascript
window.color = "red";
var o = {color: "blue"};

function sayColor() {
	alert(this.color);
}

sayColor();	// red

sayColor.call(this);	// red
sayColor.call(window);	// red
sayColor.call(o)	// blue				
```

아래와 같이 ``sayColor()``에서 ``bind()``를 호출하면서 객체 ``o``를 넘겨 ``objectSayColor()``라는 함수를 생성하면, ``objectSayColor()``함수의 ``this``는 ``o``에 묶이므로 전역에서 함수르 호출하더라도 항상 ``blue``를 표시한다. [[bind method]](./bind-method)

```javascript
window.color = "red";
var o = {color: "blue"};

function sayColor() {
	alert(this.color);
}

var objectSayColor = sayColor.bind(o);
objectSayColor();		// blue	
```

### Reference

* [함수의 apply(), call() 메서드 - FLORAKID-LIB](http://www.florakid.com/florakid_lib/sub/javascript/apply_call_method.html)
