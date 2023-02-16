// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/Error ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/PooledArray ../../core/promiseUtils ../../core/scheduling ../../core/Accessor ../../request ../../core/Handles ../../core/LRUCache ../../core/watchUtils ./Tilemap".split(" "),
function(g,y,n,N,B,t,C,O,D,w,E,P,Q,F,q,G,H,I,J,K,L,u){var p;const M=B.getLogger("esri.layers.support.TilemapCache");g.TilemapCache=p=function(z){function v(a){a=z.call(this,a)||this;a._handles=new J;a._pendingTilemapRequests={};a._availableLevels={};a.levels=5;a.cacheByteSize=2097152;a.request=I;a._prefetchingEnabled=!0;return a}y._inheritsLoose(v,z);var h=v.prototype;h.initialize=function(){this._tilemapCache=new K(this.cacheByteSize);this._handles.add([this.watch(["layer.parsedUrl","layer.tileServers?"],
()=>this._initializeTilemapDefinition()),L.init(this,"layer.tileInfo.lods",a=>this._initializeAvailableLevels(a),!0)]);this._initializeTilemapDefinition()};h.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null)};h.castLevels=function(a){return 2>=a?(M.error("Minimum levels for Tilemap is 3, but got ",a),3):a};h.fetchTilemap=function(a,c,d,b){if(!this._availableLevels[a])return Promise.reject(new w("tilemap-cache:level-unavailable",`Level ${a} is unavailable in the service`));
const e=this._tmpTilemapDefinition;if(a=this._tilemapFromCache(a,c,d,e))return Promise.resolve(a);const r=b&&b.signal;b={...b,signal:null};return new Promise((m,f)=>{q.onAbort(r,()=>f(q.createAbortError()));const k=u.tilemapDefinitionId(e);let l=this._pendingTilemapRequests[k];if(!l){l=u.Tilemap.fromDefinition(e,b).then(x=>{this._tilemapCache.put(k,x,x.byteSize);return x});const A=()=>delete this._pendingTilemapRequests[k];this._pendingTilemapRequests[k]=l;l.then(A,A)}l.then(m,f)})};h.getAvailability=
function(a,c,d){return this._availableLevels[a]?(a=this._tilemapFromCache(a,c,d,this._tmpTilemapDefinition))?a.getAvailability(c,d):"unknown":"unavailable"};h.getAvailabilityUpsample=function(a,c,d,b){b.level=a;b.row=c;b.col=d;a=this.layer.tileInfo;for(a.updateTileInfo(b);;)if(c=this.getAvailability(b.level,b.row,b.col),"unavailable"===c){if(!a.upsampleTile(b))return"unavailable"}else return c};h.fetchAvailability=function(a,c,d,b){return this._availableLevels[a]?this.fetchTilemap(a,c,d,b).catch(e=>
e).then(e=>{if(e instanceof u.Tilemap)return e=e.getAvailability(c,d),"unavailable"===e?Promise.reject(new w("tile-map:tile-unavailable","Tile is not available",{level:a,row:c,col:d})):e;if(q.isAbortError(e))throw e;return"unknown"}):Promise.reject(new w("tilemap-cache:level-unavailable",`Level ${a} is unavailable in the service`))};h.fetchAvailabilityUpsample=function(a,c,d,b,e){b.level=a;b.row=c;b.col=d;const r=this.layer.tileInfo;r.updateTileInfo(b);const m=this.fetchAvailability(a,c,d,e).catch(f=>
{if(q.isAbortError(f))throw f;if(r.upsampleTile(b))return this.fetchAvailabilityUpsample(b.level,b.row,b.col,b);throw f;});this._fetchAvailabilityUpsamplePrefetch(b.id,a,c,d,e,m);return m};h._fetchAvailabilityUpsamplePrefetch=async function(a,c,d,b,e,r){if(this._prefetchingEnabled){var m=`prefetch-${a}`;if(!this._handles.has(m)){var f=q.createAbortController();r.then(()=>f.abort(),()=>f.abort());var k=!1;this._handles.add({remove(){k||(k=!0,f.abort())}},m);await G.waitTicks(10,f.signal).catch(()=>
{});k||(k=!0,this._handles.remove(m));if(!q.isAborted(f))for(a={id:a,level:c,row:d,col:b},e={...e,signal:f.signal},c=this.layer.tileInfo,d=0;p._prefetches.length<p._maxPrefetch&&c.upsampleTile(a);++d){const l=this.fetchAvailability(a.level,a.row,a.col,e);p._prefetches.push(l);b=()=>{p._prefetches.removeUnordered(l)};l.then(b,b)}}}};h._initializeTilemapDefinition=function(){if(this.layer.parsedUrl){var a=this.layer.parsedUrl,c=a.query;this._tilemapCache.clear();this._tmpTilemapDefinition={service:{url:a.path,
query:c?E.objectToQuery(c):null,tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}};h._tilemapFromCache=function(a,c,d,b){b.level=a;b.row=c-c%this.size;b.col=d-d%this.size;a=u.tilemapDefinitionId(b);return this._tilemapCache.get(a)};h._initializeAvailableLevels=function(a){this._availableLevels={};a&&a.forEach(c=>this._availableLevels[c.level]=!0)};y._createClass(v,[{key:"size",get:function(){return 1<<this.levels}},
{key:"test",get:function(){const a=this;return{get prefetchingEnabled(){return a._prefetchingEnabled},set prefetchingEnabled(c){a._prefetchingEnabled=c},hasTilemap(c,d,b){return!!a._tilemapFromCache(c,d,b,a._tmpTilemapDefinition)}}}}]);return v}(H);g.TilemapCache._maxPrefetch=4;g.TilemapCache._prefetches=new F({initialSize:p._maxPrefetch});n.__decorate([t.property({constructOnly:!0,type:Number})],g.TilemapCache.prototype,"levels",void 0);n.__decorate([C.cast("levels")],g.TilemapCache.prototype,"castLevels",
null);n.__decorate([t.property({readOnly:!0,type:Number})],g.TilemapCache.prototype,"size",null);n.__decorate([t.property({constructOnly:!0,type:Number})],g.TilemapCache.prototype,"cacheByteSize",void 0);n.__decorate([t.property({constructOnly:!0})],g.TilemapCache.prototype,"layer",void 0);n.__decorate([t.property({constructOnly:!0})],g.TilemapCache.prototype,"request",void 0);g.TilemapCache=p=n.__decorate([D.subclass("esri.layers.support.TilemapCache")],g.TilemapCache);Object.defineProperty(g,"__esModule",
{value:!0})});