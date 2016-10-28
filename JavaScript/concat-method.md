# concat method

`concat()` 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환한다.

```javascript
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
```
>* valueN
>새 배열으로 합쳐질 배열 또는 값입니다.
>
>concat은 이 메서드를 호출한 배열 뒤에 각 인수를 순서대로 붙인 새 배열을 만듭니다. 인수가 배열이면 그 성분이 순서대로 붙고, 배열이 아니면 그 인수 자체가 붙습니다.
>
>concat은 this나 인수로 넘겨진 배열의 내용을 바꾸지 않고 대신 주어진 배열들을 합친 뒤 그것의 얕은 사본(shallow copy)을 반환합니다. 원본 배열의 요소들은 새 배열에 다음과 같은 방법으로 복사됩니다.
>
>* 실제 객체가 아닌 객체 참조: concat은 새 배열에 객체 참조를 복사합니다. 원본 배열과 새 배열에서 같은 객체를 가리키게 됩니다. 즉, 참조된 객체가 수정되면 그 내용이 새 배열과 원본 배열 둘 다에서 나타납니다.
>* String 객체나 Number 객체가 아닌 문자열과 수: concat은 새 배열에 문자열과 수의 값을 복사합니다.
>
>[Array.prototype.concat()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

### Example

```javascript
var alpha = ['a', 'b', 'c'],
    numeric = [1, 2, 3];

var alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // 결과: ['a', 'b', 'c', 1, 2, 3]
```

```javascript
var alpha = ['a', 'b', 'c'];

var alphaNumeric = alpha.concat(1, [2, 3]);

console.log(alphaNumeric); 
// 결과: ['a', 'b', 'c', 1, 2, 3]
```

```javascript
function getItems (data) {
  var result = [];
  if (Array.isArray(data)) {
    return data;
  } else {
    for (var key in data) {
      var value = data[key];
      result = result.concat(getItems(value));
    }
  }
  return result;
}
```
