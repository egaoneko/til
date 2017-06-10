# Double elick edit

```xml
<tr ng-repeat="item in items">
    <td>
        <span ng-hide="item.editing" ng-dblclick="editItem(item)">{{item.name}}</span>
        <input ng-show="item.editing" ng-model="item.name" ng-blur="doneEditing(item)" autofocus />
    </td>
</tr>
```

```javascript
$scope.items = [{name: "item #1", editing: false}, 
                {name: "item #2", editing: false}, 
                {name: "item #3", editing: false}];

$scope.editItem = function (item) {
    item.editing = true;
}

$scope.doneEditing = function (item) {
    item.editing = false;
    //dong some background ajax calling for persistence...
};
```

* [Fiddle](http://jsfiddle.net/davekr/F7K63/43/)

### Reference

* [stack overflow](http://stackoverflow.com/questions/21794575/how-to-make-a-double-click-editable-table-in-angularjs-way)