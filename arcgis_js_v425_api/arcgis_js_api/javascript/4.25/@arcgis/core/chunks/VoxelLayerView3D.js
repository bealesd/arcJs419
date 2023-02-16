/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import s from"../core/Error.js";import t from"../core/Handles.js";import{L as r}from"./Logger.js";import{i as o,d as i}from"./maybe.js";import{watch as a,initial as l}from"../core/reactiveUtils.js";import{property as n}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as h}from"../core/accessorSupport/decorators/subclass.js";import{e as m}from"../geometry/SpatialReference.js";import{L as d}from"./LayerView3D.js";import c from"../views/layers/LayerView.js";import{C as p}from"./context-util.js";import"./object.js";import"../config.js";import"./string.js";import"../core/promiseUtils.js";import"./handleUtils.js";import"./watch.js";import"./ArrayPool.js";import"../core/scheduling.js";import"./nextTick.js";import"./get.js";import"./utils.js";import"./tracking.js";import"./metadata.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"./writer.js";import"./heightModelInfoUtils.js";import"../geometry/HeightModelInfo.js";import"./jsonMap.js";import"./unitUtils.js";import"./projectionEllipsoid.js";import"./Ellipsoid.js";import"./reader.js";import"./arcgisLayerUrl.js";import"../core/urlUtils.js";import"./persistableUrlUtils.js";import"../core/Evented.js";import"../core/HandleOwner.js";import"./WatchUpdatingTracking.js";import"../core/Identifiable.js";import"../core/Promise.js";var u;!function(e){e[e.API=1]="API",e[e.VerboseAPI=2]="VerboseAPI",e[e.Error=3]="Error"}(u||(u={}));let y=class extends(d(c)){constructor(){super(...arguments),this._usedMemory=0,this._futureMemory=0,this.type="voxel-3d",this._wasmLayerId=-1,this._handles=new t,this._dbgFlags=new Set}get baseUrl(){return this.layer.parsedUrl?.path??""}get wasmLayerId(){return this._wasmLayerId}initialize(){if(this._dbgFlags.add(u.Error),"local"!==this.view.viewingMode)throw new s("voxel:unsupported-viewingMode","Voxel layers support local viewingMode only.",{});if(this.view._stage.renderView.renderingContext.type!==p.WEBGL2)throw new s("voxel:unsupported-context","Voxel layers are supported in WebGL2 rendering contexts only.",{});if(!this.view._stage.renderView.renderingContext.capabilities.colorBufferFloat?.textureFloat)throw new s("voxel:missing-color-buffer-float","Voxel layers require the WebGL2 extension EXT_color_buffer_float",{});const e=this.layer.spatialReference;if(!m(e,this.view.spatialReference))throw new s("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});const t=this.layer.currentVariableId,r=this.layer.getVolume(t),i=this.layer.getVariable(t);if(o(r)&&o(i)){const e=r.dimensions[0],s=r.dimensions[1],t=r.zDimension;if(t>1){const o=r.dimensions[t],a=e.size*s.size*o.size;let l=1;switch(i.renderingFormat.type){case"Int16":case"UInt16":l=2;break;case"Int32":case"UInt32":case"Float32":l=4}this._futureMemory=l*a}}const n=this.view.addVoxelLayerViewToWasm(this).then((e=>{this._wasmLayerId=e,this._suspendedHandle=a((()=>this.suspended),(e=>{const s=this.view.voxelWasm;o(s)&&s.setEnabled(this,!e)}),l),this._handles.add([a((()=>this.layer.renderMode),(e=>this._pushRenderModeToWasm(e))),a((()=>this.layer.currentVariableId),(e=>this._pushCurrentVariableIdToWasm(e))),a((()=>this.layer.getSections()),(e=>this._pushSectionsToWasm(e))),a((()=>this.layer.getVariableStyles()),(e=>this._pushVariableStylesToWasm(e))),a((()=>this.layer.getVolumeStyles()),(e=>this._pushVolumeStylesToWasm(e))),a((()=>this.layer.enableDynamicSections),(e=>this._pushEnableDynamicSectionsToWasm(e))),a((()=>this.layer.enableIsosurfaces),(e=>this._pushEnableIsosurfacesToWasm(e))),a((()=>this.layer.enableSections),(e=>this._pushEnableSectionsToWasm(e))),a((()=>this.layer.enableSlices),(e=>this._pushEnableSlicesToWasm(e)))])})).catch((e=>{if(this.view.removeVoxelLayerViewFromWasm(this),this._wasmLayerId=-1,-1===e)throw new s("voxel:addLayer-failure","The voxel layer description was invalid.",{});if(-2===e)throw new s("voxel:addLayer-failure","The voxel layer web assembly module failed to download.",{})}));this.addResolvingPromise(n)}destroy(){this.view.removeVoxelLayerViewFromWasm(this),this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null),this._handles=i(this._handles)}isUpdating(){const e=this.view.voxelWasm;return!(this._wasmLayerId<0||!o(e))&&e.isUpdating(this._wasmLayerId)}updatingFlagChanged(){this.notifyChange("updating")}getUsedMemory(){return this._usedMemory}getUnloadedMemory(){return this._futureMemory}ignoresMemoryFactor(){return!0}get performanceInfo(){return{nodes:0,displayedNumberOfFeatures:0,maximumNumberOfFeatures:0,totalNumberOfFeatures:0,core:null}}setUsedMemory(e){this._usedMemory=e,this._futureMemory=0}captureFrustum(){const e=this.view.voxelWasm;o(e)&&e.captureFrustum()}toggleFullVolumeExtentDraw(){const e=this.view.voxelWasm;o(e)&&e.toggleFullVolumeExtentDraw(this)}getLayerTimes(){let e=[];const s=this.view.voxelWasm;return o(s)&&(e=s.getLayerTimes(this)),e}getCurrentLayerTimeIndex(){let e=0;const s=this.view.voxelWasm;return o(s)&&(e=s.getCurrentLayerTimeIndex(this)),e}_pushRenderModeToWasm(e){const s=this.view.voxelWasm;this._dbg(u.VerboseAPI,"VoxelLayerView3D._pushRenderModeToWasm() called, "+(o(s)?"have WASM":"don't have WASM!!!")),o(s)&&s.setRenderMode(this,e)||this._dbg(u.Error,"VoxelLayerView3D._pushRenderModeToWasm() failed!")}_pushSectionsToWasm(e){const s=this.view.voxelWasm;this._dbg(u.VerboseAPI,"VoxelLayerView3D._pushSectionsToWasm() called, "+(o(s)?"have WASM":"don't have WASM!!!")),o(s)&&s.setStaticSections(this,e)||this._dbg(u.Error,"VoxelLayerView3D._pushSectionsToWasm() failed!")}_pushCurrentVariableIdToWasm(e){const s=this.view.voxelWasm;this._dbg(u.VerboseAPI,"VoxelLayerView3D._pushCurrentVariableIdToWasm() called!, "+(o(s)?"have WASM":"don't have WASM!!!")),o(s)&&s.setCurrentVariable(this,e)||this._dbg(u.Error,"VoxelLayerView3D._pushCurrentVariableIdToWasm() failed!")}_pushVariableStylesToWasm(e){const s=this.view.voxelWasm;this._dbg(u.VerboseAPI,"VoxelLayerView3D._pushVariableStylesToWasm() called, "+(o(s)?"have WASM":"don't have WASM!!!"));let t=!1;o(s)&&(t=s.setVariableStyles(this,e),t||this._dbg(u.Error,"VoxelLayerView3D._pushVariableStylesToWasm() failed!"))}_accountForEnableSlices(e,s){const t=o(s)?s:this.layer.enableSlices;for(let s=0;s<e.length;++s){const r=e[s];for(const e of r.slices)e.enabled=e.enabled&&t}}_pushVolumeStylesToWasm(e){const s=this.view.voxelWasm;this._dbg(u.VerboseAPI,"VoxelLayerView3D._pushVolumeStylesToWasm() called, "+(o(s)?"have WASM":"don't have WASM!!!"));let t=!1;o(s)&&(this._accountForEnableSlices(e,null),t=s.setVolumeStyles(this,e),t||this._dbg(u.Error,"VoxelLayerView3D._pushVolumeStylesToWasm() failed!"))}_pushEnableDynamicSectionsToWasm(e){const s=this.view.voxelWasm;this._dbg(u.VerboseAPI,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() called, "+(o(s)?"have WASM":"don't have WASM!!!"));let t=!1;o(s)&&(t=s.setEnableDynamicSections(this,e),t||this._dbg(u.Error,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() failed!"))}_pushEnableSlicesToWasm(e){const s=this.view.voxelWasm;this._dbg(u.VerboseAPI,"VoxelLayerView3D._pushEnableSlicesToWasm() called, "+(o(s)?"have WASM":"don't have WASM!!!"));let t=!1;if(o(s)){const r=this.layer.getVolumeStyles();this._accountForEnableSlices(r,e),t=s.setVolumeStyles(this,r),t||this._dbg(u.Error,"VoxelLayerView3D._pushEnableSlicesToWasm() failed!")}}_pushEnableIsosurfacesToWasm(e){const s=this.view.voxelWasm;this._dbg(u.VerboseAPI,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() called, "+(o(s)?"have WASM":"don't have WASM!!!"));let t=!1;o(s)&&(t=s.setEnableIsosurfaces(this,e),t||this._dbg(u.Error,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() failed!"))}_pushEnableSectionsToWasm(e){const s=this.view.voxelWasm;this._dbg(u.VerboseAPI,"VoxelLayerView3D._pushEnableSectionsToWasm() called, "+(o(s)?"have WASM":"don't have WASM!!!"));let t=!1;o(s)&&(t=s.setEnableSections(this,e),t||this._dbg(u.Error,"VoxelLayerView3D._pushEnableSectionsToWasm() failed!"))}_dbg(e,s){this._dbgFlags.has(e)&&(e===u.Error?r.getLogger(this.declaredClass).error(s):r.getLogger(this.declaredClass).warn(s))}};e([n()],y.prototype,"layer",void 0),e([n()],y.prototype,"baseUrl",null),y=e([h("esri.views.3d.layers.VoxelLayerView3D")],y);const b=y;export{b as default};