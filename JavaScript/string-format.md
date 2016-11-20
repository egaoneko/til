# String format

```javascript
// First, checks if it isn't implemented yet.
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}
```

```
"{0} is dead, but {1} is alive! {0} {2}".format("ASP", "ASP.NET")
ASP is dead, but ASP.NET is alive! ASP {2}
```

## Not String modify

```javascript
if (!String.format) {
  String.format = function(format) {
    var args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number] 
        : match
      ;
    });
  };
}
```

```javascript
format.call(target, args);

function format () {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined'
            ? args[number]
            : match
            ;
});
```

## Reference

* [stack overflow](http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format)