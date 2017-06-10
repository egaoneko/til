Watch element's size

```javascript
scope.$watch(
    function () { 
        return {
           width: element.width(),
           height: element.height(),
        }
   },
   function () {}, //listener 
   true //deep watch
);
```

# Reference

* [stack overflow](http://stackoverflow.com/questions/29303200/angularjs-directive-watch-parent-size-change)