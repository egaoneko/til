# Protractor does not work on Mac OSX El Capitan


# Problem

```bash
✘  ~/Workspace/etc/angular-phonecat  ➦ 5da7558  npm run protractor

[20:30:12] I/local - Starting selenium standalone server...
[20:30:12] I/launcher - Running 1 instances of WebDriver
[20:31:27] E/launcher - Process exited with error code 1
/Users/donghyun/Documents/Workspace/etc/angular-phonecat/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:654
    throw error;
    ^

npm ERR! Darwin 15.5.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "run" "protractor"
npm ERR! node v4.2.1
npm ERR! npm  v2.14.7
npm ERR! code ELIFECYCLE
npm ERR! angular-phonecat@0.0.0 protractor: `protractor e2e-tests/protractor.conf.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the angular-phonecat@0.0.0 protractor script 'protractor e2e-tests/protractor.conf.js'.
npm ERR! This is most likely a problem with the angular-phonecat package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     protractor e2e-tests/protractor.conf.js
npm ERR! You can get their info via:
npm ERR!     npm owner ls angular-phonecat
npm ERR! There is likely additional logging output above.

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/donghyun/Documents/Workspace/etc/angular-phonecat/npm-debug.log
```

### Solution

``protractor.conf.js``파일에 아래의 설정을 추가한다.

```javascript

exports.config = {

	...
	
	directConnect: true,
	chromeOnly: true,
	
	...
}
```

### Reference

* [github issue](https://github.com/angular/angular-phonecat/issues/230#issuecomment-202532687)