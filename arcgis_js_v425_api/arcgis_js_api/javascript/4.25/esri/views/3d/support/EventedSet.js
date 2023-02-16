// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/Evented","../../../core/ObservableChangesType","../../../core/SetUtils"],function(h,k,g,e,m){g=function(l){function f(){var a=l.apply(this,arguments)||this;a._set=new Set;return a}k._inheritsLoose(f,l);var c=f.prototype;c.clear=function(){if(0<this._set.size){const a=this.toArray();this._set.clear();this.emit("after-changes",{type:e.ObservableChangesType.REMOVE});this.emit("change",{added:[],removed:a})}};c.addMany=function(a){if(0!==
a.length){for(const b of a)this._set.add(b);this.emit("after-changes",{type:e.ObservableChangesType.ADD});this.emit("change",{added:a,removed:[]})}};c.remove=function(a){this._set.delete(a)&&(this.emit("after-changes",{type:e.ObservableChangesType.REMOVE}),this.emit("change",{added:[],removed:[a]}))};c.removeMany=function(a){const b=[];for(const d of a)this._set.delete(d)&&b.push(d);0<b.length&&(this.emit("after-changes",{type:e.ObservableChangesType.REMOVE}),this.emit("change",{added:[],removed:b}))};
c.toArray=function(){return[...this._set]};c.find=function(a){let b;m.someSet(this._set,d=>a(d)?(b=d,!0):!1);return b};c.forEach=function(a){this._set.forEach(b=>a(b))};k._createClass(f,[{key:"length",get:function(){return this._set.size}}]);return f}(g);h.EventedSet=g;Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});