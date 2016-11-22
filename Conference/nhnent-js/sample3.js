var todo = {
    isComplete: false,
    context:"자바스크립트 공부하기",
    getContext: function(){
        return this.context;
    },
    setComplete: function(isComplete){
        this.isComplete = isComplete;
    }
}

function printTodo() {
    var prefix = this.isComplete? "[완료]" : "[미완료]";
    console.log(prefix + this.getContext());
}

printTodo.call(todo);
var printTodoToBind = printTodo.bind(todo);
printTodoToBind();
