/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{J as e}from"./jsonMap.js";import{a as t,i}from"./maybe.js";import{v as r}from"./unitUtils.js";import{canProjectWithoutEngine as n}from"../geometry/projection.js";import{e as s}from"./extentUtils.js";import{fromJSON as a,isExtent as o,isPolygon as l,isPolyline as m}from"../geometry/support/jsonUtils.js";import{normalizeCentralMeridian as f}from"../geometry/support/normalizeUtils.js";import{e as u,l as c,i as p,W as y}from"../geometry/SpatialReference.js";import{g,q as S,r as R,f as h,h as j,i as w,j as d}from"./featureConversionUtils.js";import{a as x}from"./OptimizedFeature.js";import{c as U,p as F}from"./projectionSupport.js";const M=new e({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),O=Object.freeze({}),N=new x,_=new x,v=new x,J={esriGeometryPoint:h,esriGeometryPolyline:j,esriGeometryPolygon:w,esriGeometryMultipoint:d};function P(e,i,r,n=e.hasZ,s=e.hasM){if(t(i))return null;const a=e.hasZ&&n,o=e.hasM&&s;if(r){const t=S(v,i,e.hasZ,e.hasM,"esriGeometryPoint",r,n,s);return h(t,a,o)}return h(i,a,o)}function b(e,r,n,s,a,o,l=r,m=n){const f=r&&l,u=n&&m,c=i(s)?"coords"in s?s:s.geometry:null;if(t(c))return null;if(a){let t=g(_,c,r,n,e,a,l,m);return o&&(t=S(v,t,f,u,e,o)),J[e]?.(t,f,u)??null}if(o){const t=S(v,c,r,n,e,o,l,m);return J[e]?.(t,f,u)??null}return R(N,c,r,n,l,m),J[e]?.(N,f,u)??null}async function z(e,t,i){const{outFields:r,orderByFields:n,groupByFieldsForStatistics:s,outStatistics:a}=e;if(r)for(let e=0;e<r.length;e++)r[e]=r[e].trim();if(n)for(let e=0;e<n.length;e++)n[e]=n[e].trim();if(s)for(let e=0;e<s.length;e++)s[e]=s[e].trim();if(a)for(let e=0;e<a.length;e++)a[e].onStatisticField&&(a[e].onStatisticField=a[e].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),G(e,t,i)}async function G(e,i,n){if(!e)return null;let{where:l}=e;if(e.where=l=l&&l.trim(),(!l||/^1 *= *1$/.test(l)||i&&i===l)&&(e.where=null),!e.geometry)return e;let m=await async function(e){const{distance:t,units:i}=e,n=e.geometry;if(null==t||"vertexAttributes"in n)return n;const s=n.spatialReference,a=i?M.fromJSON(i):r(s),o=s&&(c(s)||p(s))?n:await U(s,y).then((()=>F(n,y)));return(await async function(){return(await import("./geometryEngineJSON.js").then((e=>e.g))).geodesicBuffer}())(o.spatialReference,o,t,a)}(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;m=s(m),m.spatialReference=t}if(m){await U(m.spatialReference,n),m=function(e,t){const i=e.spatialReference;return q(e,t)&&o(e)?{spatialReference:i,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}(m,n);const i=(await f(a(m)))[0];if(t(i))throw O;const r="quantizationParameters"in e&&e.quantizationParameters?.tolerance||"maxAllowableOffset"in e&&e.maxAllowableOffset||0,s=r&&q(m,n)?{densificationStep:8*r}:void 0,l=i.toJSON(),u=await F(l,l.spatialReference,n,s);if(!u)throw O;u.spatialReference=n,e.geometry=u}return e}function q(e,t){if(!e)return!1;const i=e.spatialReference;return(o(e)||l(e)||m(e))&&!u(i,t)&&!n(i,t)}function A(e){return e&&B in e?JSON.parse(JSON.stringify(e,Z)):e}const B="_geVersion",Z=(e,t)=>e!==B?t:void 0;export{O as Q,G as a,A as c,b as g,z as n,P as t};
