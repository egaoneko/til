# Object.keys method

The `Object.keys()` method returns an array of a given object's own enumerable properties, in the same order as that provided by a `for...in` loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).

```javascript
Object.keys(obj)
```

> * Parameters
>**obj**
>The object whose enumerable own properties are to be returned.
> * Return value
>An array of strings that represent all the enumerable properties of the given object.