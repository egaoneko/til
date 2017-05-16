# File input check

## Template
```xml
<input type="file" onchange=check(this) />
```

```javascript
function check(fileInput) {
    if (fileInput.files.length == 0) {
        return;
    }
	...
}
```

## File size

```javascript
fileInput.files[0].size
```

## Image size

```javascript
var _URL = window.URL || window.webkitURL;
    var img = new Image();
    img.onload = function () {
        console.log(this.width, this.height);
};
img.src = _URL.createObjectURL(fileInput.files[0]);
```