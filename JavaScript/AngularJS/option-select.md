# option select

## [ngSelected](https://docs.angularjs.org/api/ng/directive/ngSelected)

```xml
<OPTION
  ng-selected="expression">
...
</OPTION>
```

## Example

```xml
<label>Check me to select: <input type="checkbox" ng-model="selected"></label><br/>
<select aria-label="ngSelected demo">
  <option>Hello!</option>
  <option id="greet" ng-selected="selected">Greetings!</option>
</select>
```