# Line Dash

## setLineDash method

The CanvasRenderingContext2D.setLineDash() method of the Canvas 2D API sets the line dash pattern.

```javasript
void ctx.setLineDash(segments);
```

> Parameters
>* segments
>An Array. A list of numbers that specifies distances to alternately draw a line and a gap (in coordinate space units). If the number of elements in the array is odd, the elements of the array get copied and concatenated. For example, [5, 15, 25] will become [5, 15, 25, 5, 15, 25].
>
>[CanvasRenderingContext2D.setLineDash()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash)

### Example

```javascript
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.setLineDash([5, 15]);

ctx.beginPath();
ctx.moveTo(0,100);
ctx.lineTo(400, 100);
ctx.stroke();
```

## lineDashOffset

The CanvasRenderingContext2D.lineDashOffset property of the Canvas 2D API sets the line dash pattern offset or "phase" to achieve a "marching ants" effect, for example.

```javascript
ctx.lineDashOffset = value;
```

>* value
>A float specifying the amount of the offset. Initially 0.0.
>
>[CanvasRenderingContext2D.lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)

### Example

```javascript
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.setLineDash([4, 16]);
ctx.lineDashOffset = 2;

ctx.beginPath();
ctx.moveTo(0,100);
ctx.lineTo(400, 100);
ctx.stroke();
```