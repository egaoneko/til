# Problems with sinon.js

## Can't run sinon in node

```javascript
// webpack.config.js
resolve: {
    alias: { sinon: 'sinon/pkg/sinon' }
},
loaders: [{ test: /sinon.*\.js$/,   loader: "imports?define=>false,require=>false"  }],
noParse: [/sinon/]
```

* [Can't run sinon in node when webpacked](https://github.com/webpack/webpack/issues/177)

## Fack XMLHttpRequest in node

```javascript
// beforeEach()
global.XMLHttpRequest = sinon.useFakeXMLHttpRequest();
```

* [stack overflow](http://stackoverflow.com/questions/32304150/correct-usage-of-sinons-fake-xmlhttprequest)