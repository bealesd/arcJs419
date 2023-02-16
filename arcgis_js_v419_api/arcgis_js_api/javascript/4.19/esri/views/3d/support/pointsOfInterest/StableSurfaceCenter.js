// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/has ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/property ../../../../core/jsonMap ../../../../core/accessorSupport/decorators/subclass ../../../../core/urlUtils ../../../../core/uuid ../../../../portal/support/resourceExtension ../../../../core/promiseUtils ../../../../core/Accessor ../../../../geometry/Point ../../../../chunks/vec3f64 ../../../../core/Handles ../../../../core/watchUtils ../../../../geometry/support/aaBoundingRect".split(" "),
function(b,h,c,v,w,x,d,y,m,z,A,B,k,n,p,q,r,t,u){b.StableSurfaceCenter=function(l){function f(a){a=l.call(this,a)||this;a.location=null;a._updateController=null;a._handles=new r;return a}h._inheritsLoose(f,l);var g=f.prototype;g.initialize=function(){this.view.state.isLocal&&(this._handles.add([this.watch(["surfaceView.spatialReference","surfaceView.extent"],()=>this._update()),t.on(this,"surface.layers","change",()=>this._update())]),this._update())};g.destroy=function(){this._handles.destroy()};
g._update=function(){this._updateController&&(this._updateController.abort(),this._updateController=null);if(this.surfaceView&&this.surfaceView.extent&&this.surfaceView.spatialReference){var a=u.center(this.surfaceView.extent);a=new p({x:a[0],y:a[1],z:0,spatialReference:this.surfaceView.spatialReference});this.surface&&0<this.surface.layers.length?(this._set("location",null),this._updateController=k.createAbortController(),this.surface.queryElevation(a,{noDataValue:0,signal:this._updateController.signal,
cache:this.cache}).then(e=>{this._updateController=null;this._set("location",e.geometry)}).catch(e=>{k.isAbortError(e)||e&&"elevation-query:invalid-layer"===e.name||console.error("StableSurfaceCenter failed to update: ",e)})):this._set("location",a)}else this._set("location",null)};h._createClass(f,[{key:"renderLocation",get:function(){if(!this.location)return null;const a=q.create();this.view.renderCoordsHelper.toRenderCoords(this.location,a);return a}}]);return f}(n);c.__decorate([d.property({constructOnly:!0})],
b.StableSurfaceCenter.prototype,"view",void 0);c.__decorate([d.property({constructOnly:!0})],b.StableSurfaceCenter.prototype,"cache",void 0);c.__decorate([d.property({readOnly:!0,aliasOf:"view.map.ground"})],b.StableSurfaceCenter.prototype,"surface",void 0);c.__decorate([d.property({readOnly:!0,aliasOf:"view.basemapTerrain"})],b.StableSurfaceCenter.prototype,"surfaceView",void 0);c.__decorate([d.property({readOnly:!0})],b.StableSurfaceCenter.prototype,"location",void 0);c.__decorate([d.property({readOnly:!0})],
b.StableSurfaceCenter.prototype,"renderLocation",null);b.StableSurfaceCenter=c.__decorate([m.subclass("esri.views.3d.terrain.StableSurfaceCenter")],b.StableSurfaceCenter);Object.defineProperty(b,"__esModule",{value:!0})});