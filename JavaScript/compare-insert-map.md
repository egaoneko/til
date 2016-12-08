# Compare insert map

## Numeric map

```javascript
var sTime = null;
var keys = [];
var temp = [];
var numObj = {};

for(var idx=0; idx<10000000; idx ++) {
	keys.push(idx);
}
for(var idx=0; idx<10000000; idx ++) {
	temp.push(idx.toString());
}
sTime = new Date().getTime();
for(var idx=0; idx<10000000; idx ++) {
	numObj[keys[idx]] = 1;
}
console.log(new Date().getTime()-sTime);

```

## String map

```javascript
var sTime = null;
var keys = [];
var temp = [];
var strObj = {};

for(var idx=0; idx<10000000; idx ++) {
	temp.push(idx);
}
for(var idx=0; idx<10000000; idx ++) {
	keys.push(idx.toString());
}
sTime = new Date().getTime();
for(var idx=0; idx<10000000; idx ++) {
	strObj[keys[idx]] = 1;
}
console.log(new Date().getTime()-sTime);
```

## Result

```bash
$>node numeric.js
671

$>node string.js
3076
```