# splice method

```javascript
array.splice(start, deleteCount[, item1[, item2[, ...]]])
```

> splice() 메소드는 배열의 내용을 추가/제거하는 데 사용됩니다.
>
>* start
>변경이 시작되는 인덱스입니다. 만약 배열의 길이보다 더 길 경우, 배열의 끝부터 변경을 시작합니다. 음수의 경우, 마지막 요소부터 세어갑니다.
>* deleteCount
>배열에서 제거를 할 요소의 수 입니다. 만약  deleteCount가 0의 경우, 아무런 요소도 제거되지 않습니다. 이경우, 최소한 하나의 새 요소를 특정해 주어야 합니다. 만약, deleteCount가 start에서 부터의 남은 요소 수 보다 많을 경우, 남은 요소를 모두 제거합니다.
>* itemN
>배열에 추가될 요소입니다. 만약 아무런 요소도 특정되지 않을 경우,  splice()는 요소를 오직 삭제만 할 것입니다.
>* return
>삭제된 요소들의 배열이 리턴됩니다. 만약 하나의 요소만이 삭제되었을 경우, 하나의 요소가 들어있는 배열이 리턴됩니다. 만약 아무런 요소도 삭제되지 않았을 경우, 빈 배열이 리턴됩니다.
>
>[Array.prototype.splice()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

### Example

```javascript
var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

// removes 0 elements from index 2, and inserts 'drum'
var removed = myFish.splice(2, 0, 'drum');
// myFish is ['angel', 'clown', 'drum', 'mandarin', 'surgeon']
// removed is [], no elements removed

// removes 1 element from index 3
removed = myFish.splice(3, 1);
// myFish is ['angel', 'clown', 'drum', 'surgeon']
// removed is ['mandarin']

// removes 1 element from index 2, and inserts 'trumpet'
removed = myFish.splice(2, 1, 'trumpet');
// myFish is ['angel', 'clown', 'trumpet', 'surgeon']
// removed is ['drum']

// removes 2 elements from index 0, and inserts 'parrot', 'anemone' and 'blue'
removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
// myFish is ['parrot', 'anemone', 'blue', 'trumpet', 'surgeon']
// removed is ['angel', 'clown']

// removes 2 elements from index 3
removed = myFish.splice(3, Number.MAX_VALUE);
// myFish is ['parrot', 'anemone', 'blue']
// removed is ['trumpet', 'surgeon']
```


