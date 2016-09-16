# attr & prop method

HTML의 input태그에서 전체 상품이라는 태그를 만들었다. 이 태그의 기본 ``value``속성을 ``0``으로 설정하고 상품을 제거할 때마다 이 값을 jQuery의 ``.attr()``로 변경하여 사용하고 있었다. 코드는 다음과 같이 작성하였었고 그냥 사용할때는 문제없이 작동하는 것처럼 보였다.


```xml
전체 가격 : <input type="text" name="total_price" id="total_price" size="30" value="0"/><br/>
```

```javascript
function delGoods(id) {
    var addTrId = '#goods_id_' + id;
    var price = parseInt($('#price_' + id).text());
    var totalPrice = parseInt($('#total_price').attr('value'));
    $(addTrId).remove();
    $('#total_price').attr('value',totalPrice-price);

    if(parseInt($('#total_price').attr('value'))<0){
        $('#total_price').attr('value',0);
    }
};
```

문제는 jQuery를 통해서 수정할 때가 아니라 직접 input태그의 값을 수정하게 되면 그 뒤로는 jQuery를 통해 값을 변경해도 반영이 되지 않는 현상이 발생하였다. 요소검사를 통해 확인해보면 속성의 값은 변하지만 정작 보이는 값은 변경되지 않았다.

이를 해결하기 위해 검색을 해본 결과 jQuery에서 속성을 변경하는 방법이 두 가지가 있다는 사실을 알 수 있었다. ``.attr()``과 ``.prop()``이다.

자세한 사항은 아래 두 링크를 참조하면 된다.
* [stackoverflow](http://stackoverflow.com/questions/5874652/prop-vs-attr/5876747#5876747)
* [jongmin님의 블로그](http://javascriptandjquerydev.blogspot.kr/2012/07/attr-prop.html)

jongmin님의 블로그에서 두 메소드에 차이에 대해서 다음과 같이 설명하였다.

> * ``.attr()``는HTML의 속성을 취급
>
> * ``.prop()``는JavaScript 프로퍼티을 취급
>
> * 양쪽은 같은 이름에서 다른게 있다.

자세한 사항은 jongmin님의 블로그에 자세히 설명되어 있으니 확인해보자. 한글로 적혀있고 설명도 잘되어있다!

이를 바탕으로 문제가 되는 ``.attr()``을 ``.prop()``으로 다음과 같이 바꾸어 실행해보았다.

```javascript
function delGoods(id) {
    var addTrId = '#goods_id_' + id;
    var price = parseInt($('#price_' + id).text());
    var totalPrice = parseInt($('#total_price').prop('value'));
    $(addTrId).remove();
    $('#total_price').prop('value',totalPrice-price);

    if(parseInt($('#total_price').prop('value'))<0){
        $('#total_price').prop('value',0);
    }
};
```

확인을 해보니 발생하던 문제가 말끔이 사라졌다. 상품들을 삭제할 때마다 정상적으로 전체 가격에서 빠져나가는 것을 확인할 수 있었다.
