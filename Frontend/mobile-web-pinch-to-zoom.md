# Mobile web pinch to zoom

Mobile web에서 `pinch-to-zoom` 기능을 사용하여 확대/축소 할 수 있는데 이를 고정 시키기 위해선 아래와 같이 메타 태그의 `viewport`옵션에 `scale`을 고정시킨다.

```xml
<meta name="viewport" content="width=device-width, user-scalable=no">
```

## Issue

`iOS 10`에서는 해당 기능이 동작하지 않는다. 이는 사파리에서 웹사이트 접근성을 높이기 위해, 유저들은 웹사이트에서 `user-scalable=no` 라는 옵션을 주어도 `pinch-to-zoom` 을 사용 할 수 있도록 되어있다.

> **iOS 10 beta release note.**
> To improve accessibility on websites in Safari, users can now pinch-to-zoom even when a website sets user-scalable=no in the viewport.

```javascript
document.documentElement.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, false);
```

위와 같이 `touchstart`의 `event`에 `touches.length`가 1보다 클 경우 기본 이벤트를 막아줌으로써 해결이 가능하다.

* [stack overflow](http://stackoverflow.com/questions/37808180/disable-viewport-zooming-ios-10-safari)

추가로 아래의 코드로 `double-tab-to-zoom`을 막을 수 있다.

```javascript
var lastTouchEnd = 0;
document.documentElement.addEventListener('touchend', function (event) {
  var now = (new Date()).getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false);
```

## Reference

* [iOS 10 모바일웹 pinch-to-zoom 기능 (user-scalable 옵션)](http://hellomrma.com/wp/ios-10-%EB%AA%A8%EB%B0%94%EC%9D%BC%EC%9B%B9-pinch-to-zoom-%EA%B8%B0%EB%8A%A5/)