// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers"],function(d,f){const h=a=>function(b){function e(){var c=b.apply(this,arguments)||this;c._isDisposed=!1;return c}f._inheritsLoose(e,b);e.prototype.dispose=function(){for(const c of this._managedDisposables??[]){const g=this[c];this[c]=null;g&&"function"===typeof g.dispose&&g.dispose()}this._isDisposed=!0};f._createClass(e,[{key:"isDisposed",get:function(){return this._isDisposed}}]);return e}(a);let k=function(a){function b(){return a.apply(this,
arguments)||this}f._inheritsLoose(b,a);return b}(h(function(){return function(){}}()));d.AutoDisposable=k;d.AutoDisposableMixin=h;d.autoDispose=function(){return(a,b)=>{a.hasOwnProperty("_managedDisposables")||(a._managedDisposables=a._managedDisposables?.slice()??[]);a._managedDisposables?.unshift(b)}};Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});