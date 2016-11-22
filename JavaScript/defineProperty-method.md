# defineProperty method

`Object.defineProperty()` 메소드는 객체에 직접 새로운 속성을 정의하거나 이미 존재하는 객체를 수정한 뒤 그 객체를 반환한다.

```javascript
Object.defineProperty(obj, prop, descriptor)
```

>Parameters
>* obj
>속성을 정의하고자 하는 객체.
>* prop
>새로 정의하거나 수정하려는 속성의 이름.
>* descriptor
>새로 정의하거나 수정하려는 속성에 대해 기술하는 객체.
>
>객체로 표현되는 속성 기술자(Property descriptors)는 두 가지 타입으로 되어있다: 데이터 기술(data descriptors) 또는 데이터 접근기술(accessor descriptors)이다. 데이터 기술에는 value속성이 있고 읽기전용인지 쓸 수 있는지를 나타내는 writable속성을 추가적으로 포함할 수도 있다. 데이터 접근기술은 getter-setter쌍의 함수로 기술된다. 속성기술자에서는 반드시 이 두 가지 타입 중 한 가지로 기술되어야한다; 동시에 두 가지 타입을 기술할 수는 없다.
>
>[Object.defineProperty()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

## 필수 키

* `configurable` : 이 속성기술자는 해당 객체로부터 그 속성을 제거할 수 있는지를 기술한다. `true` 라면 삭제할 수 있다. 기본값은 `false`.
* `enumerable` : 해당 객체의 키가 열거 가능한지를 기술한다. `true` 라면 열거가능하다. 기본값은 `false`.

## 데이터 기술(data descriptor) 키

* `value` : 속성에 해당되는 값으로 오직 적합한 자바스크립트 값 (number, object, function, etc) 만 올 수 있다. 기본값은 `undefined`.
* `writable` : `writable`이 `true`로 설정되면 할당연산자assignment operator를 통해 값을 바꿀 수 있다. 기본값은 `false`.

## 데이터 접근기술(accessor descriptor) 키

* `get` : 속성의 값을 얻는 목적으로 사용되는 getter용 함수로서 만약 getter를 제공하지 않는다면 `undefined`가 온다. 이 함수의 반환값은 속성의 값으로 사용된다. 기본값은 `undefined`.
* `set` : 속성의 값을 설정하기 위한 setter용 함수로서 setter를 제공하지 않는다면 `undefined` 가 온다. 이 함수는 오직 하나의 인자를 받으며 해당 속성의 값으로 할당한다.기본값은 `undefined`.

## 속성 생성 Example

```javascript
var o = {}; // 새로운 객체를 생성한다.

// 데이터 속성기술로 defineProperty를 이용해 속성을 추가한다
Object.defineProperty(o, 'a', {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true
});
// 'a'속성이 o 객체에 존재하고 값은 37이다

// 데이터 접근기술로 defineProperty를 이용해 속성을 추가한다
var bValue = 38;
Object.defineProperty(o, 'b', {
  get: function() { return bValue; },
  set: function(newValue) { bValue = newValue; },
  enumerable: true,
  configurable: true
});
o.b; // 38
// 'b' 속성이 o 객체에 존재하고 값은 38이다
// 재정의하지 않는 이상 o.b의 값은 항상 bValue와 동일하다

// 두 가지를 섞어서 정의할 수 없다:
Object.defineProperty(o, 'conflict', {
  value: 0x9f91102,
  get: function() { return 0xdeadbeef; }
});
// TypeError예외가 발생한다: value키는 데이터기술에서만 나타날 수 있고, get키는 데이터 접근기술에서만 나타날 수 있다.
```

## Using binary flags instead of a property descriptor object

```javascript
var oDesc = {};
function setProp (nMask, oObj, sKey, vVal_fGet, fSet) {
  if (nMask & 8) {
    // accessor descriptor
    if (vVal_fGet) {
      oDesc.get = vVal_fGet;
    } else {
      delete oDesc.get;
    }
    if (fSet) {
      oDesc.set = fSet;
    } else {
      delete oDesc.set;
    }
    delete oDesc.value;
    delete oDesc.writable;
  } else {
    // data descriptor
    if (arguments.length > 3) {
      oDesc.value = vVal_fGet;
    } else {
      delete oDesc.value;
    }
    oDesc.writable = Boolean(nMask & 4);
    delete oDesc.get;
    delete oDesc.set;
  }
  oDesc.enumerable = Boolean(nMask & 1);
  oDesc.configurable = Boolean(nMask & 2);
  Object.defineProperty(oObj, sKey, oDesc);
  return oObj;
}

/*
* :: function setProp ::
*
* nMask is a bitmask:
*  flag 0x1: property is enumerable,
*  flag 0x2: property is configurable,
*  flag 0x4: property is writable,
*  flag 0x8: property is accessor descriptor.
* oObj is the object on which to define the property;
* sKey is the name of the property to be defined or modified;
* vVal_fGet is the value to assign to a data descriptor or the getter function
* to assign to an accessor descriptor (depending on the bitmask);
* fSet is the setter function to assign to an accessor descriptor;
*
* Bitmask possible values:
*
*  0  : readonly data descriptor - not configurable, not enumerable (0000).
*  1  : readonly data descriptor - not configurable, enumerable (0001).
*  2  : readonly data descriptor - configurable, not enumerable (0010).
*  3  : readonly data descriptor - configurable, enumerable (0011).
*  4  : writable data descriptor - not configurable, not enumerable (0100).
*  5  : writable data descriptor - not configurable, enumerable (0101).
*  6  : writable data descriptor - configurable, not enumerable (0110).
*  7  : writable data descriptor - configurable, enumerable (0111).
*  8  : accessor descriptor - not configurable, not enumerable (1000).
*  9  : accessor descriptor - not configurable, enumerable (1001).
*  10 : accessor descriptor - configurable, not enumerable (1010).
*  11 : accessor descriptor - configurable, enumerable (1011).
*
*  Note: If the flag 0x8 is setted to "accessor descriptor" the flag 0x4 (writable)
*  will be ignored. If not, the fSet argument will be ignored.
*/

// creating a new empty object
var myObj = {};

// adding a writable data descriptor - not configurable, not enumerable
setProp(4, myObj, 'myNumber', 25);

// adding a readonly data descriptor - not configurable, enumerable
setProp(1, myObj, 'myString', 'Hello world!');

// adding an accessor descriptor - not configurable, enumerable
setProp(9, myObj, 'myArray', function() {
  for (var iBit = 0, iFlag = 1, aBoolArr = [false];
    iFlag < this.myNumber + 1 || (this.myNumber & iFlag);
    iFlag = iFlag << 1
  ) {
    aBoolArr[iBit++] = Boolean(this.myNumber & iFlag);
  }
  return aBoolArr;
}, function(aNewMask) {
  for (var nNew = 0, iBit = 0; iBit < aNewMask.length; iBit++) {
    nNew |= Boolean(aNewMask[iBit]) << iBit;
  }
  this.myNumber = nNew;
});

// adding a writable data descriptor (undefined value) - configurable, enumerable
setProp(7, myObj, 'myUndefined');

// adding an accessor descriptor (only getter) - configurable, enumerable
setProp(11, myObj, 'myDate', function() { return new Date(); });

// adding an accessor descriptor (only setter) - not configurable, not enumerable
setProp(8, myObj, 'myAlert', null, function(sTxt) { alert(sTxt); });

myObj.myAlert = myObj.myDate.toLocaleString() + '\n\n' + myObj.myString +
  '\nThe number ' + myObj.myNumber + ' represents the following bitmask: ' +
  myObj.myArray.join(', ') + '.';

// listing the enumerable properties
var sList = 'Here are the enumerable properties of myObj object:\n';
for (var sProp in myObj) {
  sList += '\nmyObj.' + sProp + ' => ' + myObj[sProp] + ';'
}

alert(sList);
```

## Create a new non-native Object.setProperty() method

```javascript
// creating a new Object method named Object.setProperty()

new (function() {
  var oDesc = this;
  Object.setProperty = function(nMask, oObj, sKey, vVal_fGet, fSet) {
    if (nMask & 8) {
      // accessor descriptor
      if (vVal_fGet) {
        oDesc.get = vVal_fGet;
      } else {
        delete oDesc.get;
      }
      if (fSet) {
        oDesc.set = fSet;
      } else {
        delete oDesc.set;
      }
      delete oDesc.value;
      delete oDesc.writable;
    } else {
      // data descriptor
      if (arguments.length > 3) {
        oDesc.value = vVal_fGet;
      } else {
        delete oDesc.value;
      }
      oDesc.writable = Boolean(nMask & 4);
      delete oDesc.get;
      delete oDesc.set;
    }
    oDesc.enumerable = Boolean(nMask & 1);
    oDesc.configurable = Boolean(nMask & 2);
    Object.defineProperty(oObj, sKey, oDesc);
    return oObj;
  };
})();

// creating a new empty object
var myObj = {};

// adding a writable data descriptor - not configurable, not enumerable
Object.setProperty(4, myObj, 'myNumber', 25);

// adding a readonly data descriptor - not configurable, enumerable
Object.setProperty(1, myObj, 'myString', 'Hello world!');

// etc. etc.
```

## Reference

* [Object.defineProperty()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
* [Additional examples for Object.defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty/Additional_examples)