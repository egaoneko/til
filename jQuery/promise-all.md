# Promise all

```javascript
function updateAllNotes() {
    var getarray = [],
        i, len;

    for (i = 0, len = data.length; i < len; i += 1) {
        getarray.push(getNote(data[i].key));
    };

    $.when.apply($, getarray).done(function() {
        // do things that need to wait until ALL gets are done
    });
}
```

## Reference

* [stack overflow](http://stackoverflow.com/questions/6538470/jquery-deferred-waiting-for-multiple-ajax-requests-to-finish)
* [stack overflow](http://stackoverflow.com/questions/5627284/pass-in-an-array-of-deferreds-to-when)
* [Promise.all()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)