# Method overloading

```javascript
// addMethod - By John Resig (MIT Licensed)
function addMethod(object, name, fn){
    var old = object[ name ];
    object[ name ] = function(){
        if ( fn.length == arguments.length )
            return fn.apply( this, arguments );
        else if ( typeof old == 'function' )
            return old.apply( this, arguments );
    };
}

// addMethod - By John Resig (MIT Licensed)
// tuning
function addMethod(object, name, fn){
    var old = object[ name ];
    if ( old )
        object[ name ] = function(){
            if ( fn.length == arguments.length )
                return fn.apply( this, arguments );
            else if ( typeof old == 'function' )
                return old.apply( this, arguments );
        };
    else
        object[ name ] = fn;
}
```

## Usage

```javascript
function Users(){
  addMethod(this, "find", function(){
    // Find all users...
  });
  addMethod(this, "find", function(name){
    // Find a user by name
  });
  addMethod(this, "find", function(first, last){
    // Find a user by first and last name
  });
}
```

```javascript
function Users(){}
addMethod(Users.prototype, "find", function(){
  // Find all users...
});
addMethod(Users.prototype, "find", function(name){
  // Find a user by name
});
addMethod(Users.prototype, "find", function(first, last){
  // Find a user by first and last name
});
```

```javascript
var users = new Users();
users.find(); // Finds all
users.find("John"); // Finds users by name
users.find("John", "Resig"); // Finds users by first and last name
users.find("John", "E", "Resig"); // Does nothing
```

## Warning

* The overloading only works for different numbers of arguments – it doesn’t differentiate based on type, argument names, or anything else.
* All methods will some function call overhead.

## Tips

```javascript
(function(foo){}).length == 1
```

This property equates to the number of arguments that the function is expecting.

## Reference

* [JavaScript Method Overloading](https://johnresig.com/blog/javascript-method-overloading/)