# NgModelController

```javascript
.directive('juBtnRadio', juBtnRadio);

juBtnRadio.$inject = ['$parse'];
  function juBtnRadio ($parse) {
    return {
      require: ['juBtnRadio', 'ngModel'],
      controller: 'JuButtonsController',
      controllerAs: 'buttons',
      link: linkFun
    };

    function linkFun (scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      ...
    };
  }
}
```

`directvice`에서 `require`를 위와 같이 설정하면 `link`에서 `NgModelController`를 가져올 수 있다. 이 `NgModelController`를 사용하여 `<input>`, `<select>`, `<textarea>`요소 개개의 유효성 상태나
사용자 입력 상태를 관리할 수 있다. 또한 컨트롤 요소의 `name` 속성의 값을 이용해 `$scope[name]`이나 `$scope.name`으로 해당 인스턴스에 접근할 수 있다.

### NgModelController의 속성과 메서드

#### 속성

| 속성 명 | 내용 |
| :--------: | --- |
| $viewValue | 화면에서 보이는 값이다. |
| $modelValue | 컨트롤 요소가 바인딩된 모델 값이다. |
| $parsers | 함수들의 배열이다. 각 함수는 순서대로 DOM으로부터 값을 읽을 때마다 호출된다. 즉, `$viewValue`의 값이 바뀔 때 호출된다. 호출된 함수가 반환한 값은 다음 함수로 전달되고 최종적으로 `$modelValue`에 값이 전달된다. |
| $formatters | 함수의 배열이다. 각함수는 순서대로 바인딩된 데이터 (`$modelValue`)가 바뀔 때마다 호출된다. 호출된 함수가 반환한 값은 다음 함수로 전달되고 최종적으로 `$viewValue`에 전달된다. |
| $viewChangeListeners | 화면 요소의 값이 변경될 때마다 호출되는 함수의 배열이다. 해당 함수들은 어떠한 인자도 없이 호출되고 반환된 값은 무시한다. |
| $error | 휴효성 검증의 이름(required, email, minlength..)을 키로 하고 각 컨트롤 요소의 `name`을 값으로 가진 객체다. |
| $pristine | 사용자의 입력이 없었으면 `true`다. |
| $dirty | 사용자의 입력이 있었으면 `true`다. |
| $valid | `<form>`에 있는 컨트롤 요소(input)가 모두 유효성 검증을 통과하면 true다. |
| $invalid | `<form>`에 있는 컨트롤 요소(input)가 모두 유효성 검증을 통과하면 false다. |

#### 메서드

| 메서드 명 | 내용 |
| :--------: | --- |
| $render() | 화면이 업데이트될 때마다 호출된다. 지시자를 만들어 `NgModelController`의 `$render`에 함수를 대입해 놓으면 화면이 업데이트될 때마다 호출된다. |
| $setValidity(validationErrorkey, isValid) | 유효성 상태를 설정하고 컨트롤 요소의 휴효성 상태가 변경될 떄 `FormController`에게 알려준다. `validationErrorKey` 값이 `$error[validationErrorKey] = is Valid` 형태로 되며 `validationErrorKey`는 카멜케이스 형태로 기술하면 css로 `ng-valid-my-error`/`n-invalid-my-error`와 같은 형태로 삽입된다. |
| $isEmpty | 입력 요소의 값이 빈 값인지 확인한다. 여기서 빈 값이란 undefined, null 또는 NaN이 해당된다. 그리고 해당 메서드를 오버라이드하면 빈 값에 대한 정의를 다시 할 수 있다. |
| $setPristine | 요소의 `$pristine`을 `false`로 변경한다. |
| $setViewValue(value) | 화면에 값을 추가한다. |

### Reference

* [ngModel.NgModelController](https://docs.angularjs.org/api/ng/type/ngModel.NgModelController)
* [폼과 유효성 검사를 위한 템플릿(폼/입력 지시자)](http://kshmc.tistory.com/entry/8-%ED%8F%BC%EA%B3%BC-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC%EB%A5%BC-%EC%9C%84%ED%95%9C-%ED%85%9C%ED%94%8C%EB%A6%BF%ED%8F%BC%EC%9E%85%EB%A0%A5-%EC%A7%80%EC%8B%9C%EC%9E%90)
* [Angular Form](http://yubylab.tistory.com/entry/8Angular-Form)
