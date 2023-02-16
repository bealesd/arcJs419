/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import"../core/lang.js";import{b as t}from"./Logger.js";import{i as e}from"./FramebufferObject.js";import{S as i}from"./renderState.js";class s{constructor(){for(this._current=new Array,this._max=new Array,this._allocations=new Map;this._current.length<6;)this._current.push(0),this._max.push(0)}resetMax(){for(this._max.length=0;this._max.length<this._current.length;)this._max.push(0)}increment(t,e){const i=++this._current[t];this._max[t]=Math.max(i,this._max[t])}decrement(t,e){--this._current[t]}get max(){return this._max}get current(){return this._current}printResourceCount(){if(console.log("Live objects:"),console.log(`Textures: ${this._current[0]}`),console.log(`Buffers: ${this._current[1]}`),console.log(`VAOs: ${this._current[2]}`),console.log(`Programs: ${this._current[3]}`),console.log(`Framebuffers: ${this._current[4]}`),console.log(`Renderbuffers: ${this._current[5]}`),this._allocations.size>0){console.log(`${this._allocations.size} live object allocations:`);const t=new Map;this._allocations.forEach((e=>{var i;t.set(e,(null!=(i=t.get(e))?i:0)+1)})),t.forEach(((t,e)=>console.log(t," : ",e)))}}}class n{constructor(t,e,i,s,n,r,a,l){this.createQuery=t,this.resultAvailable=e,this.getResult=i,this.disjoint=s,this.beginTimeElapsed=n,this.endTimeElapsed=r,this.createTimestamp=a,this.timestampBits=l}}function r(t,i){if(i.disjointTimerQuery)return null;let s=t.getExtension("EXT_disjoint_timer_query_webgl2");return s&&e(t)?new n((()=>t.createQuery()),(e=>t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE)),(e=>t.getQueryParameter(e,t.QUERY_RESULT)),(()=>t.getParameter(s.GPU_DISJOINT_EXT)),(e=>t.beginQuery(s.TIME_ELAPSED_EXT,e)),(()=>t.endQuery(s.TIME_ELAPSED_EXT)),(t=>s.queryCounterEXT(t,s.TIMESTAMP_EXT)),(()=>t.getQuery(s.TIMESTAMP_EXT,s.QUERY_COUNTER_BITS_EXT))):(s=t.getExtension("EXT_disjoint_timer_query"),s?new n((()=>s.createQueryEXT()),(t=>s.getQueryObjectEXT(t,s.QUERY_RESULT_AVAILABLE_EXT)),(t=>s.getQueryObjectEXT(t,s.QUERY_RESULT_EXT)),(()=>t.getParameter(s.GPU_DISJOINT_EXT)),(t=>s.beginQueryEXT(s.TIME_ELAPSED_EXT,t)),(()=>s.endQueryEXT(s.TIME_ELAPSED_EXT)),(t=>s.queryCounterEXT(t,s.TIMESTAMP_EXT)),(()=>s.getQueryEXT(s.TIMESTAMP_EXT,s.QUERY_COUNTER_BITS_EXT))):null)}function a(t,i){const s=i&&i.disabledExtensions||{},n=i&&i.debugWebGLExtensions||{};let a,h,o,_,c,u,d,E,f,g,b,T=null,S=null,p=null,F=null;return{get drawBuffers(){return b||(b=function(t,i){if(i.disjointTimerQuery)return null;if(e(t))return{drawBuffers:t.drawBuffers.bind(t),MAX_DRAW_BUFFERS:t.MAX_DRAW_BUFFERS,MAX_COLOR_ATTACHMENTS:t.MAX_COLOR_ATTACHMENTS};if(i.drawBuffers)return null;const s=t.getExtension("WEBGL_draw_buffers");return s?{drawBuffers:s.drawBuffersWEBGL.bind(s),MAX_DRAW_BUFFERS:s.MAX_DRAW_BUFFERS_WEBGL,MAX_COLOR_ATTACHMENTS:s.MAX_COLOR_ATTACHMENTS_WEBGL}:null}(t,s)),b},get instancing(){return a||(a=function(t){if(e(t))return{drawArraysInstanced:t.drawArraysInstanced.bind(t),drawElementsInstanced:t.drawElementsInstanced.bind(t),vertexAttribDivisor:t.vertexAttribDivisor.bind(t)};const i=t.getExtension("ANGLE_instanced_arrays");return i?{drawArraysInstanced:i.drawArraysInstancedANGLE.bind(i),drawElementsInstanced:i.drawElementsInstancedANGLE.bind(i),vertexAttribDivisor:i.vertexAttribDivisorANGLE.bind(i)}:null}(t)),a},get vao(){return h||(h=function(t,i){if(e(t))return{createVertexArray:t.createVertexArray.bind(t),deleteVertexArray:t.deleteVertexArray.bind(t),bindVertexArray:t.bindVertexArray.bind(t)};if(i.vao)return null;const s=t.getExtension("OES_vertex_array_object")||t.getExtension("MOZ_OES_vertex_array_object")||t.getExtension("WEBKIT_OES_vertex_array_object");return s?{createVertexArray:s.createVertexArrayOES.bind(s),deleteVertexArray:s.deleteVertexArrayOES.bind(s),bindVertexArray:s.bindVertexArrayOES.bind(s)}:null}(t,s)),h},get compressedTextureETC(){return o||(o=function(t,e){if(e.compressedTextureETC)return null;const i=t.getExtension("WEBGL_compressed_texture_etc");if(!i)return null;return{COMPRESSED_R11_EAC:i.COMPRESSED_R11_EAC,COMPRESSED_SIGNED_R11_EAC:i.COMPRESSED_SIGNED_R11_EAC,COMPRESSED_RG11_EAC:i.COMPRESSED_RG11_EAC,COMPRESSED_SIGNED_RG11_EAC:i.COMPRESSED_SIGNED_RG11_EAC,COMPRESSED_RGB8_ETC2:i.COMPRESSED_RGB8_ETC2,COMPRESSED_SRGB8_ETC2:i.COMPRESSED_SRGB8_ETC2,COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:i.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2,COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:i.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2,COMPRESSED_RGBA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC,COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC}}(t,s)),o},get compressedTextureS3TC(){return _||(_=function(t,e){if(e.compressedTextureS3TC)return null;const i=t.getExtension("WEBGL_compressed_texture_s3tc");if(!i)return null;return{COMPRESSED_RGB_S3TC_DXT1:i.COMPRESSED_RGB_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT1:i.COMPRESSED_RGBA_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT3:i.COMPRESSED_RGBA_S3TC_DXT3_EXT,COMPRESSED_RGBA_S3TC_DXT5:i.COMPRESSED_RGBA_S3TC_DXT5_EXT}}(t,s)),_},get textureFilterAnisotropic(){return c||(c=function(t,e){if(e.textureFilterAnisotropic)return null;const i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");if(!i)return null;return{MAX_TEXTURE_MAX_ANISOTROPY:i.MAX_TEXTURE_MAX_ANISOTROPY_EXT,TEXTURE_MAX_ANISOTROPY:i.TEXTURE_MAX_ANISOTROPY_EXT}}(t,s)),c},get disjointTimerQuery(){return u||(u=r(t,s)),u},get textureFloat(){return d||(d=function(t,i){if(e(t))return{textureFloat:!0,textureFloatLinear:!i.textureFloatLinear&&!!t.getExtension("OES_texture_float_linear"),textureHalfFloat:!0,textureHalfFloatLinear:!i.textureHalfFloatLinear&&!!t.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:t.HALF_FLOAT};if(t instanceof WebGLRenderingContext){const e=!i.textureHalfFloat&&t.getExtension("OES_texture_half_float");return{textureFloat:!i.textureFloat&&!!t.getExtension("OES_texture_float"),textureFloatLinear:!i.textureFloatLinear&&!!t.getExtension("OES_texture_float_linear"),textureHalfFloat:!!e,textureHalfFloatLinear:!i.textureHalfFloatLinear&&!!t.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:e?e.HALF_FLOAT_OES:void 0}}return null}(t,s)),d},get colorBufferFloat(){return E||(E=function(t,i){if(e(t)){const e=!i.colorBufferFloat&&t.getExtension("EXT_color_buffer_half_float"),s=!i.colorBufferFloat&&t.getExtension("EXT_color_buffer_float"),n=!i.colorBufferFloat&&t.getExtension("EXT_float_blend");return e||s||n?{textureFloat:!!s,textureHalfFloat:!!e,R16F:t.R16F,RG16F:t.RG16F,RGBA16F:t.RGBA16F,R32F:t.R32F,RG32F:t.RG32F,RGBA32F:t.RGBA32F,R11F_G11F_B10F:t.R11F_G11F_B10F,RGB16F:t.RGB16F}:null}if(t instanceof WebGLRenderingContext){const e=!i.colorBufferFloat&&t.getExtension("EXT_color_buffer_half_float"),s=!i.colorBufferFloat&&t.getExtension("WEBGL_color_buffer_float"),n=!i.colorBufferFloat&&t.getExtension("EXT_float_blend");return e||s||n?{textureFloat:!!s,textureHalfFloat:!!e,RGBA16F:e?e.RGBA16F_EXT:void 0,RGB16F:e?e.RGB16F_EXT:void 0,RGBA32F:s?s.RGBA32F_EXT:void 0}:null}return null}(t,s)),E},get blendMinMax(){return f||(f=function(t,i){if(e(t))return{MIN:t.MIN,MAX:t.MAX};if(i.blendMinMax)return null;{const e=t.getExtension("EXT_blend_minmax");return e?{MIN:e.MIN_EXT,MAX:e.MAX_EXT}:null}}(t,s)),f},get depthTexture(){return null===T&&(T=l(t,s,"depthTexture",!0,["WEBGL_depth_texture","MOZ_WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture"])),T},get standardDerivatives(){return null===S&&(S=l(t,s,"standardDerivatives",!0,["OES_standard_derivatives"])),S},get shaderTextureLOD(){return null===p&&(p=l(t,s,"shaderTextureLOD",!0,["EXT_shader_texture_lod"])),p},get fragDepth(){return null===F&&(F=l(t,s,"fragDepth",!0,["EXT_frag_depth"])),F},get loseContext(){return g||(g=function(t,e){const i=e.loseContext&&t.getExtension("WEBGL_lose_context");return i?{loseRenderingContext:()=>i.loseContext()}:null}(t,n)),g},enable(t){return this[t]}}}function l(t,i,s,n,r){if(n&&e(t))return!0;if(i[s])return!1;for(const e of r)if(t.getExtension(e))return!0;return!1}class h{constructor(t,n){this.gl=null,this.instanceCounter=new s,this._blendEnabled=!1,this._blendColorState={r:0,g:0,b:0,a:0},this._blendFunctionState={srcRGB:1,dstRGB:0,srcAlpha:1,dstAlpha:0},this._blendEquationState={mode:32774,modeAlpha:32774},this._colorMaskState={r:!0,g:!0,b:!0,a:!0},this._polygonCullingEnabled=!1,this._cullFace=1029,this._frontFace=2305,this._scissorTestEnabled=!1,this._scissorRect={x:0,y:0,width:0,height:0},this._depthTestEnabled=!1,this._depthFunction=513,this._clearDepth=1,this._depthWriteEnabled=!0,this._depthRange={zNear:0,zFar:1},this._viewport=null,this._stencilTestEnabled=!1,this._polygonOffsetFillEnabled=!1,this._polygonOffset=[0,0],this._stencilFunction={face:1032,func:519,ref:0,mask:1},this._clearStencil=0,this._stencilWriteMask=1,this._stencilOperation={face:1032,fail:7680,zFail:7680,zPass:7680},this._clearColor={r:0,g:0,b:0,a:0},this._activeShaderProgram=null,this._activeVertexBuffer=null,this._activeIndexBuffer=null,this._activeFramebuffer=null,this._activeRenderbuffer=null,this._activeTextureUnit=0,this._textureUnitMap=[],this._numOfDrawCalls=0,this._numOfTriangles=0,this.contextVersion=e(t)?"webgl2":"webgl",this.gl=t,t instanceof WebGLRenderingContext&&this.gl.getExtension("OES_element_index_uint"),this._capabilities=a(t,n);const r=this.gl.getParameter(this.gl.VIEWPORT);this._viewport={x:r[0],y:r[1],width:r[2],height:r[3]},this._stateTracker=new i({setBlending:t=>{if(t){this.setBlendingEnabled(!0),this.setBlendEquationSeparate(t.opRgb,t.opAlpha),this.setBlendFunctionSeparate(t.srcRgb,t.dstRgb,t.srcAlpha,t.dstAlpha);const e=t.color;this.setBlendColor(e.r,e.g,e.b,e.a)}else this.setBlendingEnabled(!1)},setCulling:t=>{t?(this.setFaceCullingEnabled(!0),this.setCullFace(t.face),this.setFrontFace(t.mode)):this.setFaceCullingEnabled(!1)},setPolygonOffset:t=>{t?(this.setPolygonOffsetFillEnabled(!0),this.setPolygonOffset(t.factor,t.units)):this.setPolygonOffsetFillEnabled(!1)},setDepthTest:t=>{t?(this.setDepthTestEnabled(!0),this.setDepthFunction(t.func)):this.setDepthTestEnabled(!1)},setStencilTest:t=>{if(t){this.setStencilTestEnabled(!0);const e=t.function;this.setStencilFunction(e.func,e.ref,e.mask);const i=t.operation;this.setStencilOp(i.fail,i.zFail,i.zPass)}else this.setStencilTestEnabled(!1)},setDepthWrite:t=>{t?(this.setDepthWriteEnabled(!0),this.setDepthRange(t.zNear,t.zFar)):this.setDepthWriteEnabled(!1)},setColorWrite:t=>{t?this.setColorMask(t.r,t.g,t.b,t.a):this.setColorMask(!1,!1,!1,!1)},setStencilWrite:t=>{t?this.setStencilWriteMask(t.mask):this.setStencilWriteMask(0)}}),this.enforceState()}isWebGL2Context(){return"webgl2"===this.contextVersion}get contextAttributes(){return this.gl.getContextAttributes()}get parameters(){if(!this._parameters){const t=this.capabilities.textureFilterAnisotropic;this._parameters={versionString:this.gl.getParameter(this.gl.VERSION),maxVertexTextureImageUnits:this.gl.getParameter(this.gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxVertexAttributes:this.gl.getParameter(this.gl.MAX_VERTEX_ATTRIBS),maxMaxAnisotropy:t?this.gl.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY):void 0,maxTextureImageUnits:this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS),maxTextureSize:this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE)}}return this._parameters}dispose(){this.bindVAO(null),this.unbindBuffer(34962),this.unbindBuffer(34963),this._textureUnitMap=[],this.gl=null,this._capabilities=null}setPipelineState(t){this._stateTracker.setPipeline(t)}setBlendingEnabled(t){this._blendEnabled!==t&&(!0===t?this.gl.enable(this.gl.BLEND):this.gl.disable(this.gl.BLEND),this._blendEnabled=t,this._stateTracker.invalidateBlending())}setBlendColor(t,e,i,s){t===this._blendColorState.r&&e===this._blendColorState.g&&i===this._blendColorState.b&&s===this._blendColorState.a||(this.gl.blendColor(t,e,i,s),this._blendColorState.r=t,this._blendColorState.g=e,this._blendColorState.b=i,this._blendColorState.a=s,this._stateTracker.invalidateBlending())}setBlendFunction(t,e){t===this._blendFunctionState.srcRGB&&e===this._blendFunctionState.dstRGB||(this.gl.blendFunc(t,e),this._blendFunctionState.srcRGB=t,this._blendFunctionState.srcAlpha=t,this._blendFunctionState.dstRGB=e,this._blendFunctionState.dstAlpha=e,this._stateTracker.invalidateBlending())}setBlendFunctionSeparate(t,e,i,s){this._blendFunctionState.srcRGB===t&&this._blendFunctionState.srcAlpha===i&&this._blendFunctionState.dstRGB===e&&this._blendFunctionState.dstAlpha===s||(this.gl.blendFuncSeparate(t,e,i,s),this._blendFunctionState.srcRGB=t,this._blendFunctionState.srcAlpha=i,this._blendFunctionState.dstRGB=e,this._blendFunctionState.dstAlpha=s,this._stateTracker.invalidateBlending())}setBlendEquation(t){this._blendEquationState.mode!==t&&(this.gl.blendEquation(t),this._blendEquationState.mode=t,this._blendEquationState.modeAlpha=t,this._stateTracker.invalidateBlending())}setBlendEquationSeparate(t,e){this._blendEquationState.mode===t&&this._blendEquationState.modeAlpha===e||(this.gl.blendEquationSeparate(t,e),this._blendEquationState.mode=t,this._blendEquationState.modeAlpha=e,this._stateTracker.invalidateBlending())}setColorMask(t,e,i,s){this._colorMaskState.r===t&&this._colorMaskState.g===e&&this._colorMaskState.b===i&&this._colorMaskState.a===s||(this.gl.colorMask(t,e,i,s),this._colorMaskState.r=t,this._colorMaskState.g=e,this._colorMaskState.b=i,this._colorMaskState.a=s,this._stateTracker.invalidateColorWrite())}setClearColor(t,e,i,s){this._clearColor.r===t&&this._clearColor.g===e&&this._clearColor.b===i&&this._clearColor.a===s||(this.gl.clearColor(t,e,i,s),this._clearColor.r=t,this._clearColor.g=e,this._clearColor.b=i,this._clearColor.a=s)}setFaceCullingEnabled(t){this._polygonCullingEnabled!==t&&(!0===t?this.gl.enable(this.gl.CULL_FACE):this.gl.disable(this.gl.CULL_FACE),this._polygonCullingEnabled=t,this._stateTracker.invalidateCulling())}setPolygonOffsetFillEnabled(t){this._polygonOffsetFillEnabled!==t&&(!0===t?this.gl.enable(this.gl.POLYGON_OFFSET_FILL):this.gl.disable(this.gl.POLYGON_OFFSET_FILL),this._polygonOffsetFillEnabled=t,this._stateTracker.invalidatePolygonOffset())}setPolygonOffset(t,e){this._polygonOffset[0]===t&&this._polygonOffset[1]===e||(this._polygonOffset[0]=t,this._polygonOffset[1]=e,this.gl.polygonOffset(t,e),this._stateTracker.invalidatePolygonOffset())}setCullFace(t){this._cullFace!==t&&(this.gl.cullFace(t),this._cullFace=t,this._stateTracker.invalidateCulling())}setFrontFace(t){this._frontFace!==t&&(this.gl.frontFace(t),this._frontFace=t,this._stateTracker.invalidateCulling())}setScissorTestEnabled(t){this._scissorTestEnabled!==t&&(!0===t?this.gl.enable(this.gl.SCISSOR_TEST):this.gl.disable(this.gl.SCISSOR_TEST),this._scissorTestEnabled=t)}setScissorRect(t,e,i,s){this._scissorRect.x===t&&this._scissorRect.y===e&&this._scissorRect.width===i&&this._scissorRect.height===s||(this.gl.scissor(t,e,i,s),this._scissorRect.x=t,this._scissorRect.y=e,this._scissorRect.width=i,this._scissorRect.height=s)}setDepthTestEnabled(t){this._depthTestEnabled!==t&&(!0===t?this.gl.enable(this.gl.DEPTH_TEST):this.gl.disable(this.gl.DEPTH_TEST),this._depthTestEnabled=t,this._stateTracker.invalidateDepthTest())}setClearDepth(t){this._clearDepth!==t&&(this.gl.clearDepth(t),this._clearDepth=t)}setDepthFunction(t){this._depthFunction!==t&&(this.gl.depthFunc(t),this._depthFunction=t,this._stateTracker.invalidateDepthTest())}setDepthWriteEnabled(t){this._depthWriteEnabled!==t&&(this.gl.depthMask(t),this._depthWriteEnabled=t,this._stateTracker.invalidateDepthWrite())}setDepthRange(t,e){this._depthRange.zNear===t&&this._depthRange.zFar===e||(this.gl.depthRange(t,e),this._depthRange.zNear=t,this._depthRange.zFar=e,this._stateTracker.invalidateDepthWrite())}setStencilTestEnabled(t){this._stencilTestEnabled!==t&&(!0===t?this.gl.enable(this.gl.STENCIL_TEST):this.gl.disable(this.gl.STENCIL_TEST),this._stencilTestEnabled=t,this._stateTracker.invalidateStencilTest())}setClearStencil(t){t!==this._clearStencil&&(this.gl.clearStencil(t),this._clearStencil=t)}setStencilFunction(t,e,i){this._stencilFunction.func===t&&this._stencilFunction.ref===e&&this._stencilFunction.mask===i||(this.gl.stencilFunc(t,e,i),this._stencilFunction.face=1032,this._stencilFunction.func=t,this._stencilFunction.ref=e,this._stencilFunction.mask=i,this._stateTracker.invalidateStencilTest())}setStencilFunctionSeparate(t,e,i,s){this._stencilFunction.face===t&&this._stencilFunction.func===e&&this._stencilFunction.ref===i&&this._stencilFunction.mask===s||(this.gl.stencilFuncSeparate(t,e,i,s),this._stencilFunction.face=t,this._stencilFunction.func=e,this._stencilFunction.ref=i,this._stencilFunction.mask=s,this._stateTracker.invalidateStencilTest())}setStencilWriteMask(t){this._stencilWriteMask!==t&&(this.gl.stencilMask(t),this._stencilWriteMask=t,this._stateTracker.invalidateStencilWrite())}setStencilOp(t,e,i){this._stencilOperation.fail===t&&this._stencilOperation.zFail===e&&this._stencilOperation.zPass===i||(this.gl.stencilOp(t,e,i),this._stencilOperation.face=1032,this._stencilOperation.fail=t,this._stencilOperation.zFail=e,this._stencilOperation.zPass=i,this._stateTracker.invalidateStencilTest())}setStencilOpSeparate(t,e,i,s){this._stencilOperation.face===t&&this._stencilOperation.fail===e&&this._stencilOperation.zFail===i&&this._stencilOperation.zPass===s||(this.gl.stencilOpSeparate(t,e,i,s),this._stencilOperation.face=t,this._stencilOperation.face=t,this._stencilOperation.fail=e,this._stencilOperation.zFail=i,this._stencilOperation.zPass=s,this._stateTracker.invalidateStencilTest())}setActiveTexture(t){const e=this._activeTextureUnit;return t>=0&&t!==this._activeTextureUnit&&(this.gl.activeTexture(33984+t),this._activeTextureUnit=t),e}clear(t){t&&this.gl.clear(t)}clearSafe(t,e=255){t&&(16384&t&&this.setColorMask(!0,!0,!0,!0),256&t&&this.setDepthWriteEnabled(!0),1024&t&&this.setStencilWriteMask(e),this.gl.clear(t))}drawArrays(t,e,i){this.gl.drawArrays(t,e,i)}drawElements(t,e,i,s){5123!==i?5125===i&&this.gl.drawElements(t,e,i,s):this.gl.drawElements(t,e,i,s)}logIno(){}get capabilities(){return this._capabilities}setViewport(t,e,i,s){const n=this._viewport;n.x===t&&n.y===e&&n.width===i&&n.height===s||(n.x=t,n.y=e,n.width=i,n.height=s,this.gl.viewport(t,e,i,s))}getViewport(){return{x:this._viewport.x,y:this._viewport.y,width:this._viewport.width,height:this._viewport.height}}bindProgram(t){if(!t)return this.gl.useProgram(null),void(this._activeShaderProgram=null);this._activeShaderProgram!==t&&(t.initialize(),this.gl.useProgram(t.glName),this._activeShaderProgram=t)}bindTexture(t,e){(e>=this.parameters.maxTextureImageUnits||e<0)&&console.error("Input texture unit is out of range of available units!");const i=this._textureUnitMap[e];if(this.setActiveTexture(e),null==t||null==t.glName)return null!=i&&this.gl.bindTexture(i.descriptor.target,null),void(this._textureUnitMap[e]=null);i!==t?(this.gl.bindTexture(t.descriptor.target,t.glName),t.applyChanges(),this._textureUnitMap[e]=t):t.applyChanges()}unbindTextureAllUnits(t){for(let e=0;e<this.parameters.maxTextureImageUnits;e++)this._textureUnitMap[e]===t&&this.bindTexture(null,e)}bindFramebuffer(e){if(t(e))return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),void(this._activeFramebuffer=null);this._activeFramebuffer!==e&&(e.initializeAndBind(),this._activeFramebuffer=e)}bindBuffer(t){t&&(34962===t.bufferType?this._activeVertexBuffer=o(this.gl,t,t.bufferType,this._activeVertexBuffer):this._activeIndexBuffer=o(this.gl,t,t.bufferType,this._activeIndexBuffer))}bindRenderbuffer(t){const e=this.gl;t||(e.bindRenderbuffer(e.RENDERBUFFER,null),this._activeRenderbuffer=null),this._activeRenderbuffer!==t&&(e.bindRenderbuffer(e.RENDERBUFFER,t.glName),this._activeRenderbuffer=t)}unbindBuffer(t){34962===t?this._activeVertexBuffer=o(this.gl,null,t,this._activeVertexBuffer):this._activeIndexBuffer=o(this.gl,null,t,this._activeIndexBuffer)}bindVAO(t){t?this._activeVertexArrayObject&&this._activeVertexArrayObject===t||(t.bind(),this._activeVertexArrayObject=t):this._activeVertexArrayObject&&(this._activeVertexArrayObject.unbind(),this._activeVertexArrayObject=null)}getBoundTexture(t){return this._textureUnitMap[t]}getBoundFramebufferObject(){return this._activeFramebuffer}getBoundVAO(){return this._activeVertexArrayObject}resetState(){this.bindProgram(null),this.bindVAO(null),this.bindFramebuffer(null),this.unbindBuffer(34962),this.unbindBuffer(34963);for(let t=0;t<this.parameters.maxTextureImageUnits;t++)this.bindTexture(null,t);this.setBlendingEnabled(!1),this.setBlendFunction(1,0),this.setBlendEquation(32774),this.setBlendColor(0,0,0,0),this.setFaceCullingEnabled(!1),this.setCullFace(1029),this.setFrontFace(2305),this.setPolygonOffsetFillEnabled(!1),this.setPolygonOffset(0,0),this.setScissorTestEnabled(!1),this.setScissorRect(0,0,this.gl.canvas.width,this.gl.canvas.height),this.setDepthTestEnabled(!1),this.setDepthFunction(513),this.setDepthRange(0,1),this.setStencilTestEnabled(!1),this.setStencilFunction(519,0,0),this.setStencilOp(7680,7680,7680),this.setClearColor(0,0,0,0),this.setClearDepth(1),this.setClearStencil(0),this.setColorMask(!0,!0,!0,!0),this.setStencilWriteMask(4294967295),this.setDepthWriteEnabled(!0),this.setViewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}enforceState(){const t=this.gl,e=this.capabilities.vao;e&&e.bindVertexArray(null);for(let e=0;e<this.parameters.maxVertexAttributes;e++)t.disableVertexAttribArray(e);if(this._activeVertexBuffer?t.bindBuffer(this._activeVertexBuffer.bufferType,this._activeVertexBuffer.glName):t.bindBuffer(34962,null),this._activeIndexBuffer?t.bindBuffer(this._activeIndexBuffer.bufferType,this._activeIndexBuffer.glName):t.bindBuffer(34963,null),e&&this._activeVertexArrayObject){const t=this._activeVertexArrayObject;this._activeVertexArrayObject&&(this._activeVertexArrayObject.unbind(),this._activeVertexArrayObject=null),this.bindVAO(t)}t.bindFramebuffer(t.FRAMEBUFFER,this._activeFramebuffer?this._activeFramebuffer.glName:null),t.useProgram(this._activeShaderProgram?this._activeShaderProgram.glName:null),t.blendColor(this._blendColorState.r,this._blendColorState.g,this._blendColorState.b,this._blendColorState.a),t.bindRenderbuffer(t.RENDERBUFFER,this._activeRenderbuffer?this._activeRenderbuffer.glName:null),!0===this._blendEnabled?t.enable(this.gl.BLEND):t.disable(this.gl.BLEND),t.blendEquationSeparate(this._blendEquationState.mode,this._blendEquationState.modeAlpha),t.blendFuncSeparate(this._blendFunctionState.srcRGB,this._blendFunctionState.dstRGB,this._blendFunctionState.srcAlpha,this._blendFunctionState.dstAlpha),t.clearColor(this._clearColor.r,this._clearColor.g,this._clearColor.b,this._clearColor.a),t.clearDepth(this._clearDepth),t.clearStencil(this._clearStencil),t.colorMask(this._colorMaskState.r,this._colorMaskState.g,this._colorMaskState.b,this._colorMaskState.a),t.cullFace(this._cullFace),t.depthFunc(this._depthFunction),t.depthRange(this._depthRange.zNear,this._depthRange.zFar),!0===this._depthTestEnabled?t.enable(t.DEPTH_TEST):t.disable(t.DEPTH_TEST),t.depthMask(this._depthWriteEnabled),t.frontFace(this._frontFace),t.lineWidth(1),!0===this._polygonCullingEnabled?t.enable(t.CULL_FACE):t.disable(t.CULL_FACE),t.polygonOffset(this._polygonOffset[0],this._polygonOffset[1]),!0===this._polygonOffsetFillEnabled?t.enable(t.POLYGON_OFFSET_FILL):t.disable(t.POLYGON_OFFSET_FILL),t.scissor(this._scissorRect.x,this._scissorRect.y,this._scissorRect.width,this._scissorRect.height),!0===this._scissorTestEnabled?t.enable(t.SCISSOR_TEST):t.disable(t.SCISSOR_TEST),t.stencilFunc(this._stencilFunction.func,this._stencilFunction.ref,this._stencilFunction.mask),t.stencilOpSeparate(this._stencilOperation.face,this._stencilOperation.fail,this._stencilOperation.zFail,this._stencilOperation.zPass),!0===this._stencilTestEnabled?t.enable(t.STENCIL_TEST):t.disable(t.STENCIL_TEST),t.stencilMask(this._stencilWriteMask);for(let e=0;e<this.parameters.maxTextureImageUnits;e++){t.activeTexture(33984+e),t.bindTexture(3553,null);const i=this._textureUnitMap[e];i&&t.bindTexture(i.descriptor.target,i.glName)}t.activeTexture(33984+this._activeTextureUnit),t.viewport(this._viewport.x,this._viewport.y,this._viewport.width,this._viewport.height)}}function o(t,e,i,s){return e?s!==e&&t.bindBuffer(i,e.glName):t.bindBuffer(i,null),e}export{h as R,r as c};
