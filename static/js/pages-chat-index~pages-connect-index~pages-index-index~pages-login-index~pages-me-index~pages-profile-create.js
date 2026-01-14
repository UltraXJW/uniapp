(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-index~pages-connect-index~pages-index-index~pages-login-index~pages-me-index~pages-profile-create"],{

/***/ "+M1K":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/to-positive-integer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "WSbT");

var $RangeError = RangeError;

module.exports = function (it) {
  var result = toIntegerOrInfinity(it);
  if (result < 0) throw $RangeError("The argument can't be less than 0");
  return result;
};


/***/ }),

/***/ "+MnM":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.to-string-tag.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "I+eb");
var global = __webpack_require__(/*! ../internals/global */ "2oRo");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "1E5z");

$({ global: true }, { Reflect: {} });

// Reflect[@@toStringTag] property
// https://tc39.es/ecma262/#sec-reflect-@@tostringtag
setToStringTag(global.Reflect, 'Reflect', true);


/***/ }),

/***/ "+pVZ":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "eoL8");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _isNativeFunction;
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "yXV3");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "1AHG");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "07d7");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "JfAA");
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

/***/ }),

/***/ "0TkE":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.find.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC");
var $find = __webpack_require__(/*! ../internals/array-iteration */ "tycR").find;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.find` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
exportTypedArrayMethod('find', function find(predicate /* , thisArg */) {
  return $find(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "1dYe":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.for-each.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC");
var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "tycR").forEach;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.forEach` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
exportTypedArrayMethod('forEach', function forEach(callbackfn /* , thisArg */) {
  $forEach(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "25BE":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "eoL8");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _iterableToArray;
__webpack_require__(/*! core-js/modules/es.symbol.js */ "pNMO");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "4Brf");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "07d7");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "0oug");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "PKPk");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "3bBZ");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "pjDv");
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "2B1R":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "I+eb");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "tycR").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "Hd5f");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "2Gvs":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-non-extensible.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails = __webpack_require__(/*! ../internals/fails */ "0Dky");

module.exports = fails(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  }
});


/***/ }),

/***/ "2WcH":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "eoL8");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _isNativeReflectConstruct;
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "07d7");
__webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "+MnM");
__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "SuFq");
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "2Zix":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-ie-or-edge.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var UA = __webpack_require__(/*! ../internals/engine-user-agent */ "NC/Y");

module.exports = /MSIE|Trident/.test(UA);


/***/ }),

/***/ "37lR":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-from-constructor-and-list.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "B/qT");

module.exports = function (Constructor, list) {
  var index = 0;
  var length = lengthOfArrayLike(list);
  var result = new Constructor(length);
  while (length > index) result[index] = list[index++];
  return result;
};


/***/ }),

/***/ "5Yz+":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/array-last-index-of.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-array-prototype-lastindexof -- safe */
var apply = __webpack_require__(/*! ../internals/function-apply */ "K6Rb");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "/GqU");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "WSbT");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "B/qT");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "pkCn");

var min = Math.min;
var $lastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
var FORCED = NEGATIVE_ZERO || !STRICT_METHOD;

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
module.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return apply($lastIndexOf, this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = lengthOfArrayLike(O);
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toIntegerOrInfinity(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : $lastIndexOf;


/***/ }),

/***/ "67WC":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-view-core.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_ARRAY_BUFFER = __webpack_require__(/*! ../internals/array-buffer-basic-detection */ "SxGu");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "g6v/");
var global = __webpack_require__(/*! ../internals/global */ "2oRo");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "Fib7");
var isObject = __webpack_require__(/*! ../internals/is-object */ "hh1v");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "Gi26");
var classof = __webpack_require__(/*! ../internals/classof */ "9d/t");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "DVFp");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "kRJp");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "yy0I");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "m/L8").f;
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "OpvP");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "4WOD");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "0rvr");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "tiKp");
var uid = __webpack_require__(/*! ../internals/uid */ "kOOl");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "afO8");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var Uint8ClampedArray = global.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array && getPrototypeOf(Int8Array);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var TypeError = global.TypeError;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQUIRED = false;
var NAME, Constructor, Prototype;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var BigIntArrayConstructorsList = {
  BigInt64Array: 8,
  BigUint64Array: 8
};

var isView = function isView(it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return klass === 'DataView'
    || hasOwn(TypedArrayConstructorsList, klass)
    || hasOwn(BigIntArrayConstructorsList, klass);
};

var getTypedArrayConstructor = function (it) {
  var proto = getPrototypeOf(it);
  if (!isObject(proto)) return;
  var state = getInternalState(proto);
  return (state && hasOwn(state, TYPED_ARRAY_CONSTRUCTOR)) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor(proto);
};

var isTypedArray = function (it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return hasOwn(TypedArrayConstructorsList, klass)
    || hasOwn(BigIntArrayConstructorsList, klass);
};

var aTypedArray = function (it) {
  if (isTypedArray(it)) return it;
  throw TypeError('Target is not a typed array');
};

var aTypedArrayConstructor = function (C) {
  if (isCallable(C) && (!setPrototypeOf || isPrototypeOf(TypedArray, C))) return C;
  throw TypeError(tryToString(C) + ' is not a typed array constructor');
};

var exportTypedArrayMethod = function (KEY, property, forced, options) {
  if (!DESCRIPTORS) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && hasOwn(TypedArrayConstructor.prototype, KEY)) try {
      delete TypedArrayConstructor.prototype[KEY];
    } catch (error) {
      // old WebKit bug - some methods are non-configurable
      try {
        TypedArrayConstructor.prototype[KEY] = property;
      } catch (error2) { /* empty */ }
    }
  }
  if (!TypedArrayPrototype[KEY] || forced) {
    defineBuiltIn(TypedArrayPrototype, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property, options);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS) return;
  if (setPrototypeOf) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global[ARRAY];
      if (TypedArrayConstructor && hasOwn(TypedArrayConstructor, KEY)) try {
        delete TypedArrayConstructor[KEY];
      } catch (error) { /* empty */ }
    }
    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return defineBuiltIn(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      defineBuiltIn(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  Constructor = global[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
  else NATIVE_ARRAY_BUFFER_VIEWS = false;
}

for (NAME in BigIntArrayConstructorsList) {
  Constructor = global[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray = function TypedArray() {
    throw TypeError('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (DESCRIPTORS && !hasOwn(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQUIRED = true;
  defineProperty(TypedArrayPrototype, TO_STRING_TAG, { get: function () {
    return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
  } });
  for (NAME in TypedArrayConstructorsList) if (global[NAME]) {
    createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
  }
}

module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray,
  aTypedArrayConstructor: aTypedArrayConstructor,
  exportTypedArrayMethod: exportTypedArrayMethod,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  getTypedArrayConstructor: getTypedArrayConstructor,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};


/***/ }),

/***/ "6R/c":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.index-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "TWQb").indexOf;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
exportTypedArrayMethod('indexOf', function indexOf(searchElement /* , fromIndex */) {
  return $indexOf(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "6sUC":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/is-integral-number.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "hh1v");

var floor = Math.floor;

// `IsIntegralNumber` abstract operation
// https://tc39.es/ecma262/#sec-isintegralnumber
// eslint-disable-next-line es/no-number-isinteger -- safe
module.exports = Number.isInteger || function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "7NYF":
/*!****************************************!*\
  !*** ./src/pages.json?{"type":"stat"} ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "eoL8");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "appid": "__UNI__612501C"
};
exports.default = _default;

/***/ }),

/***/ "7dAM":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-built-in-accessor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var makeBuiltIn = __webpack_require__(/*! ../internals/make-built-in */ "E9LY");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "m/L8");

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),

/***/ "8YOa":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/internal-metadata.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "I+eb");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "4zBA");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "0BK2");
var isObject = __webpack_require__(/*! ../internals/is-object */ "hh1v");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "Gi26");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "m/L8").f;
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "JBy8");
var getOwnPropertyNamesExternalModule = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "BX/b");
var isExtensible = __webpack_require__(/*! ../internals/object-is-extensible */ "T63f");
var uid = __webpack_require__(/*! ../internals/uid */ "kOOl");
var FREEZING = __webpack_require__(/*! ../internals/freezing */ "uy83");

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis([].splice);
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      } return result;
    };

    $({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "9JVa":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-big-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "wE6v");

var $TypeError = TypeError;

// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
module.exports = function (argument) {
  var prim = toPrimitive(argument, 'number');
  if (typeof prim == 'number') throw $TypeError("Can't convert number to bigint");
  // eslint-disable-next-line es/no-bigint -- safe
  return BigInt(prim);
};


/***/ }),

/***/ "9LPj":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-json.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "I+eb");
var fails = __webpack_require__(/*! ../internals/fails */ "0Dky");
var toObject = __webpack_require__(/*! ../internals/to-object */ "ewvW");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "wE6v");

var FORCED = fails(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
});

// `Date.prototype.toJSON` method
// https://tc39.es/ecma262/#sec-date.prototype.tojson
$({ target: 'Date', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O, 'number');
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),

/***/ "BNF5":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-ff-version.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "NC/Y");

var firefox = userAgent.match(/firefox\/(\d+)/i);

module.exports = !!firefox && +firefox[1];


/***/ }),

/***/ "BTho":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "4zBA");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "We1y");
var isObject = __webpack_require__(/*! ../internals/is-object */ "hh1v");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "Gi26");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "82ph");
var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "QNWe");

var $Function = Function;
var concat = uncurryThis([].concat);
var join = uncurryThis([].join);
var factories = {};

var construct = function (C, argsLength, args) {
  if (!hasOwn(factories, argsLength)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
  var F = aCallable(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = concat(partArgs, arraySlice(arguments));
    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
  };
  if (isObject(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
};


/***/ }),

/***/ "CyXQ":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/to-index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "WSbT");
var toLength = __webpack_require__(/*! ../internals/to-length */ "UMSQ");

var $RangeError = RangeError;

// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toIntegerOrInfinity(it);
  var length = toLength(number);
  if (number !== length) throw $RangeError('Wrong length or index');
  return length;
};


/***/ }),

/***/ "DEfu":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.json.to-string-tag.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "2oRo");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "1E5z");

// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "DraL":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-exception.constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "I+eb");
var tryNodeRequire = __webpack_require__(/*! ../internals/try-node-require */ "fDd2");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "0GbY");
var fails = __webpack_require__(/*! ../internals/fails */ "0Dky");
var create = __webpack_require__(/*! ../internals/object-create */ "fHMY");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "XGwC");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "m/L8").f;
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "yy0I");
var defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ "7dAM");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "Gi26");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "GarU");
var anObject = __webpack_require__(/*! ../internals/an-object */ "glrk");
var errorToString = __webpack_require__(/*! ../internals/error-to-string */ "qh+a");
var normalizeStringArgument = __webpack_require__(/*! ../internals/normalize-string-argument */ "45G5");
var DOMExceptionConstants = __webpack_require__(/*! ../internals/dom-exception-constants */ "z5iJ");
var clearErrorStack = __webpack_require__(/*! ../internals/error-stack-clear */ "DSaw");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "afO8");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "g6v/");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "xDBR");

var DOM_EXCEPTION = 'DOMException';
var DATA_CLONE_ERR = 'DATA_CLONE_ERR';
var Error = getBuiltIn('Error');
// NodeJS < 17.0 does not expose `DOMException` to global
var NativeDOMException = getBuiltIn(DOM_EXCEPTION) || (function () {
  try {
    // NodeJS < 15.0 does not expose `MessageChannel` to global
    var MessageChannel = getBuiltIn('MessageChannel') || tryNodeRequire('worker_threads').MessageChannel;
    // eslint-disable-next-line es/no-weak-map, unicorn/require-post-message-target-origin -- safe
    new MessageChannel().port1.postMessage(new WeakMap());
  } catch (error) {
    if (error.name == DATA_CLONE_ERR && error.code == 25) return error.constructor;
  }
})();
var NativeDOMExceptionPrototype = NativeDOMException && NativeDOMException.prototype;
var ErrorPrototype = Error.prototype;
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(DOM_EXCEPTION);
var HAS_STACK = 'stack' in Error(DOM_EXCEPTION);

var codeFor = function (name) {
  return hasOwn(DOMExceptionConstants, name) && DOMExceptionConstants[name].m ? DOMExceptionConstants[name].c : 0;
};

var $DOMException = function DOMException() {
  anInstance(this, DOMExceptionPrototype);
  var argumentsLength = arguments.length;
  var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
  var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
  var code = codeFor(name);
  setInternalState(this, {
    type: DOM_EXCEPTION,
    name: name,
    message: message,
    code: code
  });
  if (!DESCRIPTORS) {
    this.name = name;
    this.message = message;
    this.code = code;
  }
  if (HAS_STACK) {
    var error = Error(message);
    error.name = DOM_EXCEPTION;
    defineProperty(this, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
  }
};

var DOMExceptionPrototype = $DOMException.prototype = create(ErrorPrototype);

var createGetterDescriptor = function (get) {
  return { enumerable: true, configurable: true, get: get };
};

var getterFor = function (key) {
  return createGetterDescriptor(function () {
    return getInternalState(this)[key];
  });
};

if (DESCRIPTORS) {
  // `DOMException.prototype.code` getter
  defineBuiltInAccessor(DOMExceptionPrototype, 'code', getterFor('code'));
  // `DOMException.prototype.message` getter
  defineBuiltInAccessor(DOMExceptionPrototype, 'message', getterFor('message'));
  // `DOMException.prototype.name` getter
  defineBuiltInAccessor(DOMExceptionPrototype, 'name', getterFor('name'));
}

defineProperty(DOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, $DOMException));

// FF36- DOMException is a function, but can't be constructed
var INCORRECT_CONSTRUCTOR = fails(function () {
  return !(new NativeDOMException() instanceof Error);
});

// Safari 10.1 / Chrome 32- / IE8- DOMException.prototype.toString bugs
var INCORRECT_TO_STRING = INCORRECT_CONSTRUCTOR || fails(function () {
  return ErrorPrototype.toString !== errorToString || String(new NativeDOMException(1, 2)) !== '2: 1';
});

// Deno 1.6.3- DOMException.prototype.code just missed
var INCORRECT_CODE = INCORRECT_CONSTRUCTOR || fails(function () {
  return new NativeDOMException(1, 'DataCloneError').code !== 25;
});

// Deno 1.6.3- DOMException constants just missed
var MISSED_CONSTANTS = INCORRECT_CONSTRUCTOR
  || NativeDOMException[DATA_CLONE_ERR] !== 25
  || NativeDOMExceptionPrototype[DATA_CLONE_ERR] !== 25;

var FORCED_CONSTRUCTOR = IS_PURE ? INCORRECT_TO_STRING || INCORRECT_CODE || MISSED_CONSTANTS : INCORRECT_CONSTRUCTOR;

// `DOMException` constructor
// https://webidl.spec.whatwg.org/#idl-DOMException
$({ global: true, constructor: true, forced: FORCED_CONSTRUCTOR }, {
  DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
});

var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;

if (INCORRECT_TO_STRING && (IS_PURE || NativeDOMException === PolyfilledDOMException)) {
  defineBuiltIn(PolyfilledDOMExceptionPrototype, 'toString', errorToString);
}

if (INCORRECT_CODE && DESCRIPTORS && NativeDOMException === PolyfilledDOMException) {
  defineBuiltInAccessor(PolyfilledDOMExceptionPrototype, 'code', createGetterDescriptor(function () {
    return codeFor(anObject(this).name);
  }));
}

// `DOMException` constants
for (var key in DOMExceptionConstants) if (hasOwn(DOMExceptionConstants, key)) {
  var constant = DOMExceptionConstants[key];
  var constantName = constant.s;
  var descriptor = createPropertyDescriptor(6, constant.c);
  if (!hasOwn(PolyfilledDOMException, constantName)) {
    defineProperty(PolyfilledDOMException, constantName, descriptor);
  }
  if (!hasOwn(PolyfilledDOMExceptionPrototype, constantName)) {
    defineProperty(PolyfilledDOMExceptionPrototype, constantName, descriptor);
  }
}


/***/ }),

/***/ "Ep9I":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "ExoC":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "I+eb");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "0rvr");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),

/***/ "FEiF":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-from-species-and-list.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFromConstructorAndList = __webpack_require__(/*! ../internals/array-from-constructor-and-list */ "37lR");
var typedArraySpeciesConstructor = __webpack_require__(/*! ../internals/typed-array-species-constructor */ "trfz");

module.exports = function (instance, list) {
  return arrayFromConstructorAndList(typedArraySpeciesConstructor(instance), list);
};


/***/ }),

/***/ "FF6l":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/array-copy-within.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(/*! ../internals/to-object */ "ewvW");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "I8vh");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "B/qT");
var deletePropertyOrThrow = __webpack_require__(/*! ../internals/delete-property-or-throw */ "CDr4");

var min = Math.min;

// `Array.prototype.copyWithin` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
// eslint-disable-next-line es/no-array-prototype-copywithin -- safe
module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = lengthOfArrayLike(O);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else deletePropertyOrThrow(O, to);
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "GC2F":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-offset.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPositiveInteger = __webpack_require__(/*! ../internals/to-positive-integer */ "+M1K");

var $RangeError = RangeError;

module.exports = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw $RangeError('Wrong offset');
  return offset;
};


/***/ }),

/***/ "HQKR":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.find-last-index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC");
var $findLastIndex = __webpack_require__(/*! ../internals/array-iteration-from-last */ "oljQ").findLastIndex;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findLastIndex` method
// https://github.com/tc39/proposal-array-find-from-last
exportTypedArrayMethod('findLastIndex', function findLastIndex(predicate /* , thisArg */) {
  return $findLastIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "HaE+":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "eoL8");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _asyncToGenerator;
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "07d7");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ }),

/***/ "I9xj":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.math.to-string-tag.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "1E5z");

// Math[@@toStringTag] property
// https://tc39.es/ecma262/#sec-math-@@tostringtag
setToStringTag(Math, 'Math', true);


/***/ }),

/***/ "IZzc":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.sort.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "2oRo");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "RiVN");
var fails = __webpack_require__(/*! ../internals/fails */ "0Dky");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "We1y");
var internalSort = __webpack_require__(/*! ../internals/array-sort */ "rdv8");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC");
var FF = __webpack_require__(/*! ../internals/engine-ff-version */ "BNF5");
var IE_OR_EDGE = __webpack_require__(/*! ../internals/engine-is-ie-or-edge */ "2Zix");
var V8 = __webpack_require__(/*! ../internals/engine-v8-version */ "LQDL");
var WEBKIT = __webpack_require__(/*! ../internals/engine-webkit-version */ "USzg");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var Uint16Array = global.Uint16Array;
var nativeSort = Uint16Array && uncurryThis(Uint16Array.prototype.sort);

// WebKit
var ACCEPT_INCORRECT_ARGUMENTS = !!nativeSort && !(fails(function () {
  nativeSort(new Uint16Array(2), null);
}) && fails(function () {
  nativeSort(new Uint16Array(2), {});
}));

var STABLE_SORT = !!nativeSort && !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 74;
  if (FF) return FF < 67;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 602;

  var array = new Uint16Array(516);
  var expected = Array(516);
  var index, mod;

  for (index = 0; index < 516; index++) {
    mod = index % 4;
    array[index] = 515 - index;
    expected[index] = index - 2 * mod + 3;
  }

  nativeSort(array, function (a, b) {
    return (a / 4 | 0) - (b / 4 | 0);
  });

  for (index = 0; index < 516; index++) {
    if (array[index] !== expected[index]) return true;
  }
});

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    // eslint-disable-next-line no-self-compare -- NaN check
    if (y !== y) return -1;
    // eslint-disable-next-line no-self-compare -- NaN check
    if (x !== x) return 1;
    if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
    return x > y;
  };
};

// `%TypedArray%.prototype.sort` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
exportTypedArrayMethod('sort', function sort(comparefn) {
  if (comparefn !== undefined) aCallable(comparefn);
  if (STABLE_SORT) return nativeSort(this, comparefn);

  return internalSort(aTypedArray(this), getSortCompare(comparefn));
}, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);


/***/ }),

/***/ "JTJg":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "I+eb");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "4zBA");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "WjRb");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "HYAF");
var toString = __webpack_require__(/*! ../internals/to-string */ "V37c");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "qxPZ");

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ }),

/***/ "JX7q":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "eoL8");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _assertThisInitialized;
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "2eJa");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "1AHG");
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/***/ }),

/***/ "JaFt":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.reduce-right.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC");
var $reduceRight = __webpack_require__(/*! ../internals/array-reduce */ "1Y/n").right;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
exportTypedArrayMethod('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
  var length = arguments.length;
  return $reduceRight(aTypedArray(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "JfAA":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PROPER_FUNCTION_NAME = __webpack_require__(/*! ../internals/function-name */ "Xnc8").PROPER;
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "yy0I");
var anObject = __webpack_require__(/*! ../internals/an-object */ "glrk");
var $toString = __webpack_require__(/*! ../internals/to-string */ "V37c");
var fails = __webpack_require__(/*! ../internals/fails */ "0Dky");
var getRegExpFlags = __webpack_require__(/*! ../internals/regexp-get-flags */ "kNi0");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}


/***/ }),

/***/ "Ji7U":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _inherits;
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "2eJa");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "1AHG");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "eoL8");
var _setPrototypeOf = _interopRequireDefault(__webpack_require__(/*! ./setPrototypeOf.js */ "s4An"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0, _setPrototypeOf.default)(subClass, superClass);
}

/***/ }),

/***/ "Junv":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reverse.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "I+eb");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "4zBA");
var isArray = __webpack_require__(/*! ../internals/is-array */ "6LWA");

var nativeReverse = uncurryThis([].reverse);
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign -- dirty hack
    if (isArray(this)) this.length = this.length;
    return nativeReverse(this);
  }
});


/***/ }),

/***/ "KQm4":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "eoL8");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _toConsumableArray;
var _arrayWithoutHoles = _interopRequireDefault(__webpack_require__(/*! ./arrayWithoutHoles.js */ "YAWx"));
var _iterableToArray = _interopRequireDefault(__webpack_require__(/*! ./iterableToArray.js */ "25BE"));
var _unsupportedIterableToArray = _interopRequireDefault(__webpack_require__(/*! ./unsupportedIterableToArray.js */ "BsWD"));
var _nonIterableSpread = _interopRequireDefault(__webpack_require__(/*! ./nonIterableSpread.js */ "NCdM"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) {
  return (0, _arrayWithoutHoles.default)(arr) || (0, _iterableToArray.default)(arr) || (0, _unsupportedIterableToArray.default)(arr) || (0, _nonIterableSpread.default)();
}

/***/ }),

/***/ "KVSy":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.slice.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC");
var typedArraySpeciesConstructor = __webpack_require__(/*! ../internals/typed-array-species-constructor */ "trfz");
var fails = __webpack_require__(/*! ../internals/fails */ "0Dky");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "82ph");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var FORCED = fails(function () {
  // eslint-disable-next-line es/no-typed-arrays -- required for testing
  new Int8Array(1).slice();
});

// `%TypedArray%.prototype.slice` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
exportTypedArrayMethod('slice', function slice(start, end) {
  var list = arraySlice(aTypedArray(this), start, end);
  var C = typedArraySpeciesConstructor(this);
  var index = 0;
  var length = list.length;
  var result = new C(length);
  while (length > index) result[index] = list[index++];
  return result;
}, FORCED);


/***/ }),

/***/ "LD7m":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.sticky.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "g6v/");
var MISSED_STICKY = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "n3/R").MISSED_STICKY;
var classof = __webpack_require__(/*! ../internals/classof-raw */ "xrYK");
var defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ "7dAM");
var getInternalState = __webpack_require__(/*! ../internals/internal-state */ "afO8").get;

var RegExpPrototype = RegExp.prototype;
var $TypeError = TypeError;

// `RegExp.prototype.sticky` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky
if (DESCRIPTORS && MISSED_STICKY) {
  defineBuiltInAccessor(RegExpPrototype, 'sticky', {
    configurable: true,
    get: function sticky() {
      if (this === RegExpPrototype) return;
      // We can't use InternalStateModule.getterFor because
      // we don't add metadata for regexps created by a literal.
      if (classof(this) === 'RegExp') {
        return !!getInternalState(this).sticky;
      }
      throw $TypeError('Incompatible receiver, RegExp required');
    }
  });
}


/***/ }),

/***/ "LK+K":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "eoL8");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _createSuper;
__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "SuFq");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "07d7");
__webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "+MnM");
var _getPrototypeOf = _interopRequireDefault(__webpack_require__(/*! ./getPrototypeOf.js */ "foSv"));
var _isNativeReflectConstruct = _interopRequireDefault(__webpack_require__(/*! ./isNativeReflectConstruct.js */ "2WcH"));
var _possibleConstructorReturn = _interopRequireDefault(__webpack_require__(/*! ./possibleConstructorReturn.js */ "md7G"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _createSuper(Derived) {
  var hasNativeReflectConstruct = (0, _isNativeReflectConstruct.default)();
  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf.default)(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf.default)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0, _possibleConstructorReturn.default)(this, result);
  };
}

/***/ }),

/***/ "MoCz":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.last-index-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC");
var apply = __webpack_require__(/*! ../internals/function-apply */ "K6Rb");
var $lastIndexOf = __webpack_require__(/*! ../internals/array-last-index-of */ "5Yz+");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
exportTypedArrayMethod('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
  var length = arguments.length;
  return apply($lastIndexOf, aTypedArray(this), length > 1 ? [searchElement, arguments[1]] : [searchElement]);
});


/***/ }),

/***/ "NBAS":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "I+eb");
var fails = __webpack_require__(/*! ../internals/fails */ "0Dky");
var toObject = __webpack_require__(/*! ../internals/to-object */ "ewvW");
var nativeGetPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "4WOD");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "4Xet");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),

/***/ "NCdM":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "eoL8");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _nonIterableSpread;
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "2eJa");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "1AHG");
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "Onu3":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.find-index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC");
var $findIndex = __webpack_require__(/*! ../internals/array-iteration */ "tycR").findIndex;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
exportTypedArrayMethod('findIndex', function findIndex(predicate /* , thisArg */) {
  return $findIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "P8wP":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "tycR").map;
var typedArraySpeciesConstructor = __webpack_require__(/*! ../internals/typed-array-species-constructor */ "trfz");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.map` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
exportTypedArrayMethod('map', function map(mapfn /* , thisArg */) {
  return $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
    return new (typedArraySpeciesConstructor(O))(length);
  });
});


/***/ }),

/***/ "PF2M":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.set.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "2oRo");
var call = __webpack_require__(/*! ../internals/function-call */ "xluM");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "B/qT");
var toOffset = __webpack_require__(/*! ../internals/to-offset */ "GC2F");
var toIndexedObject = __webpack_require__(/*! ../internals/to-object */ "ewvW");
var fails = __webpack_require__(/*! ../internals/fails */ "0Dky");

var RangeError = global.RangeError;
var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS = !fails(function () {
  // eslint-disable-next-line es/no-typed-arrays -- required for testing
  var array = new Uint8ClampedArray(2);
  call($set, array, { length: 1, 0: 3 }, 1);
  return array[1] !== 3;
});

// https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other
var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS && fails(function () {
  var array = new Int8Array(2);
  array.set(1);
  array.set('2', 1);
  return array[0] !== 0 || array[1] !== 2;
});

// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
exportTypedArrayMethod('set', function set(arrayLike /* , offset */) {
  aTypedArray(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
  var src = toIndexedObject(arrayLike);
  if (WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS) return call($set, this, src, offset);
  var length = this.length;
  var len = lengthOfArrayLike(src);
  var index = 0;
  if (len + offset > length) throw RangeError('Wrong length');
  while (index < len) this[offset + index] = src[index++];
}, !WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);


/***/ }),

/***/ "RHh3":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "eoL8");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _construct;
__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "SuFq");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "07d7");
__webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "+MnM");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "FNk8");
var _setPrototypeOf = _interopRequireDefault(__webpack_require__(/*! ./setPrototypeOf.js */ "s4An"));
var _isNativeReflectConstruct = _interopRequireDefault(__webpack_require__(/*! ./isNativeReflectConstruct.js */ "2WcH"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _construct(Parent, args, Class) {
  if ((0, _isNativeReflectConstruct.default)()) {
    exports.default = _construct = Reflect.construct.bind();
  } else {
    exports.default = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) (0, _setPrototypeOf.default)(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "ROdP":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "hh1v");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "xrYK");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "tiKp");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "Rm1S":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "xluM");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "14Sl");
var anObject = __webpack_require__(/*! ../internals/an-object */ "glrk");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "cjT7");
var toLength = __webpack_require__(/*! ../internals/to-length */ "UMSQ");
var toString = __webpack_require__(/*! ../internals/to-string */ "V37c");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "HYAF");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "3Eq5");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "iqWW");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "FMNM");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "SuFq":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.construct.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "I+eb");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "0GbY");
var apply = __webpack_require__(/*! ../internals/function-apply */ "K6Rb");
var bind = __webpack_require__(/*! ../internals/function-bind */ "BTho");
var aConstructor = __webpack_require__(/*! ../internals/a-constructor */ "UIe5");
var anObject = __webpack_require__(/*! ../internals/an-object */ "glrk");
var isObject = __webpack_require__(/*! ../internals/is-object */ "hh1v");
var create = __webpack_require__(/*! ../internals/object-create */ "fHMY");
var fails = __webpack_require__(/*! ../internals/fails */ "0Dky");

var nativeConstruct = getBuiltIn('Reflect', 'construct');
var ObjectPrototype = Object.prototype;
var push = [].push;

// `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});

var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});

var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aConstructor(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      apply(push, $args, args);
      return new (apply(bind, Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : ObjectPrototype);
    var result = apply(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "SxGu":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-basic-detection.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-typed-arrays -- safe
module.exports = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';


/***/ }),

/***/ "T63f":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-is-extensible.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "0Dky");
var isObject = __webpack_require__(/*! ../internals/is-object */ "hh1v");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "xrYK");
var ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__(/*! ../internals/array-buffer-non-extensible */ "2Gvs");

// eslint-disable-next-line es/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function () { $isExtensible(1); });

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
module.exports = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
  if (!isObject(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) == 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;


/***/ }),

/***/ "TWNs":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "g6v/");
var global = __webpack_require__(/*! ../internals/global */ "2oRo");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "4zBA");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "lMq5");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "cVYH");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "kRJp");
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "JBy8").f;
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "OpvP");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "ROdP");
var toString = __webpack_require__(/*! ../internals/to-string */ "V37c");
var getRegExpFlags = __webpack_require__(/*! ../internals/regexp-get-flags */ "kNi0");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "n3/R");
var proxyAccessor = __webpack_require__(/*! ../internals/proxy-accessor */ "rrC/");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "yy0I");
var fails = __webpack_require__(/*! ../internals/fails */ "0Dky");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "Gi26");
var enforceInternalState = __webpack_require__(/*! ../internals/internal-state */ "afO8").enforce;
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "JiZb");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "tiKp");
var UNSUPPORTED_DOT_ALL = __webpack_require__(/*! ../internals/regexp-unsupported-dot-all */ "/OPJ");
var UNSUPPORTED_NCG = __webpack_require__(/*! ../internals/regexp-unsupported-ncg */ "EHx7");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var SyntaxError = global.SyntaxError;
var exec = uncurryThis(RegExpPrototype.exec);
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);
// TODO: Use only proper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  }));

var handleDotAll = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      result += chr + charAt(string, ++index);
      continue;
    }
    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      } result += chr;
    }
  } return result;
};

var handleNCG = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = {};
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      chr = chr + charAt(string, ++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        if (exec(IS_NCG, stringSlice(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }
        names[groupname] = true;
        named[named.length] = [groupname, groupid];
        ncg = false;
        groupname = '';
        continue;
    }
    if (ncg) groupname += chr;
    else result += chr;
  } return [result, named];
};

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = getRegExpFlags(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString(pattern);
    flags = flags === undefined ? '' : toString(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf(flags, 's') > -1;
      if (dotAll) flags = replace(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
    proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
  }

  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  defineBuiltIn(global, 'RegExp', RegExpWrapper, { constructor: true });
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ "ToJy":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.sort.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "I+eb");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "4zBA");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "We1y");
var toObject = __webpack_require__(/*! ../internals/to-object */ "ewvW");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "B/qT");
var deletePropertyOrThrow = __webpack_require__(/*! ../internals/delete-property-or-throw */ "CDr4");
var toString = __webpack_require__(/*! ../internals/to-string */ "V37c");
var fails = __webpack_require__(/*! ../internals/fails */ "0Dky");
var internalSort = __webpack_require__(/*! ../internals/array-sort */ "rdv8");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "pkCn");
var FF = __webpack_require__(/*! ../internals/engine-ff-version */ "BNF5");
var IE_OR_EDGE = __webpack_require__(/*! ../internals/engine-is-ie-or-edge */ "2Zix");
var V8 = __webpack_require__(/*! ../internals/engine-v8-version */ "LQDL");
var WEBKIT = __webpack_require__(/*! ../internals/engine-webkit-version */ "USzg");

var test = [];
var nativeSort = uncurryThis(test.sort);
var push = uncurryThis(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString(x) > toString(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);

    var array = toObject(this);

    if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));

    itemsLength = lengthOfArrayLike(items);
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) deletePropertyOrThrow(array, index++);

    return array;
  }
});


/***/ }),

/***/ "Tskq":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/es.map.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(/*! ../modules/es.map.constructor */ "b0gt");


/***/ }),

/***/ "U3f4":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.flags.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "2oRo");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "g6v/");
var defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ "7dAM");
var regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "rW0t");
var fails = __webpack_require__(/*! ../internals/fails */ "0Dky");

// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var RegExp = global.RegExp;
var RegExpPrototype = RegExp.prototype;

