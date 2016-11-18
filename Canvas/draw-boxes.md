# Draw Boxes

```javascript

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var boxes = generateBoxes(10, 10, {x:250, y:250});

function render() {
  for (var idx in boxes) {
    var box = boxes[idx];
    ctx.beginPath();
    for (var i = 0; i < box.bound.length; i++) {
      var position = box.bound[i];
      if (i == 0) {
        ctx.moveTo(position.x, position.y);
      } else {
        ctx.lineTo(position.x, position.y );
      }
    }
    ctx.closePath();
    ctx.stroke();
  }
}

function generateBoxes (row, col, position, size, space) {
  position = position != undefined ? position : {x: 0, y: 0};
  size = size != undefined ? size : 10;
  space = space != undefined ? space : 4;

  var boxes = [];
  var offset = size + space;
  var center = size * 0.5;
  for (var r = 0; r < row; r++) {
    for (var c = 0; c < col; c++) {
      var centerX = position.x + offset * r + center;
      var centerY = position.y + offset * c + center;
      boxes.push({
        normal: {x:1, y:1},
        center: {x: centerX, y: centerY},
        bound: [
          {x: centerX - center, y: centerY - center},
          {x: centerX + center, y: centerY - center},
          {x: centerX + center, y: centerY + center},
          {x: centerX - center, y: centerY + center}]
      });
    }
  }
  return boxes;
}
```

* [Plunker](https://plnkr.co/edit/va5xfX?p=preview)