// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/arrayUtils ../../../core/mathUtils ../../../core/maybe ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../geometry/support/aaBoundingBox ../../../geometry/support/aaBoundingRect ../../../geometry/support/Ellipsoid ../support/buffer/glUtil ./GeometryState ./interfaces ./LayerClass ./PatchGeometry ./terrainUtils ./TextureFader ./Tile ./TileOverlayData ./tileUtils ../webgl-engine/lib/VertexArrayObject ../webgl-engine/shaders/TerrainTechnique ../../webgl/BufferObject".split(" "),
function(R,da,ea,W,u,q,x,fa,ha,X,ia,ja,S,U,Y,b,V,ka,la,ma,na,oa,Z){function I(M,p){return p?.isLoaded||p===M?p:null}let pa=function(){function M(){this.geometryInfo=new Y.PatchGeometry;this.geometryState=this.intersectionData=null;this._textureRef=new V.TextureFader(()=>this.tile.surface.textureFadeDuration);this.overlay=new la;this._geometryStateChangedSinceLastUpdate=!0;this._shadingChanged=this._wireframeChanged=this._clippingAreaChanged=this._samplerDataChanged=this._numVerticesPerSideChanged=
this._hasGeometry=!1;this._dirtyCorners=this._dirtyEdges=this._dirtyEdgeResolutions=15}var p=M.prototype;p.init=function(a){this.clear();this._tile=a;a=this.geometryInfo;a.indices=null;a.vertexAttributes=null;fa.empty(a.boundingBox);a.indexCount=0;a.numVerticesPerSide=0;this.intersectionData=null;this.geometryState=new ja.GeometryState;this.localOrigin=null;this.overlay.clear()};p.clear=function(){this._releaseGeometry();this.releaseTexture();this._textureRef.clear();this.geometryState=this.intersectionData=
this._tile=null};p.updateGeometryIfNeeded=function(a){if(!this._vao||this._geometryStateChangedSinceLastUpdate||this._wireframeChanged||this._shadingChanged||this._clippingAreaChanged||this._samplerDataChanged||this._numVerticesPerSideChanged||this._dirtyCorners||this._dirtyEdgeResolutions||this._dirtyEdges)this._updateGeometry(a),this._geometryStateChangedSinceLastUpdate=!1;if(b.ENABLE_TERRAIN_INTERNAL_CHECKS&&this.tile.intersectsClippingArea)for(a=0;4>a;++a)b.internalAssert(this.geometryInfo.outerEdges[a].count===
this.geometryState.neighborData.edgeResolutions[a]+1)};p._calculateEdgeResolution=function(a,d){const h=this.tile,n=this.geometryState.numVerticesPerSide-1;if(!h.surface.isGlobal){var l=h.surface.extent;if(u.isSome(l)&&(0===a&&h.extent[3]>l[3]||1===a&&h.extent[2]>l[2]||2===a&&h.extent[1]<l[1]||3===a&&h.extent[0]<l[0]))return n}const e=h.level;l=b.neighborEdgeIndices[a];if(!d)return b.internalAssert(u.isNone(h.surface?.rootTiles)||h.surface.updatingRootTiles||!h.shouldHaveNeighbor(l)),n;if(d.isLoaded)return l=
d.renderData.geometryState,d=e-d.level,b.internalAssert(0<=d),0===d?Math.max(l.numVerticesPerSide-1,n):Math.max(1,l.neighborData.edgeResolutions[(a+2)%4]/2**d);b.internalAssert(!d.isLeaf);let f=n;d.forAllSubtreeOnSide(b.oppositeEdge(l),c=>{if(c===h)return!0;if(c.isLoaded)return f=Math.max(f,2**(c.level-e)),!0;b.internalAssert(!c.isLeaf);return!1});return f};p.updateNeighborData=function(){const a=this.tile;if(a.intersectsClippingArea){var d=a.renderData.geometryState.neighborData,h=r=>(r.isLoaded||
r.level===a.level)&&r?.intersectsClippingArea,n=d.edgePeerNeighbors,l=d.edgePeerNeighborSamplerVersions;for(var e=0;4>e;++e){var f=a.findNeighborTile(b.neighborEdgeIndices[e],h),c=I(a,f),g=c?.renderData?.geometryState.samplerDataVersion??-1,m=I(a,n[e]);c=c!==m;m=l[e]!==g;n[e]=f;if(c||m)l[e]=g,this._markEdgeDirty(e);g=d.edgeResolutions[e];f=this._calculateEdgeResolution(e,f);b.internalAssert(W.isPowerOfTwo(f));b.internalAssert(1<=f);d.edgeResolutions[e]=f;g!==f&&this._markEdgeResolutionDirty(e)}l=
d.cornerPeerNeighbors;for(e=0;4>e;++e){c=a.findNeighborTile(b.neighborCornerIndices[e],h);l[e]=c;f=I(a,n[e]);g=I(a,n[(e+1)%4]);c=I(a,c);y[e]=c;y[(e+1)%4]=g;y[(e+2)%4]=a;y[(e+3)%4]=f;b.internalAssert(y.some(k=>k?.isLoaded||k===a));const r=y.reduce((k,t)=>Math.min(k,t?.level??Infinity),Infinity);y.forEach((k,t)=>{k?.level>r&&(y[t]=null)});b.internalAssert(y.some(k=>k?.isLoaded||k===a));f=d.cornerNeighborData[e].cornerTiles;g=d.cornerNeighborData[e].cornerTileSamplerVersions;for(c=0;4>c;++c){m=y[c];
const k=m?.renderData.geometryState.samplerDataVersion??-1,t=f[c]!==m,v=!t&&g[c]!==k;if(t||v)f[c]=m,g[c]=k,this._markCornerDirty(e)}b.internalAssert(f.some(k=>k?.isLoaded||k===a))}b.ENABLE_TERRAIN_INTERNAL_CHECKS&&b.internalAssert(this.geometryState.neighborData.edgeResolutions.every(r=>0<r));for(d=0;4>d;++d)y[d]=null}};p._updateGeometry=function(a){if(this.tile.intersectsClippingArea){b.ENABLE_TERRAIN_INTERNAL_CHECKS&&b.internalAssert(!this.tile.intersectsClippingArea||this.geometryState.neighborData.edgeResolutions.every(e=>
0<e));this.intersectionData=null;var d=this.tile,h=this.geometryInfo.vertexAttributes;h=!this._vao||!h||this._wireframeChanged||this._shadingChanged||this._numVerticesPerSideChanged||this._samplerDataChanged||this._clippingAreaChanged||this._dirtyEdgeResolutions;var n=!h&&(0!==this._dirtyEdges||0!==this._dirtyEdgeResolutions),l=!n&&0!==this._dirtyCorners;h?(this._releaseGeometry(),this._createGeometry(a)):n||l?d.updateEdgeElevations():l?d.updateCornerElevations():console.warn("Update for no reason?");
this._samplerDataChanged=this._numVerticesPerSideChanged=!1;this._dirtyCorners=this._dirtyEdges=this._dirtyEdgeResolutions=0;this._wireframeChanged=this._clippingAreaChanged=!1}};p.releaseGeometry=function(){return this._releaseGeometry()};p.ensureTexture=function(a,d){u.isSome(this._texture)&&this._texture.descriptor.width!==a&&this.releaseTexture();u.isNone(this._texture)&&(this._texture=d(),this.tile.setMemoryDirty());return this._texture};p.releaseTexture=function(){u.isSome(this._texture)&&(this._texture.release(),
this._texture=null,this.tile.setMemoryDirty())};p._markCornerDirty=function(a){this._dirtyCorners|=1<<a};p._markEdgeDirty=function(a){this._dirtyEdges|=1<<a};p._markEdgeResolutionDirty=function(a){a=1<<a;this._dirtyEdgeResolutions|=a;this._dirtyEdges|=a};p._markAllEdgesAndCornersDirty=function(){this._dirtyEdgeResolutions=this._dirtyEdges=this._dirtyCorners=15};p.updateGeometryState=function(){var a=this._getElevationInfo(),d=this.tile,h=a.samplerData?d.getElevationBasedVerticesPerSide(a.maxTileLevel):
d.getDefaultVerticesPerRowOnLevel();const n=Math.max(h,5);let l=d.clippingArea;if(!d.intersectsClippingArea||d.isWithinClippingArea)l=null;h=this.geometryState;let e=!1;h.numVerticesPerSide!==n&&(this._numVerticesPerSideChanged=!0,h.numVerticesPerSide=n,h.samplerDataVersion++,e=!0);a.changed&&(this._samplerDataChanged=!0,h.samplerData=a.samplerData,h.samplerDataVersion++,e=!0);ea.equals(h.clippingArea,l)||(this._clippingAreaChanged=!0,h.clippingArea=l,e=!0);a=d.surface;d=a.wireframe;h.wireframe!==
d&&(this._wireframeChanged=!0,h.wireframe=d,e=!0);a=a.shading;h.shading!==a&&(this._shadingChanged=a,e=h.shading=a);this._geometryStateChangedSinceLastUpdate||(this._geometryStateChangedSinceLastUpdate=e);e&&this._markAllEdgesAndCornersDirty();this._hasGeometry=!0;return this._geometryStateChangedSinceLastUpdate};p._createGeometry=function(a){this.tile.createGeometry();const d=this.geometryInfo.vertexAttributes,h=this.geometryInfo.indices,n=a.gl;this._vao=new na.VertexArrayObject(a,oa.terrainVertexAttributeLocations,
{geometry:ia.glLayout(d.layout)},{geometry:Z.BufferObject.createVertex(a,n.STATIC_DRAW,d.buffer)},Z.BufferObject.createIndex(a,n.STATIC_DRAW,h));this._hasGeometry=!0};p._releaseGeometry=function(){this._hasGeometry=!1;this.intersectionData=null;if(!this._vao)return!1;this._vao.dispose();this._vao=null;Y.releaseGeometry(this.geometryInfo);return!0};p.setTextureReference=function(a,d=V.ActivationTime.Immediate){u.isSome(a)&&a.texture!==this._texture&&this.releaseTexture();this._textureRef.push(a,d)};
p._getElevationInfo=function(){const a=this.geometryState.samplerData,d=this.tile.layerInfo[U.LayerClass.ELEVATION],h=d.length;let n=Array(h),l=0;var e=0;let f=!1;for(let m=0;m<h;m++){var c=d[m];if(u.isSome(c.upsampleInfo)){c=c.upsampleInfo.tile;var g=c.layerInfo[U.LayerClass.ELEVATION][m].data;g=g&&g.samplerData;a&&a[l]===g||(f=!0);n[l++]=g;e=Math.max(e,c.lij[0])}else c.data&&(g=this.tile.surface.layerViewByIndex(m,U.LayerClass.ELEVATION),ma.fallsWithinLayer(this.tile,g.layer,!1)&&(e=c.data,a&&a[l]===
e.samplerData||(f=!0),n[l++]=e.samplerData,e=this.tile.level))}u.isSome(a)&&a.length!==l&&(f=!0);0<l?n.length=l:n=null;return{changed:f,samplerData:n,maxTileLevel:e}};p.checkGeometryWaterproofness=function(){if(b.ENABLE_TERRAIN_INTERNAL_CHECKS){var a=this.tile;b.internalAssert(a?.isLoaded);if(a.isLoaded&&a.intersectsClippingArea&&0!==a.level){var d=a.surface.extent;if(!u.isSome(d)||a.intersectsExtent(d)){var h=b.neighborEdgeIndices.map((f,c)=>u.isSome(d)?0>(2>c?-1:1)*(a.extent[3-c]-d[3-c]):!1),n=
a.level;b.internalAssert(0===this._dirtyCorners);b.internalAssert(0===this._dirtyEdges);b.internalAssert(0===this._dirtyEdgeResolutions);b.internalAssert(!this._numVerticesPerSideChanged);b.internalAssert(!this._samplerDataChanged);b.internalAssert(!this._clippingAreaChanged);b.internalAssert(!this._wireframeChanged);var l=b.neighborCornerIndices.map(f=>a.findNeighborCornerTileExact(f,c=>!c.intersectsClippingArea||c.isLoaded||c.level===a.level)??null).map(f=>f?.intersectsClippingArea?f:null),e=this.geometryState.neighborData;
for(let f=0;4>f;++f){const c=e.cornerPeerNeighbors[f],g=l[f];b.internalAssert(g===c,`Tile[${a.lij}].corner[${f}] out of date: cur=[${c?.lij}] exp=[${g?.lij}]`)}b.neighborEdgeIndices.forEach((f,c)=>{if(!h[c]){var g=a.findNeighborTile(f,J=>(J.level===n||J?.isLoaded)&&J?.intersectsClippingArea);if(g){b.internalAssert(g.isLoaded||g.level===a.level);b.internalAssert(g===this.geometryState.neighborData.edgePeerNeighbors[c]);var m=n-g.level;if(g.isLoaded){b.internalAssert(ka.isEdgeNeighbor(a,g,f));b.internalAssert(0<=
m);var r=2**m;if(0>m)b.internalAssert(!1);else{var k=a.renderData.geometryInfo,t=k.outerEdges[c],v=k.numVerticesPerSide-1,w=g.renderData.geometryInfo;if(w){k=this.geometryState.neighborData.edgePeerNeighbors[c];if(k?.isLoaded||k.isLoaded)b.internalAssert(k===k),b.internalAssert(a.renderData.geometryState.neighborData.edgePeerNeighborSamplerVersions[c]===k.renderData.geometryState.samplerDataVersion),b.internalAssert(this.geometryState.neighborData.edgePeerNeighborSamplerVersions[c]===k.renderData.geometryState.samplerDataVersion);
var N=(c+2)%4,B=w.outerEdges[N];k=t.count-1;var O=B.count-1;b.internalAssert(k*r===O,`Tile[${a.lij}]:e${c},res=${k} edgeRes mismatch with`+` Neighbor[${g.lij}]:e${N},res=${O} (expected:${k*r})`);k=a.extent;O=f===S.NeighborIndex.NORTH||f===S.NeighborIndex.SOUTH;var C=B.count-1,E=C/2**m,D=t.count-1;if(1>E)b.internalAssert(1===D);else{b.internalAssert(E===D);b.internalAssert(W.isPowerOfTwo(E));w=w.numVerticesPerSide-1;b.internalAssert(0<m||E===Math.max(w,v));m=a.getNeighborEdgeStartVertexIndex(c,g);
b.internalAssert(0<=m&&m<r);r=m*E;b.internalAssert(0<=r&&r<=C-E);var F=0,G=r;t.getVertexPos(z,0);t.getVertexPos(A,t.count-1);r=q.distance(z,A);r=Math.max(1,1E-4*r);for(m=0;m<=E;++m){t.getVertexPos(z,F);B.getVertexPos(A,G);w=m/E;v=O?k[0]+w*(k[2]-k[0]):f===S.NeighborIndex.WEST?k[0]:k[2];const J=O?f===S.NeighborIndex.SOUTH?k[1]:k[3]:k[1]+w*(k[3]-k[1]),T=a.surface.extent;if(u.isNone(T)||ha.containsXY(T,v,J)){w=q.dist(z,A);C=q.len(z)-X.earth.radius;D=q.len(A)-X.earth.radius;const aa=w<r;aa||(console.warn("Tile edge vertex position mismatch: between"+
` [${a.lij}].edge${c}[${F}/${t.count}] and`+` [${g.lij}].edge${N}[${G}/${B.count}]`),u.isSome(T)&&console.warn("  surface extent\x3d ",T," x,y\x3d",v,",",J),v=x.create(),q.subtract(v,a.renderData.localOrigin,g.renderData.localOrigin),0<q.len(v)&&console.warn(`   localOrigins: ${a.renderData.localOrigin} vs ${g.renderData.localOrigin}`+` d=${q.len(v)} [${v}]`),(()=>{const P=x.clone(z),Q=x.clone(A);a.updateEdgeElevations();g.updateEdgeElevations();t.getVertexPos(z,F);B.getVertexPos(A,G);const H=x.create();
q.sub(H,z,P);0<q.len(H)&&console.warn(`  XXX Tile[${a.lij}] edge out of date: ${P} vs ${z} d=${q.len(H)} [${H}]`);q.sub(H,A,Q);0<q.len(H)&&console.warn(`  XXX Neighbor[${g.lij}] edge out of date: ${Q} vs ${A} d=${q.len(H)} [${H}]`)})(),b.internalAssert(aa,"Mismatch in tile"+` [${a.lij}].edge[${c}][${F}/${t.count}] vs neighbor`+` [${g.lij}].edge[${N}][${G}/${B.count}]`+` ${b.v32s(z)} vs ${b.v32s(A)}  dist=${w} h(t|n|d)=${C}|${D}|${D-C}`));if(a.surface.shading){t.getNormal(K,F);B.getNormal(L,G);q.normalize(ba,
K);q.normalize(ca,L);const P=q.dot(ba,ca);v=.01>1-P||a===g;if(!v){const Q=x.create();q.sub(Q,K,L);w=()=>`Mismatch in tile edge normal ${b.lij2s(a.lij)} (${F}/${t.count-1}) edge ${c} vs neighbor ${b.lij2s(g.lij)}  (${G}/${B.count-1}) nedge ${N} :`+`${b.v32s(K)} vs ${b.v32s(L)}  dot = ${P} : ${b.v32s(Q)}`;console.warn("Mismatch in tile edge normal: ",w());a.updateEdgeElevations();g.updateEdgeElevations();C=x.create();D=x.create();t.getNormal(C,F);B.getNormal(D,G);q.equals(K,C)||console.warn("Missing update in tile normal: ",
b.v32s(K)," \x3d\x3e ",b.v32s(C));q.equals(L,D)||console.warn("Missing update in neighbor normal: ",b.v32s(L)," \x3d\x3e ",b.v32s(D));b.internalAssert(v,w())}}}F+=1;G+=1}}}else b.internalAssert(!1)}}else b.internalAssert(!g.isLeaf),b.internalAssert(0===m)}else f=!a.surface.updatingRootTiles&&u.isSome(a.surface.rootTiles)&&0<a.surface.rootTiles.length&&a.shouldHaveNeighbor(f),b.internalAssert(!f)}})}}}};da._createClass(M,[{key:"tile",get:function(){return this._tile}},{key:"hasGeometry",get:function(){return this._hasGeometry}},
{key:"vao",get:function(){return this._vao}},{key:"textureReference",get:function(){return this._textureRef.current}},{key:"nextTextureReference",get:function(){return this._textureRef.next}},{key:"textureFadeFactor",get:function(){return this._textureRef.fadeFactor}},{key:"textureIsFading",get:function(){return this._textureRef.isFading}},{key:"estimatedGeometryMemoryUsage",get:function(){const a=u.mapOr(this.intersectionData,0,d=>d.estimatedMemoryUsage);return(this.geometryInfo.indices?.byteLength??
0)+(this.geometryInfo.vertexAttributes?.byteLength??0)+a}},{key:"textureDescriptor",get:function(){return u.isSome(this._texture)?this._texture.descriptor:null}},{key:"test",get:function(){return{hasTexture:null!=this._texture}}}]);return M}();const z=x.create(),A=x.create(),K=x.create(),L=x.create(),ba=x.create(),ca=x.create(),y=[null,null,null,null];Object.defineProperty(R,"ActivationTime",{enumerable:!0,get:()=>V.ActivationTime});R.PatchRenderData=pa;R.neighborTileIfLoadedOrSelf=I;Object.defineProperties(R,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});