var FORCED = DESCRIPTORS && fails(function () {
  var INDICES_SUPPORT = true;
  try {
    RegExp('.', 'd');
  } catch (error) {
    INDICES_SUPPORT = false;
  }

  var O = {};
  // modern V8 bug
  var calls = '';
  var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';

  var addGetter = function (key, chr) {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(O, key, { get: function () {
      calls += chr;
      return true;
    } });
  };

  var pairs = {
    dotAll: 's',
    global: 'g',
    ignoreCase: 'i',
    multiline: 'm',
    sticky: 'y'
  };

  if (INDICES_SUPPORT) pairs.hasIndices = 'd';

  for (var key in pairs) addGetter(key, pairs[key]);

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var result = Object.getOwnPropertyDescriptor(RegExpPrototype, 'flags').get.call(O);

  return result !== expected || calls !== expected;
});

// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
if (FORCED) defineBuiltInAccessor(RegExpPrototype, 'flags', {
  configurable: true,
  get: regExpFlags
});


/***/ }),

/***/ "USzg":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-webkit-version.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "NC/Y");

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

module.exports = !!webkit && +webkit[1];


/***/ }),

/***/ "WjRb":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "ROdP");

var $TypeError = TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw $TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "X5Zq":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.join.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "4zBA");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $join = uncurryThis([].join);

// `%TypedArray%.prototype.join` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
exportTypedArrayMethod('join', function join(separator) {
  return $join(aTypedArray(this), separator);
});


/***/ }),

/***/ "XMab":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.uint8-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "dOgj");

// `Uint8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "YAWx":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "eoL8");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _arrayWithoutHoles;
var _arrayLikeToArray = _interopRequireDefault(__webpack_require__(/*! ./arrayLikeToArray.js */ "a3WO"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0, _arrayLikeToArray.default)(arr);
}

/***/ }),

/***/ "YL0P":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.iterator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "2oRo");
var fails = __webpack_require__(/*! ../internals/fails */ "0Dky");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "4zBA");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC");
var ArrayIterators = __webpack_require__(/*! ../modules/es.array.iterator */ "4mDm");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "tiKp");

var ITERATOR = wellKnownSymbol('iterator');
var Uint8Array = global.Uint8Array;
var arrayValues = uncurryThis(ArrayIterators.values);
var arrayKeys = uncurryThis(ArrayIterators.keys);
var arrayEntries = uncurryThis(ArrayIterators.entries);
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var TypedArrayPrototype = Uint8Array && Uint8Array.prototype;

var GENERIC = !fails(function () {
  TypedArrayPrototype[ITERATOR].call([1]);
});

var ITERATOR_IS_VALUES = !!TypedArrayPrototype
  && TypedArrayPrototype.values
  && TypedArrayPrototype[ITERATOR] === TypedArrayPrototype.values
  && TypedArrayPrototype.values.name === 'values';

var typedArrayValues = function values() {
  return arrayValues(aTypedArray(this));
};

// `%TypedArray%.prototype.entries` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
exportTypedArrayMethod('entries', function entries() {
  return arrayEntries(aTypedArray(this));
}, GENERIC);
// `%TypedArray%.prototype.keys` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
exportTypedArrayMethod('keys', function keys() {
  return arrayKeys(aTypedArray(this));
}, GENERIC);
// `%TypedArray%.prototype.values` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
exportTypedArrayMethod('values', typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, { name: 'values' });
// `%TypedArray%.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
exportTypedArrayMethod(ITERATOR, typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, { name: 'values' });


/***/ }),

/***/ "Yhre":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "2oRo");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "4zBA");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "g6v/");
var NATIVE_ARRAY_BUFFER = __webpack_require__(/*! ../internals/array-buffer-basic-detection */ "SxGu");
var FunctionName = __webpack_require__(/*! ../internals/function-name */ "Xnc8");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "kRJp");
var defineBuiltIns = __webpack_require__(/*! ../internals/define-built-ins */ "aWRN");
var fails = __webpack_require__(/*! ../internals/fails */ "0Dky");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "GarU");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "WSbT");
var toLength = __webpack_require__(/*! ../internals/to-length */ "UMSQ");
var toIndex = __webpack_require__(/*! ../internals/to-index */ "CyXQ");
var IEEE754 = __webpack_require__(/*! ../internals/ieee754 */ "d6cI");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "4WOD");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "0rvr");
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "JBy8").f;
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "m/L8").f;
var arrayFill = __webpack_require__(/*! ../internals/array-fill */ "gdVl");
var arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ "Ta7t");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "1E5z");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "afO8");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var NativeArrayBuffer = global[ARRAY_BUFFER];
var $ArrayBuffer = NativeArrayBuffer;
var ArrayBufferPrototype = $ArrayBuffer && $ArrayBuffer[PROTOTYPE];
var $DataView = global[DATA_VIEW];
var DataViewPrototype = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype = Object.prototype;
var Array = global.Array;
var RangeError = global.RangeError;
var fill = uncurryThis(arrayFill);
var reverse = uncurryThis([].reverse);

var packIEEE754 = IEEE754.pack;
var unpackIEEE754 = IEEE754.unpack;

var packInt8 = function (number) {
  return [number & 0xFF];
};

var packInt16 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF];
};

var packInt32 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
};

var unpackInt32 = function (buffer) {
  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
};

var packFloat32 = function (number) {
  return packIEEE754(number, 23, 4);
};

var packFloat64 = function (number) {
  return packIEEE754(number, 52, 8);
};

var addGetter = function (Constructor, key) {
  defineProperty(Constructor[PROTOTYPE], key, { get: function () { return getInternalState(this)[key]; } });
};

var get = function (view, count, index, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState(view);
  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
  var bytes = getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = arraySlice(bytes, start, start + count);
  return isLittleEndian ? pack : reverse(pack);
};

var set = function (view, count, index, conversion, value, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState(view);
  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
  var bytes = getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = conversion(+value);
  for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
};

if (!NATIVE_ARRAY_BUFFER) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, ArrayBufferPrototype);
    var byteLength = toIndex(length);
    setInternalState(this, {
      bytes: fill(Array(byteLength), 0),
      byteLength: byteLength
    });
    if (!DESCRIPTORS) this.byteLength = byteLength;
  };

  ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE];

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, DataViewPrototype);
    anInstance(buffer, ArrayBufferPrototype);
    var bufferLength = getInternalState(buffer).byteLength;
    var offset = toIntegerOrInfinity(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    setInternalState(this, {
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset
    });
    if (!DESCRIPTORS) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  DataViewPrototype = $DataView[PROTOTYPE];

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, 'byteLength');
    addGetter($DataView, 'buffer');
    addGetter($DataView, 'byteLength');
    addGetter($DataView, 'byteOffset');
  }

  defineBuiltIns(DataViewPrototype, {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
    }
  });
} else {
  var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME && NativeArrayBuffer.name !== ARRAY_BUFFER;
  /* eslint-disable no-new -- required for testing */
  if (!fails(function () {
    NativeArrayBuffer(1);
  }) || !fails(function () {
    new NativeArrayBuffer(-1);
  }) || fails(function () {
    new NativeArrayBuffer();
    new NativeArrayBuffer(1.5);
    new NativeArrayBuffer(NaN);
    return NativeArrayBuffer.length != 1 || INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;
  })) {
    /* eslint-enable no-new -- required for testing */
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, ArrayBufferPrototype);
      return new NativeArrayBuffer(toIndex(length));
    };

    $ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype;

    for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) {
        createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
      }
    }

    ArrayBufferPrototype.constructor = $ArrayBuffer;
  } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {
    createNonEnumerableProperty(NativeArrayBuffer, 'name', ARRAY_BUFFER);
  }

  // WebKit bug - the same parent prototype for typed arrays and data view
  if (setPrototypeOf && getPrototypeOf(DataViewPrototype) !== ObjectPrototype) {
    setPrototypeOf(DataViewPrototype, ObjectPrototype);
  }

  // iOS Safari 7.x bug
  var testView = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = uncurryThis(DataViewPrototype.setInt8);
  testView.setInt8(0, 2147483648);
  testView.setInt8(1, 2147483649);
  if (testView.getInt8(0) || !testView.getInt8(1)) defineBuiltIns(DataViewPrototype, {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    }
  }, { unsafe: true });
}

setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);

module.exports = {
  ArrayBuffer: $ArrayBuffer,
  DataView: $DataView
};


/***/ }),

/***/ "ZJ55":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.some.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC");
var $some = __webpack_require__(/*! ../internals/array-iteration */ "tycR").some;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.some` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
exportTypedArrayMethod('some', function some(callbackfn /* , thisArg */) {
  return $some(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "ZWaQ":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/collection-strong.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "m/L8").f;
var create = __webpack_require__(/*! ../internals/object-create */ "fHMY");
var defineBuiltIns = __webpack_require__(/*! ../internals/define-built-ins */ "aWRN");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "A2ZE");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "GarU");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "cjT7");
var iterate = __webpack_require__(/*! ../internals/iterate */ "ImZN");
var defineIterator = __webpack_require__(/*! ../internals/iterator-define */ "xtKg");
var createIterResultObject = __webpack_require__(/*! ../internals/create-iter-result-object */ "R1RC");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "JiZb");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "g6v/");
var fastKey = __webpack_require__(/*! ../internals/internal-metadata */ "8YOa").fastKey;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "afO8");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    defineBuiltIns(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    defineBuiltIns(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(Prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return Constructor;
  },
  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return createIterResultObject(undefined, true);
      }
      // return step by kind
      if (kind == 'keys') return createIterResultObject(entry.key, false);
      if (kind == 'values') return createIterResultObject(entry.value, false);
      return createIterResultObject([entry.key, entry.value], false);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "aWRN":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/define-built-ins.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "yy0I");

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "b0gt":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.map.constructor.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(/*! ../internals/collection */ "bWFh");
var collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ "ZWaQ");

// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "bFeb":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.global-this.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "I+eb");
var global = __webpack_require__(/*! ../internals/global */ "2oRo");

// `globalThis` object
// https://tc39.es/ecma262/#sec-globalthis
$({ global: true, forced: global.globalThis !== global }, {
  globalThis: global
});


/***/ }),

/***/ "bWFh":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/collection.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "I+eb");
var global = __webpack_require__(/*! ../internals/global */ "2oRo");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "4zBA");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "lMq5");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "yy0I");
var InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ "8YOa");
var iterate = __webpack_require__(/*! ../internals/iterate */ "ImZN");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "GarU");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "Fib7");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "cjT7");
var isObject = __webpack_require__(/*! ../internals/is-object */ "hh1v");
var fails = __webpack_require__(/*! ../internals/fails */ "0Dky");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "HH4o");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "1E5z");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "cVYH");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
    defineBuiltIn(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, NativePrototype);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, constructor: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "c162":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.fill.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC");
var $fill = __webpack_require__(/*! ../internals/array-fill */ "gdVl");
var toBigInt = __webpack_require__(/*! ../internals/to-big-int */ "9JVa");
var classof = __webpack_require__(/*! ../internals/classof */ "9d/t");
var call = __webpack_require__(/*! ../internals/function-call */ "xluM");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "4zBA");
var fails = __webpack_require__(/*! ../internals/fails */ "0Dky");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var slice = uncurryThis(''.slice);

// V8 ~ Chrome < 59, Safari < 14.1, FF < 55, Edge <=18
var CONVERSION_BUG = fails(function () {
  var count = 0;
  // eslint-disable-next-line es/no-typed-arrays -- safe
  new Int8Array(2).fill({ valueOf: function () { return count++; } });
  return count !== 1;
});

// `%TypedArray%.prototype.fill` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
exportTypedArrayMethod('fill', function fill(value /* , start, end */) {
  var length = arguments.length;
  aTypedArray(this);
  var actualValue = slice(classof(this), 0, 3) === 'Big' ? toBigInt(value) : +value;
  return call($fill, this, actualValue, length > 1 ? arguments[1] : undefined, length > 2 ? arguments[2] : undefined);
}, CONVERSION_BUG);


/***/ }),

/***/ "cvf0":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.to-string.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var exportTypedArrayMethod = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC").exportTypedArrayMethod;
var fails = __webpack_require__(/*! ../internals/fails */ "0Dky");
var global = __webpack_require__(/*! ../internals/global */ "2oRo");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "4zBA");

var Uint8Array = global.Uint8Array;
var Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype || {};
var arrayToString = [].toString;
var join = uncurryThis([].join);

if (fails(function () { arrayToString.call({}); })) {
  arrayToString = function toString() {
    return join(this);
  };
}

var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString;

// `%TypedArray%.prototype.toString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);


/***/ }),

/***/ "d6cI":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/ieee754.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IEEE754 conversions based on https://github.com/feross/ieee754
var $Array = Array;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;

var pack = function (number, mantissaLength, bytes) {
  var buffer = $Array(bytes);
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
  var index = 0;
  var exponent, mantissa, c;
  number = abs(number);
  // eslint-disable-next-line no-self-compare -- NaN check
  if (number != number || number === Infinity) {
    // eslint-disable-next-line no-self-compare -- NaN check
    mantissa = number != number ? 1 : 0;
    exponent = eMax;
  } else {
    exponent = floor(log(number) / LN2);
    c = pow(2, -exponent);
    if (number * c < 1) {
      exponent--;
      c *= 2;
    }
    if (exponent + eBias >= 1) {
      number += rt / c;
    } else {
      number += rt * pow(2, 1 - eBias);
    }
    if (number * c >= 2) {
      exponent++;
      c /= 2;
    }
    if (exponent + eBias >= eMax) {
      mantissa = 0;
      exponent = eMax;
    } else if (exponent + eBias >= 1) {
      mantissa = (number * c - 1) * pow(2, mantissaLength);
      exponent = exponent + eBias;
    } else {
      mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
      exponent = 0;
    }
  }
  while (mantissaLength >= 8) {
    buffer[index++] = mantissa & 255;
    mantissa /= 256;
    mantissaLength -= 8;
  }
  exponent = exponent << mantissaLength | mantissa;
  exponentLength += mantissaLength;
  while (exponentLength > 0) {
    buffer[index++] = exponent & 255;
    exponent /= 256;
    exponentLength -= 8;
  }
  buffer[--index] |= sign * 128;
  return buffer;
};

var unpack = function (buffer, mantissaLength) {
  var bytes = buffer.length;
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var nBits = exponentLength - 7;
  var index = bytes - 1;
  var sign = buffer[index--];
  var exponent = sign & 127;
  var mantissa;
  sign >>= 7;
  while (nBits > 0) {
    exponent = exponent * 256 + buffer[index--];
    nBits -= 8;
  }
  mantissa = exponent & (1 << -nBits) - 1;
  exponent >>= -nBits;
  nBits += mantissaLength;
  while (nBits > 0) {
    mantissa = mantissa * 256 + buffer[index--];
    nBits -= 8;
  }
  if (exponent === 0) {
    exponent = 1 - eBias;
  } else if (exponent === eMax) {
    return mantissa ? NaN : sign ? -Infinity : Infinity;
  } else {
    mantissa = mantissa + pow(2, mantissaLength);
    exponent = exponent - eBias;
  } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
};

module.exports = {
  pack: pack,
  unpack: unpack
};


/***/ }),

/***/ "dOgj":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-constructor.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "I+eb");
var global = __webpack_require__(/*! ../internals/global */ "2oRo");
var call = __webpack_require__(/*! ../internals/function-call */ "xluM");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "g6v/");
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__(/*! ../internals/typed-array-constructors-require-wrappers */ "iqeF");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC");
var ArrayBufferModule = __webpack_require__(/*! ../internals/array-buffer */ "Yhre");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "GarU");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "XGwC");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "kRJp");
var isIntegralNumber = __webpack_require__(/*! ../internals/is-integral-number */ "6sUC");
var toLength = __webpack_require__(/*! ../internals/to-length */ "UMSQ");
var toIndex = __webpack_require__(/*! ../internals/to-index */ "CyXQ");
var toOffset = __webpack_require__(/*! ../internals/to-offset */ "GC2F");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "oEtG");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "Gi26");
var classof = __webpack_require__(/*! ../internals/classof */ "9d/t");
var isObject = __webpack_require__(/*! ../internals/is-object */ "hh1v");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "2bX/");
var create = __webpack_require__(/*! ../internals/object-create */ "fHMY");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "OpvP");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "0rvr");
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "JBy8").f;
var typedArrayFrom = __webpack_require__(/*! ../internals/typed-array-from */ "oHi+");
var forEach = __webpack_require__(/*! ../internals/array-iteration */ "tycR").forEach;
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "JiZb");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "m/L8");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "Bs8V");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "afO8");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "cVYH");

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var enforceInternalState = InternalStateModule.enforce;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var round = Math.round;
var RangeError = global.RangeError;
var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
var ArrayBufferPrototype = ArrayBuffer.prototype;
var DataView = ArrayBufferModule.DataView;
var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
var TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;
var TypedArray = ArrayBufferViewCore.TypedArray;
var TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var isTypedArray = ArrayBufferViewCore.isTypedArray;
var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
var WRONG_LENGTH = 'Wrong length';

var fromList = function (C, list) {
  aTypedArrayConstructor(C);
  var index = 0;
  var length = list.length;
  var result = new C(length);
  while (length > index) result[index] = list[index++];
  return result;
};

var addGetter = function (it, key) {
  nativeDefineProperty(it, key, { get: function () {
    return getInternalState(this)[key];
  } });
};

var isArrayBuffer = function (it) {
  var klass;
  return isPrototypeOf(ArrayBufferPrototype, it) || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
};

var isTypedArrayIndex = function (target, key) {
  return isTypedArray(target)
    && !isSymbol(key)
    && key in target
    && isIntegralNumber(+key)
    && key >= 0;
};

var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
  key = toPropertyKey(key);
  return isTypedArrayIndex(target, key)
    ? createPropertyDescriptor(2, target[key])
    : nativeGetOwnPropertyDescriptor(target, key);
};

var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
  key = toPropertyKey(key);
  if (isTypedArrayIndex(target, key)
    && isObject(descriptor)
    && hasOwn(descriptor, 'value')
    && !hasOwn(descriptor, 'get')
    && !hasOwn(descriptor, 'set')
    // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable
    && (!hasOwn(descriptor, 'writable') || descriptor.writable)
    && (!hasOwn(descriptor, 'enumerable') || descriptor.enumerable)
  ) {
    target[key] = descriptor.value;
    return target;
  } return nativeDefineProperty(target, key, descriptor);
};

if (DESCRIPTORS) {
  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
    definePropertyModule.f = wrappedDefineProperty;
    addGetter(TypedArrayPrototype, 'buffer');
    addGetter(TypedArrayPrototype, 'byteOffset');
    addGetter(TypedArrayPrototype, 'byteLength');
    addGetter(TypedArrayPrototype, 'length');
  }

  $({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
    defineProperty: wrappedDefineProperty
  });

  module.exports = function (TYPE, wrapper, CLAMPED) {
    var BYTES = TYPE.match(/\d+$/)[0] / 8;
    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + TYPE;
    var SETTER = 'set' + TYPE;
    var NativeTypedArrayConstructor = global[CONSTRUCTOR_NAME];
    var TypedArrayConstructor = NativeTypedArrayConstructor;
    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
    var exported = {};

    var getter = function (that, index) {
      var data = getInternalState(that);
      return data.view[GETTER](index * BYTES + data.byteOffset, true);
    };

    var setter = function (that, index, value) {
      var data = getInternalState(that);
      if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
      data.view[SETTER](index * BYTES + data.byteOffset, value, true);
    };

    var addElement = function (that, index) {
      nativeDefineProperty(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
        anInstance(that, TypedArrayConstructorPrototype);
        var index = 0;
        var byteOffset = 0;
        var buffer, byteLength, length;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new ArrayBuffer(byteLength);
        } else if (isArrayBuffer(data)) {
          buffer = data;
          byteOffset = toOffset(offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - byteOffset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (isTypedArray(data)) {
          return fromList(TypedArrayConstructor, data);
        } else {
          return call(typedArrayFrom, TypedArrayConstructor, data);
        }
        setInternalState(that, {
          buffer: buffer,
          byteOffset: byteOffset,
          byteLength: byteLength,
          length: length,
          view: new DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
        anInstance(dummy, TypedArrayConstructorPrototype);
        return inheritIfRequired(function () {
          if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
          if (isArrayBuffer(data)) return $length !== undefined
            ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length)
            : typedArrayOffset !== undefined
              ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES))
              : new NativeTypedArrayConstructor(data);
          if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
          return call(typedArrayFrom, TypedArrayConstructor, data);
        }(), dummy, TypedArrayConstructor);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
        if (!(key in TypedArrayConstructor)) {
          createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
        }
      });
      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
    }

    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
    }

    enforceInternalState(TypedArrayConstructorPrototype).TypedArrayConstructor = TypedArrayConstructor;

    if (TYPED_ARRAY_TAG) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
    }

    var FORCED = TypedArrayConstructor != NativeTypedArrayConstructor;

    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

    $({ global: true, constructor: true, forced: FORCED, sham: !NATIVE_ARRAY_BUFFER_VIEWS }, exported);

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
      createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
    }

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
    }

    setSpecies(CONSTRUCTOR_NAME);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "fDd2":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/try-node-require.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "YF1G");

module.exports = function (name) {
  try {
    // eslint-disable-next-line no-new-func -- safe
    if (IS_NODE) return Function('return require("' + name + '")')();
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ "foSv":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "eoL8");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _getPrototypeOf;
__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "ExoC");
__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "NBAS");
function _getPrototypeOf(o) {
  exports.default = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "gbKW":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/web.atob.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "I+eb");
var global = __webpack_require__(/*! ../internals/global */ "2oRo");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "0GbY");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "4zBA");
var call = __webpack_require__(/*! ../internals/function-call */ "xluM");
var fails = __webpack_require__(/*! ../internals/fails */ "0Dky");
var toString = __webpack_require__(/*! ../internals/to-string */ "V37c");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "Gi26");
var validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ "1tal");
var ctoi = __webpack_require__(/*! ../internals/base64-map */ "uReb").ctoi;

var disallowed = /[^\d+/a-z]/i;
var whitespaces = /[\t\n\f\r ]+/g;
var finalEq = /[=]+$/;

var $atob = getBuiltIn('atob');
var fromCharCode = String.fromCharCode;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var exec = uncurryThis(disallowed.exec);

var NO_SPACES_IGNORE = fails(function () {
  return $atob(' ') !== '';
});

var NO_ENCODING_CHECK = !fails(function () {
  $atob('a');
});

var NO_ARG_RECEIVING_CHECK = !NO_SPACES_IGNORE && !NO_ENCODING_CHECK && !fails(function () {
  $atob();
});

var WRONG_ARITY = !NO_SPACES_IGNORE && !NO_ENCODING_CHECK && $atob.length !== 1;

// `atob` method
// https://html.spec.whatwg.org/multipage/webappapis.html#dom-atob
$({ global: true, bind: true, enumerable: true, forced: NO_SPACES_IGNORE || NO_ENCODING_CHECK || NO_ARG_RECEIVING_CHECK || WRONG_ARITY }, {
  atob: function atob(data) {
    validateArgumentsLength(arguments.length, 1);
    // `webpack` dev server bug on IE global methods - use call(fn, global, ...)
    if (NO_ARG_RECEIVING_CHECK || WRONG_ARITY) return call($atob, global, data);
    var string = replace(toString(data), whitespaces, '');
    var output = '';
    var position = 0;
    var bc = 0;
    var chr, bs;
    if (string.length % 4 == 0) {
      string = replace(string, finalEq, '');
    }
    if (string.length % 4 == 1 || exec(disallowed, string)) {
      throw new (getBuiltIn('DOMException'))('The string is not correctly encoded', 'InvalidCharacterError');
    }
    while (chr = charAt(string, position++)) {
      if (hasOwn(ctoi, chr)) {
        bs = bc % 4 ? bs * 64 + ctoi[chr] : ctoi[chr];
        if (bc++ % 4) output += fromCharCode(255 & bs >> (-2 * bc & 6));
      }
    } return output;
  }
});


/***/ }),

/***/ "gdVl":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-fill.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(/*! ../internals/to-object */ "ewvW");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "I8vh");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "B/qT");

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = lengthOfArrayLike(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "gvgV":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC");
var $includes = __webpack_require__(/*! ../internals/array-includes */ "TWQb").includes;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.includes` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
exportTypedArrayMethod('includes', function includes(searchElement /* , fromIndex */) {
  return $includes(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "hByQ":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "xluM");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "14Sl");
var anObject = __webpack_require__(/*! ../internals/an-object */ "glrk");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "cjT7");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "HYAF");
var sameValue = __webpack_require__(/*! ../internals/same-value */ "Ep9I");
var toString = __webpack_require__(/*! ../internals/to-string */ "V37c");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "3Eq5");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "FMNM");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, SEARCH);
      return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "i9Sw":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-exception.to-string-tag.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "0GbY");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "1E5z");

var DOM_EXCEPTION = 'DOMException';

// `DOMException.prototype[@@toStringTag]` property
setToStringTag(getBuiltIn(DOM_EXCEPTION), DOM_EXCEPTION);


/***/ }),

/***/ "iqeF":
/*!*************************************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-new -- required for testing */
var global = __webpack_require__(/*! ../internals/global */ "2oRo");
var fails = __webpack_require__(/*! ../internals/fails */ "0Dky");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "HH4o");
var NATIVE_ARRAY_BUFFER_VIEWS = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC").NATIVE_ARRAY_BUFFER_VIEWS;

var ArrayBuffer = global.ArrayBuffer;
var Int8Array = global.Int8Array;

module.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function () {
  Int8Array(1);
}) || !fails(function () {
  new Int8Array(-1);
}) || !checkCorrectnessOfIteration(function (iterable) {
  new Int8Array();
  new Int8Array(null);
  new Int8Array(1.5);
  new Int8Array(iterable);
}, true) || fails(function () {
  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
  return new Int8Array(new ArrayBuffer(2), 1, undefined).length !== 1;
});


/***/ }),

/***/ "kHIg":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "eoL8");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _wrapNativeSuper;
__webpack_require__(/*! core-js/modules/es.map.js */ "Tskq");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "07d7");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "PKPk");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "3bBZ");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "2eJa");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "1AHG");
var _getPrototypeOf = _interopRequireDefault(__webpack_require__(/*! ./getPrototypeOf.js */ "foSv"));
var _setPrototypeOf = _interopRequireDefault(__webpack_require__(/*! ./setPrototypeOf.js */ "s4An"));
var _isNativeFunction = _interopRequireDefault(__webpack_require__(/*! ./isNativeFunction.js */ "+pVZ"));
var _construct = _interopRequireDefault(__webpack_require__(/*! ./construct.js */ "RHh3"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  exports.default = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !(0, _isNativeFunction.default)(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return (0, _construct.default)(Class, arguments, (0, _getPrototypeOf.default)(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return (0, _setPrototypeOf.default)(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}

/***/ }),

/***/ "kHrH":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.at.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "B/qT");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "WSbT");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.at` method
// https://github.com/tc39/proposal-relative-indexing-method
exportTypedArrayMethod('at', function at(index) {
  var O = aTypedArray(this);
  var len = lengthOfArrayLike(O);
  var relativeIndex = toIntegerOrInfinity(index);
  var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
  return (k < 0 || k >= len) ? undefined : O[k];
});


/***/ }),

/***/ "kNi0":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-get-flags.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(/*! ../internals/function-call */ "xluM");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "Gi26");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "OpvP");
var regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "rW0t");

var RegExpPrototype = RegExp.prototype;

module.exports = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R)
    ? call(regExpFlags, R) : flags;
};


/***/ }),

/***/ "lEou":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.to-string-tag.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "0GbY");
var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ "4GWN");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "1E5z");

// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag(getBuiltIn('Symbol'), 'Symbol');


/***/ }),

/***/ "mGqG":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.find-last.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC");
var $findLast = __webpack_require__(/*! ../internals/array-iteration-from-last */ "oljQ").findLast;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findLast` method
// https://github.com/tc39/proposal-array-find-from-last
exportTypedArrayMethod('findLast', function findLast(predicate /* , thisArg */) {
  return $findLast(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "md7G":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "eoL8");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _possibleConstructorReturn;
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "2eJa");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "1AHG");
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! ./typeof.js */ "U8pU"));
var _assertThisInitialized = _interopRequireDefault(__webpack_require__(/*! ./assertThisInitialized.js */ "JX7q"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _possibleConstructorReturn(self, call) {
  if (call && ((0, _typeof2.default)(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return (0, _assertThisInitialized.default)(self);
}

/***/ }),

/***/ "moxL":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.copy-within.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "4zBA");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC");
var $ArrayCopyWithin = __webpack_require__(/*! ../internals/array-copy-within */ "FF6l");

var u$ArrayCopyWithin = uncurryThis($ArrayCopyWithin);
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
exportTypedArrayMethod('copyWithin', function copyWithin(target, start /* , end */) {
  return u$ArrayCopyWithin(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
});


/***/ }),

/***/ "oHi+":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-from.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "A2ZE");
var call = __webpack_require__(/*! ../internals/function-call */ "xluM");
var aConstructor = __webpack_require__(/*! ../internals/a-constructor */ "UIe5");
var toObject = __webpack_require__(/*! ../internals/to-object */ "ewvW");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "B/qT");
var getIterator = __webpack_require__(/*! ../internals/get-iterator */ "mh/w");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "NaFW");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "6VoE");
var isBigIntArray = __webpack_require__(/*! ../internals/is-big-int-array */ "vL8k");
var aTypedArrayConstructor = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC").aTypedArrayConstructor;
var toBigInt = __webpack_require__(/*! ../internals/to-big-int */ "9JVa");

module.exports = function from(source /* , mapfn, thisArg */) {
  var C = aConstructor(this);
  var O = toObject(source);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var i, length, result, thisIsBigIntArray, value, step, iterator, next;
  if (iteratorMethod && !isArrayIteratorMethod(iteratorMethod)) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    O = [];
    while (!(step = call(next, iterator)).done) {
      O.push(step.value);
    }
  }
  if (mapping && argumentsLength > 2) {
    mapfn = bind(mapfn, arguments[2]);
  }
  length = lengthOfArrayLike(O);
  result = new (aTypedArrayConstructor(C))(length);
  thisIsBigIntArray = isBigIntArray(result);
  for (i = 0; length > i; i++) {
    value = mapping ? mapfn(O[i], i) : O[i];
    // FF30- typed arrays doesn't properly convert objects to typed array values
    result[i] = thisIsBigIntArray ? toBigInt(value) : +value;
  }
  return result;
};


/***/ }),

/***/ "oljQ":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration-from-last.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "A2ZE");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "RK3t");
var toObject = __webpack_require__(/*! ../internals/to-object */ "ewvW");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "B/qT");

// `Array.prototype.{ findLast, findLastIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_FIND_LAST_INDEX = TYPE == 1;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var index = lengthOfArrayLike(self);
    var value, result;
    while (index-- > 0) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (result) switch (TYPE) {
        case 0: return value; // findLast
        case 1: return index; // findLastIndex
      }
    }
    return IS_FIND_LAST_INDEX ? -1 : undefined;
  };
};

module.exports = {
  // `Array.prototype.findLast` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLast: createMethod(0),
  // `Array.prototype.findLastIndex` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLastIndex: createMethod(1)
};


/***/ }),

