// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/aliasOf ../core/jsonMap ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ./support/widgetUtils ./support/decorators/accessibleHandler ./support/decorators/messageBundle ./support/decorators/vmEvent ../chunks/index ./Widget ./Track/TrackViewModel".split(" "),
function(q,c,b,y,z,f,d,A,r,B,C,D,E,t,u,v,h,w,m){b=function(n){function k(a,l){a=n.call(this,a,l)||this;a.geolocationOptions=null;a.goToLocationEnabled=null;a.goToOverride=null;a.graphic=null;a.iconClass="esri-icon-tracking";a.label=void 0;a.messages=null;a.scale=null;a.tracking=null;a.useHeadingEnabled=null;a.view=null;a.viewModel=new m;return a}q._inheritsLoose(k,n);var g=k.prototype;g.start=function(){};g.stop=function(){};g.render=function(){const a=this.get("viewModel.state"),l={["esri-disabled"]:"disabled"===
a,["esri-hidden"]:"feature-unsupported"===a};var e="tracking"===a;const x={["esri-icon-tracking"]:!e&&"waiting"!==a,["esri-icon-pause"]:e,["esri-rotating"]:"waiting"===a,["esri-icon-loading-indicator"]:"waiting"===a},{messages:p}=this;e=e?p.stopTracking:p.startTracking;return h.jsx("div",{bind:this,class:this.classes("esri-track esri-widget--button esri-widget",l),hidden:"feature-unsupported"===a,onclick:this._toggleTracking,onkeydown:this._toggleTracking,role:"button",tabIndex:0,"aria-label":e,title:e},
h.jsx("span",{"aria-hidden":"true",class:this.classes("esri-icon",x)}),h.jsx("span",{class:"esri-icon-font-fallback-text"},e))};g._toggleTracking=function(){const a=this.viewModel;a&&"feature-unsupported"!==a.state&&"disabled"!==a.state&&("tracking"===a.state||"waiting"===a.state?this.viewModel.stop():this.viewModel.start())};return k}(w);c.__decorate([d.aliasOf("viewModel.geolocationOptions")],b.prototype,"geolocationOptions",void 0);c.__decorate([d.aliasOf("viewModel.goToLocationEnabled")],b.prototype,
"goToLocationEnabled",void 0);c.__decorate([d.aliasOf("viewModel.goToOverride")],b.prototype,"goToOverride",void 0);c.__decorate([d.aliasOf("viewModel.graphic")],b.prototype,"graphic",void 0);c.__decorate([f.property()],b.prototype,"iconClass",void 0);c.__decorate([f.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],b.prototype,"label",void 0);c.__decorate([f.property(),u.messageBundle("esri/widgets/Track/t9n/Track")],b.prototype,"messages",void 0);c.__decorate([d.aliasOf("viewModel.scale")],
b.prototype,"scale",void 0);c.__decorate([d.aliasOf("viewModel.tracking")],b.prototype,"tracking",void 0);c.__decorate([d.aliasOf("viewModel.useHeadingEnabled")],b.prototype,"useHeadingEnabled",void 0);c.__decorate([d.aliasOf("viewModel.view")],b.prototype,"view",void 0);c.__decorate([f.property({type:m}),v.vmEvent(["track","track-error"])],b.prototype,"viewModel",void 0);c.__decorate([d.aliasOf("viewModel.start")],b.prototype,"start",null);c.__decorate([d.aliasOf("viewModel.stop")],b.prototype,"stop",
null);c.__decorate([t.accessibleHandler()],b.prototype,"_toggleTracking",null);return b=c.__decorate([r.subclass("esri.widgets.Track")],b)});