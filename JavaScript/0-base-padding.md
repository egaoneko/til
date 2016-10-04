# 0 base padding

```javascript
function leftPad (str, fillChar, length) {

  if (fillChar.length != 1) {
    console.log('fillChar must be a single character');
    return "";
  }

  if (str.length > length)
    return str;

  var returnStr = "";
  var i;
  for (i = str.length; i < length; i++) {
    returnStr = returnStr + fillChar;
  }

  returnStr = returnStr + str;

  return returnStr;
}

function rightPad (str, fillChar, length) {

  if (fillChar.length != 1) {
    console.log('fillChar must be a single character');
    return "";
  }

  if (str.length > length)
    return str;

  var returnStr = str;
  var i;
  for (i = str.length; i < length; i++) {
    returnStr = returnStr + fillChar;
  }

  return returnStr;
}
```

# Reference

* [okky](http://okky.kr/article/29044)