/***/ "qXVe":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.every.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC");
var $every = __webpack_require__(/*! ../internals/array-iteration */ "tycR").every;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.every` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
exportTypedArrayMethod('every', function every(callbackfn /* , thisArg */) {
  return $every(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "qf9q":
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault.js */ "TqRt").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "ODXe"));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "U8pU"));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "KQm4"));
var _createForOfIteratorHelper2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ "uFwe"));
var _regeneratorRuntime2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "x+uP"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "HaE+"));
var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "VTBJ"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "1OyB"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "vuIU"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "Ji7U"));
var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "LK+K"));
var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js */ "kHIg"));
__webpack_require__(/*! core-js/modules/es.global-this.js */ "bFeb");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "2eJa");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "1AHG");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "07d7");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "JfAA");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "+2oP");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "FNk8");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "4l63");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "ma9I");
__webpack_require__(/*! core-js/modules/es.array.splice.js */ "pDQq");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "yXV3");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "FZtP");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "tkto");
__webpack_require__(/*! core-js/modules/es.array.reduce.js */ "E9XD");
__webpack_require__(/*! core-js/modules/es.array.includes.js */ "yq1k");
__webpack_require__(/*! core-js/modules/es.string.includes.js */ "JTJg");
__webpack_require__(/*! core-js/modules/es.array.sort.js */ "ToJy");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "6cQw");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "SYor");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "rB9j");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "ALS0");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "2B1R");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "eoL8");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "3bBZ");
__webpack_require__(/*! core-js/modules/es.string.search.js */ "hByQ");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "qePV");
__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "TWNs");
__webpack_require__(/*! core-js/modules/es.regexp.dot-all.js */ "xgco");
__webpack_require__(/*! core-js/modules/es.regexp.sticky.js */ "LD7m");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "UxlC");
__webpack_require__(/*! core-js/modules/es.array-buffer.slice.js */ "rOQg");
__webpack_require__(/*! core-js/modules/es.typed-array.uint8-array.js */ "XMab");
__webpack_require__(/*! core-js/modules/es.typed-array.at.js */ "kHrH");
__webpack_require__(/*! core-js/modules/es.typed-array.copy-within.js */ "moxL");
__webpack_require__(/*! core-js/modules/es.typed-array.every.js */ "qXVe");
__webpack_require__(/*! core-js/modules/es.typed-array.fill.js */ "c162");
__webpack_require__(/*! core-js/modules/es.typed-array.filter.js */ "waxf");
__webpack_require__(/*! core-js/modules/es.typed-array.find.js */ "0TkE");
__webpack_require__(/*! core-js/modules/es.typed-array.find-index.js */ "Onu3");
__webpack_require__(/*! core-js/modules/es.typed-array.find-last.js */ "mGqG");
__webpack_require__(/*! core-js/modules/es.typed-array.find-last-index.js */ "HQKR");
__webpack_require__(/*! core-js/modules/es.typed-array.for-each.js */ "1dYe");
__webpack_require__(/*! core-js/modules/es.typed-array.includes.js */ "gvgV");
__webpack_require__(/*! core-js/modules/es.typed-array.index-of.js */ "6R/c");
__webpack_require__(/*! core-js/modules/es.typed-array.iterator.js */ "YL0P");
__webpack_require__(/*! core-js/modules/es.typed-array.join.js */ "X5Zq");
__webpack_require__(/*! core-js/modules/es.typed-array.last-index-of.js */ "MoCz");
__webpack_require__(/*! core-js/modules/es.typed-array.map.js */ "P8wP");
__webpack_require__(/*! core-js/modules/es.typed-array.reduce.js */ "ypFw");
__webpack_require__(/*! core-js/modules/es.typed-array.reduce-right.js */ "JaFt");
__webpack_require__(/*! core-js/modules/es.typed-array.reverse.js */ "zSZm");
__webpack_require__(/*! core-js/modules/es.typed-array.set.js */ "PF2M");
__webpack_require__(/*! core-js/modules/es.typed-array.slice.js */ "KVSy");
__webpack_require__(/*! core-js/modules/es.typed-array.some.js */ "ZJ55");
__webpack_require__(/*! core-js/modules/es.typed-array.sort.js */ "IZzc");
__webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string.js */ "s5qe");
__webpack_require__(/*! core-js/modules/es.typed-array.to-string.js */ "cvf0");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "pNMO");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "4Brf");
__webpack_require__(/*! core-js/modules/es.number.max-safe-integer.js */ "r/Vq");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "fbCW");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "Rm1S");
__webpack_require__(/*! core-js/modules/es.regexp.flags.js */ "U3f4");
__webpack_require__(/*! core-js/modules/es.array.reverse.js */ "Junv");
__webpack_require__(/*! core-js/modules/es.date.to-json.js */ "9LPj");
__webpack_require__(/*! core-js/modules/web.url.to-json.js */ "vxnP");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "TeQF");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "pjDv");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "PKPk");
__webpack_require__(/*! core-js/modules/web.atob.js */ "gbKW");
__webpack_require__(/*! core-js/modules/web.dom-exception.constructor.js */ "DraL");
__webpack_require__(/*! core-js/modules/web.dom-exception.stack.js */ "t+/R");
__webpack_require__(/*! core-js/modules/web.dom-exception.to-string-tag.js */ "i9Sw");
__webpack_require__(/*! core-js/modules/es.array.last-index-of.js */ "uqXc");
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ "N9wI");
var _pages = _interopRequireDefault(__webpack_require__(/*! @/pages.json */ "rONJ"));
"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
function n(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function s(e, t, n) {
  return e(n = {
    path: t,
    exports: {},
    require: function require(e, t) {
      return function () {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t && n.path);
    }
  }, n.exports), n.exports;
}
var r = s(function (e, t) {
    var n;
    e.exports = (n = n || function (e, t) {
      var n = Object.create || function () {
          function e() {}
          return function (t) {
            var n;
            return e.prototype = t, n = new e(), e.prototype = null, n;
          };
        }(),
        s = {},
        r = s.lib = {},
        i = r.Base = {
          extend: function extend(e) {
            var t = n(this);
            return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {
              t.$super.init.apply(this, arguments);
            }), t.init.prototype = t, t.$super = this, t;
          },
          create: function create() {
            var e = this.extend();
            return e.init.apply(e, arguments), e;
          },
          init: function init() {},
          mixIn: function mixIn(e) {
            for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
            e.hasOwnProperty("toString") && (this.toString = e.toString);
          },
          clone: function clone() {
            return this.init.prototype.extend(this);
          }
        },
        o = r.WordArray = i.extend({
          init: function init(e, n) {
            e = this.words = e || [], this.sigBytes = n != t ? n : 4 * e.length;
          },
          toString: function toString(e) {
            return (e || c).stringify(this);
          },
          concat: function concat(e) {
            var t = this.words,
              n = e.words,
              s = this.sigBytes,
              r = e.sigBytes;
            if (this.clamp(), s % 4) for (var i = 0; i < r; i++) {
              var o = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              t[s + i >>> 2] |= o << 24 - (s + i) % 4 * 8;
            } else for (i = 0; i < r; i += 4) t[s + i >>> 2] = n[i >>> 2];
            return this.sigBytes += r, this;
          },
          clamp: function clamp() {
            var t = this.words,
              n = this.sigBytes;
            t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e.words = this.words.slice(0), e;
          },
          random: function random(t) {
            for (var n, s = [], r = function r(t) {
                t = t;
                var n = 987654321,
                  s = 4294967295;
                return function () {
                  var r = ((n = 36969 * (65535 & n) + (n >> 16) & s) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & s) & s;
                  return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);
                };
              }, i = 0; i < t; i += 4) {
              var a = r(4294967296 * (n || e.random()));
              n = 987654071 * a(), s.push(4294967296 * a() | 0);
            }
            return new o.init(s, t);
          }
        }),
        a = s.enc = {},
        c = a.Hex = {
          stringify: function stringify(e) {
            for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {
              var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              s.push((i >>> 4).toString(16)), s.push((15 & i).toString(16));
            }
            return s.join("");
          },
          parse: function parse(e) {
            for (var t = e.length, n = [], s = 0; s < t; s += 2) n[s >>> 3] |= parseInt(e.substr(s, 2), 16) << 24 - s % 8 * 4;
            return new o.init(n, t / 2);
          }
        },
        u = a.Latin1 = {
          stringify: function stringify(e) {
            for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {
              var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              s.push(String.fromCharCode(i));
            }
            return s.join("");
          },
          parse: function parse(e) {
            for (var t = e.length, n = [], s = 0; s < t; s++) n[s >>> 2] |= (255 & e.charCodeAt(s)) << 24 - s % 4 * 8;
            return new o.init(n, t);
          }
        },
        l = a.Utf8 = {
          stringify: function stringify(e) {
            try {
              return decodeURIComponent(escape(u.stringify(e)));
            } catch (e) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          parse: function parse(e) {
            return u.parse(unescape(encodeURIComponent(e)));
          }
        },
        h = r.BufferedBlockAlgorithm = i.extend({
          reset: function reset() {
            this._data = new o.init(), this._nDataBytes = 0;
          },
          _append: function _append(e) {
            "string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
          },
          _process: function _process(t) {
            var n = this._data,
              s = n.words,
              r = n.sigBytes,
              i = this.blockSize,
              a = r / (4 * i),
              c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * i,
              u = e.min(4 * c, r);
            if (c) {
              for (var l = 0; l < c; l += i) this._doProcessBlock(s, l);
              var h = s.splice(0, c);
              n.sigBytes -= u;
            }
            return new o.init(h, u);
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e._data = this._data.clone(), e;
          },
          _minBufferSize: 0
        });
      r.Hasher = h.extend({
        cfg: i.extend(),
        init: function init(e) {
          this.cfg = this.cfg.extend(e), this.reset();
        },
        reset: function reset() {
          h.reset.call(this), this._doReset();
        },
        update: function update(e) {
          return this._append(e), this._process(), this;
        },
        finalize: function finalize(e) {
          return e && this._append(e), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function _createHelper(e) {
          return function (t, n) {
            return new e.init(n).finalize(t);
          };
        },
        _createHmacHelper: function _createHmacHelper(e) {
          return function (t, n) {
            return new d.HMAC.init(e, n).finalize(t);
          };
        }
      });
      var d = s.algo = {};
      return s;
    }(Math), n);
  }),
  i = r,
  o = (s(function (e, t) {
    var n;
    e.exports = (n = i, function (e) {
      var t = n,
        s = t.lib,
        r = s.WordArray,
        i = s.Hasher,
        o = t.algo,
        a = [];
      !function () {
        for (var t = 0; t < 64; t++) a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;
      }();
      var c = o.MD5 = i.extend({
        _doReset: function _doReset() {
          this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);
        },
        _doProcessBlock: function _doProcessBlock(e, t) {
          for (var n = 0; n < 16; n++) {
            var s = t + n,
              r = e[s];
            e[s] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
          }
          var i = this._hash.words,
            o = e[t + 0],
            c = e[t + 1],
            f = e[t + 2],
            p = e[t + 3],
            g = e[t + 4],
            m = e[t + 5],
            y = e[t + 6],
            _ = e[t + 7],
            w = e[t + 8],
            v = e[t + 9],
            S = e[t + 10],
            k = e[t + 11],
            I = e[t + 12],
            b = e[t + 13],
            T = e[t + 14],
            A = e[t + 15],
            C = i[0],
            P = i[1],
            E = i[2],
            O = i[3];
          C = u(C, P, E, O, o, 7, a[0]), O = u(O, C, P, E, c, 12, a[1]), E = u(E, O, C, P, f, 17, a[2]), P = u(P, E, O, C, p, 22, a[3]), C = u(C, P, E, O, g, 7, a[4]), O = u(O, C, P, E, m, 12, a[5]), E = u(E, O, C, P, y, 17, a[6]), P = u(P, E, O, C, _, 22, a[7]), C = u(C, P, E, O, w, 7, a[8]), O = u(O, C, P, E, v, 12, a[9]), E = u(E, O, C, P, S, 17, a[10]), P = u(P, E, O, C, k, 22, a[11]), C = u(C, P, E, O, I, 7, a[12]), O = u(O, C, P, E, b, 12, a[13]), E = u(E, O, C, P, T, 17, a[14]), C = l(C, P = u(P, E, O, C, A, 22, a[15]), E, O, c, 5, a[16]), O = l(O, C, P, E, y, 9, a[17]), E = l(E, O, C, P, k, 14, a[18]), P = l(P, E, O, C, o, 20, a[19]), C = l(C, P, E, O, m, 5, a[20]), O = l(O, C, P, E, S, 9, a[21]), E = l(E, O, C, P, A, 14, a[22]), P = l(P, E, O, C, g, 20, a[23]), C = l(C, P, E, O, v, 5, a[24]), O = l(O, C, P, E, T, 9, a[25]), E = l(E, O, C, P, p, 14, a[26]), P = l(P, E, O, C, w, 20, a[27]), C = l(C, P, E, O, b, 5, a[28]), O = l(O, C, P, E, f, 9, a[29]), E = l(E, O, C, P, _, 14, a[30]), C = h(C, P = l(P, E, O, C, I, 20, a[31]), E, O, m, 4, a[32]), O = h(O, C, P, E, w, 11, a[33]), E = h(E, O, C, P, k, 16, a[34]), P = h(P, E, O, C, T, 23, a[35]), C = h(C, P, E, O, c, 4, a[36]), O = h(O, C, P, E, g, 11, a[37]), E = h(E, O, C, P, _, 16, a[38]), P = h(P, E, O, C, S, 23, a[39]), C = h(C, P, E, O, b, 4, a[40]), O = h(O, C, P, E, o, 11, a[41]), E = h(E, O, C, P, p, 16, a[42]), P = h(P, E, O, C, y, 23, a[43]), C = h(C, P, E, O, v, 4, a[44]), O = h(O, C, P, E, I, 11, a[45]), E = h(E, O, C, P, A, 16, a[46]), C = d(C, P = h(P, E, O, C, f, 23, a[47]), E, O, o, 6, a[48]), O = d(O, C, P, E, _, 10, a[49]), E = d(E, O, C, P, T, 15, a[50]), P = d(P, E, O, C, m, 21, a[51]), C = d(C, P, E, O, I, 6, a[52]), O = d(O, C, P, E, p, 10, a[53]), E = d(E, O, C, P, S, 15, a[54]), P = d(P, E, O, C, c, 21, a[55]), C = d(C, P, E, O, w, 6, a[56]), O = d(O, C, P, E, A, 10, a[57]), E = d(E, O, C, P, y, 15, a[58]), P = d(P, E, O, C, b, 21, a[59]), C = d(C, P, E, O, g, 6, a[60]), O = d(O, C, P, E, k, 10, a[61]), E = d(E, O, C, P, f, 15, a[62]), P = d(P, E, O, C, v, 21, a[63]), i[0] = i[0] + C | 0, i[1] = i[1] + P | 0, i[2] = i[2] + E | 0, i[3] = i[3] + O | 0;
        },
        _doFinalize: function _doFinalize() {
          var t = this._data,
            n = t.words,
            s = 8 * this._nDataBytes,
            r = 8 * t.sigBytes;
          n[r >>> 5] |= 128 << 24 - r % 32;
          var i = e.floor(s / 4294967296),
            o = s;
          n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();
          for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {
            var l = c[u];
            c[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);
          }
          return a;
        },
        clone: function clone() {
          var e = i.clone.call(this);
          return e._hash = this._hash.clone(), e;
        }
      });
      function u(e, t, n, s, r, i, o) {
        var a = e + (t & n | ~t & s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function l(e, t, n, s, r, i, o) {
        var a = e + (t & s | n & ~s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function h(e, t, n, s, r, i, o) {
        var a = e + (t ^ n ^ s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function d(e, t, n, s, r, i, o) {
        var a = e + (n ^ (t | ~s)) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      t.MD5 = i._createHelper(c), t.HmacMD5 = i._createHmacHelper(c);
    }(Math), n.MD5);
  }), s(function (e, t) {
    var n;
    e.exports = (n = i, void function () {
      var e = n,
        t = e.lib.Base,
        s = e.enc.Utf8;
      e.algo.HMAC = t.extend({
        init: function init(e, t) {
          e = this._hasher = new e.init(), "string" == typeof t && (t = s.parse(t));
          var n = e.blockSize,
            r = 4 * n;
          t.sigBytes > r && (t = e.finalize(t)), t.clamp();
          for (var i = this._oKey = t.clone(), o = this._iKey = t.clone(), a = i.words, c = o.words, u = 0; u < n; u++) a[u] ^= 1549556828, c[u] ^= 909522486;
          i.sigBytes = o.sigBytes = r, this.reset();
        },
        reset: function reset() {
          var e = this._hasher;
          e.reset(), e.update(this._iKey);
        },
        update: function update(e) {
          return this._hasher.update(e), this;
        },
        finalize: function finalize(e) {
          var t = this._hasher,
            n = t.finalize(e);
          return t.reset(), t.finalize(this._oKey.clone().concat(n));
        }
      });
    }());
  }), s(function (e, t) {
    e.exports = i.HmacMD5;
  })),
  a = s(function (e, t) {
    e.exports = i.enc.Utf8;
  }),
  c = s(function (e, t) {
    var n;
    e.exports = (n = i, function () {
      var e = n,
        t = e.lib.WordArray;
      function s(e, n, s) {
        for (var r = [], i = 0, o = 0; o < n; o++) if (o % 4) {
          var a = s[e.charCodeAt(o - 1)] << o % 4 * 2,
            c = s[e.charCodeAt(o)] >>> 6 - o % 4 * 2;
          r[i >>> 2] |= (a | c) << 24 - i % 4 * 8, i++;
        }
        return t.create(r, i);
      }
      e.enc.Base64 = {
        stringify: function stringify(e) {
          var t = e.words,
            n = e.sigBytes,
            s = this._map;
          e.clamp();
          for (var r = [], i = 0; i < n; i += 3) for (var o = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, a = 0; a < 4 && i + .75 * a < n; a++) r.push(s.charAt(o >>> 6 * (3 - a) & 63));
          var c = s.charAt(64);
          if (c) for (; r.length % 4;) r.push(c);
          return r.join("");
        },
        parse: function parse(e) {
          var t = e.length,
            n = this._map,
            r = this._reverseMap;
          if (!r) {
            r = this._reverseMap = [];
            for (var i = 0; i < n.length; i++) r[n.charCodeAt(i)] = i;
          }
          var o = n.charAt(64);
          if (o) {
            var a = e.indexOf(o);
            -1 !== a && (t = a);
          }
          return s(e, t, r);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      };
    }(), n.enc.Base64);
  });
var u = "FUNCTION",
  l = "OBJECT",
  h = "CLIENT_DB";
function d(e) {
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
}
function f(e) {
  return "object" === d(e);
}
function p(e) {
  return "function" == typeof e;
}
function g(e) {
  return function () {
    try {
      return e.apply(e, arguments);
    } catch (e) {
      console.error(e);
    }
  };
}
function m(e) {
  return e && "string" == typeof e ? JSON.parse(e) : e;
}
var y = "development" === "development",
  _ = "h5",
  w = "true" === undefined || !0 === undefined,
  v = m([]);
var S;
S = "h5" === _ ? "web" : "app-plus" === _ ? "app" : _;
var k = m(undefined),
  I = m(undefined) || [],
  b = false;
var T = "";
try {
  {
    var _e2 = __webpack_require__(/*! uni-stat-config */ "7NYF").default || __webpack_require__(/*! uni-stat-config */ "7NYF");
    T = _e2.appid;
  }
} catch (e) {}
var A = {};
function C(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var n, s;
  return n = A, s = e, Object.prototype.hasOwnProperty.call(n, s) || (A[e] = t), A[e];
}
"app" === S && (A = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});
var P = ["invoke", "success", "fail", "complete"],
  E = C("_globalUniCloudInterceptor");
function O(e, t) {
  E[e] || (E[e] = {}), f(t) && Object.keys(t).forEach(function (n) {
    P.indexOf(n) > -1 && function (e, t, n) {
      var s = E[e][t];
      s || (s = E[e][t] = []), -1 === s.indexOf(n) && p(n) && s.push(n);
    }(e, n, t[n]);
  });
}
function x(e, t) {
  E[e] || (E[e] = {}), f(t) ? Object.keys(t).forEach(function (n) {
    P.indexOf(n) > -1 && function (e, t, n) {
      var s = E[e][t];
      if (!s) return;
      var r = s.indexOf(n);
      r > -1 && s.splice(r, 1);
    }(e, n, t[n]);
  }) : delete E[e];
}
function U(e, t) {
  return e && 0 !== e.length ? e.reduce(function (e, n) {
    return e.then(function () {
      return n(t);
    });
  }, Promise.resolve()) : Promise.resolve();
}
function R(e, t) {
  return E[e] && E[e][t] || [];
}
function L(e) {
  O("callObject", e);
}
var N = C("_globalUniCloudListener"),
  D = "response",
  F = "needLogin",
  q = "refreshToken",
  K = "clientdb",
  M = "cloudfunction",
  j = "cloudobject";
function B(e) {
  return N[e] || (N[e] = []), N[e];
}
function $(e, t) {
  var n = B(e);
  n.includes(t) || n.push(t);
}
function W(e, t) {
  var n = B(e),
    s = n.indexOf(t);
  -1 !== s && n.splice(s, 1);
}
function z(e, t) {
  var n = B(e);
  for (var _e3 = 0; _e3 < n.length; _e3++) {
    (0, n[_e3])(t);
  }
}
var J,
  H = !1;
function G() {
  return J || (J = new Promise(function (e) {
    H && e(), function t() {
      if ("function" == typeof getCurrentPages) {
        var _t2 = getCurrentPages();
        _t2 && _t2[0] && (H = !0, e());
      }
      H || setTimeout(function () {
        t();
      }, 30);
    }();
  }), J);
}
function V(e) {
  var t = {};
  for (var _n2 in e) {
    var _s2 = e[_n2];
    p(_s2) && (t[_n2] = g(_s2));
  }
  return t;
}
function Y(e, t) {
  return t ? function (n) {
    var _this = this;
    var s = !1;
    if ("callFunction" === t) {
      var _e4 = n && n.type || u;
      s = _e4 !== u;
    }
    var r = "callFunction" === t && !s;
    var i;
    i = this.isReady ? Promise.resolve() : this.initUniCloud, n = n || {};
    var _V = V(n),
      o = _V.success,
      a = _V.fail,
      c = _V.complete,
      l = i.then(function () {
        return s ? Promise.resolve() : U(R(t, "invoke"), n);
      }).then(function () {
        return e.call(_this, n);
      }).then(function (e) {
        return s ? Promise.resolve(e) : U(R(t, "success"), e).then(function () {
          return U(R(t, "complete"), e);
        }).then(function () {
          return r && z(D, {
            type: M,
            content: e
          }), Promise.resolve(e);
        });
      }, function (e) {
        return s ? Promise.reject(e) : U(R(t, "fail"), e).then(function () {
          return U(R(t, "complete"), e);
        }).then(function () {
          return z(D, {
            type: M,
            content: e
          }), Promise.reject(e);
        });
      });
    if (!(o || a || c)) return l;
    l.then(function (e) {
      o && o(e), c && c(e), r && z(D, {
        type: M,
        content: e
      });
    }, function (e) {
      a && a(e), c && c(e), r && z(D, {
        type: M,
        content: e
      });
    });
  } : function (t) {
    t = t || {};
    var _V2 = V(t),
      n = _V2.success,
      s = _V2.fail,
      r = _V2.complete;
    if (!(n || s || r)) return e.call(this, t);
    e.call(this, t).then(function (e) {
      n && n(e), r && r(e);
    }, function (e) {
      s && s(e), r && r(e);
    });
  };
}
var Q = /*#__PURE__*/function (_Error) {
  (0, _inherits2.default)(Q, _Error);
  var _super = (0, _createSuper2.default)(Q);
  function Q(e) {
    var _this2;
    (0, _classCallCheck2.default)(this, Q);
    _this2 = _super.call(this, e.message), _this2.errMsg = e.message || e.errMsg || "unknown system error", _this2.code = _this2.errCode = e.code || e.errCode || "SYSTEM_ERROR", _this2.errSubject = _this2.subject = e.subject || e.errSubject, _this2.cause = e.cause, _this2.requestId = e.requestId;
    return _this2;
  }
  (0, _createClass2.default)(Q, [{
    key: "toJson",
    value: function toJson() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (!(e >= 10)) return e++, {
        errCode: this.errCode,
        errMsg: this.errMsg,
        errSubject: this.errSubject,
        cause: this.cause && this.cause.toJson ? this.cause.toJson(e) : this.cause
      };
    }
  }]);
  return Q;
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));
var X = {
  request: function request(e) {
    return uni.request(e);
  },
  uploadFile: function uploadFile(e) {
    return uni.uploadFile(e);
  },
  setStorageSync: function setStorageSync(e, t) {
    return uni.setStorageSync(e, t);
  },
  getStorageSync: function getStorageSync(e) {
    return uni.getStorageSync(e);
  },
  removeStorageSync: function removeStorageSync(e) {
    return uni.removeStorageSync(e);
  },
  clearStorageSync: function clearStorageSync() {
    return uni.clearStorageSync();
  }
};
function Z() {
  return {
    token: X.getStorageSync("uni_id_token") || X.getStorageSync("uniIdToken"),
    tokenExpired: X.getStorageSync("uni_id_token_expired")
  };
}
function ee() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref.token,
    t = _ref.tokenExpired;
  e && X.setStorageSync("uni_id_token", e), t && X.setStorageSync("uni_id_token_expired", t);
}
function te() {
  if (!y || "web" !== S) return;
  uni.getStorageSync("__LAST_DCLOUD_APPID") !== T && (uni.setStorageSync("__LAST_DCLOUD_APPID", T), console.warn("检测到当前项目与上次运行到此端口的项目不一致，自动清理uni-id保存的token信息（仅开发调试时生效）"), X.removeStorageSync("uni_id_token"), X.removeStorageSync("uniIdToken"), X.removeStorageSync("uni_id_token_expired"));
}
var ne, se;
function re() {
  return ne || (ne = uni.getSystemInfoSync()), ne;
}
function ie() {
  var e, t;
  try {
    if (uni.getLaunchOptionsSync) {
      if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1) return;
      var _uni$getLaunchOptions = uni.getLaunchOptionsSync(),
        _n3 = _uni$getLaunchOptions.scene,
        _s3 = _uni$getLaunchOptions.channel;
      e = _s3, t = _n3;
    }
  } catch (e) {}
  return {
    channel: e,
    scene: t
  };
}
function oe() {
  var e = uni.getLocale && uni.getLocale() || "en";
  if (se) return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, se), {}, {
    locale: e,
    LOCALE: e
  });
  var t = re(),
    n = t.deviceId,
    s = t.osName,
    r = t.uniPlatform,
    i = t.appId,
    o = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];
  for (var _e5 = 0; _e5 < o.length; _e5++) {
    delete t[o[_e5]];
  }
  return se = (0, _objectSpread2.default)((0, _objectSpread2.default)({
    PLATFORM: r,
    OS: s,
    APPID: i,
    DEVICEID: n
  }, ie()), t), (0, _objectSpread2.default)((0, _objectSpread2.default)({}, se), {}, {
    locale: e,
    LOCALE: e
  });
}
var ae = {
    sign: function sign(e, t) {
      var n = "";
      return Object.keys(e).sort().forEach(function (t) {
        e[t] && (n = n + "&" + t + "=" + e[t]);
      }), n = n.slice(1), o(n, t).toString();
    },
    wrappedRequest: function wrappedRequest(e, t) {
      return new Promise(function (n, s) {
        t(Object.assign(e, {
          complete: function complete(e) {
            e || (e = {}), y && "web" === S && e.errMsg && 0 === e.errMsg.indexOf("request:fail") && console.warn("发布H5，需要在uniCloud后台操作，绑定安全域名，否则会因为跨域问题而无法访问。教程参考：https://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");
            var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];
            if (!e.statusCode || e.statusCode >= 400) return s(new Q({
              code: "SYS_ERR",
              message: e.errMsg || "request:fail",
              requestId: t
            }));
            var r = e.data;
            if (r.error) return s(new Q({
              code: r.error.code,
              message: r.error.message,
              requestId: t
            }));
            r.result = r.data, r.requestId = t, delete r.data, n(r);
          }
        }));
      });
    },
    toBase64: function toBase64(e) {
      return c.stringify(a.parse(e));
    }
  },
  ce = {
    "uniCloud.init.paramRequired": "{param} required",
    "uniCloud.uploadFile.fileError": "filePath should be instance of File"
  };
var _e6 = (0, _uniI18n.initVueI18n)({
    "zh-Hans": {
      "uniCloud.init.paramRequired": "缺少参数：{param}",
      "uniCloud.uploadFile.fileError": "filePath应为File对象"
    },
    "zh-Hant": {
      "uniCloud.init.paramRequired": "缺少参数：{param}",
      "uniCloud.uploadFile.fileError": "filePath应为File对象"
    },
    en: ce,
    fr: {
      "uniCloud.init.paramRequired": "{param} required",
      "uniCloud.uploadFile.fileError": "filePath should be instance of File"
    },
    es: {
      "uniCloud.init.paramRequired": "{param} required",
      "uniCloud.uploadFile.fileError": "filePath should be instance of File"
    },
    ja: ce
  }, "zh-Hans"),
  ue = _e6.t;
var le = /*#__PURE__*/function () {
  function le(e) {
    (0, _classCallCheck2.default)(this, le);
    ["spaceId", "clientSecret"].forEach(function (t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error(ue("uniCloud.init.paramRequired", {
        param: t
      }));
    }), this.config = Object.assign({}, {
      endpoint: "https://api.bspapp.com"
    }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = X, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;
  }
  (0, _createClass2.default)(le, [{
    key: "hasAccessToken",
    get: function get() {
      return !!this.accessToken;
    }
  }, {
    key: "setAccessToken",
    value: function setAccessToken(e) {
      this.accessToken = e;
    }
  }, {
    key: "requestWrapped",
    value: function requestWrapped(e) {
      return ae.wrappedRequest(e, this.adapter.request);
    }
  }, {
    key: "requestAuth",
    value: function requestAuth(e) {
      return this.requestWrapped(e);
    }
  }, {
    key: "request",
    value: function request(e, t) {
      var _this3 = this;
      return Promise.resolve().then(function () {
        return _this3.hasAccessToken ? t ? _this3.requestWrapped(e) : _this3.requestWrapped(e).catch(function (t) {
          return new Promise(function (e, n) {
            !t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();
          }).then(function () {
            return _this3.getAccessToken();
          }).then(function () {
            var t = _this3.rebuildRequest(e);
            return _this3.request(t, !0);
          });
        }) : _this3.getAccessToken().then(function () {
          var t = _this3.rebuildRequest(e);
          return _this3.request(t, !0);
        });
      });
    }
  }, {
    key: "rebuildRequest",
    value: function rebuildRequest(e) {
      var t = Object.assign({}, e);
      return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = ae.sign(t.data, this.config.clientSecret), t;
    }
  }, {
    key: "setupRequest",
    value: function setupRequest(e, t) {
      var n = Object.assign({}, e, {
          spaceId: this.config.spaceId,
          timestamp: Date.now()
        }),
        s = {
          "Content-Type": "application/json"
        };
      return "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = ae.sign(n, this.config.clientSecret), {
        url: this.config.requestUrl,
        method: "POST",
        data: n,
        dataType: "json",
        header: s
      };
    }
  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      var _this4 = this;
      if ("pending" === this._getAccessTokenPromiseStatus) return this._getAccessTokenPromise;
      this._getAccessTokenPromiseStatus = "pending";
      return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({
        method: "serverless.auth.user.anonymousAuthorize",
        params: "{}"
      }, "auth")).then(function (e) {
        return new Promise(function (t, n) {
          e.result && e.result.accessToken ? (_this4.setAccessToken(e.result.accessToken), _this4._getAccessTokenPromiseStatus = "fulfilled", t(_this4.accessToken)) : (_this4._getAccessTokenPromiseStatus = "rejected", n(new Q({
            code: "AUTH_FAILED",
            message: "获取accessToken失败"
          })));
        });
      }, function (e) {
        return _this4._getAccessTokenPromiseStatus = "rejected", Promise.reject(e);
      }), this._getAccessTokenPromise;
    }
  }, {
    key: "authorize",
    value: function authorize() {
      this.getAccessToken();
    }
  }, {
    key: "callFunction",
    value: function callFunction(e) {
      var t = {
        method: "serverless.function.runtime.invoke",
        params: JSON.stringify({
          functionTarget: e.name,
          functionArgs: e.data || {}
        })
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "getOSSUploadOptionsFromPath",
    value: function getOSSUploadOptionsFromPath(e) {
      var t = {
        method: "serverless.file.resource.generateProximalSign",
        params: JSON.stringify(e)
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref2) {
      var _this5 = this;
      var e = _ref2.url,
        t = _ref2.formData,
        n = _ref2.name,
        s = _ref2.filePath,
        r = _ref2.fileType,
        i = _ref2.onUploadProgress;
      return new Promise(function (o, a) {
        var c = _this5.adapter.uploadFile({
          url: e,
          formData: t,
          name: n,
          filePath: s,
          fileType: r,
          header: {
            "X-OSS-server-side-encrpytion": "AES256"
          },
          success: function success(e) {
            e && e.statusCode < 400 ? o(e) : a(new Q({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            a(new Q({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof i && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {
          i({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "reportOSSUpload",
    value: function reportOSSUpload(e) {
      var t = {
        method: "serverless.file.resource.report",
        params: JSON.stringify(e)
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee(_ref3) {
        var e, t, _ref3$fileType, n, s, r, i, o, a, c, u, l, h, f, p, g, m, y, _e7, _;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              e = _ref3.filePath, t = _ref3.cloudPath, _ref3$fileType = _ref3.fileType, n = _ref3$fileType === void 0 ? "image" : _ref3$fileType, s = _ref3.onUploadProgress, r = _ref3.config;
              if (!("string" !== d(t))) {
                _context.next = 3;
                break;
              }
              throw new Q({
                code: "INVALID_PARAM",
                message: "cloudPath必须为字符串类型"
              });
            case 3:
              if (t = t.trim()) {
                _context.next = 5;
                break;
              }
              throw new Q({
                code: "CLOUDPATH_REQUIRED",
                message: "cloudPath不可为空"
              });
            case 5:
              if (!/:\/\//.test(t)) {
                _context.next = 7;
                break;
              }
              throw new Q({
                code: "INVALID_PARAM",
                message: "cloudPath不合法"
              });
            case 7:
              i = r && r.envType || this.config.envType;
              _context.next = 10;
              return this.getOSSUploadOptionsFromPath({
                env: i,
                filename: t
              });
            case 10:
              o = _context.sent.result;
              a = "https://" + o.cdnDomain + "/" + o.ossPath;
              c = o.securityToken;
              u = o.accessKeyId;
              l = o.signature;
              h = o.host;
              f = o.ossPath;
              p = o.id;
              g = o.policy;
              m = o.ossCallbackUrl;
              y = {
                "Cache-Control": "max-age=2592000",
                "Content-Disposition": "attachment",
                OSSAccessKeyId: u,
                Signature: l,
                host: h,
                id: p,
                key: f,
                policy: g,
                success_action_status: 200
              };
              if (c && (y["x-oss-security-token"] = c), m) {
                _e7 = JSON.stringify({
                  callbackUrl: m,
                  callbackBody: JSON.stringify({
                    fileId: p,
                    spaceId: this.config.spaceId
                  }),
                  callbackBodyType: "application/json"
                });
                y.callback = ae.toBase64(_e7);
              }
              _ = {
                url: "https://" + o.host,
                formData: y,
                fileName: "file",
                name: "file",
                filePath: e,
                fileType: n
              };
              _context.next = 25;
              return this.uploadFileToOSS(Object.assign({}, _, {
                onUploadProgress: s
              }));
            case 25:
              if (!m) {
                _context.next = 27;
                break;
              }
              return _context.abrupt("return", {
                success: !0,
                filePath: e,
                fileID: a
              });
            case 27:
              _context.next = 29;
              return this.reportOSSUpload({
                id: p
              });
            case 29:
              if (!_context.sent.success) {
                _context.next = 31;
                break;
              }
              return _context.abrupt("return", {
                success: !0,
                filePath: e,
                fileID: a
              });
            case 31:
              throw new Q({
                code: "UPLOAD_FAILED",
                message: "文件上传失败"
              });
            case 32:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function uploadFile(_x) {
        return _uploadFile.apply(this, arguments);
      }
      return uploadFile;
    }()
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref4.fileList;
      return new Promise(function (t, n) {
        Array.isArray(e) && 0 !== e.length || n(new Q({
          code: "INVALID_PARAM",
          message: "fileList的元素必须是非空的字符串"
        })), t({
          fileList: e.map(function (e) {
            return {
              fileID: e,
              tempFileURL: e
            };
          })
        });
      });
    }
  }, {
    key: "getFileInfo",
    value: function () {
      var _getFileInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee2() {
        var _ref5,
          e,
          t,
          _args2 = arguments;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _ref5 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, e = _ref5.fileList;
              if (!(!Array.isArray(e) || 0 === e.length)) {
                _context2.next = 3;
                break;
              }
              throw new Q({
                code: "INVALID_PARAM",
                message: "fileList的元素必须是非空的字符串"
              });
            case 3:
              t = {
                method: "serverless.file.resource.info",
                params: JSON.stringify({
                  id: e.map(function (e) {
                    return e.split("?")[0];
                  }).join(",")
                })
              };
              _context2.next = 6;
              return this.request(this.setupRequest(t));
            case 6:
              _context2.t0 = _context2.sent.result;
              return _context2.abrupt("return", {
                fileList: _context2.t0
              });
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getFileInfo() {
        return _getFileInfo.apply(this, arguments);
      }
      return getFileInfo;
    }()
  }]);
  return le;
}();
var he = {
  init: function init(e) {
    var t = new le(e),
      n = {
        signInAnonymously: function signInAnonymously() {
          return t.authorize();
        },
        getLoginState: function getLoginState() {
          return Promise.resolve(!1);
        }
      };
    return t.auth = function () {
      return n;
    }, t.customAuth = t.auth, t;
  }
};
var de = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
var fe;
!function (e) {
  e.local = "local", e.none = "none", e.session = "session";
}(fe || (fe = {}));
var pe = function pe() {};
var ge = function ge() {
  var e;
  if (!Promise) {
    e = function e() {}, e.promise = {};
    var _t3 = function _t3() {
      throw new Q({
        message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.'
      });
    };
    return Object.defineProperty(e.promise, "then", {
      get: _t3
    }), Object.defineProperty(e.promise, "catch", {
      get: _t3
    }), e;
  }
  var t = new Promise(function (t, n) {
    e = function e(_e8, s) {
      return _e8 ? n(_e8) : t(s);
    };
  });
  return e.promise = t, e;
};
function me(e) {
  return void 0 === e;
}
function ye(e) {
  return "[object Null]" === Object.prototype.toString.call(e);
}
var _e;
function we(e) {
  var t = (n = e, "[object Array]" === Object.prototype.toString.call(n) ? e : [e]);
  var n;
  var _iterator = (0, _createForOfIteratorHelper2.default)(t),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _e9 = _step.value;
      var _t4 = _e9.isMatch,
        _n4 = _e9.genAdapter,
        _s4 = _e9.runtime;
      if (_t4()) return {
        adapter: _n4(),
        runtime: _s4
      };
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
!function (e) {
  e.WEB = "web", e.WX_MP = "wx_mp";
}(_e || (_e = {}));
var ve = {
    adapter: null,
    runtime: void 0
  },
  Se = ["anonymousUuidKey"];
var ke = /*#__PURE__*/function (_pe) {
  (0, _inherits2.default)(ke, _pe);
  var _super2 = (0, _createSuper2.default)(ke);
  function ke() {
    var _this6;
    (0, _classCallCheck2.default)(this, ke);
    _this6 = _super2.call(this), ve.adapter.root.tcbObject || (ve.adapter.root.tcbObject = {});
    return _this6;
  }
  (0, _createClass2.default)(ke, [{
    key: "setItem",
    value: function setItem(e, t) {
      ve.adapter.root.tcbObject[e] = t;
    }
  }, {
    key: "getItem",
    value: function getItem(e) {
      return ve.adapter.root.tcbObject[e];
    }
  }, {
    key: "removeItem",
    value: function removeItem(e) {
      delete ve.adapter.root.tcbObject[e];
    }
  }, {
    key: "clear",
    value: function clear() {
      delete ve.adapter.root.tcbObject;
    }
  }]);
  return ke;
}(pe);
function Ie(e, t) {
  switch (e) {
    case "local":
      return t.localStorage || new ke();
    case "none":
      return new ke();
    default:
      return t.sessionStorage || new ke();
  }
}
var be = /*#__PURE__*/function () {
  function be(e) {
    (0, _classCallCheck2.default)(this, be);
    if (!this._storage) {
      this._persistence = ve.adapter.primaryStorage || e.persistence, this._storage = Ie(this._persistence, ve.adapter);
      var _t5 = "access_token_".concat(e.env),
        _n5 = "access_token_expire_".concat(e.env),
        _s5 = "refresh_token_".concat(e.env),
        _r = "anonymous_uuid_".concat(e.env),
        _i = "login_type_".concat(e.env),
        _o = "user_info_".concat(e.env);
      this.keys = {
        accessTokenKey: _t5,
        accessTokenExpireKey: _n5,
        refreshTokenKey: _s5,
        anonymousUuidKey: _r,
        loginTypeKey: _i,
        userInfoKey: _o
      };
    }
  }
  (0, _createClass2.default)(be, [{
    key: "updatePersistence",
    value: function updatePersistence(e) {
      if (e === this._persistence) return;
      var t = "local" === this._persistence;
      this._persistence = e;
      var n = Ie(e, ve.adapter);
      for (var _e10 in this.keys) {
        var _s6 = this.keys[_e10];
        if (t && Se.includes(_e10)) continue;
        var _r2 = this._storage.getItem(_s6);
        me(_r2) || ye(_r2) || (n.setItem(_s6, _r2), this._storage.removeItem(_s6));
      }
      this._storage = n;
    }
  }, {
    key: "setStore",
    value: function setStore(e, t, n) {
      if (!this._storage) return;
      var s = {
          version: n || "localCachev1",
          content: t
        },
        r = JSON.stringify(s);
      try {
        this._storage.setItem(e, r);
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: "getStore",
    value: function getStore(e, t) {
      try {
        if (!this._storage) return;
      } catch (e) {
        return "";
      }
      t = t || "localCachev1";
      var n = this._storage.getItem(e);
      if (!n) return "";
      if (n.indexOf(t) >= 0) {
        return JSON.parse(n).content;
      }
      return "";
    }
  }, {
    key: "removeStore",
    value: function removeStore(e) {
      this._storage.removeItem(e);
    }
  }]);
  return be;
}();
var Te = {},
  Ae = {};
function Ce(e) {
  return Te[e];
}
var Pe = /*#__PURE__*/(0, _createClass2.default)(function Pe(e, t) {
  (0, _classCallCheck2.default)(this, Pe);
  this.data = t || null, this.name = e;
});
var Ee = /*#__PURE__*/function (_Pe) {
  (0, _inherits2.default)(Ee, _Pe);
  var _super3 = (0, _createSuper2.default)(Ee);
  function Ee(e, t) {
    var _this7;
    (0, _classCallCheck2.default)(this, Ee);
    _this7 = _super3.call(this, "error", {
      error: e,
      data: t
    }), _this7.error = e;
    return _this7;
  }
  return (0, _createClass2.default)(Ee);
}(Pe);
var Oe = new ( /*#__PURE__*/function () {
  function _class() {
    (0, _classCallCheck2.default)(this, _class);
    this._listeners = {};
  }
  (0, _createClass2.default)(_class, [{
    key: "on",
    value: function on(e, t) {
      return function (e, t, n) {
        n[e] = n[e] || [], n[e].push(t);
      }(e, t, this._listeners), this;
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return function (e, t, n) {
        if (n && n[e]) {
          var _s7 = n[e].indexOf(t);
          -1 !== _s7 && n[e].splice(_s7, 1);
        }
      }(e, t, this._listeners), this;
    }
  }, {
    key: "fire",
    value: function fire(e, t) {
      if (e instanceof Ee) return console.error(e.error), this;
      var n = "string" == typeof e ? new Pe(e, t || {}) : e;
      var s = n.name;
      if (this._listens(s)) {
        n.target = this;
        var _e11 = this._listeners[s] ? (0, _toConsumableArray2.default)(this._listeners[s]) : [];
        var _iterator2 = (0, _createForOfIteratorHelper2.default)(_e11),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _t6 = _step2.value;
            _t6.call(this, n);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return this;
    }
  }, {
    key: "_listens",
    value: function _listens(e) {
      return this._listeners[e] && this._listeners[e].length > 0;
    }
  }]);
  return _class;
}())();
function xe(e, t) {
  Oe.on(e, t);
}
function Ue(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Oe.fire(e, t);
}
function Re(e, t) {
  Oe.off(e, t);
}
var Le = "loginStateChanged",
  Ne = "loginStateExpire",
  De = "loginTypeChanged",
  Fe = "anonymousConverted",
  qe = "refreshAccessToken";
var Ke;
!function (e) {
  e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";
}(Ke || (Ke = {}));
var Me = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],
  je = {
    "X-SDK-Version": "1.3.5"
  };
function Be(e, t, n) {
  var s = e[t];
  e[t] = function (t) {
    var r = {},
      i = {};
    n.forEach(function (n) {
      var _n$call = n.call(e, t),
        s = _n$call.data,
        o = _n$call.headers;
      Object.assign(r, s), Object.assign(i, o);
    });
    var o = t.data;
    return o && function () {
      var e;
      if (e = o, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, o), r);else for (var _e12 in r) o.append(_e12, r[_e12]);
    }(), t.headers = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, t.headers || {}), i), s.call(e, t);
  };
}
function $e() {
  var e = Math.random().toString(16).slice(2);
  return {
    data: {
      seqId: e
    },
    headers: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, je), {}, {
      "x-seqid": e
    })
  };
}
var We = /*#__PURE__*/function () {
  function We() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, We);
    var t;
    this.config = e, this._reqClass = new ve.adapter.reqClass({
      timeout: this.config.timeout,
      timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"),
      restrictedMethods: ["post"]
    }), this._cache = Ce(this.config.env), this._localCache = (t = this.config.env, Ae[t]), Be(this._reqClass, "post", [$e]), Be(this._reqClass, "upload", [$e]), Be(this._reqClass, "download", [$e]);
  }
  (0, _createClass2.default)(We, [{
    key: "post",
    value: function () {
      var _post = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee3(e) {
        return (0, _regeneratorRuntime2.default)().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this._reqClass.post(e);
            case 2:
              return _context3.abrupt("return", _context3.sent);
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function post(_x2) {
        return _post.apply(this, arguments);
      }
      return post;
    }()
  }, {
    key: "upload",
    value: function () {
      var _upload = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee4(e) {
        return (0, _regeneratorRuntime2.default)().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this._reqClass.upload(e);
            case 2:
              return _context4.abrupt("return", _context4.sent);
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function upload(_x3) {
        return _upload.apply(this, arguments);
      }
      return upload;
    }()
  }, {
    key: "download",
    value: function () {
      var _download = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee5(e) {
        return (0, _regeneratorRuntime2.default)().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this._reqClass.download(e);
            case 2:
              return _context5.abrupt("return", _context5.sent);
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function download(_x4) {
        return _download.apply(this, arguments);
      }
      return download;
    }()
  }, {
    key: "refreshAccessToken",
    value: function () {
      var _refreshAccessToken2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee6() {
        var e, t;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
              _context6.prev = 1;
              _context6.next = 4;
              return this._refreshAccessTokenPromise;
            case 4:
              e = _context6.sent;
              _context6.next = 10;
              break;
            case 7:
              _context6.prev = 7;
              _context6.t0 = _context6["catch"](1);
              t = _context6.t0;
            case 10:
              if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {
                _context6.next = 12;
                break;
              }
              throw t;
            case 12:
              return _context6.abrupt("return", e);
            case 13:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[1, 7]]);
      }));
      function refreshAccessToken() {
        return _refreshAccessToken2.apply(this, arguments);
      }
      return refreshAccessToken;
    }()
  }, {
    key: "_refreshAccessToken",
    value: function () {
      var _refreshAccessToken3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee7() {
        var _this$_cache$keys, e, t, n, s, r, i, o, a, _e13, _e14, _t7, _s8;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _this$_cache$keys = this._cache.keys, e = _this$_cache$keys.accessTokenKey, t = _this$_cache$keys.accessTokenExpireKey, n = _this$_cache$keys.refreshTokenKey, s = _this$_cache$keys.loginTypeKey, r = _this$_cache$keys.anonymousUuidKey;
              this._cache.removeStore(e), this._cache.removeStore(t);
              i = this._cache.getStore(n);
              if (i) {
                _context7.next = 5;
                break;
              }
              throw new Q({
                message: "未登录CloudBase"
              });
            case 5:
              o = {
                refresh_token: i
              };
              _context7.next = 8;
              return this.request("auth.fetchAccessTokenWithRefreshToken", o);
            case 8:
              a = _context7.sent;
              if (!a.data.code) {
                _context7.next = 21;
                break;
              }
              _e13 = a.data.code;
              if (!("SIGN_PARAM_INVALID" === _e13 || "REFRESH_TOKEN_EXPIRED" === _e13 || "INVALID_REFRESH_TOKEN" === _e13)) {
                _context7.next = 20;
                break;
              }
              if (!(this._cache.getStore(s) === Ke.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e13)) {
                _context7.next = 19;
                break;
              }
              _e14 = this._cache.getStore(r);
              _t7 = this._cache.getStore(n);
              _context7.next = 17;
              return this.send("auth.signInAnonymously", {
                anonymous_uuid: _e14,
                refresh_token: _t7
              });
            case 17:
              _s8 = _context7.sent;
              return _context7.abrupt("return", (this.setRefreshToken(_s8.refresh_token), this._refreshAccessToken()));
            case 19:
              Ue(Ne), this._cache.removeStore(n);
            case 20:
              throw new Q({
                code: a.data.code,
                message: "\u5237\u65B0access token\u5931\u8D25\uFF1A".concat(a.data.code)
              });
            case 21:
              if (!a.data.access_token) {
                _context7.next = 23;
                break;
              }
              return _context7.abrupt("return", (Ue(qe), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), {
                accessToken: a.data.access_token,
                accessTokenExpire: a.data.access_token_expire
              }));
            case 23:
              a.data.refresh_token && (this._cache.removeStore(n), this._cache.setStore(n, a.data.refresh_token), this._refreshAccessToken());
            case 24:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function _refreshAccessToken() {
        return _refreshAccessToken3.apply(this, arguments);
      }
      return _refreshAccessToken;
    }()
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee8() {
        var _this$_cache$keys2, e, t, n, s, r, i;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, n = _this$_cache$keys2.refreshTokenKey;
              if (this._cache.getStore(n)) {
                _context8.next = 3;
                break;
              }
              throw new Q({
                message: "refresh token不存在，登录状态异常"
              });
            case 3:
              s = this._cache.getStore(e), r = this._cache.getStore(t), i = !0;
              _context8.t0 = this._shouldRefreshAccessTokenHook;
              if (!_context8.t0) {
                _context8.next = 9;
                break;
              }
              _context8.next = 8;
              return this._shouldRefreshAccessTokenHook(s, r);
            case 8:
              _context8.t0 = !_context8.sent;
            case 9:
              _context8.t1 = _context8.t0;
              if (!_context8.t1) {
                _context8.next = 12;
                break;
              }
              i = !1;
            case 12:
              return _context8.abrupt("return", (!s || !r || r < Date.now()) && i ? this.refreshAccessToken() : {
                accessToken: s,
                accessTokenExpire: r
              });
            case 13:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function getAccessToken() {
        return _getAccessToken.apply(this, arguments);
      }
      return getAccessToken;
    }()
  }, {
    key: "request",
    value: function () {
      var _request = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee9(e, t, n) {
        var s, r, i, _e15, o, _e16, _e17, a, c, u, l, h, d, f, p, g;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              s = "x-tcb-trace_".concat(this.config.env);
              r = "application/x-www-form-urlencoded";
              i = (0, _objectSpread2.default)({
                action: e,
                env: this.config.env,
                dataVersion: "2019-08-16"
              }, t);
              if (!(-1 === Me.indexOf(e))) {
                _context9.next = 10;
                break;
              }
              _e15 = this._cache.keys.refreshTokenKey;
              _context9.t0 = this._cache.getStore(_e15);
              if (!_context9.t0) {
                _context9.next = 10;
                break;
              }
              _context9.next = 9;
              return this.getAccessToken();
            case 9:
              i.access_token = _context9.sent.accessToken;
            case 10:
              if ("storage.uploadFile" === e) {
                o = new FormData();
                for (_e16 in o) o.hasOwnProperty(_e16) && void 0 !== o[_e16] && o.append(_e16, i[_e16]);
                r = "multipart/form-data";
              } else {
                r = "application/json", o = {};
                for (_e17 in i) void 0 !== i[_e17] && (o[_e17] = i[_e17]);
              }
              a = {
                headers: {
                  "content-type": r
                }
              };
              n && n.onUploadProgress && (a.onUploadProgress = n.onUploadProgress);
              c = this._localCache.getStore(s);
              c && (a.headers["X-TCB-Trace"] = c);
              u = t.parse, l = t.inQuery, h = t.search;
              d = {
                env: this.config.env
              };
              u && (d.parse = !0), l && (d = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, l), d));
              f = function (e, t) {
                var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                var s = /\?/.test(t);
                var r = "";
                for (var _e18 in n) "" === r ? !s && (t += "?") : r += "&", r += "".concat(_e18, "=").concat(encodeURIComponent(n[_e18]));
                return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t);
              }(de, "//tcb-api.tencentcloudapi.com/web", d);
              h && (f += h);
              _context9.next = 22;
              return this.post((0, _objectSpread2.default)({
                url: f,
                data: o
              }, a));
            case 22:
              p = _context9.sent;
              g = p.header && p.header["x-tcb-trace"];
              if (!(g && this._localCache.setStore(s, g), 200 !== Number(p.status) && 200 !== Number(p.statusCode) || !p.data)) {
                _context9.next = 26;
                break;
              }
              throw new Q({
                code: "NETWORK_ERROR",
                message: "network request error"
              });
            case 26:
              return _context9.abrupt("return", p);
            case 27:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function request(_x5, _x6, _x7) {
        return _request.apply(this, arguments);
      }
      return request;
    }()
  }, {
    key: "send",
    value: function () {
      var _send = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee10(e) {
        var t,
          n,
          _n6,
          _args10 = arguments;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              t = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : {};
              _context10.next = 3;
              return this.request(e, t, {
                onUploadProgress: t.onUploadProgress
              });
            case 3:
              n = _context10.sent;
              if (!("ACCESS_TOKEN_EXPIRED" === n.data.code && -1 === Me.indexOf(e))) {
                _context10.next = 13;
                break;
              }
              _context10.next = 7;
              return this.refreshAccessToken();
            case 7:
              _context10.next = 9;
              return this.request(e, t, {
                onUploadProgress: t.onUploadProgress
              });
            case 9:
              _n6 = _context10.sent;
              if (!_n6.data.code) {
                _context10.next = 12;
                break;
              }
              throw new Q({
                code: _n6.data.code,
                message: _n6.data.message
              });
            case 12:
              return _context10.abrupt("return", _n6.data);
            case 13:
              if (!n.data.code) {
                _context10.next = 15;
                break;
              }
              throw new Q({
                code: n.data.code,
                message: n.data.message
              });
            case 15:
              return _context10.abrupt("return", n.data);
            case 16:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function send(_x8) {
        return _send.apply(this, arguments);
      }
      return send;
    }()
  }, {
    key: "setRefreshToken",
    value: function setRefreshToken(e) {
      var _this$_cache$keys3 = this._cache.keys,
        t = _this$_cache$keys3.accessTokenKey,
        n = _this$_cache$keys3.accessTokenExpireKey,
        s = _this$_cache$keys3.refreshTokenKey;
      this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);
    }
  }]);
  return We;
}();
var ze = {};
function Je(e) {
  return ze[e];
}
var He = /*#__PURE__*/function () {
  function He(e) {
    (0, _classCallCheck2.default)(this, He);
    this.config = e, this._cache = Ce(e.env), this._request = Je(e.env);
  }
  (0, _createClass2.default)(He, [{
    key: "setRefreshToken",
    value: function setRefreshToken(e) {
      var _this$_cache$keys4 = this._cache.keys,
        t = _this$_cache$keys4.accessTokenKey,
        n = _this$_cache$keys4.accessTokenExpireKey,
        s = _this$_cache$keys4.refreshTokenKey;
      this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);
    }
  }, {
    key: "setAccessToken",
    value: function setAccessToken(e, t) {
      var _this$_cache$keys5 = this._cache.keys,
        n = _this$_cache$keys5.accessTokenKey,
        s = _this$_cache$keys5.accessTokenExpireKey;
      this._cache.setStore(n, e), this._cache.setStore(s, t);
    }
  }, {
    key: "refreshUserInfo",
    value: function () {
      var _refreshUserInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee11() {
        var _yield$this$_request$, e;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return this._request.send("auth.getUserInfo", {});
            case 2:
              _yield$this$_request$ = _context11.sent;
              e = _yield$this$_request$.data;
              return _context11.abrupt("return", (this.setLocalUserInfo(e), e));
            case 5:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function refreshUserInfo() {
        return _refreshUserInfo.apply(this, arguments);
      }
      return refreshUserInfo;
    }()
  }, {
    key: "setLocalUserInfo",
    value: function setLocalUserInfo(e) {
      var t = this._cache.keys.userInfoKey;
      this._cache.setStore(t, e);
    }
  }]);
  return He;
}();
var Ge = /*#__PURE__*/function () {
  function Ge(e) {
    (0, _classCallCheck2.default)(this, Ge);
    if (!e) throw new Q({
      code: "PARAM_ERROR",
      message: "envId is not defined"
    });
    this._envId = e, this._cache = Ce(this._envId), this._request = Je(this._envId), this.setUserInfo();
  }
  (0, _createClass2.default)(Ge, [{
    key: "linkWithTicket",
    value: function linkWithTicket(e) {
      if ("string" != typeof e) throw new Q({
        code: "PARAM_ERROR",
        message: "ticket must be string"
      });
      return this._request.send("auth.linkWithTicket", {
        ticket: e
      });
    }
  }, {
    key: "linkWithRedirect",
    value: function linkWithRedirect(e) {
      e.signInWithRedirect();
    }
  }, {
    key: "updatePassword",
    value: function updatePassword(e, t) {
      return this._request.send("auth.updatePassword", {
        oldPassword: t,
        newPassword: e
      });
    }
  }, {
    key: "updateEmail",
    value: function updateEmail(e) {
      return this._request.send("auth.updateEmail", {
        newEmail: e
      });
    }
  }, {
    key: "updateUsername",
    value: function updateUsername(e) {
      if ("string" != typeof e) throw new Q({
        code: "PARAM_ERROR",
        message: "username must be a string"
      });
      return this._request.send("auth.updateUsername", {
        username: e
      });
    }
  }, {
    key: "getLinkedUidList",
    value: function () {
      var _getLinkedUidList = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee12() {
        var _yield$this$_request$2, e, t, n;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return this._request.send("auth.getLinkedUidList", {});
            case 2:
              _yield$this$_request$2 = _context12.sent;
              e = _yield$this$_request$2.data;
              t = !1;
              n = e.users;
              return _context12.abrupt("return", (n.forEach(function (e) {
                e.wxOpenId && e.wxPublicId && (t = !0);
              }), {
                users: n,
                hasPrimaryUid: t
              }));
            case 7:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function getLinkedUidList() {
        return _getLinkedUidList.apply(this, arguments);
      }
      return getLinkedUidList;
    }()
  }, {
    key: "setPrimaryUid",
    value: function setPrimaryUid(e) {
      return this._request.send("auth.setPrimaryUid", {
        uid: e
      });
    }
  }, {
    key: "unlink",
    value: function unlink(e) {
      return this._request.send("auth.unlink", {
        platform: e
      });
    }
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee13(e) {
        var t, n, s, r, i, o, _yield$this$_request$3, a;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              t = e.nickName;
              n = e.gender;
              s = e.avatarUrl;
              r = e.province;
              i = e.country;
              o = e.city;
              _context13.next = 8;
              return this._request.send("auth.updateUserInfo", {
                nickName: t,
                gender: n,
                avatarUrl: s,
                province: r,
                country: i,
                city: o
              });
            case 8:
              _yield$this$_request$3 = _context13.sent;
              a = _yield$this$_request$3.data;
              this.setLocalUserInfo(a);
            case 11:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function update(_x9) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "refresh",
    value: function () {
      var _refresh = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee14() {
        var _yield$this$_request$4, e;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              _context14.next = 2;
              return this._request.send("auth.getUserInfo", {});
            case 2:
              _yield$this$_request$4 = _context14.sent;
              e = _yield$this$_request$4.data;
              return _context14.abrupt("return", (this.setLocalUserInfo(e), e));
            case 5:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this);
      }));
      function refresh() {
        return _refresh.apply(this, arguments);
      }
      return refresh;
    }()
  }, {
    key: "setUserInfo",
    value: function setUserInfo() {
      var _this8 = this;
      var e = this._cache.keys.userInfoKey,
        t = this._cache.getStore(e);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {
        _this8[e] = t[e];
      }), this.location = {
        country: t.country,
        province: t.province,
        city: t.city
      };
    }
  }, {
    key: "setLocalUserInfo",
    value: function setLocalUserInfo(e) {
      var t = this._cache.keys.userInfoKey;
      this._cache.setStore(t, e), this.setUserInfo();
    }
  }]);
  return Ge;
}();
var Ve = /*#__PURE__*/function () {
  function Ve(e) {
    (0, _classCallCheck2.default)(this, Ve);
    if (!e) throw new Q({
      code: "PARAM_ERROR",
      message: "envId is not defined"
    });
    this._cache = Ce(e);
    var _this$_cache$keys6 = this._cache.keys,
      t = _this$_cache$keys6.refreshTokenKey,
      n = _this$_cache$keys6.accessTokenKey,
      s = _this$_cache$keys6.accessTokenExpireKey,
      r = this._cache.getStore(t),
      i = this._cache.getStore(n),
      o = this._cache.getStore(s);
    this.credential = {
      refreshToken: r,
      accessToken: i,
      accessTokenExpire: o
    }, this.user = new Ge(e);
  }
  (0, _createClass2.default)(Ve, [{
    key: "isAnonymousAuth",
    get: function get() {
      return this.loginType === Ke.ANONYMOUS;
    }
  }, {
    key: "isCustomAuth",
    get: function get() {
      return this.loginType === Ke.CUSTOM;
    }
  }, {
    key: "isWeixinAuth",
    get: function get() {
      return this.loginType === Ke.WECHAT || this.loginType === Ke.WECHAT_OPEN || this.loginType === Ke.WECHAT_PUBLIC;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }]);
  return Ve;
}();
var Ye = /*#__PURE__*/function (_He) {
  (0, _inherits2.default)(Ye, _He);
  var _super4 = (0, _createSuper2.default)(Ye);
  function Ye() {
    (0, _classCallCheck2.default)(this, Ye);
    return _super4.apply(this, arguments);
  }
  (0, _createClass2.default)(Ye, [{
    key: "signIn",
    value: function () {
      var _signIn = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee15() {
        var _this$_cache$keys7, e, t, n, s, r, _e19;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              this._cache.updatePersistence("local");
              _this$_cache$keys7 = this._cache.keys;
              e = _this$_cache$keys7.anonymousUuidKey;
              t = _this$_cache$keys7.refreshTokenKey;
              n = this._cache.getStore(e) || void 0;
              s = this._cache.getStore(t) || void 0;
              _context15.next = 8;
              return this._request.send("auth.signInAnonymously", {
                anonymous_uuid: n,
                refresh_token: s
              });
            case 8:
              r = _context15.sent;
              if (!(r.uuid && r.refresh_token)) {
                _context15.next = 20;
                break;
              }
              this._setAnonymousUUID(r.uuid);
              this.setRefreshToken(r.refresh_token);
              _context15.next = 14;
              return this._request.refreshAccessToken();
            case 14:
              Ue(Le);
              Ue(De, {
                env: this.config.env,
                loginType: Ke.ANONYMOUS,
                persistence: "local"
              });
              _e19 = new Ve(this.config.env);
              _context15.next = 19;
              return _e19.user.refresh();
            case 19:
              return _context15.abrupt("return", _e19);
            case 20:
              throw new Q({
                message: "匿名登录失败"
              });
            case 21:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this);
      }));
      function signIn() {
        return _signIn.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "linkAndRetrieveDataWithTicket",
    value: function () {
      var _linkAndRetrieveDataWithTicket = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee16(e) {
        var _this$_cache$keys8, t, n, s, r, i;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              _this$_cache$keys8 = this._cache.keys;
              t = _this$_cache$keys8.anonymousUuidKey;
              n = _this$_cache$keys8.refreshTokenKey;
              s = this._cache.getStore(t);
              r = this._cache.getStore(n);
              _context16.next = 7;
              return this._request.send("auth.linkAndRetrieveDataWithTicket", {
                anonymous_uuid: s,
                refresh_token: r,
                ticket: e
              });
            case 7:
              i = _context16.sent;
              if (!i.refresh_token) {
                _context16.next = 16;
                break;
              }
              this._clearAnonymousUUID();
              this.setRefreshToken(i.refresh_token);
              _context16.next = 13;
              return this._request.refreshAccessToken();
            case 13:
              Ue(Fe, {
                env: this.config.env
              });
              Ue(De, {
                loginType: Ke.CUSTOM,
                persistence: "local"
              });
              return _context16.abrupt("return", {
                credential: {
                  refreshToken: i.refresh_token
                }
              });
            case 16:
              throw new Q({
                message: "匿名转化失败"
              });
            case 17:
            case "end":
              return _context16.stop();
          }
        }, _callee16, this);
      }));
      function linkAndRetrieveDataWithTicket(_x10) {
        return _linkAndRetrieveDataWithTicket.apply(this, arguments);
      }
      return linkAndRetrieveDataWithTicket;
    }()
  }, {
    key: "_setAnonymousUUID",
    value: function _setAnonymousUUID(e) {
      var _this$_cache$keys9 = this._cache.keys,
        t = _this$_cache$keys9.anonymousUuidKey,
        n = _this$_cache$keys9.loginTypeKey;
      this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(n, Ke.ANONYMOUS);
    }
  }, {
    key: "_clearAnonymousUUID",
    value: function _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }]);
  return Ye;
}(He);
var Qe = /*#__PURE__*/function (_He2) {
  (0, _inherits2.default)(Qe, _He2);
  var _super5 = (0, _createSuper2.default)(Qe);
  function Qe() {
    (0, _classCallCheck2.default)(this, Qe);
    return _super5.apply(this, arguments);
  }
  (0, _createClass2.default)(Qe, [{
    key: "signIn",
    value: function () {
      var _signIn2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee17(e) {
        var t, n;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              if (!("string" != typeof e)) {
                _context17.next = 2;
                break;
              }
              throw new Q({
                code: "PARAM_ERROR",
                message: "ticket must be a string"
              });
            case 2:
              t = this._cache.keys.refreshTokenKey;
              _context17.next = 5;
              return this._request.send("auth.signInWithTicket", {
                ticket: e,
                refresh_token: this._cache.getStore(t) || ""
              });
            case 5:
              n = _context17.sent;
              if (!n.refresh_token) {
                _context17.next = 15;
                break;
              }
              this.setRefreshToken(n.refresh_token);
              _context17.next = 10;
              return this._request.refreshAccessToken();
            case 10:
              Ue(Le);
              Ue(De, {
                env: this.config.env,
                loginType: Ke.CUSTOM,
                persistence: this.config.persistence
              });
              _context17.next = 14;
              return this.refreshUserInfo();
            case 14:
              return _context17.abrupt("return", new Ve(this.config.env));
            case 15:
              throw new Q({
                message: "自定义登录失败"
              });
            case 16:
            case "end":
              return _context17.stop();
          }
        }, _callee17, this);
      }));
      function signIn(_x11) {
        return _signIn2.apply(this, arguments);
      }
      return signIn;
    }()
  }]);
  return Qe;
}(He);
var Xe = /*#__PURE__*/function (_He3) {
  (0, _inherits2.default)(Xe, _He3);
  var _super6 = (0, _createSuper2.default)(Xe);
  function Xe() {
    (0, _classCallCheck2.default)(this, Xe);
    return _super6.apply(this, arguments);
  }
  (0, _createClass2.default)(Xe, [{
    key: "signIn",
    value: function () {
      var _signIn3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee18(e, t) {
        var n, s, r, i, o;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              if (!("string" != typeof e)) {
                _context18.next = 2;
                break;
              }
              throw new Q({
                code: "PARAM_ERROR",
                message: "email must be a string"
              });
            case 2:
              n = this._cache.keys.refreshTokenKey;
              _context18.next = 5;
              return this._request.send("auth.signIn", {
                loginType: "EMAIL",
                email: e,
                password: t,
                refresh_token: this._cache.getStore(n) || ""
              });
            case 5:
              s = _context18.sent;
              r = s.refresh_token;
              i = s.access_token;
              o = s.access_token_expire;
              if (!r) {
                _context18.next = 22;
                break;
              }
              this.setRefreshToken(r);
              if (!(i && o)) {
                _context18.next = 15;
                break;
              }
              this.setAccessToken(i, o);
              _context18.next = 17;
              break;
            case 15:
              _context18.next = 17;
              return this._request.refreshAccessToken();
            case 17:
              _context18.next = 19;
              return this.refreshUserInfo();
            case 19:
              Ue(Le);
              Ue(De, {
                env: this.config.env,
                loginType: Ke.EMAIL,
                persistence: this.config.persistence
              });
              return _context18.abrupt("return", new Ve(this.config.env));
            case 22:
              throw s.code ? new Q({
                code: s.code,
                message: "\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: ".concat(s.message)
              }) : new Q({
                message: "邮箱登录失败"
              });
            case 23:
            case "end":
              return _context18.stop();
          }
        }, _callee18, this);
      }));
      function signIn(_x12, _x13) {
        return _signIn3.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "activate",
    value: function () {
      var _activate = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee19(e) {
        return (0, _regeneratorRuntime2.default)().wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              return _context19.abrupt("return", this._request.send("auth.activateEndUserMail", {
                token: e
              }));
            case 1:
            case "end":
              return _context19.stop();
          }
        }, _callee19, this);
      }));
      function activate(_x14) {
        return _activate.apply(this, arguments);
      }
      return activate;
    }()
  }, {
    key: "resetPasswordWithToken",
    value: function () {
      var _resetPasswordWithToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee20(e, t) {
        return (0, _regeneratorRuntime2.default)().wrap(function _callee20$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              return _context20.abrupt("return", this._request.send("auth.resetPasswordWithToken", {
                token: e,
                newPassword: t
              }));
            case 1:
            case "end":
              return _context20.stop();
          }
        }, _callee20, this);
      }));
      function resetPasswordWithToken(_x15, _x16) {
        return _resetPasswordWithToken.apply(this, arguments);
      }
      return resetPasswordWithToken;
    }()
  }]);
  return Xe;
}(He);
var Ze = /*#__PURE__*/function (_He4) {
  (0, _inherits2.default)(Ze, _He4);
  var _super7 = (0, _createSuper2.default)(Ze);
  function Ze() {
    (0, _classCallCheck2.default)(this, Ze);
    return _super7.apply(this, arguments);
  }
  (0, _createClass2.default)(Ze, [{
    key: "signIn",
    value: function () {
      var _signIn4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee21(e, t) {
        var n, s, r, i, o;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee21$(_context21) {
          while (1) switch (_context21.prev = _context21.next) {
            case 0:
              if (!("string" != typeof e)) {
                _context21.next = 2;
                break;
              }
              throw new Q({
                code: "PARAM_ERROR",
                message: "username must be a string"
              });
            case 2:
              "string" != typeof t && (t = "", console.warn("password is empty"));
              n = this._cache.keys.refreshTokenKey;
              _context21.next = 6;
              return this._request.send("auth.signIn", {
                loginType: Ke.USERNAME,
                username: e,
                password: t,
                refresh_token: this._cache.getStore(n) || ""
              });
            case 6:
              s = _context21.sent;
              r = s.refresh_token;
              i = s.access_token_expire;
              o = s.access_token;
              if (!r) {
                _context21.next = 23;
                break;
              }
              this.setRefreshToken(r);
              if (!(o && i)) {
                _context21.next = 16;
                break;
              }
              this.setAccessToken(o, i);
              _context21.next = 18;
              break;
            case 16:
              _context21.next = 18;
              return this._request.refreshAccessToken();
            case 18:
              _context21.next = 20;
              return this.refreshUserInfo();
            case 20:
              Ue(Le);
              Ue(De, {
                env: this.config.env,
                loginType: Ke.USERNAME,
                persistence: this.config.persistence
              });
              return _context21.abrupt("return", new Ve(this.config.env));
            case 23:
              throw s.code ? new Q({
                code: s.code,
                message: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: ".concat(s.message)
              }) : new Q({
                message: "用户名密码登录失败"
              });
            case 24:
            case "end":
              return _context21.stop();
          }
        }, _callee21, this);
      }));
      function signIn(_x17, _x18) {
        return _signIn4.apply(this, arguments);
      }
      return signIn;
    }()
  }]);
  return Ze;
}(He);
var et = /*#__PURE__*/function () {
  function et(e) {
    (0, _classCallCheck2.default)(this, et);
    this.config = e, this._cache = Ce(e.env), this._request = Je(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), xe(De, this._onLoginTypeChanged);
  }
  (0, _createClass2.default)(et, [{
    key: "currentUser",
    get: function get() {
      var e = this.hasLoginState();
      return e && e.user || null;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }, {
    key: "anonymousAuthProvider",
    value: function anonymousAuthProvider() {
      return new Ye(this.config);
    }
  }, {
    key: "customAuthProvider",
    value: function customAuthProvider() {
      return new Qe(this.config);
    }
  }, {
    key: "emailAuthProvider",
    value: function emailAuthProvider() {
      return new Xe(this.config);
    }
  }, {
    key: "usernameAuthProvider",
    value: function usernameAuthProvider() {
      return new Ze(this.config);
    }
  }, {
    key: "signInAnonymously",
    value: function () {
      var _signInAnonymously = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee22() {
        return (0, _regeneratorRuntime2.default)().wrap(function _callee22$(_context22) {
          while (1) switch (_context22.prev = _context22.next) {
            case 0:
              return _context22.abrupt("return", new Ye(this.config).signIn());
            case 1:
            case "end":
              return _context22.stop();
          }
        }, _callee22, this);
      }));
      function signInAnonymously() {
        return _signInAnonymously.apply(this, arguments);
      }
      return signInAnonymously;
    }()
  }, {
    key: "signInWithEmailAndPassword",
    value: function () {
      var _signInWithEmailAndPassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee23(e, t) {
        return (0, _regeneratorRuntime2.default)().wrap(function _callee23$(_context23) {
          while (1) switch (_context23.prev = _context23.next) {
            case 0:
              return _context23.abrupt("return", new Xe(this.config).signIn(e, t));
            case 1:
            case "end":
              return _context23.stop();
          }
        }, _callee23, this);
      }));
      function signInWithEmailAndPassword(_x19, _x20) {
        return _signInWithEmailAndPassword.apply(this, arguments);
      }
      return signInWithEmailAndPassword;
    }()
  }, {
    key: "signInWithUsernameAndPassword",
    value: function signInWithUsernameAndPassword(e, t) {
      return new Ze(this.config).signIn(e, t);
    }
  }, {
    key: "linkAndRetrieveDataWithTicket",
    value: function () {
      var _linkAndRetrieveDataWithTicket2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee24(e) {
        return (0, _regeneratorRuntime2.default)().wrap(function _callee24$(_context24) {
          while (1) switch (_context24.prev = _context24.next) {
            case 0:
              this._anonymousAuthProvider || (this._anonymousAuthProvider = new Ye(this.config)), xe(Fe, this._onAnonymousConverted);
              _context24.next = 3;
              return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);
            case 3:
              return _context24.abrupt("return", _context24.sent);
            case 4:
            case "end":
              return _context24.stop();
          }
        }, _callee24, this);
      }));
      function linkAndRetrieveDataWithTicket(_x21) {
        return _linkAndRetrieveDataWithTicket2.apply(this, arguments);
      }
      return linkAndRetrieveDataWithTicket;
    }()
  }, {
    key: "signOut",
    value: function () {
      var _signOut = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee25() {
        var _this$_cache$keys10, e, t, n, s, r;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee25$(_context25) {
          while (1) switch (_context25.prev = _context25.next) {
            case 0:
              if (!(this.loginType === Ke.ANONYMOUS)) {
                _context25.next = 2;
                break;
              }
              throw new Q({
                message: "匿名用户不支持登出操作"
              });
            case 2:
              _this$_cache$keys10 = this._cache.keys, e = _this$_cache$keys10.refreshTokenKey, t = _this$_cache$keys10.accessTokenKey, n = _this$_cache$keys10.accessTokenExpireKey, s = this._cache.getStore(e);
              if (s) {
                _context25.next = 5;
                break;
              }
              return _context25.abrupt("return");
            case 5:
              _context25.next = 7;
              return this._request.send("auth.logout", {
                refresh_token: s
              });
            case 7:
              r = _context25.sent;
              return _context25.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(n), Ue(Le), Ue(De, {
                env: this.config.env,
                loginType: Ke.NULL,
                persistence: this.config.persistence
              }), r));
            case 9:
            case "end":
              return _context25.stop();
          }
        }, _callee25, this);
      }));
      function signOut() {
        return _signOut.apply(this, arguments);
      }
      return signOut;
    }()
  }, {
    key: "signUpWithEmailAndPassword",
    value: function () {
      var _signUpWithEmailAndPassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee26(e, t) {
        return (0, _regeneratorRuntime2.default)().wrap(function _callee26$(_context26) {
          while (1) switch (_context26.prev = _context26.next) {
            case 0:
              return _context26.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", {
                email: e,
                password: t
              }));
            case 1:
            case "end":
              return _context26.stop();
          }
        }, _callee26, this);
      }));
      function signUpWithEmailAndPassword(_x22, _x23) {
        return _signUpWithEmailAndPassword.apply(this, arguments);
      }
      return signUpWithEmailAndPassword;
    }()
  }, {
    key: "sendPasswordResetEmail",
    value: function () {
      var _sendPasswordResetEmail = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee27(e) {
        return (0, _regeneratorRuntime2.default)().wrap(function _callee27$(_context27) {
          while (1) switch (_context27.prev = _context27.next) {
            case 0:
              return _context27.abrupt("return", this._request.send("auth.sendPasswordResetEmail", {
                email: e
              }));
            case 1:
            case "end":
              return _context27.stop();
          }
        }, _callee27, this);
      }));
      function sendPasswordResetEmail(_x24) {
        return _sendPasswordResetEmail.apply(this, arguments);
      }
      return sendPasswordResetEmail;
    }()
  }, {
    key: "onLoginStateChanged",
    value: function onLoginStateChanged(e) {
      var _this9 = this;
      xe(Le, function () {
        var t = _this9.hasLoginState();
        e.call(_this9, t);
      });
      var t = this.hasLoginState();
      e.call(this, t);
    }
  }, {
    key: "onLoginStateExpired",
    value: function onLoginStateExpired(e) {
      xe(Ne, e.bind(this));
    }
  }, {
    key: "onAccessTokenRefreshed",
    value: function onAccessTokenRefreshed(e) {
      xe(qe, e.bind(this));
    }
  }, {
    key: "onAnonymousConverted",
    value: function onAnonymousConverted(e) {
      xe(Fe, e.bind(this));
    }
  }, {
    key: "onLoginTypeChanged",
    value: function onLoginTypeChanged(e) {
      var _this10 = this;
      xe(De, function () {
        var t = _this10.hasLoginState();
        e.call(_this10, t);
      });
    }
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee28() {
        return (0, _regeneratorRuntime2.default)().wrap(function _callee28$(_context28) {
          while (1) switch (_context28.prev = _context28.next) {
            case 0:
              _context28.next = 2;
              return this._request.getAccessToken();
            case 2:
              _context28.t0 = _context28.sent.accessToken;
              _context28.t1 = this.config.env;
              return _context28.abrupt("return", {
                accessToken: _context28.t0,
                env: _context28.t1
              });
            case 5:
            case "end":
              return _context28.stop();
          }
        }, _callee28, this);
      }));
      function getAccessToken() {
        return _getAccessToken2.apply(this, arguments);
      }
      return getAccessToken;
    }()
  }, {
    key: "hasLoginState",
    value: function hasLoginState() {
      var e = this._cache.keys.refreshTokenKey;
      return this._cache.getStore(e) ? new Ve(this.config.env) : null;
    }
  }, {
    key: "isUsernameRegistered",
    value: function () {
      var _isUsernameRegistered = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee29(e) {
        var _yield$this$_request$5, t;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee29$(_context29) {
          while (1) switch (_context29.prev = _context29.next) {
            case 0:
              if (!("string" != typeof e)) {
                _context29.next = 2;
                break;
              }
              throw new Q({
                code: "PARAM_ERROR",
                message: "username must be a string"
              });
            case 2:
              _context29.next = 4;
              return this._request.send("auth.isUsernameRegistered", {
                username: e
              });
            case 4:
              _yield$this$_request$5 = _context29.sent;
              t = _yield$this$_request$5.data;
              return _context29.abrupt("return", t && t.isRegistered);
            case 7:
            case "end":
              return _context29.stop();
          }
        }, _callee29, this);
      }));
      function isUsernameRegistered(_x25) {
        return _isUsernameRegistered.apply(this, arguments);
      }
      return isUsernameRegistered;
    }()
  }, {
    key: "getLoginState",
    value: function getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
  }, {
    key: "signInWithTicket",
    value: function () {
      var _signInWithTicket = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee30(e) {
        return (0, _regeneratorRuntime2.default)().wrap(function _callee30$(_context30) {
          while (1) switch (_context30.prev = _context30.next) {
            case 0:
              return _context30.abrupt("return", new Qe(this.config).signIn(e));
            case 1:
            case "end":
              return _context30.stop();
          }
        }, _callee30, this);
      }));
      function signInWithTicket(_x26) {
        return _signInWithTicket.apply(this, arguments);
      }
      return signInWithTicket;
    }()
  }, {
    key: "shouldRefreshAccessToken",
    value: function shouldRefreshAccessToken(e) {
      this._request._shouldRefreshAccessTokenHook = e.bind(this);
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then(function (e) {
        return e.code ? e : (0, _objectSpread2.default)((0, _objectSpread2.default)({}, e.data), {}, {
          requestId: e.seqId
        });
      });
    }
  }, {
    key: "getAuthHeader",
    value: function getAuthHeader() {
      var _this$_cache$keys11 = this._cache.keys,
        e = _this$_cache$keys11.refreshTokenKey,
        t = _this$_cache$keys11.accessTokenKey,
        n = this._cache.getStore(e);
      return {
        "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + n
      };
    }
  }, {
    key: "_onAnonymousConverted",
    value: function _onAnonymousConverted(e) {
      var t = e.data.env;
      t === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
  }, {
    key: "_onLoginTypeChanged",
    value: function _onLoginTypeChanged(e) {
      var _e$data = e.data,
        t = _e$data.loginType,
        n = _e$data.persistence,
        s = _e$data.env;
      s === this.config.env && (this._cache.updatePersistence(n), this._cache.setStore(this._cache.keys.loginTypeKey, t));
    }
  }]);
  return et;
}();
var tt = function tt(e, t) {
    t = t || ge();
    var n = Je(this.config.env),
      s = e.cloudPath,
      r = e.filePath,
      i = e.onUploadProgress,
      _e$fileType = e.fileType,
      o = _e$fileType === void 0 ? "image" : _e$fileType;
    return n.send("storage.getUploadMetadata", {
      path: s
    }).then(function (e) {
      var _e$data2 = e.data,
        a = _e$data2.url,
        c = _e$data2.authorization,
        u = _e$data2.token,
        l = _e$data2.fileId,
        h = _e$data2.cosFileId,
        d = e.requestId,
        f = {
          key: s,
          signature: c,
          "x-cos-meta-fileid": h,
          success_action_status: "201",
          "x-cos-security-token": u
        };
      n.upload({
        url: a,
        data: f,
        file: r,
        name: s,
        fileType: o,
        onUploadProgress: i
      }).then(function (e) {
        201 === e.statusCode ? t(null, {
          fileID: l,
          requestId: d
        }) : t(new Q({
          code: "STORAGE_REQUEST_FAIL",
          message: "STORAGE_REQUEST_FAIL: ".concat(e.data)
        }));
      }).catch(function (e) {
        t(e);
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  nt = function nt(e, t) {
    t = t || ge();
    var n = Je(this.config.env),
      s = e.cloudPath;
    return n.send("storage.getUploadMetadata", {
      path: s
    }).then(function (e) {
      t(null, e);
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  st = function st(_ref6, t) {
    var e = _ref6.fileList;
    if (t = t || ge(), !e || !Array.isArray(e)) return {
      code: "INVALID_PARAM",
      message: "fileList必须是非空的数组"
    };
    var _iterator3 = (0, _createForOfIteratorHelper2.default)(e),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _t8 = _step3.value;
        if (!_t8 || "string" != typeof _t8) return {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是非空的字符串"
        };
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var n = {
      fileid_list: e
    };
    return Je(this.config.env).send("storage.batchDeleteFile", n).then(function (e) {
      e.code ? t(null, e) : t(null, {
        fileList: e.data.delete_list,
        requestId: e.requestId
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  rt = function rt(_ref7, t) {
    var e = _ref7.fileList;
    t = t || ge(), e && Array.isArray(e) || t(null, {
      code: "INVALID_PARAM",
      message: "fileList必须是非空的数组"
    });
    var n = [];
    var _iterator4 = (0, _createForOfIteratorHelper2.default)(e),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _s9 = _step4.value;
        "object" == (0, _typeof2.default)(_s9) ? (_s9.hasOwnProperty("fileID") && _s9.hasOwnProperty("maxAge") || t(null, {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是包含fileID和maxAge的对象"
        }), n.push({
          fileid: _s9.fileID,
          max_age: _s9.maxAge
        })) : "string" == typeof _s9 ? n.push({
          fileid: _s9
        }) : t(null, {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是字符串"
        });
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var s = {
      file_list: n
    };
    return Je(this.config.env).send("storage.batchGetDownloadUrl", s).then(function (e) {
      e.code ? t(null, e) : t(null, {
        fileList: e.data.download_list,
        requestId: e.requestId
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  it = /*#__PURE__*/function () {
    var _ref9 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee31(_ref8, t) {
      var e, n, s, r;
      return (0, _regeneratorRuntime2.default)().wrap(function _callee31$(_context31) {
        while (1) switch (_context31.prev = _context31.next) {
          case 0:
            e = _ref8.fileID;
            _context31.next = 3;
            return rt.call(this, {
              fileList: [{
                fileID: e,
                maxAge: 600
              }]
            });
          case 3:
            n = _context31.sent.fileList[0];
            if (!("SUCCESS" !== n.code)) {
              _context31.next = 6;
              break;
            }
            return _context31.abrupt("return", t ? t(n) : new Promise(function (e) {
              e(n);
            }));
          case 6:
            s = Je(this.config.env);
            r = n.download_url;
            if (!(r = encodeURI(r), !t)) {
              _context31.next = 10;
              break;
            }
            return _context31.abrupt("return", s.download({
              url: r
            }));
          case 10:
            _context31.t0 = t;
            _context31.next = 13;
            return s.download({
              url: r
            });
          case 13:
            _context31.t1 = _context31.sent;
            (0, _context31.t0)(_context31.t1);
          case 15:
          case "end":
            return _context31.stop();
        }
      }, _callee31, this);
    }));
    return function it(_x27, _x28) {
      return _ref9.apply(this, arguments);
    };
  }(),
  ot = function ot(_ref10, i) {
    var e = _ref10.name,
      t = _ref10.data,
      n = _ref10.query,
      s = _ref10.parse,
      r = _ref10.search;
    var o = i || ge();
    var a;
    try {
      a = t ? JSON.stringify(t) : "";
    } catch (e) {
      return Promise.reject(e);
    }
    if (!e) return Promise.reject(new Q({
      code: "PARAM_ERROR",
      message: "函数名不能为空"
    }));
    var c = {
      inQuery: n,
      parse: s,
      search: r,
      function_name: e,
      request_data: a
    };
    return Je(this.config.env).send("functions.invokeFunction", c).then(function (e) {
      if (e.code) o(null, e);else {
        var _t9 = e.data.response_data;
        if (s) o(null, {
          result: _t9,
          requestId: e.requestId
        });else try {
          _t9 = JSON.parse(e.data.response_data), o(null, {
            result: _t9,
            requestId: e.requestId
          });
        } catch (e) {
          o(new Q({
            message: "response data must be json"
          }));
        }
      }
      return o.promise;
    }).catch(function (e) {
      o(e);
    }), o.promise;
  },
  at = {
    timeout: 15e3,
    persistence: "session"
  },
  ct = {};
var ut = /*#__PURE__*/function () {
  function ut(e) {
    (0, _classCallCheck2.default)(this, ut);
    this.config = e || this.config, this.authObj = void 0;
  }
  (0, _createClass2.default)(ut, [{
    key: "init",
    value: function init(e) {
      switch (ve.adapter || (this.requestClient = new ve.adapter.reqClass({
        timeout: e.timeout || 5e3,
        timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD")
      })), this.config = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, at), e), !0) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new ut(this.config);
    }
  }, {
    key: "auth",
    value: function auth() {
      var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref11.persistence;
      if (this.authObj) return this.authObj;
      var t = e || ve.adapter.primaryStorage || at.persistence;
      var n;
      return t !== this.config.persistence && (this.config.persistence = t), function (e) {
        var t = e.env;
        Te[t] = new be(e), Ae[t] = new be((0, _objectSpread2.default)((0, _objectSpread2.default)({}, e), {}, {
          persistence: "local"
        }));
      }(this.config), n = this.config, ze[n.env] = new We(n), this.authObj = new et(this.config), this.authObj;
    }
  }, {
    key: "on",
    value: function on(e, t) {
      return xe.apply(this, [e, t]);
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return Re.apply(this, [e, t]);
    }
  }, {
    key: "callFunction",
    value: function callFunction(e, t) {
      return ot.apply(this, [e, t]);
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(e, t) {
      return st.apply(this, [e, t]);
    }
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL(e, t) {
      return rt.apply(this, [e, t]);
    }
  }, {
    key: "downloadFile",
    value: function downloadFile(e, t) {
      return it.apply(this, [e, t]);
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(e, t) {
      return tt.apply(this, [e, t]);
    }
  }, {
    key: "getUploadMetadata",
    value: function getUploadMetadata(e, t) {
      return nt.apply(this, [e, t]);
    }
  }, {
    key: "registerExtension",
    value: function registerExtension(e) {
      ct[e.name] = e;
    }
  }, {
    key: "invokeExtension",
    value: function () {
      var _invokeExtension = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee32(e, t) {
        var n;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee32$(_context32) {
          while (1) switch (_context32.prev = _context32.next) {
            case 0:
              n = ct[e];
              if (n) {
                _context32.next = 3;
                break;
              }
              throw new Q({
                message: "\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C")
              });
            case 3:
              _context32.next = 5;
              return n.invoke(t, this);
            case 5:
              return _context32.abrupt("return", _context32.sent);
            case 6:
            case "end":
              return _context32.stop();
          }
        }, _callee32, this);
      }));
      function invokeExtension(_x29, _x30) {
        return _invokeExtension.apply(this, arguments);
      }
      return invokeExtension;
    }()
  }, {
    key: "useAdapters",
    value: function useAdapters(e) {
      var _ref12 = we(e) || {},
        t = _ref12.adapter,
        n = _ref12.runtime;
      t && (ve.adapter = t), n && (ve.runtime = n);
    }
  }]);
  return ut;
}();
var lt = new ut();
function ht(e, t, n) {
  void 0 === n && (n = {});
  var s = /\?/.test(t),
    r = "";
  for (var i in n) "" === r ? !s && (t += "?") : r += "&", r += i + "=" + encodeURIComponent(n[i]);
  return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t;
}
var dt = /*#__PURE__*/function () {
  function dt() {
    (0, _classCallCheck2.default)(this, dt);
  }
  (0, _createClass2.default)(dt, [{
    key: "post",
    value: function post(e) {
      var t = e.url,
        n = e.data,
        s = e.headers;
      return new Promise(function (e, r) {
        X.request({
          url: ht("https:", t),
          data: n,
          method: "POST",
          header: s,
          success: function success(t) {
            e(t);
          },
          fail: function fail(e) {
            r(e);
          }
        });
      });
    }
  }, {
    key: "upload",
    value: function upload(e) {
      return new Promise(function (t, n) {
        var s = e.url,
          r = e.file,
          i = e.data,
          o = e.headers,
          a = e.fileType,
          c = X.uploadFile({
            url: ht("https:", s),
            name: "file",
            formData: Object.assign({}, i),
            filePath: r,
            fileType: a,
            header: o,
            success: function success(e) {
              var n = {
                statusCode: e.statusCode,
                data: e.data || {}
              };
              200 === e.statusCode && i.success_action_status && (n.statusCode = parseInt(i.success_action_status, 10)), t(n);
            },
            fail: function fail(e) {
              n(new Error(e.errMsg || "uploadFile:fail"));
            }
          });
        "function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {
          e.onUploadProgress({
            loaded: t.totalBytesSent,
            total: t.totalBytesExpectedToSend
          });
        });
      });
    }
  }]);
  return dt;
}();
var ft = {
  setItem: function setItem(e, t) {
    X.setStorageSync(e, t);
  },
  getItem: function getItem(e) {
    return X.getStorageSync(e);
  },
  removeItem: function removeItem(e) {
    X.removeStorageSync(e);
  },
  clear: function clear() {
    X.clearStorageSync();
  }
};
var pt = {
  genAdapter: function genAdapter() {
    return {
      root: {},
      reqClass: dt,
      localStorage: ft,
      primaryStorage: "local"
    };
  },
  isMatch: function isMatch() {
    return !0;
  },
  runtime: "uni_app"
};
lt.useAdapters(pt);
var gt = lt,
  mt = gt.init;
gt.init = function (e) {
  e.env = e.spaceId;
  var t = mt.call(this, e);
  t.config.provider = "tencent", t.config.spaceId = e.spaceId;
  var n = t.auth;
  return t.auth = function (e) {
    var t = n.call(this, e);
    return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {
      t[e] = Y(t[e]).bind(t);
    }), t;
  }, t.customAuth = t.auth, t;
};
var yt = gt;
var _t = /*#__PURE__*/function (_le) {
  (0, _inherits2.default)(_t, _le);
  var _super8 = (0, _createSuper2.default)(_t);
  function _t() {
    (0, _classCallCheck2.default)(this, _t);
    return _super8.apply(this, arguments);
  }
  (0, _createClass2.default)(_t, [{
    key: "getAccessToken",
    value: function getAccessToken() {
      var _this11 = this;
      return new Promise(function (e, t) {
        var n = "Anonymous_Access_token";
        _this11.setAccessToken(n), e(n);
      });
    }
  }, {
    key: "setupRequest",
    value: function setupRequest(e, t) {
      var n = Object.assign({}, e, {
          spaceId: this.config.spaceId,
          timestamp: Date.now()
        }),
        s = {
          "Content-Type": "application/json"
        };
      "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = ae.sign(n, this.config.clientSecret);
      var r = oe();
      s["x-client-info"] = encodeURIComponent(JSON.stringify(r));
      var _Z = Z(),
        i = _Z.token;
      return s["x-client-token"] = i, {
        url: this.config.requestUrl,
        method: "POST",
        data: n,
        dataType: "json",
        header: JSON.parse(JSON.stringify(s))
      };
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref13) {
      var _this12 = this;
      var e = _ref13.url,
        t = _ref13.formData,
        n = _ref13.name,
        s = _ref13.filePath,
        r = _ref13.fileType,
        i = _ref13.onUploadProgress;
      return new Promise(function (o, a) {
        var c = _this12.adapter.uploadFile({
          url: e,
          formData: t,
          name: n,
          filePath: s,
          fileType: r,
          success: function success(e) {
            e && e.statusCode < 400 ? o(e) : a(new Q({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            a(new Q({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof i && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {
          i({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(_ref14) {
      var _this13 = this;
      var e = _ref14.filePath,
        t = _ref14.cloudPath,
        _ref14$fileType = _ref14.fileType,
        n = _ref14$fileType === void 0 ? "image" : _ref14$fileType,
        s = _ref14.onUploadProgress;
      if (!t) throw new Q({
        code: "CLOUDPATH_REQUIRED",
        message: "cloudPath不可为空"
      });
      var r;
      return this.getOSSUploadOptionsFromPath({
        cloudPath: t
      }).then(function (t) {
        var _t$result = t.result,
          i = _t$result.url,
          o = _t$result.formData,
          a = _t$result.name;
        r = t.result.fileUrl;
        var c = {
          url: i,
          formData: o,
          name: a,
          filePath: e,
          fileType: n
        };
        return _this13.uploadFileToOSS(Object.assign({}, c, {
          onUploadProgress: s
        }));
      }).then(function () {
        return _this13.reportOSSUpload({
          cloudPath: t
        });
      }).then(function (t) {
        return new Promise(function (n, s) {
          t.success ? n({
            success: !0,
            filePath: e,
            fileID: r
          }) : s(new Q({
            code: "UPLOAD_FAILED",
            message: "文件上传失败"
          }));
        });
      });
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(_ref15) {
      var e = _ref15.fileList;
      var t = {
        method: "serverless.file.resource.delete",
        params: JSON.stringify({
          fileList: e
        })
      };
      return this.request(this.setupRequest(t)).then(function (e) {
        if (e.success) return e.result;
        throw new Q({
          code: "DELETE_FILE_FAILED",
          message: "删除文件失败"
        });
      });
    }
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL() {
      var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref16.fileList;
      if (!Array.isArray(e) || 0 === e.length) throw new Q({
        code: "INVALID_PARAM",
        message: "fileList的元素必须是非空的字符串"
      });
      var t = {
        method: "serverless.file.resource.getTempFileURL",
        params: JSON.stringify({
          fileList: e
        })
      };
      return this.request(this.setupRequest(t)).then(function (e) {
        if (e.success) return {
          fileList: e.result.fileList.map(function (e) {
            return {
              fileID: e.fileID,
              tempFileURL: e.tempFileURL
            };
          })
        };
        throw new Q({
          code: "GET_TEMP_FILE_URL_FAILED",
          message: "获取临时文件链接失败"
        });
      });
    }
  }]);
  return _t;
}(le);
var wt = {
  init: function init(e) {
    var t = new _t(e),
      n = {
        signInAnonymously: function signInAnonymously() {
          return t.authorize();
        },
        getLoginState: function getLoginState() {
          return Promise.resolve(!1);
        }
      };
    return t.auth = function () {
      return n;
    }, t.customAuth = t.auth, t;
  }
};
function vt(_ref17) {
  var e = _ref17.data;
  var t;
  t = oe();
  var n = JSON.parse(JSON.stringify(e || {}));
  if (Object.assign(n, {
    clientInfo: t
  }), !n.uniIdToken) {
    var _Z2 = Z(),
      _e20 = _Z2.token;
    _e20 && (n.uniIdToken = _e20);
  }
  return n;
}
function St() {
  var _this14 = this;
  var _ref18 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref18.name,
    t = _ref18.data;
  var _this$__dev__ = this.__dev__,
    n = _this$__dev__.localAddress,
    s = _this$__dev__.localPort,
    r = {
      aliyun: "aliyun",
      tencent: "tcb"
    }[this.config.provider],
    i = this.config.spaceId,
    o = "http://".concat(n, ":").concat(s, "/system/check-function"),
    a = "http://".concat(n, ":").concat(s, "/cloudfunctions/").concat(e);
  return new Promise(function (t, n) {
    X.request({
      method: "POST",
      url: o,
      data: {
        name: e,
        platform: S,
        provider: r,
        spaceId: i
      },
      timeout: 3e3,
      success: function success(e) {
        t(e);
      },
      fail: function fail() {
        t({
          data: {
            code: "NETWORK_ERROR",
            message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。"
          }
        });
      }
    });
  }).then(function () {
    var _ref19 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref19.data;
    var _ref20 = e || {},
      t = _ref20.code,
      n = _ref20.message;
    return {
      code: 0 === t ? 0 : t || "SYS_ERR",
      message: n || "SYS_ERR"
    };
  }).then(function (_ref21) {
    var n = _ref21.code,
      s = _ref21.message;
    if (0 !== n) {
      switch (n) {
        case "MODULE_ENCRYPTED":
          console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));
          break;
        case "FUNCTION_ENCRYPTED":
          console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));
          break;
        case "ACTION_ENCRYPTED":
          console.error(s || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
          break;
        case "NETWORK_ERROR":
          {
            var _e21 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";
            throw console.error(_e21), new Error(_e21);
          }
        case "SWITCH_TO_CLOUD":
          break;
        default:
          {
            var _e22 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(s, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");
            throw console.error(_e22), new Error(_e22);
          }
      }
      return _this14._callCloudFunction({
        name: e,
        data: t
      });
    }
    return new Promise(function (e, n) {
      var s = vt.call(_this14, {
        data: t
      });
      X.request({
        method: "POST",
        url: a,
        data: {
          provider: r,
          platform: S,
          param: s
        },
        success: function success() {
          var _ref22 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            t = _ref22.statusCode,
            s = _ref22.data;
          return !t || t >= 400 ? n(new Q({
            code: s.code || "SYS_ERR",
            message: s.message || "request:fail"
          })) : e({
            result: s
          });
        },
        fail: function fail(e) {
          n(new Q({
            code: e.code || e.errCode || "SYS_ERR",
            message: e.message || e.errMsg || "request:fail"
          }));
        }
      });
    });
  });
}
var kt = [{
  rule: /fc_function_not_found|FUNCTION_NOT_FOUND/,
  content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间",
  mode: "append"
}];
var It = /[\\^$.*+?()[\]{}|]/g,
  bt = RegExp(It.source);
function Tt(e, t, n) {
  return e.replace(new RegExp((s = t) && bt.test(s) ? s.replace(It, "\\$&") : s, "g"), n);
  var s;
}
var At = "none",
  Ct = "request",
  Pt = "response",
  Et = "both";
var Ot = /*#__PURE__*/function () {
  function Ot() {
    var _ref23 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref23.secretType,
      t = _ref23.uniCloudIns;
    (0, _classCallCheck2.default)(this, Ot);
    this.secretType = e || At, this.uniCloudIns = t;
    var _this$uniCloudIns$con = this.uniCloudIns.config,
      n = _this$uniCloudIns$con.provider,
      s = _this$uniCloudIns$con.spaceId;
    var r;
    this.provider = n, this.spaceId = s, this.scopedGlobalCache = (r = this.uniCloudIns, C("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", r.config.spaceId)));
  }
  (0, _createClass2.default)(Ot, [{
    key: "getSystemInfo",
    value: function getSystemInfo() {
      return this._systemInfo || (this._systemInfo = re()), this._systemInfo;
    }
  }, {
    key: "appId",
    get: function get() {
      return this.getSystemInfo().appId;
    }
  }, {
    key: "deviceId",
    get: function get() {
      return this.getSystemInfo().deviceId;
    }
  }, {
    key: "encryptData",
    value: function () {
      var _encryptData = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee33(e) {
        return (0, _regeneratorRuntime2.default)().wrap(function _callee33$(_context33) {
          while (1) switch (_context33.prev = _context33.next) {
            case 0:
              return _context33.abrupt("return", this.secretType === At || this.secretType === At ? e : this.platformEncryptData(e));
            case 1:
            case "end":
              return _context33.stop();
          }
        }, _callee33, this);
      }));
      function encryptData(_x31) {
        return _encryptData.apply(this, arguments);
      }
      return encryptData;
    }()
  }, {
    key: "decryptResult",
    value: function () {
      var _decryptResult = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee34(e) {
        var t;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee34$(_context34) {
          while (1) switch (_context34.prev = _context34.next) {
            case 0:
              if (!(this.secretType === At)) {
                _context34.next = 2;
                break;
              }
              return _context34.abrupt("return", e);
            case 2:
              t = e.content;
              return _context34.abrupt("return", t ? this.secretType === Ct ? t : this.platformDecryptResult(e) : e);
            case 4:
            case "end":
              return _context34.stop();
          }
        }, _callee34, this);
      }));
      function decryptResult(_x32) {
        return _decryptResult.apply(this, arguments);
      }
      return decryptResult;
    }()
  }, {
    key: "wrapVerifyClientCallFunction",
    value: function wrapVerifyClientCallFunction(e) {
      var t = this;
      return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee35() {
        var _ref25,
          n,
          _ref25$data,
          s,
          _args35 = arguments;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee35$(_context35) {
          while (1) switch (_context35.prev = _context35.next) {
            case 0:
              _ref25 = _args35.length > 0 && _args35[0] !== undefined ? _args35[0] : {}, n = _ref25.name, _ref25$data = _ref25.data, s = _ref25$data === void 0 ? {} : _ref25$data;
              _context35.next = 3;
              return t.prepare();
            case 3:
              _context35.next = 5;
              return t.platformGetSignOption();
            case 5:
              (s = JSON.parse(JSON.stringify(s)))._uniCloudOptions = _context35.sent;
              _context35.next = 8;
              return e({
                name: n,
                data: s
              });
            case 8:
              return _context35.abrupt("return", _context35.sent);
            case 9:
            case "end":
              return _context35.stop();
          }
        }, _callee35);
      }));
    }
  }, {
    key: "wrapEncryptDataCallFunction",
    value: function wrapEncryptDataCallFunction(e) {
      var t = this;
      return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee36() {
        var _ref27,
          n,
          _ref27$data,
          s,
          r,
          i,
          _args36 = arguments;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee36$(_context36) {
          while (1) switch (_context36.prev = _context36.next) {
            case 0:
              _ref27 = _args36.length > 0 && _args36[0] !== undefined ? _args36[0] : {}, n = _ref27.name, _ref27$data = _ref27.data, s = _ref27$data === void 0 ? {} : _ref27$data;
              _context36.next = 3;
              return t.prepare();
            case 3:
              _context36.next = 5;
              return t.encryptData(s);
            case 5:
              r = _context36.sent;
              _context36.next = 8;
              return e({
                name: n,
                data: r
              });
            case 8:
              i = _context36.sent;
              _context36.next = 11;
              return t.decryptResult(i.result);
            case 11:
              i.result = _context36.sent;
              return _context36.abrupt("return", i);
            case 13:
            case "end":
              return _context36.stop();
          }
        }, _callee36);
      }));
    }
  }]);
  return Ot;
}();
/*! MIT License. Copyright 2015-2018 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */
function xt(e) {
  return parseInt(e) === e;
}
function Ut(e) {
  if (!xt(e.length)) return !1;
  for (var t = 0; t < e.length; t++) if (!xt(e[t]) || e[t] < 0 || e[t] > 255) return !1;
  return !0;
}
function Rt(e, t) {
  if (e.buffer && "Uint8Array" === e.name) return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;
  if (Array.isArray(e)) {
    if (!Ut(e)) throw new Error("Array contains invalid value: " + e);
    return new Uint8Array(e);
  }
  if (xt(e.length) && Ut(e)) return new Uint8Array(e);
  throw new Error("unsupported array-like object");
}
function Lt(e) {
  return new Uint8Array(e);
}
function Nt(e, t, n, s, r) {
  null == s && null == r || (e = e.slice ? e.slice(s, r) : Array.prototype.slice.call(e, s, r)), t.set(e, n);
}
var Dt,
  Ft = {
    toBytes: function toBytes(e) {
      var t = [],
        n = 0;
      for (e = encodeURI(e); n < e.length;) {
        var s = e.charCodeAt(n++);
        37 === s ? (t.push(parseInt(e.substr(n, 2), 16)), n += 2) : t.push(s);
      }
      return Rt(t);
    },
    fromBytes: function fromBytes(e) {
      for (var t = [], n = 0; n < e.length;) {
        var s = e[n];
        s < 128 ? (t.push(String.fromCharCode(s)), n++) : s > 191 && s < 224 ? (t.push(String.fromCharCode((31 & s) << 6 | 63 & e[n + 1])), n += 2) : (t.push(String.fromCharCode((15 & s) << 12 | (63 & e[n + 1]) << 6 | 63 & e[n + 2])), n += 3);
      }
      return t.join("");
    }
  },
  qt = (Dt = "0123456789abcdef", {
    toBytes: function toBytes(e) {
      for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
      return t;
    },
    fromBytes: function fromBytes(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var s = e[n];
        t.push(Dt[(240 & s) >> 4] + Dt[15 & s]);
      }
      return t.join("");
    }
  }),
  Kt = {
    16: 10,
    24: 12,
    32: 14
  },
  Mt = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
  jt = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
  Bt = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
  $t = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
  Wt = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
  zt = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
  Jt = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
  Ht = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
  Gt = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
  Vt = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
  Yt = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
  Qt = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
  Xt = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
  Zt = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
  en = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];
function tn(e) {
  for (var t = [], n = 0; n < e.length; n += 4) t.push(e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3]);
  return t;
}
var nn = /*#__PURE__*/function () {
  function nn(e) {
    (0, _classCallCheck2.default)(this, nn);
    if (!(this instanceof nn)) throw Error("AES must be instanitated with `new`");
    Object.defineProperty(this, "key", {
      value: Rt(e, !0)
    }), this._prepare();
  }
  (0, _createClass2.default)(nn, [{
    key: "_prepare",
    value: function _prepare() {
      var e = Kt[this.key.length];
      if (null == e) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
      this._Ke = [], this._Kd = [];
      for (var t = 0; t <= e; t++) this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
      var n,
        s = 4 * (e + 1),
        r = this.key.length / 4,
        i = tn(this.key);
      for (t = 0; t < r; t++) n = t >> 2, this._Ke[n][t % 4] = i[t], this._Kd[e - n][t % 4] = i[t];
      for (var o, a = 0, c = r; c < s;) {
        if (o = i[r - 1], i[0] ^= jt[o >> 16 & 255] << 24 ^ jt[o >> 8 & 255] << 16 ^ jt[255 & o] << 8 ^ jt[o >> 24 & 255] ^ Mt[a] << 24, a += 1, 8 != r) for (t = 1; t < r; t++) i[t] ^= i[t - 1];else {
          for (t = 1; t < r / 2; t++) i[t] ^= i[t - 1];
          o = i[r / 2 - 1], i[r / 2] ^= jt[255 & o] ^ jt[o >> 8 & 255] << 8 ^ jt[o >> 16 & 255] << 16 ^ jt[o >> 24 & 255] << 24;
          for (t = r / 2 + 1; t < r; t++) i[t] ^= i[t - 1];
        }
        for (t = 0; t < r && c < s;) u = c >> 2, l = c % 4, this._Ke[u][l] = i[t], this._Kd[e - u][l] = i[t++], c++;
      }
      for (var u = 1; u < e; u++) for (var l = 0; l < 4; l++) o = this._Kd[u][l], this._Kd[u][l] = Qt[o >> 24 & 255] ^ Xt[o >> 16 & 255] ^ Zt[o >> 8 & 255] ^ en[255 & o];
    }
  }, {
    key: "encrypt",
    value: function encrypt(e) {
      if (16 != e.length) throw new Error("invalid plaintext size (must be 16 bytes)");
      for (var t = this._Ke.length - 1, n = [0, 0, 0, 0], s = tn(e), r = 0; r < 4; r++) s[r] ^= this._Ke[0][r];
      for (var i = 1; i < t; i++) {
        for (r = 0; r < 4; r++) n[r] = $t[s[r] >> 24 & 255] ^ Wt[s[(r + 1) % 4] >> 16 & 255] ^ zt[s[(r + 2) % 4] >> 8 & 255] ^ Jt[255 & s[(r + 3) % 4]] ^ this._Ke[i][r];
        s = n.slice();
      }
      var o,
        a = Lt(16);
      for (r = 0; r < 4; r++) o = this._Ke[t][r], a[4 * r] = 255 & (jt[s[r] >> 24 & 255] ^ o >> 24), a[4 * r + 1] = 255 & (jt[s[(r + 1) % 4] >> 16 & 255] ^ o >> 16), a[4 * r + 2] = 255 & (jt[s[(r + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * r + 3] = 255 & (jt[255 & s[(r + 3) % 4]] ^ o);
      return a;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if (16 != e.length) throw new Error("invalid ciphertext size (must be 16 bytes)");
      for (var t = this._Kd.length - 1, n = [0, 0, 0, 0], s = tn(e), r = 0; r < 4; r++) s[r] ^= this._Kd[0][r];
      for (var i = 1; i < t; i++) {
        for (r = 0; r < 4; r++) n[r] = Ht[s[r] >> 24 & 255] ^ Gt[s[(r + 3) % 4] >> 16 & 255] ^ Vt[s[(r + 2) % 4] >> 8 & 255] ^ Yt[255 & s[(r + 1) % 4]] ^ this._Kd[i][r];
        s = n.slice();
      }
      var o,
        a = Lt(16);
      for (r = 0; r < 4; r++) o = this._Kd[t][r], a[4 * r] = 255 & (Bt[s[r] >> 24 & 255] ^ o >> 24), a[4 * r + 1] = 255 & (Bt[s[(r + 3) % 4] >> 16 & 255] ^ o >> 16), a[4 * r + 2] = 255 & (Bt[s[(r + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * r + 3] = 255 & (Bt[255 & s[(r + 1) % 4]] ^ o);
      return a;
    }
  }]);
  return nn;
}();
var sn = /*#__PURE__*/function () {
  function sn(e) {
    (0, _classCallCheck2.default)(this, sn);
    if (!(this instanceof sn)) throw Error("AES must be instanitated with `new`");
    this.description = "Electronic Code Block", this.name = "ecb", this._aes = new nn(e);
  }
  (0, _createClass2.default)(sn, [{
    key: "encrypt",
    value: function encrypt(e) {
      if ((e = Rt(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var t = Lt(e.length), n = Lt(16), s = 0; s < e.length; s += 16) Nt(e, n, 0, s, s + 16), Nt(n = this._aes.encrypt(n), t, s);
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if ((e = Rt(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var t = Lt(e.length), n = Lt(16), s = 0; s < e.length; s += 16) Nt(e, n, 0, s, s + 16), Nt(n = this._aes.decrypt(n), t, s);
      return t;
    }
  }]);
  return sn;
}();
var rn = /*#__PURE__*/function () {
  function rn(e, t) {
    (0, _classCallCheck2.default)(this, rn);
    if (!(this instanceof rn)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Cipher Block Chaining", this.name = "cbc", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
    } else t = Lt(16);
    this._lastCipherblock = Rt(t, !0), this._aes = new nn(e);
  }
  (0, _createClass2.default)(rn, [{
    key: "encrypt",
    value: function encrypt(e) {
      if ((e = Rt(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var t = Lt(e.length), n = Lt(16), s = 0; s < e.length; s += 16) {
        Nt(e, n, 0, s, s + 16);
        for (var r = 0; r < 16; r++) n[r] ^= this._lastCipherblock[r];
        this._lastCipherblock = this._aes.encrypt(n), Nt(this._lastCipherblock, t, s);
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if ((e = Rt(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var t = Lt(e.length), n = Lt(16), s = 0; s < e.length; s += 16) {
        Nt(e, n, 0, s, s + 16), n = this._aes.decrypt(n);
        for (var r = 0; r < 16; r++) t[s + r] = n[r] ^ this._lastCipherblock[r];
        Nt(e, this._lastCipherblock, 0, s, s + 16);
      }
      return t;
    }
  }]);
  return rn;
}();
var on = /*#__PURE__*/function () {
  function on(e, t, n) {
    (0, _classCallCheck2.default)(this, on);
    if (!(this instanceof on)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Cipher Feedback", this.name = "cfb", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 size)");
    } else t = Lt(16);
    n || (n = 1), this.segmentSize = n, this._shiftRegister = Rt(t, !0), this._aes = new nn(e);
  }
  (0, _createClass2.default)(on, [{
    key: "encrypt",
    value: function encrypt(e) {
      if (e.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");
      for (var t, n = Rt(e, !0), s = 0; s < n.length; s += this.segmentSize) {
        t = this._aes.encrypt(this._shiftRegister);
        for (var r = 0; r < this.segmentSize; r++) n[s + r] ^= t[r];
        Nt(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), Nt(n, this._shiftRegister, 16 - this.segmentSize, s, s + this.segmentSize);
      }
      return n;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if (e.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");
      for (var t, n = Rt(e, !0), s = 0; s < n.length; s += this.segmentSize) {
        t = this._aes.encrypt(this._shiftRegister);
        for (var r = 0; r < this.segmentSize; r++) n[s + r] ^= t[r];
        Nt(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), Nt(e, this._shiftRegister, 16 - this.segmentSize, s, s + this.segmentSize);
      }
      return n;
    }
  }]);
  return on;
}();
var an = /*#__PURE__*/function () {
  function an(e, t) {
    (0, _classCallCheck2.default)(this, an);
    if (!(this instanceof an)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Output Feedback", this.name = "ofb", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
    } else t = Lt(16);
    this._lastPrecipher = Rt(t, !0), this._lastPrecipherIndex = 16, this._aes = new nn(e);
  }
  (0, _createClass2.default)(an, [{
    key: "encrypt",
    value: function encrypt(e) {
      for (var t = Rt(e, !0), n = 0; n < t.length; n++) 16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), t[n] ^= this._lastPrecipher[this._lastPrecipherIndex++];
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      return this.encrypt(e);
    }
  }]);
  return an;
}();
var cn = /*#__PURE__*/function () {
  function cn(e) {
    (0, _classCallCheck2.default)(this, cn);
    if (!(this instanceof cn)) throw Error("Counter must be instanitated with `new`");
    0 === e || e || (e = 1), "number" == typeof e ? (this._counter = Lt(16), this.setValue(e)) : this.setBytes(e);
  }
  (0, _createClass2.default)(cn, [{
    key: "setValue",
    value: function setValue(e) {
      if ("number" != typeof e || parseInt(e) != e) throw new Error("invalid counter value (must be an integer)");
      if (e > Number.MAX_SAFE_INTEGER) throw new Error("integer value out of safe range");
      for (var t = 15; t >= 0; --t) this._counter[t] = e % 256, e = parseInt(e / 256);
    }
  }, {
    key: "setBytes",
    value: function setBytes(e) {
      if (16 != (e = Rt(e, !0)).length) throw new Error("invalid counter bytes size (must be 16 bytes)");
      this._counter = e;
    }
  }, {
    key: "increment",
    value: function increment() {
      for (var e = 15; e >= 0; e--) {
        if (255 !== this._counter[e]) {
          this._counter[e]++;
          break;
        }
        this._counter[e] = 0;
      }
    }
  }]);
  return cn;
}();
var un = /*#__PURE__*/function () {
  function un(e, t) {
    (0, _classCallCheck2.default)(this, un);
    if (!(this instanceof un)) throw Error("AES must be instanitated with `new`");
    this.description = "Counter", this.name = "ctr", t instanceof cn || (t = new cn(t)), this._counter = t, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new nn(e);
  }
  (0, _createClass2.default)(un, [{
    key: "encrypt",
    value: function encrypt(e) {
      for (var t = Rt(e, !0), n = 0; n < t.length; n++) 16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), t[n] ^= this._remainingCounter[this._remainingCounterIndex++];
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      return this.encrypt(e);
    }
  }]);
  return un;
}();
var ln = {
  AES: nn,
  Counter: cn,
  ModeOfOperation: {
    ecb: sn,
    cbc: rn,
    cfb: on,
    ofb: an,
    ctr: un
  },
  utils: {
    hex: qt,
    utf8: Ft
  },
  padding: {
    pkcs7: {
      pad: function pad(e) {
        var t = 16 - (e = Rt(e, !0)).length % 16,
          n = Lt(e.length + t);
        Nt(e, n);
        for (var s = e.length; s < n.length; s++) n[s] = t;
        return n;
      },
      strip: function strip(e) {
        if ((e = Rt(e, !0)).length < 16) throw new Error("PKCS#7 invalid length");
        var t = e[e.length - 1];
        if (t > 16) throw new Error("PKCS#7 padding byte out of range");
        for (var n = e.length - t, s = 0; s < t; s++) if (e[n + s] !== t) throw new Error("PKCS#7 invalid padding byte");
        var r = Lt(n);
        return Nt(e, r, 0, 0, n), r;
      }
    }
  },
  _arrayTest: {
    coerceArray: Rt,
    createArray: Lt,
    copyArray: Nt
  }
};
function hn(e, t, n) {
  var s = new Uint8Array(uni.base64ToArrayBuffer(t)),
    r = ln.utils.utf8.toBytes(n),
    i = ln.utils.utf8.toBytes(e),
    o = new ln.ModeOfOperation.cbc(s, r),
    a = ln.padding.pkcs7.pad(i),
    c = o.encrypt(a);
  return uni.arrayBufferToBase64(c);
}
var dn = {
    code: 2e4,
    message: "System error"
  },
  fn = {
    code: 20101,
    message: "Invalid client"
  },
  pn = {
    code: 20102,
    message: "Get encrypt key failed"
  },
  gn = {
    10001: "Secure network is not supported on current playground or unimpsdk",
    10003: "Config missing in current app. If the problem pesist, please contact DCloud.",
    10009: "Encrypt payload failed",
    10010: "Decrypt response failed"
  };
function mn(e) {
  var _ref28 = e || {},
    t = _ref28.errSubject,
    n = _ref28.subject,
    s = _ref28.errCode,
    r = _ref28.errMsg,
    i = _ref28.code,
    o = _ref28.message,
    a = _ref28.cause;
  return new Q({
    subject: t || n || "uni-secure-network",
    code: s || i || dn.code,
    message: r || o,
    cause: a
  });
}
var yn,
  _n,
  wn = null;
var vn = /*#__PURE__*/function (_Ot) {
  (0, _inherits2.default)(vn, _Ot);
  var _super9 = (0, _createSuper2.default)(vn);
  function vn(e) {
    var _this15;
    (0, _classCallCheck2.default)(this, vn);
    _this15 = _super9.call(this, e), _this15.userEncryptKey = null;
    return _this15;
  }
  (0, _createClass2.default)(vn, [{
    key: "isLogin",
    value: function isLogin() {
      return !!this.scopedGlobalCache.mpWeixinCode;
    }
  }, {
    key: "prepare",
    value: function () {
      var _prepare2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee37() {
        return (0, _regeneratorRuntime2.default)().wrap(function _callee37$(_context37) {
          while (1) switch (_context37.prev = _context37.next) {
            case 0:
              if (this.isLogin()) {
                _context37.next = 7;
                break;
              }
              if (this.scopedGlobalCache.initPromise) {
                _context37.next = 3;
                break;
              }
              throw new Error("`uniCloud.initSecureNetworkByWeixin` has not yet been called");
            case 3:
              _context37.next = 5;
              return this.scopedGlobalCache.initPromise;
            case 5:
              if (this.scopedGlobalCache.mpWeixinCode) {
                _context37.next = 7;
                break;
              }
              throw new Error("uniCloud.initSecureNetworkByWeixin` has not yet been called or successfully excuted");
            case 7:
            case "end":
              return _context37.stop();
          }
        }, _callee37, this);
      }));
      function prepare() {
        return _prepare2.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "getUserEncryptKey",
    value: function () {
      var _getUserEncryptKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee38() {
        var _this16 = this;
        var e;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee38$(_context38) {
          while (1) switch (_context38.prev = _context38.next) {
            case 0:
              if (!this.userEncryptKey) {
                _context38.next = 2;
                break;
              }
              return _context38.abrupt("return", this.userEncryptKey);
            case 2:
              if (!(wn && wn.expireTime)) {
                _context38.next = 6;
                break;
              }
              e = Date.now();
              if (!(wn.expireTime - e > 0)) {
                _context38.next = 6;
                break;
              }
              return _context38.abrupt("return", (this.userEncryptKey = wn, this.userEncryptKey));
            case 6:
              return _context38.abrupt("return", new Promise(function (e, t) {
                uni.getUserCryptoManager().getLatestUserKey({
                  success: function success(t) {
                    wn = t, _this16.userEncryptKey = t, e(_this16.userEncryptKey);
                  },
                  fail: function fail(e) {
                    t(mn((0, _objectSpread2.default)((0, _objectSpread2.default)({}, pn), {}, {
                      cause: e
                    })));
                  }
                });
              }));
            case 7:
            case "end":
              return _context38.stop();
          }
        }, _callee38, this);
      }));
      function getUserEncryptKey() {
        return _getUserEncryptKey.apply(this, arguments);
      }
      return getUserEncryptKey;
    }()
  }, {
    key: "getWxAppId",
    value: function getWxAppId() {
      return wx.getAccountInfoSync().miniProgram.appId;
    }
  }, {
    key: "platformGetSignOption",
    value: function () {
      var _platformGetSignOption = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee39() {
        var _yield$this$getUserEn, e, t, n;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee39$(_context39) {
          while (1) switch (_context39.prev = _context39.next) {
            case 0:
              _context39.next = 2;
              return this.getUserEncryptKey();
            case 2:
              _yield$this$getUserEn = _context39.sent;
              e = _yield$this$getUserEn.encryptKey;
              t = _yield$this$getUserEn.iv;
              n = _yield$this$getUserEn.version;
              return _context39.abrupt("return", {
                verifyClientSign: hn(JSON.stringify({
                  data: JSON.stringify({}),
                  appId: this.appId,
                  deviceId: this.deviceId,
                  wxAppId: this.getWxAppId(),
                  simulator: "devtools" === re().platform,
                  timestamp: Date.now()
                }), e, t),
                encryptKeyId: n,
                mpWeixinCode: this.scopedGlobalCache.mpWeixinCode
              });
            case 7:
            case "end":
              return _context39.stop();
          }
        }, _callee39, this);
      }));
      function platformGetSignOption() {
        return _platformGetSignOption.apply(this, arguments);
      }
      return platformGetSignOption;
    }()
  }, {
    key: "platformEncryptData",
    value: function () {
      var _platformEncryptData = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee40(e) {
        var _yield$this$getUserEn2, t, n, s, r;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee40$(_context40) {
          while (1) switch (_context40.prev = _context40.next) {
            case 0:
              _context40.next = 2;
              return this.getUserEncryptKey();
            case 2:
              _yield$this$getUserEn2 = _context40.sent;
              t = _yield$this$getUserEn2.encryptKey;
              n = _yield$this$getUserEn2.iv;
              s = _yield$this$getUserEn2.version;
              r = {
                secretType: this.secretType,
                encryptKeyId: s,
                mpWeixinCode: this.scopedGlobalCache.mpWeixinCode
              };
              return _context40.abrupt("return", this.secretType === Pt ? {
                content: e,
                _uniCloudOptions: r
              } : {
                content: hn(JSON.stringify({
                  data: JSON.stringify(e),
                  appId: this.appId,
                  deviceId: this.deviceId,
                  wxAppId: this.getWxAppId(),
                  simulator: "devtools" === re().platform,
                  timestamp: Date.now()
                }), t, n),
                _uniCloudOptions: r
              });
            case 8:
            case "end":
              return _context40.stop();
          }
        }, _callee40, this);
      }));
      function platformEncryptData(_x33) {
        return _platformEncryptData.apply(this, arguments);
      }
      return platformEncryptData;
    }()
  }, {
    key: "platformDecryptResult",
    value: function () {
      var _platformDecryptResult = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee41(e) {
        var t, _yield$this$getUserEn3, n, s;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee41$(_context41) {
          while (1) switch (_context41.prev = _context41.next) {
            case 0:
              t = e.content;
              _context41.next = 3;
              return this.getUserEncryptKey();
            case 3:
              _yield$this$getUserEn3 = _context41.sent;
              n = _yield$this$getUserEn3.encryptKey;
              s = _yield$this$getUserEn3.iv;
              return _context41.abrupt("return", JSON.parse(function (e, t, n) {
                var s = new Uint8Array(uni.base64ToArrayBuffer(e)),
                  r = new Uint8Array(uni.base64ToArrayBuffer(t)),
                  i = ln.utils.utf8.toBytes(n),
                  o = new ln.ModeOfOperation.cbc(r, i),
                  a = ln.padding.pkcs7.strip(o.decrypt(s));
                return ln.utils.utf8.fromBytes(a);
              }(t, n, s)));
            case 7:
            case "end":
              return _context41.stop();
          }
        }, _callee41, this);
      }));
      function platformDecryptResult(_x34) {
        return _platformDecryptResult.apply(this, arguments);
      }
      return platformDecryptResult;
    }()
  }]);
  return vn;
}(Ot);
function Sn(e) {
  var t = ["hasClientKey", "encryptGetClientKeyPayload", "setClientKey", "encrypt", "decrypt"],
    n = {};
  var _loop = function _loop() {
    var r = t[_s10];
    n[r] = function () {
      for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
        t[_key] = arguments[_key];
      }
      return new Promise(function (n, s) {
        "function" == typeof e[r] ? e[r].apply(e, t.concat([function () {
          var _ref29 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref29.type,
            t = _ref29.data,
            r = _ref29.errCode,
            i = _ref29.errMsg,
            o = _ref29.errSubject,
            a = _ref29.message;
          "success" === e ? n(t) : s(mn({
            errCode: r,
            errMsg: gn[r] || i || a,
            errSubject: o
          }));
        }])) : s(mn({
          message: "请检查manifest.json内是否开启安全网络模块，另外注意标准基座不支持安全网络模块"
        }));
      });
    };
  };
  for (var _s10 = 0; _s10 < t.length; _s10++) {
    _loop();
  }
  return n;
}
var kn = /*#__PURE__*/function (_Ot2) {
  (0, _inherits2.default)(kn, _Ot2);
  var _super10 = (0, _createSuper2.default)(kn);
  function kn(e) {
    var _this17;
    (0, _classCallCheck2.default)(this, kn);
    _this17 = _super10.call(this, e), _this17.appUtils = (0, _objectSpread2.default)({}, Sn(uni.requireNativePlugin("plus"))), _this17.systemInfo = yn || (yn = re());
    return _this17;
  }
  (0, _createClass2.default)(kn, [{
    key: "hasClientKey",
    value: function () {
      var _hasClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee42() {
        return (0, _regeneratorRuntime2.default)().wrap(function _callee42$(_context42) {
          while (1) switch (_context42.prev = _context42.next) {
            case 0:
              _context42.next = 2;
              return this.appUtils.hasClientKey({
                provider: this.provider,
                spaceId: this.spaceId
              });
            case 2:
              this._hasClientKey = _context42.sent;
              return _context42.abrupt("return", this._hasClientKey);
            case 4:
            case "end":
              return _context42.stop();
          }
        }, _callee42, this);
      }));
      function hasClientKey() {
        return _hasClientKey.apply(this, arguments);
      }
      return hasClientKey;
    }()
  }, {
    key: "getAppClientKey",
    value: function () {
      var _getAppClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee43() {
        var _yield$this$appUtils$, e, t, n, s, r;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee43$(_context43) {
          while (1) switch (_context43.prev = _context43.next) {
            case 0:
              _context43.next = 2;
              return this.appUtils.encryptGetClientKeyPayload({
                data: JSON.stringify({})
              });
            case 2:
              _yield$this$appUtils$ = _context43.sent;
              e = _yield$this$appUtils$.data;
              t = _yield$this$appUtils$.key;
              _context43.next = 7;
              return this.uniCloudIns.callFunction({
                name: "DCloud-clientDB",
                data: {
                  redirectTo: "encryption",
                  action: "getAppClientKey",
                  data: e,
                  key: t
                }
              });
            case 7:
              _context43.t0 = _context43.sent.result;
              if (_context43.t0) {
                _context43.next = 10;
                break;
              }
              _context43.t0 = {};
            case 10:
              n = _context43.t0;
              if (!(0 !== n.errCode)) {
                _context43.next = 13;
                break;
              }
              throw function (e) {
                return new Q({
                  subject: e.errSubject || "uni-secure-network",
                  code: e.errCode || e.code || dn.code,
                  message: e.errMsg || e.message
                });
              }(n);
            case 13:
              s = n.clientKey, r = n.key;
              _context43.next = 16;
              return this.appUtils.setClientKey({
                provider: this.provider,
                spaceId: this.spaceId,
                clientKey: s,
                key: r
              });
            case 16:
            case "end":
              return _context43.stop();
          }
        }, _callee43, this);
      }));
      function getAppClientKey() {
        return _getAppClientKey.apply(this, arguments);
      }
      return getAppClientKey;
    }()
  }, {
    key: "ensureClientKey",
    value: function () {
      var _ensureClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee44() {
        var _this18 = this;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee44$(_context44) {
          while (1) switch (_context44.prev = _context44.next) {
            case 0:
              _context44.t0 = !0;
              _context44.next = 3;
              return this.hasClientKey();
            case 3:
              _context44.t1 = _context44.sent;
              if (!(_context44.t0 !== _context44.t1)) {
                _context44.next = 6;
                break;
              }
              return _context44.abrupt("return", (this.scopedGlobalCache.initPromise && "rejected" !== this.scopedGlobalCache.initStatus || (this.scopedGlobalCache.initPromise = this.getAppClientKey(), this.scopedGlobalCache.initPromise.then(function (e) {
                _this18.scopedGlobalCache.initStatus = "fullfilled";
              }).catch(function (e) {
                throw _this18.scopedGlobalCache.initStatus = "rejected", e;
              })), this.scopedGlobalCache.initPromise));
            case 6:
            case "end":
              return _context44.stop();
          }
        }, _callee44, this);
      }));
      function ensureClientKey() {
        return _ensureClientKey.apply(this, arguments);
      }
      return ensureClientKey;
    }()
  }, {
    key: "prepare",
    value: function () {
      var _prepare3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee45() {
        return (0, _regeneratorRuntime2.default)().wrap(function _callee45$(_context45) {
          while (1) switch (_context45.prev = _context45.next) {
            case 0:
              _context45.next = 2;
              return this.ensureClientKey();
            case 2:
            case "end":
              return _context45.stop();
          }
        }, _callee45, this);
      }));
      function prepare() {
        return _prepare3.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "platformGetSignOption",
    value: function () {
      var _platformGetSignOption2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee46() {
        var _yield$this$appUtils$2, e, t;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee46$(_context46) {
          while (1) switch (_context46.prev = _context46.next) {
            case 0:
              _context46.next = 2;
              return this.appUtils.encrypt({
                provider: this.provider,
                spaceId: this.spaceId,
                data: JSON.stringify({})
              });
            case 2:
              _yield$this$appUtils$2 = _context46.sent;
              e = _yield$this$appUtils$2.data;
              t = _yield$this$appUtils$2.key;
              return _context46.abrupt("return", {
                verifyClientSign: e,
                encryptKeyId: t
              });
            case 6:
            case "end":
              return _context46.stop();
          }
        }, _callee46, this);
      }));
      function platformGetSignOption() {
        return _platformGetSignOption2.apply(this, arguments);
      }
      return platformGetSignOption;
    }()
  }, {
    key: "platformEncryptData",
    value: function () {
      var _platformEncryptData2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee47(e) {
        var _yield$this$appUtils$3, t, n, s;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee47$(_context47) {
          while (1) switch (_context47.prev = _context47.next) {
            case 0:
              _context47.next = 2;
              return this.appUtils.encrypt({
                provider: this.provider,
                spaceId: this.spaceId,
                data: JSON.stringify(e)
              });
            case 2:
              _yield$this$appUtils$3 = _context47.sent;
              t = _yield$this$appUtils$3.data;
              n = _yield$this$appUtils$3.key;
              s = {
                secretType: this.secretType,
                encryptKeyId: n
              };
              return _context47.abrupt("return", this.secretType === Pt ? {
                content: e,
                _uniCloudOptions: s
              } : {
                content: t,
                _uniCloudOptions: s
              });
            case 7:
            case "end":
              return _context47.stop();
          }
        }, _callee47, this);
      }));
      function platformEncryptData(_x35) {
        return _platformEncryptData2.apply(this, arguments);
      }
      return platformEncryptData;
    }()
  }, {
    key: "platformDecryptResult",
    value: function () {
      var _platformDecryptResult2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee48(e) {
        var t, _e$_uniCloudOptions, n, s, r;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee48$(_context48) {
          while (1) switch (_context48.prev = _context48.next) {
            case 0:
              t = e.content;
              _e$_uniCloudOptions = e._uniCloudOptions;
              n = _e$_uniCloudOptions === void 0 ? {} : _e$_uniCloudOptions;
              s = n.encryptKeyId;
              _context48.next = 6;
              return this.appUtils.decrypt({
                provider: this.provider,
                spaceId: this.spaceId,
                data: t,
                key: s
              });
            case 6:
              r = _context48.sent;
              return _context48.abrupt("return", JSON.parse(r.data));
            case 8:
            case "end":
              return _context48.stop();
          }
        }, _callee48, this);
      }));
      function platformDecryptResult(_x36) {
        return _platformDecryptResult2.apply(this, arguments);
      }
      return platformDecryptResult;
    }()
  }]);
  return kn;
}(Ot);
function In() {
  var _ref30 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref30.secretType;
  return e === Ct || e === Pt || e === Et;
}
function bn() {
  var _ref31 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref31.name,
    _ref31$data = _ref31.data,
    t = _ref31$data === void 0 ? {} : _ref31$data;
  return "app" === S && "DCloud-clientDB" === e && "encryption" === t.redirectTo && "getAppClientKey" === t.action;
}
function Tn() {
  var _ref32 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref32.provider,
    t = _ref32.spaceId,
    n = _ref32.functionName;
  var _re = re(),
    s = _re.appId,
    r = _re.uniPlatform,
    i = _re.osName;
  var o = r;
  "app" === r && (o = i);
  var a = function () {
    var _ref33 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref33.provider,
      t = _ref33.spaceId;
    var n = v;
    if (!n) return {};
    e = function (e) {
      return "tencent" === e ? "tcb" : e;
    }(e);
    var s = n.find(function (n) {
      return n.provider === e && n.spaceId === t;
    });
    return s && s.config;
  }({
    provider: e,
    spaceId: t
  });
  if (!a || !a.accessControl || !a.accessControl.enable) return !1;
  var c = a.accessControl.function || {},
    u = Object.keys(c);
  if (0 === u.length) return !0;
  var l = function (e, t) {
    var n, s, r;
    for (var _i2 = 0; _i2 < e.length; _i2++) {
      var _o2 = e[_i2];
      _o2 !== t ? "*" !== _o2 ? _o2.split(",").map(function (e) {
        return e.trim();
      }).indexOf(t) > -1 && (s = _o2) : r = _o2 : n = _o2;
    }
    return n || s || r;
  }(u, n);
  if (!l) return !1;
  if ((c[l] || []).find(function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return e.appId === s && (e.platform || "").toLowerCase() === o.toLowerCase();
  })) return !0;
  throw console.error("\u6B64\u5E94\u7528[appId: ".concat(s, ", platform: ").concat(o, "]\u4E0D\u5728\u4E91\u7AEF\u914D\u7F6E\u7684\u5141\u8BB8\u8BBF\u95EE\u7684\u5E94\u7528\u5217\u8868\u5185\uFF0C\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client")), mn(fn);
}
function An(_ref34) {
  var e = _ref34.functionName,
    t = _ref34.result,
    n = _ref34.logPvd;
  if (this.__dev__.debugLog && t && t.requestId) {
    var _s11 = JSON.stringify({
      spaceId: this.config.spaceId,
      functionName: e,
      requestId: t.requestId
    });
    console.log("[".concat(n, "-request]").concat(_s11, "[/").concat(n, "-request]"));
  }
}
function Cn(e) {
  var t = e.callFunction,
    n = function n(_n7) {
      var _this19 = this;
      var s = _n7.name;
      _n7.data = vt.call(e, {
        data: _n7.data
      });
      var r = {
          aliyun: "aliyun",
          tencent: "tcb",
          tcb: "tcb"
        }[this.config.provider],
        i = In(_n7),
        o = bn(_n7),
        a = i || o;
      return t.call(this, _n7).then(function (e) {
        return e.errCode = 0, !a && An.call(_this19, {
          functionName: s,
          result: e,
          logPvd: r
        }), Promise.resolve(e);
      }, function (e) {
        return !a && An.call(_this19, {
          functionName: s,
          result: e,
          logPvd: r
        }), e && e.message && (e.message = function () {
          var _ref35 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref35$message = _ref35.message,
            e = _ref35$message === void 0 ? "" : _ref35$message,
            _ref35$extraInfo = _ref35.extraInfo,
            t = _ref35$extraInfo === void 0 ? {} : _ref35$extraInfo,
            _ref35$formatter = _ref35.formatter,
            n = _ref35$formatter === void 0 ? [] : _ref35$formatter;
          for (var _s12 = 0; _s12 < n.length; _s12++) {
            var _n$_s = n[_s12],
              _r3 = _n$_s.rule,
              _i3 = _n$_s.content,
              _o3 = _n$_s.mode,
              _a = e.match(_r3);
            if (!_a) continue;
            var _c = _i3;
            for (var _e23 = 1; _e23 < _a.length; _e23++) _c = Tt(_c, "{$".concat(_e23, "}"), _a[_e23]);
            for (var _e24 in t) _c = Tt(_c, "{".concat(_e24, "}"), t[_e24]);
            return "replace" === _o3 ? _c : e + _c;
          }
          return e;
        }({
          message: "[".concat(_n7.name, "]: ").concat(e.message),
          formatter: kt,
          extraInfo: {
            functionName: s
          }
        })), Promise.reject(e);
      });
    };
  e.callFunction = function (t) {
    var _e$config = e.config,
      s = _e$config.provider,
      r = _e$config.spaceId,
      i = t.name;
    var o, a;
    if (t.data = t.data || {}, y && e.__dev__.debugInfo && !e.__dev__.debugInfo.forceRemote && I ? (e._callCloudFunction || (e._callCloudFunction = n, e._callLocalFunction = St), o = St) : o = n, o = o.bind(e), bn(t)) a = n.call(e, t);else if (function (_ref36) {
      var e = _ref36.name,
        _ref36$data = _ref36.data,
        t = _ref36$data === void 0 ? {} : _ref36$data;
      return "mp-weixin" === S && "uni-id-co" === e && "secureNetworkHandshakeByWeixin" === t.method;
    }(t)) a = o.call(e, t);else if (In(t)) {
      a = new _n({
        secretType: t.secretType,
        uniCloudIns: e
      }).wrapEncryptDataCallFunction(n.bind(e))(t);
    } else if (Tn({
      provider: s,
      spaceId: r,
      functionName: i
    })) {
      a = new _n({
        secretType: t.secretType,
        uniCloudIns: e
      }).wrapVerifyClientCallFunction(n.bind(e))(t);
    } else a = o(t);
    return Object.defineProperty(a, "result", {
      get: function get() {
        return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};
      }
    }), a;
  };
}
_n = "mp-weixin" !== S && "app" !== S ? /*#__PURE__*/function () {
  function _class2() {
    (0, _classCallCheck2.default)(this, _class2);
    throw mn({
      message: "Platform ".concat(S, " is not supported by secure network")
    });
  }
  return (0, _createClass2.default)(_class2);
}() : w ? "mp-weixin" === S ? vn : kn : /*#__PURE__*/function () {
  function _class3() {
    (0, _classCallCheck2.default)(this, _class3);
    throw mn({
      message: "Platform ".concat(S, " is not enabled, please check whether secure network module is enabled in your manifest.json")
    });
  }
  return (0, _createClass2.default)(_class3);
}();
var Pn = Symbol("CLIENT_DB_INTERNAL");
function En(e, t) {
  return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = Pn, e.inspect = null, e.__ob__ = void 0, new Proxy(e, {
    get: function get(e, n, s) {
      if ("_uniClient" === n) return null;
      if ("symbol" == (0, _typeof2.default)(n)) return e[n];
      if (n in e || "string" != typeof n) {
        var _t10 = e[n];
        return "function" == typeof _t10 ? _t10.bind(e) : _t10;
      }
      return t.get(e, n, s);
    }
  });
}
function On(e) {
  return {
    on: function on(t, n) {
      e[t] = e[t] || [], e[t].indexOf(n) > -1 || e[t].push(n);
    },
    off: function off(t, n) {
      e[t] = e[t] || [];
      var s = e[t].indexOf(n);
      -1 !== s && e[t].splice(s, 1);
    }
  };
}
var xn = ["db.Geo", "db.command", "command.aggregate"];
function Un(e, t) {
  return xn.indexOf("".concat(e, ".").concat(t)) > -1;
}
function Rn(e) {
  switch (d(e)) {
    case "array":
      return e.map(function (e) {
        return Rn(e);
      });
    case "object":
      return e._internalType === Pn || Object.keys(e).forEach(function (t) {
        e[t] = Rn(e[t]);
      }), e;
    case "regexp":
      return {
        $regexp: {
          source: e.source,
          flags: e.flags
        }
      };
    case "date":
      return {
        $date: e.toISOString()
      };
    default:
      return e;
  }
}
function Ln(e) {
  return e && e.content && e.content.$method;
}
var Nn = /*#__PURE__*/function () {
  function Nn(e, t, n) {
    (0, _classCallCheck2.default)(this, Nn);
    this.content = e, this.prevStage = t || null, this.udb = null, this._database = n;
  }
  (0, _createClass2.default)(Nn, [{
    key: "toJSON",
    value: function toJSON() {
      var e = this;
      var t = [e.content];
      for (; e.prevStage;) e = e.prevStage, t.push(e.content);
      return {
        $db: t.reverse().map(function (e) {
          return {
            $method: e.$method,
            $param: Rn(e.$param)
          };
        })
      };
    }
  }, {
    key: "getAction",
    value: function getAction() {
      var e = this.toJSON().$db.find(function (e) {
        return "action" === e.$method;
      });
      return e && e.$param && e.$param[0];
    }
  }, {
    key: "getCommand",
    value: function getCommand() {
      return {
        $db: this.toJSON().$db.filter(function (e) {
          return "action" !== e.$method;
        })
      };
    }
  }, {
    key: "isAggregate",
    get: function get() {
      var e = this;
      for (; e;) {
        var t = Ln(e),
          _n8 = Ln(e.prevStage);
        if ("aggregate" === t && "collection" === _n8 || "pipeline" === t) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "isCommand",
    get: function get() {
      var e = this;
      for (; e;) {
        if ("command" === Ln(e)) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "isAggregateCommand",
    get: function get() {
      var e = this;
      for (; e;) {
        var t = Ln(e),
          _n9 = Ln(e.prevStage);
        if ("aggregate" === t && "command" === _n9) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "getNextStageFn",
    value: function getNextStageFn(e) {
      var t = this;
      return function () {
        return Dn({
          $method: e,
          $param: Rn(Array.from(arguments))
        }, t, t._database);
      };
    }
  }, {
    key: "count",
    get: function get() {
      return this.isAggregate ? this.getNextStageFn("count") : function () {
        return this._send("count", Array.from(arguments));
      };
    }
  }, {
    key: "remove",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("remove") : function () {
        return this._send("remove", Array.from(arguments));
      };
    }
  }, {
    key: "get",
    value: function get() {
      return this._send("get", Array.from(arguments));
    }
  }, {
    key: "add",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("add") : function () {
        return this._send("add", Array.from(arguments));
      };
    }
  }, {
    key: "update",
    value: function update() {
      return this._send("update", Array.from(arguments));
    }
  }, {
    key: "end",
    value: function end() {
      return this._send("end", Array.from(arguments));
    }
  }, {
    key: "set",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("set") : function () {
        throw new Error("JQL禁止使用set方法");
      };
    }
  }, {
    key: "_send",
    value: function _send(e, t) {
      var n = this.getAction(),
        s = this.getCommand();
      if (s.$db.push({
        $method: e,
        $param: Rn(t)
      }), y) {
        var _e25 = s.$db.find(function (e) {
            return "collection" === e.$method;
          }),
          _t11 = _e25 && _e25.$param;
        _t11 && 1 === _t11.length && "string" == typeof _e25.$param[0] && _e25.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
      }
      return this._database._callCloudFunction({
        action: n,
        command: s
      });
    }
  }]);
  return Nn;
}();
function Dn(e, t, n) {
  return En(new Nn(e, t, n), {
    get: function get(e, t) {
      var s = "db";
      return e && e.content && (s = e.content.$method), Un(s, t) ? Dn({
        $method: t
      }, e, n) : function () {
        return Dn({
          $method: t,
          $param: Rn(Array.from(arguments))
        }, e, n);
      };
    }
  });
}
function Fn(_ref37) {
  var e = _ref37.path,
    t = _ref37.method;
  return /*#__PURE__*/function () {
    function _class4() {
      (0, _classCallCheck2.default)(this, _class4);
      this.param = Array.from(arguments);
    }
    (0, _createClass2.default)(_class4, [{
      key: "toJSON",
      value: function toJSON() {
        return {
          $newDb: [].concat((0, _toConsumableArray2.default)(e.map(function (e) {
            return {
              $method: e
            };
          })), [{
            $method: t,
            $param: this.param
          }])
        };
      }
    }]);
    return _class4;
  }();
}
function qn(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return En(new e(t), {
    get: function get(e, t) {
      return Un("db", t) ? Dn({
        $method: t
      }, null, e) : function () {
        return Dn({
          $method: t,
          $param: Rn(Array.from(arguments))
        }, null, e);
      };
    }
  });
}
var Kn = /*#__PURE__*/function (_ref38) {
  (0, _inherits2.default)(Kn, _ref38);
  var _super11 = (0, _createSuper2.default)(Kn);
  function Kn() {
    (0, _classCallCheck2.default)(this, Kn);
    return _super11.apply(this, arguments);
  }
  (0, _createClass2.default)(Kn, [{
    key: "_parseResult",
    value: function _parseResult(e) {
      return this._isJQL ? e.result : e;
    }
  }, {
    key: "_callCloudFunction",
    value: function _callCloudFunction(_ref39) {
      var _this20 = this;
      var e = _ref39.action,
        t = _ref39.command,
        n = _ref39.multiCommand,
        s = _ref39.queryList;
      function r(e, t) {
        if (n && s) for (var _n10 = 0; _n10 < s.length; _n10++) {
          var _r4 = s[_n10];
          _r4.udb && "function" == typeof _r4.udb.setResult && (t ? _r4.udb.setResult(t) : _r4.udb.setResult(e.result.dataList[_n10]));
        }
      }
      var i = this,
        o = this._isJQL ? "databaseForJQL" : "database";
      function a(e) {
        return i._callback("error", [e]), U(R(o, "fail"), e).then(function () {
          return U(R(o, "complete"), e);
        }).then(function () {
          return r(null, e), z(D, {
            type: K,
            content: e
          }), Promise.reject(e);
        });
      }
      var c = U(R(o, "invoke")),
        u = this._uniClient;
      return c.then(function () {
        return u.callFunction({
          name: "DCloud-clientDB",
          type: h,
          data: {
            action: e,
            command: t,
            multiCommand: n
          }
        });
      }).then(function (e) {
        var _e$result = e.result,
          t = _e$result.code,
          n = _e$result.message,
          s = _e$result.token,
          c = _e$result.tokenExpired,
          _e$result$systemInfo = _e$result.systemInfo,
          u = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;
        if (u) for (var _e26 = 0; _e26 < u.length; _e26++) {
          var _u$_e = u[_e26],
            _t12 = _u$_e.level,
            _n11 = _u$_e.message,
            _s13 = _u$_e.detail,
            _r5 = console["app" === S && "warn" === _t12 ? "error" : _t12] || console.log;
          var _i4 = "[System Info]" + _n11;
          _s13 && (_i4 = "".concat(_i4, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_s13)), _r5(_i4);
        }
        if (t) {
          return a(new Q({
            code: t,
            message: n,
            requestId: e.requestId
          }));
        }
        e.result.errCode = e.result.errCode || e.result.code, e.result.errMsg = e.result.errMsg || e.result.message, s && c && (ee({
          token: s,
          tokenExpired: c
        }), _this20._callbackAuth("refreshToken", [{
          token: s,
          tokenExpired: c
        }]), _this20._callback("refreshToken", [{
          token: s,
          tokenExpired: c
        }]), z(q, {
          token: s,
          tokenExpired: c
        }));
        var l = [{
          prop: "affectedDocs",
          tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代"
        }, {
          prop: "code",
          tips: "code不再推荐使用，请使用errCode替代"
        }, {
          prop: "message",
          tips: "message不再推荐使用，请使用errMsg替代"
        }];
        var _loop2 = function _loop2() {
          var _l$_t = l[_t13],
            n = _l$_t.prop,
            s = _l$_t.tips;
          if (n in e.result) {
            var _t14 = e.result[n];
            Object.defineProperty(e.result, n, {
              get: function get() {
                return console.warn(s), _t14;
              }
            });
          }
        };
        for (var _t13 = 0; _t13 < l.length; _t13++) {
          _loop2();
        }
        return function (e) {
          return U(R(o, "success"), e).then(function () {
            return U(R(o, "complete"), e);
          }).then(function () {
            r(e, null);
            var t = i._parseResult(e);
            return z(D, {
              type: K,
              content: t
            }), Promise.resolve(t);
          });
        }(e);
      }, function (e) {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a(new Q({
          code: e.code || "SYSTEM_ERROR",
          message: e.message,
          requestId: e.requestId
        }));
      });
    }
  }]);
  return Kn;
}( /*#__PURE__*/function () {
  function _class5() {
    var _ref40 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref40$uniClient = _ref40.uniClient,
      e = _ref40$uniClient === void 0 ? {} : _ref40$uniClient,
      _ref40$isJQL = _ref40.isJQL,
      t = _ref40$isJQL === void 0 ? !1 : _ref40$isJQL;
    (0, _classCallCheck2.default)(this, _class5);
    this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e.isDefault && (this._dbCallBacks = C("_globalUniCloudDatabaseCallback")), t || (this.auth = On(this._authCallBacks)), this._isJQL = t, Object.assign(this, On(this._dbCallBacks)), this.env = En({}, {
      get: function get(e, t) {
        return {
          $env: t
        };
      }
    }), this.Geo = En({}, {
      get: function get(e, t) {
        return Fn({
          path: ["Geo"],
          method: t
        });
      }
    }), this.serverDate = Fn({
      path: [],
      method: "serverDate"
    }), this.RegExp = Fn({
      path: [],
      method: "RegExp"
    });
  }
  (0, _createClass2.default)(_class5, [{
    key: "getCloudEnv",
    value: function getCloudEnv(e) {
      if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");
      return {
        $env: e.replace("$cloudEnv_", "")
      };
    }
  }, {
    key: "_callback",
    value: function _callback(e, t) {
      var n = this._dbCallBacks;
      n[e] && n[e].forEach(function (e) {
        e.apply(void 0, (0, _toConsumableArray2.default)(t));
      });
    }
  }, {
    key: "_callbackAuth",
    value: function _callbackAuth(e, t) {
      var n = this._authCallBacks;
      n[e] && n[e].forEach(function (e) {
        e.apply(void 0, (0, _toConsumableArray2.default)(t));
      });
    }
  }, {
    key: "multiSend",
    value: function multiSend() {
      var e = Array.from(arguments),
        t = e.map(function (e) {
          var t = e.getAction(),
            n = e.getCommand();
          if ("getTemp" !== n.$db[n.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");
          return {
            action: t,
            command: n
          };
        });
      return this._callCloudFunction({
        multiCommand: t,
        queryList: e
      });
    }
  }]);
  return _class5;
}());
var Mn = "token无效，跳转登录页面",
  jn = "token过期，跳转登录页面",
  Bn = {
    TOKEN_INVALID_TOKEN_EXPIRED: jn,
    TOKEN_INVALID_INVALID_CLIENTID: Mn,
    TOKEN_INVALID: Mn,
    TOKEN_INVALID_WRONG_TOKEN: Mn,
    TOKEN_INVALID_ANONYMOUS_USER: Mn
  },
  $n = {
    "uni-id-token-expired": jn,
    "uni-id-check-token-failed": Mn,
    "uni-id-token-not-exist": Mn,
    "uni-id-check-device-feature-failed": Mn
  };
function Wn(e, t) {
  var n = "";
  return n = e ? "".concat(e, "/").concat(t) : t, n.replace(/^\//, "");
}
function zn() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var n = [],
    s = [];
  return e.forEach(function (e) {
    !0 === e.needLogin ? n.push(Wn(t, e.path)) : !1 === e.needLogin && s.push(Wn(t, e.path));
  }), {
    needLoginPage: n,
    notNeedLoginPage: s
  };
}
function Jn(e) {
  return e.split("?")[0].replace(/^\//, "");
}
function Hn() {
  return function (e) {
    var t = e && e.$page && e.$page.fullPath || "";
    return t ? ("/" !== t.charAt(0) && (t = "/" + t), t) : t;
  }(function () {
    var e = getCurrentPages();
    return e[e.length - 1];
  }());
}
function Gn() {
  return Jn(Hn());
}
function Vn() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!e) return !1;
  if (!(t && t.list && t.list.length)) return !1;
  var n = t.list,
    s = Jn(e);
  return n.some(function (e) {
    return e.pagePath === s;
  });
}
var Yn = !!_pages.default.uniIdRouter;
var _ref41 = function () {
    var _ref24 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _pages.default,
      _ref24$pages = _ref24.pages,
      e = _ref24$pages === void 0 ? [] : _ref24$pages,
      _ref24$subPackages = _ref24.subPackages,
      n = _ref24$subPackages === void 0 ? [] : _ref24$subPackages,
      _ref24$uniIdRouter = _ref24.uniIdRouter,
      s = _ref24$uniIdRouter === void 0 ? {} : _ref24$uniIdRouter,
      _ref24$tabBar = _ref24.tabBar,
      r = _ref24$tabBar === void 0 ? {} : _ref24$tabBar;
    var i = s.loginPage,
      _s$needLogin = s.needLogin,
      o = _s$needLogin === void 0 ? [] : _s$needLogin,
      _s$resToLogin = s.resToLogin,
      a = _s$resToLogin === void 0 ? !0 : _s$resToLogin,
      _zn = zn(e),
      c = _zn.needLoginPage,
      u = _zn.notNeedLoginPage,
      _ref26 = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var t = [],
          n = [];
        return e.forEach(function (e) {
          var s = e.root,
            _e$pages = e.pages,
            r = _e$pages === void 0 ? [] : _e$pages,
            _zn2 = zn(r, s),
            i = _zn2.needLoginPage,
            o = _zn2.notNeedLoginPage;
          t.push.apply(t, (0, _toConsumableArray2.default)(i)), n.push.apply(n, (0, _toConsumableArray2.default)(o));
        }), {
          needLoginPage: t,
          notNeedLoginPage: n
        };
      }(n),
      l = _ref26.needLoginPage,
      h = _ref26.notNeedLoginPage;
    return {
      loginPage: i,
      routerNeedLogin: o,
      resToLogin: a,
      needLoginPage: [].concat((0, _toConsumableArray2.default)(c), (0, _toConsumableArray2.default)(l)),
      notNeedLoginPage: [].concat((0, _toConsumableArray2.default)(u), (0, _toConsumableArray2.default)(h)),
      loginPageInTabBar: Vn(i, r)
    };
  }(),
  Qn = _ref41.loginPage,
  Xn = _ref41.routerNeedLogin,
  Zn = _ref41.resToLogin,
  es = _ref41.needLoginPage,
  ts = _ref41.notNeedLoginPage,
  ns = _ref41.loginPageInTabBar;
if (es.indexOf(Qn) > -1) throw new Error("Login page [".concat(Qn, "] should not be \"needLogin\", please check your pages.json"));
function ss(e) {
  var t = Gn();
  if ("/" === e.charAt(0)) return e;
  var _e$split = e.split("?"),
    _e$split2 = (0, _slicedToArray2.default)(_e$split, 2),
    n = _e$split2[0],
    s = _e$split2[1],
    r = n.replace(/^\//, "").split("/"),
    i = t.split("/");
  i.pop();
  for (var _e27 = 0; _e27 < r.length; _e27++) {
    var _t15 = r[_e27];
    ".." === _t15 ? i.pop() : "." !== _t15 && i.push(_t15);
  }
  return "" === i[0] && i.shift(), "/" + i.join("/") + (s ? "?" + s : "");
}
function rs(e) {
  var t = Jn(ss(e));
  return !(ts.indexOf(t) > -1) && (es.indexOf(t) > -1 || Xn.some(function (t) {
    return function (e, t) {
      return new RegExp(t).test(e);
    }(e, t);
  }));
}
function is(_ref42) {
  var e = _ref42.redirect;
  var t = Jn(e),
    n = Jn(Qn);
  return Gn() !== n && t !== n;
}
function os() {
  var _ref43 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref43.api,
    t = _ref43.redirect;
  if (!t || !is({
    redirect: t
  })) return;
  var n = function (e, t) {
    return "/" !== e.charAt(0) && (e = "/" + e), t ? e.indexOf("?") > -1 ? e + "&uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e + "?uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e;
  }(Qn, t);
  ns ? "navigateTo" !== e && "redirectTo" !== e || (e = "switchTab") : "switchTab" === e && (e = "navigateTo");
  var s = {
    navigateTo: uni.navigateTo,
    redirectTo: uni.redirectTo,
    switchTab: uni.switchTab,
    reLaunch: uni.reLaunch
  };
  setTimeout(function () {
    s[e]({
      url: n
    });
  });
}
function as() {
  var _ref44 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref44.url;
  var t = {
      abortLoginPageJump: !1,
      autoToLoginPage: !1
    },
    n = function () {
      var _Z3 = Z(),
        e = _Z3.token,
        t = _Z3.tokenExpired;
      var n;
      if (e) {
        if (t < Date.now()) {
          var _e28 = "uni-id-token-expired";
          n = {
            errCode: _e28,
            errMsg: $n[_e28]
          };
        }
      } else {
        var _e29 = "uni-id-check-token-failed";
        n = {
          errCode: _e29,
          errMsg: $n[_e29]
        };
      }
      return n;
    }();
  if (rs(e) && n) {
    n.uniIdRedirectUrl = e;
    if (B(F).length > 0) return setTimeout(function () {
      z(F, n);
    }, 0), t.abortLoginPageJump = !0, t;
    t.autoToLoginPage = !0;
  }
  return t;
}
function cs() {
  !function () {
    var e = Hn(),
      _as = as({
        url: e
      }),
      t = _as.abortLoginPageJump,
      n = _as.autoToLoginPage;
    t || n && os({
      api: "redirectTo",
      redirect: e
    });
  }();
  var e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
  var _loop3 = function _loop3() {
    var n = e[_t16];
    uni.addInterceptor(n, {
      invoke: function invoke(e) {
        var _as2 = as({
            url: e.url
          }),
          t = _as2.abortLoginPageJump,
          s = _as2.autoToLoginPage;
        return t ? e : s ? (os({
          api: n,
          redirect: ss(e.url)
        }), !1) : e;
      }
    });
  };
  for (var _t16 = 0; _t16 < e.length; _t16++) {
    _loop3();
  }
}
function us() {
  this.onResponse(function (e) {
    var t = e.type,
      n = e.content;
    var s = !1;
    switch (t) {
      case "cloudobject":
        s = function (e) {
          var t = e.errCode;
          return t in $n;
        }(n);
        break;
      case "clientdb":
        s = function (e) {
          var t = e.errCode;
          return t in Bn;
        }(n);
    }
    s && function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = B(F);
      G().then(function () {
        var n = Hn();
        if (n && is({
          redirect: n
        })) return t.length > 0 ? z(F, Object.assign({
          uniIdRedirectUrl: n
        }, e)) : void (Qn && os({
          api: "navigateTo",
          redirect: n
        }));
      });
    }(n);
  });
}
function ls(e) {
  !function (e) {
    e.onResponse = function (e) {
      $(D, e);
    }, e.offResponse = function (e) {
      W(D, e);
    };
  }(e), function (e) {
    e.onNeedLogin = function (e) {
      $(F, e);
    }, e.offNeedLogin = function (e) {
      W(F, e);
    }, Yn && (C("_globalUniCloudStatus").needLoginInit || (C("_globalUniCloudStatus").needLoginInit = !0, G().then(function () {
      cs.call(e);
    }), Zn && us.call(e)));
  }(e), function (e) {
    e.onRefreshToken = function (e) {
      $(q, e);
    }, e.offRefreshToken = function (e) {
      W(q, e);
    };
  }(e);
}
var hs;
var ds = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  fs = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
function ps() {
  var e = Z().token || "",
    t = e.split(".");
  if (!e || 3 !== t.length) return {
    uid: null,
    role: [],
    permission: [],
    tokenExpired: 0
  };
  var n;
  try {
    n = JSON.parse((s = t[1], decodeURIComponent(hs(s).split("").map(function (e) {
      return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
    }).join(""))));
  } catch (e) {
    throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);
  }
  var s;
  return n.tokenExpired = 1e3 * n.exp, delete n.exp, delete n.iat, n;
}
hs = "function" != typeof atob ? function (e) {
  if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !fs.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
  var t;
  e += "==".slice(2 - (3 & e.length));
  for (var n, s, r = "", i = 0; i < e.length;) t = ds.indexOf(e.charAt(i++)) << 18 | ds.indexOf(e.charAt(i++)) << 12 | (n = ds.indexOf(e.charAt(i++))) << 6 | (s = ds.indexOf(e.charAt(i++))), r += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === s ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
  return r;
} : atob;
var gs = s(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = "chooseAndUploadFile:ok",
      s = "chooseAndUploadFile:fail";
    function r(e, t) {
      return e.tempFiles.forEach(function (e, n) {
        e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + n + e.name.substring(e.name.lastIndexOf("."));
      }), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {
        return e.path;
      })), e;
    }
    function i(e, t, _ref45) {
      var s = _ref45.onChooseFile,
        r = _ref45.onUploadProgress;
      return t.then(function (e) {
        if (s) {
          var _t17 = s(e);
          if (void 0 !== _t17) return Promise.resolve(_t17).then(function (t) {
            return void 0 === t ? e : t;
          });
        }
        return e;
      }).then(function (t) {
        return !1 === t ? {
          errMsg: n,
          tempFilePaths: [],
          tempFiles: []
        } : function (e, t) {
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
          var r = arguments.length > 3 ? arguments[3] : undefined;
          (t = Object.assign({}, t)).errMsg = n;
          var i = t.tempFiles,
            o = i.length;
          var a = 0;
          return new Promise(function (n) {
            for (; a < s;) c();
            function c() {
              var s = a++;
              if (s >= o) return void (!i.find(function (e) {
                return !e.url && !e.errMsg;
              }) && n(t));
              var u = i[s];
              e.uploadFile({
                filePath: u.path,
                cloudPath: u.cloudPath,
                fileType: u.fileType,
                onUploadProgress: function onUploadProgress(e) {
                  e.index = s, e.tempFile = u, e.tempFilePath = u.path, r && r(e);
                }
              }).then(function (e) {
                u.url = e.fileID, s < o && c();
              }).catch(function (e) {
                u.errMsg = e.errMsg || e.message, s < o && c();
              });
            }
          });
        }(e, t, 5, r);
      });
    }
    t.initChooseAndUploadFile = function (e) {
      return function () {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          type: "all"
        };
        return "image" === t.type ? i(e, function (e) {
          var t = e.count,
            n = e.sizeType,
            _e$sourceType = e.sourceType,
            i = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,
            o = e.extension;
          return new Promise(function (e, a) {
            uni.chooseImage({
              count: t,
              sizeType: n,
              sourceType: i,
              extension: o,
              success: function success(t) {
                e(r(t, "image"));
              },
              fail: function fail(e) {
                a({
                  errMsg: e.errMsg.replace("chooseImage:fail", s)
                });
              }
            });
          });
        }(t), t) : "video" === t.type ? i(e, function (e) {
          var t = e.camera,
            n = e.compressed,
            i = e.maxDuration,
            _e$sourceType2 = e.sourceType,
            o = _e$sourceType2 === void 0 ? ["album", "camera"] : _e$sourceType2,
            a = e.extension;
          return new Promise(function (e, c) {
            uni.chooseVideo({
              camera: t,
              compressed: n,
              maxDuration: i,
              sourceType: o,
              extension: a,
              success: function success(t) {
                var n = t.tempFilePath,
                  s = t.duration,
                  i = t.size,
                  o = t.height,
                  a = t.width;
                e(r({
                  errMsg: "chooseVideo:ok",
                  tempFilePaths: [n],
                  tempFiles: [{
                    name: t.tempFile && t.tempFile.name || "",
                    path: n,
                    size: i,
                    type: t.tempFile && t.tempFile.type || "",
                    width: a,
                    height: o,
                    duration: s,
                    fileType: "video",
                    cloudPath: ""
                  }]
                }, "video"));
              },
              fail: function fail(e) {
                c({
                  errMsg: e.errMsg.replace("chooseVideo:fail", s)
                });
              }
            });
          });
        }(t), t) : i(e, function (e) {
          var t = e.count,
            n = e.extension;
          return new Promise(function (e, i) {
            var o = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o = wx.chooseMessageFile), "function" != typeof o) return i({
              errMsg: s + " 请指定 type 类型，该平台仅支持选择 image 或 video。"
            });
            o({
              type: "all",
              count: t,
              extension: n,
              success: function success(t) {
                e(r(t));
              },
              fail: function fail(e) {
                i({
                  errMsg: e.errMsg.replace("chooseFile:fail", s)
                });
              }
            });
          });
        }(t), t);
      };
    };
  }),
  ms = n(gs);
