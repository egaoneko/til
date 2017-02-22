# apply, call and bind difference

## apply()

```javascript
fun.apply(thisArg, [argsArray])
```

> `apply()` 메소드는 주어진 `this`값과 `arguments`로 함수를 호출합니다. `arguments`에는 배열(또는 유사배열객체 array-like object)가 올 수 있습니다. [Function.prototype.apply()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

## call()

```javascript
fun.call(thisArg[, arg1[, arg2[, ...]]])
```

> `call()` 메소드는 주어진 `this` 값 및 각자에게 제공된 인수를 갖는 함수를 호출합니다. [Function.prototype.call()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

## apply() vs call()

```
차이는 `call()`은 **인수 목록**, 반면에 `apply()`는 **인수 배열** 하나를 받는다는 점이다.
```

## bind()

```javascript
fun.bind(thisArg[, arg1[, arg2[, ...]]])
```

> `bind()` 메소드는 호출될 때 그 `this` 키워드를 제공된 값으로 설정하고 새로운 함수가 호출될 때 제공되는 주어진 순서의 선행 인수가 있는 새로운 함수를 생성합니다. [Function.prototype.bind()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

## apply() vs call() vs bind()

```javascript
var test = "test global";
var a = {test: "test a"};
var b = {test: "test b"};
var fun = function(p1, p2) {
	console.log(p1, p2);
    console.log(this.test);
}
var bindedFun = fun.bind(a, "p1");

fun();
// undefined undefined
// test global

fun.call(a, "p1", "p2");
// p1 p2
// test a

fun.apply(a, "p1", "p2");
// p1 p2
// test a

bindedFun.call(b, "p3", "p4");
// p1 p3
// test a
```
