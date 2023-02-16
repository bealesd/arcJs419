// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ./DefaultVertexAttributeLocations ../../../webgl/Program ../../../webgl/renderState ../../../../chunks/TextureOnly.glsl".split(" "),function(m,g,h,n,e,f,k,p,q,c,r){f=function(b){function a(){return b.apply(this,arguments)||this}h._inheritsLoose(a,b);var d=a.prototype;
d.initializeProgram=function(t){const l=a.shader.get().build();return new q(t.rctx,l.generateSource("vertex"),l.generateSource("fragment"),p.Default3D)};d.initializePipeline=function(){return this.configuration.hasAlpha?c.makePipelineState({blending:c.separateBlendingParams(770,1,771,771),colorWrite:c.defaultColorWriteParams}):c.makePipelineState({colorWrite:c.defaultColorWriteParams})};return a}(f.ShaderTechnique);f.shader=new e.ReloadableShaderModule(r.TextureOnlyShader,()=>new Promise(function(b,
a){m(["../core/shaderLibrary/util/TextureOnly.glsl"],b,a)}));e=function(b){function a(){var d=b.apply(this,arguments)||this;d.hasAlpha=!1;return d}h._inheritsLoose(a,b);return a}(k.ShaderTechniqueConfiguration);n.__decorate([k.parameter()],e.prototype,"hasAlpha",void 0);g.TextureTechnique=f;g.TextureTechniqueConfiguration=e;Object.defineProperty(g,"__esModule",{value:!0})});