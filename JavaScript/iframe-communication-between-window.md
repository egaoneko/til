# iframe communication between window

## iframe window

```javascript
iframeElement.contentWindow;
```

## parent window

```javascript
iframeElement.contentWindow.parent;
window.parent; // in iframe
```

## postMessage

### 송신

```javascript
otherWindow.postMessage(message, targetOrigin, [transfer]);
```

### 수신

```javascript
window.addEventListener("message", receiveMessage, false);
function receiveMessage(event) {
  //..do something..
}
```

## Reference

* [iframe 의 윈도우객체에 접근하기 contentWindow , contentDocument](http://doolyit.tistory.com/37)
* [[개발] window.postMessage를 이용한 iframe 통신](https://medium.com/@jinro4/%EA%B0%9C%EB%B0%9C-window-postmessage%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-iframe-%ED%86%B5%EC%8B%A0-a542b8536518)