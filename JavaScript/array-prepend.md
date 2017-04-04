# Array prepend

> `unshift()` 메소드(method)는 하나 또는 그 이상의 요소(element)를 배열(array)의 시작점에 추가하고 배열의 새 길이(length)를 반환한다.
>
> [Array.prototype.unshift()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

```javascript
arr.unshift([element1[, ...[, elementN]]])
```

## Example

```javascript
var arr = [1, 2];

arr.unshift(0); // result of call is 3, the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1); // = 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-3]);
// arr is [[-3], -2, -1, 0, 1, 2]
```
