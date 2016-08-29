# Get offset top

```javascript
var top = element.getBoundingClientRect().top;
```

* [getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/element.getBoundingClientRect)

```javascript
offset: function( options ) {
    //...

    var docElem, win, rect, doc,
        elem = this[ 0 ];

    if ( !elem ) {
        return;
    }

    rect = elem.getBoundingClientRect();

    // Make sure element is not hidden (display: none) or disconnected
    if ( rect.width || rect.height || elem.getClientRects().length ) {
        doc = elem.ownerDocument;
        win = getWindow( doc );
        docElem = doc.documentElement;

        return {
            top: rect.top + win.pageYOffset - docElem.clientTop,
            left: rect.left + win.pageXOffset - docElem.clientLeft
        };
    }
}
```

* [https://github.com/jquery/jquery/blob/master/src/offset.js](https://github.com/jquery/jquery/blob/master/src/offset.js)

### Reference

* [stack overflow](http://stackoverflow.com/questions/18953144/how-do-i-get-the-offset-top-value-of-an-element-without-using-jquery)