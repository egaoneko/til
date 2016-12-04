# transform vs setTransform method

```javascript
context.transform(scaleX, skewX, skewY, scaleY, translateX, translateY);

context.setTransform(scaleX, skewX, skewY, scaleY, translateX, translateY);
```

* `scaleX`: Increases or decreases the size of the pixels in the X direction
* `skewX`: This effectively angles the X axis up or down
* `skewY`: This effectively angles the Y axis left or right
* `scaleY`: Increases or decreases the size of the pixels in the Y direction
* `translateX`: Moves the whole coordinate system in the X direction (so [0,0] is moved left or right)
* `translateY`: Moves the whole coordinate system in the Y direction (so [0,0] is moved up or down)

At first the two functions may seem similar. However when you start to do multiple transformations the difference may become apparent. The `transform()` function ADDS the transformation that you give it to whatever the current transform is. Whereas the `setTransform()` SETS it to whatever you give it.

```javascript
context.transform(1,0,0,1,5,5); // A translate by [5,5]
context.transform(1,0,0,1,5,5); // A translate by [5,5]
context.transform(1,0,0,1,5,5); // A translate by [5,5]
context.transform(1,0,0,1,5,5); // A translate by [5,5]
```

Has the same result as this:

```javascript
context.setTransform(1,0,0,1,20,20); // A translate by [20,20]
```