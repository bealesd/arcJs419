// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../chunks/tslib.es6 ./shader/ComponentData.glsl ./shader/VertexDiscardByOpacity.glsl ../../../core/shaderLibrary/ShaderOutput ../../../core/shaderLibrary/attributes/NormalAttribute.glsl ../../../core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../../../core/shaderLibrary/shading/Normals.glsl ../../../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../../../core/shaderLibrary/util/EllipsoidMode ../../../core/shaderTechnique/BindType ../../../core/shaderTechnique/ShaderTechniqueConfiguration ../../../lib/basicInterfaces ../../../lib/TransparencyPassType".split(" "),
function(f,v,c,h,k,l,m,n,p,q,r,w,a,g,t){f.IntegratedMeshMode=void 0;(function(e){e[e.None=0]="None";e[e.NoOverlay=1]="NoOverlay";e[e.ColorOverlay=2]="ColorOverlay";e[e.ColorOverlayWithWater=3]="ColorOverlayWithWater";e[e.COUNT=4]="COUNT"})(f.IntegratedMeshMode||(f.IntegratedMeshMode={}));let b=function(e){function u(){var d=e.apply(this,arguments)||this;d.output=l.ShaderOutput.Color;d.textureCoordinateType=n.TextureCoordinateAttributeType.None;d.componentData=h.ComponentDataType.Uniform;d.cullFace=
g.CullFaceOptions.Back;d.vertexDiscardMode=k.VertexDiscardMode.None;d.doubleSidedMode=p.NormalsDoubleSidedMode.WindingOrder;d.alphaDiscardMode=g.AlphaDiscardMode.Opaque;d.integratedMeshMode=f.IntegratedMeshMode.None;d.transparencyPassType=t.TransparencyPassType.NONE;d.ellipsoidMode=r.EllipsoidMode.Earth;d.pbrMode=q.PBRMode.Disabled;d.normalType=m.NormalAttributeType.Attribute;d.spherical=!1;d.doublePrecisionRequiresObfuscation=!1;d.hasVertexColors=!1;d.hasNormals=!1;d.hasSlicePlane=!1;d.hasBaseColorTexture=
!1;d.receiveAmbientOcclusion=!0;d.receiveShadows=!0;d.blendingEnabled=!0;d.hasScreenSpaceReflections=!1;d.hasPolygonOffset=!1;d.hasMetallicRoughnessTexture=!1;d.hasEmissionTexture=!1;d.hasOcclusionTexture=!1;d.hasNormalTexture=!1;d.hasOccludees=!1;d.hasMultipassTerrain=!1;d.cullAboveGround=!1;d.useLegacyTerrainShading=!1;d.hasCloudsReflections=!0;d.snowCover=!1;d.objectAndLayerIdColor=!1;d.hasWebGL2Context=!1;return d}v._inheritsLoose(u,e);return u}(a.ShaderTechniqueConfiguration);c.__decorate([a.parameter({count:l.ShaderOutput.COUNT})],
b.prototype,"output",void 0);c.__decorate([a.parameter({count:n.TextureCoordinateAttributeType.COUNT})],b.prototype,"textureCoordinateType",void 0);c.__decorate([a.parameter({count:h.ComponentDataType.COUNT})],b.prototype,"componentData",void 0);c.__decorate([a.parameter({count:g.CullFaceOptions.COUNT})],b.prototype,"cullFace",void 0);c.__decorate([a.parameter({count:k.VertexDiscardMode.COUNT})],b.prototype,"vertexDiscardMode",void 0);c.__decorate([a.parameter({count:p.NormalsDoubleSidedMode.COUNT})],
b.prototype,"doubleSidedMode",void 0);c.__decorate([a.parameter({count:g.AlphaDiscardMode.COUNT})],b.prototype,"alphaDiscardMode",void 0);c.__decorate([a.parameter({count:f.IntegratedMeshMode.COUNT})],b.prototype,"integratedMeshMode",void 0);c.__decorate([a.parameter({count:t.TransparencyPassType.COUNT})],b.prototype,"transparencyPassType",void 0);c.__decorate([a.parameter({count:r.EllipsoidMode.COUNT})],b.prototype,"ellipsoidMode",void 0);c.__decorate([a.parameter({count:q.PBRMode.COUNT})],b.prototype,
"pbrMode",void 0);c.__decorate([a.parameter({count:m.NormalAttributeType.COUNT})],b.prototype,"normalType",void 0);c.__decorate([a.parameter()],b.prototype,"spherical",void 0);c.__decorate([a.parameter()],b.prototype,"doublePrecisionRequiresObfuscation",void 0);c.__decorate([a.parameter()],b.prototype,"hasVertexColors",void 0);c.__decorate([a.parameter()],b.prototype,"hasNormals",void 0);c.__decorate([a.parameter()],b.prototype,"hasSlicePlane",void 0);c.__decorate([a.parameter()],b.prototype,"hasBaseColorTexture",
void 0);c.__decorate([a.parameter()],b.prototype,"receiveAmbientOcclusion",void 0);c.__decorate([a.parameter()],b.prototype,"receiveShadows",void 0);c.__decorate([a.parameter()],b.prototype,"blendingEnabled",void 0);c.__decorate([a.parameter()],b.prototype,"hasScreenSpaceReflections",void 0);c.__decorate([a.parameter()],b.prototype,"hasPolygonOffset",void 0);c.__decorate([a.parameter()],b.prototype,"hasMetallicRoughnessTexture",void 0);c.__decorate([a.parameter()],b.prototype,"hasEmissionTexture",
void 0);c.__decorate([a.parameter()],b.prototype,"hasOcclusionTexture",void 0);c.__decorate([a.parameter()],b.prototype,"hasNormalTexture",void 0);c.__decorate([a.parameter()],b.prototype,"hasOccludees",void 0);c.__decorate([a.parameter()],b.prototype,"hasMultipassTerrain",void 0);c.__decorate([a.parameter()],b.prototype,"cullAboveGround",void 0);c.__decorate([a.parameter()],b.prototype,"useLegacyTerrainShading",void 0);c.__decorate([a.parameter()],b.prototype,"hasCloudsReflections",void 0);c.__decorate([a.parameter()],
b.prototype,"snowCover",void 0);c.__decorate([a.parameter()],b.prototype,"objectAndLayerIdColor",void 0);c.__decorate([a.parameter()],b.prototype,"hasWebGL2Context",void 0);c.__decorate([a.parameter({constValue:w.BindType.Draw})],b.prototype,"pbrTextureBindType",void 0);c.__decorate([a.parameter({constValue:!0})],b.prototype,"hasSliceHighlight",void 0);c.__decorate([a.parameter({constValue:!1})],b.prototype,"hasSliceInVertexProgram",void 0);c.__decorate([a.parameter({constValue:!1})],b.prototype,
"useCustomDTRExponentForWater",void 0);c.__decorate([a.parameter({constValue:!1})],b.prototype,"hasVertexTangents",void 0);c.__decorate([a.parameter({constValue:!0})],b.prototype,"supportsTextureAtlas",void 0);c.__decorate([a.parameter({constValue:!1})],b.prototype,"highStepCount",void 0);c.__decorate([a.parameter({constValue:!1})],b.prototype,"instancedDoublePrecision",void 0);c.__decorate([a.parameter({constValue:!0})],b.prototype,"useFillLights",void 0);c.__decorate([a.parameter({constValue:!1})],
b.prototype,"objectAndLayerIdColorInstanced",void 0);f.ComponentTechniqueConfiguration=b;Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});