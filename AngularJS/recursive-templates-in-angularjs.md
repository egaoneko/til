# Recursive templates in AngularJS

```xml
<script type="text/ng-template"  id="tree_item_renderer.html">
    {{data.name}}
    <button ng-click="add(data)">Add node</button>
    <button ng-click="delete(data)" ng-show="data.nodes.length > 0">Delete nodes</button>
    <ul>
        <li ng-repeat="data in data.nodes" ng-include="'tree_item_renderer.html'"></li>
    </ul>
</script>

<ul ng-app="Application" ng-controller="TreeController">
    <li ng-repeat="data in tree" ng-include="'tree_item_renderer.html'"></li>
</ul>
```

```javascript
angular.module("myApp", []).
controller("TreeController", ['$scope', function($scope) {
    $scope.delete = function(data) {
        data.nodes = [];
    };
    $scope.add = function(data) {
        var post = data.nodes.length + 1;
        var newName = data.name + '-' + post;
        data.nodes.push({name: newName,nodes: []});
    };
    $scope.tree = [{name: "Node", nodes: []}];
}]);
```

### Reference

* [stack overflow](http://stackoverflow.com/questions/15661289/how-can-i-make-recursive-templates-in-angularjs-when-using-nested-objects)
* [AngularJS recursive templates](http://benfoster.io/blog/angularjs-recursive-templates)