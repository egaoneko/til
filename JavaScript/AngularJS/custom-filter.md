# Custom filter

```xml
<div ng-controller="MyController">
  Input: <input ng-model="greeting" type="text"><br>
  Decoration: <input ng-model="decoration.symbol" type="text"><br>
  No filter: {{greeting}}<br>
  Decorated: {{greeting | decorate}}<br>
</div>
```

```javascript
angular.module('myStatefulFilterApp', [])
.filter('decorate', ['decoration', function(decoration) {

  function decorateFilter(input) {
    return decoration.symbol + input + decoration.symbol;
  }
  decorateFilter.$stateful = true;

  return decorateFilter;
}])
.controller('MyController', ['$scope', 'decoration', function($scope, decoration) {
  $scope.greeting = 'hello';
  $scope.decoration = decoration;
}])
.value('decoration', {symbol: '*'});
```

## Date

```xml
<span>{{ d.time | date }}</span>
```

```javascript
angular.module('yourmodule').filter('date', function($filter)
{
 return function(input)
 {
  if(input == null){ return ""; } 
 
  var _date = $filter('date')(new Date(input), 'MMM dd yyyy');
 
  return _date.toUpperCase();

 };
});
```

## Reference

* [Filters](https://docs.angularjs.org/guide/filter)
* [Date filtering and formatting in Angular js.](http://www.angulartutorial.net/2014/04/date-filtering-and-formatting-in.html)