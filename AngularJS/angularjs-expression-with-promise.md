# AngularJS Expression with Promise

```javascript
function promiseCtrl($scope, $timeout) { 
	$scope.result = $timeout(function({ 
		return "Ready!"; 
	}, 1000); 
}
```
```xml
<div ng-controller="promiseCtrl"> 
	{{result || "Preparing…"}}
</div> 
```