var ys = "manual";
function _s(e) {
  return {
    props: {
      localdata: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      options: {
        type: [Object, Array],
        default: function _default() {
          return {};
        }
      },
      spaceInfo: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      collection: {
        type: [String, Array],
        default: ""
      },
      action: {
        type: String,
        default: ""
      },
      field: {
        type: String,
        default: ""
      },
      orderby: {
        type: String,
        default: ""
      },
      where: {
        type: [String, Object],
        default: ""
      },
      pageData: {
        type: String,
        default: "add"
      },
      pageCurrent: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 20
      },
      getcount: {
        type: [Boolean, String],
        default: !1
      },
      gettree: {
        type: [Boolean, String],
        default: !1
      },
      gettreepath: {
        type: [Boolean, String],
        default: !1
      },
      startwith: {
        type: String,
        default: ""
      },
      limitlevel: {
        type: Number,
        default: 10
      },
      groupby: {
        type: String,
        default: ""
      },
      groupField: {
        type: String,
        default: ""
      },
      distinct: {
        type: [Boolean, String],
        default: !1
      },
      foreignKey: {
        type: String,
        default: ""
      },
      loadtime: {
        type: String,
        default: "auto"
      },
      manual: {
        type: Boolean,
        default: !1
      }
    },
    data: function data() {
      return {
        mixinDatacomLoading: !1,
        mixinDatacomHasMore: !1,
        mixinDatacomResData: [],
        mixinDatacomErrorMessage: "",
        mixinDatacomPage: {}
      };
    },
    created: function created() {
      var _this21 = this;
      this.mixinDatacomPage = {
        current: this.pageCurrent,
        size: this.pageSize,
        count: 0
      }, this.$watch(function () {
        var e = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {
          e.push(_this21[t]);
        }), e;
      }, function (e, t) {
        if (_this21.loadtime === ys) return;
        var n = !1;
        var s = [];
        for (var _r6 = 2; _r6 < e.length; _r6++) e[_r6] !== t[_r6] && (s.push(e[_r6]), n = !0);
        e[0] !== t[0] && (_this21.mixinDatacomPage.current = _this21.pageCurrent), _this21.mixinDatacomPage.size = _this21.pageSize, _this21.onMixinDatacomPropsChange(n, s);
      });
    },
    methods: {
      onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {},
      mixinDatacomEasyGet: function mixinDatacomEasyGet() {
        var _this22 = this;
        var _ref46 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref46$getone = _ref46.getone,
          e = _ref46$getone === void 0 ? !1 : _ref46$getone,
          t = _ref46.success,
          n = _ref46.fail;
        this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then(function (n) {
          _this22.mixinDatacomLoading = !1;
          var _n$result = n.result,
            s = _n$result.data,
            r = _n$result.count;
          _this22.getcount && (_this22.mixinDatacomPage.count = r), _this22.mixinDatacomHasMore = s.length < _this22.pageSize;
          var i = e ? s.length ? s[0] : void 0 : s;
          _this22.mixinDatacomResData = i, t && t(i);
        }).catch(function (e) {
          _this22.mixinDatacomLoading = !1, _this22.mixinDatacomErrorMessage = e, n && n(e);
        }));
      },
      mixinDatacomGet: function mixinDatacomGet() {
        var _n12;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var n = e.database(this.spaceInfo);
        var s = t.action || this.action;
        s && (n = n.action(s));
        var r = t.collection || this.collection;
        n = Array.isArray(r) ? (_n12 = n).collection.apply(_n12, (0, _toConsumableArray2.default)(r)) : n.collection(r);
        var i = t.where || this.where;
        i && Object.keys(i).length && (n = n.where(i));
        var o = t.field || this.field;
        o && (n = n.field(o));
        var a = t.foreignKey || this.foreignKey;
        a && (n = n.foreignKey(a));
        var c = t.groupby || this.groupby;
        c && (n = n.groupBy(c));
        var u = t.groupField || this.groupField;
        u && (n = n.groupField(u));
        !0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (n = n.distinct());
        var l = t.orderby || this.orderby;
        l && (n = n.orderBy(l));
        var h = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,
          d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,
          f = void 0 !== t.getcount ? t.getcount : this.getcount,
          p = void 0 !== t.gettree ? t.gettree : this.gettree,
          g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,
          m = {
            getCount: f
          },
          y = {
            limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel,
            startWith: void 0 !== t.startwith ? t.startwith : this.startwith
          };
        return p && (m.getTree = y), g && (m.getTreePath = y), n = n.skip(d * (h - 1)).limit(d).get(m), n;
      }
    }
  };
}
function ws(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    n = function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return e.customUI = t.customUI || e.customUI, e.parseSystemError = t.parseSystemError || e.parseSystemError, Object.assign(e.loadingOptions, t.loadingOptions), Object.assign(e.errorOptions, t.errorOptions), "object" == (0, _typeof2.default)(t.secretMethods) && (e.secretMethods = t.secretMethods), e;
    }({
      customUI: !1,
      loadingOptions: {
        title: "加载中...",
        mask: !0
      },
      errorOptions: {
        type: "modal",
        retry: !1
      }
    }, n);
    var _n13 = n,
      s = _n13.customUI,
      r = _n13.loadingOptions,
      i = _n13.errorOptions,
      o = _n13.parseSystemError,
      a = !s;
    return new Proxy({}, {
      get: function get(s, c) {
        return function () {
          var _ref47 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref47.fn,
            t = _ref47.interceptorName,
            n = _ref47.getCallbackArgs;
          return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee49() {
            var _len2,
              s,
              _key2,
              r,
              i,
              o,
              _args = arguments;
            return (0, _regeneratorRuntime2.default)().wrap(function _callee49$(_context49) {
              while (1) switch (_context49.prev = _context49.next) {
                case 0:
                  for (_len2 = _args.length, s = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    s[_key2] = _args[_key2];
                  }
                  r = n ? n({
                    params: s
                  }) : {};
                  _context49.prev = 2;
                  _context49.next = 5;
                  return U(R(t, "invoke"), (0, _objectSpread2.default)({}, r));
                case 5:
                  _context49.next = 7;
                  return e.apply(void 0, s);
                case 7:
                  i = _context49.sent;
                  _context49.next = 10;
                  return U(R(t, "success"), (0, _objectSpread2.default)((0, _objectSpread2.default)({}, r), {}, {
                    result: i
                  }));
                case 10:
                  return _context49.abrupt("return", i);
                case 13:
                  _context49.prev = 13;
                  _context49.t0 = _context49["catch"](2);
                  o = _context49.t0;
                  _context49.next = 18;
                  return U(R(t, "fail"), (0, _objectSpread2.default)((0, _objectSpread2.default)({}, r), {}, {
                    error: o
                  }));
                case 18:
                  throw o;
                case 19:
                  _context49.prev = 19;
                  _context49.next = 22;
                  return U(R(t, "complete"), o ? (0, _objectSpread2.default)((0, _objectSpread2.default)({}, r), {}, {
                    error: o
                  }) : (0, _objectSpread2.default)((0, _objectSpread2.default)({}, r), {}, {
                    result: i
                  }));
                case 22:
                  return _context49.finish(19);
                case 23:
                case "end":
                  return _context49.stop();
              }
            }, _callee49, null, [[2, 13, 19, 23]]);
          }));
        }({
          fn: function () {
            var _s14 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee51() {
              var h,
                _len3,
                u,
                _key3,
                d,
                f,
                _ref49,
                p,
                g,
                m,
                y,
                _e30,
                _yield,
                _t18,
                _n14,
                _args4 = arguments;
              return (0, _regeneratorRuntime2.default)().wrap(function _callee51$(_context51) {
                while (1) switch (_context51.prev = _context51.next) {
                  case 0:
                    a && uni.showLoading({
                      title: r.title,
                      mask: r.mask
                    });
                    for (_len3 = _args4.length, u = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                      u[_key3] = _args4[_key3];
                    }
                    d = {
                      name: t,
                      type: l,
                      data: {
                        method: c,
                        params: u
                      }
                    };
                    "object" == (0, _typeof2.default)(n.secretMethods) && function (e, t) {
                      var n = t.data.method,
                        s = e.secretMethods || {},
                        r = s[n] || s["*"];
                      r && (t.secretType = r);
                    }(n, d);
                    f = !1;
                    _context51.prev = 5;
                    _context51.next = 8;
                    return e.callFunction(d);
                  case 8:
                    h = _context51.sent;
                    _context51.next = 14;
                    break;
                  case 11:
                    _context51.prev = 11;
                    _context51.t0 = _context51["catch"](5);
                    f = !0, h = {
                      result: new Q(_context51.t0)
                    };
                  case 14:
                    _ref49 = h.result || {}, p = _ref49.errSubject, g = _ref49.errCode, m = _ref49.errMsg, y = _ref49.newToken;
                    if (!(a && uni.hideLoading(), y && y.token && y.tokenExpired && (ee(y), z(q, (0, _objectSpread2.default)({}, y))), g)) {
                      _context51.next = 39;
                      break;
                    }
                    _e30 = m;
                    if (!(f && o)) {
                      _context51.next = 24;
                      break;
                    }
                    _context51.next = 20;
                    return o({
                      objectName: t,
                      methodName: c,
                      params: u,
                      errSubject: p,
                      errCode: g,
                      errMsg: m
                    });
                  case 20:
                    _context51.t1 = _context51.sent.errMsg;
                    if (_context51.t1) {
                      _context51.next = 23;
                      break;
                    }
                    _context51.t1 = m;
                  case 23:
                    _e30 = _context51.t1;
                  case 24:
                    if (!a) {
                      _context51.next = 37;
                      break;
                    }
                    if (!("toast" === i.type)) {
                      _context51.next = 29;
                      break;
                    }
                    uni.showToast({
                      title: _e30,
                      icon: "none"
                    });
                    _context51.next = 37;
                    break;
                  case 29:
                    if (!("modal" !== i.type)) {
                      _context51.next = 31;
                      break;
                    }
                    throw new Error("Invalid errorOptions.type: ".concat(i.type));
                  case 31:
                    _context51.next = 33;
                    return (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee50() {
                      var _ref51,
                        e,
                        t,
                        n,
                        s,
                        r,
                        _args3 = arguments;
                      return (0, _regeneratorRuntime2.default)().wrap(function _callee50$(_context50) {
                        while (1) switch (_context50.prev = _context50.next) {
                          case 0:
                            _ref51 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, e = _ref51.title, t = _ref51.content, n = _ref51.showCancel, s = _ref51.cancelText, r = _ref51.confirmText;
                            return _context50.abrupt("return", new Promise(function (i, o) {
                              uni.showModal({
                                title: e,
                                content: t,
                                showCancel: n,
                                cancelText: s,
                                confirmText: r,
                                success: function success(e) {
                                  i(e);
                                },
                                fail: function fail() {
                                  i({
                                    confirm: !1,
                                    cancel: !0
                                  });
                                }
                              });
                            }));
                          case 2:
                          case "end":
                            return _context50.stop();
                        }
                      }, _callee50);
                    }))({
                      title: "提示",
                      content: _e30,
                      showCancel: i.retry,
                      cancelText: "取消",
                      confirmText: i.retry ? "重试" : "确定"
                    });
                  case 33:
                    _yield = _context51.sent;
                    _t18 = _yield.confirm;
                    if (!(i.retry && _t18)) {
                      _context51.next = 37;
                      break;
                    }
                    return _context51.abrupt("return", s.apply(void 0, u));
                  case 37:
                    _n14 = new Q({
                      subject: p,
                      code: g,
                      message: m,
                      requestId: h.requestId
                    });
                    throw _n14.detail = h.result, z(D, {
                      type: j,
                      content: _n14
                    }), _n14;
                  case 39:
                    return _context51.abrupt("return", (z(D, {
                      type: j,
                      content: h.result
                    }), h.result));
                  case 40:
                  case "end":
                    return _context51.stop();
                }
              }, _callee51, null, [[5, 11]]);
            }));
            function s() {
              return _s14.apply(this, arguments);
            }
            return s;
          }(),
          interceptorName: "callObject",
          getCallbackArgs: function getCallbackArgs() {
            var _ref52 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              e = _ref52.params;
            return {
              objectName: t,
              methodName: c,
              params: e
            };
          }
        });
      }
    });
  };
}
function vs(e) {
  return C("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e.config.spaceId));
}
function Ss() {
  return _Ss.apply(this, arguments);
}
function _Ss() {
  _Ss = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee53() {
    var _ref56,
      _ref56$callLoginByWei,
      e,
      t,
      n,
      s,
      _args6 = arguments;
    return (0, _regeneratorRuntime2.default)().wrap(function _callee53$(_context53) {
      while (1) switch (_context53.prev = _context53.next) {
        case 0:
          _ref56 = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {}, _ref56$callLoginByWei = _ref56.callLoginByWeixin, e = _ref56$callLoginByWei === void 0 ? !1 : _ref56$callLoginByWei;
          t = vs(this);
          if (!("mp-weixin" !== S)) {
            _context53.next = 4;
            break;
          }
          throw new Error("[SecureNetwork] API `initSecureNetworkByWeixin` is not supported on platform `".concat(S, "`"));
        case 4:
          _context53.next = 6;
          return new Promise(function (e, t) {
            uni.login({
              success: function success(t) {
                e(t.code);
              },
              fail: function fail(e) {
                t(new Error(e.errMsg));
              }
            });
          });
        case 6:
          n = _context53.sent;
          s = this.importObject("uni-id-co", {
            customUI: !0
          });
          _context53.next = 10;
          return s.secureNetworkHandshakeByWeixin({
            code: n,
            callLoginByWeixin: e
          });
        case 10:
          t.mpWeixinCode = n;
          return _context53.abrupt("return", {
            code: n
          });
        case 12:
        case "end":
          return _context53.stop();
      }
    }, _callee53, this);
  }));
  return _Ss.apply(this, arguments);
}
function ks(_x37) {
  return _ks.apply(this, arguments);
}
function _ks() {
  _ks = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee54(e) {
    var t;
    return (0, _regeneratorRuntime2.default)().wrap(function _callee54$(_context54) {
      while (1) switch (_context54.prev = _context54.next) {
        case 0:
          t = vs(this);
          return _context54.abrupt("return", (t.initPromise || (t.initPromise = Ss.call(this, e)), t.initPromise));
        case 2:
        case "end":
          return _context54.stop();
      }
    }, _callee54, this);
  }));
  return _ks.apply(this, arguments);
}
function Is(e) {
  return function () {
    var _ref53 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref53$callLoginByWei = _ref53.callLoginByWeixin,
      t = _ref53$callLoginByWei === void 0 ? !1 : _ref53$callLoginByWei;
    return ks.call(e, {
      callLoginByWeixin: t
    });
  };
}
function bs(_x38, _x39) {
  return _bs.apply(this, arguments);
}
function _bs() {
  _bs = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee55(e, t) {
    var n, _e32, s;
    return (0, _regeneratorRuntime2.default)().wrap(function _callee55$(_context55) {
      while (1) switch (_context55.prev = _context55.next) {
        case 0:
          n = "http://".concat(e, ":").concat(t, "/system/ping");
          _context55.prev = 1;
          _context55.next = 4;
          return s = {
            url: n,
            timeout: 500
          }, new Promise(function (e, t) {
            X.request((0, _objectSpread2.default)((0, _objectSpread2.default)({}, s), {}, {
              success: function success(t) {
                e(t);
              },
              fail: function fail(e) {
                t(e);
              }
            }));
          });
        case 4:
          _e32 = _context55.sent;
          return _context55.abrupt("return", !(!_e32.data || 0 !== _e32.data.code));
        case 8:
          _context55.prev = 8;
          _context55.t0 = _context55["catch"](1);
          return _context55.abrupt("return", !1);
        case 11:
        case "end":
          return _context55.stop();
      }
    }, _callee55, null, [[1, 8]]);
  }));
  return _bs.apply(this, arguments);
}
function Ts(e) {
  if (e.initUniCloudStatus && "rejected" !== e.initUniCloudStatus) return;
  var t = Promise.resolve();
  var n;
  n = 1, t = new Promise(function (e) {
    setTimeout(function () {
      e();
    }, n);
  }), e.isReady = !1, e.isDefault = !1;
  var s = e.auth();
  e.initUniCloudStatus = "pending", e.initUniCloud = t.then(function () {
    return s.getLoginState();
  }).then(function (e) {
    return e ? Promise.resolve() : s.signInAnonymously();
  }).then(function () {
    if (!y) return Promise.resolve();
    if ("app" === S) {
      var _re2 = re(),
        _e31 = _re2.osName,
        _t19 = _re2.osVersion;
      "ios" === _e31 && function (e) {
        if (!e || "string" != typeof e) return 0;
        var t = e.match(/^(\d+)./);
        return t && t[1] ? parseInt(t[1]) : 0;
      }(_t19) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发模式生效，发行模式会连接uniCloud云端服务）");
    }
    if (y && e.__dev__.debugInfo) {
      var _e$__dev__$debugInfo = e.__dev__.debugInfo,
        _t20 = _e$__dev__$debugInfo.address,
        _n15 = _e$__dev__$debugInfo.servePort;
      return function () {
        var _ref54 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee52(e, t) {
          var n, _s15, _r7;
          return (0, _regeneratorRuntime2.default)().wrap(function _callee52$(_context52) {
            while (1) switch (_context52.prev = _context52.next) {
              case 0:
                _s15 = 0;
              case 1:
                if (!(_s15 < e.length)) {
                  _context52.next = 11;
                  break;
                }
                _r7 = e[_s15];
                _context52.next = 5;
                return bs(_r7, t);
              case 5:
                if (!_context52.sent) {
                  _context52.next = 8;
                  break;
                }
                n = _r7;
                return _context52.abrupt("break", 11);
              case 8:
                _s15++;
                _context52.next = 1;
                break;
              case 11:
                return _context52.abrupt("return", {
                  address: n,
                  port: t
                });
              case 12:
              case "end":
                return _context52.stop();
            }
          }, _callee52);
        }));
        return function (_x40, _x41) {
          return _ref54.apply(this, arguments);
        };
      }()(_t20, _n15);
    }
  }).then(function () {
    var _ref55 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      t = _ref55.address,
      n = _ref55.port;
    if (!y) return Promise.resolve();
    var s = console["app" === S ? "error" : "warn"];
    if (t) e.__dev__.localAddress = t, e.__dev__.localPort = n;else if (e.__dev__.debugInfo) {
      var _t21 = "";
      "remote" === e.__dev__.debugInfo.initialLaunchType ? (e.__dev__.debugInfo.forceRemote = !0, _t21 = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : _t21 = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", _t21 += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", "web" === S && (_t21 += "\n- 部分浏览器开启节流模式之后访问本地地址受限，请检查是否启用了节流模式"), 0 === S.indexOf("mp-") && (_t21 += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), s(_t21);
    }
  }).then(function () {
    te(), e.isReady = !0, e.initUniCloudStatus = "fulfilled";
  }).catch(function (t) {
    console.error(t), e.initUniCloudStatus = "rejected";
  });
}
var As = {
  tcb: yt,
  tencent: yt,
  aliyun: he,
  private: wt
};
var Cs = new ( /*#__PURE__*/function () {
  function _class6() {
    (0, _classCallCheck2.default)(this, _class6);
  }
  (0, _createClass2.default)(_class6, [{
    key: "init",
    value: function init(e) {
      var t = {};
      var n = As[e.provider];
      if (!n) throw new Error("未提供正确的provider参数");
      t = n.init(e), t.__dev__ = {}, t.__dev__.debugLog = y && ("web" === S && navigator.userAgent.indexOf("HBuilderX") > 0 || "app" === S);
      var s = k;
      y && s && !s.code && (t.__dev__.debugInfo = s), Ts(t), t.reInit = function () {
        Ts(this);
      }, Cn(t), function (e) {
        var t = e.uploadFile;
        e.uploadFile = function (e) {
          return t.call(this, e);
        };
      }(t), function (e) {
        e.database = function (t) {
          if (t && Object.keys(t).length > 0) return e.init(t).database();
          if (this._database) return this._database;
          var n = qn(Kn, {
            uniClient: e
          });
          return this._database = n, n;
        }, e.databaseForJQL = function (t) {
          if (t && Object.keys(t).length > 0) return e.init(t).databaseForJQL();
          if (this._databaseForJQL) return this._databaseForJQL;
          var n = qn(Kn, {
            uniClient: e,
            isJQL: !0
          });
          return this._databaseForJQL = n, n;
        };
      }(t), function (e) {
        e.getCurrentUserInfo = ps, e.chooseAndUploadFile = ms.initChooseAndUploadFile(e), Object.assign(e, {
          get mixinDatacom() {
            return _s(e);
          }
        }), e.importObject = ws(e), e.initSecureNetworkByWeixin = Is(e);
      }(t);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach(function (e) {
        if (!t[e]) return;
        var n = t[e];
        t[e] = function () {
          return t.reInit(), n.apply(t, Array.from(arguments));
        }, t[e] = Y(t[e], e).bind(t);
      }), t.init = this.init, t;
    }
  }]);
  return _class6;
}())();
(function () {
  var e = I;
  var t = {};
  if (e && 1 === e.length) t = e[0], Cs = Cs.init(t), Cs.isDefault = !0;else {
    var _t22 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
    var _n16;
    _n16 = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : b ? "应用未关联服务空间，请在uniCloud目录右键关联服务空间" : "uni-app cli项目内使用uniCloud需要使用HBuilderX的运行菜单运行项目，且需要在uniCloud目录关联服务空间", _t22.forEach(function (e) {
      Cs[e] = function () {
        return console.error(_n16), Promise.reject(new Q({
          code: "SYS_ERR",
          message: _n16
        }));
      };
    });
  }
  Object.assign(Cs, {
    get mixinDatacom() {
      return _s(Cs);
    }
  }), ls(Cs), Cs.addInterceptor = O, Cs.removeInterceptor = x, Cs.interceptObject = L, y && "web" === S && (window.uniCloud = Cs);
})();
var Ps = Cs;
exports.default = Ps;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "yLpj")))

