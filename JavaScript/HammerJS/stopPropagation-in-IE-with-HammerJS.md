# stopPropagation in IE with HammerJS

```javascript
var handleEvent = function (e) {
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
};
```

IE에서 HammerJS에 `stopPropagation`이 위와 같이 적용해도 적용되지 않는 문제가 발생하였다. 낮은 `z-index`를 가진 엘리먼트가 높은 `z-index`를 가진 엘리먼트보다 먼저 인식되고 있다.

```javascript
if (e.target.nodeName == "BUTTON") { // stop propagation about button for IE
    return e.preventDefault() && false;
}
```

해당 이벤트의 `target`에서 먼저 인식되는 태그의 이름으로 제어하여서 임시로 해결하였다.