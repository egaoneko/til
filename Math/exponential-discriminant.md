# Exponential discriminant

```javascript
function isPowSize (size) {
    return ( size & (size - 1) ) === 0;
}

var inputSize = 1023;
console.log(isPowSize(inputSize))
inputSize = 1022;
console.log(isPowSize(inputSize))
inputSize = 1024;
console.log(isPowSize(inputSize))
```