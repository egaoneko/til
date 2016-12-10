# JavaScript 교육


## DOM

XML을 HTML에서 사용할 수 있도록 확장한 애플리케이션 인터페이스

## BOM

브라우저 자체 또는 커스텀 객체를 다루는 인터페이스

## Primitive Type

* undefined
* null
* Boolean
* Number(IEEE-768)
* String
* Object
* Array
* Symbol (es6)

## Reference Type
* Object

## null, undefined

선언과 동시에 초기화 하는 것을 권장, 초기화 되었는지 여부를 확인 가능

* undefined

```javascript
var a;
console.log(typeof(a)) // undefined
console.log(typeof(b)) // undefined
```

* null

```javascript
var a = null;
console.log(typeof(a)) // object
console.log(typeof(b)) // undefined
```

## Boolean

* Boolean()
* !!value
* Falsy, Truthy Vaules
    * 형 변환시 false가 되는 값
    * false, “(empty string), 0, Nan, null, undefined

## Number

* Number.MAX_VALUE
* Number.MIN_VALUE
* isInfinity()
* NaN(Not a Number) : 숫자를 반환할 것으로 의도한 조작이 실패했을 때 반환됨
	* NaN == NaN => false
	* Number(), parseInt(), parseFload() : 가능하면 명확하게 parseInt(n, 10);을 권장

## 문자열

* immutable
* (“), (“”), (``)(es6 template)
* toString; (Number는 진법 파라미터 존재)
* String();

```javascript
var str1 = “hello”;
var str2 = “world”;
var str3 = `${str1} ${str2}`; // hello world 치환
```

## 객체

* 데이터와 기능의 집합

## 배열

* [];
* new Array(‘a’, ‘b’, ‘c’);
* new Array(5);
* new Array(‘a’); // Type Error

큰 차이는 없으나 리터럴을 권장

## 연산자

* == : 암묵적인 형변환 (===) 를 권장

## 함수

* 기명함수 표현식

stacktrace에서 anonymous 와 add

```javascript
/**
 * anonymous
 */
	var add = function(a, b) {
		return a + b;
	};

	var obj = {
		add: add
	};
	obj.add(5, 10);

/**
 * 기명함수 표현
 */
var add = function add(a, b) {
    return a + b;
};

var obj = {
    add: add
};
obj.add(5, 10);
```

* 유사배열 arguments
    * arguments요소 수정가능 (파라미터값 변경됨, 단방향)
        * arguments 변경시 파라미터값이 변경되지만, 파라미터 값이 변경되도 arguments값은 변경되지 않는다.
    * strict mode 에서는 에러 발생
    * argument 는실행 시점에 초기화 (선언 단계 아님)
    * `if(a.length===+a.length)`로 유사배열 구분(underscore 방식)

```javascript
function add(a, b) {
    a === arguments[0] ;
    b === arguments[1]1;
    return a + b;
}
```

## 원시 값 v.s. 참조 값

* 프로퍼티 추가 여부
* 값 복사 (Call by reference, Call by value)
* 함수 파라미터에 복사되지만, 파라미터를 변경하면 덮어써짐

```javascript
function setName(obj) {
obj.name = "jone";
obj = {name: 'greg'};
}

var person = {};
setName(person);
console.log(person.name); // Jhon
```

## 스코프

* ~~블록스코프~~함수 스코프

```javascript
function test() {
	var i = 10;
    
    for (var i=0; i<10; i+= 1) {
    
    }
}

// 권장
function test() {
	var i = 10;
    
    for (i=0; i<10; i+= 1) {
    
    }
}
```

## 실행 컨텍스트

```javascript
/* GLOBAL */
function foo() {
	/* scope of foo */
    function bar() {/* scope of bar */};
    bar();
}
foo();
```

* 가장 바깥쪽은 실행 환경에 따라 용어가 다름(일반적으로 '전역' 컨텍스트) (window....)
* 함수 단위로 컨텍스트가 쌓임(Execution Context Stack)

## 스코프 이해하기

* Engine : 자바스크립트 실행
* Compiler : 코드 분석 후 실행 가능한 코드 생성
* Scope (Scope Manager): 정의된 식별자 리스트업, 현재 실행중인 코드의 스코프 접근 제어

* Compiler 가 코드를 분석하며 각 함수의 Scope에 변수를 생성(중복되지 않는다면), 그 후 Engine이 값을 할당해가며 실행됨
* Compliation
* LHS, RHS
* Execution Phase

