# join method

`join()` 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만든다.

```javascript
str = arr.join([separator = ','])
```

> * separator
> 선택적 인수입니다. 배열의 각 요소를 구분할 문자열을 지정합니다. 이 구분자는 필요한 경우 문자열로 변환됩니다. 생략하면 배열의 요소들이 쉼표로 구분됩니다. separator가 빈 문자열이면 모든 요소들이 사이에 아무 문자도 없이 연결됩니다. [Array.prototype.join()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

### Example

```javascript
var a = ['바람', '비', '불'];
var myVar1 = a.join();      // myVar1에 '바람,비,불'을 대입
var myVar2 = a.join(', ');  // myVar2에 '바람, 비, 불'을 대입
var myVar3 = a.join(' + '); // myVar3에 '바람 + 비 + 불'을 대입
var myVar4 = a.join('');    // myVar4에 '바람비불'을 대입
```