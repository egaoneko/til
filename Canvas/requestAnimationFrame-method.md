# requestAnimationFrame method

HTML5 Canvas에서 애니메이션을 구현하고자 하는 경우 보통 ``setInterval()`` 함수를 이용한다.`` setInterval()`` 함수는 잘 알다시피 매개변수로 받은 콜백함수를 주기적으로 호출하는 함수이다. 대개 화면을 그리는 함수를 ``setInterval()`` 함수를 이용하여 주기적으로 호출하는 방식으로 Canvas를 다시 그리게 된다.

하지만, ``setInterval()`` 함수 자체가 단순히 주기적으로 콜백함수를 호출하는 기능을 담고 있는 것이지, Canvas를 다시 그리는 용도가 아니기 때문에, 애니메이션 구현 시에는 한계점이 있다.

``setInterval()`` 함수는 언제나 콜백함수를 호출하기 때문에 브라우저의 다른 탭이 선택된 경우와 같이 실제 화면을 다시 그릴 필요가 없는 경우에도 화면을 다시 그린다. 그래서 시스템의 리소스 낭비를 초래하여, 불필요한 전력을 소모하게 만든다. 또한, 디스플레이 갱신 전에 캔버스를 여러 번 고치더라도 디스플레이 갱신 바로 직전의 캔버스 상태만 적용이 되기 때문에, 프레임 손실이 발생할 수도 있다.

``requestAnimationFrame()`` 함수는 브라우저가 화면을 업데이트 해야하는 경우에만 콜백함수를 호출한다. 이는 브라우저가 최소화되었다던가, 다른 탭이 선택된 경우에는 콜백함수를 호출하지 않는다는 것을 의미한다. 또한 콜백함수 호출 주기(``DOMHighRestTimeStamp``라고 하는데)는 브라우저에서 관리되기 때문에 fps 값 설정 없이도 최적화된 (부드러운) 애니메이션 구현이 가능하다.

```javascript
window.requestAnimationFrame(callback);
```

> * Parameters
>
>	**callback**
>	parameter specifying a function to call when it's time to update your animation for the next repaint. The callback has one single argument, a ``DOMHighResTimeStamp``, which indicates the current time (the time returned from ``Performance.now()`` ) for when requestAnimationFrame starts to fire callbacks.
>
> * Return value
>	A long integer value, the request id, that uniquely identifies the entry in the callback list. This is a non-zero value, but you may not make any other assumptions about its value. You can pass this value to ``window.cancelAnimationFrame()`` to cancel the refresh callback request.

### Example

```javascript
var start = null;
var element = document.getElementById("SomeElementYouWantToAnimate");
element.style.position = 'absolute';

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  element.style.left = Math.min(progress/10, 200) + "px";
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
```

### Reference

* [스크립트 기반 애니메이션용 타이밍 컨트롤("requestAnimationFrame")](https://msdn.microsoft.com/ko-kr/library/hh920765.aspx)
* [requestAnimationFrame를 이용한 캔버스 애니메이션 구현](http://beautifulcode.tistory.com/entry/requestAnimationFrame%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%BA%94%EB%B2%84%EC%8A%A4-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EA%B5%AC%ED%98%84)
* [window.requestAnimationFrame()](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)