/***/ }),

/***/ "qxPZ":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "tiKp");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "r/Vq":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.max-safe-integer.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "I+eb");

// `Number.MAX_SAFE_INTEGER` constant
// https://tc39.es/ecma262/#sec-number.max_safe_integer
$({ target: 'Number', stat: true, nonConfigurable: true, nonWritable: true }, {
  MAX_SAFE_INTEGER: 0x1FFFFFFFFFFFFF
});


/***/ }),

/***/ "rONJ":
/*!*****************************************************!*\
  !*** ./src/pages.json?{"type":"origin-pages-json"} ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "eoL8");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "pages": [{
    "path": "pages/index/index",
    "style": {
      "navigationBarTitleText": "Match",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/connect/index",
    "style": {
      "navigationBarTitleText": "Connect",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/me/index",
    "style": {
      "navigationBarTitleText": "Me",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/quiz/index",
    "style": {
      "navigationBarTitleText": "入圈测试",
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/profile/create",
    "style": {
      "navigationBarTitleText": "创建档案"
    }
  }, {
    "path": "pages/login/index",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/chat/index",
    "style": {
      "navigationBarTitleText": "私聊"
    }
  }],
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "NicheApp",
    "navigationBarBackgroundColor": "#F8F8F8",
    "backgroundColor": "#F8F8F8"
  },
  "tabBar": {
    "color": "#7A7E83",
    "selectedColor": "#000000",
    "borderStyle": "black",
    "backgroundColor": "#ffffff",
    "list": [{
      "pagePath": "pages/index/index",
      "text": "Match"
    }, {
      "pagePath": "pages/connect/index",
      "text": "Connect"
    }, {
      "pagePath": "pages/me/index",
      "text": "Me"
    }]
  }
};
exports.default = _default;

/***/ }),

