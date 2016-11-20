# getOwnPropertyNames & keys method

## Object.getOwnPropertyNames(obj)

The `Object.getOwnPropertyNames()` method returns an array of all properties (enumerable or not) found directly upon a given object.

```javascript
Object.getOwnPropertyNames(obj)
```

>* Parameters obj
>The object whose enumerable and non-enumerable own properties are to be returned.
>* Return value
>An array of strings that correspond to the properties found directly upon the given object.
>
>[Object.getOwnPropertyNames()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)

```javascript
var arr = ['a', 'b', 'c'];
console.log(Object.getOwnPropertyNames(arr).sort()); 
// logs ["0", "1", "2", "length"]

// Array-like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.getOwnPropertyNames(obj).sort()); 
// logs ["0", "1", "2"]

// Logging property names and values using Array.forEach
Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
  console.log(val + ' -> ' + obj[val]);
});
// logs
// 0 -> a
// 1 -> b
// 2 -> c

// non-enumerable property
var my_obj = Object.create({}, {
  getFoo: {
    value: function() { return this.foo; },
    enumerable: false
  }
});
my_obj.foo = 1;

console.log(Object.getOwnPropertyNames(my_obj).sort()); 
// logs ["foo", "getFoo"]
```

Non-enumerable property를 눈여겨 보자. `enumerable` 속성에 `false`를 준 `getFoo` 메서드도 출력됨을 확인할 수 있다.

```javascript
function ParentClass() {}
ParentClass.prototype.inheritedMethod = function() {};

function ChildClass() {
  this.prop = 5;
  this.method = function() {};
}
ChildClass.prototype = new ParentClass;
ChildClass.prototype.prototypeMethod = function() {};

console.log(
  Object.getOwnPropertyNames(
    new ChildClass() // ["prop", "method"]
  )
);
```

`prototype`으로 상속된 속성들은 제외되고 출력된다.

## Object.keys(obj)

The `Object.keys()` method returns an array of a given object's own `enumerable` properties, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).

```javascript
Object.keys(obj)
```

>* Parameters obj
>The object whose enumerable own properties are to be returned.
>* Return value
>An array of strings that represent all the enumerable properties of the given object.
>
>[Object.keys()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

```javascript
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array like object with random key ordering
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(an_obj)); // console: ['2', '7', '100']

// getFoo is property which isn't enumerable
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 1;

console.log(Object.keys(my_obj)); // console: ['foo']
```

Non-enumerable property인 `getFoo` 메서드는 출력되지 않음을 확인할 수 있다.

## getOwnPropertyNames V.S. keys

Non-enumerable property인지에 따라 `keys`는 속성이 출력될 수 아닐 수도 있지만, `getOwnPropertyNames`는 속성 전부를 보여준다.

## ES6

In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError. In ES6, a non-object argument will be coerced to an object.

```javascript
/*
 * getOwnPropertyNames
 */
Object.getOwnPropertyNames('foo');
// TypeError: "foo" is not an object  (ES5 code)

Object.getOwnPropertyNames('foo');
// ["0", "1", "2", "length"]  (ES6 code)

/*
 * keys
 */
Object.keys("foo");
// TypeError: "foo" is not an object  (ES5 code)

Object.keys("foo");
// ["0", "1", "2"]  (ES6 code)
```

## Reference

* [ECMAScript 5에서 getOwnPropertyNames, keys함수](http://carrotcarrot.blog.me/40188325113)