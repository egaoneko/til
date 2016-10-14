# input tag

## [input](https://docs.angularjs.org/api/ng/directive/input)

```xml
<input
  ng-model="string"
  [name="string"]
  [required="string"]
  [ng-required="boolean"]
  [ng-minlength="number"]
  [ng-maxlength="number"]
  [ng-pattern="string"]
  [ng-change="string"]
  [ng-trim="boolean"]>
...
</input>
```

### Example

```xml
<script>
   angular.module('inputExample', [])
     .controller('ExampleController', ['$scope', function($scope) {
       $scope.user = {name: 'guest', last: 'visitor'};
     }]);
</script>
<div ng-controller="ExampleController">
  <form name="myForm">
    <label>
       User name:
       <input type="text" name="userName" ng-model="user.name" required>
    </label>
    <div role="alert">
      <span class="error" ng-show="myForm.userName.$error.required">
       Required!</span>
    </div>
    <label>
       Last name:
       <input type="text" name="lastName" ng-model="user.last"
       ng-minlength="3" ng-maxlength="10">
    </label>
    <div role="alert">
      <span class="error" ng-show="myForm.lastName.$error.minlength">
        Too short!</span>
      <span class="error" ng-show="myForm.lastName.$error.maxlength">
        Too long!</span>
    </div>
  </form>
  <hr>
  <tt>user = {{user}}</tt><br/>
  <tt>myForm.userName.$valid = {{myForm.userName.$valid}}</tt><br/>
  <tt>myForm.userName.$error = {{myForm.userName.$error}}</tt><br/>
  <tt>myForm.lastName.$valid = {{myForm.lastName.$valid}}</tt><br/>
  <tt>myForm.lastName.$error = {{myForm.lastName.$error}}</tt><br/>
  <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
  <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
  <tt>myForm.$error.minlength = {{!!myForm.$error.minlength}}</tt><br/>
  <tt>myForm.$error.maxlength = {{!!myForm.$error.maxlength}}</tt><br/>
</div>
```

## [input[checkbox]](https://docs.angularjs.org/api/ng/input/input%5Bcheckbox%5D)

```xml
<input type="checkbox"
       ng-model="string"
       [name="string"]
       [ng-true-value="expression"]
       [ng-false-value="expression"]
       [ng-change="string"]>
```

### Example

```xml
<script>
  angular.module('checkboxExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.checkboxModel = {
       value1 : true,
       value2 : 'YES'
     };
    }]);
</script>
<form name="myForm" ng-controller="ExampleController">
  <label>Value1:
    <input type="checkbox" ng-model="checkboxModel.value1">
  </label><br/>
  <label>Value2:
    <input type="checkbox" ng-model="checkboxModel.value2"
           ng-true-value="'YES'" ng-false-value="'NO'">
   </label><br/>
  <tt>value1 = {{checkboxModel.value1}}</tt><br/>
  <tt>value2 = {{checkboxModel.value2}}</tt><br/>
 </form>
```

## [input[date]](https://docs.angularjs.org/api/ng/input/input%5Bdate%5D)

```xml
<input type="date"
       ng-model="string"
       [name="string"]
       [min="string"]
       [max="string"]
       [ng-min=""]
       [ng-max=""]
       [required="string"]
       [ng-required="string"]
       [ng-change="string"]>
```

### Example

```xml
<script>
   angular.module('dateInputExample', [])
     .controller('DateController', ['$scope', function($scope) {
       $scope.example = {
         value: new Date(2013, 9, 22)
       };
     }]);
</script>
<form name="myForm" ng-controller="DateController as dateCtrl">
   <label for="exampleInput">Pick a date in 2013:</label>
   <input type="date" id="exampleInput" name="input" ng-model="example.value"
       placeholder="yyyy-MM-dd" min="2013-01-01" max="2013-12-31" required />
   <div role="alert">
     <span class="error" ng-show="myForm.input.$error.required">
         Required!</span>
     <span class="error" ng-show="myForm.input.$error.date">
         Not a valid date!</span>
    </div>
    <tt>value = {{example.value | date: "yyyy-MM-dd"}}</tt><br/>
    <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
    <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
    <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
    <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
</form>
```

