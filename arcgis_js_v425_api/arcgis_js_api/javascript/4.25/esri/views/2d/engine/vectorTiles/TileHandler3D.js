// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../core/MemCache ../../../../core/promiseUtils ../../../../chunks/mat3f32 ../../../../geometry/support/aaBoundingRect ./TileHandler ./VectorTile ./decluttering/jobsUtil ../../tiling/TileInfoViewPOT ../../tiling/TileKey".split(" "),function(m,h,n,p,q,r,t,u,v,w,x){return function(k){function l(b,a,d,e,f){a=k.call(this,b,a,d)||this;a._memCache=e;a._loader=f;a._ongoingTileRequests=new Map;a._ongoingRequestToController=
new Map;a._tileInfoView=new w(b.tileInfo,b.fullExtent);return a}m._inheritsLoose(l,k);var g=l.prototype;g.destroy=function(){k.prototype.destroy.call(this);this._ongoingRequestToController.forEach(b=>b.abort());this._ongoingRequestToController.clear();this._ongoingTileRequests.clear()};g.getVectorTile=function(){var b=m._asyncToGenerator(function*(a,d,e,f){d=new x(a,d,e,0);let c=this._memCache.get(d.id);if(h.isSome(c))return c.retain(),c;e=yield this._getVectorTileData(d);p.throwIfAborted(f);if(!this._layer)return null;
c=this._memCache.get(d.id);if(h.isSome(c))return c.retain(),c;f=this._layer.tileInfo.getTileBounds(r.create(),d);a=this._tileInfoView.getTileResolution(a);c=new u.VectorTile(d,a,f[0],f[3],512,512,this._styleRepository,this._memCache);h.isSome(e)?(c.setData(e),c.retain(),this._memCache.put(d.id,c,c.memoryUsage*c.referenced,n.MIN_PRIORITY)):c.setData(null);c.neededForCoverage=!0;c.transforms.tileUnitsToPixels=q.fromValues(.125,0,0,0,.125,0,0,0,1);v.declutterSingleTile(c,this._styleRepository);return c});
return function(a,d,e,f){return b.apply(this,arguments)}}();g._getVectorTileData=function(b){const a=b.id;if(this._ongoingTileRequests.has(a))return this._ongoingTileRequests.get(a);const d=new AbortController;b=this._getParsedVectorTileData(b,{signal:d.signal}).then(e=>{this._ongoingTileRequests.delete(a);this._ongoingRequestToController.delete(a);return e}).catch(()=>{this._ongoingTileRequests.delete(a);this._ongoingRequestToController.delete(a);return null});this._ongoingTileRequests.set(a,b);
this._ongoingRequestToController.set(a,d);return b};g._getParsedVectorTileData=function(b,a){return this.fetchTileData(b,a).then(d=>this.parseTileData({key:b,data:d},a))};g.request=function(b,a){return this._loader.request(b,"binary",a)};return l}(t.TileHandler)});