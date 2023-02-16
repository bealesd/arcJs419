// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("require ../../../../chunks/_rollupPluginBabelHelpers ../../../../support/requestImageUtils ../../../webgl/Program ../../../webgl/renderState ../../../webgl/BufferObject ../../../webgl/Texture ../../../webgl/VertexArrayObject ../../../webgl/FramebufferObject".split(" "),function(m,n,p,f,k,q,r,t,l){return function(){function g(b){this.resourceLoadingPromise=null;this.isEnabled=!1;this.vertexAttributeLocations={vPosition:0};this.vertexBufferLayout=[{name:"vPosition",count:2,type:5126,offset:0,
stride:8,normalized:!1}];this.rctx=b}var e=g.prototype;e.loadResources=function(b){if(!this.data||!this.textureArea||!this.textureSearch){const a=this.resourceLoadingPromise||this.loadDataModule().then(()=>this.loadTextures());b&&a.then(b);this.resourceLoadingPromise||(this.resourceLoadingPromise=a,a.then(()=>this.resourceLoadingPromise=null));return!1}return!0};e.loadDataModule=function(){return this.data?Promise.resolve():(new Promise(function(b,a){m(["./SmaaRenderPassData"],b,a)})).then(b=>{this.data=
b})};e.loadTextures=function(){return Promise.all([this.loadTextureFromBase64(this.data.areaTexture,9729,6407),this.loadTextureFromBase64(this.data.searchTexure,9728,6409)]).then(([b,a])=>{this.textureArea=b;this.textureSearch=a})};e.enable=function(){if(this.isEnabled)return!0;if(!this.loadResources())return!1;const b=this.rctx;this.programEdgeDetect=new f(b,this.data.edgeDetectShader.vertex,this.data.edgeDetectShader.fragment,this.vertexAttributeLocations);this.programBlendWeights=new f(b,this.data.blendWeightShader.vertex,
this.data.blendWeightShader.fragment,this.vertexAttributeLocations);this.programBlur=new f(b,this.data.blurShader.vertex,this.data.blurShader.fragment,this.vertexAttributeLocations);this.pipelineState=k.makePipelineState({colorWrite:k.defaultColorWriteParams});const a=new Float32Array([-1,-1,3,-1,-1,3]);this.vao=new t(b,this.vertexAttributeLocations,{geometry:this.vertexBufferLayout},{geometry:q.createVertex(b,35044,a)});this.tmpFramebufferEdges=new l(this.rctx,{colorTarget:0,depthStencilTarget:0},
{target:3553,pixelFormat:6407,dataType:5121,samplingMode:9729,wrapMode:33071,width:4,height:4});this.tmpFramebufferBlend=new l(this.rctx,{colorTarget:0,depthStencilTarget:0},{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9729,wrapMode:33071,width:4,height:4});return this.isEnabled=!0};e.disable=function(){this.isEnabled&&(this.programEdgeDetect.dispose(),this.programEdgeDetect=null,this.programBlendWeights.dispose(),this.programBlendWeights=null,this.programBlur.dispose(),this.programBlur=
null,this.vao.dispose(),this.vao=null,this.textureArea.dispose(),this.textureArea=null,this.textureSearch.dispose(),this.textureSearch=null,this.tmpFramebufferBlend.dispose(),this.tmpFramebufferBlend=null,this.tmpFramebufferEdges.dispose(),this.tmpFramebufferEdges=null,this.isEnabled=!1)};e.render=function(b){this.enable();const a=this.rctx,h=a.getBoundFramebufferObject();var c=b.colorTexture.descriptor.width,d=b.colorTexture.descriptor.height;a.bindVAO(this.vao);a.setPipelineState(this.pipelineState);
a.setViewport(0,0,c,d);this.tmpFramebufferEdges.resize(c,d);a.bindFramebuffer(this.tmpFramebufferEdges);a.setClearColor(0,0,0,1);a.clear(16384);a.bindProgram(this.programEdgeDetect);a.bindTexture(b.colorTexture,0);this.programEdgeDetect.setUniform1i("tColor",0);this.programEdgeDetect.setUniform4f("uResolution",1/c,1/d,c,d);a.drawArrays(4,0,3);this.tmpFramebufferBlend.resize(c,d);a.bindFramebuffer(this.tmpFramebufferBlend);a.setClearColor(0,0,1,1);a.clear(16384);a.bindProgram(this.programBlendWeights);
this.programBlendWeights.setUniform4f("uResolution",1/c,1/d,c,d);a.bindTexture(this.textureSearch,1);this.programBlendWeights.setUniform1i("tSearch",1);a.bindTexture(this.textureArea,2);this.programBlendWeights.setUniform1i("tArea",2);a.bindTexture(this.tmpFramebufferEdges.colorTexture,3);this.programBlendWeights.setUniform1i("tEdges",3);a.drawArrays(4,0,3);a.bindFramebuffer(h);a.setClearColor(0,1,0,1);a.clear(16384);a.bindProgram(this.programBlur);this.programBlur.setUniform4f("uResolution",1/c,
1/d,c,d);a.bindTexture(b.colorTexture,0);this.programBlur.setUniform1i("tColor",0);a.bindTexture(this.tmpFramebufferBlend.colorTexture,1);this.programBlur.setUniform1i("tBlendWeights",1);a.drawArrays(4,0,3)};e.loadTextureFromBase64=function(b,a,h){const c=new r(this.rctx,{pixelFormat:h,dataType:5121,wrapMode:33071,samplingMode:a},null);return p.requestImage(b).then(d=>{c.resize(d.width,d.height);c.setData(d);return c})};n._createClass(g,[{key:"isLoadingResources",get:function(){return null!=this.resourceLoadingPromise}}]);
return g}()});