// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/aliasOf ../core/jsonMap ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ./support/widgetUtils ./support/decorators/accessibleHandler ./support/decorators/messageBundle ./support/decorators/vmEvent ../chunks/index ./Widget ./Home/HomeViewModel".split(" "),
function(l,c,b,x,y,e,g,z,q,A,B,C,D,r,m,t,k,u,n){b=function(p){function h(a,d){a=p.call(this,a,d)||this;a.goToOverride=null;a.iconClass="esri-icon-home";a.label=void 0;a.messages=null;a.messagesCommon=null;a.view=null;a.viewModel=new n;a.viewpoint=null;return a}l._inheritsLoose(h,p);var f=h.prototype;f.cancelGo=function(){return null};f.go=function(){return null};f.render=function(){var a;const d=null==(a=this.viewModel)?void 0:a.state;({homeTitle:a}=this);return k.jsx("div",{bind:this,class:this.classes("esri-home esri-widget--button esri-widget",
{["esri-disabled"]:"disabled"===d}),role:"button",tabIndex:0,onclick:this._go,onkeydown:this._go,"aria-label":a,title:a},this.renderIcon(),this.renderText())};f.renderIcon=function(){var a;const d=null==(a=this.viewModel)?void 0:a.state;return k.jsx("span",{"aria-hidden":"true",class:this.classes("esri-icon esri-icon-home",{["esri-icon-loading-indicator"]:"going-home"===d,["esri-rotating"]:"going-home"===d})})};f.renderText=function(){const {messages:a}=this;return k.jsx("span",{class:"esri-icon-font-fallback-text"},
a.button)};f._go=function(){const {viewModel:a}=this;"going-home"===a.state?a.cancelGo():a.go()};l._createClass(h,[{key:"homeTitle",get:function(){var a;const d=null==(a=this.viewModel)?void 0:a.state,{messagesCommon:v,messages:w}=this;return"going-home"===d?v.cancel:w.title}}]);return h}(u);c.__decorate([g.aliasOf("viewModel.goToOverride")],b.prototype,"goToOverride",void 0);c.__decorate([e.property({readOnly:!0})],b.prototype,"homeTitle",null);c.__decorate([e.property()],b.prototype,"iconClass",
void 0);c.__decorate([e.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],b.prototype,"label",void 0);c.__decorate([e.property(),m.messageBundle("esri/widgets/Home/t9n/Home")],b.prototype,"messages",void 0);c.__decorate([e.property(),m.messageBundle("esri/t9n/common")],b.prototype,"messagesCommon",void 0);c.__decorate([g.aliasOf("viewModel.view")],b.prototype,"view",void 0);c.__decorate([e.property({type:n}),t.vmEvent("go")],b.prototype,"viewModel",void 0);c.__decorate([g.aliasOf("viewModel.viewpoint")],
b.prototype,"viewpoint",void 0);c.__decorate([g.aliasOf("viewModel.cancelGo")],b.prototype,"cancelGo",null);c.__decorate([g.aliasOf("viewModel.go")],b.prototype,"go",null);c.__decorate([r.accessibleHandler()],b.prototype,"_go",null);return b=c.__decorate([q.subclass("esri.widgets.Home")],b)});