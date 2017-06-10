# radio button needs click twice

```xml
<input type="radio" 
       name="groupName"  
       ng-model="editObject.Property"                             
       ng-value="someValue"/>
```

위와 같이 `radio` 버튼을 생성해서 사용했는데 `radio`버튼을 두번 클릭해야 체크상태가 되는 것을 확인했다. (내부적으로 값은 첫번째 클릭에 이미 변해있었다.)

이를 해결하기 위해 검색을 해보았더니 `name` 속성으로 인한 충돌이 원인이라고 한다.

```xml
<input type="radio"
       ng-model="editObject.Property"                             
       ng-value="someValue"/>
```

위와 같이 `name` 속성을 지우면 문제없이 작동하였다.

## Reference

* [stack overflow](http://stackoverflow.com/questions/15778739/angularjs-required-radio-buttons-needs-two-click-events-to-be-valid)