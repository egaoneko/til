# Rotate image

```javascript
function drawRotated(degrees){
    context.clearRect(0,0,canvas.width,canvas.height);

    // save the unrotated context of the canvas so we can restore it later
    // the alternative is to untranslate & unrotate after drawing
    context.save();

    // move to the center of the canvas
    context.translate(canvas.width/2,canvas.height/2);

    // rotate the canvas to the specified degrees
    context.rotate(degrees*Math.PI/180);

    // draw the image
    // since the context is rotated, the image will be rotated also
    context.drawImage(image,-image.width/2,-image.width/2);

    // we’re done with the rotating so restore the unrotated context
    context.restore();
}
```

```xml
<!doctype html>
<html>
<head>
<link rel="stylesheet" type="text/css" media="all" href="css/reset.css" /> <!-- reset css -->
<script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>

<style>
    body{ background-color: ivory; }
    canvas{border:1px solid red;}
</style>

<script>
$(function(){

    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");

    var angleInDegrees=0;

    var image=document.createElement("img");
    image.onload=function(){
        ctx.drawImage(image,canvas.width/2-image.width/2,canvas.height/2-image.width/2);
    }
    image.src="houseicon.png";

    $("#clockwise").click(function(){ 
        angleInDegrees+=30;
        drawRotated(angleInDegrees);
    });

    $("#counterclockwise").click(function(){ 
        angleInDegrees-=30;
        drawRotated(angleInDegrees);
    });

    function drawRotated(degrees){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.save();
        ctx.translate(canvas.width/2,canvas.height/2);
        ctx.rotate(degrees*Math.PI/180);
        ctx.drawImage(image,-image.width/2,-image.width/2);
        ctx.restore();
    }


}); // end $(function(){});
</script>

</head>

<body>
    <canvas id="canvas" width=300 height=300></canvas><br>
    <button id="clockwise">Rotate right</button>
    <button id="counterclockwise">Rotate left</button>
</body>
</html>
```

```javascript
var x = canvas.width / 2;
var y = canvas.height / 2;
var width = image.width;
var height = image.height;

context.translate(x, y);
context.rotate(angleInRadians);
context.drawImage(image, -width / 2, -height / 2, width, height);
context.rotate(-angleInRadians);
context.translate(-x, -y);
```

## Reference

* [stack overflow](http://stackoverflow.com/questions/17411991/html5-canvas-rotate-image)
* [stack overflow](http://stackoverflow.com/questions/3793397/html5-canvas-drawimage-with-at-an-angle)