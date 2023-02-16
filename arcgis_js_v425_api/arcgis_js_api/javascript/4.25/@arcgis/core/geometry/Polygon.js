/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{e as n,clone as e}from"../core/lang.js";import{a as r,i as s}from"../chunks/maybe.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import{w as l}from"../chunks/writer.js";import a,{i as h,p as c}from"./Extent.js";import u from"./Geometry.js";import f from"./Point.js";import g,{g as p}from"./SpatialReference.js";import{g as m}from"../chunks/extentUtils.js";import{project as y}from"./support/webMercatorUtils.js";import{u as x}from"../chunks/zmUtils.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/tracking.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../chunks/reader.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/Ellipsoid.js";function j(t){if(!t)return null;if(Array.isArray(t))return t;const n=t.hasZ,e=t.hasM;if("point"===t.type)return e&&n?[t.x,t.y,t.z,t.m]:n?[t.x,t.y,t.z]:e?[t.x,t.y,t.m]:[t.x,t.y];if("polygon"===t.type)return t.rings.slice(0);if("polyline"===t.type)return t.paths.slice(0);if("multipoint"===t.type)return t.points.slice(0);if("extent"===t.type){const n=t.clone().normalize();if(!n)return null;let e=!1,r=!1;return n.forEach((t=>{t.hasZ&&(e=!0),t.hasM&&(r=!0)})),n.map((t=>{const n=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]];if(e&&t.hasZ){const e=.5*(t.zmax-t.zmin);for(let t=0;t<n.length;t++)n[t].push(e)}if(r&&t.hasM){const e=.5*(t.mmax-t.mmin);for(let t=0;t<n.length;t++)n[t].push(e)}return n}))}return null}function d(t,n){const e=n[0]-t[0],r=n[1]-t[1];if(t.length>2&&n.length>2){const s=t[2]-n[2];return Math.sqrt(e*e+r*r+s*s)}return Math.sqrt(e*e+r*r)}function R(t,n,e){const r=t[0]+e*(n[0]-t[0]),s=t[1]+e*(n[1]-t[1]);return t.length>2&&n.length>2?[r,s,t[2]+e*(n[2]-t[2])]:[r,s]}function M(t,n,e,r){const[s,i]=n,[o,l]=e[r],[a,h]=e[r+1],c=a-o,u=h-l,f=c*c+u*u,g=(s-o)*c+(i-l)*u,p=Math.min(1,Math.max(0,g/f));return t[0]=o+c*p,t[1]=l+u*p,t}function k(t,n,e){const r=e.rings;let s,i,o=!1,l=1/0;for(let e=0;e<r.length;e++){const a=r[e];for(let e=0,r=a.length-1;e<a.length;r=e++)s=a[e],i=a[r],s[1]>n!=i[1]>n&&t<(i[0]-s[0])*(n-s[1])/(i[1]-s[1])+s[0]&&(o=!o),l=Math.min(l,w(t,n,s,i))}return 0===l?0:(o?1:-1)*Math.sqrt(l)}function w(t,n,e,r){let s=e[0],i=e[1],o=r[0]-s,l=r[1]-i;if(0!==o||0!==l){const e=((t-s)*o+(n-i)*l)/(o*o+l*l);e>1?(s=r[0],i=r[1]):e>0&&(s+=o*e,i+=l*e)}return o=t-s,l=n-i,o*o+l*l}function v(t,n){return R(t,n,.5)}function Z(t){const n=t.length;let e=0;for(let r=0;r<n-1;++r)e+=d(t[r],t[r+1]);return e}function z(t,n){if(n<=0)return t[0];const e=t.length;let r=0;for(let s=0;s<e-1;++s){const e=d(t[s],t[s+1]);if(n-r<e){const i=(n-r)/e;return R(t[s],t[s+1],i)}r+=e}return t[e-1]}function A(t,n,e){const r=t.length;let s=0,i=0,o=0;for(let l=0;l<r;l++){const a=t[l],h=t[(l+1)%r];let c=2;s+=a[0]*h[1]-h[0]*a[1],a.length>2&&h.length>2&&e&&(i+=a[0]*h[2]-h[0]*a[2],c=3),a.length>c&&h.length>c&&n&&(o+=a[0]*h[c]-h[0]*a[c])}return s<=0&&i<=0&&o<=0}function S(t){const e=t.length;return e>2&&n(t[0],t[e-1])}function N(t){if("rings"in t&&(P(t),t.rings.length>0&&!A(t.rings[0],t.hasM??!1,t.hasZ??!1)))for(const n of t.rings)n.reverse()}function P(t){if("rings"in t)for(const n of t.rings)S(n)||n.push(n[0].slice())}function b(t){return"polygon"!==t.type&&"polyline"!==t.type||I("polygon"===t.type?t.rings:t.paths,t.spatialReference),t}function I(t,n){const e=p(n);if(!e)return;const r=e.valid[0],s=e.valid[1],i=s-r;for(const n of t){let t=1/0,e=-1/0;for(const i of n){const n=O(i[0],r,s);t=Math.min(t,n),e=Math.max(e,n),i[0]=n}const o=e-t;i-o<o&&n.forEach((t=>{t[0]<0&&(t[0]+=i)}))}}function O(t,n,e){const r=e-n;return t<n?e-(n-t)%r:t>e?n+(t-n)%r:t}function C(t){if(!t||t.length<3)return 0;let n=0;const e=t.length-1;for(let r=0;r<e;r++)n+=(t[r][0]-t[r+1][0])*(t[r][1]+t[r+1][1]);return n+=(t[e][0]-t[0][0])*(t[e][1]+t[0][1]),-.5*n}function _(t){return t?t.hasZ?[t.xmax-t.xmin/2,t.ymax-t.ymin/2,t.zmax-t.zmin/2]:[t.xmax-t.xmin/2,t.ymax-t.ymin/2]:null}function q(t){return t?E(t.rings,t.hasZ??!1):null}function E(t,n){if(!t||!t.length)return null;const e=[],r=[],s=n?[1/0,-1/0,1/0,-1/0,1/0,-1/0]:[1/0,-1/0,1/0,-1/0];for(let e=0,i=t.length;e<i;e++){const i=U(t[e],n,s);i&&r.push(i)}if(r.sort(((t,e)=>{let r=t[2]-e[2];return 0===r&&n&&(r=t[4]-e[4]),r})),r.length&&(e[0]=r[0][0],e[1]=r[0][1],n&&(e[2]=r[0][3]),(e[0]<s[0]||e[0]>s[1]||e[1]<s[2]||e[1]>s[3]||n&&(e[2]<s[4]||e[2]>s[5]))&&(e.length=0)),!e.length){const r=t[0]&&t[0].length?function(t,n){const e=n?[0,0,0]:[0,0],r=n?[0,0,0]:[0,0];let s=0,i=0,o=0,l=0;for(let a=0,h=t.length;a<h-1;a++){const h=t[a],c=t[a+1];if(h&&c){e[0]=h[0],e[1]=h[1],r[0]=c[0],r[1]=c[1],n&&h.length>2&&c.length>2&&(e[2]=h[2],r[2]=c[2]);const t=d(e,r);if(t){s+=t;const e=v(h,c);i+=t*e[0],o+=t*e[1],n&&e.length>2&&(l+=t*e[2])}}}return s>0?n?[i/s,o/s,l/s]:[i/s,o/s]:t.length?t[0]:null}(t[0],n):null;if(!r)return null;e[0]=r[0],e[1]=r[1],n&&r.length>2&&(e[2]=r[2])}return e}function U(t,n,e){let r=0,s=0,i=0,o=0,l=0;const a=t.length?t[0][0]:0,h=t.length?t[0][1]:0,c=t.length&&n?t[0][2]:0;for(let u=0;u<t.length;u++){const f=t[u],g=t[(u+1)%t.length],[p,m,y]=f,x=p-a,j=m-h,[d,R,M]=g,k=d-a,w=R-h,v=x*w-k*j;if(o+=v,r+=(x+k)*v,s+=(j+w)*v,n&&f.length>2&&g.length>2){const t=y-c,n=M-c,e=x*n-k*t;i+=(t+n)*e,l+=e}p<e[0]&&(e[0]=p),p>e[1]&&(e[1]=p),m<e[2]&&(e[2]=m),m>e[3]&&(e[3]=m),n&&(y<e[4]&&(e[4]=y),y>e[5]&&(e[5]=y))}if(o>0&&(o*=-1),l>0&&(l*=-1),!o)return null;o*=.5,l*=.5;const u=[r/(6*o)+a,s/(6*o)+h,o];return n&&(e[4]===e[5]||0===l?(u[3]=(e[4]+e[5])/2,u[4]=0):(u[3]=i/(6*l)+c,u[4]=l)),u}function J(t){if(!t||!t.rings)return null;const{rings:n}=t;let e=0;for(let t=0;t<n.length;t++)e+=C(n[t]);if(e<1e-6)return E(n,!1);const r=[0,0],s=n[0][0];for(let t=0;t<n.length;t++)T(r,s,n[t]);return r[0]*=1/e,r[1]*=1/e,r[0]+=s[0],r[1]+=s[1],r}function T(t,n,e){if(!t||!e||e.length<3)return null;const r=e[0],s=[0,0],i=[e[1][0]-r[0],e[1][1]-r[1]];let o;for(let n=2;n<e.length;n++)s[0]=e[n][0]-r[0],s[1]=e[n][1]-r[1],o=.16666666666666666*(s[0]*i[1]-s[1]*i[0]),t[0]+=o*(i[0]+s[0]),t[1]+=o*(i[1]+s[1]),i[0]=s[0],i[1]=s[1];const l=C(e),a=[r[0],r[1]];return a[0]-=n[0],a[1]-=n[1],a[0]*=l,a[1]*=l,t[0]+=a[0],t[1]+=a[1],t}var G;function D(t){return!Array.isArray(t[0])}let H=G=class extends u{constructor(...t){super(...t),this.rings=[],this.type="polygon"}static fromExtent(t){const n=t.clone().normalize(),e=t.spatialReference;let r=!1,s=!1;for(const t of n)t.hasZ&&(r=!0),t.hasM&&(s=!0);const i={rings:n.map((t=>{const n=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]];if(r&&t.hasZ){const e=t.zmin+.5*(t.zmax-t.zmin);for(let t=0;t<n.length;t++)n[t].push(e)}if(s&&t.hasM){const e=t.mmin+.5*(t.mmax-t.mmin);for(let t=0;t<n.length;t++)n[t].push(e)}return n})),spatialReference:e};return r&&(i.hasZ=!0),s&&(i.hasM=!0),new G(i)}normalizeCtorArgs(t,n){let e,r,s=null,i=null;return t&&!Array.isArray(t)?(s=t.rings?t.rings:null,n||(t.spatialReference?n=t.spatialReference:t.rings||(n=t)),e=t.hasZ,r=t.hasM):s=t,s=s||[],n=n||g.WGS84,s.length&&s[0]&&null!=s[0][0]&&"number"==typeof s[0][0]&&(s=[s]),i=s[0]&&s[0][0],i&&(void 0===e&&void 0===r?(e=i.length>2,r=i.length>3):void 0===e?e=r?i.length>3:i.length>2:void 0===r&&(r=e?i.length>3:i.length>2)),{rings:s,spatialReference:n,hasZ:e,hasM:r}}get cache(){return this.commitProperty("rings"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get centroid(){const t=q(this);if(!t||isNaN(t[0])||isNaN(t[1])||this.hasZ&&isNaN(t[2]))return null;const n=new f;return n.x=t[0],n.y=t[1],n.spatialReference=this.spatialReference,this.hasZ&&(n.z=t[2]),n}get extent(){const{spatialReference:t}=this,n=m(this);if(!n)return null;const e=new a(n);return e.spatialReference=t,e}get isSelfIntersecting(){return h(this.rings)}writeRings(t,n){n.rings=e(this.rings)}addRing(t){if(!t)return;const n=this.rings,e=n.length;if(D(t)){const r=[];for(let n=0,e=t.length;n<e;n++)r[n]=t[n].toArray();n[e]=r}else n[e]=t.concat();return this.notifyChange("rings"),this}clone(){const t=new G;return t.spatialReference=this.spatialReference,t.rings=e(this.rings),t.hasZ=this.hasZ,t.hasM=this.hasM,t}equals(t){if(this===t)return!0;if(r(t))return!1;const e=this.spatialReference,i=t.spatialReference;if(s(e)!==s(i))return!1;if(s(e)&&s(i)&&!e.equals(i))return!1;if(this.rings.length!==t.rings.length)return!1;const o=([t,n,e,r],[s,i,o,l])=>t===s&&n===i&&(null==e&&null==o||e===o)&&(null==r&&null==l||r===l);for(let e=0;e<this.rings.length;e++){const r=this.rings[e],s=t.rings[e];if(!n(r,s,o))return!1}return!0}contains(t){if(!t)return!1;const n=y(t,this.spatialReference);return c(this,s(n)?n:t)}isClockwise(t){let n;return n=D(t)?t.map((t=>this.hasZ?this.hasM?[t.x,t.y,t.z,t.m]:[t.x,t.y,t.z]:[t.x,t.y])):t,A(n,this.hasM,this.hasZ)}getPoint(t,n){if(!this._validateInputs(t,n))return null;const e=this.rings[t][n],r=this.hasZ,s=this.hasM;return r&&!s?new f(e[0],e[1],e[2],void 0,this.spatialReference):s&&!r?new f(e[0],e[1],void 0,e[2],this.spatialReference):r&&s?new f(e[0],e[1],e[2],e[3],this.spatialReference):new f(e[0],e[1],this.spatialReference)}insertPoint(t,n,e){return this._validateInputs(t,n,!0)?(x(this,e),Array.isArray(e)||(e=e.toArray()),this.rings[t].splice(n,0,e),this.notifyChange("rings"),this):this}removePoint(t,n){if(!this._validateInputs(t,n))return null;const e=new f(this.rings[t].splice(n,1)[0],this.spatialReference);return this.notifyChange("rings"),e}removeRing(t){if(!this._validateInputs(t,null))return null;const n=this.rings.splice(t,1)[0],e=this.spatialReference,r=n.map((t=>new f(t,e)));return this.notifyChange("rings"),r}setPoint(t,n,e){return this._validateInputs(t,n)?(x(this,e),Array.isArray(e)||(e=e.toArray()),this.rings[t][n]=e,this.notifyChange("rings"),this):this}_validateInputs(t,n,e=!1){if(null==t||t<0||t>=this.rings.length)return!1;if(null!=n){const r=this.rings[t];if(e&&(n<0||n>r.length))return!1;if(!e&&(n<0||n>=r.length))return!1}return!0}toJSON(t){return this.write({},t)}};t([i({readOnly:!0})],H.prototype,"cache",null),t([i({readOnly:!0})],H.prototype,"centroid",null),t([i({readOnly:!0})],H.prototype,"extent",null),t([i({readOnly:!0})],H.prototype,"isSelfIntersecting",null),t([i({type:[[[Number]]],json:{write:{isRequired:!0}}})],H.prototype,"rings",void 0),t([l("rings")],H.prototype,"writeRings",null),H=G=t([o("esri.geometry.Polygon")],H),H.prototype.toJSON.isDefaultToJSON=!0;const L=H;export{Z as a,j as b,P as c,z as d,L as default,q as e,_ as f,d as g,C as h,A as i,U as j,k,N as l,b as m,I as n,v as o,M as p,E as r,O as u,J as w};