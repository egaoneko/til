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

```xml
<img src="otherdomain.com" crossorigin="Anonymous" />

<!-- Or with Javascript -->
<script>
  var image = new Image();
  image.crossOrigin = "Anonymous";
  ...
</script>
```

위와 같은 방식으로 `Anonymous`를 주면 해결할 수 있다.

### Reference

* [The canvas has been tainted by cross-origin data and tainted canvases may not be exported](http://ourcodeworld.com/articles/read/182/the-canvas-has-been-tainted-by-cross-origin-data-and-tainted-canvases-may-not-be-exported)
* [tainted canvases may not be exported](http://tastegod.co.kr/331)
* [stack overflow](http://stackoverflow.com/questions/10852514/javascript-html5-drawimage-with-image-from-a-different-domain)