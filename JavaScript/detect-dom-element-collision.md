# Detect dom element collision

```javascript
var rect1 = rect1Dom.getBoundingClientRect();
var rect2 = rect2Dom.getBoundingClientRect();

var overlap = !(rect1.right < rect2.left || 
                rect1.left > rect2.right || 
                rect1.bottom < rect2.top || 
                rect1.top > rect2.bottom);
```

## Reference

* [stack overflow](https://stackoverflow.com/questions/12066870/how-to-check-if-an-element-is-overlapping-other-elements)
* [Element.getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)