# hangul input immediately

## Issue

AngularJS 한글 입력이 즉시 반영되지 않음

## Solution

```xml
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>example 01-05</title>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.2/angular.min.js"></script>
</head>
<body ng-app="myApp">
<div ng-controller="myCtrl"><input type="text" ng-model="input_text">
    <p ng-bind="input_text"></p>
    <h1>{{input_text}}</h1></div>
<div ng-controller="myCtrl2"><input type="text" ng-model="input_text2" kr-input>
    <p ng-bind="input_text2">
    <h1>{{input_text2}}</h1></div>
<script>
    var application = angular.module('myApp', [])
    application.controller('myCtrl', function ($scope) {
        $scope.input_text = 'Hello Wrold!';
    });

    application.controller('myCtrl2', function ($scope) {
        $scope.input_text2 = 'Hello Wrold2!';
    });

    // directive 신규 생성
    application.directive('krInput', ['$parse', function ($parse) {
        return {
            priority: 2, restrict: 'A', compile: function (element) {
                element.on('compositionstart', function (e) {
                    e.stopImmediatePropagation();
                });
            },
        };
    }]);
</script>
</body>
</html>
```

## Reference

* [[Angular JS] 한글 입력시 바인딩 오류 수정하기](http://118k.tistory.com/135)