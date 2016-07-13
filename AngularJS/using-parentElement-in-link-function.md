# link function에서 parentElement 사용

### Problem

```javascript
app.directive('sdiv', function () {
    return {
        template:'<div style="background : #fff; width: {{width}}; height: {{height}}; margin : 10px; display:inline-block;"><span>x: {{x}}, <br>y: {{y}}</span></div>',
        restrict:"AE",
        scope: {
            width: "@",
            height: "@"
        },
        link: function (scope, element, attrs) {
            var offsetXY = offset(element);
            scope.x = offsetXY.left;
            scope.y = offsetXY.top;

            function offset(element) {
              var rawDomNode = element[0];
              var clientRect = rawDomNode.getBoundingClientRect();

              var parent = element[0].parentElement;
              var x = clientRect.left + parent.offsetLeft;
              var y = clientRect.top + parent.offsetTop;
              console.dir(element[0].parentElement)
              console.dir(element[0].offsetParent.offsetTop)

              return { left: parseInt(x), top: parseInt(y) };
            }
        }
    }
})
```

위와 같이 link의 element에서 부모의 element인 ``parentElement``를 접근하고 값을 출력해보았다. ``element[0].parentElement``에서는 ``offsetTop``의 값이 출력되지만, ``element[0].offsetParent.offsetTop``에서는 모든 값이 0으로 출력되는 문제가 생겼다.

### Solution

```javascript
scope.$evalAsync(function(){
	console.log(element[0].parentElement.offsetTop);
})
```
위와 같이 ``$evalAsync``를 사용하면 값이 정상적으로 출력된다.

### Reference

* [stack overflow](http://stackoverflow.com/questions/38341833/how-to-get-parents-element-offset-in-javascript-with-angularjs/38342338#38342338)