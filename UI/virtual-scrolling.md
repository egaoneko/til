# 가상 스크롤

```javascript
/*
가상 재화면 구성 과정은 아래와 같다:

--------
   --------
      --------
         --------
            --------
               --------
                  --------
                     --------
                        --------
                           --------
                              --------
                                 --------
                                    --------
                                       --------
                                          --------

==================================================

[=] - 실제 스크롤 가능 높이 (h)
[-] - "페이지";  모든 (n) 페이지의 총 높이는 (총 높이th) = (페이지 높이 ph) * (페이지 n)

페이지 사이 겹치는 부분 (cj) 과 스크롤바 길이
스크롤 높이에 따른 페이지 전환시점에 넘어갈 것이다.

부드럽게 유지하기 위해 (n) 과 (cj) 를 최소화해야 한다.
(ph) 를 (h) 값의 1/100 으로 설정해야 좋은 시발점이 된다.
*/

var s = 10000000                // 행 크기
var rh = 50;                    // 행 높이
var th = rh * s;                // 가상 높이
var h =  th > 100000? 100000:th;// 실제 스크롤 가능 높이
var ph = h / 100;               // 페이지 높이
var n = Math.ceil(th / ph);     // 페이지 개수
var vp = 400;                   // 보이는 부분 높이
var cj = (th - h) / (n - 1);    // "넘어가는" 계수

var page = 0;                   // 현재 페이지
var offset=0;                   // 현재 페이지 위치
var prevScrollTop = 0;

var rows = {};                  // 캐시된 행 노드

var viewport, content;


$(function() {
    viewport = $("#viewport");
    content = $("#content");
    
    viewport.css("height",vp);
    content.css("height",h);
    
    viewport.scroll(onScroll);
    viewport.trigger("scroll");
});

function onScroll() {
    var scrollTop = viewport.scrollTop();
    
    if (Math.abs(scrollTop-prevScrollTop) > vp) 
        onJump();
    else
        onNearScroll();
    
    renderViewport();
    
    logDebugInfo();
}

function onNearScroll() {
    var scrollTop = viewport.scrollTop();
    
    // 다음 페이지
    if (scrollTop + offset > (page+1)*ph) {
        page++;
        offset = Math.round(page * cj);
        viewport.scrollTop(prevScrollTop = scrollTop - cj);
        removeAllRows();
    }
    // 이전 페이지
    else if (scrollTop + offset < page*ph) {
        page--;
        offset = Math.round(page * cj);
        viewport.scrollTop(prevScrollTop = scrollTop + cj);
        removeAllRows();
    }
    else
        prevScrollTop = scrollTop;
}

function onJump() {
    var scrollTop = viewport.scrollTop();
    page = Math.floor(scrollTop * ((th-vp) / (h-vp)) * (1/ph));
    offset = Math.round(page * cj);
    prevScrollTop = scrollTop;
    
    removeAllRows();
}

function removeAllRows() {
    for (var i in rows) {
        rows[i].remove();
        delete rows[i];
    }
}

function renderViewport() {
    // 보이는 부분 + 버퍼 를 계산한다.
    var y = viewport.scrollTop() + offset,
        buffer = vp,
        top = Math.floor((y-buffer)/rh),
        bottom = Math.ceil((y+vp+buffer)/rh);
    
    top = Math.max(0,top);
    bottom = Math.min(th/rh,bottom);
    
    // 더이상 보이지 않는 부분을 제거한다.
    for (var i in rows) {
        if (i < top || i > bottom) {
            rows[i].remove();
            delete rows[i];
        }
    }
    
    // 새 행을 넣는다.
    for (var i=top; i<=bottom; i++) {
        if (!rows[i])
            rows[i] = renderRow(i);
    }
}

function renderRow(row) {
    return $("<div class='row' />")
        .css({
            top: row*rh - offset,
            height: rh
        })
        .text("row " + (row+1))
        .appendTo(content);
}

function logDebugInfo() {
    var dbg = $("#debug");
    dbg.empty();
    dbg.append("페이지 개수 n = " + n + "<br>");
    dbg.append("페이지 높이 ph = " + ph + "<br>");
    dbg.append("넘긴 계수 cj = " + cj + "<br>");
    dbg.append("<hr>");
    dbg.append("현제 페이지 = " + page + "<br>");
    dbg.append("현재 위치 = " + offset + "<br>");
    dbg.append("가상 y 위치 = " + (prevScrollTop + offset) + "<br>");
    dbg.append("실제 y 위치 = " + prevScrollTop + "<br>");
    dbg.append("표시된 행 DOM 개수 = " + $(".row").length + "<br>");
}
```

```xml
<div id="viewport">
    <div id="content"></div>
</div>

<div id="debug"></div>
```

```css
#debug {
    margin-left: 400px;
    width: 200px;
    background: beige;
    font-size: 9pt;
    opacity: 0.5;
    border: 1px solid gray;
    padding: 10px;
}

#viewport {
    float: left;
    border: 1px solid black;
    overflow: auto;
    width: 350px;
}

#content {
    position: relative;
    overflow: hidden;
}

.row {
    position: absolute;
    left: 0px;
    width: 100%;
    border-bottom: 1px dotted blue;
    font-size: 9pt;
}

.row:hover {
    background: rgba(0,0,255,0.05);
}
```

* [jQuery](https://embed.plnkr.co/uawrWP/)

<iframe style="width: 100%; height: 600px" src="https://embed.plnkr.co/uawrWP/" frameborder="0" allowfullscren="allowfullscren"></iframe>

* [Angular](https://embed.plnkr.co/SaiPOq/)

<iframe style="width: 100%; height: 600px" src="https://embed.plnkr.co/SaiPOq/" frameborder="0" allowfullscren="allowfullscren"></iframe>