// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Collection ../../../core/collectionUtils ../../../core/Error ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../engine/Container ../../layers/support/ClipRect ../../layers/support/Geometry ../../layers/support/Path".split(" "),function(n,p,e,r,t,u,d,g,A,B,v,
w,x,y,z){const m=r.ofType({key:"type",base:null,typeMap:{rect:x,path:z,geometry:y}});n.LayerView2DMixin=c=>{c=function(h){function l(){var a=h.apply(this,arguments)||this;a.attached=!1;a.clips=new m;a.lastUpdateId=-1;a.moving=!1;a.updateRequested=!1;a.visibleAtCurrentScale=!1;return a}p._inheritsLoose(l,h);var f=l.prototype;f.initialize=function(){const a=this.view?.spatialReferenceLocked??!0;this.view?.spatialReference&&a&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new u("layerview:spatial-reference-incompatible",
"The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new w.Container),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.handles.add([d.watch(()=>this.suspended,b=>{this.container&&(this.container.visible=!b);this.view&&!b&&this.updateRequested&&this.view.requestUpdate()},d.syncAndInitial),d.watch(()=>this.layer?.opacity??1,b=>{this.container&&(this.container.opacity=
b)},d.syncAndInitial),d.watch(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",b=>{this.container&&(this.container.blendMode=b)},d.syncAndInitial),d.watch(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,b=>{this.container&&(this.container.effect=b)},d.syncAndInitial),d.on(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},d.syncAndInitial),d.watch(()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?
this.layer.effectiveScaleRange:null}),({scale:b})=>{b=b&&this.isVisibleAtScale(b);b!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",b)},d.syncAndInitial)]),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then(b=>{b===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))};f.destroy=function(){this.processDetach();this.updateRequested=!1};f.processAttach=function(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&
(this.attach(),this.attached=!0,this.requestUpdate())};f.processDetach=function(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)};f.isVisibleAtScale=function(a){const b=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!b)return!0;const {minScale:k,maxScale:q}=b;return(0===k||a<=k)&&(0===q||a>=q)};f.requestUpdate=function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())};f.processUpdate=
function(a){this.isFulfilled()&&!this.isResolved()?this.updateRequested=!1:(this._set("updateParameters",a),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(a)))};f.hitTest=function(a,b){return Promise.resolve(null)};f.supportsSpatialReference=function(a){return!0};f.canResume=function(){return this.spatialReferenceSupported?h.prototype.canResume.call(this)?this.visibleAtCurrentScale:!1:!1};f.getSuspendInfo=function(){const a=h.prototype.getSuspendInfo.call(this),b=!this.spatialReferenceSupported,
k=this.visibleAtCurrentScale;b&&(a.spatialReferenceNotSupported=b);k&&(a.outsideScaleRange=k);return a};p._createClass(l,[{key:"spatialReferenceSupported",get:function(){const a=this.view?.spatialReference;return null==a||this.supportsSpatialReference(a)}},{key:"updating",get:function(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}}]);return l}(c);e.__decorate([g.property()],c.prototype,"attached",
void 0);e.__decorate([g.property({type:m,set(h){h=t.referenceSetter(h,this._get("clips"),m);this._set("clips",h)}})],c.prototype,"clips",void 0);e.__decorate([g.property()],c.prototype,"container",void 0);e.__decorate([g.property()],c.prototype,"moving",void 0);e.__decorate([g.property({readOnly:!0})],c.prototype,"spatialReferenceSupported",null);e.__decorate([g.property({readOnly:!0})],c.prototype,"updateParameters",void 0);e.__decorate([g.property()],c.prototype,"updateRequested",void 0);e.__decorate([g.property()],
c.prototype,"updating",null);e.__decorate([g.property()],c.prototype,"view",void 0);e.__decorate([g.property({readOnly:!0})],c.prototype,"visibleAtCurrentScale",void 0);return c=e.__decorate([v.subclass("esri.views.2d.layers.LayerView2D")],c)};Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});