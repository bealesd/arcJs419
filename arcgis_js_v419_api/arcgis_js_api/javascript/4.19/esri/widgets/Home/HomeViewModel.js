// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/Error ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/promiseUtils ../../core/Evented ../../Viewpoint ../support/GoTo".split(" "),function(g,c,b,r,t,d,u,k,l,v,w,x,m,n,p,q){b=function(h){function e(a){a=
h.call(this,a)||this;a._initialViewpoint=null;a._goingHomeController=null;a.go=a.go.bind(g._assertThisInitialized(a));return a}g._inheritsLoose(e,h);var f=e.prototype;f.destroy=function(){this._cancelGo();this.view=null};f.go=async function(){if(!this.get("view.ready"))throw new l("home:disabled-state","Cannot go when disabled.");this._cancelGo();this.emit("go");const a=m.createAbortController();this._goingHomeController=a;try{await this.view.when(),await this.callGoTo({target:this.viewpoint,options:{signal:a.signal}})}catch(y){}this._goingHomeController=
null};f.cancelGo=function(){this._cancelGo()};f._cancelGo=function(){const {_goingHomeController:a}=this;a&&a.abort();this._goingHomeController=null};g._createClass(e,[{key:"state",get:function(){return this.get("view.ready")?this._goingHomeController?"going-home":"ready":"disabled"}},{key:"view",set:function(a){this._initialViewpoint=null;this._set("view",a);a&&a.when().then(()=>{this.view===a&&(this._initialViewpoint=a.viewpoint.clone(),this.notifyChange("viewpoint"))})}},{key:"viewpoint",get:function(){return this._get("viewpoint")||
this._initialViewpoint},set:function(a){this._set("viewpoint",a)}}]);return e}(q.GoToMixin(n.EventedAccessor));c.__decorate([d.property()],b.prototype,"_goingHomeController",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"state",null);c.__decorate([d.property()],b.prototype,"view",null);c.__decorate([d.property({type:p})],b.prototype,"viewpoint",null);c.__decorate([d.property()],b.prototype,"go",null);c.__decorate([d.property()],b.prototype,"cancelGo",null);return b=c.__decorate([k.subclass("esri.widgets.Home.HomeViewModel")],
b)});