# Array becomes an object structure

## Problem

```javascript
// Origin
var myArray = [{"Id":"guid1","Name":"name1"},{"Id":"guid2","Name":"name2"},...];

// Parent
[{"Id":"guid1","Name":"name1"},{"Id":"guid2","Name":"name2"},...]

// Child
{"0":{"Id":"guid1","Name":"name1"},"1":{"Id":"guid2","Name":"name2"},...}
```

팝업을 띄우고 부모창의 배열을 가지고 있는 객체에 자식창에서 생성한 배열을 넣고 `POST`를 보내니 상단과 비슷하게 자식창의 배열이 배열이 아니라 객체처럼 보내지고 있는 문제가 발생하였다.

## Solution

```javascript
//parent document
function getTheArray(){ return JSON.stringify(myArray);}
//child document:
myArray = JSON.parse(parent.getTheArray());
```

> Since an array is an object, all of its properties (and prototype methods/properties) are copied to a 'nameless' instance of the Object object. Something along the lines of `var copy = new Object(toCopy.constructor(toCopy.valueOf()));` is happening... the easiest way around this, IMO, is to stringency the array withing the parent context, because there, the interpreter knows it's an array

## Reference

* [stack overflow](http://stackoverflow.com/questions/10410615/javascript-array-becomes-an-object-structure)