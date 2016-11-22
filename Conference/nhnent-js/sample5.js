function createTodo (isComplete, context) {
    return {
        isComplete: isComplete,
        context:context,
        getContext: function(){
            return this.context;
        },
        setComplete: function(isComplete){
            this.isComplete = isComplete;
        }
    };
}

var todo = createTodo(false, "자바스크립트 공부하기")

function printTodo() {
    var prefix = this.isComplete? "[완료]" : "[미완료]";
    console.log(prefix + this.getContext());
}

printTodo.call(todo);
