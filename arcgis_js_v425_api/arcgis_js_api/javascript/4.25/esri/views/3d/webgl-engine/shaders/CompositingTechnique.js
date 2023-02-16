// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/DefaultVertexAttributeLocations ../lib/Program ../../../../chunks/Compositing.glsl ./CompositingTechniqueConfiguration ../../../webgl/enums ../../../webgl/renderState".split(" "),function(k,g,l,m,d,n,p,q,e,b,a){d=function(f){function c(){return f.apply(this,arguments)||this}l._inheritsLoose(c,f);var h=c.prototype;h.initializeProgram=function(r){return new p.Program(r.rctx,
c.shader.get().build(this.configuration),n.Default3D)};h.initializePipeline=function(){switch(this.configuration.alphaMode){case e.AlphaMode.None:return a.makePipelineState({colorWrite:a.defaultColorWriteParams});case e.AlphaMode.Alpha:return a.makePipelineState({blending:a.separateBlendingParams(b.BlendFactor.SRC_ALPHA,b.BlendFactor.ONE,b.BlendFactor.ONE_MINUS_SRC_ALPHA,b.BlendFactor.ONE_MINUS_SRC_ALPHA),colorWrite:a.defaultColorWriteParams});case e.AlphaMode.PremultipliedAlpha:case e.AlphaMode.COUNT:return a.makePipelineState({blending:a.simpleBlendingParams(b.BlendFactor.ONE,
b.BlendFactor.ONE_MINUS_SRC_ALPHA),colorWrite:a.defaultColorWriteParams})}};return c}(d.ShaderTechnique);d.shader=new m.ReloadableShaderModule(q.Compositing,()=>new Promise((f,c)=>k(["./Compositing.glsl"],f,c)));g.CompositingTechnique=d;Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});