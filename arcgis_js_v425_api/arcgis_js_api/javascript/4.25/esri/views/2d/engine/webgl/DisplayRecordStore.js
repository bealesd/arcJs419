// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["../../../../core/has","./FreeList","./Utils"],function(w,r,t){const q=["FILL","LINE","MARKER","TEXT","LABEL"];return function(){function u(a,b,g,c){this._strides=a;this._displayList=b;this._freeListsAndStorage={};this._dirtyMap=null;this._dirtyMap=g;for(const e in a){this._freeListsAndStorage[e]={vtxFreeList:c?new r.FreeList(c):null,idxFreeList:c?new r.FreeList(c):null,vertexBuffers:{},indexBuffer:c?new Uint32Array(c):null};for(const d in a[e])this._freeListsAndStorage[e].vertexBuffers[d]=
{data:c?t.allocateTypedArrayBuffer(c,a[e][d]):null,stride:a[e][d]}}}u.fromTileData=function(a,b){var g=a.getStrides(),c={};for(var e=0;e<g.length;e++)c[q[e]]=g[e];g=[0,0,0,0,0];e=[0,0,0,0,0];var d=a.tileDisplayData.displayObjects;for(var h of d)for(var f of h.displayRecords)g[f.geometryType]=Math.max(g[f.geometryType],f.vertexFrom+f.vertexCount),e[f.geometryType]=Math.max(e[f.geometryType],f.indexFrom+f.indexCount);b=new u(c,a.tileDisplayData.displayList,b,null);for(c=0;c<a.tileBufferData.geometries.length;++c){h=
g[c];d=e[c];var p=a.tileBufferData.geometries[c];f=b._storageFor(q[c]);const n=a.tileBufferData.geometries[c].indexBuffer;f.indexBuffer=n;f.idxFreeList=new r.FreeList(n.length);f.idxFreeList.allocate(d);let k;for(const l in p.vertexBuffer)d=a.tileBufferData.geometries[c].vertexBuffer[l],f.vertexBuffers[l].data=d.data,f.vertexBuffers[l].stride=d.stride,p=t.strideToPackingFactor(d.stride),d=d.data.length*p/d.stride,k||(k=d);f.vtxFreeList=new r.FreeList(k);f.vtxFreeList.allocate(h)}return b};var m=u.prototype;
m.delete=function(a){const b=q[a.geometryType];this._freeVertices(b,a.vertexFrom,a.vertexCount);this._freeIndices(b,a.indexFrom,a.indexCount);this._displayList.removeFromList(a);a.vertexFrom=void 0;a.indexFrom=void 0};m.setMeshData=function(a,b,g,c,e){const d=q[a.geometryType];a.meshData=null;let h=void 0,f=void 0;void 0===a.vertexFrom?(f=b.vertexCount,h=this._allocateVertices(d,f)):b.vertexCount>a.vertexCount?(this._freeVertices(d,a.vertexFrom,a.vertexCount),f=b.vertexCount,h=this._allocateVertices(d,
f)):b.vertexCount===a.vertexCount?(h=a.vertexFrom,f=a.vertexCount):(this._freeVertices(d,a.vertexFrom+b.vertexCount,a.vertexCount-b.vertexCount),h=a.vertexFrom,f=b.vertexCount);let p=!0,n=void 0,k=void 0,l=void 0;void 0===a.indexFrom?(n=e,l=b.indexCount,k=this._allocateIndices(d,l)):b.indexCount>a.indexCount?(n=this._displayList.removeFromList(a),this._freeIndices(d,a.indexFrom,a.indexCount),l=b.indexCount,k=this._allocateIndices(d,l)):b.indexCount===a.indexCount?(p=!1,k=a.indexFrom,l=a.indexCount):
(n=this._displayList.removeFromList(a),this._freeIndices(d,a.indexFrom+b.indexCount,a.indexCount-b.indexCount),k=a.indexFrom,l=b.indexCount);if(-1!==h&&-1!==k){e=this._storageFor(d);t.copyMeshData(h,k,e.vertexBuffers,e.indexBuffer,b,g,c);a.vertexFrom=h;a.indexFrom=k;a.vertexCount=b.vertexCount;a.indexCount=b.indexCount;if(this._dirtyMap){this._dirtyMap.markDirtyIndices(a.geometryType,a.indexFrom,a.indexCount);for(const v in g)this._dirtyMap.markDirtyVertices(a.geometryType,v,a.vertexFrom,a.vertexCount)}p&&
this._displayList.addToList(a,n);return!0}-1!==h&&this._freeVertices(d,h,f);-1!==k&&this._freeIndices(d,k,l);a.setMeshDataFromBuffers(b,g,c);a.vertexFrom=void 0;a.vertexCount=0;a.indexFrom=void 0;a.indexCount=0;return!1};m.tryAddMeshData=function(a,b){const g=b.vertexBuffer;b=b.indexBuffer;var c=q[a.geometryType];const e=this._allocateVertices(c,a.vertexCount);if(-1===e)return this._freeVertices(c,e,a.vertexCount),!1;const d=this._allocateIndices(c,a.indexCount);if(-1===d)return this._freeVertices(c,
e,a.vertexCount),this._freeIndices(c,d,a.indexCount),!1;c=this._storageFor(c);t.copyMeshData(e,d,c.vertexBuffers,c.indexBuffer,a,g,b);a.vertexFrom=e;a.indexFrom=d;if(this._dirtyMap){this._dirtyMap.markDirtyIndices(a.geometryType,a.indexFrom,a.indexCount);for(const h in g)this._dirtyMap.markDirtyVertices(a.geometryType,h,e,a.vertexCount)}this._displayList.addToList(a);return!0};m._allocateVertices=function(a,b){a=this._storageFor(a);b=a.vtxFreeList.allocate(b);return-1===b||.5<a.vtxFreeList.fragmentation?
-1:b};m._freeVertices=function(a,b,g){this._storageFor(a).vtxFreeList.free(b,g)};m._freeIndices=function(a,b,g){this._storageFor(a).idxFreeList.free(b,g)};m._allocateIndices=function(a,b){a=this._storageFor(a);b=a.idxFreeList.allocate(b);return-1===b||.5<a.idxFreeList.fragmentation?-1:b};m._storageFor=function(a){return this._freeListsAndStorage[a]};m._stridesFor=function(a,b){return this._strides[a][b]};return u}()});