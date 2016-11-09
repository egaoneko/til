# $q

```javascript
function asyncGreet(name) {
  var deferred = $q.defer();

  setTimeout(function() {
    deferred.notify('About to greet ' + name + '.');

    if (okToGreet(name)) {
      deferred.resolve('Hello, ' + name + '!');
    } else {
      deferred.reject('Greeting ' + name + ' is not allowed.');
    }
  }, 1000);

  return deferred.promise;
}

var promise = asyncGreet('Robin Hood');
promise.then(function(greeting) {
  alert('Success: ' + greeting);
}, function(reason) {
  alert('Failed: ' + reason);
}, function(update) {
  alert('Got notification: ' + update);
});
```

## The Deferred API

A new instance of deferred is constructed by calling `$q.defer()`.

* `resolve(value)` – resolves the derived promise with the `value`. If the value is a rejection constructed via `$q.reject`, the promise will be rejected instead.
* `reject(reason)` – rejects the derived promise with the reason. This is equivalent to resolving it with a rejection constructed via `$q.reject`.
* `notify(value)` - provides updates on the status of the promise's execution. This may be called multiple times before the promise is either resolved or rejected.

## The Promise API

* `then(successCallback, [errorCallback], [notifyCallback])` – regardless of when the promise was or will be resolved or rejected, `then` calls one of the success or error callbacks asynchronously as soon as the result is available. The callbacks are called with a single argument: the result or rejection reason. Additionally, the notify callback may be called zero or more times to provide a progress indication, before the promise is resolved or rejected. This method returns a new promise which is resolved or rejected via the return value of the `successCallback`, `errorCallback` (unless that value is a promise, in which case it is resolved with the value which is resolved in that promise using promise chaining). It also notifies via the return value of the `notifyCallback` method. The promise cannot be resolved or rejected from the notifyCallback method. The errorCallback and notifyCallback arguments are optional.
* `catch(errorCallback)` – shorthand for `promise.then(null, errorCallback)`
* `finally(callback, notifyCallback)` – allows you to observe either the fulfillment or rejection of a promise, but to do so without modifying the final value. This is useful to release resources or do some clean-up that needs to be done whether the promise was rejected or resolved. See the full specification for more information.

## All

```javascript
all(promises);
```

Combines multiple promises into a single promise that is resolved when all of the input promises are resolved.

## Reference

* [$q](https://docs.angularjs.org/api/ng/service/$q)