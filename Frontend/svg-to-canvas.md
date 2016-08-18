# SVG to Canvas

### img.src

```javascript
var can = document.getElementById('canvas1');
var ctx = can.getContext('2d');

//var svg = document.getElementById('mySVG');

var img = new Image();
img.onload = function() {
ctx.drawImage(img, 0, 0);
}
img.src = "http://upload.wikimedia.org/wikipedia/commons/d/d2/Svg_example_square.svg";
```

``img.src`` 아래와 같은 svg 파일을 전달하여 로드할 수 있다.

```xml
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect width="150" height="150" fill="rgb(0, 255, 0)" stroke-width="1" stroke="rgb(0, 0, 0)" />
</svg>
```