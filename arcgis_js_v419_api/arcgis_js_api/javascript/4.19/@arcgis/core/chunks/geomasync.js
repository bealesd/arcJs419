/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import"./tslib.es6.js";import"./ArrayPool.js";import"../core/lang.js";import"./deprecate.js";import"./object.js";import{version as n}from"../kernel.js";import"../config.js";import"./Logger.js";import"./string.js";import"./metadata.js";import"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./Message.js";import"../core/Error.js";import"./ensureType.js";import"../core/accessorSupport/decorators/subclass.js";import"./JSONSupport.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./enumeration.js";import"./reader.js";import"./writer.js";import"./resourceExtension.js";import"../geometry/SpatialReference.js";import"./locale.js";import"./number.js";import"../intl.js";import"../request.js";import"./assets.js";import r from"../geometry/Geometry.js";import t from"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import e from"../geometry/Extent.js";import"./zmUtils.js";import o from"../geometry/Multipoint.js";import i from"../geometry/Polygon.js";import"./extentUtils.js";import s from"../geometry/Polyline.js";import"./typeUtils.js";import{fromJSON as u}from"../geometry/support/jsonUtils.js";import"../geometry.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./domains.js";import"./sizeVariableUtils.js";import"../core/watchUtils.js";import"./fieldType.js";import"./Scheduler.js";import"../core/workers/RemoteClient.js";import"../core/workers/Connection.js";import"../core/workers/workers.js";import{disjoint as l,intersects as a,touches as c,crosses as f,within as m,contains as g,overlaps as p,equals as d,relate as w,intersect as h,union as A,difference as j,symmetricDifference as y,clip as E,cut as I,planarArea as F,geodesicArea as b,planarLength as R,geodesicLength as N,distance as S,densify as x,geodesicDensify as U,generalize as O,buffer as P,geodesicBuffer as M,offset as k,rotate as z,simplify as C,isSimple as L}from"../geometry/geometryEngineAsync.js";import"../layers/support/Field.js";import"./OptimizedFeatureSet.js";import"./featureConversionUtils.js";import"./number3.js";import"./moment.js";import{Q as T,p as Z,L as D,t as J,u as V,x as q,H as v,S as G,z as H,T as Q,U as W,V as X,W as Y,X as $,Y as _,C as B,Z as K,_ as nn,$ as rn}from"./arcadeUtils.js";import"./centroid.js";import"./FeatureSetReader.js";function tn(r){return 0===n.indexOf("4.")?i.fromExtent(r):new i({spatialReference:r.spatialReference,rings:[[[r.xmin,r.ymin],[r.xmin,r.ymax],[r.xmax,r.ymax],[r.xmax,r.ymin],[r.xmin,r.ymin]]]})}function en(n){if(Z(n,2,2),n[0]instanceof r&&n[1]instanceof r);else if(n[0]instanceof r&&null===n[1]);else if(n[1]instanceof r&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new Error("Illegal Argument")}function on(n){"async"===n.mode&&(n.functions.disjoint=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return en(t=T(t)),null===t[0]||null===t[1]||l(t[0],t[1])}))},n.functions.intersects=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return en(t=T(t)),null!==t[0]&&null!==t[1]&&a(t[0],t[1])}))},n.functions.touches=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return en(t=T(t)),null!==t[0]&&null!==t[1]&&c(t[0],t[1])}))},n.functions.crosses=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return en(t=T(t)),null!==t[0]&&null!==t[1]&&f(t[0],t[1])}))},n.functions.within=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return en(t=T(t)),null!==t[0]&&null!==t[1]&&m(t[0],t[1])}))},n.functions.contains=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return en(t=T(t)),null!==t[0]&&null!==t[1]&&g(t[0],t[1])}))},n.functions.overlaps=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return en(t=T(t)),null!==t[0]&&null!==t[1]&&p(t[0],t[1])}))},n.functions.equals=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){return Z(e,2,2),e[0]===e[1]||(e[0]instanceof r&&e[1]instanceof r?d(e[0],e[1]):!(!D(e[0])||!D(e[1]))&&e[0].getTime()===e[1].getTime())}))},n.functions.relate=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=T(e),Z(e,3,3),e[0]instanceof r&&e[1]instanceof r)return w(e[0],e[1],J(e[2]));if(e[0]instanceof r&&null===e[1])return!1;if(e[1]instanceof r&&null===e[0])return!1;if(null===e[0]&&null===e[1])return!1;throw new Error("Illegal Argument")}))},n.functions.intersection=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return en(t=T(t)),null===t[0]||null===t[1]?null:h(t[0],t[1])}))},n.functions.union=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,o){const i=[];if(0===(o=T(o)).length)throw new Error("Function called with wrong number of Parameters");if(1===o.length)if(V(o[0])){const n=T(o[0]);for(let t=0;t<n.length;t++)if(null!==n[t]){if(!(n[t]instanceof r))throw new Error("Illegal Argument");i.push(n[t])}}else{if(!q(o[0])){if(o[0]instanceof r)return v(G(o[0]),t.spatialReference);if(null===o[0])return null;throw new Error("Illegal Argument")}{const n=T(o[0].toArray());for(let t=0;t<n.length;t++)if(null!==n[t]){if(!(n[t]instanceof r))throw new Error("Illegal Argument");i.push(n[t])}}}else for(let n=0;n<o.length;n++)if(null!==o[n]){if(!(o[n]instanceof r))throw new Error("Illegal Argument");i.push(o[n])}return 0===i.length?null:A(i)}))},n.functions.difference=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return en(t=T(t)),null!==t[0]&&null===t[1]?G(t[0]):null===t[0]?null:j(t[0],t[1])}))},n.functions.symmetricdifference=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){return en(t=T(t)),null===t[0]&&null===t[1]?null:null===t[0]?G(t[1]):null===t[1]?G(t[0]):y(t[0],t[1])}))},n.functions.clip=function(t,o){return n.standardFunctionAsync(t,o,(function(n,t,o){if(o=T(o),Z(o,2,2),!(o[1]instanceof e)&&null!==o[1])throw new Error("Illegal Argument");if(null===o[0])return null;if(!(o[0]instanceof r))throw new Error("Illegal Argument");return null===o[1]?null:E(o[0],o[1])}))},n.functions.cut=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=T(e),Z(e,2,2),!(e[1]instanceof s)&&null!==e[1])throw new Error("Illegal Argument");if(null===e[0])return[];if(!(e[0]instanceof r))throw new Error("Illegal Argument");return null===e[1]?[G(e[0])]:I(e[0],e[1])}))},n.functions.area=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,o){if(Z(o,1,2),null===(o=T(o))[0])return 0;if(H(o[0]))return o[0].sumArea(Q(W(o[1],-1)),!1,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(V(o[0])||q(o[0])){const n=X(o[0],t.spatialReference);return null===n?0:F(n,Q(W(o[1],-1)))}if(!(o[0]instanceof r))throw new Error("Illegal Argument");return F(o[0],Q(W(o[1],-1)))}))},n.functions.areageodetic=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,o){if(Z(o,1,2),null===(o=T(o))[0])return 0;if(H(o[0]))return o[0].sumArea(Q(W(o[1],-1)),!0,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(V(o[0])||q(o[0])){const n=X(o[0],t.spatialReference);return null===n?0:b(n,Q(W(o[1],-1)))}if(!(o[0]instanceof r))throw new Error("Illegal Argument");return b(o[0],Q(W(o[1],-1)))}))},n.functions.length=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,o){if(Z(o,1,2),null===(o=T(o))[0])return 0;if(H(o[0]))return o[0].sumLength(Y(W(o[1],-1)),!1,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(V(o[0])||q(o[0])){const n=$(o[0],t.spatialReference);return null===n?0:R(n,Y(W(o[1],-1)))}if(!(o[0]instanceof r))throw new Error("Illegal Argument");return R(o[0],Y(W(o[1],-1)))}))},n.functions.lengthgeodetic=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,o){if(Z(o,1,2),null===(o=T(o))[0])return 0;if(H(o[0]))return o[0].sumLength(Y(W(o[1],-1)),!0,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if(V(o[0])||q(o[0])){const n=$(o[0],t.spatialReference);return null===n?0:N(n,Y(W(o[1],-1)))}if(!(o[0]instanceof r))throw new Error("Illegal Argument");return N(o[0],Y(W(o[1],-1)))}))},n.functions.distance=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,o){o=T(o),Z(o,2,3);let i=o[0];(V(o[0])||q(o[0]))&&(i=_(o[0],t.spatialReference));let s=o[1];if((V(o[1])||q(o[1]))&&(s=_(o[1],t.spatialReference)),!(i instanceof r))throw new Error("Illegal Argument");if(!(s instanceof r))throw new Error("Illegal Argument");return S(i,s,Y(W(o[2],-1)))}))},n.functions.distancegeodetic=function(r,e){return n.standardFunctionAsync(r,e,(function(n,r,e){e=T(e),Z(e,2,3);const o=e[0],i=e[1];if(!(o instanceof t))throw new Error("Illegal Argument");if(!(i instanceof t))throw new Error("Illegal Argument");const u=new s({paths:[],spatialReference:o.spatialReference});return u.addPath([o,i]),N(u,Y(W(e[2],-1)))}))},n.functions.densify=function(t,o){return n.standardFunctionAsync(t,o,(function(n,t,o){if(o=T(o),Z(o,2,3),null===o[0])return null;if(!(o[0]instanceof r))throw new Error("Illegal Argument");const u=B(o[1]);if(isNaN(u))throw new Error("Illegal Argument");if(u<=0)throw new Error("Illegal Argument");return o[0]instanceof i||o[0]instanceof s?x(o[0],u,Y(W(o[2],-1))):o[0]instanceof e?x(tn(o[0]),u,Y(W(o[2],-1))):o[0]}))},n.functions.densifygeodetic=function(t,o){return n.standardFunctionAsync(t,o,(function(n,t,o){if(o=T(o),Z(o,2,3),null===o[0])return null;if(!(o[0]instanceof r))throw new Error("Illegal Argument");const u=B(o[1]);if(isNaN(u))throw new Error("Illegal Argument");if(u<=0)throw new Error("Illegal Argument");return o[0]instanceof i||o[0]instanceof s?U(o[0],u,Y(W(o[2],-1))):o[0]instanceof e?U(tn(o[0]),u,Y(W(o[2],-1))):o[0]}))},n.functions.generalize=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=T(e),Z(e,2,4),null===e[0])return null;if(!(e[0]instanceof r))throw new Error("Illegal Argument");const o=B(e[1]);if(isNaN(o))throw new Error("Illegal Argument");return O(e[0],o,K(W(e[2],!0)),Y(W(e[3],-1)))}))},n.functions.buffer=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=T(e),Z(e,2,3),null===e[0])return null;if(!(e[0]instanceof r))throw new Error("Illegal Argument");const o=B(e[1]);if(isNaN(o))throw new Error("Illegal Argument");return 0===o?G(e[0]):P(e[0],o,Y(W(e[2],-1)))}))},n.functions.buffergeodetic=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=T(e),Z(e,2,3),null===e[0])return null;if(!(e[0]instanceof r))throw new Error("Illegal Argument");const o=B(e[1]);if(isNaN(o))throw new Error("Illegal Argument");return 0===o?G(e[0]):M(e[0],o,Y(W(e[2],-1)))}))},n.functions.offset=function(r,t){return n.standardFunctionAsync(r,t,(function(n,r,t){if(t=T(t),Z(t,2,6),null===t[0])return null;if(!(t[0]instanceof i||t[0]instanceof s))throw new Error("Illegal Argument");const e=B(t[1]);if(isNaN(e))throw new Error("Illegal Argument");const o=B(W(t[4],10));if(isNaN(o))throw new Error("Illegal Argument");const u=B(W(t[5],0));if(isNaN(u))throw new Error("Illegal Argument");return k(t[0],e,Y(W(t[2],-1)),J(W(t[3],"round")).toLowerCase(),o,u)}))},n.functions.rotate=function(o,s){return n.standardFunctionAsync(o,s,(function(n,o,s){s=T(s),Z(s,2,3);let u=s[0];if(null===u)return null;if(!(u instanceof r))throw new Error("Illegal Argument");u instanceof e&&(u=i.fromExtent(u));const l=B(s[1]);if(isNaN(l))throw new Error("Illegal Argument");const a=W(s[2],null);if(null===a)return z(u,l);if(a instanceof t)return z(u,l,a);throw new Error("Illegal Argument")}))},n.functions.centroid=function(u,l){return n.standardFunctionAsync(u,l,(function(n,l,a){if(a=T(a),Z(a,1,1),null===a[0])return null;let c=a[0];if((V(a[0])||q(a[0]))&&(c=_(a[0],u.spatialReference)),null===c)return null;if(!(c instanceof r))throw new Error("Illegal Argument");return c instanceof t?v(G(a[0]),u.spatialReference):c instanceof i?c.centroid:c instanceof s?nn(c):c instanceof o?rn(c):c instanceof e?c.center:null}))},n.functions.multiparttosinglepart=function(l,a){return n.standardFunctionAsync(l,a,(function(n,a,c){c=T(c),Z(c,1,1);const f=[];if(null===c[0])return null;if(!(c[0]instanceof r))throw new Error("Illegal Argument");if(c[0]instanceof t)return[v(G(c[0]),l.spatialReference)];if(c[0]instanceof e)return[v(G(c[0]),l.spatialReference)];return C(c[0]).then((n=>{if(n instanceof i){const r=[],t=[];for(let e=0;e<n.rings.length;e++)if(n.isClockwise(n.rings[e])){const t=u({rings:[n.rings[e]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});r.push(t)}else t.push({ring:n.rings[e],pt:n.getPoint(e,0)});for(let n=0;n<t.length;n++)for(let e=0;e<r.length;e++)if(r[e].contains(t[n].pt)){r[e].addRing(t[n].ring);break}return r}if(n instanceof s){const r=[];for(let t=0;t<n.paths.length;t++){const e=u({paths:[n.paths[t]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});r.push(e)}return r}if(c[0]instanceof o){const n=v(G(c[0]),l.spatialReference);for(let r=0;r<n.points.length;r++)f.push(n.getPoint(r));return f}return null}))}))},n.functions.issimple=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=T(e),Z(e,1,1),null===e[0])return!0;if(!(e[0]instanceof r))throw new Error("Illegal Argument");return L(e[0])}))},n.functions.simplify=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(e=T(e),Z(e,1,1),null===e[0])return null;if(!(e[0]instanceof r))throw new Error("Illegal Argument");return C(e[0])}))})}export{on as registerFunctions};
