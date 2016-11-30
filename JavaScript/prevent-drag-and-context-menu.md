# Prevent drag and context menu

```javascript
<script>
$(document).ready(function() {
    $(document).bind("contextmenu", function(e){
        alert("오른쪽 마우스 금지");
        return false;
    });
 
    $('img').bind("contextmenu",function(e){ 
        alert("그림에서 오른쪽 마우스 금지"); 
        return false; 
    }); 
 
    $('img').bind("selectstart",function(e){ 
        alert("그림에서 오른쪽 마우스 금지"); 
        return false;  
    }); 
}); 
 
document.oncontextmenu=function(){return false;} // 우클릭 방지
document.onselectstart=function(){return false;} // 드래그 방지
document.ondragstart=function(){return false;} // 선택 방지
document.onmousedown=function(){return false;}
</script>
```

## Reference

* [오른쪽 마우스 금지,드래그 금지 소스](https://chongmoa.com:45183/jquery/43945)