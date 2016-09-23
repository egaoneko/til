# Not read JSON with Ajax

### Error

```
Could not read JSON: Unrecognized token 'undefined': was expecting ('true', 'false' or 'null')
```

### Solution

`JSON.stringify()`를 사용한다.

```javascript
jQuery.ajax({ 
    url: 'ruleAssignment', 
    type: 'POST', 
    dataType: 'json', 
    data: JSON.stringify(ruleAssignment), 
    contentType: 'application/json', 
    success: function(result) { 
         console.log('here'); 
    } 
}); 
```

### Reference

* [stack overflow](http://stackoverflow.com/questions/3983556/using-jquery-to-post-json-object-to-spring-3-controller)