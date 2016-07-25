# Mouse Event

### mousemove

마우스가 움직일 때 발생하는 이벤트이다.
마우스가 위치한 Canvas 내의 좌표는 아래와 같이 구할 수 있다. (이하 모든 이벤트에서 동일하게 작동한다.)

```javascript
var mouseX = e.clientX - canvas.offsetLeft;
var mouseY = e.clientY - canvas.offsetTop;
```

아래와 같이 ``mouseIsDown``인 ``boolean``으로 Drag를 제어할 수 있다.

```javascript
canvas.onmousemove = function(e) {
    var mouseX = e.clientX - canvas.offsetLeft;
    var mouseY = e.clientY - canvas.offsetTop;

    if (mouseIsDown) {
        ...
    }

    return false;
};
```

### mousedown

마우스 버튼을 누를 때 발생하는 이벤트이다.

아래와 같이 ``mouseIsDown``을 이벤트가 발생할 때 ``true``로 설정하여 Drag를 제어할 수 있다.

```javascript
canvas.onmousedown = function(e) {
    mouseIsDown = true;
}
```

### mouseup

마우스 버튼을 땔 때 발생하는 이벤트이다.

아래와 같이 ``mouseIsDown``을 이벤트가 발생할 때 ``false``로 설정하여 Drag를 제어할 수 있다.

```javascript
canvas.onmouseup = function(e) {
    mouseIsDown = false;
}
```

### mouseout

마우스가 요소 밖으로 나갔을 떄 발생하는 이벤트이다.

``mouseup``이벤트만 설정하고 요소 밖으로 나가면 ``mouseIsDown``가 계속 ``true``로 설정되어 있는 문제가 발생한다. 이를 아래와 같이 ``mouseIsDown``을 이벤트가 발생할 때 ``false``로 설정하여 Drag를 제어할 수 있다.

```javascript
canvas.onmouseout = function(e) {
    mouseIsDown = false;
}
```

### mousewheel

마우스의 휠을 사용할 때 발생하는 이벤트이다.

``e.wheelDelta``의 값은 휠을 올리면 ``-120``출력하고 휠을 내리면 ``120``출력한다.

하지만 OSX에서 이벤트를 이용할 때, 트랙패드와 마우스의 ``e.wheelDelta``값이 달라서 아래와 같이 사용하였다.

```javascript
canvas.onmousewheel = function(e) {
    if (e.wheelDelta < 0) {
        currentScale -= scaleInterval;
    } else {
        currentScale += scaleInterval;
    }
}
```

### mousewheel on Firefox

Firefox에서는 ``mousewheel``를 사용할 수 없다. ``mousewheel``대신 ``DOMMouseScroll`` 이벤트를 등록한다. 또한 ``wheelDelta`` 대신에 ``detail``를 사용한다.

### Reference

* [mousewheel](https://developer.mozilla.org/en-US/docs/Web/Events/mousewheel)
* [DOMMouseScroll](https://developer.mozilla.org/en-US/docs/Web/Events/DOMMouseScroll)