# one instance of babel-polyfill

## Issue

```
Uncaught Error: only one instance of babel-polyfill is allowed
```

위와 같은 `babel-polyfill`가 한번이상 불려서 발생하는 오류가 발생하였다.

## Solution

해당 오류의 원인은 Babel의 [Polyfill](https://babeljs.io/docs/usage/polyfill/)을 잘 못 사용하였기 때문이다.

오류가 날 당시에 `index.js`에 아래와 같은 방식으로 적용하였다.

```javascript
import "babel-polyfill";
```

하지만 해당위치가 아래의 조건을 만족한다고 생각했는데 아니었는지 카르마를 통해 테스트를 실행하면 오류가 발생하였다.

> If you are using ES6’s import syntax in your application’s **entry point**, you should instead import the polyfill at the top of the **entry point** to ensure the polyfills are loaded first:

최종적으로 보면 아래와 같이 적용하고 나니 정상적으로 작동하였다.

```javascript
module.exports = {
  entry: ["babel-polyfill", "./app/js"]
};
```

여기서 최종적이란 표현을 쓴 이유는 해당 내용을 적용하고 `ㅜnpm build`를 하지 않고 적용을 하여, 계속 오작동을 한다고 판단하였었기 때문이다.