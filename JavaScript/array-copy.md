# Array Copy

## Deep Copy

```javascript
var aaa = [0, 1, 2, 3, 4, 5];

var bbb = JSON.parse(JSON.stringify( aaa )); //참조없는 복사
```

## Shallow Copy

```javascript
var aaa = [0, 1, 2, 3, 4, 5];

var bbb = aaa.slice(); //indexOf 혹은 contains로 검색 가능
```

## Reference

* [레퍼런스 참조없는 배열 복사(Deep Copy)](http://programmingsummaries.tistory.com/143)