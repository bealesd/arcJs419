// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/has ../../../../core/maybe ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/property ../../../../core/jsonMap ../../../../core/accessorSupport/decorators/subclass ../../../../core/urlUtils ../../../../core/uuid ../../../../portal/support/resourceExtension ../../../../core/promiseUtils ../../../../core/Accessor ../../../../core/Collection ../../../../Graphic ../../../../core/Handles ../../../../layers/Layer ../../../../core/accessorSupport/diffUtils ../../../../core/watchUtils ../../../../tasks/support/Query ../../../support/WatchUpdatingTracking ../../../../layers/graphics/hydratedFeatures ./graphicUtils ./constants ./Graphics3DCore ./Graphics3DScaleVisibility ./Graphics3DElevationAlignment ./Graphics3DObjectStates".split(" "),
function(m,f,c,g,J,K,h,L,r,M,N,O,t,u,v,n,w,x,y,z,A,B,C,D,E,F,G,H,I){c=function(p){function k(a){a=p.call(this,a)||this;a.graphicsCore=null;a.elevationAlignment=new H;a.watchUpdatingTracking=new B.WatchUpdatingTracking;a.handles=new w;a.suspendResumeExtent=null;return a}m._inheritsLoose(k,p);var d=k.prototype;d.normalizeCtorArgs=function(a){let b=null;a.scaleVisibilityEnabled&&(a={...a},delete a.scaleVisibilityEnabled,b=new G);const e=new F.Graphics3DCore({owner:a.owner,layer:a.layer,preferredUpdatePolicy:0,
graphicSymbolSupported:!0});return{...a,graphicsCore:e,scaleVisibility:b}};d.initialize=function(){const a=this.scaleVisibility;g.isSome(a)&&"minScale"in this.layer&&this.watchUpdatingTracking.add(this.layer,"scaleRangeId",()=>a.layerMinMaxScaleChangeHandler());"elevationInfo"in this.layer&&this.watchUpdatingTracking.add(this.layer,"elevationInfo",(b,e)=>{y.diff(b,e)&&this.watchUpdatingTracking.addPromise(this.graphicsCore.elevationInfoChange())})};d.setup=async function(){const a=(b,e,l)=>this.graphicsCore.spatialIndex.queryGraphicUIDsInExtent(b,
e,l);this.elevationAlignment.setup(this.owner,a,this.graphicsCore,this.view.elevationProvider);g.isSome(this.scaleVisibility)&&"minScale"in this.layer&&this.scaleVisibility.setup(this.owner,this.layer,a,this.graphicsCore,this.owner.view.basemapTerrain);this._set("objectStates",new I.Graphics3DObjectStates(this.graphicsCore));try{await this.graphicsCore.setup({elevationAlignment:this.elevationAlignment,scaleVisibility:this.scaleVisibility,objectStates:this.objectStates})}catch(b){if(t.isAbortError(b))return;
throw b;}this.destroyed||(this.handles.add(this.view.watch("clippingArea",()=>this.updateClippingExtent(),!0)),this.updateClippingExtent(),this.setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics())};d.destroy=function(){this.handles=g.destroyMaybe(this.handles);this.watchUpdatingTracking.destroy();this._set("elevationAlignment",g.destroyMaybe(this.elevationAlignment));this._set("scaleVisibility",g.destroyMaybe(this.scaleVisibility));this._set("objectStates",g.destroyMaybe(this.objectStates));
this._set("graphicsCore",g.destroyMaybe(this.graphicsCore))};d.getGraphicFromGraphicUid=function(a){if(this.owner.loadedGraphics){const b=this.owner.loadedGraphics.find(e=>e.uid===a);if(b)return C.hydrateGraphic(b,this.layer instanceof x?this.layer:null)}};d.whenGraphicBounds=function(a,b){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(a,b):Promise.reject()};d.computeAttachmentOrigin=function(a,b){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(a,b):null};d.getSymbolLayerSize=
function(a,b){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(a,b):null};d.maskOccludee=function(a){const {set:b,handle:e}=this.objectStates.acquireSet(1,null);this.objectStates.setUid(b,a.uid);return e};d.highlight=function(a){if(a instanceof A)return q;if("number"===typeof a||a instanceof n)return this.highlight([a]);a instanceof v&&(a=a.toArray());if(Array.isArray(a)&&0<a.length){if(a[0]instanceof n){a=a.map(l=>l.uid);const {set:b,handle:e}=this.objectStates.acquireSet(0,null);this.objectStates.setUids(b,
a);return e}if("number"===typeof a[0]){const {set:b,handle:e}=this.objectStates.acquireSet(0,null);this.objectStates.setObjectIds(b,a);return e}}return q};d.updateClippingExtent=function(){this.graphicsCore.setClippingExtent(this.view.clippingArea,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()};d.updateSuspendResumeExtent=function(){g.isNone(this.scaleVisibility)||(this.suspendResumeExtent=D.enlargeExtent(this.graphicsCore.computedExtent,this.suspendResumeExtent,E.SUSPEND_RESUME_EXTENT_OPTIMISM,
this.graphicsCore.extentPadding),this.scaleVisibility.setExtent(this.suspendResumeExtent))};d.setupSuspendResumeExtent=function(){g.isNone(this.scaleVisibility)||(z.init(this.graphicsCore,"computedExtent",a=>this.updateSuspendResumeExtent(),!0),this.graphicsCore.watch("extentPadding",a=>this.updateSuspendResumeExtent()))};m._createClass(k,[{key:"suspended",get:function(){return!(!g.isSome(this.scaleVisibility)||!this.scaleVisibility.suspended)}},{key:"updating",get:function(){var a,b;return!!(null!=
(a=this.graphicsCore)&&a.updating||g.isSome(this.scaleVisibility)&&this.scaleVisibility.updating||null!=(b=this.watchUpdatingTracking)&&b.updating)}}]);return k}(u);f.__decorate([h.property({constructOnly:!0})],c.prototype,"owner",void 0);f.__decorate([h.property({constructOnly:!0})],c.prototype,"layer",void 0);f.__decorate([h.property({readOnly:!0,aliasOf:"owner.view"})],c.prototype,"view",void 0);f.__decorate([h.property({constructOnly:!0})],c.prototype,"graphicsCore",void 0);f.__decorate([h.property({constructOnly:!0})],
c.prototype,"scaleVisibility",void 0);f.__decorate([h.property({readOnly:!0})],c.prototype,"elevationAlignment",void 0);f.__decorate([h.property({readOnly:!0})],c.prototype,"objectStates",void 0);f.__decorate([h.property({readOnly:!0})],c.prototype,"watchUpdatingTracking",void 0);f.__decorate([h.property({readOnly:!0})],c.prototype,"suspended",null);f.__decorate([h.property({readOnly:!0})],c.prototype,"updating",null);c=f.__decorate([r.subclass("esri.views.3d.layers.graphics.Graphics3DGraphicLikeLayerView")],
c);const q={remove(){},pause(){},resume(){}};return c});