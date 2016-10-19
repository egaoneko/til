# Get image with Promise

## JavaScript

```javascript
function getImage(url){
    return new Promise(function(resolve, reject){
        var img = new Image()
        img.onload = function(){
            resolve(url)
        }
        img.onerror = function(){
            reject(url)
        }
        img.src = url
    })
}
```

```javascript
getImage('imgUrl').then(function(successUrl){
    //do stufff
}).catch(function(errorUrl){
    //do stuff
})
```

## jQuery

```javascript
function getImage (url) {
    var dfd = $.Deferred();
    var img = new Image();

    img.onload = function () {
      dfd.resolve(img)
    };

    img.onerror = function () {
      dfd.reject(img)
    };

    img.src = url;
    img.$promise = dfd;
    return img;
}
```

```javascript
var img = getImage(url);

img.$promise.done(function (q) {
  ...
}).fail(function (q) {
  ...
});
```

## Reference

* [Promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [stack overflow](http://stackoverflow.com/questions/3511200/new-image-how-to-know-if-image-100-loaded-or-not)