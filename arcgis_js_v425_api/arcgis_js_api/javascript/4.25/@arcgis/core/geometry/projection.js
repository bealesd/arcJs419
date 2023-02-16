/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import n from"../core/Error.js";import{c as e,d as t,r,a as s}from"../chunks/mathUtils.js";import{a as o,u as l,i as u}from"../chunks/maybe.js";import{throwIfAborted as a,waitTick as i}from"../core/promiseUtils.js";import{e as c}from"../chunks/unitUtils.js";import{t as E}from"../chunks/tracking.js";import{S as C}from"../chunks/SimpleObservable.js";import{f as R,i as f,t as A}from"../chunks/mat4.js";import{c as _,a as S,b as p,n as P,l as L,d as M,s as O}from"../chunks/vec3.js";import N from"./Extent.js";import h from"./Multipoint.js";import{l as m,p as G,i as W}from"../chunks/pe.js";import T from"./Point.js";import d from"./Polygon.js";import F from"./Polyline.js";import{S as I,W as j,a as H,b as g}from"../chunks/projectionEllipsoid.js";import{a as k}from"../chunks/aaBoundingRect.js";import{e as B,a as y,m as U}from"../chunks/Ellipsoid.js";import{e as w}from"../chunks/geodesicConstants.js";import x from"./support/GeographicTransformation.js";import{e as K,j as b,a as z,i as q,k as v,S as Z,f as V,h as X}from"./SpatialReference.js";import{g as J}from"../chunks/zscale.js";import"../core/lang.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/common.js";import"../chunks/jsonMap.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/get.js";import"../chunks/metadata.js";import"../chunks/ArrayPool.js";import"../core/accessorSupport/decorators/subclass.js";import"../chunks/ensureType.js";import"../core/accessorSupport/decorators/property.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/tslib.es6.js";import"./Geometry.js";import"../core/JSONSupport.js";import"../chunks/reader.js";import"../chunks/writer.js";import"./support/webMercatorUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/zmUtils.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/extentUtils.js";import"./support/GeographicTransformationStep.js";let D=null,Q=null,Y=null,$={};const nn=new C;function en(){return!!D&&W()}function tn(n){return o(Y)&&(Y=Promise.all([m(),import("../chunks/geometryEngineBase.js").then((n=>n.g)),import("../chunks/hydrated.js")])),Y.then((([,e,{hydratedAdapter:t}])=>{a(n),Q=t,D=e.default,D._enableProjection(G),nn.notify()}))}function rn(n,e,t=null,r=null){return Array.isArray(n)?0===n.length?[]:sn(Q,n,n[0].spatialReference,e,t,r):sn(Q,[n],n.spatialReference,e,t,r)[0]}function sn(n,e,t,r,s=null,a=null){if(o(t)||o(r))return e;if(An(t,r,s))return e.map((n=>l(pn(n,t,r))));if(o(s)){const n=x.cacheKey(t,r);void 0!==$[n]?s=$[n]:(s=un(t,r,void 0),o(s)&&(s=new x),$[n]=s)}if(o(D)||o(n))throw new cn;return u(a)?D._project(n,e,t,r,s,a):D._project(n,e,t,r,s)}function on(n,e){const t=ln([n],e);return u(t.pending)?{pending:t.pending,geometry:null}:u(t.geometries)?{pending:null,geometry:t.geometries[0]}:{pending:null,geometry:null}}function ln(n,e){if(!en())for(const t of n)if(u(t)&&!K(t.spatialReference,e)&&b(t.spatialReference)&&b(e)&&!An(t.spatialReference,e))return E(nn),{pending:tn(),geometries:null};return{pending:null,geometries:n.map((n=>o(n)?null:K(n.spatialReference,e)?n:b(n.spatialReference)&&b(e)?fn(n,e):null))}}function un(n,e,t=null){if(o(n)||o(e))return null;if(o(D)||o(Q))throw new cn;const r=D._getTransformation(Q,n,e,t,t?.spatialReference);return null!==r?x.fromGE(r):null}function an(n,e,t=null){if(o(D)||o(Q))throw new cn;const r=D._getTransformationBySuitability(Q,n,e,t,t?.spatialReference);if(null!==r){const n=[];for(const e of r)n.push(x.fromGE(e));return n}return[]}class cn extends n{constructor(){super("projection:not-loaded","projection engine not fully loaded yet, please call load()")}}var En;function Cn(){D=null,Q=null,Y=null,$={}}!function(n){n[n.UNKNOWN=0]="UNKNOWN",n[n.SPHERICAL_ECEF=1]="SPHERICAL_ECEF",n[n.WGS84=2]="WGS84",n[n.WEB_MERCATOR=3]="WEB_MERCATOR",n[n.WGS84_ECEF=4]="WGS84_ECEF",n[n.CGCS2000=5]="CGCS2000",n[n.WGS84_COMPARABLE_LON_LAT=6]="WGS84_COMPARABLE_LON_LAT",n[n.SPHERICAL_MARS_PCPF=7]="SPHERICAL_MARS_PCPF",n[n.GCSMARS2000=8]="GCSMARS2000",n[n.SPHERICAL_MOON_PCPF=9]="SPHERICAL_MOON_PCPF",n[n.GCSMOON2000=10]="GCSMOON2000",n[n.LON_LAT=11]="LON_LAT",n[n.PLATE_CARREE=12]="PLATE_CARREE"}(En||(En={}));const Rn={get loadPromise(){return Y}};function fn(n,e){try{const t=rn(n,e);if(null==t)return null;"xmin"in n&&"xmin"in t&&(t.zmin=n.zmin,t.zmax=n.zmax);const r=J(t.type,n.spatialReference,e);return u(r)&&r(t),t}catch(n){if(!(n instanceof cn))throw n;return null}}function An(n,e,t){return!t&&(!!K(n,e)||b(n)&&b(e)&&!!he(n,e,de))}async function _n(n,e,t,r){if(en())return i(r);if(Array.isArray(n)){for(const{source:e,dest:t,geographicTransformation:s}of n)if(!An(e,t,s))return tn(r)}else if(!An(n,e,t))return tn(r);return i(r)}function Sn(n,e){switch(he(n,e,de)){case Dn:return"copy3";case Ce:return"wgs84ToSphericalECEF";case ee:return"wgs84ToWebMercator";case se:return"wgs84ToPlateCarree";case Pe:return"wgs84ToWGS84ECEF";case Qn:return"webMercatorToWGS84";case Yn:return"webMercatorToSphericalECEF";case $n:return"webMercatorToWGS84ECEF";case le:return"webMercatorToPlateCarree";case Le:return"wgs84ECEFToWGS84";case Me:return"wgs84ECEFToSphericalECEF";case Oe:return"wgs84ECEFToWebMercator";case _e:return"sphericalECEFToWGS84";case Se:return"sphericalECEFToWebMercator";case Ae:return"sphericalMarsPCPFToMars2000";case fe:return"sphericalMoonPCPFToMoon2000";case pe:return"sphericalECEFToWGS84ECEF";case Ee:return"mars2000ToSphericalPCPF";case ce:return"moon2000ToSphericalPCPF";default:return null}}function pn(n,e,t){return n?"x"in n?Ln(n,e,new T,t,0):"xmin"in n?Fn(n,e,new N,t,0):"rings"in n?Tn(n,e,new d,t,0):"paths"in n?hn(n,e,new F,t,0):"points"in n?On(n,e,new h,t,0):null:null}function Pn(n,e,t=e.spatialReference,r=0){return u(t)&&u(n.spatialReference)&&u(Ln(n,n.spatialReference,e,t,r))}function Ln(n,e,t,r,s){Be[0]=n.x,Be[1]=n.y;const o=n.z;return Be[2]=void 0!==o?o:s,Un(Be,e,0,Be,r,0,1)?(t.x=Be[0],t.y=Be[1],t.spatialReference=r,void 0===o?(t.z=void 0,t.hasZ=!1):(t.z=Be[2],t.hasZ=!0),void 0===n.m?(t.m=void 0,t.hasM=!1):(t.m=n.m,t.hasM=!0),t):null}function Mn(n,e,t=e.spatialReference,r=0){return u(n.spatialReference)&&u(t)&&u(On(n,n.spatialReference,e,t,r))}function On(n,e,t,r,s){const{points:o,hasZ:l,hasM:u}=n,a=[],i=o.length,c=[];for(const n of o)c.push(n[0],n[1],l?n[2]:s);if(!Un(c,e,0,c,r,0,i))return null;for(let n=0;n<i;++n){const e=3*n,t=c[e],r=c[e+1];l&&u?a.push([t,r,c[e+2],o[n][3]]):l?a.push([t,r,c[e+2]]):u?a.push([t,r,o[n][2]]):a.push([t,r])}return t.points=a,t.spatialReference=r,t.hasZ=l,t.hasM=u,t}function Nn(n,e,t=e.spatialReference,r=0){return u(n.spatialReference)&&u(t)&&u(hn(n,n.spatialReference,e,t,r))}function hn(n,e,t,r,s){const{paths:o,hasZ:l,hasM:u}=n,a=[];return xn(o,l??!1,u??!1,e,a,r,s)?(t.paths=a,t.spatialReference=r,t.hasZ=l,t.hasM=u,t):null}function mn({hasZ:n,spatialReference:e,paths:t},r,s=0){const l=Jn(e,We),u=Ne[l][En.WGS84_COMPARABLE_LON_LAT];if(o(u))return!1;const a=n?n=>n:n=>O(Be,n[0],n[1],s);for(const n of t){const e=[];for(const t of n){const n=[0,0,s];u(a(t),0,n,0),e.push(n)}r.push(e)}return!0}function Gn({hasZ:n,spatialReference:e,rings:t},r,s=0){const l=Jn(e,We),u=Ne[l][En.WGS84_COMPARABLE_LON_LAT];if(o(u))return!1;const a=n?n=>n:n=>O(Be,n[0],n[1],s);for(const n of t){const e=[];for(const t of n){const n=[0,0,s];u(a(t),0,n,0),e.push(n)}r.push(e)}return!0}function Wn(n,e,t=e.spatialReference,r=0){return u(n.spatialReference)&&u(t)&&u(Tn(n,n.spatialReference,e,t,r))}function Tn(n,e,t,r,s){const{rings:o,hasZ:l,hasM:u}=n,a=[];return xn(o,l??!1,u??!1,e,a,r,s)?(t.rings=a,t.spatialReference=r,t.hasZ=l,t.hasM=u,t):null}function dn(n,e,t=e.spatialReference,r=0){return u(n.spatialReference)&&u(t)&&u(Fn(n,n.spatialReference,e,t,r))}function Fn(n,e,t,r,s){const{xmin:o,ymin:l,xmax:u,ymax:a,hasZ:i,hasM:c}=n;return gn(o,l,i?n.zmin:s,e,Be,r)?(t.xmin=Be[0],t.ymin=Be[1],i&&(t.zmin=Be[2]),gn(u,a,i?n.zmax:s,e,Be,r)?(t.xmax=Be[0],t.ymax=Be[1],i&&(t.zmax=Be[2]),c&&(t.mmin=n.mmin,t.mmax=n.mmax),t.spatialReference=r,t):null):null}function In(n,e,t){if(o(e)||o(t))return null;const r=new T({spatialReference:t});return Un(n,e,0,Be,t,0,1)?(r.x=Be[0],r.y=Be[1],r.z=Be[2],r):null}function jn(n,e,t){return Un(n,e,0,Be,t.spatialReference,0,1)?(t.x=Be[0],t.y=Be[1],t.z=Be[2],t):null}function Hn(n,e,t,r=0){Be[0]=n.x,Be[1]=n.y;const s=n.z;return Be[2]=void 0!==s?s:r,Un(Be,n.spatialReference,0,e,t,0,1)}function gn(n,e,t,r,s,o){return He[0]=n,He[1]=e,He[2]=t,Un(He,r,0,s,o,0,1)}function kn(n,e,t,r){return!(o(e)||o(r)||n.length<2)&&(2===n.length&&(He[0]=n[0],He[1]=n[1],He[2]=0,n=He),Un(n,e,0,t,r,0,1))}function Bn(n,e){Be[0]=n.x,Be[1]=n.y;const t=n.z;return Be[2]=void 0!==t?t:0,yn(Be,n.spatialReference,e)}function yn(n,e,t){return function(n,e,t){if(o(e))return!1;const r=Jn(e,We),s=Ne[r][En.WGS84_COMPARABLE_LON_LAT];return!o(s)&&(s(n,0,He,0),t!==He&&(t[0]=He[0],t[1]=He[1],t.length>2&&(t[2]=He[2])),!0)}(n,e,t)}function Un(n,e,t,r,s,l,u=1){const a=he(e,s,de);if(o(a))return!1;if(a===Dn){if(n===r&&t===l)return!0;const e=t+3*u;for(let s=t,o=l;s<e;s++,o++)r[o]=n[s];return!0}const i=t+3*u;for(let e=t,s=l;e<i;e+=3,s+=3)a(n,e,r,s);return!0}function wn(n,e,t,r,s){_(Be,n),S(ye,n,e),kn(Be,t,Be,s),kn(ye,t,ye,s),p(r,ye,Be),P(r,r)}function xn(n,e,t,r,s,o,l=0){const u=new Array;for(const t of n)for(const n of t)u.push(n[0],n[1],e?n[2]:l);if(!Un(u,r,0,u,o,0,u.length/3))return!1;let a=0;s.length=0;for(const r of n){const n=new Array;for(const s of r)e&&t?n.push([u[a++],u[a++],u[a++],s[3]]):e?n.push([u[a++],u[a++],u[a++]]):t?(n.push([u[a++],u[a++],s[2]]),a++):(n.push([u[a++],u[a++]]),a++);s.push(n)}return!0}function Kn(n,e,t,r){if(o(e)||o(r))return!1;const s=me(e,r,Fe);if(s.projector===Dn)return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],!0;if(o(s.projector))return!1;const{source:l,dest:a}=s;if(a.spatialReferenceId===En.WEB_MERCATOR){const e=Ne[l.spatialReferenceId][En.WGS84];return!o(e)&&(e(n,0,ge,0),ee(ge,0,t,0),t[3]=bn(ge[1],n[2],n[3],B.radius),!0)}if(l.spatialReferenceId!==En.WGS84&&l.spatialReferenceId!==En.CGCS2000||a.spatialReferenceId!==En.PLATE_CARREE){s.projector(n,0,t,0);const e=l.metersPerUnit??1,r=a.metersPerUnit??1;t[3]=n[3]*e/r}else{const e=Ne[l.spatialReferenceId][En.SPHERICAL_ECEF],r=Ne[En.SPHERICAL_ECEF][En.PLATE_CARREE];let o=n[3];u(e)&&u(r)&&(o=bn(n[1],n[2],n[3],B.radius)),s.projector(n,0,t,0),t[3]=o}return!0}function bn(n,e,t,r){const s=r+e;if(s<r/2||t>s)return Number.MAX_VALUE;const o=Math.abs(Ie*n)+Math.asin(t/s);return o>=Math.PI/2?Number.MAX_VALUE:t/Math.cos(o)}function zn(n,e,t,r){return!(null==n||(K(e,r)?(k(t,n),0):(He[0]=n[0],He[1]=n[1],He[2]=0,!Un(He,e,0,He,r,0,1)||(t[0]=He[0],t[1]=He[1],He[0]=n[2],He[1]=n[3],He[2]=0,!Un(He,e,0,He,r,0,1)||(t[2]=He[0],t[3]=He[1],0)))))}function qn(n,e,t,r){if(o(e)||o(r))return!1;const s=Jn(e,We),l=Jn(r,Te);if(s===l&&s!==En.UNKNOWN||K(e,r))return t[0]=1,t[1]=1,t[2]=1,!0;if(s===En.SPHERICAL_ECEF){const e=L(n),r=e/Math.sqrt(n[0]*n[0]+n[1]*n[1]),s=e/B.radius;if(l===En.WEB_MERCATOR)return t[0]=r*s,t[1]=r*s,t[2]=1,!0;if(l===En.WGS84||l===En.CGCS2000){const n=re;return t[0]=n*r*s,t[1]=n*s,t[2]=1,!0}}else if(s===En.PLATE_CARREE){if(l===En.WGS84||l===En.CGCS2000)return t[0]=re,t[1]=re,t[2]=1,!0;if(l===En.WEB_MERCATOR){const e=n[1]/B.radius;return t[0]=1,t[1]=1/Math.cos(e),t[2]=1,!0}}return!1}function vn(n,e,t,r){if(o(n)||o(r))return!1;const s=Jn(n,We),l=Jn(r,Te);if(s===l&&!Zn(l)&&(s!==En.UNKNOWN||K(n,r)))return R(t,e),!0;if(Zn(l)){const n=Ne[s][En.LON_LAT],r=Ne[En.LON_LAT][l];return!o(n)&&!o(r)&&(n(e,0,ge,0),r(ge,0,ke,0),Vn(Ie*ge[0],Ie*ge[1],t),t[12]=ke[0],t[13]=ke[1],t[14]=ke[2],!0)}if((l===En.WEB_MERCATOR||l===En.PLATE_CARREE)&&(s===En.WGS84||s===En.CGCS2000&&l===En.PLATE_CARREE||s===En.SPHERICAL_ECEF||s===En.WEB_MERCATOR)){const n=Ne[s][En.LON_LAT],r=Ne[En.LON_LAT][l];return!o(n)&&!o(r)&&(n(e,0,ge,0),r(ge,0,ke,0),s===En.SPHERICAL_ECEF?Xn(Ie*ge[0],Ie*ge[1],t):f(t),t[12]=ke[0],t[13]=ke[1],t[14]=ke[2],!0)}return!1}function Zn(n){return n===En.SPHERICAL_ECEF||n===En.SPHERICAL_MARS_PCPF||n===En.SPHERICAL_MOON_PCPF}function Vn(n,e,t){const r=Math.sin(n),s=Math.cos(n),o=Math.sin(e),l=Math.cos(e),u=t;return u[0]=-r,u[4]=-o*s,u[8]=l*s,u[12]=0,u[1]=s,u[5]=-o*r,u[9]=l*r,u[13]=0,u[2]=0,u[6]=l,u[10]=o,u[14]=0,u[3]=0,u[7]=0,u[11]=0,u[15]=1,u}function Xn(n,e,t){return Vn(n,e,t),A(t,t),t}function Jn(n,e){return n?e.spatialReference===n?e.spatialReferenceId:(e.spatialReference=n,"metersPerUnit"in e&&(e.metersPerUnit=c(n,1)),n.wkt===I.wkt?e.spatialReferenceId=En.SPHERICAL_ECEF:z(n)?e.spatialReferenceId=En.WGS84:q(n)?e.spatialReferenceId=En.WEB_MERCATOR:v(n)?e.spatialReferenceId=En.PLATE_CARREE:n.wkt===j.wkt?e.spatialReferenceId=En.WGS84_ECEF:n.wkid===Z.CGCS2000?e.spatialReferenceId=En.CGCS2000:n.wkt===H.wkt?e.spatialReferenceId=En.SPHERICAL_MARS_PCPF:n.wkt===g.wkt?e.spatialReferenceId=En.SPHERICAL_MOON_PCPF:V(n)?e.spatialReferenceId=En.GCSMARS2000:X(n)?e.spatialReferenceId=En.GCSMOON2000:e.spatialReferenceId=En.UNKNOWN):En.UNKNOWN}function Dn(n,e,t,r){n!==t&&(t[r++]=n[e++],t[r++]=n[e++],t[r]=n[e])}function Qn(n,e,t,r){t[r++]=je*(n[e++]/B.radius),t[r++]=je*(Math.PI/2-2*Math.atan(Math.exp(-n[e++]/B.radius))),t[r]=n[e]}function Yn(n,e,t,r){Qn(n,e,t,r),Ce(t,r,t,r)}function $n(n,e,t,r){Qn(n,e,t,r),Pe(t,r,t,r)}function ne(n,t,r,s,o){const l=.4999999*Math.PI,u=e(Ie*n[t+1],-l,l),a=Math.sin(u);r[s++]=Ie*n[t]*o.radius,r[s++]=o.halfSemiMajorAxis*Math.log((1+a)/(1-a)),r[s]=n[t+2]}function ee(n,e,t,r){ne(n,e,t,r,B)}const te=B.radius*Math.PI/180,re=180/(B.radius*Math.PI);function se(n,e,t,r){t[r]=n[e]*te,t[r+1]=n[e+1]*te,t[r+2]=n[e+2]}function oe(n,e,t,r){t[r]=n[e]*re,t[r+1]=n[e+1]*re,t[r+2]=n[e+2]}function le(n,e,t,r){Qn(n,e,t,r),se(t,r,t,r)}function ue(n){if(o(n))return!1;const e=Jn(n,We);return!!Ne[e][En.WGS84_COMPARABLE_LON_LAT]}function ae(n,e,t,r){const s=Math.cos(t);n[0]=Math.cos(e)*s*r,n[1]=Math.sin(e)*s*r,n[2]=Math.sin(t)*r}function ie(n,e,t,r,s){const o=s+n[e+2],l=Ie*n[e+1],u=Ie*n[e],a=Math.cos(l);t[r++]=Math.cos(u)*a*o,t[r++]=Math.sin(u)*a*o,t[r]=Math.sin(l)*o}function ce(n,e,t,r){ie(n,e,t,r,y.radius)}function Ee(n,e,t,r){ie(n,e,t,r,U.radius)}function Ce(n,e,t,r){ie(n,e,t,r,B.radius)}function Re(n,e,t,r,o){const l=n[e],u=n[e+1],a=n[e+2],i=Math.sqrt(l*l+u*u+a*a),c=s(a/(0===i?1:i)),E=Math.atan2(u,l);t[r++]=je*E,t[r++]=je*c,t[r]=i-o}function fe(n,e,t,r){Re(n,e,t,r,y.radius)}function Ae(n,e,t,r){Re(n,e,t,r,U.radius)}function _e(n,e,t,r){Re(n,e,t,r,B.radius)}function Se(n,e,t,r){_e(n,e,t,r),ee(t,r,t,r)}function pe(n,e,t,r){_e(n,e,t,r),Pe(t,r,t,r)}function Pe(n,e,t,r){!function(n,e,t,r,s){const o=Ie*n[e],l=Ie*n[e+1],u=n[e+2],a=Math.sin(l),i=Math.cos(l),c=s.radius/Math.sqrt(1-s.eccentricitySquared*a*a);t[r++]=(c+u)*i*Math.cos(o),t[r++]=(c+u)*i*Math.sin(o),t[r++]=(c*(1-s.eccentricitySquared)+u)*a}(n,e,t,r,B)}function Le(n,e,t,r){const s=w,o=n[e],l=n[e+1],u=n[e+2];let a,i,c,E,C,R,f,A,_,S,p,P,L,M,O,N,h,m,G,W,T;a=Math.abs(u),i=o*o+l*l,c=Math.sqrt(i),E=i+u*u,C=Math.sqrt(E),W=Math.atan2(l,o),R=u*u/E,f=i/E,M=s.a2/C,O=s.a3-s.a4/C,f>.3?(A=a/C*(1+f*(s.a1+M+R*O)/C),G=Math.asin(A),S=A*A,_=Math.sqrt(1-S)):(_=c/C*(1-R*(s.a5-M-f*O)/C),G=Math.acos(_),S=1-_*_,A=Math.sqrt(S)),p=1-B.eccentricitySquared*S,P=B.radius/Math.sqrt(p),L=s.a6*P,M=c-P*_,O=a-L*A,h=_*M+A*O,N=_*O-A*M,m=N/(L/p+h),G+=m,T=h+N*m/2,u<0&&(G=-G),t[r++]=je*W,t[r++]=je*G,t[r]=T}function Me(n,e,t,r){Le(n,e,t,r),Ce(t,r,t,r)}function Oe(n,e,t,r){Le(n,e,t,r),ee(t,r,t,r)}const Ne={[En.WGS84]:{[En.CGCS2000]:null,[En.GCSMARS2000]:null,[En.GCSMOON2000]:null,[En.LON_LAT]:Dn,[En.WGS84_COMPARABLE_LON_LAT]:Dn,[En.SPHERICAL_ECEF]:Ce,[En.SPHERICAL_MARS_PCPF]:null,[En.SPHERICAL_MOON_PCPF]:null,[En.UNKNOWN]:null,[En.WEB_MERCATOR]:ee,[En.PLATE_CARREE]:se,[En.WGS84]:Dn,[En.WGS84_ECEF]:Pe},[En.CGCS2000]:{[En.CGCS2000]:Dn,[En.GCSMARS2000]:null,[En.GCSMOON2000]:null,[En.LON_LAT]:Dn,[En.WGS84_COMPARABLE_LON_LAT]:Dn,[En.SPHERICAL_ECEF]:Ce,[En.SPHERICAL_MARS_PCPF]:null,[En.SPHERICAL_MOON_PCPF]:null,[En.UNKNOWN]:null,[En.WEB_MERCATOR]:null,[En.PLATE_CARREE]:se,[En.WGS84]:null,[En.WGS84_ECEF]:Pe},[En.GCSMARS2000]:{[En.CGCS2000]:null,[En.GCSMARS2000]:Dn,[En.GCSMOON2000]:null,[En.LON_LAT]:Dn,[En.WGS84_COMPARABLE_LON_LAT]:null,[En.SPHERICAL_ECEF]:null,[En.SPHERICAL_MARS_PCPF]:Ee,[En.SPHERICAL_MOON_PCPF]:null,[En.UNKNOWN]:null,[En.WEB_MERCATOR]:null,[En.PLATE_CARREE]:null,[En.WGS84]:null,[En.WGS84_ECEF]:null},[En.GCSMOON2000]:{[En.CGCS2000]:null,[En.GCSMARS2000]:null,[En.GCSMOON2000]:Dn,[En.LON_LAT]:Dn,[En.WGS84_COMPARABLE_LON_LAT]:null,[En.SPHERICAL_ECEF]:null,[En.SPHERICAL_MARS_PCPF]:null,[En.SPHERICAL_MOON_PCPF]:ce,[En.UNKNOWN]:null,[En.WEB_MERCATOR]:null,[En.PLATE_CARREE]:null,[En.WGS84]:null,[En.WGS84_ECEF]:null},[En.WEB_MERCATOR]:{[En.CGCS2000]:null,[En.GCSMARS2000]:null,[En.GCSMOON2000]:null,[En.LON_LAT]:Qn,[En.WGS84_COMPARABLE_LON_LAT]:Qn,[En.SPHERICAL_ECEF]:Yn,[En.SPHERICAL_MARS_PCPF]:null,[En.SPHERICAL_MOON_PCPF]:null,[En.UNKNOWN]:null,[En.WEB_MERCATOR]:Dn,[En.PLATE_CARREE]:le,[En.WGS84]:Qn,[En.WGS84_ECEF]:$n},[En.WGS84_ECEF]:{[En.CGCS2000]:Le,[En.GCSMARS2000]:null,[En.GCSMOON2000]:null,[En.LON_LAT]:Le,[En.WGS84_COMPARABLE_LON_LAT]:Le,[En.SPHERICAL_ECEF]:Me,[En.SPHERICAL_MARS_PCPF]:null,[En.SPHERICAL_MOON_PCPF]:null,[En.UNKNOWN]:null,[En.WEB_MERCATOR]:Oe,[En.PLATE_CARREE]:function(n,e,t,r){Le(n,e,t,r),se(t,r,t,r)},[En.WGS84]:Le,[En.WGS84_ECEF]:Dn},[En.SPHERICAL_ECEF]:{[En.CGCS2000]:_e,[En.GCSMARS2000]:null,[En.GCSMOON2000]:null,[En.LON_LAT]:_e,[En.WGS84_COMPARABLE_LON_LAT]:_e,[En.SPHERICAL_ECEF]:Dn,[En.SPHERICAL_MARS_PCPF]:null,[En.SPHERICAL_MOON_PCPF]:null,[En.UNKNOWN]:null,[En.WEB_MERCATOR]:Se,[En.PLATE_CARREE]:function(n,e,t,r){_e(n,e,t,r),se(t,r,t,r)},[En.WGS84]:_e,[En.WGS84_ECEF]:pe},[En.SPHERICAL_MARS_PCPF]:{[En.CGCS2000]:null,[En.GCSMARS2000]:Ae,[En.GCSMOON2000]:null,[En.LON_LAT]:Ae,[En.WGS84_COMPARABLE_LON_LAT]:null,[En.SPHERICAL_ECEF]:null,[En.SPHERICAL_MARS_PCPF]:Dn,[En.SPHERICAL_MOON_PCPF]:null,[En.UNKNOWN]:null,[En.WEB_MERCATOR]:null,[En.PLATE_CARREE]:null,[En.WGS84]:null,[En.WGS84_ECEF]:null},[En.SPHERICAL_MOON_PCPF]:{[En.CGCS2000]:null,[En.GCSMARS2000]:null,[En.GCSMOON2000]:fe,[En.LON_LAT]:fe,[En.WGS84_COMPARABLE_LON_LAT]:null,[En.SPHERICAL_ECEF]:null,[En.SPHERICAL_MARS_PCPF]:null,[En.SPHERICAL_MOON_PCPF]:Dn,[En.UNKNOWN]:null,[En.WEB_MERCATOR]:null,[En.PLATE_CARREE]:null,[En.WGS84]:null,[En.WGS84_ECEF]:null},[En.UNKNOWN]:{[En.CGCS2000]:null,[En.GCSMARS2000]:null,[En.GCSMOON2000]:null,[En.LON_LAT]:null,[En.WGS84_COMPARABLE_LON_LAT]:null,[En.SPHERICAL_ECEF]:null,[En.SPHERICAL_MARS_PCPF]:null,[En.SPHERICAL_MOON_PCPF]:null,[En.UNKNOWN]:Dn,[En.WEB_MERCATOR]:null,[En.PLATE_CARREE]:null,[En.WGS84]:null,[En.WGS84_ECEF]:null},[En.LON_LAT]:{[En.CGCS2000]:Dn,[En.GCSMARS2000]:Dn,[En.GCSMOON2000]:Dn,[En.LON_LAT]:Dn,[En.WGS84_COMPARABLE_LON_LAT]:Dn,[En.SPHERICAL_ECEF]:Ce,[En.SPHERICAL_MARS_PCPF]:Ee,[En.SPHERICAL_MOON_PCPF]:ce,[En.UNKNOWN]:null,[En.WEB_MERCATOR]:ee,[En.PLATE_CARREE]:se,[En.WGS84]:Dn,[En.WGS84_ECEF]:Pe},[En.WGS84_COMPARABLE_LON_LAT]:{[En.CGCS2000]:null,[En.GCSMARS2000]:null,[En.GCSMOON2000]:null,[En.LON_LAT]:Dn,[En.WGS84_COMPARABLE_LON_LAT]:Dn,[En.SPHERICAL_ECEF]:Ce,[En.SPHERICAL_MARS_PCPF]:null,[En.SPHERICAL_MOON_PCPF]:null,[En.UNKNOWN]:null,[En.WEB_MERCATOR]:null,[En.PLATE_CARREE]:se,[En.WGS84]:Dn,[En.WGS84_ECEF]:Pe},[En.PLATE_CARREE]:{[En.CGCS2000]:oe,[En.GCSMARS2000]:null,[En.GCSMOON2000]:null,[En.LON_LAT]:oe,[En.WGS84_COMPARABLE_LON_LAT]:oe,[En.SPHERICAL_ECEF]:function(n,e,t,r){oe(n,e,t,r),Ce(t,r,t,r)},[En.SPHERICAL_MARS_PCPF]:null,[En.SPHERICAL_MOON_PCPF]:null,[En.UNKNOWN]:null,[En.WEB_MERCATOR]:function(n,e,t,r){oe(n,e,t,r),ee(t,r,t,r)},[En.PLATE_CARREE]:Dn,[En.WGS84]:oe,[En.WGS84_ECEF]:function(n,e,t,r){oe(n,e,t,r),Pe(t,r,t,r)}}};function he(n,e,t=Ge()){return o(n)||o(e)?null:me(n,e,t).projector}function me(n,e,t){if(o(n)||o(e)||t.source.spatialReference===n&&t.dest.spatialReference===e)return t;const r=Jn(n,t.source),s=Jn(e,t.dest);return r===En.UNKNOWN&&s===En.UNKNOWN?K(n,e)?t.projector=Dn:t.projector=null:t.projector=Ne[r][s],t}function Ge(){return{source:{spatialReference:null,spatialReferenceId:En.UNKNOWN,metersPerUnit:1},dest:{spatialReference:null,spatialReferenceId:En.UNKNOWN,metersPerUnit:1},projector:Dn}}const We={spatialReference:null,spatialReferenceId:En.UNKNOWN},Te={spatialReference:null,spatialReferenceId:En.UNKNOWN},de=Ge(),Fe=Ge(),Ie=t(1),je=r(1),He=M(),ge=M(),ke=M(),Be=M(),ye=M();export{ue as canProjectToWGS84ComparableLonLat,An as canProjectWithoutEngine,Vn as computeENUToSphericalPCPFLocalRotation,Xn as computeSphericalPCPFToENULocalRotation,vn as computeTranslationToOriginAndRotation,Sn as getProjectorName,un as getTransformation,an as getTransformations,_n as initializeProjection,en as isLoaded,tn as load,qn as localLinearScaleFactors,ae as lonLatToSphericalPCPF,ne as lonLatToWebMercatorComparable,rn as project,zn as projectBoundingRect,Kn as projectBoundingSphere,Un as projectBuffer,wn as projectDirection,dn as projectExtent,sn as projectMany,Mn as projectMultipoint,on as projectOrLoad,ln as projectOrLoadMany,Pn as projectPoint,Hn as projectPointToVector,Bn as projectPointToWGS84ComparableLonLat,Wn as projectPolygon,Gn as projectPolygonToWGS84ComparableLonLat,Nn as projectPolyline,mn as projectPolylineToWGS84ComparableLonLat,jn as projectVectorToDehydratedPoint,In as projectVectorToPoint,kn as projectVectorToVector,yn as projectVectorToWGS84ComparableLonLat,pn as projectWithoutEngine,gn as projectXYZToVector,Re as sphericalPCPFtoLonLatElevation,Rn as test,fn as tryProjectWithZConversion,Cn as unload};
