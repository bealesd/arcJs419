// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./maybe"],function(c,g){c.estimateSize=function(a){return g.isNone(a)?0:128+a.buffer.byteLength+64};c.forEach=function(a,d){if(a.forEach)a.forEach(d);else for(let b=0;b<a.length;b++)d(a[b],b,a)};c.isArrayBuffer=function(a){return a instanceof ArrayBuffer||a&&a.constructor&&"ArrayBuffer"===a.constructor.name};c.isFloat32Array=function(a){return a instanceof Float32Array||a&&a.constructor&&"Float32Array"===a.constructor.name};c.isFloat64Array=function(a){return a instanceof Float64Array||
a&&a.constructor&&"Float64Array"===a.constructor.name};c.isInt16Array=function(a){return a instanceof Int16Array||a&&a.constructor&&"Int16Array"===a.constructor.name};c.isInt32Array=function(a){return a instanceof Int32Array||a&&a.constructor&&"Int32Array"===a.constructor.name};c.isInt8Array=function(a){return a instanceof Int8Array||a&&a.constructor&&"Int8Array"===a.constructor.name};c.isUint16Array=function(a){return a instanceof Uint16Array||a&&a.constructor&&"Uint16Array"===a.constructor.name};
c.isUint32Array=function(a){return a instanceof Uint32Array||a&&a.constructor&&"Uint32Array"===a.constructor.name};c.isUint8Array=function(a){return a instanceof Uint8Array||a&&a.constructor&&"Uint8Array"===a.constructor.name};c.isUint8ClampedArray=function(a){return a instanceof Uint8ClampedArray||a&&a.constructor&&"Uint8ClampedArray"===a.constructor.name};c.slice=function(a,d,b){if(a.slice)return a.slice(d,b);void 0===d?d=0:(0>d&&(d+=a.length),d=Math.min(a.length,Math.max(0,d)));void 0===b?b=a.length:
(0>b&&(b+=a.length),b=Math.min(a.length,Math.max(0,b)));b=Math.max(0,b-d);const f=new a.constructor(b);for(let e=0;e<b;e++)f[e]=a[d+e];return f};c.toArray=function(a){const d=Array(a.length);for(let b=0;b<a.length;b++)d[b]=a[b];return d};Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});