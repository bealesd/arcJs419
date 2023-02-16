/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{r as t}from"./mathUtils.js";import{i as e}from"./maybe.js";import{e as s}from"./unitUtils.js";import{j as o,s as r}from"./mat4.js";import{s as i,d as n,m as a,c as l,n as c,h as u}from"./vec3.js";import{w as m,x as p}from"../core/lang.js";import{projectPointToVector as f,projectVectorToVector as d,projectVectorToDehydratedPoint as h,projectVectorToPoint as v}from"../geometry/projection.js";import{A as y,b as S}from"./vector.js";import{c as j,g as A}from"./projectionEllipsoid.js";import g from"../geometry/SpatialReference.js";import{f as _,b as w}from"./boundedPlane.js";import{f as R,s as C}from"./sphere.js";import{h as P}from"./plane.js";import{s as b}from"./ray.js";import{i as x}from"./ElevationProvider.js";import{V as M}from"./ViewingMode.js";import{i as B}from"./spatialReferenceSupport.js";function G(t,e,s=function(t){return{operations:t,value:t.create()}}(t)){return s.operations=t,t.copy(e,s.value),s}function U(t,e,s,o){return t.operations.setAltitudeAt(t.value,e,s,o)}function E(t,e,s){return t.operations.elevate(t.value,e,s.value)}const I=n();function L(t,e,s,o,r){return r[0]=a(t,e),r[1]=a(t,s),r[2]=a(t,o),r}function V(t,e,s,o,r){l(s,t),l(Z,e),c(Z,Z),u(o,Z,s),u(r,o,s)}function Y(t,e){return t?j(e):e.isGeographic?g.PlateCarree:e}const Z=n();class F{constructor(t,e,s,o){this.viewingMode=t,this.spatialReference=e,this.unitInMeters=s,this._coordinateSystem=o,this._tmpCoordinateSystem=function(t){const{value:e,operations:s}=t;return{operations:s,value:s.create(e)}}(o)}set extent(t){t&&function(t,e,s){t.operations.setExtent(t.value,e,s.value)}(this._coordinateSystem,t,this._coordinateSystem)}getAltitude(t){return s=t,(e=this._coordinateSystem).operations.altitudeAt(e.value,s);var e,s}setAltitude(t,e,s=t){return U(this._coordinateSystem,s,e,t)}setAltitudeOfTransformation(t,e){!function(t,e,s,r){e!==r&&o(r,e),i(I,r[12],r[13],r[14]),U(t,I,s,I),r[12]=I[0],r[13]=I[1],r[14]=I[2]}(this._coordinateSystem,e,t,e)}worldUpAtPosition(t,e){return o=t,r=e,(s=this._coordinateSystem).operations.axisAt(s.value,o,y.Z,r);var s,o,r}worldBasisAtPosition(t,e,s){return r=t,i=e,n=s,(o=this._coordinateSystem).operations.axisAt(o.value,r,i,n);var o,r,i,n}basisMatrixAtPosition(t,e){const s=this.worldBasisAtPosition(t,y.X,b.get()),o=this.worldBasisAtPosition(t,y.Y,b.get()),i=this.worldBasisAtPosition(t,y.Z,b.get());return r(e,s[0],s[1],s[2],0,o[0],o[1],o[2],0,i[0],i[1],i[2],0,0,0,0,1),e}headingAtPosition(e,s){const o=this.worldUpAtPosition(e,b.get()),r=this.worldBasisAtPosition(e,y.Y,b.get()),i=S(s,r,o);return t(i)}intersectManifoldClosestSilhouette(t,e,s){var o,r,i;return E(this._coordinateSystem,e,this._tmpCoordinateSystem),r=t,i=s,(o=this._tmpCoordinateSystem).operations.intersectRayClosestSilhouette(o.value,r,i),s}intersectManifold(t,e,s){E(this._coordinateSystem,e,this._tmpCoordinateSystem);const o=b.get();return i=t,n=o,(r=this._tmpCoordinateSystem).operations.intersectRay(r.value,i,n)?l(s,o):null;var r,i,n}intersectInfiniteManifold(t,e,s){if(this.viewingMode===M.Global)return this.intersectManifold(t,e,s);E(this._coordinateSystem,e,this._tmpCoordinateSystem);const o=this._tmpCoordinateSystem.value,r=b.get();return P(o.plane,t,r)?l(s,r):null}toRenderCoords(t,e,s){return x(t)?f(t,e,this.spatialReference):d(t,e,s,this.spatialReference)}fromRenderCoords(t,s,o=null){return x(s)?(e(o)&&(s.spatialReference=o),h(t,this.spatialReference,s)):function(t){return m(t)&&t.length>=3}(r=s)||function(t){return(p(t)||Array.isArray(t))&&t.length>=3}(r)?d(t,this.spatialReference,s,o)?s:null:v(t,this.spatialReference,s);var r}static create(t,e){switch(t){case M.Local:return new F(M.Local,e,s(e),G(w,_([0,0,0],[0x4000000000000,0,0],[0,0x4000000000000,0])));case M.Global:return new F(M.Global,e,1,function(t){return G(C,R(0,0,0,A(t).radius))}(e))}}static renderUnitScaleFactor(t,e){return O(t)/O(e)}}function O(t){if(B(t,M.Global))return 1;const e=Y(!1,t);return s(e)}export{F as R,V as c,Y as r,L as v};
