# toDataURL & toBlob CORS

외부 도메인의 이미지를 `Canvas`에 `drawImage` 하고 이 이미지를 `toDataURL`를 할때, IE Edge 이하 버전 및 iOS에서 CORS 이슈가 발생했다.

## HTML Spec

If this `canvas` element's bitmap's `origin-clean` flag is set to false, then throw a "`SecurityError`" `DOMException` and abort these steps.

* [toDataURL(type, quality)](https://html.spec.whatwg.org/multipage/scripting.html#dom-canvas-todataurl)
* [toBlob(callback, type, quality](https://html.spec.whatwg.org/multipage/scripting.html#dom-canvas-toblob)

The bitmaps of `canvas` elements, the bitmaps of `ImageBitmap` objects, as well as some of the bitmaps of rendering contexts, such as those described in the sections on the `CanvasRenderingContext2D` and `ImageBitmapRenderingContext` objects below, have an `origin-clean` flag, which can be set to true or false. Initially, when the `canvas` element or `ImageBitmap` object is created, its bitmap's `origin-clean` flag must be set to true.

* [origin-clean](https://html.spec.whatwg.org/multipage/scripting.html#concept-canvas-origin-clean)


## CORS enabled image

Although you can use images without CORS approval in your canvas, doing so taints the canvas. Once a canvas has been tainted, you can no longer pull data back out of the canvas. For example, you can no longer use the canvas `toBlob()`, `toDataURL()`, or `getImageData()` methods; doing so will throw a security error.

* [CORS enabled image](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image)

## Reference

* [stack overflow](http://stackoverflow.com/questions/20424279/canvas-todataurl-securityerror)