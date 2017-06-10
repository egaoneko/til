# extend method

Merge the contents of two or more objects together into the first object.

```javascript
jQuery.extend( target [, object1 ] [, objectN ] )
```

* target(Type: `Object`)
An object that will receive the new properties if additional objects are passed in or that will extend the jQuery namespace if it is the sole argument.
* object1(Type: `Object`)
An object containing additional properties to merge in.
* objectN(Type: `Object`)
Additional objects containing properties to merge in.

```javascript
jQuery.extend( [deep ], target, object1 [, objectN ] )
```

* deep(Type: `Boolean`)
If true, the merge becomes recursive (aka. deep copy).
* target(Type: `Object`)
The object to extend. It will receive the new properties.
* object1(Type: `Object`)
An object containing additional properties to merge in.
* objectN(Type: `Object`)
Additional objects containing properties to merge in.

### Example

```javascript
var object1 = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var object2 = {
  banana: { price: 200 },
  durian: 100
};
 
// Merge object2 into object1
$.extend( object1, object2 );
 
// Assuming JSON.stringify - not available in IE<8
$( "#log" ).append( JSON.stringify( object1 ) );
```