## [input[datetime-local]](https://docs.angularjs.org/api/ng/input/input%5Bdatetime-local%5D)

```xml
<input type="datetime-local"
       ng-model="string"
       [name="string"]
       [min="string"]
       [max="string"]
       [ng-min=""]
       [ng-max=""]
       [required="string"]
       [ng-required="string"]
       [ng-change="string"]>
```

### Example

```xml
<script>
  angular.module('dateExample', [])
    .controller('DateController', ['$scope', function($scope) {
      $scope.example = {
        value: new Date(2010, 11, 28, 14, 57)
      };
    }]);
</script>
<form name="myForm" ng-controller="DateController as dateCtrl">
  <label for="exampleInput">Pick a date between in 2013:</label>
  <input type="datetime-local" id="exampleInput" name="input" ng-model="example.value"
      placeholder="yyyy-MM-ddTHH:mm:ss" min="2001-01-01T00:00:00" max="2013-12-31T00:00:00" required />
  <div role="alert">
    <span class="error" ng-show="myForm.input.$error.required">
        Required!</span>
    <span class="error" ng-show="myForm.input.$error.datetimelocal">
        Not a valid date!</span>
  </div>
  <tt>value = {{example.value | date: "yyyy-MM-ddTHH:mm:ss"}}</tt><br/>
  <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
  <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
  <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
  <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
</form>
```

## [input[email]](https://docs.angularjs.org/api/ng/input/input%5Bemail%5D)

```xml
<input type="email"
       ng-model="string"
       [name="string"]
       [required="string"]
       [ng-required="string"]
       [ng-minlength="number"]
       [ng-maxlength="number"]
       [pattern="string"]
       [ng-pattern="string"]
       [ng-change="string"]>
```

### Example

```xml
<script>
  angular.module('emailExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.email = {
        text: 'me@example.com'
      };
    }]);
</script>
  <form name="myForm" ng-controller="ExampleController">
    <label>Email:
      <input type="email" name="input" ng-model="email.text" required>
    </label>
    <div role="alert">
      <span class="error" ng-show="myForm.input.$error.required">
        Required!</span>
      <span class="error" ng-show="myForm.input.$error.email">
        Not valid email!</span>
    </div>
    <tt>text = {{email.text}}</tt><br/>
    <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
    <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
    <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
    <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
    <tt>myForm.$error.email = {{!!myForm.$error.email}}</tt><br/>
  </form>
```

## [input[month]](https://docs.angularjs.org/api/ng/input/input%5Bmonth%5D)

```xml
<input type="month"
       ng-model="string"
       [name="string"]
       [min="string"]
       [max="string"]
       [ng-min=""]
       [ng-max=""]
       [required="string"]
       [ng-required="string"]
       [ng-change="string"]>
```

### Example

```xml
<script>
 angular.module('monthExample', [])
   .controller('DateController', ['$scope', function($scope) {
     $scope.example = {
       value: new Date(2013, 9, 1)
     };
   }]);
</script>
<form name="myForm" ng-controller="DateController as dateCtrl">
  <label for="exampleInput">Pick a month in 2013:</label>
  <input id="exampleInput" type="month" name="input" ng-model="example.value"
     placeholder="yyyy-MM" min="2013-01" max="2013-12" required />
  <div role="alert">
    <span class="error" ng-show="myForm.input.$error.required">
       Required!</span>
    <span class="error" ng-show="myForm.input.$error.month">
       Not a valid month!</span>
  </div>
  <tt>value = {{example.value | date: "yyyy-MM"}}</tt><br/>
  <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
  <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
  <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
  <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
</form>
```

## [input[number]](https://docs.angularjs.org/api/ng/input/input%5Bnumber%5D)

