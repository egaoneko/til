# How to get relative target position with Hammer.js

```javascript
var bb = e.target.getBoundingClientRect();
// Correct, but will not work with touch.
var position = {
    x: e.pointers[0].layerX,
    y: e.pointers[0].layerY,
}
// Correct and works with touch.
var position2 = {
    x: e.center.x - bb.left,
    y: e.center.y - bb.top,
}
```

Be careful that getBoundingClientRect is [slower than offset](http://jsperf.com/offset-vs-getboundingclientrect/7). [more](http://www.yiotabytes.com/2011/04/when-does-dom-access-slow-down.html)

### Reference

* [Github Issue](https://github.com/hammerjs/hammer.js/issues/572)