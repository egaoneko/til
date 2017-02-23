# Mobile web double tap to zoom

`double tap to zoom` 을 사용 할 수 없도록 하고자 한다.

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

위와 같이 `touchstart`의 `event`에 `lastTouchEnd`가 `300ms`보다 작을 경우 기본 이벤트를 막아줌으로써 해결이 가능하다.

* [stack overflow](http://stackoverflow.com/questions/37808180/disable-viewport-zooming-ios-10-safari)