```xml
<input type="number"
       ng-model="string"
       [name="string"]
       [min="string"]
       [max="string"]
       [ng-min="string"]
       [ng-max="string"]
       [step="string"]
       [ng-step="string"]
       [required="string"]
       [ng-required="string"]
       [ng-minlength="number"]
       [ng-maxlength="number"]
       [pattern="string"]
       [ng-pattern="string"]
       [ng-change="string"]>
```

### Example

```xml
<script>
  angular.module('numberExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.example = {
        value: 12
      };
    }]);
</script>
<form name="myForm" ng-controller="ExampleController">
  <label>Number:
    <input type="number" name="input" ng-model="example.value"
           min="0" max="99" required>
 </label>
  <div role="alert">
    <span class="error" ng-show="myForm.input.$error.required">
      Required!</span>
    <span class="error" ng-show="myForm.input.$error.number">
      Not valid number!</span>
  </div>
  <tt>value = {{example.value}}</tt><br/>
  <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
  <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
  <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
  <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
 </form>
```

## [input[radio]](https://docs.angularjs.org/api/ng/input/input%5Bradio%5D)

```xml
<input type="radio"
       ng-model="string"
       value="string"
       [name="string"]
       [ng-change="string"]
       ng-value="string">
```

### Example

```xml
<script>
  angular.module('radioExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.color = {
        name: 'blue'
      };
      $scope.specialValue = {
        "id": "12345",
        "value": "green"
      };
    }]);
</script>
<form name="myForm" ng-controller="ExampleController">
  <label>
    <input type="radio" ng-model="color.name" value="red">
    Red
  </label><br/>
  <label>
    <input type="radio" ng-model="color.name" ng-value="specialValue">
    Green
  </label><br/>
  <label>
    <input type="radio" ng-model="color.name" value="blue">
    Blue
  </label><br/>
  <tt>color = {{color.name | json}}</tt><br/>
 </form>
 Note that `ng-value="specialValue"` sets radio item's value to be the value of `$scope.specialValue`.
```

## [input[range]](https://docs.angularjs.org/api/ng/input/input%5Brange%5D)

```xml
<input type="range"
       ng-model="string"
       [name="string"]
       [min="string"]
       [max="string"]
       [step="string"]
       [ng-change="string"]>
```

### Example

```xml
<script>
  angular.module('rangeExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.value = 75;
      $scope.min = 10;
      $scope.max = 90;
    }]);
</script>
<form name="myForm" ng-controller="ExampleController">

  Model as range: <input type="range" name="range" ng-model="value" min="{{min}}"  max="{{max}}">
  <hr>
  Model as number: <input type="number" ng-model="value"><br>
  Min: <input type="number" ng-model="min"><br>
  Max: <input type="number" ng-model="max"><br>
  value = <code>{{value}}</code><br/>
  myForm.range.$valid = <code>{{myForm.range.$valid}}</code><br/>
  myForm.range.$error = <code>{{myForm.range.$error}}</code>
</form>
```

## [input[text]](https://docs.angularjs.org/api/ng/input/input%5Btext%5D)

```xml
<input type="text"
       ng-model="string"
       [name="string"]
       [required="string"]
       [ng-required="string"]
       [ng-minlength="number"]
       [ng-maxlength="number"]
       [pattern="string"]
       [ng-pattern="string"]
       [ng-change="string"]
       [ng-trim="boolean"]>
```

### Example

```xml
<script>
  angular.module('textInputExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.example = {
        text: 'guest',
        word: /^\s*\w*\s*$/
      };
    }]);
</script>
<form name="myForm" ng-controller="ExampleController">
  <label>Single word:
    <input type="text" name="input" ng-model="example.text"
           ng-pattern="example.word" required ng-trim="false">
  </label>
  <div role="alert">
    <span class="error" ng-show="myForm.input.$error.required">
      Required!</span>
    <span class="error" ng-show="myForm.input.$error.pattern">
      Single word only!</span>
  </div>
  <code>text = {{example.text}}</code><br/>
  <code>myForm.input.$valid = {{myForm.input.$valid}}</code><br/>
  <code>myForm.input.$error = {{myForm.input.$error}}</code><br/>
  <code>myForm.$valid = {{myForm.$valid}}</code><br/>
  <code>myForm.$error.required = {{!!myForm.$error.required}}</code><br/>
 </form>
```

