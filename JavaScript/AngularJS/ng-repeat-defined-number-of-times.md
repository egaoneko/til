# How to ng-repeat defined number of times

### Solution 1

#### view

```html
<ul>
    <li ng-repeat="i in getNumber(number)"><span>{{$index+1}}</span></li>
</ul>

<!-- Newer versions of Angular -->
<li ng-repeat="i in getNumber(number) track by $index">
```

#### controller

```javascript
$scope.number = 5;
$scope.getNumber = function(num) {
    return new Array(num);   
}
```

### Solution 2

#### view

```html
<div ng-repeat="i in [1, 2, 3, 4]">
  ...
</div>
```

### Solution 3

#### view

```html
<div ng-app>
    <div ng-controller="TestCtrl">
        <div ng-repeat="a in range(5) track by $index">{{$index + 1}}</div>
    </div>
</div>
```

#### controller

```javascript
function TestCtrl($scope) {
    $scope.range = function(n) {
        return new Array(n);
    };
};
```

### Reference

* [Way to ng-repeat defined number of times instead of repeating over array?](http://stackoverflow.com/questions/16824853/way-to-ng-repeat-defined-number-of-times-instead-of-repeating-over-array)