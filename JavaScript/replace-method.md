# replace method

### Return value

```javascript
Singleton.prototype.ajax = function(method) {
    return function(url, parameter, data) {
      if (parameter) {
        $.each(parameter, function(key, val) {
            url.replace(new RegExp(':'+key,'g'), val);
        });
      }
      ...
   }
};
```

`url`을 `relplace` 수행하여도 반영되지 않았다. `replace` 수행하면 해당 문자열을 변경된 문자열을 반환한다.

```javascript
Singleton.prototype.ajax = function(method) {
    return function(url, parameter, data) {
      if (parameter) {
        $.each(parameter, function(key, val) {
            url = url.replace(new RegExp(':'+key,'g'), val);
        });
      }
      ...
   }
};
```