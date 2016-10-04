# init with ng-repeat

```xml
<li ng-class="{on:$first}" ng-repeat="idx in info.range(1, 20) track by $index">
  <input type="radio" name="rdo_arr" id="arr{{sIdx}}" ng-init="sIdx = info.leftPad(idx, '0', 2)">
  <label for="arr{{sIdx}}" class="arr{{sIdx}}">
    <span></span>
  </label>
</li>
```