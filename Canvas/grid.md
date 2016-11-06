# Grid

```javascript
var width = canvas.width;
var height = canvas.height;
for (var i = 0; i < width; i += 10) {
    ctx.moveTo(i + 0.5, 0);
    ctx.lineTo(i + 0.5, height)
}

for (var i = 0; i < height; i += 10) {
    ctx.moveTo(0, i + 0.5);
    ctx.lineTo(width, i + 0.5)
}
ctx.strokeStyle = 'rgba(0, 0, 0, 0.2);'
ctx.stroke();
```

## Reference

* [Fiddle](http://jsfiddle.net/simonsarris/4uaZy/)