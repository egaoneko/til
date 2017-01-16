# Copy files

```javascript
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'your-app'),
    plugins: [
        new CopyWebpackPlugin([
            { from: 'static' }
        ])
    ]
};
```

* [Copy Webpack Plugin](https://github.com/kevlened/copy-webpack-plugin) : This is a webpack plugin that copies individual files or entire directories to the build directory.



## Reference

* [stack overflow](http://stackoverflow.com/questions/27639005/how-to-copy-static-files-to-build-directory-with-webpack)