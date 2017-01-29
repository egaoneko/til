# Detect browser

```javascript
function getBrowser() {
    var userAgent = $window.navigator.userAgent;
    var browsers = {chrome: /chrome/i, safari: /safari/i, firefox: /firefox/i, ie: /internet explorer/i};

    for(var key in browsers) {
        if (browsers[key].test(userAgent)) {
            return key;
        }
   };

   return 'unknown';
}
```

## Reference

* [stack overflow](http://stackoverflow.com/questions/22947535/how-to-detect-browser-using-angular)