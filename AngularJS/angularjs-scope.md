# AngularJS Scope

* ``@`` or ``@attr`` - bind a local scope property to the value of DOM attribute. The result is always a string since DOM attributes are strings.
* ``=`` or ``=attr`` - set up a bidirectional binding between a local scope property and an expression passed via the attribute attr. The expression is evaluated in the context of the parent scope.
	* Optional attributes should be marked as such with a question mark: ``=?`` or ``=?attr``.
	* If an object literal or an array literal is passed as the binding expression, the equality check is done by value (using the ``angular.equals`` function). It's also possible to watch the evaluated value shallowly with ``$watchCollection``: use ``=*`` or ``=*attr`` (``=*?`` or ``=*?attr`` if the attribute is optional).
* ``<`` or ``<attr`` - set up a one-way (one-directional) binding between a local scope property and an expression passed via the attribute attr. The expression is evaluated in the context of the parent scope.
	* Make the binding optional by adding ``?``: ``<?`` or ``<?``attr.
	* one-way binding does not copy the value from the parent to the isolate scope, it simply sets the same value.
	* one-way binding watches changes to the identity of the parent value. That means the ``$watch`` on the parent value only fires if the reference to the value has changed.
* ``&`` or ``&attr`` - provides a way to execute an expression in the context of the parent scope. If no attr name is specified then the attribute name is assumed to be the same as the local name.

```xml
<!doctype html>
<html ng-app="sampleApp">

<head>
    <title>My Angular App</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
    <script type="text/javascript">
        angular.module('sampleApp', []).
        controller('demoCtrl1', ['$scope', function($scope) {
            $scope.at = 'at';
            $scope.amp = 'amp';
            $scope.equal = 'equal';
            $scope.less = 'less';
            $scope.lessObject = {
                name: "lessObject"
            };

            $scope.ampFuncCtrl = function(amp) {
                alert(amp);
            }
        }]).
        controller('demoCtrl2', function() {
            this.at = 'at';
            this.amp = 'amp';
            this.equal = 'equal';
            this.ampFuncCtrl = function(amp) {
                alert(amp);
            }
        }).
        controller('demoSubCtrl', function() {
        }).
        directive('dirc1', function() {
            return {
                template: [
                    '<h3><span>{{at}}</span><input type="text" ng-model="at"></h3>',
                    '<h3><button ng-click="ampFunc()">amp</button></h3>',
                    '<h3><span>{{equal}}</span><input type="text" ng-model="equal"></h3>'
                ].join(''),
                restrict: "AE",
                scope: {
                    at: "@",
                    ampFunc: "&",
                    equal: "="
                }
            }
        }).
        directive('dirc2', function() {
            return {
                template: [
                    '<h3><span>{{$ctrl.at}}</span><input type="text" ng-model="$ctrl.at"></h3>',
                    '<h3><button ng-click="$ctrl.ampFunc()">amp</button></h3>',
                    '<h3><span>{{$ctrl.equal}}</span><input type="text" ng-model="$ctrl.equal"></h3>'
                ].join(''),
                restrict: "AE",
                controller: "demoCtrl2",
                controllerAs: "$ctrl",
                // scope: {
                    // at: "@",
                    // ampFunc: "&",
                    // equal: "="
                // }
            }
        }).
        directive('dirc3', function() {
            return {
                template: [
                    '<h3><span>{{$ctrl.at}}</span><input type="text" ng-model="$ctrl.at"></h3>',
                    '<h3><button ng-click="$ctrl.ampFunc()">amp</button></h3>',
                    '<h3><span>{{$ctrl.equal}}</span><input type="text" ng-model="$ctrl.equal"></h3>'
                ].join(''),
                restrict: "AE",
                controller: "demoSubCtrl",
                controllerAs: "$ctrl",
                scope: {},
                bindToController: {
                    at: "@",
                    ampFunc: "&",
                    equal: "="
                }
            }
        }).
        component('comp', {
            template: [
                '<h3><span>{{$ctrl.at}}</span><input type="text" ng-model="$ctrl.at"></h3>',
                '<h3><button ng-click="$ctrl.ampFunc()">amp</button></h3>',
                '<h3><span>{{$ctrl.equal}}</span><input type="text" ng-model="$ctrl.equal"></h3>',
                '<h3><span>{{$ctrl.less}}</span><input type="text" ng-model="$ctrl.less"></h3>',
                '<h3><span>{{$ctrl.lessObject.name}}</span><input type="text" ng-model="$ctrl.lessObject.name"></h3>'
            ].join(''),
            // restrict: "AE",
            controller: "demoSubCtrl",
            bindings: {
                at: "@",
                ampFunc: "&",
                equal: "=",
                less: "<",
                lessObject: "<"
            }
        });
    </script>
</head>

<body ng-controller="demoCtrl1">
    <h1>Ctrl1</h1>
    <span>Lets change!</span><br>
    <input type="text" ng-model="at"> <span>local scope</span><br>
    <input type="text" ng-model="amp"> <span>expression in the context of the parent scope</span><br>
    <input type="text" ng-model="equal"> <span>bidirectional binding</span><br>
    <input type="text" ng-model="less"> <span>one-way (one-directional) binding</span><br>
    <input type="text" ng-model="lessObject.name"> <span>one-way (one-directional) binding(by object)</span><br>
    <hr>

    <div ng-controller="demoCtrl2 as ctrl2">
        <h1>Ctrl2</h1>
        <input type="text" ng-model="ctrl2.at"><br>
        <input type="text" ng-model="ctrl2.amp"><br>
        <input type="text" ng-model="ctrl2.equal"><br>
        <hr>
    </div>

    <h1>Dirc1</h1>
    <div dirc1 at="at" amp-func="ampFuncCtrl(amp, this)" equal="equal"></div>
    <hr>

    <h1>Dirc2</h1>
    <div dirc2 at="at" amp-func="ampFuncCtrl(amp, this)" equal="equal"></div>
    <hr>

    <h1>Dirc3</h1>
    <div dirc3 at="at" amp-func="ampFuncCtrl(amp, this)" equal="equal"></div>
    <hr>

    <h1>Comp1</h1>
    <!-- div comp at="at" amp-func="ampFuncCtrl(amp, this)" equal="equal" --></div>
    <comp at="at" amp-func="ampFuncCtrl(amp, this)" equal="equal"
        less="less" less-object="lessObject"></comp>
    <hr>
</body>

</html>
```

* [Plunker](https://embed.plnkr.co/QSa8fBwvdQD7Y8cPUTE8/)

### Reference

* [Understanding Components](https://docs.angularjs.org/guide/component)
* [$compile](https://docs.angularjs.org/api/ng/service/$compile#-scope-)