# Round to at N demical places

### Problem

JavaScript에서 소수점 N번째까지 표현된 값을 얻어야한다.

```
Input:
10
1.7777777
9.1

Output:
10
1.78
9.1
```

### Solution1

```javascript
Math.round(num * 100) / 100
```

### Solution2

If value is text type:

```javascript
parseFloat("123.456").toFixed(2);
```

If value is number:

```javascript
var numb = 123.23454;
numb = numb.toFixed(2);
```

There is a downside that values like 1.5 will give "1.50" as the output. A fix suggested by @minitech:

```javascript
var numb = 1.5;
numb = +numb.toFixed(2);
// Note the plus sign that drops any "extra" zeroes at the end.
// It changes the result (which is a string) into a number again (think "0 + foo"),
// which means that it uses only as many digits as necessary.
```

### Reference

* [stack overflow](http://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-in-javascript)