## Compilation

* Compiler, Scope가 대화하는 단계

```javascript
function foo(a) {
	 console.log(a);
}

foo('b');
```

	C | SM
	  | Global (함수 Foo)
	  | Foo (a)

## LHS, RHS

* Left hand side, Right hand side
* 대입의 대상인가, 대입(참조)을 하는 근원인가

```
console.log(a); // LHS

var a = 2; // LHS
```

```javascript
function foo(a) {
	 console.log(a);
}
foo('b');
```

1. foo (4:RHS)
2. a = 2(1:LHS)
3. console(2: RHS)
4. log(a) (LHS, RHS : 둘다)

## Execution Phase

* Engine과 Scope가 대화하는 단계

```javascript
function foo(a) {
	 console.log(a);
}
foo('b');
```

	C | SM
	  | Global (함수 Foo)
	  | Foo (a, 'b')
	EX => SM

## Nested Scope

```javascript
function foo(a) {
	console.log(a + b);
}

var b = 2;

foo(2); //4
```

* Global, foo가 중첩된 상태

1. `+ b` (2:RHS)
2. No `b` declation in `foo` scope
3. Found `b` declaration in `Global` scope

```javascript
function foo(a) {
	b = a;
}

foo(2);
```

* LHS 참조가 만족되지 않는 상황

* strict mode
	* `ReferenceError` `b` is not defined
* non strict mode
	* 전역에 변수 `b` 암묵적 생성

## Lexical Scope (문법 스코프)

* 언어가 스코프를 구성하는 방식(대부분 Lexical Scope)
* 함수가 어디서 또는 어떻게 실행되었는지와 관련 없이 함수가 작성된(선언된) 위치에 따라 결정됨

```javascript
function foo(a) {  // scope: a로 고정(시행되고 끝날때까지 어디서 실행되던지 관련 없이)
	function bar(b) { // scope: b로 고정
    	console.log(a + b);
    }
    bar(3);
}
foo(2);
```

```javascript
function foo(code) {
	eval(code);
    b = 3;
}
foo('var b - 2');

function foo(obj) {
 	with(obj) {
    	b = 2;
    }
}
foo({a: 1});
```

* runtime에 스코프를 수정하기 때문에 느림(최적화 과정이 무시되기 때문)
* 유지보수하기 어려운 코드

## 임의의 Scope 만들기

* 스코프는 함수 단위
* IIFE (Immidiatly Invoked Function Expression)

```javascript
var a = 1;
(function() {
    var a = 3;
    alert(a);
})();

alert(a);
```

## Hoisting

```javascript
function foo() {
	a = 2;
    var a;
    console.log(a);
}
foo();
```

* Compilation 시 스코프는 미리 완성 `{a : undefined}`
* Execution Phase 시 실행순서
* `var a;` 구문이 함수 첫줄로 '끌어올려' 진 현상

```javascript
foo();

function foo() {/* .... */}
```


* 함수 선언문이 `끌어올려`진 현상
* 우선순위는 함수 > 변수

## Closure

* 함수가 자신의 Lexical Scope 외부에서 실행될 때에도 내부의 Lexical Scope에 접근이 가능한 상태

```javascript
function foo() {
	var a = 2;

    // bar는 foo의 scope에 선언됨
    function bar() {
    	alert(a);
    }
    return bar;
}

var baz = foo();

baz(); // bar가 여기서 실행됨 (Global Contenxt)
```

```javascript
function foo() {
       	var a = 2;

       	function bar() {
       		return ++a;
       	}
       	return bar;
}

var baz1 = foo();
var baz2 = foo();

console.log(baz1()); // 3, 변수 1, 함수 1
console.log(baz2()); // 3, 변수 1, 함수 1
// Closure는 Scope가 중요하다!
// 변수 2개, 함수 2개 => 함수 2개를 해결하기 위해서 prototype 사용
```

```javascript
for (var i=1; i <= 5; i++){
	setTimeout(functin() {
    	console.log(i);
    }, i*1000);
}
// 6, 6, 6, 6, 6
// setTimeout가 등록되는 시점에 i는 계속 참조하고 있다.
```

```javascript
for (var i=1; i <= 5; i++){
	setTimeout(function(j){
    	functin() {
    		console.log(i);
    	}}(i), i*1000);
}
// 1, 2, 3, 4, 5
```

