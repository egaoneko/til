# defer method

## Issue

jQuery에서 사용하듯이 es2015에서 `defer`를 사용하고자 하였지만, 해당 함수가 기본으로 제공되지 않는다.

## Solution

```javascript
function defer() {
    var deferred = {};
    var promise = new Promise(function(resolve, reject) {
        deferred.resolve = resolve;
        deferred.reject  = reject;
    });
    deferred.promise = promise;
    return deferred;
}

var deferred = defer();

deferred.promise.then(function(data) {
    document.body.innerHTML += '<p>Resolved: ' + data + '</p>';
});

document.body.innerHTML = '<p>Deferred created.</p>';

setTimeout(function() {
    deferred.resolve(123);
}, 2000);
```

위와 같은 함수를 사용하여 해결하였다.

## Reference

* [stack overflow](http://stackoverflow.com/questions/27889687/promise-defer-browser-support)