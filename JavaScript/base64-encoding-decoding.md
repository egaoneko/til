# base64 encoding decoding

## btoa method

```javascript
var encodedData = scope.btoa(stringToEncode);
```

The `WindowOrWorkerGlobalScope.btoa()` method creates a base-64 encoded ASCII string from a `String` object in which each character in the string is treated as a byte of binary data.

## atob method

```javascript
var decodedData = scope.atob(encodedData);
```

The `WindowOrWorkerGlobalScope.atob()` function decodes a string of data which has been encoded using base-64 encoding. You can use the `btoa()` method to encode and transmit data which may otherwise cause communication problems, then transmit it and use the `atob()` method to decode the data again. For example, you can encode, transmit, and decode control characters such as ASCII values `0` through `31`.

## Example

```javascript
var encodedData = window.btoa('Hello, world'); // encode a string
var decodedData = window.atob(encodedData); // decode the string
```

## Unicode strings

In most browsers, calling `btoa()` on a Unicode string will cause an `InvalidCharacterError` exception.

```javascript
// ucs-2 string to base64 encoded ascii
function utoa(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}
// base64 encoded ascii to ucs-2 string
function atou(str) {
    return decodeURIComponent(escape(window.atob(str)));
}
// Usage:
utoa('✓ à la mode'); // 4pyTIMOgIGxhIG1vZGU=
atou('4pyTIMOgIGxhIG1vZGU='); // "✓ à la mode"

utoa('I \u2661 Unicode!'); // SSDimaEgVW5pY29kZSE=
atou('SSDimaEgVW5pY29kZSE='); // "I ♡ Unicode!"
```

## Refernce

* [WindowOrWorkerGlobalScope.btoa()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa)
* [WindowOrWorkerGlobalScope.atob()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob)
* [Base64 encoding and decoding](https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_.22Unicode_Problem.22)