# $location

The [$location](https://docs.angularjs.org/api/ng/service/$location) service parses the URL in the browser address bar (based on the `window.location`) and makes the URL available to your application. Changes to the URL in the address bar are reflected into `$location` service and changes to `$location` are reflected into the browser address bar.

** The `$location` service: **

* Exposes the current URL in the browser address bar, so you can
	* Watch and observe the URL.
	* Change the URL.
* Synchronizes the URL with the browser when the user
	* Changes the address bar.
	* Clicks the back or forward button (or clicks a History link).
	* Clicks on a link.
* Represents the URL object as a set of methods (protocol, host, port, path, search, hash).



## search

```javascript
search(search, [paramValue]);
```

현재 URL의 search(query) 부분을 조작할 수 있다.

```javascript
// given URL http://example.com/#/some/path?foo=bar&baz=xoxo
var searchObject = $location.search();
// => {foo: 'bar', baz: 'xoxo'}

// set foo to 'yipee'
$location.search('foo', 'yipee');
// $location.search() => {foo: 'yipee', baz: 'xoxo'}
```