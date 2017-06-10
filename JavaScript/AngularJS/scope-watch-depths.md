# Scope $watch Depths

Dirty checking can be done with three strategies: **By reference**, **by collection contents**, and **by value**. The strategies differ in the kinds of changes they detect, and in their **performance characteristics**.

## Watching by reference

Watching ``by reference`` (``scope.$watch (watchExpression, listener)``) detects a change when the whole value returned by the watch expression switches to a new value. **If the value is an array or an object, changes inside it are not detected.** This is **the most efficient strategy**.

## Watching by collection contents

Watching ``by collection contents`` (``scope.$watchCollection (watchExpression, listener)``) detects changes that occur inside an array or an object: When items are added, removed, or reordered. **The detection is shallow - it does not reach into nested collections.** Watching collection contents is **more expensive** than watching by reference, because **copies of the collection contents need to be maintained**. However, the strategy attempts to minimize the amount of copying required.

## Watching by value

Watching ``by value`` (``scope.$watch (watchExpression, listener, true)``) detects any change in an arbitrarily nested data structure. It is **the most powerful change detection strategy**, but also **the most expensive**. **A full traversal of the nested data structure** is needed on each digest, and **a full copy of it needs to be held in memory**.

![concepts-scope-watch-strategies.png](../img/AngularJS/scope-watch-depths/concepts-scope-watch-strategies.png)

## Reference

* [Scope $watch Depths](https://docs.angularjs.org/guide/scope#scope-watch-depths)