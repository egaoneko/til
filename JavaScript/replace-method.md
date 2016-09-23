# replace method

`replace()` 메소드는 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환한다. 그 패턴은 문자열이나 정규식([RegExp](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp))이 될 수 있으며, 교체 문자열은 문자열이나 모든 매치에 대해서 호출된 펑션일 수 있다.

```javascript
str.replace(regexp|substr, newSubStr|function)
```

>* regexp (pattern)
>정규식(RegExp) 객체 또는 리터럴. 이 정규식에 매칭되는 부분들은 두번째 파라미터의 반환값으로 교체되어 집니다.
>* substr (pattern)
>새로운 문자열에 의해서 교체당할 문자열(String). 정규식이 아닌 글자 그대로의 문자열로 처리된다. 오직 첫 번째 일치되는 문자열만이 교체된다.
>* newSubStr (replacement)
>첫번째 파라미터를 대신할 문자열(String). 여러가지 교체 패턴들이 지원됩니다.
>* function (replacement)
>첫번째 파라미터를 대신할 새로운 문자열을 생성하기 위해 호출될 펑션.
>[String.prototype.replace()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

### Example

```javascript
// Defining the regular expression in replace()
var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...

// Using global and ignore with replace()
var re = /apples/gi;
var str = 'Apples are round, and apples are juicy.';
var newstr = str.replace(re, 'oranges');
console.log(newstr);  // oranges are round, and oranges are juicy.

// Switching words in a string
var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
var newstr = str.replace(re, '$2, $1');
console.log(newstr);  // Smith, John

// Using an inline function that modifies the matched characters
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match) {
    return '-' + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}

// Replacing a Fahrenheit degree with its Celsius equivalent
function f2c(x) {
  function convert(str, p1, offset, s) {
    return ((p1 - 32) * 5/9) + 'C';
  }
  var s = String(x);
  var test = /(-?\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convert);
}
```

### Replace all

```javascript
str.replace(/#/gi, "");

var ch = '#';
str.replace(new RegExp('#'), 'gi', "");
```

문자열의 모든 `#`을 공백으로 치환한다.

* g : 발생할 모든 pattern에 대한 전역 검색
* i : 대/소문자 구분 안함
* m: 여러 줄 검색

### Reference

* [자바스크립트에서 REPLACE를 REPLACEALL 처럼 사용하기](http://www.codejs.co.kr/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C-replace%EB%A5%BC-replaceall-%EC%B2%98%EB%9F%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0/)
* [Javascript 에서 replace정규식 그리고 replaceall과 같은 함수 구현하기](http://ooz.co.kr/65)