function Parent() {};
Parent.prototype.pMethod = function() {};

function Child() {};
Child.prototype = new Parent(); // 이미 만들어진 Child.prototype을 덮어씀
Child.prototype.cMethod = function() {};

function GrandChild() {};
GrandChild.prototype = new Child();
GrandChild.prototype.gMethod = function() {};
GrandChild.gMethod2 = function() {};

var p3 = new GrandChild();
p3.gMethod3 = function() {};

console.log("isParentMethod", p3.hasOwnProperty("pMethod")); // false
console.log("isChildMethod", p3.hasOwnProperty("cMethod")); // false
console.log("isGrandChildMethod", p3.hasOwnProperty("gMethod")); // false
console.log("isGrandChildMethod2", p3.hasOwnProperty("gMethod2")); // false  이 경우는 static 메소드와 같다. 
console.log("isGrandChildMethod2", GrandChild.hasOwnProperty("gMethod2")); // true
console.log("isGrandChildMethod3", p3.hasOwnProperty("gMethod3")); // true
