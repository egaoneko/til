# Enums in JavaScript

```javascript
var SIZE = {
  SMALL : {value: 0, name: "Small", code: "S"}, 
  MEDIUM: {value: 1, name: "Medium", code: "M"}, 
  LARGE : {value: 2, name: "Large", code: "L"}
};

var currentSize = SIZE.MEDIUM;
if (currentSize == SIZE.MEDIUM) {
  // this alerts: "1: Medium"
  alert(currentSize.value + ": " + currentSize.name);
}
```

### Reference

* [stack overflow](http://stackoverflow.com/questions/287903/enums-in-javascript)