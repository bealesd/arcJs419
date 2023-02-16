/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"./ArrayPool.js";import"../core/lang.js";import"./deprecate.js";import"./object.js";import"../config.js";import"./Logger.js";import"./string.js";import"./metadata.js";import"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./Message.js";import"../core/Error.js";import"./ensureType.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import"./Evented.js";import"../core/Collection.js";import"./collectionUtils.js";import"./JSONSupport.js";import"./Promise.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./reader.js";import"./writer.js";import"./resourceExtension.js";import"../geometry/SpatialReference.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"./mathUtils2.js";import"./common.js";import"./colorUtils.js";import"./zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"./Identifiable.js";import"../core/Handles.js";import"../core/watchUtils.js";import"./mat4.js";import"../core/HandleOwner.js";import"./_commonjsHelpers.js";import"./earcut.js";import"./vec2.js";import"./OptimizedFeatureSet.js";import"./featureConversionUtils.js";import"./vec4f32.js";import"./definitions.js";import"./vec2f32.js";import"./number2.js";import"./vec2f64.js";import"./mat3f32.js";import"./Program.js";import{F as r}from"./FramebufferObject.js";import"./mat4f32.js";import"./VertexArrayObject.js";import"./ShaderCompiler.js";import"./config.js";import"./DisplayObject.js";import"./rasterUtils.js";import"../views/layers/LayerView.js";import"./Container.js";import"./ClipRect.js";import{L as s}from"./LayerView2D.js";import"./brushes.js";import"./enums.js";import"./Utils10.js";import"./GeometryUtils2.js";import"./MaterialKey.js";import{W as o}from"./WGLContainer.js";import i from"./GroupLayerView.js";class p extends o{constructor(){super(...arguments),this._lastWidth=0,this._lastHeight=0,this.requiresDedicatedFBO=!1}dispose(){this._renderTarget&&(this._renderTarget.dispose(),this._renderTarget=null)}doRender(e){const t=this.createRenderParams(e),{context:r,painter:s,profiler:o}=t;this._prevFBO=r.getBoundFramebufferObject(),o.recordContainerStart(this.name);const i=this._getFbo(t),p=s.getRenderTarget();r.bindFramebuffer(i),s.setRenderTarget(i),r.setDepthWriteEnabled(!0),r.setColorMask(!0,!0,!0,!0),r.setClearColor(0,0,0,0),r.setClearDepth(1),r.clear(r.gl.COLOR_BUFFER_BIT|r.gl.DEPTH_BUFFER_BIT),r.setDepthWriteEnabled(!1);for(const t of this.children)t.beforeRender(e);for(const e of this.children)e.processRender(t);for(const t of this.children)t.afterRender(e);s.setRenderTarget(p),r.bindFramebuffer(this._prevFBO),s.beforeRenderLayer(t,this._clippingInfos?255:0,this.computedOpacity),r.setStencilTestEnabled(!1),r.setStencilWriteMask(0),s.blitTexture(r,i.colorTexture,9728),s.compositeLayer(t,this.computedOpacity),o.recordContainerEnd()}createRenderParams(e){return{...super.createRenderParams(e),blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1}}_getFbo(e){const{context:t,painter:s}=e,{width:o,height:i}=t.getViewport();if(o!==this._lastWidth||i!==this._lastHeight)if(this._lastWidth=o,this._lastHeight=i,this._renderTarget)this._renderTarget.resize(o,i);else{const e={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:o,height:i},p={colorTarget:0,depthStencilTarget:3},a=s.getSharedStencilBuffer();this._renderTarget=new r(t,p,e,a)}return this._renderTarget}}let a=class extends(s(i)){constructor(){super(...arguments),this.container=new p}attach(){this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",(()=>this._updateStageChildren())),"grouplayerview2d")}detach(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren()}hitTest(e,t){return null}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,t)=>this.container.addChildAt(e.container,t)))}};a=e([t("esri.views.2d.layers.GroupLayerView2D")],a);var m=a;export default m;