# Mouse button event

## Issue

`MouseEvent.button` 이벤트가 브라우저별로 다르게 작동하였다.

```javascript
console.log(MouseEvent.button, MouseEvent.buttons)
```

상단과 같이 `MouseEvent`의 `button`과 `buttons`를 출력하고 마우스 클릭을 하면 크롬의 경우 `button`의 값이 해당 클릭하는 버튼의 값을 출력하지만 IE의 경우 `button`의 값이 버튼 클릭과 관계없이 0으로 계속 동일하게 출력되었다. `buttons`의 경우 현재 누른 값 반환되었다.

## Solution

* [MouseEvent.button](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button)

The button number that was pressed when the mouse event was fired.

>`0`: Main button pressed, usually the left button or the un-initialized state
>
>`1`: Auxiliary button pressed, usually the wheel button or the middle button (if present)
>
>`2`: Secondary button pressed, usually the right button
>
>`3`: Fourth button, typically the Browser Back button
>
>`4`: Fifth button, typically the Browser Forward button

* [MouseEvent.buttons](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons)

The buttons being pressed when the mouse event was fired. Each button that can be pressed is represented by a given number (see below). If more than one button is pressed, the value of the buttons is combined to produce a new number.

>`0`: No button or un-initialized
>
>`1`: Left button
>
>`2`: Right button
>
>`4`: Wheel button or middle button
>
>`8`: 4th button (typically the "Browser Back" button)
>
>`16`: 5th button (typically the "Browser Forward" button)

해당 이벤트를 찾아봤을 때 MDN에서는 상단과 같이 설명하고 있다.

### 참고

`MouseEvent.buttons` 속성을 `MouseEvent.button` 속성과 혼동하지 말아야한다. `MouseEvent.buttons` 속성은 모든 종류의 마우스 이벤트 중에 눌려진 단추의 상태를 나타내지만, `MouseEvent.button` 속성은 하나 또는 여러 개의 단추를 누르거나 놓음으로써 발생하는 마우스 이벤트의 올바른 값만을 보장합니다.

## Reference

* [MouseEvent](https://developer.mozilla.org/ko/docs/Web/API/MouseEvent)
