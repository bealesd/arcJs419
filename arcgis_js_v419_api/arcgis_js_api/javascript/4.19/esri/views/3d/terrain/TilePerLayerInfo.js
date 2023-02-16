// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../core/ObjectPool ../../../core/PooledArray ./terrainUtils ./tileUtils".split(" "),function(f,m,k,n,p,g,q){let l=function(){function c(){this.waitingAgents=new p;this.requestAbort=this.requestPromise=this.loadingAgent=this._upsampleInfo=null;this.pendingUpdates=0}c.acquire=function(a){const b=h.acquire();b._init(a);return b};var d=c.prototype;d.release=function(){this.dispose();e.delete(this);h.release(this)};d.dispose=
function(){this.loadingAgent=k.disposeMaybe(this.loadingAgent);this.abortRequest();this._unsetUpsampleInfo();this.pendingUpdates=0;this._data=g.releaseTileData(this._data)};c.prune=function(){h.prune(0)};d._init=function(a){this.waitingAgents.clear();this._data=g.releaseTileData(this._data);this.dataInvalidated=this.dataMissing=!1;this._unsetUpsampleInfo();this.abortRequest();this.loadingAgent=null;this.pendingUpdates=0;this._pool=a;this.elevationBounds=null};d.invalidateSourceData=function(){this.dataInvalidated=
!0;this.dataMissing=!1;this._unsetUpsampleInfo()};d.abortRequest=function(){this.requestAbort=k.abortMaybe(this.requestAbort);this.requestPromise=null};d._unsetUpsampleInfo=function(){this._upsampleInfo&&(this._upsampleInfo.tile.unrefMapData(),this._pool.release(this._upsampleInfo),this._upsampleInfo=null)};d.setUpsampleInfo=function(a,b){if(a===b||null==b)this._unsetUpsampleInfo();else{if(null==this._upsampleInfo)this._upsampleInfo=this._pool.acquire();else{if(this._upsampleInfo.tile===b)return;
this._upsampleInfo.tile.unrefMapData()}b.refMapData();q.computeUpsampleInfo(a,b,this._upsampleInfo)}};m._createClass(c,[{key:"upsampleInfo",get:function(){return this._upsampleInfo}},{key:"data",get:function(){return this._data},set:function(a){g.releaseTileData(this._data);this._data=a}}]);return c}();const h=new n(l,null,()=>{}),e=new Map;f.TilePerLayerInfo=l;f.printAllocations=function(){0<e.size&&(console.log(`${e.size} live TilePerLayerInfo allocations:`),e.forEach(c=>console.log(c,"\n")))};
Object.defineProperty(f,"__esModule",{value:!0})});