# Key press with shift

```javascript
var onkeydown = (function (ev) {
  var key;
  var isShift;
  if (window.event) {
    key = window.event.keyCode;
    isShift = !!window.event.shiftKey; // typecast to boolean
  } else {
    key = ev.which;
    isShift = !!ev.shiftKey;
  }
  if ( isShift ) {
    switch (key) {
      case 16: // ignore shift key
        break;
      default:
        alert(key);
        // do stuff here?
        break;
    }
  }
});
```

### Reference

* [stack overflow](http://stackoverflow.com/questions/7479307/how-can-i-detect-shift-key-down-in-javascript)