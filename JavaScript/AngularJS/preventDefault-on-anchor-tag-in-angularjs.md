# How to preventDefault on anchor tag in AngularJS

### Problem

```xml
<a href="#" ng-click="do()">Click</a>
```

링크 이동 발생

### Solution

```xml
<a ng-click="myFunction()">Click Here</a>
```

```css
a[ng-click]{
    cursor: pointer;
}
```

### Reference

* [stack overflow](http://stackoverflow.com/questions/10931315/how-to-preventdefault-on-anchor-tags)