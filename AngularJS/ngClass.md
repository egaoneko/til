# ngClass

> The `ngClass` directive allows you to dynamically set CSS classes on an HTML element by databinding an expression that represents all classes to be added.

```xml
<input id="setbtn" type="button" value="set" ng-click="myVar='my-class'">
<input id="clearbtn" type="button" value="clear" ng-click="myVar=''">
<br>
<span class="base-class" ng-class="myVar">Sample Text</span>
```

### Problem

```xml
<panel
  body-class="'action-body-panel'"
  panel-class="'action-panel'">
</panel>
```

위와 같이 `directive`에 `class`를 전달하여 반영하려고 할때, 인자에 `"'action-body-panel'"`와 같이 전달하여야 한다. `"action-body-panel"`와 같이 전달하면 변수를 찾고 해당 변수가 없기 때문에 `undifined`를 보내 작동하지 않는다.

### Problem

```xml
<p ng-class="[style1, style2, style3]">Using Array Syntax</p>

<p ng-class="[style4, {orange: warning}]">Using Array and Map Syntax</p>
```

`ngClass`의 값으로 `object`와 함께 `value`를 주어야할 때, 위와 같이 `list`에 `object`를 같이 주면된다.



### Refernce

* [ngClass](https://docs.angularjs.org/api/ng/directive/ngClass)