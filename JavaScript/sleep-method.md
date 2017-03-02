# sleep method

## Issue

JavaScript에 `sleep` 메서드가 없다.

## Promise를 사용한 구현

```javascript
// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// Usage!
sleep(500).then(() => {
    // Do something after the sleep!
});
```

`sleep`이 일어나는 동안 다른 액션을 막기 위해 `loading`을 함께 사용하였다.

## async / await을 사용한 구현 (ES2016)

```javascript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  console.log('Taking a break...');
  await sleep(2000);
  console.log('Two second later');
}

demo();
```

`then` 구문이 필요 없어진다.

## 반복문을 통한 구현

```javascript
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
```

해당 방법으로 하면 `loading`의 별다른 구현이 필요하지는 않지만, debug 용도로만 사용하는 것이 좋다고 한다.

## Reference

* [stack overflow](http://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep)
* [sleep() in JavaScript](https://www.phpied.com/sleep-in-javascript/)