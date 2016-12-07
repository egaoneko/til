# JS Inheritance

```javascript
function Rectangle(w, h) {
    if(w <= 0 || h <= 0) {
        throw '길이는 양수이어야 합니다.';
    }
    var width = w;
    var height = h;
     
    this.getWidth = function() {
        return width;
    };
    this.getHeight = function() {
        return height;
    };
    this.setWidth = function(val) {
        if(val <= 0) {
            throw '길이는 양수이어야 합니다.';
        }
        else {
            width = val;
        }
    };
    this.setHeight = function(val) {
        if(val <= 0) {
            throw '길이는 양수이어야 합니다.';
        }
        else {
            height = val;
        }
    };
}
 
Rectangle.prototype.getArea = function() {
    return this.getWidth() * this.getHeight();
};
 
// Square는 Rectangle을 상속받습니다.
function Square(length) {
    this.base = Rectangle;
    this.base(length, length);
}
// prototype도 상속받을 수 있도록 별도 작업이 필요합니다.
Square.prototype = Rectangle.prototype;

var square = new Square(5);         // Square의 인스턴스 생성
alert(square instanceof Rectangle); // 상속 확인(true 출력)
```

```javascript
function Square(length) {
    Rectangle.call(this, length, length);
}
Square.prototype = new Rectangle();
Square.prototype.constructor = Square;
```

## Reference

[[JavaScript] 객체지향 프로그래밍](https://opentutorials.org/course/787/5102)