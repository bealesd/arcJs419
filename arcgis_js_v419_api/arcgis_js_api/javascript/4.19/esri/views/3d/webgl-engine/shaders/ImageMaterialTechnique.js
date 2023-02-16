// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/DefaultVertexAttributeLocations ../../../webgl/Program ../../../webgl/renderState ../core/shaderLibrary/util/View.glsl ../core/shaderLibrary/Slice.glsl ../lib/OrderIndependentTransparency ../core/shaderLibrary/shading/MultipassTerrainTest.glsl ../lib/StencilUtils ../../../../chunks/ImageMaterial.glsl".split(" "),
function(w,p,t,f,d,l,e,x,y,m,u,z,n,A,q,B){l=function(k){function g(){return k.apply(this,arguments)||this}t._inheritsLoose(g,k);var b=g.prototype;b.initializeProgram=function(c){var h=g.shader.get();const a=this.configuration;h=h.build({output:a.output,slicePlaneEnabled:a.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,OITEnabled:0===a.transparencyPassType,multipassTerrainEnabled:a.multipassTerrainEnabled,cullAboveGround:a.cullAboveGround});return new y(c.rctx,h.generateSource("vertex"),
h.generateSource("fragment"),x.Default3D)};b.bindPass=function(c,h,a){u.View.bindProjectionMatrix(this.program,a.camera.projectionMatrix);this.program.setUniform1f("opacity",h.opacity);a.multipassTerrainEnabled&&(this.program.setUniform2fv("cameraNearFar",a.camera.nearFar),this.program.setUniform2fv("inverseViewport",a.inverseViewport),A.bindMultipassTerrainUniforms(this.program,c,a))};b.bindDraw=function(c){u.View.bindView(this.program,c);z.Slice.bindUniformsWithOrigin(this.program,this.configuration,
c)};b.setPipelineState=function(c,h){const a=this.configuration,r=3===c,C=2===c;return m.makePipelineState({blending:0!==a.output&&7!==a.output||!a.transparent?null:r?D:n.OITBlending(c),culling:(v=>0!==v&&{face:1===v?1028:1029,mode:2305})(a.cullFace),depthTest:{func:n.OITDepthTest(c)},depthWrite:r?a.writeDepth&&m.defaultDepthWriteParams:n.OITDepthWrite(c),colorWrite:m.defaultColorWriteParams,stencilWrite:a.sceneHasOcludees?q.stencilWriteMaskOn:null,stencilTest:a.sceneHasOcludees?h?q.stencilToolMaskBaseParams:
q.stencilBaseAllZerosParams:null,polygonOffset:r||C?null:n.getOITPolygonOffset(a.enableOffset)})};b.initializePipeline=function(){this._occludeePipelineState=this.setPipelineState(this.configuration.transparencyPassType,!0);return this.setPipelineState(this.configuration.transparencyPassType,!1)};b.getPipelineState=function(c){return c?this._occludeePipelineState:this.pipeline};return g}(l.ShaderTechnique);l.shader=new d.ReloadableShaderModule(B.ImageMaterialShader,()=>new Promise(function(k,g){w(["./ImageMaterial.glsl"],
k,g)}));const D=m.simpleBlendingParams(1,771);d=function(k){function g(){var b=k.apply(this,arguments)||this;b.output=0;b.cullFace=0;b.slicePlaneEnabled=!1;b.transparent=!1;b.enableOffset=!0;b.writeDepth=!0;b.sceneHasOcludees=!1;b.transparencyPassType=3;b.multipassTerrainEnabled=!1;b.cullAboveGround=!0;return b}t._inheritsLoose(g,k);return g}(e.ShaderTechniqueConfiguration);f.__decorate([e.parameter({count:8})],d.prototype,"output",void 0);f.__decorate([e.parameter({count:3})],d.prototype,"cullFace",
void 0);f.__decorate([e.parameter()],d.prototype,"slicePlaneEnabled",void 0);f.__decorate([e.parameter()],d.prototype,"transparent",void 0);f.__decorate([e.parameter()],d.prototype,"enableOffset",void 0);f.__decorate([e.parameter()],d.prototype,"writeDepth",void 0);f.__decorate([e.parameter()],d.prototype,"sceneHasOcludees",void 0);f.__decorate([e.parameter({count:4})],d.prototype,"transparencyPassType",void 0);f.__decorate([e.parameter()],d.prototype,"multipassTerrainEnabled",void 0);f.__decorate([e.parameter()],
d.prototype,"cullAboveGround",void 0);p.ImageMaterialTechnique=l;p.ImageMaterialTechniqueConfiguration=d;Object.defineProperty(p,"__esModule",{value:!0})});