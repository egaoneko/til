# Entry point when all child directives loaded

## Try : viewContentLoaded (Fail)

```javascript
$scope.$on('$viewContentLoaded', function(){});
```

`$viewContentLoaded` : Emitted every time the ngView content is reloaded.

* [ngView](https://docs.angularjs.org/api/ngRoute/directive/ngView)

## Try : double timeout (Fail)

```javascript
$timeout(function () {
    $timeout(function () {
        // This code will run after
        // templateUrl has been loaded, cloned
        // and transformed by directives.
        // and properly rendered by the browser
    }, 0);
}, 0);
```

* [How to handle DOM updates in AngularJS Directives in "link"](http://lorenzmerdian.blogspot.kr/2013/03/how-to-handle-dom-updates-in-angularjs.html)