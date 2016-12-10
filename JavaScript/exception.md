# exception

The throw statement throws a user-defined exception. Execution of the current function will stop (the statements after `throw` won't be executed), and control will be passed to the first `catch` block in the call stack. If no catch block exists among caller functions, the program will terminate.

```javascript
throw expression;
```

> * expression
> The expression to throw.
>
> [throw](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/throw)

## Normal example

```javascript
throw "Error2"; // generates an exception with a string value
throw 42;       // generates an exception with the value 42
throw true;     // generates an exception with the value true
```

## Throwing object example

```javascript
function UserException(message) {
   this.message = message;
   this.name = "UserException";
}
function getMonthName(mo) {
   mo = mo-1; // Adjust month number for array index (1=Jan, 12=Dec)
   var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct", "Nov", "Dec"];
   if (months[mo] !== undefined) {
      return months[mo];
   } else {
      throw new UserException("InvalidMonthNo");
   }
}

try {
   // statements to try
   var myMonth = 15; // 15 is out of bound to raise the exception
   var monthName = getMonthName(myMonth);
} catch (e) {
   monthName = "unknown";
   console.log(e.message, e.name); // pass exception object to err handler
}
```

```javascript
/*
 * Creates a ZipCode object.
 *
 * Accepted formats for a zip code are:
 *    12345
 *    12345-6789
 *    123456789
 *    12345 6789
 *
 * If the argument passed to the ZipCode constructor does not
 * conform to one of these patterns, an exception is thrown.
 */

function ZipCode(zip) {
   zip = new String(zip);
   pattern = /[0-9]{5}([- ]?[0-9]{4})?/;
   if (pattern.test(zip)) {
      // zip code value will be the first match in the string
      this.value = zip.match(pattern)[0];
      this.valueOf = function() {
         return this.value
      };
      this.toString = function() {
         return String(this.value)
      };
   } else {
      throw new ZipCodeFormatException(zip);
   }
}

function ZipCodeFormatException(value) {
   this.value = value;
   this.message = "does not conform to the expected format for a zip code";
   this.toString = function() {
      return this.value + this.message;
   };
}

/*
 * This could be in a script that validates address data
 * for US addresses.
 */

const ZIPCODE_INVALID = -1;
const ZIPCODE_UNKNOWN_ERROR = -2;

function verifyZipCode(z) {
   try {
      z = new ZipCode(z);
   } catch (e) {
      if (e instanceof ZipCodeFormatException) {
         return ZIPCODE_INVALID;
      } else {
         return ZIPCODE_UNKNOWN_ERROR;
      }
   }
   return z;
}

a = verifyZipCode(95060);         // returns 95060
b = verifyZipCode(9560);          // returns -1
c = verifyZipCode("a");           // returns -1
d = verifyZipCode("95060");       // returns 95060
e = verifyZipCode("95060 1234");  // returns 95060 1234
```

## Numeric example

```javascript
try {
   throw n; // throws an exception with a numeric value
} catch (e) {
   if (e <= 50) {
      // statements to handle exceptions 1-50
   } else {
      // cannot handle this exception, so rethrow
      throw e;
   }
}
```