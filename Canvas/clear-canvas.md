# Clear Canvas

```javascript
canvas.width = canvas.width;
```

```javascript
ctx.clearRect(0, 0, canvas.width, canvas.height);
```

> They may seem to do the same thing on the surface, but the end difference between the two methods is large: Setting the canvas width to itself not only clears the canvas, it clears all canvas state. **This means it clears the transformation matrix, the current clipping region, and all of the following attributes**: strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation, font, textAlign, and textBaseline.

```javascript
// Store the current transformation matrix
context.save();

// Use the identity matrix while clearing the canvas
context.setTransform(1, 0, 0, 1, 0, 0);
context.clearRect(0, 0, canvas.width, canvas.height);

// Restore the transform
context.restore();
```

```
100000 iterations averaged 10 times:
1885ms to clear
2112ms to reset and clear
```

* [Plunker](https://embed.plnkr.co/5kScmr/)

<iframe style="width: 100%; height: 600px" src="https://embed.plnkr.co/5kScmr" frameborder="0" allowfullscren="allowfullscren"></iframe>

### Reference

* [How you clear your HTML5 Canvas matters](http://simonsarris.com/blog/346-how-you-clear-your-canvas-matters)
* [JSPerf](https://jsperf.com/canvas-clear-speed)
