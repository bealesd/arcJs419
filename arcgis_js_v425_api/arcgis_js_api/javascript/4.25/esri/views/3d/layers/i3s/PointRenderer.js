// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../core/PooledArray ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/vec4 ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/plane ../../../../geometry/support/ray ./PointHighlights ../../support/orientedBoundingBox ../../webgl-engine/core/shaderLibrary/ShaderOutput ../../webgl-engine/lib/DefaultVertexAttributeLocations ../../webgl-engine/lib/Intersector ../../webgl-engine/lib/IntersectorInterfaces ../../webgl-engine/lib/VertexArrayObject ../../webgl-engine/lib/VertexAttribute ../../../../chunks/PointRenderer.glsl ../../webgl-engine/shaders/PointRendererTechnique ../../webgl-engine/shaders/PointRendererTechniqueConfiguration ../../../webgl/BufferObject ../../../webgl/enums ../../../webgl/VertexElementDescriptor".split(" "),
function(J,aa,m,fa,v,G,ha,q,ia,ja,ka,K,r,la,ma,H,na,L,T,oa,pa,ba,z,M){function U(f,g,a,b,c){if(a.drawScreenSpace)return a.fixedSize*g*b;c=T.getMaxPointSizeScreenspace(c)*g*b;return a.useFixedSizes?Math.min(a.fixedSize/2,c):0<a.screenMinSize?Math.min(Math.max(a.screenMinSize*g*b,f/2),c):Math.min(f/2,c)}function V(f,g,a,b,c){return a.drawScreenSpace?0:U(f,g,a,b,c)}function ca(f){return m.isSome(f.component)?f.component:-1}function qa(f,g){if(m.isNone(f))return f;f=f.filter(a=>a.id!==g);return 0===f.length?
null:f}function da(f){return m.isSome(f.dist)&&m.isSome(f.point)&&m.isSome(f.pointId)&&m.isSome(f.node)}const ra={positions:[new M.VertexElementDescriptor(L.VertexAttribute.POSITION,3,z.DataType.FLOAT,0,12)],colors:[new M.VertexElementDescriptor(L.VertexAttribute.COLOR,3,z.DataType.UNSIGNED_BYTE,0,3,!0)]};L=function(){function f(a){this._params=a;this.type=H.IntersectorType.PCL;this.isGround=!1;this._passParameters=new T.PointRendererPassParameters;this._highlights=new ka.PointHighlights({forEachNode:b=>
this.forEachNode(b),addHighlight:(b,c,e)=>this._addHighlight(b,c,e),removeHighlight:(b,c)=>this._removeHighlight(b,c)});this.canRender=!0;this.layerUid="";this._slicePlaneEnabled=!1;this._techniqueConfig=new pa.PointRendererTechniqueConfiguration;this._nodes=new fa}var g=f.prototype;g.initializeRenderContext=function(a){this._context=a;this._techniqueRep=this._context.shaderTechniqueRepository;a.requestRender()};g.uninitializeRenderContext=function(){};g.intersect=function(a,b,c,e){const k=G.create(),
h=G.create(),N=G.create(),C=G.create(),I=ia.create(),A=a.camera.perScreenPixelRatio/2,O=a.camera.near;v.subtract(h,e,c);const P=1/v.length(h);v.scale(h,h,P);v.negate(N,h);ha.set(I,h[0],h[1],h[2],-v.dot(h,c));const w=new W,x=new W,ea=[],Q=q.create(),R=q.create(this._passParameters.clipBox);q.offset(R,-c[0],-c[1],-c[2],R);this._nodes.forAll(d=>{const l=d.splatSize*this._passParameters.scaleFactor;var p=K.minimumDistancePlane(d.obb,I),n=K.maximumDistancePlane(d.obb,I);p-=V(l,p+O,this._passParameters,
A,d.isLeaf);n-=V(l,n+O,this._passParameters,A,d.isLeaf);p=null!=w.dist&&null!=x.dist&&w.dist<p*P&&x.dist>n*P;if(!(0>n||p)&&(n=U(l,n+O,this._passParameters,A,d.isLeaf),K.intersectLine(d.obb,c,h,n))){n*=n;K.toAaBoundingBox(d.obb,Q);q.offset(Q,-c[0],-c[1],-c[2],Q);p=!q.contains(R,Q);v.subtract(C,d.origin,c);var sa=d.coordinates.length/3;for(let B=0;B<sa;B++){k[0]=C[0]+d.coordinates[3*B];k[1]=C[1]+d.coordinates[3*B+1];k[2]=C[2]+d.coordinates[3*B+2];if(p&&!q.containsPoint(R,k))continue;var t=v.dot(k,h),
S=v.squaredLength(k)-t*t;if(S>n)continue;var D=t+O;const X=V(l,D,this._passParameters,A,d.isLeaf);if(0>t-X)continue;D-=X;D=U(l,D,this._passParameters,A,d.isLeaf);if(S>D*D)continue;const E=(t-X)*P;t=y=>{var Y=B,F=y.point;m.isNone(F)&&(F=G.create());F[0]=d.origin[0]+d.coordinates[3*Y];F[1]=d.origin[1]+d.coordinates[3*Y+1];F[2]=d.origin[2]+d.coordinates[3*Y+2];y.point=F;y.dist=E;y.normal=N;y.node=d;y.pointId=B;y.layerUid=this.layerUid;return y};(null==w.dist||E<w.dist)&&(null==b||b(c,e,E))&&t(w);a.options.store!==
H.StoreResults.MIN&&(null==x.dist||E>x.dist)&&(null==b||b(c,e,E))&&t(x);a.options.store!==H.StoreResults.ALL||null!=b&&!b(c,e,E)||(S=new W,ea.push(t(S)))}}});const ta=d=>{const {layerUid:l,node:p,pointId:n}=d;return{point:d.point,layerUid:l,graphicUid:n,createGraphic:()=>this._params.createGraphic(p,n,d.point)}},Z=(d,l)=>{const p=ta(l);d.set(this.type,p,l.dist,l.normal)};if(da(w)){var u=a.results.min;(null==u.dist||w.dist<u.dist)&&Z(u,w)}da(x)&&a.options.store!==H.StoreResults.MIN&&(u=a.results.max,
(null==u.dist||x.dist>u.dist)&&Z(u,x));if(a.options.store===H.StoreResults.ALL){u=ja.fromPoints(c,e);for(const d of ea){const l=ma.newIntersectorResult(u);Z(l,d);a.results.all.push(l)}}};g.prepareTechnique=function(a){if(0===this._nodes.length||a.output!==r.ShaderOutput.Color&&a.output!==r.ShaderOutput.Depth&&a.output!==r.ShaderOutput.Highlight)return null;this._nodes.forAll(b=>{null==b.vao&&this._initNode(a,b)});this._techniqueConfig.drawScreenSize=this._passParameters.drawScreenSpace;this._techniqueConfig.useFixedSizes=
this._passParameters.useFixedSizes;this._techniqueConfig.hasSlicePlane=this._slicePlaneEnabled;this._techniqueConfig.hasOccludees=a.bindParameters.hasOccludees;this._techniqueConfig.clippingEnabled=this._clippingEnabled;this._techniqueConfig.output=a.output===r.ShaderOutput.Depth?r.ShaderOutput.Depth:a.output===r.ShaderOutput.Highlight?r.ShaderOutput.Highlight:r.ShaderOutput.Color;return this._techniqueRep.releaseAndAcquire(oa.PointRendererTechnique,this._techniqueConfig,this._technique)};g.render=
function(a,b){const c=a.rctx,e=c.bindTechnique(b,this._passParameters,a.bindParameters),k=a.output===r.ShaderOutput.Highlight;this._nodes.forAll(h=>{0===h.coordinates.length||k&&!h.highlights||(e.bindDraw(h,a.bindParameters,this._passParameters),c.bindVAO(h.vao),k?this._renderHighlightFragments(c,h):c.drawArrays(z.PrimitiveType.POINTS,0,h.coordinates.length/3))})};g._renderHighlightFragments=function(a,b){var c=b.highlights;if(!m.isNone(c)){b=m.unwrap(c[0].component);var e=b+1;for(let k=1;k<c.length;k++){const h=
m.unwrap(c[k].component);h!==e&&(e-=b,0<e&&a.drawArrays(z.PrimitiveType.POINTS,b,e),b=h);e=h+1}c=e-b;0<c&&a.drawArrays(z.PrimitiveType.POINTS,b,c)}};g.addNode=function(a){this._nodes.push(a);this._highlights.nodeAdded(a);this._requestRender()};g.removeNode=function(a){let b=null;this._nodes.filterInPlace(c=>c.id===a?(b=c,c.vao=m.disposeMaybe(c.vao),this._highlights.nodeRemoved(c),!1):!0);this._requestRender();return b};g.forEachNode=function(a){this._nodes.forAll(a)};g.removeAll=function(){this._nodes.forAll(a=>
a.vao=m.disposeMaybe(a.vao));this._highlights.removeAll();this._nodes.clear();this._requestRender()};g.highlight=function(a){return this._highlights.add(a)};g._addHighlight=function(a,b,c){var e=a.highlights;m.isNone(e)&&(e=[]);b={component:b,id:c};e.push(b);b=ca(b);for(c=e.length-1;0<c&&b<ca(e[c-1]);)[e[c-1],e[c]]=[e[c],e[c-1]],--c;a.highlights=e;this._requestRender()};g._removeHighlight=function(a,b){a.highlights=qa(a.highlights,b);this._requestRender()};g._initNode=function(a,b){a=a.rctx;b.vao=
new na.VertexArrayObject(a,la.Default3D,ra,{positions:ba.BufferObject.createVertex(a,z.Usage.STATIC_DRAW,b.coordinates),colors:ba.BufferObject.createVertex(a,z.Usage.STATIC_DRAW,b.rgb)})};g._requestRender=function(){this._context&&this._context.requestRender()};aa._createClass(f,[{key:"needsHighlight",get:function(){return this._highlights.hasHighlights}},{key:"useFixedSizes",get:function(){return this._passParameters.useFixedSizes},set:function(a){this._passParameters.useFixedSizes!==a&&(this._passParameters.useFixedSizes=
a,this._requestRender())}},{key:"scaleFactor",get:function(){return this._passParameters.scaleFactor},set:function(a){this._passParameters.scaleFactor!==a&&(this._passParameters.scaleFactor=a,this._requestRender())}},{key:"minSizePx",get:function(){return this._passParameters.minSizePx},set:function(a){this._passParameters.minSizePx!==a&&(this._passParameters.minSizePx=a,this._requestRender())}},{key:"useRealWorldSymbolSizes",get:function(){return this._passParameters.useRealWorldSymbolSizes},set:function(a){this._passParameters.useRealWorldSymbolSizes!==
a&&(this._passParameters.useRealWorldSymbolSizes=a,this._requestRender())}},{key:"size",get:function(){return this._passParameters.size},set:function(a){this._passParameters.size!==a&&(this._passParameters.size=a,this._requestRender())}},{key:"sizePx",get:function(){return this._passParameters.sizePx},set:function(a){this._passParameters.sizePx!==a&&(this._passParameters.sizePx=a,this._requestRender())}},{key:"clippingBox",set:function(a){q.set(this._passParameters.clipBox,a||q.POSITIVE_INFINITY)}},
{key:"_clippingEnabled",get:function(){return!q.equals(this._passParameters.clipBox,q.POSITIVE_INFINITY,(a,b)=>a===b)}},{key:"slicePlaneEnabled",get:function(){return this._slicePlaneEnabled},set:function(a){this._slicePlaneEnabled!==a&&(this._slicePlaneEnabled=a,this._requestRender())}}]);return f}();M=function(f){function g(a,b,c,e,k,h,N,C,I=null,A=null){b=f.call(this,c,k,b)||this;b.id=a;b.obb=e;b.coordinates=h;b.rgb=N;b.attributes=C;b.pointIdFilterMap=I;b.highlights=A;return b}aa._inheritsLoose(g,
f);return g}(T.PointRendererDrawParameters);let W=function(){this.normal=this.dist=this.point=this.pointId=this.node=null;this.layerUid=""};J.PointRenderer=L;J.PointRendererNode=M;J.isInstanceOfNode=function(f){return f.hasOwnProperty("splatSize")};Object.defineProperties(J,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});