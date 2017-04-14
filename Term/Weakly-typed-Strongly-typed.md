# Weakly-typed & Strongly-typed

## 약 타입(Weakly-typed or Loosely typed)

> A weakly typed language may produce unpredictable results or may perform implicit type conversion. [Strong and weak typing -Wikipedia](https://en.wikipedia.org/wiki/Strong_and_weak_typing)

약 타입은 값의 타입을 바꿀 수 있다(형 변환). 즉 약 타입 언어는 자료형이 달라도 컴파일 또는 실행 시점에 정해진 규칙에 따라 암시적 형 변환(Implicit conversion)을 해주는 방식이다.

```cpp
// JavaScript, Python...
var a = 1;
var b = 1.3;
var c = a + b; // int 형인 a가 float 형으로 변환됩니다.
```

## 강 타입(Strongly-typed)

> A strongly typed language is more likely to generate an error or refuse to compile if the argument passed to a function does not closely match the expected type. [Strong and weak typing -Wikipedia](https://en.wikipedia.org/wiki/Strong_and_weak_typing)

강 타입(Strongly-typed)은 값 자체가 타입이며, 타입을 바꿀 수 없다. 즉 컴파일 또는 실행할 때 자료형이 다르면 에러를 발생시킨다. 강 타입 언어이므로 암시적 형 변환을 하지 않으며, 컴파일할 때 타입을 결정하므로 정적 타입 언어이다.

```go
// Go, Java...
var a int = 1
var b float32 = 1.3
var c float32 = a + b // int 형인 a가 float32 형으로 변환되지 않고 컴파일 에러 발생
```

## 참고

* [약 타입과 강 타입](https://www.pyrasis.com/book/GoForTheReallyImpatient/Unit01/02)
* [Strong and weak typing](https://en.wikipedia.org/wiki/Strong_and_weak_typing)