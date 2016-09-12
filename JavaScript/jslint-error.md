# JSLint Error

### Move the invocation into the parens that contain the function.

This error is raised to highlight a **potentially confusing piece of code**.

* [Do not wrap function literals in parens unless they are to be immediately invoked](http://jslint.fantasy.codes/do-not-wrap-function-literals-in-parens-unless-they-are-immediately-invoked/)

```javascript
var x = (function () {
    "use strict";
    return 10;
});

// x = [Function]
// x() => 10
// Move the invocation into the parens that contain the function.
```

```javascript
var x = (function () {
    "use strict";
    return 10;
})();

// x = 10
// Move the invocation into the parens that contain the function.
```
```javascript
var x = (function () {
    "use strict";
    return 10;
}());

// x = 10
```

> The first set of parentheses (around "function(){}") isn't required but is
    used to make it obvious that the function is immediately invoked, thus
    making it obvious that the expression does not necessarily return that
    function; but instead the return value of that function.  [Closures in JavaScript](http://james.padolsey.com/javascript/closures-in-javascript/)

```javascript
/*jshint immed: false */
var x = (function () {
    "use strict";
    return 10;
})();
```

* [Wrapping non-IIFE function literals in parens is unnecessary](http://jslint.fantasy.codes/wrapping-non-iife-function-literals-in-parens/)