# Sequence of $timeout

```javascript
$timeout(function () {
  console.log("test");
})
```

```javascript
var args = sliceArgs(arguments, 3),
  skipApply = (isDefined(invokeApply) && !invokeApply),
  deferred = (skipApply ? $$q : $q).defer(),
  promise = deferred.promise,
  timeoutId;

  timeoutId = $browser.defer(function() {
    try {
      deferred.resolve(fn.apply(null, args));
    } catch (e) {
      deferred.reject(e);
      $exceptionHandler(e);
    } finally {
      delete deferreds[promise.$$timeoutId];
    }

    if (!skipApply) $rootScope.$apply();
  }, delay);

  promise.$$timeoutId = timeoutId;
  deferreds[timeoutId] = deferred;
```

1. `deferred.resolve(fn.apply(null, args))` 에서 `(function () {console.log("test");}` 를 실행
2. `if (!skipApply) $rootScope.$apply()` 실행

`$timeout`의 본문이 먼저 실행되고 `$rootScope.$apply()`가 실행된다.