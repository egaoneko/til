# Travis CI settings browser

## Issue

Travis CI에서 `karma` 를 사용해 `browser` 테스트가 작동하지 않았다.

## Solution

`before_install`에 아래와 같이 `browser`에 대해 설정해주면 작동한다.

```yml
before_install:
  - export CHROME_BIN=chromium-browser
  - export DISPLAY=:99.0
  - sh -e /etc/init.d/xvfb start
```

아래는 설정에 대한 전문이다.

```yml
# .travis.yml
language: node_js
node_js:
  - "7"
  - "6"
script: 'npm run build && npm run pretest'
before_install:
  - export CHROME_BIN=chromium-browser
  - export DISPLAY=:99.0
  - sh -e /etc/init.d/xvfb start
before_script:
  - npm run setup
dist: trusty
```

## Reference

* [Testing JavaScript with Jasmine, Travis, and Karma](https://www.sitepoint.com/testing-javascript-jasmine-travis-karma/)
* [How to run JavaScript tests in Chrome on Travis](https://swizec.com/blog/how-to-run-javascript-tests-in-chrome-on-travis/swizec/6647)