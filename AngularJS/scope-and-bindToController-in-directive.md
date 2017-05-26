# scope and bindToController in directive

## Issue

`directive`에 설정한 외부 주입 변수가 가장 마지막에 주입한 변수가 반영되어 보여지는 현상이 발생하였다.


## Solution

```xml
<!doctype html>
<html ng-app="sampleApp">

<head>
    <title>My Angular App</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
    <script type="text/javascript">
        angular.module('sampleApp', []).
        controller('demoCtrl1', ['$scope', function($scope) {
            $scope.data1 = [0, 1, 2, 3, 4];
            $scope.data2 = [5, 6, 7, 8, 9];
        }]).
        directive('dirc1', function() {
            return {
                template: '<h3><span ng-repeat="item in $ctrl.data">{{item}}</span></h3>',
                restrict: "AE",
                bindToController: {
                    data: '<?'
                },
                controllerAs: "$ctrl",
                controller: function(){console.log(this.data)}
            }
        }).
        directive('dirc2', function() {
            return {
                template: '<h3><span ng-repeat="item in $ctrl.data">{{item}}</span></h3>',
                restrict: "AE",
                scope: {},
                bindToController: {
                    data: '<?'
                },
                controllerAs: "$ctrl",
                controller: function(){}
            }
        });
    </script>
</head>

<body ng-controller="demoCtrl1">
    <h1>Dirc1</h1>
    <div dirc1 data="data1"></div>
    <hr>
    
    <h1>Dirc1</h1>
    <div dirc1 data="data2"></div>
    <hr>
    
    <h1>Dirc2</h1>
    <div dirc2 data="data1"></div>
    <hr>

    <h1>Dirc2</h1>
    <div dirc2 data="data2"></div>
    <hr>
</body>

</html>
```

<iframe style="width: 100%; height: 600px" src="https://embed.plnkr.co/aEzxZVIlUhPeDtVn4xaa/" frameborder="0" allowfullscren="allowfullscren"></iframe>

원인은 두번째 `dirc2`와 같이 `scope`에 값을 넣어주지 않아서 발생하였다. `scope` 값의 설정에 따른 차이는 아래와 같다.

* `Scope : False` : 부모 `scope`에 직접 접근한다.
* `Scope : True` : 부모 `scope`를 상속하여 생성한다.
* `Scope : {}` : 독립된 `scope`를 생성한다.

`dirc1`은 아무값도 주지 않았기 때문에 부모 `scope`를 상속하였고, 이에 따라 부모 `scope`를 사용하여 원하였던 동작을 하지 않게되었다.

## Reference

* [Mastering the Scope of the Directives in AngularJS](https://www.undefinednull.com/2014/02/11/mastering-the-scope-of-a-directive-in-angularjs/)
* [$scope은 이제 그만, Angular에서 bindToController 활용하기](http://www.haruair.com/blog/3201)
* [Angular의 Controller As 문법 살펴보기](http://www.haruair.com/blog/3186)