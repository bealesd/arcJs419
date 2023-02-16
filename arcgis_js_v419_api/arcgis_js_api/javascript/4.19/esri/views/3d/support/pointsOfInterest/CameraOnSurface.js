// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/has ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/property ../../../../core/jsonMap ../../../../core/accessorSupport/decorators/subclass ../../../../core/urlUtils ../../../../core/uuid ../../../../portal/support/resourceExtension ../../../../core/promiseUtils ../../../../geometry/Point ../../../../chunks/vec3f64 ../../../../chunks/vec3 ../../../../core/watchUtils ../cameraUtils ../PropertiesPool ./PointOfInterest".split(" "),
function(b,l,c,y,z,A,e,B,r,C,D,E,m,n,p,g,t,u,v,w){const x=Array;b.CameraOnSurface=function(q){function h(a){a=q.call(this,a)||this;a._dirty=!1;a._propertiesPool=new v.PropertiesPool({location:n,renderLocation:x},l._assertThisInitialized(a));a._estimatedSurfaceAltitude=0;a._pendingElevationQueryController=null;a.cameraName="camera";a.renderLocation=p.create();a.tmpPoint=new n;return a}l._inheritsLoose(h,q);var d=h.prototype;d.initialize=function(){this.scheduler&&this.handles.add(this.scheduler.registerTask(this.task,
()=>this._update(),()=>this._needsUpdate()));this._update();if(this.map){const a=()=>this._setDirty();this.handles.add(t.on(this.map,"ground.layers","change",a,a,a))}};d.destroy=function(){this._cancelPendingRequest();this._propertiesPool.destroy();this._propertiesPool=null};d.updateRenderLocation=function(){this._setDirty();this._updateRenderLocation()};d.update=function(){this._update();this._updateRenderLocation()};d._setDirty=function(){this._dirty||(this._dirty=!0,this.notifyChange("updating"))};
d._needsUpdate=function(){return!this._pendingElevationQueryController&&this._dirty};d._cancelPendingRequest=function(){const a=this._pendingElevationQueryController;a&&(this._pendingElevationQueryController=null,a.abort(),this.notifyChange("updating"))};d._update=function(){this._cancelPendingRequest();this._dirty=!1;this.notifyChange("updating");if(this.map&&this.map.ground){this.renderCoordsHelper.fromRenderCoords(this._camera.eye,this.tmpPoint,this.state.spatialReference);var a=m.createAbortController();
this.map.ground.queryElevation(this.tmpPoint,{signal:a.signal,cache:this.cache}).then(f=>this._updateSurfaceAltitude(f.geometry.z)).catch(f=>{m.isAbortError(f)||this._updateSurfaceAltitude(0)}).catch(()=>{}).then(()=>{this._pendingElevationQueryController===a&&(this._pendingElevationQueryController=null,this.notifyChange("updating"));a=null});this._pendingElevationQueryController=a}else this._updateSurfaceAltitude(0)};d._updateSurfaceAltitude=function(a){this._estimatedSurfaceAltitude!==a&&(this._estimatedSurfaceAltitude=
a,this._updateRenderLocation())};d._updateRenderLocation=function(){g.copy(k,this._camera.eye);this.renderCoordsHelper.setAltitude(this._estimatedSurfaceAltitude,k);g.exactEquals(this._get("renderLocation"),k)||this._set("renderLocation",g.copy(this._propertiesPool.get("renderLocation"),k))};l._createClass(h,[{key:"_camera",get:function(){return this.state[this.cameraName]}},{key:"location",get:function(){const a=this._propertiesPool.get("location");this.renderCoordsHelper.fromRenderCoords(this.renderLocation,
a,this.state.spatialReference);return a}},{key:"scale",get:function(){const a=this._camera,f=g.distance(a.eye,this.renderLocation);return u.distanceToScale({renderCoordsHelper:this.renderCoordsHelper,state:{camera:a}},f,0)}},{key:"updating",get:function(){return this._dirty||null!=this._pendingElevationQueryController}}]);return h}(w.PointOfInterest);c.__decorate([e.property({constructOnly:!0})],b.CameraOnSurface.prototype,"scheduler",void 0);c.__decorate([e.property({constructOnly:!0})],b.CameraOnSurface.prototype,
"cache",void 0);c.__decorate([e.property({constructOnly:!0})],b.CameraOnSurface.prototype,"task",void 0);c.__decorate([e.property({constructOnly:!0})],b.CameraOnSurface.prototype,"cameraName",void 0);c.__decorate([e.property({readOnly:!0})],b.CameraOnSurface.prototype,"location",null);c.__decorate([e.property({constructOnly:!0})],b.CameraOnSurface.prototype,"map",void 0);c.__decorate([e.property({readOnly:!0})],b.CameraOnSurface.prototype,"renderLocation",void 0);c.__decorate([e.property({readOnly:!0})],
b.CameraOnSurface.prototype,"scale",null);c.__decorate([e.property({readOnly:!0})],b.CameraOnSurface.prototype,"updating",null);b.CameraOnSurface=c.__decorate([r.subclass("esri.views.3d.support.CameraOnSurface")],b.CameraOnSurface);const k=p.create();b.default=b.CameraOnSurface;Object.defineProperty(b,"__esModule",{value:!0})});