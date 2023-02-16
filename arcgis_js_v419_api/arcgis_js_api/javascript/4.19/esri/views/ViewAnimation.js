// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/jsonMap ../core/accessorSupport/decorators/subclass ../core/Error ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../core/promiseUtils ../core/Promise".split(" "),function(h,d,b,q,r,g,t,l,m,u,v,w,n,p){b=function(k){function e(a){a=k.call(this,a)||this;a.state="running";a.target=null;return a}h._inheritsLoose(e,
k);var f=e.prototype;f.initialize=function(){this.addResolvingPromise(new Promise((a,c)=>this._dfd={resolve:a,reject:c}))};f.stop=function(){"stopped"!==this.state&&"finished"!==this.state&&(this._set("state","stopped"),this._dfd.reject(new m("ViewAnimation stopped")))};f.finish=function(){"stopped"!==this.state&&"finished"!==this.state&&(this._set("state","finished"),this._dfd.resolve())};f.update=function(a,c){c||(c=n.isPromiseLike(a)?"waiting-for-target":"running");this._set("target",a);this._set("state",
c)};h._createClass(e,[{key:"done",get:function(){return"finished"===this.state||"stopped"===this.state}}]);return e}(p.EsriPromise);d.__decorate([g.property({readOnly:!0})],b.prototype,"done",null);d.__decorate([g.property({readOnly:!0,type:String})],b.prototype,"state",void 0);d.__decorate([g.property()],b.prototype,"target",void 0);b=d.__decorate([l.subclass("esri.views.ViewAnimation")],b);(b||(b={})).State={RUNNING:"running",STOPPED:"stopped",FINISHED:"finished",WAITING_FOR_TARGET:"waiting-for-target"};
return b});