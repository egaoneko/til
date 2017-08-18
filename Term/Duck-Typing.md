# Duck Typing(덕 타이핑)

## 의미

컴퓨터 프로그래밍 분야에서 덕 타이핑(duck typing)은 동적 타이핑의 한 종류로, 객체의 변수 및 메소드의 집합이 객체의 타입을 결정하는 것을 말한다. 클래스 상속이나 인터페이스 구현으로 타입을 구분하는 대신, 덕 타이핑은 객체가 어떤 타입에 걸맞은 변수와 메소드를 지니면 객체를 해당 타입에 속하는 것으로 간주한다. “덕 타이핑”이라는 용어는 다음과 같이 표현될 수 있는 덕 테스트에서 유래했다. (덕은 영어로 오리를 의미한다.)

> 만약 어떤 새가 오리처럼 걷고, 헤엄치고, 꽥꽥거리는 소리를 낸다면 나는 그 새를 오리라고 부를 것이다.

덕 타이핑에서는, 객체의 타입보다 객체가 사용되는 양상이 더 중요하다. 예를 들면, 덕 타이핑이 없는 프로그래밍 언어로는 오리 타입의 객체를 인자로 받아 객체의 걷기 메소드와 꽥꽥거리기 메소드를 차례로 호출하는 함수를 만들 수 있다. 반면에, 같은 함수를 덕 타이핑이 지원되는 언어에서는 인자로 받는 객체의 타입을 검사하지 않도록 만들 수 있다. 걷기 메소드나 꽥꽥거리기 메소드를 호출 할 시점에서 객체에 두 메소드가 없다면 런타임 에러가 발생하고, 두 메소드가 제대로 구현되어 있다면 함수는 정상적으로 작동한다. 여기에는 인자로 받은 객체가 걷기 메소드와 꽥꽥거리기 메소드를 갖고 있다면 객체를 오리 타입으로 간주하겠다는 암시가 깔려있다. 바로 이 점이 앞에서 인용한 덕 테스트의 사상과 일치하기 때문에 덕 타이핑이라는 이름이 붙었다.

* [덕 타이핑 - 위키백과](https://ko.wikipedia.org/wiki/%EB%8D%95_%ED%83%80%EC%9D%B4%ED%95%91)

## Example

### JavaScript : Promise.resolve

```javascript
const resolved = {
  then(resolve) { resolve(42);}
};

const rejected = {
  then(resolve, reject) { reject('error'); }
}

const p1 = Promise.resolve(resolved);
const p2 = Promise.resolve(rejected);
p1.then(function (value) { console.log(value); }); // 42
p2.catch(function (value) { console.log(value); }); // error
```

JavaScript에서 `thenable`객체를 전달해주면 Promise 객체로 취급한다.

### JavaScript : Iterator

```javascript
arr=[1,2,3];
iter=arr[Symbol.iterator](); //덕 타이핑
iter.next().value(); // 1
iter.next().value(); // 2
```

`Symbol.iterator`라는 key를 주면 `Iterator`라고 취급한다.