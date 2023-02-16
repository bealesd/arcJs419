/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{h as t}from"../core/lang.js";import{L as e,b as i,s,i as r,q as a,u as o,m as n,p as l,c as d}from"./Logger.js";import{createResolver as h}from"../core/promiseUtils.js";import u from"../core/Error.js";import c from"../Color.js";import{a as p}from"./screenUtils.js";import{a as f}from"./unitUtils.js";import{m as v}from"./lengthUtils.js";import{j as m,A as b,d as x,e as _,f as g,g as y,u as z}from"./definitions.js";import{g as T}from"./capabilities2.js";import{Q as w}from"./Queue.js";import{T as S,F as V}from"./FramebufferObject.js";import{T as D}from"./TiledDisplayObject.js";import{c as F,D as A}from"./visualVariablesUtils.js";import{g as E,m as R,n as U,i as I}from"./Utils10.js";import{T as M}from"./TileContainer.js";class j extends D{constructor(t,e){super(t,e,[m,m])}}const O=e.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),C=F(A,O),k=t=>2147483647&t;class q{constructor(t,e,i){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:s,pixelType:r,textureOnly:a}=t,n=E(r);this.shared=i,this.pixelType=r,this.size=e,this.textureOnly=a,a||(this.data=new n(o(s))),this._resetRange()}destroy(){a(this._texture,(t=>t.dispose()));for(const t in this._fbos)a(this._fbos[t],(e=>{"0"===t&&e.detachColorTexture(),e.dispose()})),this._fbos[t]=null;this._texture=null}get _textureDesc(){return{target:3553,wrapMode:33071,pixelFormat:6408,dataType:this.pixelType,samplingMode:9728,width:this.size,height:this.size}}setData(t,e,i){const s=k(t),r=o(this.data),a=s*this.texelSize+e;!r||a>=r.length||(r[a]=i,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s))}getData(t,e){if(i(this.data))return null;const s=k(t)*this.texelSize+e;return!this.data||s>=this.data.length?null:this.data[s]}getTexture(t){return d(this._texture,(()=>this._initTexture(t)))}getFBO(t,e=0){if(i(this._fbos[e])){const i={colorTarget:0,depthStencilTarget:0},s=0===e?this.getTexture(t):this._textureDesc;this._fbos[e]=new V(t,i,s)}return this._fbos[e]}get locked(){return!(5121!==this.pixelType||!this.shared||this.textureOnly||!t("esri-atomics")||!this.data)&&1===Atomics.load(this.data,0)}updateTexture(t){if(!this.locked)try{const e=this.dirtyStart,i=this.dirtyEnd;if(e>i)return;this._resetRange();const s=o(this.data).buffer,r=this.getTexture(t),a=4,n=(e-e%this.size)/this.size,l=(i-i%this.size)/this.size,d=n,h=this.size,c=l,p=n*this.size*a,f=(h+c*this.size)*a-p,v=E(this.pixelType),m=v.BYTES_PER_ELEMENT;try{new v(s,p*m,f)}catch(t){0}const b=new v(s,p*m,f),x=this.size,_=c-d+1;if(_>this.size)return void O.error(new u("mapview-webgl","Out-of-bounds index when updating AttributeData"));r.updateData(0,0,d,x,_,b)}catch(t){}}update(t){const{data:e,start:i,end:s}=t;if(r(e)){const s=this.data,r=i*this.texelSize;for(let i=0;i<e.length;i++){const a=1<<i%this.texelSize;t.layout&a&&(s[r+i]=e[i])}}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,s)}resize(t,e){const i=this.size;if(this.size=e,this.textureOnly)return void(i!==this.size&&(this._lastTexture=this._texture,this._texture=null));const s=E(this.pixelType);this.destroy(),this.data=new s(o(t.buffer))}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(t){const e=new S(t,this._textureDesc,d(this.data,void 0));if(r(this._lastTexture)&&this._fbos[0]){const i=this._lastTexture.descriptor.width,s=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,a=this._lastTexture.descriptor.pixelFormat,o=this.getFBO(t),n=R(r),l=new(E(r))(new ArrayBuffer(i*s*n*this.texelSize)),d=t.getBoundFramebufferObject(),{x:h,y:u,width:c,height:p}=t.getViewport();t.bindFramebuffer(o),o.readPixels(0,0,i,s,a,r,l),e.updateData(0,0,0,2*i,s/2,l),t.setViewport(h,u,c,p),t.bindFramebuffer(d)}return this.destroy(),this._texture=e,this._texture}}class B{constructor(t){this._onUpdate=t,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}initialize(t){const{blocks:e,shared:a,size:o}=t;if(this.shared=a,this.size=o,C("Initializing AttributeStoreView",t),i(this._data))this._data=s(e,(t=>new q(t,o,a)));else for(let t=0;t<this._data.length;t++){const s=this._data[t],n=e[t];r(n)&&(i(s)?this._data[t]=new q(n,o,a):s.resize(n,o))}this._initialized=!0}destroy(){a(this._data,(t=>s(t,(t=>t.destroy())))),a(this._defaultTexture,(t=>t.dispose()))}getBlock(t){if(i(this._data))return null;return this._data[t]}setLabelMinZoom(t,e){this.setData(t,0,1,e)}getLabelMinZoom(t){return this.getData(t,0,1,255)}getFilterFlags(t){return this.getData(t,0,0,0)}getVVSize(t){return this.getData(t,b,0,0)}getData(t,e,s,a){if(!this._data)return 0;const n=o(this._data)[e];if(i(n))return 0;const l=n.getData(t,s);return r(l)?l:a}setData(t,e,i,s){const r=o(this._data)[e];o(r).setData(t,i,s)}lockTextureUpload(){this._locked=!0}unlockTextureUpload(){this._locked=!1}forceTextureUpload(){this._forceNextUpload=!0}async requestUpdate(t){if(this._pendingAttributeUpdate)return void O.error(new u("mapview-webgl","Tried to update attribute data with a pending update"));const e=h();return C("AttributeStoreView Update Requested",t),this._pendingAttributeUpdate={data:t,resolver:e},e.promise}update(){if(this._initialized&&(this._onUpdate(),r(this._pendingAttributeUpdate))){const{data:t,resolver:e}=this._pendingAttributeUpdate,i=o(this._data);for(let e=0;e<t.blocks.length;e++){const s=t.blocks[e],r=i[e];a(r,(t=>a(s,(i=>{C(`Updating block ${e}`,i),t.update(i)}))))}this._pendingAttributeUpdate=null,e()}}bindTextures(t){this.update();const e=this._getDefaultTexture(t);if(!this._initialized)return t.bindTexture(e,x),t.bindTexture(e,_),t.bindTexture(e,g),void t.bindTexture(e,y);const i=o(this._data);this._locked&&!this._forceNextUpload||(n(i,(e=>e.updateTexture(t))),this._forceNextUpload=!1),t.bindTexture(l(i[0],e,(e=>e.getTexture(t))),x),t.bindTexture(l(i[1],e,(e=>e.getTexture(t))),_),t.bindTexture(l(i[2],e,(e=>e.getTexture(t))),g),t.bindTexture(l(i[3],e,(e=>e.getTexture(t))),y)}_getDefaultTexture(t){if(i(this._defaultTexture)){const e={wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1};this._defaultTexture=new S(t,e,new Uint8Array(4))}return this._defaultTexture}}function L(t,e){const i=e.length;if(t<e[0].value||1===i)return e[0].size;for(let s=1;s<i;s++)if(t<e[s].value){const i=(t-e[s-1].value)/(e[s].value-e[s-1].value);return e[s-1].size+i*(e[s].size-e[s-1].size)}return e[i-1].size}function P(t,e,s=0){if(i(e))return t[s+0]=0,t[s+1]=0,t[s+2]=0,void(t[s+3]=0);const{r,g:a,b:o,a:n}=e;t[s+0]=r*n/255,t[s+1]=a*n/255,t[s+2]=o*n/255,t[s+3]=n}class Q{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.ddColors=new Float32Array(32),this.ddBackgroundColor=new Float32Array(4),this.ddActiveDots=new Float32Array(8),this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1}}getSizeVVFieldStops(t){const e=this._vvSizeFieldStops;switch(e.type){case"static":return e;case"level-dependent":return d(e.levels[t],(()=>{let i=1/0,s=0;for(const r in e.levels){const e=parseFloat(r),a=Math.abs(t-e);a<i&&(i=a,s=e)}if(i===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const r=2**((t-s)/2),a=o(e.levels[s]),n=new Float32Array(a.values);return n[2]*=r,n[3]*=r,{sizes:o(a.sizes),values:n}}))}}get vvMaterialParameters(){return this._vvMaterialParameters}update(t){r(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,t)}setInfo(t,e,i){switch(r(i)&&i.forEach((t=>this._updateEffects(t))),this._vvInfo=e,t.type){case"dot-density":this._updateDotDensityInfo(t)}}getVariation(){return{ddDotBlending:this.ddDotBlending,outsideLabelsVisible:this.outsideLabelsVisible,oesTextureFloat:T().supportsTextureFloat}}getVariationHash(){return(this.ddDotBlending?1:0)|(this.outsideLabelsVisible?1:0)<<1}_updateEffects(t){r(t)&&t.filter&&t.filter.enabled&&(this.outsideLabelsVisible=t.excludedLabelsVisible)}_updateVisualVariables(t,e){const i=this._vvMaterialParameters;if(i.vvOpacityEnabled=!1,i.vvSizeEnabled=!1,i.vvColorEnabled=!1,i.vvRotationEnabled=!1,!t)return;const s=t.size;if(s){if(i.vvSizeEnabled=!0,s.minMaxValue){const t=s.minMaxValue;let i,r;if(U(t.minSize)&&U(t.maxSize))if(I(t.minSize)&&I(t.maxSize))i=p(t.minSize),r=p(t.maxSize);else{const s=e.scale;i=p(L(s,t.minSize.stops)),r=p(L(s,t.maxSize.stops))}this.vvSizeMinMaxValue.set([t.minDataValue,t.maxDataValue,i,r])}if(s.scaleStops&&(this.vvSizeScaleStopsValue=p(L(e.scale,s.scaleStops.stops))),s.unitValue){const t=f(e.spatialReference)/v[s.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=t/e.resolution}s.fieldStops&&(this._vvSizeFieldStops=s.fieldStops)}const r=t.color;r&&(i.vvColorEnabled=!0,this.vvColorValues.set(r.values),this.vvColors.set(r.colors));const a=t.opacity;a&&(i.vvOpacityEnabled=!0,this.vvOpacityValues.set(a.values),this.vvOpacities.set(a.opacities));const o=t.rotation;o&&(i.vvRotationEnabled=!0,i.vvRotationType=o.type)}_updateDotDensityInfo(t){const e=t.attributes;this.ddDotValue=t.dotValue,this.ddDotScale=t.referenceScale,this.ddDotSize=t.dotSize,this.ddDotBlending=t.dotBlendingEnabled,this.ddSeed=t.seed;for(let t=0;t<z;t++){const i=t>=e.length?new c([0,0,0,0]):e[t].color;P(this.ddColors,i,4*t)}for(let e=0;e<8;e++)this.ddActiveDots[e]=e<t.attributes.length?1:0;P(this.ddBackgroundColor,t.backgroundColor)}}class N extends M{constructor(t){super(t),this._rendererInfo=new Q,this._materialItemsRequestQueue=new w,this.attributeView=new B((()=>this.onAttributeStoreUpdate()))}destroy(){this.removeAllChildren(),this.children.forEach((t=>t.destroy())),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(t,e,i){this._rendererInfo.setInfo(t,e,i),this.requestRender()}async getMaterialItems(t,e){if(!t||0===t.length)return null;const i=h();return this._materialItemsRequestQueue.push({items:t,abortOptions:e,resolver:i}),this.requestRender(),i.promise}doRender(t){if(t.context.capabilities.enable("textureFloat"),t.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let e=this._materialItemsRequestQueue.pop();for(;e;)this._processMaterialItemRequest(t,e),e=this._materialItemsRequestQueue.pop()}super.doRender(t)}renderChildren(t){for(const e of this.children)e.commit(t);this._rendererInfo.update(t.state),super.renderChildren(t)}createRenderParams(t){return{...super.createRenderParams(t),rendererInfo:this._rendererInfo,attributeView:this.attributeView}}onAttributeStoreUpdate(){}_processMaterialItemRequest(t,{items:e,abortOptions:i,resolver:s}){const{painter:r,pixelRatio:a}=t,o=e.map((t=>r.textureManager.rasterizeItem(t.symbol,a,t.glyphIds,i)));Promise.all(o).then((t=>{if(!this.stage)return void s.reject();const i=t.map(((t,i)=>({id:e[i].id,mosaicItem:t})));s.resolve(i)}),s.reject)}}export{N as F,j as W};