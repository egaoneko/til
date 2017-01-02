# communicate between two windows with angular

```javascript
var service = opener.window.angular.element(opener.window.document.body).injector().get('someAngularService');

var data = service.getData();

observer.add(updateData);
function undateData() {
	data = service.getData();
}
```

새창에서 연 `angular`에서 이전 창의 `angular`의 `data`를 컨트롤해야 하는 경우에 위와 같이 [window.opener](../JavaScript/opener-method-in-window.md)를 사용할 수 가 있다.