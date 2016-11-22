function Todo (context) {
        this.isComplete = false;
        this.context = context;
}

Todo.prototype.getContext = function(){
    return this.context;
};

Todo.prototype.setComplete = function(isComplete){
    this.isComplete = isComplete;
};

Todo.prototype.print = function () {
    var prefix = this.isComplete? "[완료]" : "[미완료]";
    return prefix + this.getContext();
}

function OfficeTodo(context) {
    Todo.call(this, context);
}
OfficeTodo.prototype = Object.create(Todo.prototype);
OfficeTodo.prototype.constructor = OfficeTodo;
OfficeTodo.prototype.print = function(){
    console.log("Office - " + Todo.prototype.print.call(this));
};

function HomeTodo(context) {
    Todo.call(this, context);
}
HomeTodo.prototype = Object.create(Todo.prototype);
HomeTodo.prototype.constructor = HomeTodo;
HomeTodo.prototype.print = function(){
    console.log("Home - " + Todo.prototype.print.call(this));
};

var officeTodo = new OfficeTodo("자바스크립트 공부하기");
var homeTodo = new HomeTodo("자바스크립트 공부하기");

officeTodo.print();
homeTodo.print();
