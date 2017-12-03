# base

> HTML Base 요소 (`<base>`) 는 문서에 포함된 모든 상대 URL들의 기준 URL을 나타냅니다. 한 문서에 하나의 `<base>` 요소만이 올수 있다.
>
>문서의 기준 URL은 스크립트 `document.baseURI`을 사용하여 문서에 쿼리될수 있다. [`<base>` - MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/base)

## Example

```xml
<base href="http://www.example.com/page.html">
<base target="_blank" href="http://www.example.com/page.html">
```
