// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/has ../../../../../core/maybe ../../../../../core/Logger ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/property ../../../../../core/jsonMap ../../../../../core/accessorSupport/decorators/subclass ../../../../../core/urlUtils ../../../../../core/uuid ../../../../../portal/support/resourceExtension ../../../../../core/accessorSupport/diffUtils ../../../engine/webgl/definitions ../../../../../renderers/support/heatmapUtils ../support/tileUtils ./BaseProcessor".split(" "),
function(v,w,k,l,F,G,H,I,x,J,K,L,y,z,A,f,B){function C(c){const e=c.key,d=new Map,a=z.TILE_SIZE;c=c.tileInfoView.tileInfo.isWrappable;d.set(f.getPow2NeighborKey(e,-1,-1,c).id,new g([-a,-a],[a-256,a-256,a,a]));d.set(f.getPow2NeighborKey(e,0,-1,c).id,new g([0,-a],[0,a-256,a,a]));d.set(f.getPow2NeighborKey(e,1,-1,c).id,new g([a,-a],[0,a-256,256,a]));d.set(f.getPow2NeighborKey(e,-1,0,c).id,new g([-a,0],[a-256,0,a,a]));d.set(f.getPow2NeighborKey(e,1,0,c).id,new g([a,0],[0,0,256,a]));d.set(f.getPow2NeighborKey(e,
-1,1,c).id,new g([-a,a],[a-256,0,a,256]));d.set(f.getPow2NeighborKey(e,0,1,c).id,new g([0,a],[0,0,a,256]));d.set(f.getPow2NeighborKey(e,1,1,c).id,new g([a,a],[0,0,256,256]));return d}let g=function(c,e){this.offset=c;this.extent=e};k=function(c){function e(){var a=c.apply(this,arguments)||this;a.type="heatmap";a._tileKeyToFeatureSets=new Map;return a}v._inheritsLoose(e,c);var d=e.prototype;d.initialize=function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])};d.update=
async function(a,b){b=b.schema.processors[0];"heatmap"===b.type&&y.diff(this._schema,b)&&(a.mesh=!0,this._schema=b)};d.onTileUpdate=function(a){for(const b of a.removed)this._tileKeyToFeatureSets.delete(b.key.id)};d.onTileClear=function(a){this._tileKeyToFeatureSets.delete(a.key.id);return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:a.id,data:{clear:!0}})};d.onTileMessage=async function(a,b,m){this._tileKeyToFeatureSets.has(a.key.id)||this._tileKeyToFeatureSets.set(a.key.id,new Map);
const D=this._tileKeyToFeatureSets.get(a.key.id);l.isSome(b.addOrUpdate)&&b.addOrUpdate.hasFeatures&&D.set(b.addOrUpdate.instance,b);if(b.end){const n=[],t=C(a);this._tileKeyToFeatureSets.forEach((u,h)=>{if(h===a.key.id)u.forEach(p=>l.andThen(p.addOrUpdate,q=>n.push(q)));else if(t.has(h)){h=t.get(h);const [p,q]=h.offset;u.forEach(E=>l.andThen(E.addOrUpdate,r=>{r=r.transform(p,q,1,1);n.push(r)}))}});b=A.calculateHeatmapIntensityInfoReaders(n,this._schema.mesh,512,512);return this.remoteClient.invoke("tileRenderer.onTileData",
{tileKey:a.key.id,intensityInfo:b},{...m,transferList:[b.matrix]})}};d.onTileError=function(a,b,m){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:a.id,error:b},m)};return e}(B);return k=w.__decorate([x.subclass("esri.views.2d.layers.features.processors.HeatmapProcessor")],k)});