# Merge two objects

## ES5

```javascript
for (var attrname in obj2) { obj1[attrname] = obj2[attrname]; }
```

```javascript
/**
 * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
 * @param obj1
 * @param obj2
 * @returns obj3 a new object based on obj1 and obj2
 */
function merge_options(obj1,obj2){
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}
```

## Libraries

* Prototype: [Object.extend(destination, source)](http://prototypejs.org/doc/latest/language/Object/extend/)
Prototype first used the name “extend” for this operation.
* Underscore.js: [_.extend(destination, *sources)](http://underscorejs.org/#extend)

## ES6

```javascript
Object.assign(target, source_1, ..., source_n)
```

## Deep merge

```javascript
/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}
```

### example

```javascript
mergeDeep(this, { a: { b: { c: 123 } } });
// or
const merged = mergeDeep({a: 1}, { b : { c: { d: { e: 12345}}}});  
console.dir(merged); // { a: 1, b: { c: { d: [Object] } } }
```

## Reference

* [stack overflow](http://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically)
* [ECMAScript 6: merging objects via Object.assign()](http://www.2ality.com/2014/01/object-assign.html)
* [stack overflow](https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge)