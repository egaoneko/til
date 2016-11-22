function Todo (context) {
        this.isComplete = false;
        this.context = context;
        this.getContext = function(){
            return this.context;
        };
        this.setComplete = function(isComplete){
            this.isComplete = isComplete;
        }
}

var todo = new Todo("자바스크립트 공부하기")

function printTodo() {
    var prefix = this.isComplete? "[완료]" : "[미완료]";
    console.log(prefix + this.getContext());
}

printTodo.call(todo);
