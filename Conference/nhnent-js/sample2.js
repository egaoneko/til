function counter(val) {
    var _val = val !== undefined ? val : 0;

    function _increase() {
        _val += 1;
    }

    function _decrease() {
        _val -= 1;
    }

    function _clone() {
        return counter(_val);
    }

    function getVal() {
        return _val;
    }

    return {
        val: getVal,
        increase: _increase,
        decrease: _decrease,
        clone: _clone
    }
}

var inst1 = counter(5);

inst1.increase();
console.log(inst1.val()); // 6

inst2 = inst1.clone();
inst2.increase();
console.log(inst2.val()); // 7

console.log(inst1.val()); // 6
