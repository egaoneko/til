var person = {
    name : 'Steve Jobs'
}

function printPersonName() {
    console.log(this.name);
}

function myBind(printPersonName, person) {
    return function() {printPersonName.call(person);};
}

var printPersonNameBinded = myBind(printPersonName, person);

printPersonNameBinded(); // "Steve Jobs"
