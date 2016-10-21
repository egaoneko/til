# Remove element itself

## Element

```javascript
parent.removeChild(child);
```

## Id

```javascript
if (frameid) {
    frameid.parentNode.removeChild(frameid);
}
```

## Angular

```javascript
function close () {
      $element.parent()[0].removeChild($element[0]);
      $scope.$destroy();
}
```

## Reference

* [stack overflow](http://stackoverflow.com/questions/8830839/javascript-dom-remove-element)