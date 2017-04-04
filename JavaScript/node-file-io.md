# Node file io

## Sync

```javascript
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('file', 'utf8'));
```

## Async

```javascript
var fs = require('fs');
var obj;
fs.readFile('file', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
});
```