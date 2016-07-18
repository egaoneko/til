# strict mode in JavaScript

### ``"use strict;"``는?

>``Strict Mode``는 ECMAScript 5 버전에 있는 새로운 기능으로써, 당신의 프로그램 또는 함수를 엄격한 운용 콘텍스트 안에서 실행시킬 수 있게끔 합니다. 이 엄격한 콘텍스트는 몇가지 액션들을 실행할 수 없도록 하며, 좀 더 많은 예외를 발생시킵니다.
>
>* 흔히 발생하는 코딩 실수를 잡아내서 예외를 발생시킵니다.
>* 상대적으로 안전하지 않은 액션이 발생하는 것을 방지하거나 그럴 때 예외를 발생시킵니다. 예를 들자면 전역객체들에 접근하려 한다거나 하는 것들이겠지요.
>* 혼란스럽거나 제대로 고려되지 않은 기능들을 비활성화시킵니다.
>

>
>[자바스크립트에서 strict mode를 사용해야 하는 이유](http://blog.aliencube.org/ko/2014/01/02/reasons-behind-using-strict-mode-while-coding-javascript/)

```javascript
// Non-strict code...
 
(function(){
    "use strict";
 
    // Define your library strictly...
})();
 
// Non-strict code...
```
``strict mode``는 파일 전체에 적용시킬 수도 있고, 아니면 특정한 함수 안에서만 적용시킬 수 있다고 한다.

### Refernce
* [자바스크립트에서 strict mode를 사용해야 하는 이유](http://blog.aliencube.org/ko/2014/01/02/reasons-behind-using-strict-mode-while-coding-javascript/)