// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/mathUtils"],function(f,g,h){let k=function(){function d(a){null==a?a=16:65536>a&&(a=h.nextHighestPowerOfTwo(a));this._array=new Float32Array(a);this._size=0}var e=d.prototype;e.resize=function(a,b){this._size=a;if(this._size>this._array.length){for(a=this._array.length||1;a<this._size;)a*=2;a=new Float32Array(a);b&&a.set(this._array);this._array=a;return!0}var c=2*this._size;if(c<=this._array.length){for(a=this._array.length;a>=
c;)a=Math.floor(a/2);c=new Float32Array(a);b&&c.set(this._array.subarray(0,a));this._array=c;return!0}return!1};e.append=function(a){const b=this._size;this.resize(this._size+a.length,!0);this._array.set(a,b)};e.erase=function(a,b){for(;a<b;++a)this._array[a]=0};g._createClass(d,[{key:"array",get:function(){return this._array}},{key:"size",get:function(){return this._size}}]);return d}();f.ResizableFloat32Array=k;Object.defineProperty(f,"__esModule",{value:!0})});