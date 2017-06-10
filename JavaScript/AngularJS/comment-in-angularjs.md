# Comment in AgularJS

```javascript
app.directive('templateComment', function () {
    return {
        restrict: 'E',
        compile: function (tElement, attrs) {
            tElement.remove();
        }
    };
});
```

```xml
<template-comment>Put your comment here.</template-comment>
```

### Reference

* [stack overflow](http://stackoverflow.com/questions/18063475/how-can-i-add-a-comment-for-developers-ie-not-exposed-on-output-html-to-an-an)
* [grunt-strip-code](https://github.com/philipwalton/grunt-strip-code)