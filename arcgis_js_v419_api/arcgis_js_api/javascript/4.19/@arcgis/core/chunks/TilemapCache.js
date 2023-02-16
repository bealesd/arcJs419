/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{clone as t}from"../core/lang.js";import{L as i}from"./Logger.js";import{property as l}from"../core/accessorSupport/decorators/property.js";import a from"../core/Accessor.js";import{c as s,P as r,waitTicks as o}from"../core/scheduling.js";import{onAbort as n,createAbortError as h,isAbortError as c,createAbortController as p,isAborted as m}from"../core/promiseUtils.js";import f from"../core/Error.js";import{subclass as u}from"../core/accessorSupport/decorators/subclass.js";import{objectToQuery as v}from"../core/urlUtils.js";import{cast as d}from"../core/accessorSupport/decorators/cast.js";import"./resourceExtension.js";import y from"../request.js";import b from"../core/Handles.js";import{L as w}from"./LRUCache.js";import{init as _}from"../core/watchUtils.js";class g{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),l=i%8,a=i>>3,s=this._tileAvailabilityBitSet;return a<0||a>s.length?"unknown":s[a]&1<<l?"available":"unavailable"}_updateFromData(e){const t=this.location.width,i=this.location.height;let l=!0,a=!0;const s=Math.ceil(t*i/8),r=new Uint8Array(s);let o=0;for(let t=0;t<e.length;t++){const i=t%8;e[t]?(a=!1,r[o]|=1<<i):l=!1,7===i&&++o}a?this._allAvailability="unavailable":l?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=r,this.byteSize+=r.length)}static fromDefinition(e,t){const i=e.service.request||y,{row:l,col:a,width:r,height:o}=e,n={query:{f:"json"}};return t=t?{...n,...t}:n,i(function(e){let t;if("vector-tile"===e.service.type)t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;else{const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const i=e.service.query;i&&(t=`${t}?${i}`);return t}(e),t).then((e=>e.data)).catch((e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:l,left:a,width:r,height:o},valid:!0,data:s(r*o,0)};throw e})).then((e=>{if(e.location&&(e.location.top!==l||e.location.left!==a||e.location.width!==r||e.location.height!==o))throw new f("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:l,left:a,width:r,height:o}});return g.fromJSON(e)}))}static fromJSON(e){g.validateJSON(e);const i=new g;return i.location=Object.freeze(t(e.location)),i._updateFromData(e.data),Object.freeze(i)}static validateJSON(e){if(!e||!e.location)throw new f("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new f("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new f("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new f("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new f("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function A(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}var T;const j=i.getLogger("esri.layers.support.TilemapCache");let $=T=class extends a{constructor(e){super(e),this._handles=new b,this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2097152,this.request=y,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new w(this.cacheByteSize),this._handles.add([this.watch(["layer.parsedUrl","layer.tileServers?"],(()=>this._initializeTilemapDefinition())),_(this,"layer.tileInfo.lods",(e=>this._initializeAvailableLevels(e)),!0)]),this._initializeTilemapDefinition()}destroy(){this._handles&&(this._handles.destroy(),this._handles=null)}castLevels(e){return e<=2?(j.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,i,l){if(!this._availableLevels[e])return Promise.reject(new f("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const a=this._tmpTilemapDefinition,s=this._tilemapFromCache(e,t,i,a);if(s)return Promise.resolve(s);const r=l&&l.signal;return l={...l,signal:null},new Promise(((e,t)=>{n(r,(()=>t(h())));const i=A(a);let s=this._pendingTilemapRequests[i];if(!s){s=g.fromDefinition(a,l).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=s,s.then(e,e)}s.then(e,t)}))}getAvailability(e,t,i){if(!this._availableLevels[e])return"unavailable";const l=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return l?l.getAvailability(t,i):"unknown"}getAvailabilityUpsample(e,t,i,l){l.level=e,l.row=t,l.col=i;const a=this.layer.tileInfo;for(a.updateTileInfo(l);;){const e=this.getAvailability(l.level,l.row,l.col);if("unavailable"!==e)return e;if(!a.upsampleTile(l))return"unavailable"}}fetchAvailability(e,t,i,l){return this._availableLevels[e]?this.fetchTilemap(e,t,i,l).catch((e=>e)).then((l=>{if(l instanceof g){const a=l.getAvailability(t,i);return"unavailable"===a?Promise.reject(new f("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):a}if(c(l))throw l;return"unknown"})):Promise.reject(new f("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,i,l,a){l.level=e,l.row=t,l.col=i;const s=this.layer.tileInfo;s.updateTileInfo(l);const r=this.fetchAvailability(e,t,i,a).catch((e=>{if(c(e))throw e;if(s.upsampleTile(l))return this.fetchAvailabilityUpsample(l.level,l.row,l.col,l);throw e}));return this._fetchAvailabilityUpsamplePrefetch(l.id,e,t,i,a,r),r}async _fetchAvailabilityUpsamplePrefetch(e,t,i,l,a,s){if(!this._prefetchingEnabled)return;const r=`prefetch-${e}`;if(this._handles.has(r))return;const n=p();s.then((()=>n.abort()),(()=>n.abort()));let h=!1;const c={remove(){h||(h=!0,n.abort())}};if(this._handles.add(c,r),await o(10,n.signal).catch((()=>{})),h||(h=!0,this._handles.remove(r)),m(n))return;const f={id:e,level:t,row:i,col:l},u={...a,signal:n.signal},v=this.layer.tileInfo;for(let e=0;T._prefetches.length<T._maxPrefetch&&v.upsampleTile(f);++e){const e=this.fetchAvailability(f.level,f.row,f.col,u);T._prefetches.push(e);const t=()=>{T._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const e=this.layer.parsedUrl,t=e.query;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:t?v(t):null,tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,l){l.level=e,l.row=t-t%this.size,l.col=i-i%this.size;const a=A(l);return this._tilemapCache.get(a)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach((e=>this._availableLevels[e.level]=!0))}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,l)=>!!e._tilemapFromCache(t,i,l,e._tmpTilemapDefinition)}}};$._maxPrefetch=4,$._prefetches=new r({initialSize:T._maxPrefetch}),e([l({constructOnly:!0,type:Number})],$.prototype,"levels",void 0),e([d("levels")],$.prototype,"castLevels",null),e([l({readOnly:!0,type:Number})],$.prototype,"size",null),e([l({constructOnly:!0,type:Number})],$.prototype,"cacheByteSize",void 0),e([l({constructOnly:!0})],$.prototype,"layer",void 0),e([l({constructOnly:!0})],$.prototype,"request",void 0),$=T=e([u("esri.layers.support.TilemapCache")],$);export{$ as T};
