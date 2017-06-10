# Get body size

```javascript
app.directive("myDirective", function($document) {
  return function(scope, element, attr) {
    var bodyWidth = $document[0].body.clientWidth;
    console.log("width of body is "+ bodyWidth);
  };
});
```

```xml
<button my-directive>Sample Button</button>
```

### Reference

* [stack overflow](http://stackoverflow.com/questions/16725136/angularjs-get-body-element-inside-directive)