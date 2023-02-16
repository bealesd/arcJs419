// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/has ../../../../../core/maybe ../../../../../core/Logger ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/property ../../../../../core/jsonMap ../../../../../core/accessorSupport/decorators/subclass ../../../../../core/urlUtils ../../../../../core/uuid ../../../../../portal/support/resourceExtension ../../../../../core/Accessor ../../../../../geometry/support/aaBoundingRect ../../../../../layers/graphics/featureConversionUtils ../../../../../rest/query/operations/query ../../../../../core/byteSizeEstimations ../../../../../layers/graphics/data/BoundsStore ./FeatureServiceTileCache".split(" "),
function(n,v,r,I,k,J,K,t,L,A,M,N,O,B,q,C,D,w,E,F){n.FeatureServiceTileStore=function(l){function g(a){a=l.call(this,a)||this;a.tileInfo=null;a.extent=null;a.maximumByteSize=10485760;a.tileBounds=new E.BoundsStore;a.tiles=new F.FeatureServiceTileCache;a.refCounts=new Map;a.tileFeatureCounts=new Map;a.tmpBoundingRect=q.create();return a}v._inheritsLoose(g,l);var d=g.prototype;d.add=function(a,b){const c=[];for(const e of b)0===this.referenceFeature(e.objectId)&&c.push(e);this.addTileStorage(a,new Set(b.map(({objectId:e})=>
e)),this.byteSizeOfFeatures(b));this.featureStore.addMany(c);this.tiles.applyByteSizeLimit(this.maximumByteSize,e=>this.removeTileStorage(e))};d.destroy=function(){this.clear();this.tileFeatureCounts.clear()};d.clear=function(){this.featureStore.clear();this.tileBounds.clear();this.tiles.clear();this.refCounts.clear()};d.refresh=function(){this.clear();this.tileFeatureCounts.clear()};d.processEdits=function(a,b,c){this.processEditsDelete(a.deletedFeatures.concat(a.updatedFeatures));return this.processEditsRefetch(a.addedFeatures.concat(a.updatedFeatures),
b,c)};d.addTileStorage=function(a,b,c){this.tiles.set(a.id,new G(a,b,c));this.tileBounds.set(a.id,a.extent);this.tileFeatureCounts.set(a.id,b.size)};d.remove=function({id:a}){(a=this.tiles.get(a))&&this.removeTileStorage(a)};d.removeTileStorage=function(a){const b=[];for(const c of a.objectIds)1===this.unreferenceFeature(c)&&b.push(c);this.featureStore.removeManyById(b);a=a.data.id;this.tiles.delete(a);this.tileBounds.delete(a)};d.processEditsDelete=function(a){this.featureStore.removeManyById(a);
for(const [,b]of this.tiles){for(const c of a)b.objectIds.delete(c);this.tileFeatureCounts.set(b.data.id,b.objectIds.size)}for(const b of a)this.refCounts.delete(b)};d.processEditsRefetch=async function(a,b,c){a=(await b(a,c)).features;const {hasZ:e,hasM:f}=this.featureStore;for(const h of a)a=C.getBoundsOptimizedGeometry(this.tmpBoundingRect,h.geometry,e,f),this.tileBounds.forEachInBounds(a,m=>{m=this.tiles.get(m);this.featureStore.add(h);m.objectIds.has(h.objectId)||(m.objectIds.add(h.objectId),
this.referenceFeature(h.objectId),this.tileFeatureCounts.set(m.data.id,m.objectIds.size))})};d.process=function(a,b=()=>!0){if(k.isNone(this.tileInfo)||!a.extent||k.isSome(this.extent)&&!q.intersects(q.fromExtent(this.extent,this.tmpBoundingRect),a.extent)||this.tiles.has(a.id))return new x(a);const c=this.createTileTree(a,this.tileInfo);this.simplify(c,b,null,0,1);return this.collectMissingTiles(a,c,this.tileInfo)};d.getFeatureCount=function(a){a=this.tileFeatureCounts.get(a.id);return null!=a?a:
0};d.fetchCount=async function(a,b,c,e){const f=this.tileFeatureCounts.get(a.id);if(null!=f)return f;b=await D.executeQueryForCount(b,c,e);this.tileFeatureCounts.set(a.id,b.data.count);return b.data.count};d.createTileTree=function(a,b){const c=new y(a.level,a.row,a.col);b.updateTileInfo(c,1);this.tileBounds.forEachInBounds(a.extent,e=>{e=this.tiles.get(e).data;this.tilesAreRelated(a,e)&&this.populateChildren(c,e,b,this.tileFeatureCounts.get(e.id)||0)});return c};d.tilesAreRelated=function(a,b){if(!a||
!b)return!1;if(a.level===b.level)return a.row===b.row&&a.col===b.col;const c=a.level<b.level,e=c?a:b;a=c?b:a;b=1<<a.level-e.level;return Math.floor(a.row/b)===e.row&&Math.floor(a.col/b)===e.col};d.populateChildren=function(a,b,c,e){var f=b.level-a.level-1;if(0>f)a.isLeaf=!0;else{var h=b.row>>f,m=b.col>>f;f=(h-(a.row<<1)<<1)+(m-(a.col<<1));var p=a.children[f];k.isSome(p)?this.populateChildren(p,b,c,e):(h=new y(a.level+1,h,m),c.updateTileInfo(h,1),a.children[f]=h,this.populateChildren(h,b,c,e))}};d.simplify=
function(a,b,c,e,f){const h=f*f;if(a.isLeaf)return b(this.getFeatureCount(a),f)?0:(this.remove(a),k.isSome(c)&&(c.children[e]=null),h);f/=2;const m=f*f;let p=0;for(let u=0;u<a.children.length;u++){const z=a.children[u];p+=k.isSome(z)?this.simplify(z,b,a,u,f):m}0===p?this.mergeChildren(a):.18751>1-p/h&&(this.purge(a),k.isSome(c)&&(c.children[e]=null),p=h);return p};d.mergeChildren=function(a){const b=new Set;let c=0;this.forEachLeaf(a,e=>{const f=this.tiles.get(e.id);if(f){c+=f.byteSize;for(const h of f.objectIds)b.has(h)||
(b.add(h),this.referenceFeature(h));this.remove(e)}});this.addTileStorage(a,b,c);a.isLeaf=!0;a.children[0]=a.children[1]=a.children[2]=a.children[3]=null;this.tileFeatureCounts.set(a.id,b.size)};d.forEachLeaf=function(a,b){for(const c of a.children)k.isNone(c)||(c.isLeaf?b(c):this.forEachLeaf(c,b))};d.purge=function(a){if(!k.isNone(a))if(a.isLeaf)this.remove(a);else for(let b=0;b<a.children.length;b++)this.purge(a.children[b]),a.children[b]=null};d.collectMissingTiles=function(a,b,c){a=new H(c,a,
this.extent);this.collectMissingTilesRecurse(b,a,1);return a.info};d.collectMissingTilesRecurse=function(a,b,c){if(!a.isLeaf)if(a.hasChildren){c/=2;for(let e=0;e<a.children.length;e++){const f=a.children[e];k.isNone(f)?b.addMissing(a.level+1,(a.row<<1)+((e&2)>>1),(a.col<<1)+(e&1),c):this.collectMissingTilesRecurse(f,b,c)}}else b.addMissing(a.level,a.row,a.col,c)};d.referenceFeature=function(a){const b=(this.refCounts.get(a)||0)+1;this.refCounts.set(a,b);return 1===b?0:2};d.unreferenceFeature=function(a){const b=
(this.refCounts.get(a)||0)-1;if(0===b)return this.refCounts.delete(a),1;0<b&&this.refCounts.set(a,b);return 2};d.byteSizeOfFeatures=function(a){let b=0;for(const c of a)b+=this.byteSizeOfFeature(c);return b};d.byteSizeOfFeature=function(a){return 32+this.byteSizeOfGeometry(a.geometry)+w.estimateAttributesObjectSize(a.attributes)};d.byteSizeOfGeometry=function(a){if(!a)return 0;const b=w.estimateFixedArraySize(a.lengths,4);return 32+w.estimateFixedArraySize(a.coords,8)+b};v._createClass(g,[{key:"debugInfo",
get:function(){return Array.from(this.tiles.values()).map(({data:a})=>({data:a,featureCount:this.tileFeatureCounts.get(a.id)||0}))}},{key:"test",get:function(){return{tiles:Array.from(this.tiles.values()).map(a=>`${a.data.id}:[${Array.from(a.objectIds)}]`),featureReferences:Array.from(this.refCounts.keys()).map(a=>`${a}:${this.refCounts.get(a)}`)}}}]);return g}(B);r.__decorate([t.property({constructOnly:!0})],n.FeatureServiceTileStore.prototype,"featureStore",void 0);r.__decorate([t.property()],n.FeatureServiceTileStore.prototype,
"tileInfo",void 0);r.__decorate([t.property()],n.FeatureServiceTileStore.prototype,"extent",void 0);r.__decorate([t.property()],n.FeatureServiceTileStore.prototype,"maximumByteSize",void 0);n.FeatureServiceTileStore=r.__decorate([A.subclass("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],n.FeatureServiceTileStore);let G=function(l,g,d){this.data=l;this.objectIds=g;this.byteSize=d},y=function(){function l(g,d,a){this.level=g;this.row=d;this.col=a;this.isLeaf=
!1;this.extent=null;this.children=[null,null,null,null]}v._createClass(l,[{key:"hasChildren",get:function(){return!this.isLeaf&&(k.isSome(this.children[0])||k.isSome(this.children[1])||k.isSome(this.children[2])||k.isSome(this.children[3]))}}]);return l}(),x=function(){function l(g,d=[]){this.missingTiles=d;this.coveredArea=this.fullArea=0;this.coveredArea=this.fullArea=q.area(g.extent)}l.prototype.prepend=function(g){this.missingTiles=g.missingTiles.concat(this.missingTiles);this.coveredArea+=g.coveredArea;
this.fullArea+=g.fullArea};return l}(),H=function(){function l(g,d,a){this.tileInfo=g;this.extent=null;this.info=new x(d);k.isSome(a)&&(this.extent=q.fromExtent(a))}l.prototype.addMissing=function(g,d,a,b){g={id:null,level:g,row:d,col:a};this.tileInfo.updateTileInfo(g,1);!k.isSome(g.extent)||k.isSome(this.extent)&&!q.intersects(this.extent,g.extent)||(this.info.missingTiles.push({data:g,resolution:b}),this.info.coveredArea-=q.area(g.extent))};return l}();n.ProcessResult=x;Object.defineProperty(n,
"__esModule",{value:!0})});