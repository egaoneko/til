# Renderers

## WebGLRenderer

### setSize ( width, height, updateStyle )

`updateStyle`에 `false`를 전달할 경우에는 `<canvas>`는 100% 높이와 너비를 가진다.

* `setSize(window.innerWidth/2, window.innerHeight/2)`

`<canvas width="171" height="517" style="width: 171.5px; height: 517px;"></canvas>`

* `setSize(window.innerWidth/2, window.innerHeight/2, false)`

`<canvas width="171" height="517"></canvas>`