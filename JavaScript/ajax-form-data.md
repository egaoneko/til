# ajax form data

```javascript
var req = {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    url: '/report/export',
    data: $.param({data:data})
};
$http(req);
```

```javascript
$.param({data:data})
```
상단과 같이 jQuery의 `$.param()`을 사용하면 된다.

## Reference

* [stack overflow](http://stackoverflow.com/questions/11442632/how-can-i-post-data-as-form-data-instead-of-a-request-payload)