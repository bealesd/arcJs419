// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/maybe"],function(e,f){let h=function(){function c(a,d,g){this._editGeometry=a;this._vertex=d;this._pos=g}var b=c.prototype;b.apply=function(){const a=f.isNone(this._originalPosition);a&&(this._originalPosition=this._vertex.pos);this._apply(a?"apply":"redo")};b.undo=function(){this._vertex.pos=f.unwrap(this._originalPosition);this._editGeometry.notifyChanges({operation:"undo",updatedVertices:[this._vertex]})};b.accumulate=function(a){return a instanceof c&&a._vertex===
this._vertex?(this._pos=a._pos,this._apply("apply"),!0):!1};b._apply=function(a){this._vertex.pos=this._pos;this._editGeometry.components.forEach(d=>d.unnormalizeVertexPositions());this._editGeometry.notifyChanges({operation:a,updatedVertices:[this._vertex]})};return c}();e.SetVertexPosition=h;Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});