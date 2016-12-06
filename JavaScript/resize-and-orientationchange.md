# resize & orientationchange

```javascript
// Listen for orientation changes      
window.addEventListener("orientationchange", function() {
    // Announce the new orientation number
    alert(window.orientation);
}, false);

// Listen for resize changes
window.addEventListener("resize", function() {
    // Get screen size (inner/outerWidth, inner/outerHeight)

}, false);
```
