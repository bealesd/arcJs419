/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{h as e}from"../core/lang.js";import{g as t}from"./assets.js";let o,r=null;function n(){return!!r}function _(){return!!e("esri-wasm")}function P(){return o||(o=import("./pe-wasm.js").then((function(e){return e.p})).then((({default:e})=>e({locateFile:e=>t(`esri/geometry/support/${e}`)}))).then((e=>{N(e)})),o)}var s,E,i;!function(e){function t(e,t,o){r.ensureCache.prepare();const n=A(o),_=o===n,P=r.ensureFloat64(n),s=r._pe_geog_to_proj(r.getPointer(e),t,P);return s&&d(o,t,P,_),s}function o(e,t,o){return n(e,t,o,0)}function n(e,t,o,n){r.ensureCache.prepare();const _=A(o),P=o===_,s=r.ensureFloat64(_),E=r._pe_proj_to_geog_center(r.getPointer(e),t,s,n);return E&&d(o,t,s,P),E}e.geogToProj=t,e.projGeog=function(e,r,n,_){switch(_){case E.PE_TRANSFORM_P_TO_G:return o(e,r,n);case E.PE_TRANSFORM_G_TO_P:return t(e,r,n)}return 0},e.projToGeog=o,e.projToGeogCenter=n}(s||(s={})),function(e){e.init=function(){e.PE_BUFFER_MAX=r.PeDefs.prototype.PE_BUFFER_MAX,e.PE_NAME_MAX=r.PeDefs.prototype.PE_NAME_MAX,e.PE_MGRS_MAX=r.PeDefs.prototype.PE_MGRS_MAX,e.PE_USNG_MAX=r.PeDefs.prototype.PE_USNG_MAX,e.PE_DD_MAX=r.PeDefs.prototype.PE_DD_MAX,e.PE_DDM_MAX=r.PeDefs.prototype.PE_DDM_MAX,e.PE_DMS_MAX=r.PeDefs.prototype.PE_DMS_MAX,e.PE_UTM_MAX=r.PeDefs.prototype.PE_UTM_MAX,e.PE_PARM_MAX=r.PeDefs.prototype.PE_PARM_MAX,e.PE_TYPE_NONE=r.PeDefs.prototype.PE_TYPE_NONE,e.PE_TYPE_GEOGCS=r.PeDefs.prototype.PE_TYPE_GEOGCS,e.PE_TYPE_PROJCS=r.PeDefs.prototype.PE_TYPE_PROJCS,e.PE_TYPE_GEOGTRAN=r.PeDefs.prototype.PE_TYPE_GEOGTRAN,e.PE_TYPE_COORDSYS=r.PeDefs.prototype.PE_TYPE_COORDSYS,e.PE_TYPE_UNIT=r.PeDefs.prototype.PE_TYPE_UNIT,e.PE_TYPE_LINUNIT=r.PeDefs.prototype.PE_TYPE_LINUNIT,e.PE_STR_OPTS_NONE=r.PeDefs.prototype.PE_STR_OPTS_NONE,e.PE_STR_AUTH_NONE=r.PeDefs.prototype.PE_STR_AUTH_NONE,e.PE_STR_AUTH_TOP=r.PeDefs.prototype.PE_STR_AUTH_TOP,e.PE_STR_NAME_CANON=r.PeDefs.prototype.PE_STR_NAME_CANON,e.PE_PARM_X0=r.PeDefs.prototype.PE_PARM_X0,e.PE_PARM_ND=r.PeDefs.prototype.PE_PARM_ND,e.PE_TRANSFORM_1_TO_2=r.PeDefs.prototype.PE_TRANSFORM_1_TO_2,e.PE_TRANSFORM_2_TO_1=r.PeDefs.prototype.PE_TRANSFORM_2_TO_1,e.PE_TRANSFORM_P_TO_G=r.PeDefs.prototype.PE_TRANSFORM_P_TO_G,e.PE_TRANSFORM_G_TO_P=r.PeDefs.prototype.PE_TRANSFORM_G_TO_P,e.PE_HORIZON_RECT=r.PeDefs.prototype.PE_HORIZON_RECT,e.PE_HORIZON_POLY=r.PeDefs.prototype.PE_HORIZON_POLY,e.PE_HORIZON_LINE=r.PeDefs.prototype.PE_HORIZON_LINE,e.PE_HORIZON_DELTA=r.PeDefs.prototype.PE_HORIZON_DELTA}}(E||(E={})),function(e){const t={},o={},n=e=>{if(e){const t=e.getType();switch(t){case E.PE_TYPE_GEOGCS:e=r.castObject(e,r.PeGeogcs);break;case E.PE_TYPE_PROJCS:e=r.castObject(e,r.PeProjcs);break;case E.PE_TYPE_GEOGTRAN:e=r.castObject(e,r.PeGeogtran);break;default:t&E.PE_TYPE_UNIT&&(e=r.castObject(e,r.PeUnit))}}return e};function _(e,o){let _=null,P=t[e];if(P||(P={},t[e]=P),P.hasOwnProperty(String(o)))_=P[o];else{const t=r.PeFactory.prototype.factoryByType(e,o);r.compare(t,r.NULL)||(_=t,P[o]=_)}return _=n(_),_}e.initialize=function(){r.PeFactory.prototype.initialize(null)},e.coordsys=function(e){return _(E.PE_TYPE_COORDSYS,e)},e.factoryByType=_,e.fromString=function(e,t){let _=null,P=o[e];if(P||(P={},o[e]=P),P.hasOwnProperty(t))_=P[t];else{const o=r.PeFactory.prototype.fromString(e,t);r.compare(o,r.NULL)||(_=o,P[t]=_)}return _=n(_),_},e.geogcs=function(e){return _(E.PE_TYPE_GEOGCS,e)},e.geogtran=function(e){return _(E.PE_TYPE_GEOGTRAN,e)},e.getCode=function(e){return r.PeFactory.prototype.getCode(e)},e.projcs=function(e){return _(E.PE_TYPE_PROJCS,e)},e.unit=function(e){return _(E.PE_TYPE_UNIT,e)}}(i||(i={}));let p=null;var u,c,a,g,T,f,O,S,l;function N(e){function t(e,t,o){e[t]=o(e[t])}r=e,E.init(),u.init(),T.init(),O.init(),S.init(),p=class extends r.PeGCSExtent{destroy(){r.destroy(this)}};const o=[r.PeDatum,r.PeGeogcs,r.PeGeogtran,r.PeObject,r.PeParameter,r.PePrimem,r.PeProjcs,r.PeSpheroid,r.PeUnit];for(const e of o)t(e.prototype,"getName",(e=>function(){return e.call(this,new Array(E.PE_NAME_MAX))}));for(const e of[r.PeGeogtran,r.PeProjcs])t(e.prototype,"getParameters",(e=>function(){const t=new Array(E.PE_PARM_MAX);let o=e.call(this);for(let e=0;e<t.length;e++){const n=r.getValue(o,"*");t[e]=n?r.wrapPointer(n,r.PeParameter):null,o+=Int32Array.BYTES_PER_ELEMENT}return t}));t(r.PeHorizon.prototype,"getCoord",(e=>function(){const t=this.getSize();if(!t)return null;const o=[];return d(o,t,e.call(this)),o})),t(r.PeGTlistExtendedEntry.prototype,"getEntries",(e=>{const t=r._pe_getPeGTlistExtendedGTsSize();return function(){let o=null;const n=e.call(this);if(!r.compare(n,r.NULL)){o=[n];const e=this.getSteps();if(e>1){const _=r.getPointer(n);for(let n=1;n<e;n++)o.push(r.wrapPointer(_+t*n,r.PeGTlistExtendedGTs))}}return o}}));const n=r._pe_getPeHorizonSize(),_=e=>function(){let t=this._cache;if(t||(t=new Map,this._cache=t),t.has(e))return t.get(e);let o=null;const _=e.call(this);if(!r.compare(_,r.NULL)){o=[_];const e=_.getNump();if(e>1){const t=r.getPointer(_);for(let _=1;_<e;_++)o.push(r.wrapPointer(t+n*_,r.PeHorizon))}}return t.set(e,o),o};t(r.PeProjcs.prototype,"horizonGcsGenerate",_),t(r.PeProjcs.prototype,"horizonPcsGenerate",_),r.PeObject.prototype.toString=function(e=E.PE_STR_OPTS_NONE){r.ensureCache.prepare();const t=r.getPointer(this),o=r.ensureInt8(new Array(E.PE_BUFFER_MAX));return r.UTF8ToString(r._pe_object_to_string_ext(t,e,o))}}function y(e){if(!e)return;const t=r.getClass(e);if(!t)return;const o=r.getCache(t);if(!o)return;const n=r.getPointer(e);n&&delete o[n]}function M(e,t){const o=[],n=new Array(t);for(let t=0;t<e;t++)o.push(r.ensureInt8(n));return o}function A(e){let t;return Array.isArray(e[0])?(t=[],e.forEach((e=>{t.push(e[0],e[1])}))):t=e,t}function d(e,t,o,n=!1){if(n)for(let n=0;n<2*t;n++)e[n]=r.getValue(o+n*Float64Array.BYTES_PER_ELEMENT,"double");else{const n=0===e.length;for(let _=0;_<t;_++)n&&(e[_]=new Array(2)),e[_][0]=r.getValue(o,"double"),e[_][1]=r.getValue(o+Float64Array.BYTES_PER_ELEMENT,"double"),o+=2*Float64Array.BYTES_PER_ELEMENT}}!function(e){let t;e.init=function(){e.PE_GTLIST_OPTS_COMMON=r.PeGTlistExtended.prototype.PE_GTLIST_OPTS_COMMON,t=r._pe_getPeGTlistExtendedEntrySize()},e.getGTlist=function(e,o,n,_,P,s){let E=null;const i=new r.PeInteger(s);try{const p=r.PeGTlistExtended.prototype.getGTlist(e,o,n,_,P,i);if((s=i.val)&&(E=[p],s>1)){const e=r.getPointer(p);for(let o=1;o<s;o++)E.push(r.wrapPointer(e+t*o,r.PeGTlistExtendedEntry))}}finally{r.destroy(i)}return E}}(u||(u={})),function(e){e.destroy=function(e){if(e&&e.length){for(const t of e)y(t),t.getEntries().forEach((e=>{y(e);const t=e.getGeogtran();y(t),t.getParameters().forEach(y),[t.getGeogcs1(),t.getGeogcs2()].forEach((e=>{y(e);const t=e.getDatum();y(t),y(t.getSpheroid()),y(e.getPrimem()),y(e.getUnit())}))}));r.PeGTlistExtendedEntry.prototype.Delete(e[0])}}}(c||(c={})),function(e){e.geogToGeog=function(e,t,o,n,_){r.ensureCache.prepare();const P=A(o),s=o===P,E=r.ensureFloat64(P);let i=0;n&&(i=r.ensureFloat64(n));const p=r._pe_geog_to_geog(r.getPointer(e),t,E,i,_);return p&&d(o,t,E,s),p}}(a||(a={})),function(e){const t=(e,t,o,n,_,P)=>{let s,i;switch(r.ensureCache.prepare(),e){case"dd":s=r._pe_geog_to_dd,i=E.PE_DD_MAX;break;case"ddm":s=r._pe_geog_to_ddm,i=E.PE_DDM_MAX;break;case"dms":s=r._pe_geog_to_dms,i=E.PE_DMS_MAX}let p=0;t&&(p=r.getPointer(t));const u=A(n),c=r.ensureFloat64(u),a=M(o,i),g=s(p,o,c,_,r.ensureInt32(a));if(g)for(let e=0;e<o;e++)P[e]=r.UTF8ToString(a[e]);return g},o=(e,t,o,n,_)=>{let P;switch(r.ensureCache.prepare(),e){case"dd":P=r._pe_dd_to_geog;break;case"ddm":P=r._pe_ddm_to_geog;break;case"dms":P=r._pe_dms_to_geog}let s=0;t&&(s=r.getPointer(t));const E=n.map((e=>r.ensureString(e))),i=r.ensureInt32(E),p=r.ensureFloat64(new Array(2*o)),u=P(s,o,i,p);return u&&d(_,o,p),u};e.geog_to_dms=function(e,o,r,n,_){return t("dms",e,o,r,n,_)},e.dms_to_geog=function(e,t,r,n){return o("dms",e,t,r,n)},e.geog_to_ddm=function(e,o,r,n,_){return t("ddm",e,o,r,n,_)},e.ddm_to_geog=function(e,t,r,n){return o("ddm",e,t,r,n)},e.geog_to_dd=function(e,o,r,n,_){return t("dd",e,o,r,n,_)},e.dd_to_geog=function(e,t,r,n){return o("dd",e,t,r,n)}}(g||(g={})),function(e){e.init=function(){e.PE_MGRS_STYLE_NEW=r.PeNotationMgrs.prototype.PE_MGRS_STYLE_NEW,e.PE_MGRS_STYLE_OLD=r.PeNotationMgrs.prototype.PE_MGRS_STYLE_OLD,e.PE_MGRS_STYLE_AUTO=r.PeNotationMgrs.prototype.PE_MGRS_STYLE_AUTO,e.PE_MGRS_180_ZONE_1_PLUS=r.PeNotationMgrs.prototype.PE_MGRS_180_ZONE_1_PLUS,e.PE_MGRS_ADD_SPACES=r.PeNotationMgrs.prototype.PE_MGRS_ADD_SPACES},e.geog_to_mgrs_extended=function(e,t,o,n,_,P,s){r.ensureCache.prepare();let i=0;e&&(i=r.getPointer(e));const p=A(o),u=r.ensureFloat64(p),c=M(t,E.PE_MGRS_MAX),a=r.ensureInt32(c),g=r._pe_geog_to_mgrs_extended(i,t,u,n,_,P,a);if(g)for(let e=0;e<t;e++)s[e]=r.UTF8ToString(c[e]);return g},e.mgrs_to_geog_extended=function(e,t,o,n,_){r.ensureCache.prepare();let P=0;e&&(P=r.getPointer(e));const s=o.map((e=>r.ensureString(e))),E=r.ensureInt32(s),i=r.ensureFloat64(new Array(2*t)),p=r._pe_mgrs_to_geog_extended(P,t,E,n,i);return p&&d(_,t,i),p}}(T||(T={})),function(e){e.geog_to_usng=function(e,t,o,n,_,P,s){r.ensureCache.prepare();let i=0;e&&(i=r.getPointer(e));const p=A(o),u=r.ensureFloat64(p),c=M(t,E.PE_MGRS_MAX),a=r.ensureInt32(c),g=r._pe_geog_to_usng(i,t,u,n,_,P,a);if(g)for(let e=0;e<t;e++)s[e]=r.UTF8ToString(c[e]);return g},e.usng_to_geog=function(e,t,o,n){r.ensureCache.prepare();let _=0;e&&(_=r.getPointer(e));const P=o.map((e=>r.ensureString(e))),s=r.ensureInt32(P),E=r.ensureFloat64(new Array(2*t)),i=r._pe_usng_to_geog(_,t,s,E);return i&&d(n,t,E),i}}(f||(f={})),function(e){e.init=function(){e.PE_UTM_OPTS_NONE=r.PeNotationUtm.prototype.PE_UTM_OPTS_NONE,e.PE_UTM_OPTS_ADD_SPACES=r.PeNotationUtm.prototype.PE_UTM_OPTS_ADD_SPACES,e.PE_UTM_OPTS_NS=r.PeNotationUtm.prototype.PE_UTM_OPTS_NS},e.geog_to_utm=function(e,t,o,n,_){r.ensureCache.prepare();let P=0;e&&(P=r.getPointer(e));const s=A(o),i=r.ensureFloat64(s),p=M(t,E.PE_UTM_MAX),u=r.ensureInt32(p),c=r._pe_geog_to_utm(P,t,i,n,u);if(c)for(let e=0;e<t;e++)_[e]=r.UTF8ToString(p[e]);return c},e.utm_to_geog=function(e,t,o,n,_){r.ensureCache.prepare();let P=0;e&&(P=r.getPointer(e));const s=o.map((e=>r.ensureString(e))),E=r.ensureInt32(s),i=r.ensureFloat64(new Array(2*t)),p=r._pe_utm_to_geog(P,t,E,n,i);return p&&d(_,t,i),p}}(O||(O={})),function(e){const t=new Map;e.init=function(){e.PE_PCSINFO_OPTION_NONE=r.PePCSInfo.prototype.PE_PCSINFO_OPTION_NONE,e.PE_PCSINFO_OPTION_DOMAIN=r.PePCSInfo.prototype.PE_PCSINFO_OPTION_DOMAIN,e.PE_POLE_OUTSIDE_BOUNDARY=r.PePCSInfo.prototype.PE_POLE_OUTSIDE_BOUNDARY,e.PE_POLE_POINT=r.PePCSInfo.prototype.PE_POLE_POINT},e.generate=function(o,n=e.PE_PCSINFO_OPTION_DOMAIN){let _,P;return t.has(o)&&(P=t.get(o),P[n]&&(_=P[n])),_||(_=r.PePCSInfo.prototype.generate(o,n),P||(P=[],t.set(o,P)),P[n]=_),_}}(S||(S={})),function(e){e.version_string=function(){return r.PeVersion.prototype.version_string()}}(l||(l={}));var R=Object.freeze({__proto__:null,get _pe(){return r},isLoaded:n,isSupported:_,load:P,get PeCSTransformations(){return s},get PeDefs(){return E},get PeFactory(){return i},get PeGCSExtent(){return p},get PeGTlistExtended(){return u},get PeGTlistExtendedEntry(){return c},get PeGTTransformations(){return a},get PeNotationDms(){return g},get PeNotationMgrs(){return T},get PeNotationUsng(){return f},get PeNotationUtm(){return O},get PePCSInfo(){return S},get PeVersion(){return l},_init:N});export{g as P,_ as a,T as b,f as c,O as d,i as e,E as f,n as i,P as l,R as p};