## Closure 응용: Module

```javascript
var myModule = (function() {
	function privateMethod() {}

    function publicMethod() {
    	privateMethod();
    }

    return {
    	publicMethod: publicMethod
    }
})();
```

myModule.privateMethod(); // Type Error
myModule.publicMethod(); // OK

## 실습

* Sample 1 : http://codepen.io/everedifice/pen/YpZZjx

## OOP

* 다른 객체 지향 언어와 달리 class가 없다.
* ECMA의 객체 정의 "프로퍼티의 순서가 없는 컬렉션이며 각 프로퍼티는 원시값이나 객체, 함수를 포함한다.
	* 키-값의 쌍으로 이루어진 일종의 해시 테이블
	* 값 = 데이터 or 함수
* 프로토타입을 이용해 프로퍼티의 중복 정의를 피할 수 있다.
* es6부터 class 지원, 프로토타입 상속의 숏컷

## 객체 생성

```javascript
var obj = {};
var obj = new Object();
```
## 프로퍼티 삭제

```javascript
delete obj.name; // 성공하면 true
```

## 객체 삭제

* 객체 자체는 직접 삭제할 수 없다.
* 특정 객체를 참조하고 있는 객체나 클로저가 없다면 GC에 의해 언젠가 삭제된다.

```javascript
delete obj; // obj = undefined
```

## Object.defineProperty

* ES5 스펙(IE9 부터)
* IE8은 DOM만 적용 가능
* 객체의 프로퍼티에 특별한 속성을 적용
* 접근제한자 비스무리

