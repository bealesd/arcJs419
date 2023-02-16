// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/CircularArray ../../../../core/Evented ../../../../core/has ../../../../core/maybe ../../../../chunks/rbush ../../../../geometry/support/aaBoundingBox ./Store2D ./support/FeatureSetReaderPBFIndirect".split(" "),function(m,p,t,u,q,l,v,w,x,y){const r={getObjectId(h){return h.getObjectId()},getAttributes(h){return h.readAttributes()},getAttribute(h,k){return h.readAttribute(k)},cloneWithGeometry(h,k){return h},getGeometry(h){return h.readHydratedGeometry()},
getCentroid(h,k){return h.readCentroid()}};q=function(h){function k(a,b,c){var d=h.call(this,a,b)||this;d.featureAdapter=r;d.events=new u;d._featureSetsByInstance=new Map;d._objectIdToDisplayId=new Map;d._spatialIndexInvalid=!0;d._indexSearchCache=new t(50);d._index=v.rbush(9,e=>({minX:d._storage.getXMin(e),minY:d._storage.getYMin(e),maxX:d._storage.getXMax(e),maxY:d._storage.getYMax(e)}));d.mode=c;return d}p._inheritsLoose(k,h);var f=k.prototype;f.hasInstance=function(a){return this._featureSetsByInstance.has(a)};
f.onTileData=function(a,b){if(l.isNone(b.addOrUpdate))return b;b.addOrUpdate.attachStorage(this._storage);if("snapshot"===this.mode){for(var c=b.addOrUpdate.getCursor();c.next();){const d=c.getDisplayId();this.setComputedAttributes(this._storage,c,d,a.scale)}return b}this._featureSetsByInstance.set(b.addOrUpdate.instance,b.addOrUpdate);for(c=b.addOrUpdate.getCursor();c.next();)this._insertFeature(c,a.scale);this._spatialIndexInvalid=!0;this.events.emit("changed");return b};f.search=function(a){this._rebuildIndex();
const b=a.id;var c=this._indexSearchCache.find(g=>g.tileId===b);if(l.isSome(c))return c.readers;c=new Map;a=this._searchIndex(a.bounds);const d=[];for(const g of a){var e=this._storage.getInstanceId(g);a=(4294901760&e)>>>16;e&=65535;c.has(a)||c.set(a,[]);c.get(a).push(e)}c.forEach((g,n)=>{n=this._featureSetsByInstance.get(n);d.push(y.FeatureSetReaderIndirect.from(n,g))});this._indexSearchCache.enqueue({tileId:b,readers:d});return d};f.insert=function(a){const b=a.getCursor(),c=this._storage;for(;b.next();){var d=
b.getIndex();d|=b.instance<<16;const e=b.getObjectId(),g=this._objectIdToDisplayId.get(e)??this._storage.createDisplayId();b.setDisplayId(g);c.setInstanceId(g,d);this._objectIdToDisplayId.set(e,g)}this._featureSetsByInstance.set(a.instance,a);this._spatialIndexInvalid=!0};f.remove=function(a){const b=this._objectIdToDisplayId.get(a);if(b){var c=this._storage.getInstanceId(b),d=65535&c;c=(4294901760&c)>>>16;var e=this._featureSetsByInstance.get(c);this._objectIdToDisplayId.delete(a);this._storage.releaseDisplayId(b);
e.removeAtIndex(d);e.isEmpty&&this._featureSetsByInstance.delete(c);this._spatialIndexInvalid=!0}};f.toArray=function(){const a=[];this.forEach(b=>a.push(b));return a};f.forEach=function(a){this._objectIdToDisplayId.forEach(b=>{b=this._storage.getInstanceId(b);b=this._lookupFeature(b);a(b)})};f.forEachUnsafe=function(a){this._objectIdToDisplayId.forEach(b=>{var c=this._storage.getInstanceId(b);b=65535&c;c=this._getFeatureSet((4294901760&c)>>>16);c.setIndex(b);a(c)})};f.forEachInBounds=function(a,
b){a=this._searchIndex(a);for(const c of a)a=this.lookupFeatureByDisplayId(c,this._storage),b(l.unwrap(a))};f.forEachBounds=function(a,b,c){this._rebuildIndex();const d=[0,0,0,0];for(const e of a)e.readGeometry()&&(a=e.getDisplayId(),d[0]=this._storage.getXMin(a),d[1]=this._storage.getYMin(a),d[2]=this._storage.getXMax(a),d[3]=this._storage.getYMax(a),b(w.fromRect(c,d)))};f.sweepFeatures=function(a,b,c){this._spatialIndexInvalid=!0;this._objectIdToDisplayId.forEach((d,e)=>{a.has(d)||(b.releaseDisplayId(d),
c&&c.unsetAttributeData(d),this._objectIdToDisplayId.delete(e))});this.events.emit("changed")};f.sweepFeatureSets=function(a){this._spatialIndexInvalid=!0;this._featureSetsByInstance.forEach((b,c)=>{a.has(c)||this._featureSetsByInstance.delete(c)})};f.lookupObjectId=function(a,b){a=this.lookupFeatureByDisplayId(a,b);return l.isNone(a)?null:a.getObjectId()};f.lookupDisplayId=function(a){return this._objectIdToDisplayId.get(a)};f.lookupFeatureByDisplayId=function(a,b){a=b.getInstanceId(a);return this._lookupFeature(a)};
f.lookupByDisplayIdUnsafe=function(a){var b=this._storage.getInstanceId(a);a=65535&b;b=this._getFeatureSet((4294901760&b)>>>16);if(!b)return null;b.setIndex(a);return b};f._insertFeature=function(a,b){const c=this._storage,d=a.getObjectId();var e=a.getIndex();e|=a.instance<<16;c.getInstanceId(a.getDisplayId());let g=this._objectIdToDisplayId.get(d);g||(g=c.createDisplayId(),this._objectIdToDisplayId.set(d,g),this._spatialIndexInvalid=!0);a.setDisplayId(g);c.setInstanceId(g,e);this.setComputedAttributes(c,
a,g,b)};f._searchIndex=function(a){this._rebuildIndex();return this._index.search({minX:a[0],minY:a[1],maxX:a[2],maxY:a[3]})};f._rebuildIndex=function(){if(this._spatialIndexInvalid){var a=[];"snapshot"===this.mode?this._featureSetsByInstance.forEach(b=>{for(b=b.getCursor();b.next();){const c=b.getDisplayId();this._storage.setBounds(c,b)&&a.push(c)}}):this._objectIdToDisplayId.forEach(b=>{const c=this._storage.getInstanceId(b);this._storage.setBounds(b,this._lookupFeature(c))&&a.push(b)});this._index.clear();
this._index.load(a);this._indexSearchCache.clear();this._spatialIndexInvalid=!1}};f._lookupFeature=function(a){var b=this._getFeatureSet((4294901760&a)>>>16);if(!b)return null;b=b.getCursor();b.setIndex(65535&a);return b};f._getFeatureSet=function(a){return this._featureSetsByInstance.get(a)};p._createClass(k,[{key:"storeStatistics",get:function(){let a=0,b=0,c=0;this.forEach(d=>{if(d=d.readGeometry())b+=d.isPoint?1:d.lengths.reduce((e,g)=>e+g,0),c+=d.isPoint?1:d.lengths.length,a+=1});return{featureCount:a,
vertexCount:b,ringCount:c}}}]);return k}(x.Store2D);m.FeatureStore2D=q;m.featureAdapter=r;Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});