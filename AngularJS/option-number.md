# option number

## [ngSelected](https://docs.angularjs.org/api/ng/directive/ngSelected)

```xml
<select
  convert-to-number
...
</select>
```

## Example

```xml
<select ng-model="model.id" convert-to-number>
  <option value="0">Zero</option>
  <option value="1">One</option>
  <option value="2">Two</option>
</select>
{{ model }}
```

```javascript
angular.module('nonStringSelect', [])
.run(function($rootScope) {
  $rootScope.model = { id: 2 };
})
.directive('convertToNumber', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$parsers.push(function(val) {
        return parseInt(val, 10);
      });
      ngModel.$formatters.push(function(val) {
        return '' + val;
      });
    }
  };
});
```
