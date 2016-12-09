# toDataURL CORS
```
Uncaught SecurityError: Failed to execute 'toDataURL' on 'HTMLCanvasElement': tainted canvases may not be exported.
```

```javascript
var canvas = document.getElementById("canvas");

function drawImageFromWebUrl(sourceurl){
      var img = new Image();

      img.addEventListener("load", function () {
          // The image can be drawn from any source
          canvas.getContext("2d").drawImage(img, 0, 0, img.width,    img.height, 0, 0, canvas.width, canvas.height);
          
          // However the execution of any of the following methods will make your script fail
          // if your image doesn't has the right permissions
          canvas.getContext("2d").getImageData();
          canvas.toDataURL();
          canvas.toBlob();
      });

      img.setAttribute("src", sourceurl);
}
// But, this code is being executed from ourcodeworld and the image fcomes from google.
drawImageFromWebUrl("https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png");
```

크로스 도메인 이미지를 사용한 캔버스에 `toDataURL`을 사용할 때 크로스 도메인 이슈가 발생한다.

## Anonymous

```xml
<img src="otherdomain.com" crossorigin="Anonymous" />

<!-- Or with Javascript -->
<script>
  var image = new Image();
  image.crossOrigin = "Anonymous";
  ...
</script>
```

위와 같은 방식으로 `Anonymous`를 주면 해결할 수 있다. (Chrome & Firefox)

```javascript
$(function() {
  var imageUrl = 'https://ucarecdn.com/c5b7dd84-c0e2-48ff-babc-d23939f2c6b4/-/preview/240x240/-/quality/best/';
   
  var canvas = document.getElementById('s1-canvas');
  var img = new Image();
   
  img.crossOrigin = "Anonymous";
   
  img.onload = function() {
    canvas.width = this.width;
    canvas.height = this.height;
    canvas.getContext('2d').drawImage(this, 0, 0);
   
    canvas.toDataURL();
    canvas.getContext('2d').getImageData(0, 0, 100, 100);
  };
  img.src = imageUrl;
});
```

```xml
<canvas id="s1-canvas"></canvas>
```

## XMLHttpRequest

```javascript
$(function() { 
  function requestImage(imageUrl, callback) {
    var req = new XMLHttpRequest();
    req.onload = function() {
      var img = new Image();
      img.onload = function() {
        URL.revokeObjectURL(this.src);
        callback(img);
      };
      img.src = URL.createObjectURL(req.response);
    };
    req.open("get", imageUrl, true);
    req.responseType = 'blob';
    req.send();
  }
 
  function getAverageColor(canvas) {
    var ctx = canvas.getContext('2d');
    var data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    var r = 0, g = 0, b = 0, a = 0;
    for (i = 0; i < data.length; i += 4) {
      r += data[i+0] * data[i+3];
      g += data[i+1] * data[i+3];
      b += data[i+2] * data[i+3];
      a += data[i+3];
    }
    return [r / a, g / a, b / a];
  }
 
  var canvas = document.getElementById('s2-canvas');
  var URL = window.URL || window.webkitURL;
 
  $('#s2-average-color').on('click', function() {
    var imageUrl = $('#s2-source').val();
    requestImage(imageUrl, function(img) {
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext('2d').drawImage(img, 0, 0);
 
      var colors = $.map(getAverageColor(canvas), function(x) {
        return Math.round(x).toString(16);
      });
      alert("The average color is #" + colors.join(''));
    })
  });
});
```

```xml
<input type="text" size="80" id="s2-source" value="https://ucarecdn.com/c5b7dd84-c0e2-48ff-babc-d23939f2c6b4/-/preview/250x250/"><br>
<button id="s2-average-color">Get average color</button><br>
<canvas id="s2-canvas"></canvas>
```

## Reference

* [The canvas has been tainted by cross-origin data and tainted canvases may not be exported](http://ourcodeworld.com/articles/read/182/the-canvas-has-been-tainted-by-cross-origin-data-and-tainted-canvases-may-not-be-exported)
* [tainted canvases may not be exported](http://tastegod.co.kr/331)
* [stack overflow](http://stackoverflow.com/questions/10852514/javascript-html5-drawimage-with-image-from-a-different-domain)
* [Access to Canvas Pixels](https://uploadcare.com/cookbook/advanced/)