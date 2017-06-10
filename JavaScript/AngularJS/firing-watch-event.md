# Firing $watch event

### Problem

digest loop가 실행되기를 기다리지 않고 ``$watch``를 수행해야하는 경우

```javascript
$scope.$watch('something', function()
{
    // the code
});
```

### Solution

digest loop를 실행하기 위해 ``$scope.$apply``를 사용한다.

```javascript
something.chagne();
$scope.$apply();
```

### Reference

* [stack overflow](http://stackoverflow.com/questions/17413370/firing-watch-event-manually-in-angularjs)