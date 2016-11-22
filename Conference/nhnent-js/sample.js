function foo() {
	var a = 2;

	function bar() {
		return ++a;
	}
	return bar;
}

var baz1 = foo();
var baz2 = foo();

console.log(baz1());
console.log(baz2());
