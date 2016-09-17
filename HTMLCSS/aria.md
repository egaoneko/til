# ARIA

Accessible Rich Internet Applications(WAI-ARIA)는 W3C의 Web Accessibility Initiative에서 제작하고, 스크린리더 같은 보조기기에서 필요한 정보들을 추가하는 방법을 제공한다. ARIA는 마크업에서 특별한 속성을 추가하여 개발자들이 위젯의 디테일한 정보를 제공할 때 사용한다. 동적 웹 어플리케이션에서 찾을 수 있는 데스크톱 스타일 콘트롤과 표준 HTML 태그 사이에 있는 차이를 채우기 위해, ARIA는 친숙한 UI 위젯의 동작 상태(state)와 역할(Role)에 대한 설명을 제공한다.

```xml
<!-- Now *these* are Tabs! -->
<!-- We've added role attributes to describe the tab list and each tab. -->
<ol role="tablist">
  <li id="ch1Tab" role="tab">
    <a href="#ch1Panel">Chapter 1</a>
  </li>
  <li id="ch2Tab" role="tab">
    <a href="#ch2Panel">Chapter 2</a>
  </li>
  <li id="quizTab" role="tab">
    <a href="#quizPanel">Quiz</a>
  </li>
</ol>

<div>
  <!-- Notice the role and aria-labelledby attributes we've added to describe these panels. -->
  <div id="ch1Panel" role=”tabpanel” aria-labelledby="ch1Tab">Chapter 1 content goes here</div>
  <div id="ch2Panel" role=”tabpanel” aria-labelledby="ch2Tab">Chapter 2 content goes here</div>
  <div id="quizPanel" role=”tabpanel” aria-labelledby="quizTab">Quiz content goes here</div>
</div>
```

### Reference

* [An overview of accessible web applications and widgets](https://developer.mozilla.org/ko/docs/Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets)
