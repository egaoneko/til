# Scope with attribute directive

## Case 1

```javascript
return {
    restrict: 'A',
    scope: { config : '=myList' }
    link: function(scope, elem, attrs) {
        //access using scope.config
    }
}
```

## Case 2

```javascript
$parse(attrs["myList"])(scope);
```

## Example

```javascript
angular
    .module('component')
    .directive('disabled', disabled)

  disabled.$inject = ['$parse'];

  function disabled ($parse) {
    var directive = {
      restrict: 'A',
      link: linkFun
    };

    return directive;

    function linkFun (scope, elem, attrs) {
      var disabled = $parse(attrs['disabled'])(scope);
      scope.$watch(disabled, function (isDisable) {
        if (isDisable) {
          elem.addClass("disabled");
          elem.attr("disabled", "");
        } else {
          elem.removeClass("disabled");
          elem.removeAttr("disabled");
        }
      });
    }
}
```


## Reference

* [stack overflow](http://stackoverflow.com/questions/27728712/angular-restrict-a-directive-pass-object)