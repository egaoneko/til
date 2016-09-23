# contain string in string

### include method

``includes()`` 메서드는 하나의 문자열이 다른 문자열에 포함되어 있는지를 결정하고, 그 결과를 true 또는 false 로 반환한다.

```javascript
str.includes(searchString[, position])
```

> * searchString
>문자열 내에 찾기를 원하는 문자열입니다.
> * position
> 옵션입니다. searchString을 찾기 시작하는 문자열 내의 위치값을 나타내며, 기본값은 0입니다. [String.prototype.includes()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

#### Example

```javascript
var str = 'To be, or not to be, that is the question.';

console.log(str.includes('To be'));       // true
console.log(str.includes('question'));    // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('To be', 1));    // false
console.log(str.includes('TO BE'));       // false
```

#### Polyfill

```javascript
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }
    
    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}
```