## [input[time]](https://docs.angularjs.org/api/ng/input/input%5Btime%5D)

```xml
<input type="time"
       ng-model="string"
       [name="string"]
       [min="string"]
       [max="string"]
       [ng-min=""]
       [ng-max=""]
       [required="string"]
       [ng-required="string"]
       [ng-change="string"]>
```

### Example

```xml
<script>
 angular.module('timeExample', [])
   .controller('DateController', ['$scope', function($scope) {
     $scope.example = {
       value: new Date(1970, 0, 1, 14, 57, 0)
     };
   }]);
</script>
<form name="myForm" ng-controller="DateController as dateCtrl">
   <label for="exampleInput">Pick a time between 8am and 5pm:</label>
   <input type="time" id="exampleInput" name="input" ng-model="example.value"
       placeholder="HH:mm:ss" min="08:00:00" max="17:00:00" required />
   <div role="alert">
     <span class="error" ng-show="myForm.input.$error.required">
         Required!</span>
     <span class="error" ng-show="myForm.input.$error.time">
         Not a valid date!</span>
   </div>
   <tt>value = {{example.value | date: "HH:mm:ss"}}</tt><br/>
   <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
   <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
   <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
   <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
</form>
```

## [input[url]](https://docs.angularjs.org/api/ng/input/input%5Burl%5D)

```xml
<input type="url"
       ng-model="string"
       [name="string"]
       [required="string"]
       [ng-required="string"]
       [ng-minlength="number"]
       [ng-maxlength="number"]
       [pattern="string"]
       [ng-pattern="string"]
       [ng-change="string"]>
```

### Example

```xml
<script>
  angular.module('urlExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.url = {
        text: 'http://google.com'
      };
    }]);
</script>
<form name="myForm" ng-controller="ExampleController">
  <label>URL:
    <input type="url" name="input" ng-model="url.text" required>
  <label>
  <div role="alert">
    <span class="error" ng-show="myForm.input.$error.required">
      Required!</span>
    <span class="error" ng-show="myForm.input.$error.url">
      Not valid url!</span>
  </div>
  <tt>text = {{url.text}}</tt><br/>
  <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
  <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
  <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
  <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
  <tt>myForm.$error.url = {{!!myForm.$error.url}}</tt><br/>
 </form>
```

## [input[week]](https://docs.angularjs.org/api/ng/input/input%5Bweek%5D)

```xml
<input type="week"
       ng-model="string"
       [name="string"]
       [min="string"]
       [max="string"]
       [ng-min=""]
       [ng-max=""]
       [required="string"]
       [ng-required="string"]
       [ng-change="string"]>
```

### Example

```xml
<script>
angular.module('weekExample', [])
  .controller('DateController', ['$scope', function($scope) {
    $scope.example = {
      value: new Date(2013, 0, 3)
    };
  }]);
</script>
<form name="myForm" ng-controller="DateController as dateCtrl">
  <label>Pick a date between in 2013:
    <input id="exampleInput" type="week" name="input" ng-model="example.value"
           placeholder="YYYY-W##" min="2012-W32"
           max="2013-W52" required />
  </label>
  <div role="alert">
    <span class="error" ng-show="myForm.input.$error.required">
        Required!</span>
    <span class="error" ng-show="myForm.input.$error.week">
        Not a valid date!</span>
  </div>
  <tt>value = {{example.value | date: "yyyy-Www"}}</tt><br/>
  <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
  <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
  <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
  <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
</form>
```