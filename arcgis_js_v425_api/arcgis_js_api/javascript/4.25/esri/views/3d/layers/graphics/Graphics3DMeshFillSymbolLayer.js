// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../Color ../../../../core/has ../../../../core/maybe ../../../../chunks/mat3 ../../../../chunks/mat3f64 ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/vec4f64 ../../../../geometry/projection ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/MeshComponent ../../../../geometry/support/MeshMaterialMetallicRoughness ../../../../geometry/support/buffer/BufferView ../../../../chunks/vec32 ../../../../geometry/support/meshUtils/projection ../../../../layers/graphics/dehydratedFeatures ../../../ViewingMode ../../glTF/internal/TextureTransformUtils ./ElevationAligners ./elevationAlignmentUtils ./ElevationContext ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolLayer ../support/edgeUtils ../support/symbolColorUtils ../../support/debugFlags ../../webgl-engine/lib/basicInterfaces ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/Indices ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/Texture ../../webgl-engine/lib/VertexAttribute ../../webgl-engine/materials/DefaultMaterial ../../webgl-engine/materials/NativeLineMaterial ../../../webgl/enums".split(" "),
function(X,Y,N,Z,g,aa,ja,Q,C,z,D,ba,G,O,ka,la,R,S,K,ma,na,L,ca,da,oa,pa,qa,ra,ea,fa,w,T,sa,ta,ua,m,va,ha,U){const wa=["mesh"];Z=function(E){function V(a,b,c,d){a=E.call(this,a,b,c,d)||this;a._materials=new Map;a._textures=new Map;a.ensureDrapedStatus(!1);return a}Y._inheritsLoose(V,E);var h=V.prototype;h.doLoad=function(){var a=Y._asyncToGenerator(function*(){fa.DRAW_MESH_GEOMETRY_NORMALS&&(this._debugVertexNormalMaterial=new ha.NativeLineMaterial({color:[1,0,1,1]}),this._debugFaceNormalMaterial=
new ha.NativeLineMaterial({color:[0,1,1,1]}))});return function(){return a.apply(this,arguments)}}();h.destroy=function(){E.prototype.destroy.call(this);this._context.stage.removeMany(Array.from(this._materials.values(),a=>a.material));this._context.stage.removeMany(Array.from(this._textures.values()));this._materials.clear();this._textures.clear()};h.createGraphics3DGraphic=function(a){const b=a.graphic;if(!this._validateGeometry(b.geometry,wa,"fill on mesh-3d"))return null;const c=this.setGraphicElevationContext(b,
new oa.ElevationContext);return this._createAs3DShape(b,a.renderingInfo,c,b.uid)};h.layerOpacityChanged=function(a,b){const c=this._getLayerOpacity();this._materials.forEach(d=>{d.material.setParameters({layerOpacity:c});const e=d.material.parameters;this._setMaterialTransparentParameter(e,d);d.material.setParameters({transparent:e.transparent})});a.forEach(d=>{d=b(d);g.isSome(d)&&d.layerOpacityChanged(c,this._context.isAsync)})};h.layerElevationInfoChanged=function(a,b){return this.updateGraphics3DGraphicElevationInfo(a,
b,da.needsElevationUpdates3D)};h.slicePlaneEnabledChanged=function(a,b){this._materials.forEach(c=>{c.material.setParameters({hasSlicePlane:this._context.slicePlaneEnabled})});a.forEach(c=>{c=b(c);g.isSome(c)&&c.slicePlaneEnabledChanged(this._context.slicePlaneEnabled,this._context.isAsync)});return!0};h.physicalBasedRenderingChanged=function(){const a=this._usePBR();this._materials.forEach(b=>b.material.setParameters({usePBR:a}));return!0};h.pixelRatioChanged=function(){return!0};h._requiresSymbolVertexColors=
function(){return this._drivenProperties.color||this._drivenProperties.opacity};h._colorOrTextureUid=function(a){return g.isNone(a)?"-":a instanceof N?a.toHex():a.contentHash};h._materialPropertiesDefault=function(a,b){const c=this._requiresSymbolVertexColors(),d=!!a.vertexAttributes.color;a=!!a.vertexAttributes.tangent;return{hasSymbolVertexColors:c,hasVertexColors:d,hasVertexTangents:a,uid:`vc:${d},vt:${a},vct${b},svc:${c}`}};h._materialProperties=function(a,b,c){a=this._materialPropertiesDefault(a,
c);if(!b.material)return a;const {color:d,colorTexture:e,normalTexture:f,doubleSided:k,alphaCutoff:l,alphaMode:A}=b.material;c=this._colorOrTextureUid(d);var x=this._colorOrTextureUid(e),y=this._colorOrTextureUid(f);a.color=d;a.colorTexture=e;a.normalTexture=f;a.uid=`${a.uid},cmuid:${c},ctmuid:${x},ntmuid:${y},ds:${k},ac:${l},am:${A}`;if(b.material instanceof la){const {metallic:t,roughness:q,metallicRoughnessTexture:u,emissiveColor:B,emissiveTexture:r,occlusionTexture:n}=b.material;c=this._colorOrTextureUid(u);
x=this._colorOrTextureUid(B);y=this._colorOrTextureUid(r);const F=this._colorOrTextureUid(n);a.metallic=t;a.roughness=q;a.metallicRoughnessTexture=u;a.emissiveColor=B;a.emissiveTexture=r;a.occlusionTexture=n;a.colorTextureTransform=b.material.colorTextureTransform;a.normalTextureTransform=b.material.normalTextureTransform;a.emissiveTextureTransform=b.material.emissiveTextureTransform;a.occlusionTextureTransform=b.material.occlusionTextureTransform;a.metallicRoughnessTextureTransform=b.material.metallicRoughnessTextureTransform;
a.uid=`${a.uid},mrm:${t},mrr:${q},mrt:${c},emuid:${x},etmuid:${y},otmuid:${F}`}return a};h._setInternalColorValueParameters=function(a,b){b.diffuse=N.toUnitRGB(a);b.opacity=a.a};h._getLoadableTextureResource=function(a){return a.data?a.data:a.url};h._getInternalTextureId=function(a){a=this._getInternalTexture(a,w.AlphaDiscardMode.Opaque);return g.isSome(a)?a.id:null};h._getInternalTexture=function(a,b){const c=this._getLoadableTextureResource(a);if(!c)return null;const d=`${a.contentHash}/${b}`;let e=
this._textures.get(d);e||(e=new ua.Texture(c,{mipmap:!0,wrap:this._castTextureWrap(a.wrap),noUnpackFlip:!0,preMultiplyAlpha:b!==w.AlphaDiscardMode.Opaque}),this._textures.set(d,e),this._context.stage.add(e),this._context.stage.loadImmediate(e));return e};h._castTextureWrap=function(a="repeat"){return"string"===typeof a?(a=this._castTextureWrapIndividual(a),{s:a,t:a}):{s:this._castTextureWrapIndividual(a.horizontal),t:this._castTextureWrapIndividual(a.vertical)}};h._castTextureWrapIndividual=function(a){switch(a){case "clamp":return U.TextureWrapMode.CLAMP_TO_EDGE;
case "mirror":return U.TextureWrapMode.MIRRORED_REPEAT;default:return U.TextureWrapMode.REPEAT}};h._setInternalMaterialParameters=function(a,b){g.isSome(a.color)&&this._setInternalColorValueParameters(a.color,b);if(g.isSome(a.colorTexture)){const c=this._getInternalTexture(a.colorTexture,b.textureAlphaMode);g.isSome(c)?(b.textureId=c.id,b.textureAlphaPremultiplied=!!c.params.preMultiplyAlpha):b.textureId=void 0}g.isSome(a.normalTexture)&&(b.normalTextureId=this._getInternalTextureId(a.normalTexture));
g.isSome(a.emissiveColor)&&(b.emissiveFactor=N.toUnitRGB(a.emissiveColor));g.isSome(a.emissiveTexture)&&(b.emissiveTextureId=this._getInternalTextureId(a.emissiveTexture));g.isSome(a.occlusionTexture)&&(b.occlusionTextureId=this._getInternalTextureId(a.occlusionTexture));g.isSome(a.metallicRoughnessTexture)&&(b.metallicRoughnessTextureId=this._getInternalTextureId(a.metallicRoughnessTexture));b.colorTextureTransformMatrix=L.getTransformMatrix(a.colorTextureTransform);b.normalTextureTransformMatrix=
L.getTransformMatrix(a.normalTextureTransform);b.occlusionTextureTransformMatrix=L.getTransformMatrix(a.occlusionTextureTransform);b.emissiveTextureTransformMatrix=L.getTransformMatrix(a.emissiveTextureTransform);b.metallicRoughnessTextureTransformMatrix=L.getTransformMatrix(a.metallicRoughnessTextureTransform)};h._setExternalMaterialParameters=function(a){var b=this._drivenProperties.color;let c=g.isSome(this.symbolLayer.material)?this.symbolLayer.material.colorMixMode:null;b?a.externalColor=ba.ONES:
(b=g.isSome(this.symbolLayer.material)?this.symbolLayer.material.color:null,g.isSome(b)?a.externalColor=N.toUnitRGBA(b):(c=null,a.externalColor=ba.ONES));c&&(a.colorMixMode=c);a.castShadows=!!this.symbolLayer.castShadows};h._hasTransparentVertexColors=function(a){a=a.vertexAttributes.color;if(g.isNone(a))return!1;for(let b=3;b<a.length;b+=4)if(255!==a[b])return!0;return!1};h._getOrCreateMaterial=function(a,b){var c=b.material?.color,d=b.material?.colorTexture,e=b.material?.alphaMode;const f="blend"===
e;c="opaque"!==e&&(this._hasTransparentVertexColors(a)||g.isSome(c)&&1>c.a||g.isSome(d)&&d.transparent||f);a=this._materialProperties(a,b,c);if(d=this._materials.get(a.uid))return d.material;c={material:null,isComponentTransparent:c,alphaMode:b.material?b.material.alphaMode:"opaque"};d=null==a.metallicRoughnessTexture&&null==a.metallic&&null==a.roughness;e={usePBR:this._usePBR(),isSchematic:d,hasVertexColors:a.hasVertexColors,hasSymbolColors:a.hasSymbolVertexColors,hasVertexTangents:a.hasVertexTangents,
ambient:D.ZEROS,diffuse:D.ONES,opacity:1,doubleSided:!0,doubleSidedType:"winding-order",cullFace:w.CullFaceOptions.None,layerOpacity:this._getLayerOpacity(),hasSlicePlane:this._context.slicePlaneEnabled,initTextureTransparent:!0};d||(e.mrrFactors=[null!=a.metallic?a.metallic:1,null!=a.roughness?a.roughness:1,.5]);b.material&&(e.doubleSided=b.material.doubleSided,e.cullFace=b.material.doubleSided?w.CullFaceOptions.None:w.CullFaceOptions.Back,e.textureAlphaCutoff=b.material.alphaCutoff);this._setExternalMaterialParameters(e);
this._setMaterialTransparentParameter(e,c);this._setInternalMaterialParameters(a,e);b=new va.DefaultMaterial(e);c.material=b;this._materials.set(a.uid,c);this._context.stage.add(b);return b};h._usePBR=function(){return this._context.physicalBasedRenderingEnabled};h._setMaterialTransparentParameter=function(a,b){a.transparent=this.needsDrivenTransparentPass||b.isComponentTransparent||1>a.layerOpacity||1>a.opacity||a.externalColor&&1>a.externalColor[3];a.textureAlphaMode="auto"===b.alphaMode?a.transparent?
w.AlphaDiscardMode.MaskBlend:w.AlphaDiscardMode.Opaque:"opaque"===b.alphaMode?w.AlphaDiscardMode.Opaque:"mask"===b.alphaMode?w.AlphaDiscardMode.Mask:w.AlphaDiscardMode.Blend};h._addDebugNormals=function(a,b,c,d){var e=b.length,f=a.spatialReference.isGeographic?20015077/180:1;const k=.1*Math.max(a.extent.width*f,a.extent.height*f,a.extent.zmax-a.extent.zmin),l=[],A=[];a=[];f=[];for(let B=0;B<e;B++){var x=b[B],y=x.vertexAttributes.get(m.VertexAttribute.POSITION),t=x.vertexAttributes.get(m.VertexAttribute.NORMAL);
const r=x.indices.get(m.VertexAttribute.POSITION);x=x.indices.get(m.VertexAttribute.NORMAL);y=y.data;t=t.data;for(let n=0;n<r.length;n++){var q=3*r[n];const F=3*x[n];for(var u=0;3>u;u++)l.push(y[q+u]);for(u=0;3>u;u++)l.push(y[q+u]+t[F+u]*k);A.push(A.length);A.push(A.length);if(0===n%3){this._calculateFaceNormal(y,r,n,H);this._getFaceVertices(y,r,n,p,I,J);z.add(p,p,I);z.add(p,p,J);z.scale(p,p,1/3);for(q=0;3>q;q++)a.push(p[q]);for(q=0;3>q;q++)a.push(p[q]+H[q]*k);f.push(f.length);f.push(f.length)}}}e=
new T.Geometry([[m.VertexAttribute.POSITION,{data:l,size:3,exclusive:!0}]],[[m.VertexAttribute.POSITION,A]],w.PrimitiveType.Line);b.push(e);c.push(this._debugVertexNormalMaterial);d.push(C.clone(d[0]));e=new T.Geometry([[m.VertexAttribute.POSITION,{data:a,size:3,exclusive:!0}]],[[m.VertexAttribute.POSITION,f]],w.PrimitiveType.Line);b.push(e);c.push(this._debugFaceNormalMaterial);d.push(C.clone(d[0]))};h._createAs3DShape=function(a,b,c,d){a=a.geometry;if("mesh"!==a.type)return null;b=this._createGeometryInfo(a,
b,d);if(!b)return null;const {geometries:e,materials:f,transformations:k,objectTransformation:l}=b;fa.DRAW_MESH_GEOMETRY_NORMALS&&this._addDebugNormals(a,e,f,k);d=new ta.Object3D({geometries:e,materials:f,transformations:k,metadata:{layerUid:this._context.layer.uid,graphicUid:d}});d.transformation=l;b=this._createEdgeMaterial();b=g.isSome(b)?{baseMaterial:f[0],edgeMaterials:[b],properties:{mergeGeometries:!0,hasSlicePlane:this._context.slicePlaneEnabled}}:null;b=new pa.Graphics3DObject3DGraphicLayer(this,
d,e,null,null,ca.perObjectElevationAligner,c,b);b.needsElevationUpdates=da.needsElevationUpdates3D(c.mode);b.useObjectOriginAsAttachmentOrigin=!0;b.elevationContext.centerPointInElevationSR=this._getCenterPointInElevationSR(d);b.alignedSampledElevation=ca.perObjectElevationAligner(b,b.elevationContext,this._context.elevationProvider,this._context.renderCoordsHelper);return b};h._getCenterPointInElevationSR=function(a){const b=ma.makeDehydratedPoint(0,0,0,g.isSome(this._context.elevationProvider.spatialReference)?
this._context.elevationProvider.spatialReference:null);G.projectVectorToDehydratedPoint([a.transformation[12],a.transformation[13],a.transformation[14]],this._context.renderCoordsHelper.spatialReference,b);return b};h._createComponentNormals=function(a,b,c,d){switch(c.shading||"flat"){case "source":return this._createComponentNormalsSource(a,b,c,d);case "flat":return this._createComponentNormalsFlat(a,d);case "smooth":return this._createComponentNormalsSmooth(a,d)}};h._createComponentNormalsSource=
function(a,b,c,d){if(g.isNone(b))return this._createComponentNormalsFlat(a,d);let e=!1;if(!c.trustSourceNormals)for(c=0;c<d.length;c+=3){this._calculateFaceNormal(a,d,c,H);for(let f=0;3>f;f++){const k=3*d[c+f];p[0]=b[k+0];p[1]=b[k+1];p[2]=b[k+2];0>z.dot(H,p)&&(b[k+0]=-b[k+0],b[k+1]=-b[k+1],b[k+2]=-b[k+2],e=!0)}}return{normals:b,indices:d,didFlipNormals:e}};h._createComponentNormalsFlat=function(a,b){const c=new Float32Array(b.length),d=Array(3*b.length);for(let e=0;e<b.length;e+=3){const f=this._calculateFaceNormal(a,
b,e,H);for(let k=0;3>k;k++)c[e+k]=f[k],d[e+k]=e/3}return{normals:c,indices:d,didFlipNormals:!1}};h._createComponentNormalsSmooth=function(a,b){const c={};for(var d=0;d<b.length;d+=3){var e=this._calculateFaceNormal(a,b,d,H);for(var f=0;3>f;f++){var k=b[d+f];let l=c[k];l||(l={normal:D.create(),count:0},c[k]=l);z.add(l.normal,l.normal,e);l.count++}}a=new Float32Array(3*b.length);d=Array(3*b.length);for(e=0;e<b.length;e++){f=c[b[e]];1!==f.count&&(z.normalize(f.normal,f.normal),f.count=1);for(k=0;3>k;k++)a[3*
e+k]=f.normal[k];d[e]=e}return{normals:a,indices:d,didFlipNormals:!1}};h._getFaceVertices=function(a,b,c,d,e,f){const k=3*b[c+0],l=3*b[c+1];b=3*b[c+2];d[0]=a[k+0];d[1]=a[k+1];d[2]=a[k+2];e[0]=a[l+0];e[1]=a[l+1];e[2]=a[l+2];f[0]=a[b+0];f[1]=a[b+1];f[2]=a[b+2]};h._calculateFaceNormal=function(a,b,c,d){this._getFaceVertices(a,b,c,p,I,J);z.subtract(I,I,p);z.subtract(J,J,p);z.cross(p,I,J);z.normalize(d,p);return d};h._getOrCreateComponents=function(a){return g.unwrapOr(a.components,xa)};h._createPositionBuffer=
function(a,b){let c=a.vertexAttributes.position;const d=b.reprojection===v.ECEF?b.transformBeforeProject:null;g.isSome(d)&&(c=K.transformPosition(c,new Float64Array(c.length),d));if(b.reprojection===v.NONE)return b.needsBufferCopy?new Float64Array(c):c;b=g.isSome(d)?c:new Float64Array(c.length);G.projectBuffer(c,a.spatialReference,0,b,this._context.renderCoordsHelper.spatialReference,0,c.length/3);return b};h._createNormalBuffer=function(a,b,c){let d=a.vertexAttributes.normal;if(g.isNone(d))return null;
var e=c.reprojection===v.ECEF?c.transformBeforeProject:null;g.isSome(e)&&(d=K.transformNormal(d,new Float32Array(d.length),e));if("local"===this._context.graphicsCoreOwner.view.viewingMode||c.reprojection===v.NONE)return c.needsBufferCopy&&a.vertexAttributes.normal===d?new Float32Array(d):d;c=a.vertexAttributes.position;e=g.isSome(e)?d:new Float32Array(d.length);return K.projectNormalToPCPF(d,c,b,a.spatialReference,e)};h._createTangentBuffer=function(a,b,c){let d=a.vertexAttributes.tangent;if(g.isNone(d))return null;
var e=c.reprojection===v.ECEF?c.transformBeforeProject:null;g.isSome(e)&&(d=K.transformTangent(d,new Float32Array(d.length),e));if("local"===this._context.graphicsCoreOwner.view.viewingMode||c.reprojection===v.NONE)return c.needsBufferCopy&&a.vertexAttributes.normal===d?new Float32Array(d):d;c=a.vertexAttributes.position;e=g.isSome(e)?d:new Float32Array(d.length);return K.projectTangentToPCPF(d,c,b,a.spatialReference,e)};h._createColorBuffer=function(a){return a.vertexAttributes.color};h._createSymbolColorBuffer=
function(a){if(this._requiresSymbolVertexColors()){a=this._getVertexOpacityAndColor(a);const b=ea.parseColorMixMode(g.get(this.symbolLayer,"material","colorMixMode")),c=new Uint8Array(4);ea.encodeSymbolColor(a,b,c);return c}return null};h._createBuffers=function(a,b){var c=a.vertexAttributes&&a.vertexAttributes.position;if(!c)return this.logger.warn("Mesh geometry must contain position vertex attributes"),null;var d=a.vertexAttributes.normal;const e=a.vertexAttributes.uv;var f=a.vertexAttributes.tangent;
if(g.isSome(d)&&d.length!==c.length)return this.logger.warn("Mesh normal vertex buffer must contain the same number of elements as the position buffer"),null;if(g.isSome(f)&&f.length/4!==c.length/3)return this.logger.warn("Mesh tangent vertex buffer must contain the same number of elements as the position buffer"),null;if(g.isSome(e)&&e.length/2!==c.length/3)return this.logger.warn("Mesh uv vertex buffer must contain the same number of elements as the position buffer"),null;f=this._computeReprojectionInfo(a);
c=this._createPositionBuffer(a,f);d=this._createColorBuffer(a);b=this._createSymbolColorBuffer(b);const k=this._createNormalBuffer(a,c,f),l=this._createTangentBuffer(a,c,f);a=f.reprojection===v.NONE&&g.isSome(f.objectTransformation)?f.objectTransformation:this._transformOriginLocal(a,c,k,l);f=f.reprojection===v.NONE&&g.isSome(f.geometryTransformation)?f.geometryTransformation:C.create();return{positionBuffer:c,normalBuffer:k,tangentBuffer:l,uvBuffer:e,colorBuffer:d,symbolColorBuffer:b,objectTransformation:a,
geometryTransformation:f}};h._computeReprojectionInfo=function(a){var b=g.isSome(a.transform);const c=b&&a.transform.geographic?v.NONE:this._context.renderCoordsHelper.viewingMode===na.ViewingMode.Local?v.NONE:v.ECEF;if(b){if(c===v.NONE)return b=C.create(),G.computeTranslationToOriginAndRotation(a.spatialReference,a.transform.origin,b,this._context.renderCoordsHelper.spatialReference),a=C.clone(a.transform.localMatrix),{reprojection:c,objectTransformation:b,geometryTransformation:a,needsBufferCopy:!1};
b=Q.fromTranslation(C.create(),a.transform.origin);Q.multiply(b,b,a.transform.localMatrix);return{reprojection:c,transformBeforeProject:b,needsBufferCopy:!0}}return{reprojection:c,needsBufferCopy:!0}};h._transformOriginLocal=function(a,b,c,d){const e=this._context.renderCoordsHelper.spatialReference;var f=a.anchor;P[0]=f.x;P[1]=f.y;P[2]=f.z;f=C.create();G.computeTranslationToOriginAndRotation(a.spatialReference,P,f,e);a=R.BufferViewVec3f64.fromTypedArray(b);Q.invert(ia,f);S.transformMat4(a,a,ia);
if(g.isSome(c)||g.isSome(d))aa.fromMat4(M,f),aa.transpose(M,M),g.isSome(c)&&(c=R.BufferViewVec3f.fromTypedArray(c),S.transformMat3(c,c,M)),g.isSome(d)&&(d=R.BufferViewVec3f.fromTypedArray(d,4*d.BYTES_PER_ELEMENT),S.transformMat3(d,d,M));return f};h._validateFaces=function(a,b){a=a.vertexAttributes.position.length/3;if(b=b.faces){let c=-1;for(let d=0;d<b.length;d++){const e=b[d];e>c&&(c=e)}if(a<=c)return this.logger.warn(`Vertex index ${c} is out of bounds of the mesh position buffer`),!1}else if(0!==
a%3)return this.logger.warn("Mesh position buffer length must be a multiple of 9 if no component faces are defined (3 values per vertex * 3 vertices per triangle)"),!1;return!0};h._getOrCreateFaces=function(a,b){return b.faces?b.faces:sa.generateDefaultIndexArray(a.vertexAttributes.position.length/3)};h._isOutsideClippingArea=function(a){if(!this._context.clippingExtent)return!1;var b=a.vertexAttributes&&a.vertexAttributes.position;if(!b)return!1;const c=this._context.elevationProvider.spatialReference,
d=b.length/3;g.isSome(c)&&!a.spatialReference.equals(c)&&(b=new Float64Array(b.length),G.projectBuffer(a.vertexAttributes.position,a.spatialReference,0,b,c,0,d));O.empty(W);O.expandWithBuffer(W,b,0,d);return!O.intersectsClippingArea(W,this._context.clippingExtent)};h._createGeometryInfo=function(a,b,c){if(!G.canProjectWithoutEngine(a.spatialReference,this._context.graphicsCoreOwner.view.spatialReference))return this.logger.warn("Geometry spatial reference is not compatible with the view"),null;if(this._isOutsideClippingArea(a))return null;
b=this._createBuffers(a,b);if(g.isNone(b))return null;const {positionBuffer:d,uvBuffer:e,colorBuffer:f,symbolColorBuffer:k,normalBuffer:l,tangentBuffer:A,objectTransformation:x,geometryTransformation:y}=b;var t=this._getOrCreateComponents(a);b=[];const q=[],u=[];let B=!1;for(const F of t){if(!this._validateFaces(a,F))return null;var r=this._getOrCreateFaces(a,F);if(0!==r.length){var n=this._createComponentNormals(d,l,F,r);n.didFlipNormals&&(B=!0);t=[[m.VertexAttribute.POSITION,{size:3,data:d,exclusive:!0}],
[m.VertexAttribute.NORMAL,{size:3,data:n.normals,exclusive:!0}]];n=[[m.VertexAttribute.POSITION,r],[m.VertexAttribute.NORMAL,n.indices]];g.isSome(f)&&(t.push([m.VertexAttribute.COLOR,{size:4,data:f,exclusive:!0}]),n.push([m.VertexAttribute.COLOR,r]));g.isSome(k)&&(t.push([m.VertexAttribute.SYMBOLCOLOR,{size:4,data:k,exclusive:!0}]),n.push([m.VertexAttribute.SYMBOLCOLOR,Array(r.length).fill(0)]));g.isSome(e)&&(t.push([m.VertexAttribute.UV0,{size:2,data:e,exclusive:!0}]),n.push([m.VertexAttribute.UV0,
r]));g.isSome(A)&&(t.push([m.VertexAttribute.TANGENT,{size:4,data:A,exclusive:!0}]),n.push([m.VertexAttribute.TANGENT,r]));r=this._context.stage.renderView._getObjectAndLayerIdColor({graphicUid:c,layerUid:this._context.layer.uid});t=new T.Geometry(t,n,w.PrimitiveType.Triangle,r);b.push(t);q.push(y);u.push(this._getOrCreateMaterial(a,F))}}B&&this.logger.warn("Normals have been automatically flipped to be consistent with the counter clock wise face winding order. It is better to generate mesh geometries that have consistent normals.");
return{geometries:b,transformations:q,materials:u,objectTransformation:x}};h._createEdgeMaterial=function(){const a={opacity:this._getLayerOpacity()};return ra.createMaterial(this.symbolLayer,a)};return V}(qa.Graphics3DSymbolLayer);const P=D.create(),p=D.create(),I=D.create(),J=D.create(),H=D.create(),ia=C.create(),M=ja.create(),W=O.create(),xa=[new ka];var v;(function(E){E[E.NONE=0]="NONE";E[E.ECEF=1]="ECEF"})(v||(v={}));X.Graphics3DMeshFillSymbolLayer=Z;Object.defineProperties(X,{__esModule:{value:!0},
[Symbol.toStringTag]:{value:"Module"}})});