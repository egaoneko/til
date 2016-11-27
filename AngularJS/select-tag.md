# select tag

```xml
<select
  ng-model="string"
  [name="string"]
  [multiple="string"]
  [required="string"]
  [ng-required="string"]
  [ng-change="string"]
  [ng-options="string"]>
...
</select>
```

## static options

```xml
<div ng-controller="ExampleController">
  <form name="myForm">
    <label for="singleSelect"> Single select: </label><br>
    <select name="singleSelect" ng-model="data.singleSelect">
      <option value="option-1">Option 1</option>
      <option value="option-2">Option 2</option>
    </select><br>

    <label for="singleSelect"> Single select with "not selected" option and dynamic option values: </label><br>
    <select name="singleSelect" id="singleSelect" ng-model="data.singleSelect">
      <option value="">---Please select---</option> <!-- not selected / blank option -->
      <option value="{{data.option1}}">Option 1</option> <!-- interpolation -->
      <option value="option-2">Option 2</option>
    </select><br>
    <button ng-click="forceUnknownOption()">Force unknown option</button><br>
    <tt>singleSelect = {{data.singleSelect}}</tt>

    <hr>
    <label for="multipleSelect"> Multiple select: </label><br>
    <select name="multipleSelect" id="multipleSelect" ng-model="data.multipleSelect" multiple>
      <option value="option-1">Option 1</option>
      <option value="option-2">Option 2</option>
      <option value="option-3">Option 3</option>
    </select><br>
    <tt>multipleSelect = {{data.multipleSelect}}</tt><br/>
  </form>
</div>
```

## select options by using ngRepeat

```xml
<div ng-controller="ExampleController">
  <form name="myForm">
    <label for="repeatSelect"> Repeat select: </label>
    <select name="repeatSelect" id="repeatSelect" ng-model="data.model">
      <option ng-repeat="option in data.availableOptions" value="{{option.id}}">{{option.name}}</option>
    </select>
  </form>
  <hr>
  <tt>model = {{data.model}}</tt><br/>
</div>
```

## array of objects by using ngValue

```xml
<div ng-controller="ExampleController">
  <form name="myForm">
    <label for="ngvalueselect"> ngvalue select: </label>
    <select size="6" name="ngvalueselect" ng-model="data.model" multiple>
      <option ng-repeat="option in data.availableOptions" ng-value="option.value">{{option.name}}</option>
    </select>
  </form>
  <hr>
  <pre>model = {{data.model | json}}</pre><br/>
</div>
```

## setting a default value

```xml
<div ng-controller="ExampleController">
  <form name="myForm">
    <label for="mySelect">Make a choice:</label>
    <select name="mySelect" id="mySelect"
      ng-options="option.name for option in data.availableOptions track by option.id"
      ng-model="data.selectedOption"></select>
  </form>
  <hr>
  <tt>option = {{data.selectedOption}}</tt><br/>
</div>
```

```javascript
angular.module('defaultValueSelect', [])
 .controller('ExampleController', ['$scope', function($scope) {
   $scope.data = {
    availableOptions: [
      {id: '1', name: 'Option A'},
      {id: '2', name: 'Option B'},
      {id: '3', name: 'Option C'}
    ],
    selectedOption: {id: '3', name: 'Option C'} //This sets the default value of the select in the ui
    };
}]);
```

## Binding select to a non-string value via ngModel parsing / formatting

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

## Reference

* [select](https://docs.angularjs.org/api/ng/directive/select)