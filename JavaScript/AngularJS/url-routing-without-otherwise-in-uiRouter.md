# URL Routing without otherwise in uiRouter

```xml
<!doctype html>
<html ng-app="myApp">
<head>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.1.5/angular.min.js"></script>
    <script src="js/angular-ui-router.min.js"></script>
    <script>
        var myApp = angular.module('myApp', ['ui.router']);
        // For Component users, it should look like this:
        // var myApp = angular.module('myApp', [require('angular-ui-router')]);
    </script>
</head>
<body>
    <!-- index.html -->
<body>
    <div ui-view></div>
    <!-- We'll also add some navigation: -->
    <a ui-sref="state1">State 1</a>
    <a ui-sref="state2">State 2</a>
    <a ui-sref="state3">State 3</a>
    <a ui-sref="state4" href="#/state4">State 4</a>
    <a href="#/state5">State 5</a>
</body>
</body>
</html>
```

```javascript
myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "partials/state1.html"
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "partials/state1.list.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "partials/state2.html"
    })
    .state('state2.list', {
      url: "/list",
      templateUrl: "partials/state2.list.html",
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    });
});
```

위 코드는 uiRouter를 사용하는 ``index.html``과 ``myApp`` 설정한 코드이다.

```xml
<a ui-sref="state1">State 1</a>	<!-- state가 존재, ui-sref 설정 -->
<a ui-sref="state2">State 2</a>	<!-- state가 존재, ui-sref 설정 -->
<a ui-sref="state3">State 3</a>	<!-- state가 부재, ui-sref 설정 -->
<a ui-sref="state4" href="#/state4">State 4</a>	<!-- state 부재, ui-sref과 href 설정 -->
<a href="#/state5">State 5</a>	<!-- state 부재, href 설정 -->
```

상단의 코드에서 ``body``에 위와 같이 5개의 링크를 추가하였으며 제대로 설정한 ``state1``과 ``state2``는 정상적으로 작동한다.

``state3``은 컴파일되어 들어갈 ``url``이 없어서인지 ``href`` 속성이 생기지 않아 링크가 생성되지 않았다.

``state4``는 입력한 ``href`` 속성이 있어서인지 링크가 생성되지만 작동은 되지를 않았다.

``state5``는 링크도 생성되고 작동을 하며, 설정한 ``otherwise``에 맞추어 정상적으로 ``/state1``을 이동하였다.

```javascript
//$urlRouterProvider.otherwise("/state1");
```

``otherwise``를 설정한``$urlRouterProvider``부분을 주석처리하면, 처음에 ``index.html``을 ``/``로 접근하여 ``<div ui-view></div>``에 아무것도 출력되지 않는다.

``state3``는 위와 같이 링크가 생성되지 않았으며, ``state4``와 ``state5``는 링크는 생성되었지만 작동은 되지 않았다.

하지만 ``state1``과 ``state2``는 정상적으로 작동한다.

* [Plunker Example](https://embed.plnkr.co/MNwzQbK5q1gJ2FxPxWWm/)

<iframe style="width: 100%; height: 600px" src="https://embed.plnkr.co/MNwzQbK5q1gJ2FxPxWWm" frameborder="0" allowfullscren="allowfullscren"></iframe>