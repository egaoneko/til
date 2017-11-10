# jQuery's ajax & AngularJS's $http default content type

## [jQuery ajax](http://api.jquery.com/jquery.ajax/)

```javascript
$.ajax({
  contentType : 'application/json',
  ...
});
```

contentType (default: 'application/x-www-form-urlencoded; charset=UTF-8')

## [AngularJS $http](https://docs.angularjs.org/api/ng/service/$http)

```javascript
var req = {
 method: 'POST',
 url: 'http://example.com',
 headers: {
   'Content-Type': undefined
 },
 data: { test: 'test' } // Need to data
}
```

* `$httpProvider.defaults.headers.common` (headers that are common for all requests):
	* `Accept: application/json, text/plain, *﻿/﻿*`
* `$httpProvider.defaults.headers.post` (header defaults for POST requests) :
	* `Content-Type: application/json`
* `$httpProvider.defaults.headers.put` (header defaults for PUT requests) :
	* `Content-Type: application/json`
