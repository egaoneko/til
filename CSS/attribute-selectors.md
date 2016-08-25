# Attribute Selectors

```css
/* to select elements with a specified attribute. */
a[target] {
    background-color: yellow;
}

/* to select elements with a specified attribute and value. */
a[target="_blank"] {
    background-color: yellow;
}

/* to select elements with an attribute value containing a specified word. */
[title~="flower"] {
    border: 5px solid yellow;
}

/* to select elements with the specified attribute starting with the specified value. (like class="top", or followed by a hyphen( - ), like class="top-text", but exept class="topcontent") */
[class|="top"] {
    background: yellow;
}

/* to select elements whose attribute value begins with a specified value. (like class="top", class="top-text" or class="topcontent") */
[class^="top"] {
    background: yellow;
}

/* to select elements whose attribute value ends with a specified value. (like class="first_test", class="my-test" or class="mytest") */
[class$="test"] {
    background: yellow;
}

/* to select elements whose attribute value contains a specified value. (like like class="first_test", class="my-test" or class="mytest") */
[class*="te"] {
    background: yellow;
}
```

### Reference

* [CSS Attribute Selectors](http://www.w3schools.com/css/css_attribute_selectors.asp)