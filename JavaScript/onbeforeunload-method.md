# onbeforeunload method

## Issue

`window`를 종료할 때, 저장을 하지 않고 종료할 경우를 알려줄 필요가 있어 이를 제어하여야 하는 상황이 생겼다.

## Solution

```javascript
window.onbeforeunload = funcRef
```

> The `WindowEventHandlers.onbeforeunload` event handler property contains the code executed when the `beforeunload` is sent. This event fires when a window is about to `unload` its resources. The document is still visible and the event is still cancelable. [WindowEventHandlers.onbeforeunload](https://developer.mozilla.org/ko/docs/Web/API/WindowEventHandlers/onbeforeunload)

## Example

```javascript
window.onbeforeunload = function(e) {
  var dialogText = 'Dialog text here';
  e.returnValue = dialogText;
  return dialogText;
};
```

## Notes

* When this event returns (or sets the returnValue property to) a `value` other than `null` or `undefined`, the user is prompted to confirm the page unload.

`null`이나 `undefined`가 아닌 값을 반환 시, `conform`을 실행하며 `return`으로 전달된 메시지를 보여준다.

* In some browsers, the return value of the event is displayed in this dialog. Starting with Firefox 4, Chrome 51, Opera 38 and Safari 9.1, a generic string not under the control of the webpage will be shown instead of the returned string.

**Firefox 4, Chrome 51, Opera 38 and Safari 9.1** 이후 버전부터는 `return`값을 메시지로 보여주지 않고, 브라우저의 고정 메시지를 보여준다.

* Since 25 May 2011, the HTML5 specification states that calls to `window.alert()`, `window.confirm()`, and `window.prompt()` methods may be ignored during this event. See the HTML5 specification for more details.

`window.alert()`, `window.confirm()`, `window.prompt()` 메서드들은 무시된다.

* Note also, that various mobile browsers ignore the result of the event (that is, they do not ask the user for confirmation).

대부분의 모바일 브라우저는 해당 이벤트를 무시한다.

## Addition

`IE`에서는 `window.onbeforeunload`가, `Chrome`에서는 `window.addEventListener`가 동작하지 않는 문제가 발생하였다.

```javascript
window.addEventListener('beforeunload', beforeunload);
window.onbeforeunload = beforeunload;

function beforeunload () {
    return "message";
}
```
위와 같이 두 방법을 전부 등록하면 정상동작한다.