[Object.defineProperty()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 참조

## THIS

객체 자신

## 글로벌 컨테스트에서의 THIS

* 글로벌 컨텍스트: 어떤 함수에도 속하지 않는 함수 밖의 공간
* this = window 객체
* 글로벌 컨텍스트에서 변수나 함수가 정의되면 window 객체에 속하게됨
* 글로벌 컨텍스트에서 this를 사용하는 경우는 거의 없다.

## 메서드 안에서의 THIS

* 메서드 : 실행될때 객체와 연결되서 실행되는 함수
* this = 메서드를 실행할때 연결된 객체

```javscript
todo.getContext(); // 메서드 getContex, this는 todo
```

* 메서드가 정의될때가 아닌 실행할때 결정
* this = 메서드를 **실행할때** 연결된 객체

```javacript
nottodo.getConetext = todo.getContext;
nottodo.getContext(); // this는 nottodo
```

## 함수 안에서의 THIS

* 메서드와 달리 실행할때 연결된 객체가 없다
* window 객체의 메서드로 간주한다.
* this = window
* strict mode에서는 undefined

```javacript
var getConetext = todo.getContext;
getContext();
window.getContext(); // this는 window
```

## 이벤트 리스너 안에서의 THIS

* DOM 이벤트 리스너 안에서의 `this`는 이벤트가 적용되는 엘리먼트

## THIS의 변조

* 함수도 객체(Function의 인스턴스)
* 함수를 실행할때 `this`를 임의로 정해서 실행 -> `call()`, `apply()`
* 함수의 `this`가 변경되지 않도록 고정 -> `bind()`

## call, apply

* `call`이나 `apply`메서드를 이용해 관계를 만들어줄 수 있다.
* 함수안의 this를 원하는 객체를 선택해서 실행한다.
```javascript
func.call(objThis, param);
func.apply(objThis, [param]);
```

## bind

* ES5 스펙
* this가 특정 객체로 고정된 함수를 리턴
* func this는 이제 절대로 안바뀜
	* 다른 객체 안에서 메소드로 실행할때도
	* apply, call과 실행해도

```javascript
func.bind(objThis);
```

## 팩터리 함수로 객체 생성(생성자)

* 중복된 객체를 생성할때 리터럴은 부적합 함.
	* 작성한 todo를 여러개 만들때 불편함(코드 중복)
* 팩터리 패턴: 객체의 생성을 추상화한다.
* 원하는 객체를 만드는 함수를 작성해 여러개의 객체를 만들 수 있게 함.

```javascript
var pserson = {
	name: 'Steve Jobs',
};

function createPerson(name) {
	var newPerson = {};
    newPerson.name = name;
    return newPerson;
}

var person1 = createPerson("Person1");
var person2 = createPerson("Person2");
```

## NEW 연산자로 인한 내부 동작

```javascript
var person = Person('Steve Job');

function Person(name) {
this = window; // 1. 새로운 객체를 만들어 window를 대입한다.
//프로토타입을 연결하는 과정은 일단 생략(이후 설명)
this.name = name; // 2. 함수의 코드를 실행
return undefined; // 3. undefined를 리턴한다.
}

var person = new Person('Steve Job');

function Person(name) {
this = {}; // 1. 새로운 객체를 만들어 this를 대입한다.
//프로토타입을 연결하는 과정은 일단 생략(이후 설명)
this.name = name; // 2. 함수의 코드를 실행
return this; // 3. 만들어진 객체를 리턴한다.
}
```

## 객체 타입 비교

* 생성자를 이용해 객체를 생성하면 생성자의 타입을 가질 수 있다.
* 타입 판단은 `constructor`와 `instanceof` 연산자를 이용할 수 있다.
* 하지만 프로토타입으로 인해 타입조차 변경이 가능해 확실한 판단은 덕타이핑.

```javascript
function Humn() {};
var human = new Human();

human instanceof Object // true
human instanceof Human // true
```

## 생성자만 사용했을때의 문제

* 생성자가 만들어낸 객체들의 메소드들은 메모리상의 중복해서 생성된다.

```javascript
function Person(firstName, lastName) {
	this.firstName = firstName;
    this.lastName = lastName;
    
    getFullName = function () {
    	return this.firstName + this.lastName;
    }
}
```

## 프로토타입의 아이디어

```javascript
function Person(firstName, lastName) {
	this.firstName = firstName;
    this.lastName = lastName;
}

function PersonMethod() {
	return {
        getFullName : function () {
        	return this.firstName + this.lastName;
        }
    }
}
```

## 프로토타입의 적용

* 생성자의 `prototype` 프로퍼티 객체에 공용 메서드들을 추가

```javascript
function Person(firstName, lastName) {
	this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function () {
    	return this.firstName + this.lastName;
}
```

## 프로토타입의 동작 원리

```javascript
var P1= new Person('John', 'Deo');

// 실제 동작 코드
var P1 = new Object();
// __proto__라는 특수한 프로퍼티에 프로토타입 연결
P1.__proto__ = Person.prototype;
Person.call(P1, 'John', 'Deo');

// 프로토타입에 있는 메서드 실행
P1.getFullName();
```

## 프로토타입의 특징

* 이미 객체를 생성한 상태에서 프로토타입의 내용을 동적으로 변경하면 이미 생성된 객체에도 적용된다.

```javascript
var P1 = new Person('John', 'Deo');

Person.prototype.addedMethod = function() {}
P1.addedMethod(); // 정상실행
```

* `constructor` 프로퍼티를 이용해 프로토타입이 사용되는 생성자를 알 수 있다. (타입체크를 위해 사용)

```javascript
P1.prototype.constuctor = Person;
```

* 객체 인스턴스에서는 프로토타입의 내용을 읽을 수는 있지만 쓸수는 없다.

```javascript
var P1 = new Person('John', 'Deo');

P1.getFullName = function() {};
// P1 객체에 새로운 getFullName이 정의됨, overwrite 아님.
// prototype의 getFullName을 가져오고 싶은 경우
// P1.prototype.getFullName.call(P1); 프로토타입의 this를 바라보고 있기 때문에..... P1으로 변경...
```

## 상속 (프로토타입 체인)

* 객체가 상속받을 객체를 `__proto__ ` 프로퍼티로 연결해 프로퍼티들을 상속받는 것
* 프로토타입 체인의 끝은 항상 `Object.prototype`
* 단순히 객체를 만들기만해도 `Object.prototype`과 연결되는 한단계의 프로토타입 체인이 만들어진다.
* 생성자를 만들고 인스턴스를 만들면 두 단계의 체인이 만들어진다.

```javascript
function() {};
Person.prototype = new Object();

var p = new Person();
// 두 단계의 프로토타입 체인이 생성됨
// p -> Person.prototype -> Object.prototype
```

## 프로토타입 체인 상속

* Child타입이 Parent를 상속받도록 해보자.
* p1, p2는 서로 다른 프로토타입 체인을 갖고있다.
* `Child.prototype`이 `Parent.prototpye`의 내용을 알고 싶다.
* `Child.prototype`을 `Parent.prototpye`을 연결

```javascript
function Parent() {}
Parent.prototype.pMethod = function() {};

function Child() {}
Child.prototype = new Parent(); // 이미 만들어진 Child.prototype을 덮어씀
Child.prototype.cMethod = function() {};
Child.cMethod2 = function() {};

var p2 = new Child();
p2.cMethod3 = function() {};

console.log("isParentMethod", p2.hasOwnProperty("pMethod")); // false
console.log("isChildMethod", p2.hasOwnProperty("cMethod")); // false
console.log("isChildMethod", p2.hasOwnProperty("cMethod2")); // false
console.log("isChildMethod", Child.hasOwnProperty("cMethod2")); // true
console.log("isChildMethod", p2.hasOwnProperty("cMethod3")); // true
// 결과가 false인게 맞다.
// p2 객체는 해당 함수를 가지고 있지 않으며, 해당 함수는 prototype이 가지고 있기 때문이다.
// Child.prototype으로 해당 메서드를 실행하면 cMethod에 대해서는 true가 나오겠지만 부모의 prototpye이 가지고 있을 pMethod는 false를 반환할 것이다.
// Child.cMethod2 = function() {}, 이 경우는 static 메소드와 같다. 해당 메서드를 찾으면 false가 맞으며, Child에 this로 메서드를 정의했으면 true가 나왔을 것이다.
```

## 개선된 프로토타입 체인 상속

* 문제점
	1. 프로토타입에 상속받고자하는 생성자의 객체 데이터가 포함될 수 있다.
	2. 프로토타입의 `constructor` 속성이 제대로 설정이 안되어있다.


```javascript
function Parent() {
	this.name = 'myName';
}

....
Child.prototype = new Parent();
....

Child.prototype.name == 'myName' // 정의하지 않은 Name이 들어가있다
Child.prototype.constructor = Parent // Child가 아닌 Person이 설정되어있다.
```

* 개선: 빈 생성자를 이용한다.

```javascript
function Parent() {
	this.name = 'myName';
}

function Ghost() {} // 부모의 프로퍼티 제거
Ghost.prototype = Parent.prototype;

....

Child.prototype = new Ghost();
Child.prototype.constructor = Child

Child.prototype.name == 'undefined'
```

* 개선: ES5의 `Object.create()` 이용,  `Object.create()`는 Ghost 역할을 한다.
* `Object.create()`
	* 인자로 전달된 객체와 프로토타입 체인으로 연결된 객체 리턴

```javascript
function Parent() {
	this.name = 'myName';
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child

Child.prototype.name == 'undefined'
```

## 메서드 오버라이드

* 메서드 오버라이드: 상속받은 메서드를 재정의
* 체인에서 실행 객체와 제일 가까운 메서드가 우선 순위가 높다.
* 제일 우선순위가 높은건 객체 안에 메서드

```javascript
function Parent() {}
Parent.prototype.getName = function() {}; // 우선순위 3

function Child() {}
Child.prototype.getName = function() {}; // 우선순위 2

var p2 = new Child();
p2.getName = function() {}; // 우선순위 1
```

## 실습

```javascript
function Todo (context) {
        this.isComplete = false;
        this.context = context;
}

Todo.prototype.getContext = function(){
    return this.context;
};

Todo.prototype.setComplete = function(isComplete){
    this.isComplete = isComplete;
};

Todo.prototype.print = function () {
    var prefix = this.isComplete? "[완료]" : "[미완료]";
    return prefix + this.getContext();
}

function OfficeTodo(context) {
    Todo.call(this, context);
}
OfficeTodo.prototype = Object.create(Todo.prototype);
OfficeTodo.prototype.constructor = OfficeTodo;
OfficeTodo.prototype.print = function(){
    console.log("Office - " + Todo.prototype.print.call(this));
};

function HomeTodo(context) {
    Todo.call(this, context);
}
HomeTodo.prototype = Object.create(Todo.prototype);
HomeTodo.prototype.constructor = HomeTodo;
HomeTodo.prototype.print = function(){
    console.log("Home - " + Todo.prototype.print.call(this));
};

var officeTodo = new OfficeTodo("자바스크립트 공부하기");
var homeTodo = new HomeTodo("자바스크립트 공부하기");

officeTodo.print();
homeTodo.print();
```