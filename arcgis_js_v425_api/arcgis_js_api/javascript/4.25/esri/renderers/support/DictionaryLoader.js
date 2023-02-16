// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../Color ../../request ../../core/Error ../../core/Logger ../../core/LRUCache ../../core/maybe ../../core/promiseUtils ../../core/string ../../support/arcadeOnDemand ../../symbols/CIMSymbol".split(" "),function(t,r,y,u,z,v,A,q,B,C,w,D){function x(m,n){if(m&&(m=m.symbolLayers))for(var g=m.length;g--;){var a=m[g];if(a&&!1!==a.enable)switch(a.type){case "CIMVectorMarker":var c=n;if(a=a.markerGraphics)for(const b of a)if(b&&(a=b.symbol))switch(a.type){case "CIMPointSymbol":case "CIMLineSymbol":case "CIMPolygonSymbol":x(a,
c);break;case "CIMTextSymbol":a.fieldMap=c}}}}const E={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};let F=function(){function m(g,a,c){this.url=this.fieldMap=this.config=null;this._ongoingRequests=new Map;this._symbolCache=new A(100);this._dictionaryPromise=null;this.url=g;this.config=a;this.fieldMap=c}var n=m.prototype;n.getSymbolFields=function(){return this._symbolFields};n.getSymbolAsync=function(){var g=r._asyncToGenerator(function*(a,
c){this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(c));try{var b=yield this._dictionaryPromise}catch(h){if(B.isAbortError(h))return this._dictionaryPromise=null}var d={};if(this.fieldMap)for(var k of this._symbolFields){var f=this.fieldMap[k];d[k]=f&&null!=a.attributes[f]?""+a.attributes[f]:""}b=b?.(d,c);if(!b||"string"!==typeof b)return null;const l=C.numericHash(b).toString();if(d=this._symbolCache.get(l))return d.catch(()=>{this._symbolCache.pop(l)}),d;k=b.split(";");b=[];
d=[];for(const h of k)if(h)if(h.includes("po:")){var e=h.substr(3).split("|");3===e.length&&(k=e[0],f=e[1],e=e[2],"DashTemplate"===f?e=e.split(" ").map(p=>Number(p)):"Color"===f?(e=(new y(e)).toRgba(),e=[e[0],e[1],e[2],255*e[3]]):e=Number(e),d.push({primitiveName:k,propertyName:f,value:e}))}else if(h.includes("|"))for(const p of h.split("|")){if(this._itemNames.has(p)){b.push(p);break}}else this._itemNames.has(h)&&b.push(h);a=q.isSome(a.geometry)&&(a.geometry.hasZ||"point"!==a.geometry.type)?!1:!0;
c=this._cimPartsToCIMSymbol(b,d,a,c);this._symbolCache.put(l,c,1);return c});return function(a,c){return g.apply(this,arguments)}}();n.fetchResources=function(){var g=r._asyncToGenerator(function*(a){if(this._dictionaryPromise)return this._dictionaryPromise;if(this.url){var c=u(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},signal:q.isSome(a)?a.signal:null}),[{data:b}]=yield Promise.all([c,w.loadArcade()]);if(!b)throw this._dictionaryPromise=null,new z("esri.renderers.DictionaryRenderer",
"Bad dictionary data!");c=b.expression;var d=b.authoringInfo;this._refSymbolUrlTemplate=this.url+"/"+b.cimRefTemplateUrl;this._itemNames=new Set(b.itemsNames);this._symbolFields=d.symbol;b={};if(this.config){const l=this.config;for(var k in l)b[k]=l[k]}if(d.configuration)for(var f of d.configuration)b.hasOwnProperty(f.name)||(b[f.name]=f.value);k=[];if(q.isSome(a)&&a.fields&&this.fieldMap)for(const l of this._symbolFields){const e=this.fieldMap[l];f=a.fields.filter(h=>h.name===e);0<f.length&&k.push({...f[0],
name:l})}return this._dictionaryPromise=a=w.createDictionaryExpression(c,q.isSome(a)?a.spatialReference:null,k,b).then(l=>{const e={scale:0};return(h,p)=>{if(q.isNone(l))return null;h=l.repurposeFeature({geometry:null,attributes:h});e.scale=q.isSome(p)?p.scale:void 0;return l.evaluate({$feature:h,$view:e})}}).catch(l=>{v.getLogger("esri.renderers.support.DictionaryLoader").error("Creating dictinoary expression failed:",l);return null})}v.getLogger("esri.renderers.support.DictionaryLoader").error("no valid URL!")});
return function(a){return g.apply(this,arguments)}}();n._cimPartsToCIMSymbol=function(){var g=r._asyncToGenerator(function*(a,c,b,d){const k=Array(a.length);for(let f=0;f<a.length;f++)k[f]=this._getSymbolPart(a[f],d);a=yield Promise.all(k);if(d=this.fieldMap)for(const f of a)x(f,d);return new D({data:this._combineSymbolParts(a,c,b)})});return function(a,c,b,d){return g.apply(this,arguments)}}();n._getSymbolPart=function(){var g=r._asyncToGenerator(function*(a,c){if(this._ongoingRequests.has(a))return this._ongoingRequests.get(a).then(d=>
d.data);const b=this._refSymbolUrlTemplate.replace(/\{itemName\}/gi,a);c=u(b,{responseType:"json",query:{f:"json"},...c});this._ongoingRequests.set(a,c);try{return(yield c).data}catch(d){throw this._ongoingRequests.delete(a),d;}});return function(a,c){return g.apply(this,arguments)}}();n._combineSymbolParts=function(g,a,c){if(!g||0===g.length)return null;const b={...g[0]};if(1<g.length){b.symbolLayers=[];for(const d of g)b.symbolLayers.unshift(...d.symbolLayers)}c&&(b.callout=E);return{type:"CIMSymbolReference",
symbol:b,primitiveOverrides:a}};return m}();t.DictionaryLoader=F;Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});