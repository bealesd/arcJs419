// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/maybe ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/promiseUtils ../../../core/accessorSupport/trackingUtils ../../../core/Accessor ../../../core/Handles".split(" "),
function(m,b,r,n,y,c,z,A,t,B,u,C,D,E,f,v,w,x){b.ElevationProfileView=function(p){function g(a){a=p.call(this,a)||this;a._implementation=null;a._loadingTask=null;a._handles=new x;return a}r._inheritsLoose(g,p);var e=g.prototype;e.initialize=function(){this._handles.add(v.autorun(()=>{this.tool.visible?this._show():this._hide()}))};e.destroy=function(){this._handles=c.destroyMaybe(this._handles);this._hide()};e._show=function(){c.isSome(this._loadingTask)&&this._loadingTask.abort();const a=this.tool,
d=a.viewModel.view;if(c.isNone(d))return this._hide();this._loadingTask=f.createTask(async q=>{if("2d"===d.type){var l=new Promise(function(h,k){m(["./ElevationProfileView2D"],h,k)});this._implementation=new ((await f.whenOrAbort(l,q)).ElevationProfileView2D)(d,a)}else"3d"===d.type&&(l=new Promise(function(h,k){m(["./ElevationProfileView3D"],h,k)}),this._implementation=new ((await f.whenOrAbort(l,q)).ElevationProfileView3D)(d,a))})};e._hide=function(){c.isSome(this._loadingTask)&&(this._loadingTask.abort(),
this._loadingTask=null);this._implementation=c.destroyMaybe(this._implementation)};return g}(w);n.__decorate([t.property()],b.ElevationProfileView.prototype,"tool",void 0);b.ElevationProfileView=n.__decorate([u.subclass("esri.widgets.ElevationProfile.support.ElevationProfileView")],b.ElevationProfileView);Object.defineProperty(b,"__esModule",{value:!0})});