/***/ "rOQg":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array-buffer.slice.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "I+eb");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "RiVN");
var fails = __webpack_require__(/*! ../internals/fails */ "0Dky");
var ArrayBufferModule = __webpack_require__(/*! ../internals/array-buffer */ "Yhre");
var anObject = __webpack_require__(/*! ../internals/an-object */ "glrk");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "I8vh");
var toLength = __webpack_require__(/*! ../internals/to-length */ "UMSQ");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "SEBh");

var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
var DataView = ArrayBufferModule.DataView;
var DataViewPrototype = DataView.prototype;
var nativeArrayBufferSlice = uncurryThis(ArrayBuffer.prototype.slice);
var getUint8 = uncurryThis(DataViewPrototype.getUint8);
var setUint8 = uncurryThis(DataViewPrototype.setUint8);

var INCORRECT_SLICE = fails(function () {
  return !new ArrayBuffer(2).slice(1, undefined).byteLength;
});

// `ArrayBuffer.prototype.slice` method
// https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice
$({ target: 'ArrayBuffer', proto: true, unsafe: true, forced: INCORRECT_SLICE }, {
  slice: function slice(start, end) {
    if (nativeArrayBufferSlice && end === undefined) {
      return nativeArrayBufferSlice(anObject(this), start); // FF fix
    }
    var length = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    var result = new (speciesConstructor(this, ArrayBuffer))(toLength(fin - first));
    var viewSource = new DataView(this);
    var viewTarget = new DataView(result);
    var index = 0;
    while (first < fin) {
      setUint8(viewTarget, index++, getUint8(viewSource, first++));
    } return result;
  }
});


