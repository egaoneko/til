# Table

### 열(TR)과 행(TD)의 확장

#### 열 확장

```xml
<table border="1">
<tr>
 <td colspan="2">1*1 셀</td>
</tr>
<tr>
 <td>2*1 셀</td>
 <td>2*2 셀</td>
</tr>
</table>
```

#### 행 확장

```xml
<table border="1">
<tr>
 <td rowspan="2">1*1 셀</td>
 <td>1*2 셀</td>
</tr>
<tr>
 <td>2*2 셀</td>
</tr>
</table>
```

### 테두리 중복 제거

```css
.mytable { border-collapse:collapse; }  
.mytable th, .mytable td { border:1px solid black; }
```

### Reference

* [stack overflow](var maxScrollLeft = element.scrollWidth - element.clientWidth;)
* [HTML 테이블 모든 테두리 1px 주기](http://zetawiki.com/wiki/HTML_%ED%85%8C%EC%9D%B4%EB%B8%94_%EB%AA%A8%EB%93%A0_%ED%85%8C%EB%91%90%EB%A6%AC_1px_%EC%A3%BC%EA%B8%B0)

