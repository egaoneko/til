# Parse date

```javascript
function parse(str) {
    if(!/^(\d){8}$/.test(str)) return "invalid date";
    var y = str.substr(0,4),
        m = str.substr(4,2),
        d = str.substr(6,2);
    return new Date(y,m,d);
}
```

## Reference

* [stack overflow](http://stackoverflow.com/questions/10638529/how-to-parse-a-date-in-format-yyyymmdd-in-javascript)