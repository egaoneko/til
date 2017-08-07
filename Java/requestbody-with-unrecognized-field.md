# RequestBody with Unrecognized field

```java
// Controller
@RequestMapping(value = "/sample", method = RequestMethod.POST, produces = "application/json", consumes = "application/json")
@ResponseBody
public TestBody sample(@RequestBody TestBody testBody) {
    return testBody;
}

// Body
@Data
public class TestBody {
	private String testString;
	private ArrayList testArray;
}
```

```json
{
	"testString": "Test",
    "testArray": [1,2,3,4,5],
    "something":[12,45,12]
}
```

위와 같이 `@RequestBody`로 받는 `TestBody`와 `json`으로 받은 본문과 다를 시 아래와 같은 오류가 발생한다.

```
org.springframework.http.converter.HttpMessageNotReadableException: Could not read JSON: Unrecognized field "something"
```

이를 해결하기 위하여, 아래와 같이 `@JsonIgnoreProperties`을 추가로 붙여주어 해결하였다.

```java
@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class TestBody {
	private String testString;
	private ArrayList testArray;
}
```

## Reference

* [stack overflow](https://stackoverflow.com/questions/4486787/jackson-with-json-unrecognized-field-not-marked-as-ignorable)
