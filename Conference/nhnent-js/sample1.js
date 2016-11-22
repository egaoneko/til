function counter(val) {
    function _increase() {
        val += 1;
    }

    function _decrease() {
        val -= 1;
    }

    function getVal() {
        return val;
    }

    return {
        val: getVal,
        increase: _increase,
        decrease: _decrease
    }
}

var inst = counter(5);

inst.increase();
console.log(inst.val()); // 6

inst.decrease();
console.log(inst.val()); // 5
