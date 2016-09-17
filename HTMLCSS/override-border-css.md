# Override Border CSS

```css
ul.nav-tabs li {
  float: left;
  border-right: 1px solid #a9a9a9;
  border-bottom: 1px solid #a9a9a9;
}
```

```css
ul.nav-tabs li.active {
  border-bottom: none;
}
```

위와 같이 `li`태그를 `active`한 경우에 아래쪽 외각선을 지우고자 하였지만, 외각선이 완전히 지워지지 않고 반투명하게 남아있는 문제가 있었다.

```css
ul.nav-tabs li.active {
  border-bottom: 1px solid #ffffff;
}
```

이를 해결하기 위해, 배경색과 동일한 외각선을 반영하여 반투명하게 보이던 외각선을 지웠다.