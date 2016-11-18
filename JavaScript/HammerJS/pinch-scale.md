# Pinch scale

```javascript
// create a hammer instance
var mc = new Hammer.Manager(myImageElement);

// add the pinch recognizer
mc.add(new Hammer.Pinch({ threshold: 0 }));

// listen to the events!
mc.on("pinch", function(ev) { console.log(ev.scale); });
```

## Reference

* [Hammer.Pinch(options)](http://hammerjs.github.io/recognizer-pinch/)
* [Github](https://github.com/hammerjs/hammer.js/issues/621)