/***/ }),

/***/ "rdv8":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-sort.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ "Ta7t");

var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    array,
    mergeSort(arraySlice(array, 0, middle), comparefn),
    mergeSort(arraySlice(array, middle), comparefn),
    comparefn
  );
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  } return array;
};

var merge = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;

  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = (lindex < llength && rindex < rlength)
      ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
      : lindex < llength ? left[lindex++] : right[rindex++];
  } return array;
};

module.exports = mergeSort;


/***/ }),

/***/ "s4An":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "eoL8");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _setPrototypeOf;
__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "ExoC");
function _setPrototypeOf(o, p) {
  exports.default = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "s5qe":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.to-locale-string.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "2oRo");
var apply = __webpack_require__(/*! ../internals/function-apply */ "K6Rb");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC");
var fails = __webpack_require__(/*! ../internals/fails */ "0Dky");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "82ph");

var Int8Array = global.Int8Array;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $toLocaleString = [].toLocaleString;

// iOS Safari 6.x fails here
var TO_LOCALE_STRING_BUG = !!Int8Array && fails(function () {
  $toLocaleString.call(new Int8Array(1));
});

var FORCED = fails(function () {
  return [1, 2].toLocaleString() != new Int8Array([1, 2]).toLocaleString();
}) || !fails(function () {
  Int8Array.prototype.toLocaleString.call([1, 2]);
});

// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
exportTypedArrayMethod('toLocaleString', function toLocaleString() {
  return apply(
    $toLocaleString,
    TO_LOCALE_STRING_BUG ? arraySlice(aTypedArray(this)) : aTypedArray(this),
    arraySlice(arguments)
  );
}, FORCED);


/***/ }),

/***/ "t+/R":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-exception.stack.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "I+eb");
var global = __webpack_require__(/*! ../internals/global */ "2oRo");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "0GbY");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "XGwC");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "m/L8").f;
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "Gi26");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "GarU");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "cVYH");
var normalizeStringArgument = __webpack_require__(/*! ../internals/normalize-string-argument */ "45G5");
var DOMExceptionConstants = __webpack_require__(/*! ../internals/dom-exception-constants */ "z5iJ");
var clearErrorStack = __webpack_require__(/*! ../internals/error-stack-clear */ "DSaw");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "g6v/");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "xDBR");

var DOM_EXCEPTION = 'DOMException';
var Error = getBuiltIn('Error');
var NativeDOMException = getBuiltIn(DOM_EXCEPTION);

var $DOMException = function DOMException() {
  anInstance(this, DOMExceptionPrototype);
  var argumentsLength = arguments.length;
  var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
  var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
  var that = new NativeDOMException(message, name);
  var error = Error(message);
  error.name = DOM_EXCEPTION;
  defineProperty(that, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
  inheritIfRequired(that, this, $DOMException);
  return that;
};

var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;

var ERROR_HAS_STACK = 'stack' in Error(DOM_EXCEPTION);
var DOM_EXCEPTION_HAS_STACK = 'stack' in new NativeDOMException(1, 2);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var descriptor = NativeDOMException && DESCRIPTORS && Object.getOwnPropertyDescriptor(global, DOM_EXCEPTION);

// Bun ~ 0.1.1 DOMException have incorrect descriptor and we can't redefine it
// https://github.com/Jarred-Sumner/bun/issues/399
var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);

var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;

// `DOMException` constructor patch for `.stack` where it's required
// https://webidl.spec.whatwg.org/#es-DOMException-specialness
$({ global: true, constructor: true, forced: IS_PURE || FORCED_CONSTRUCTOR }, { // TODO: fix export logic
  DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
});

var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;

if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
  if (!IS_PURE) {
    defineProperty(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, PolyfilledDOMException));
  }

  for (var key in DOMExceptionConstants) if (hasOwn(DOMExceptionConstants, key)) {
    var constant = DOMExceptionConstants[key];
    var constantName = constant.s;
    if (!hasOwn(PolyfilledDOMException, constantName)) {
      defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c));
    }
  }
}


/***/ }),

/***/ "tjZM":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.async-iterator.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ "4GWN");

// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');


/***/ }),

/***/ "trfz":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-species-constructor.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "SEBh");

var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;

// a part of `TypedArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#typedarray-species-create
module.exports = function (originalArray) {
  return aTypedArrayConstructor(speciesConstructor(originalArray, getTypedArrayConstructor(originalArray)));
};


/***/ }),

/***/ "uFwe":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "eoL8");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _createForOfIteratorHelper;
__webpack_require__(/*! core-js/modules/es.symbol.js */ "pNMO");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "4Brf");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "07d7");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "0oug");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "PKPk");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "3bBZ");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "2eJa");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "1AHG");
var _unsupportedIterableToArray = _interopRequireDefault(__webpack_require__(/*! ./unsupportedIterableToArray.js */ "BsWD"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = (0, _unsupportedIterableToArray.default)(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/***/ }),

/***/ "uReb":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/base64-map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var itoc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var ctoi = {};

for (var index = 0; index < 66; index++) ctoi[itoc.charAt(index)] = index;

module.exports = {
  itoc: itoc,
  ctoi: ctoi
};


/***/ }),

/***/ "uqXc":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.last-index-of.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "I+eb");
var lastIndexOf = __webpack_require__(/*! ../internals/array-last-index-of */ "5Yz+");

// `Array.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
// eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
$({ target: 'Array', proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
  lastIndexOf: lastIndexOf
});


/***/ }),

/***/ "uy83":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/freezing.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "0Dky");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "vL8k":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/is-big-int-array.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "9d/t");

module.exports = function (it) {
  var klass = classof(it);
  return klass == 'BigInt64Array' || klass == 'BigUint64Array';
};


/***/ }),

/***/ "vxnP":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/web.url.to-json.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "I+eb");
var call = __webpack_require__(/*! ../internals/function-call */ "xluM");

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
$({ target: 'URL', proto: true, enumerable: true }, {
  toJSON: function toJSON() {
    return call(URL.prototype.toString, this);
  }
});


/***/ }),

/***/ "waxf":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.filter.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "tycR").filter;
var fromSpeciesAndList = __webpack_require__(/*! ../internals/typed-array-from-species-and-list */ "FEiF");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.filter` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
exportTypedArrayMethod('filter', function filter(callbackfn /* , thisArg */) {
  var list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  return fromSpeciesAndList(this, list);
});


/***/ }),

/***/ "x+uP":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _regeneratorRuntime;
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "eoL8");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "pNMO");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "4Brf");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "07d7");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "0oug");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "PKPk");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "3bBZ");
__webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "tjZM");
__webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "lEou");
__webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "DEfu");
__webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "I9xj");
__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "NBAS");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "2eJa");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "1AHG");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "FNk8");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "FZtP");
__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "ExoC");
__webpack_require__(/*! core-js/modules/es.array.reverse.js */ "Junv");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "+2oP");
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! ./typeof.js */ "U8pU"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  exports.default = _regeneratorRuntime = function _regeneratorRuntime() {
    return _exports;
  };
  var _exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  _exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == (0, _typeof2.default)(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), _exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, _exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, _exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), _exports.AsyncIterator = AsyncIterator, _exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return _exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), _exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, _exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, _exports;
}

/***/ }),

/***/ "xgco":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.dot-all.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "g6v/");
var UNSUPPORTED_DOT_ALL = __webpack_require__(/*! ../internals/regexp-unsupported-dot-all */ "/OPJ");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "xrYK");
var defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ "7dAM");
var getInternalState = __webpack_require__(/*! ../internals/internal-state */ "afO8").get;

var RegExpPrototype = RegExp.prototype;
var $TypeError = TypeError;

// `RegExp.prototype.dotAll` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.dotall
if (DESCRIPTORS && UNSUPPORTED_DOT_ALL) {
  defineBuiltInAccessor(RegExpPrototype, 'dotAll', {
    configurable: true,
    get: function dotAll() {
      if (this === RegExpPrototype) return undefined;
      // We can't use InternalStateModule.getterFor because
      // we don't add metadata for regexps created by a literal.
      if (classof(this) === 'RegExp') {
        return !!getInternalState(this).dotAll;
      }
      throw $TypeError('Incompatible receiver, RegExp required');
    }
  });
}


/***/ }),

/***/ "ypFw":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.reduce.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC");
var $reduce = __webpack_require__(/*! ../internals/array-reduce */ "1Y/n").left;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduce` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
exportTypedArrayMethod('reduce', function reduce(callbackfn /* , initialValue */) {
  var length = arguments.length;
  return $reduce(aTypedArray(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "yq1k":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "I+eb");
var $includes = __webpack_require__(/*! ../internals/array-includes */ "TWQb").includes;
var fails = __webpack_require__(/*! ../internals/fails */ "0Dky");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "RNIs");

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "z5iJ":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/dom-exception-constants.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  IndexSizeError: { s: 'INDEX_SIZE_ERR', c: 1, m: 1 },
  DOMStringSizeError: { s: 'DOMSTRING_SIZE_ERR', c: 2, m: 0 },
  HierarchyRequestError: { s: 'HIERARCHY_REQUEST_ERR', c: 3, m: 1 },
  WrongDocumentError: { s: 'WRONG_DOCUMENT_ERR', c: 4, m: 1 },
  InvalidCharacterError: { s: 'INVALID_CHARACTER_ERR', c: 5, m: 1 },
  NoDataAllowedError: { s: 'NO_DATA_ALLOWED_ERR', c: 6, m: 0 },
  NoModificationAllowedError: { s: 'NO_MODIFICATION_ALLOWED_ERR', c: 7, m: 1 },
  NotFoundError: { s: 'NOT_FOUND_ERR', c: 8, m: 1 },
  NotSupportedError: { s: 'NOT_SUPPORTED_ERR', c: 9, m: 1 },
  InUseAttributeError: { s: 'INUSE_ATTRIBUTE_ERR', c: 10, m: 1 },
  InvalidStateError: { s: 'INVALID_STATE_ERR', c: 11, m: 1 },
  SyntaxError: { s: 'SYNTAX_ERR', c: 12, m: 1 },
  InvalidModificationError: { s: 'INVALID_MODIFICATION_ERR', c: 13, m: 1 },
  NamespaceError: { s: 'NAMESPACE_ERR', c: 14, m: 1 },
  InvalidAccessError: { s: 'INVALID_ACCESS_ERR', c: 15, m: 1 },
  ValidationError: { s: 'VALIDATION_ERR', c: 16, m: 0 },
  TypeMismatchError: { s: 'TYPE_MISMATCH_ERR', c: 17, m: 1 },
  SecurityError: { s: 'SECURITY_ERR', c: 18, m: 1 },
  NetworkError: { s: 'NETWORK_ERR', c: 19, m: 1 },
  AbortError: { s: 'ABORT_ERR', c: 20, m: 1 },
  URLMismatchError: { s: 'URL_MISMATCH_ERR', c: 21, m: 1 },
  QuotaExceededError: { s: 'QUOTA_EXCEEDED_ERR', c: 22, m: 1 },
  TimeoutError: { s: 'TIMEOUT_ERR', c: 23, m: 1 },
  InvalidNodeTypeError: { s: 'INVALID_NODE_TYPE_ERR', c: 24, m: 1 },
  DataCloneError: { s: 'DATA_CLONE_ERR', c: 25, m: 1 }
};


/***/ }),

/***/ "zSZm":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.reverse.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "67WC");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var floor = Math.floor;

// `%TypedArray%.prototype.reverse` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
exportTypedArrayMethod('reverse', function reverse() {
  var that = this;
  var length = aTypedArray(that).length;
  var middle = floor(length / 2);
  var index = 0;
  var value;
  while (index < middle) {
    value = that[index];
    that[index++] = that[--length];
    that[length] = value;
  } return that;
});


/***/ })

}]);