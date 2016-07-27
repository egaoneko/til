# isPointInPath Method

The ``CanvasRenderingContext2D.isPointInPath()`` method of the Canvas 2D API reports whether or not the specified point is contained in the current path.

```javascript
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

// Red rectangle
ctx.beginPath();
ctx.lineWidth="6";
ctx.strokeStyle="red";
ctx.rect(5,5,290,140); 
ctx.stroke();

// Green rectangle
ctx.beginPath();
ctx.lineWidth="4";
ctx.strokeStyle="green";
ctx.rect(30,30,50,50);
if (ctx.isPointInPath(30,40))
   {
   ctx.stroke();
   };

// Blue rectangle
ctx.beginPath();
ctx.lineWidth="10";
ctx.strokeStyle="blue";
ctx.rect(50,50,150,80);
ctx.stroke();
```

### Reference

* [CanvasRenderingContext2D.isPointInPath()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/isPointInPath)