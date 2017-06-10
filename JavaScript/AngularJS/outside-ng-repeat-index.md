# Outside ng-repeat index

```xml
<ul ng-repeat="section in sections" ng-init="sectionIndex = $index">
    <li  class="section_title {{section.active}}" >
        {{section.name}}
    </li>
    <ul>
        <li class="tutorial_title {{tutorial.active}}" ng-click="loadFromMenu(sectionIndex)" ng-repeat="tutorial in section.tutorials">
            {{tutorial.name}}
        </li>
    </ul>
</ul>
```

### Reference

* [stack overflow](http://stackoverflow.com/questions/15256600/passing-2-index-values-within-nested-ng-repeat)