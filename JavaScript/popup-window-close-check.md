# popup window close check

## unload event

```javascript
window.onunload = function() {
    var win = window.opener;
    if (!win.closed) {
        win.someFunctionToCallWhenPopUpCloses();
    }
};
```

Handle the window's `unload` event there and notify the original window via the `opener` property. Note this won't always work in Opera.

## window.closed

```javascript
var popUp = window.open("popup.html", "thePopUp", "");
function someFunctionToCallWhenPopUpCloses() {
    window.setTimeout(function() {
        if (popUp.closed) {
            alert("Pop-up definitely closed");
        }
    }, 1);
}

var win = window.open("popup.html", "thePopUp", "");
var pollTimer = window.setInterval(function() {
    if (win.closed !== false) { // !== is required for compatibility with Opera
        window.clearInterval(pollTimer);
        someFunctionToCallWhenPopUpCloses();
    }
}, 200);
```

If target browsers does not support the `unload` event.

## Reference

* [stack overflow](http://stackoverflow.com/questions/3291712/is-it-possible-to-open-a-popup-with-javascript-and-then-detect-when-the-user-clo)