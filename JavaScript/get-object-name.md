# Get object name

```javascript
function alertClassOrObject (o) {
   window.alert(o.objectName); //"myObj" OR "myClass" as a String
}

function myClass () {
   this.foo = function () {
       alertClassOrObject(this);
   }
}

var myObj = new myClass();
myObj.foo();
```

```javascript
myObj.constructor.name
//Returns "myClass".
```

## Reference

* [stack overflow](http://stackoverflow.com/questions/10314338/get-name-of-object-or-class-in-javascript)