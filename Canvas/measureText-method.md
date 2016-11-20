# measureText method

```javascript
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.font="30px Arial";
var txt="Hello World"
ctx.fillText("width:" + ctx.measureText(txt).width,10,50)
ctx.fillText(txt,10,100);
```

## Referencer

* [HTML canvas measureText() Method](http://www.w3schools.com/tags/canvas_measuretext.asp)