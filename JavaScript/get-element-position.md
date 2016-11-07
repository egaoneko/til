# Get element position

```javascript
var rect = element.getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);

var bodyRect = document.body.getBoundingClientRect(),
    elemRect = element.getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top;

alert('Element is ' + offset + ' vertical pixels from <body>');
```

## Reference

* [stack overflow](http://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element)
* [Element.getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
