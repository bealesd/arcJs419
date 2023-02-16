// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/maybe ../core/promiseUtils ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ./Widget ./Spinner/SpinnerViewModel ./support/widgetUtils ./support/jsxFactory".split(" "),function(k,e,l,p,q,g,c,v,r,t,m,w,u){c=function(n){function h(a,b){a=n.call(this,a,b)||this;a._animationDelay=500;a._animationPromise=null;a.viewModel=
new m;return a}k._inheritsLoose(h,n);var d=h.prototype;d.initialize=function(){this.addHandles(q.watch(()=>this.visible,a=>this._visibleChange(a)))};d.destroy=function(){this._animationPromise=null};d.show=function(a){const {location:b,promise:f}=a;b&&(this.viewModel.location=b);this.visible=!0;a=()=>this.hide();f&&f.catch(()=>{}).then(a)};d.hide=function(){this.visible=!1};d.render=function(){var {visible:a}=this,{screenLocation:b}=this.viewModel;b=!!b;a={["esri-spinner--start"]:a&&b,["esri-spinner--finish"]:!a&&
b};b=this._getPositionStyles();return u.tsx("div",{class:this.classes("esri-spinner",a),styles:b})};d._visibleChange=function(a){if(a)this.viewModel.screenLocationEnabled=!0;else{var b=p.after(this._animationDelay);this._animationPromise=b;b.catch(()=>{}).then(()=>{this._animationPromise===b&&(this.viewModel.screenLocationEnabled=!1,this._animationPromise=null)})}};d._getPositionStyles=function(){const {screenLocation:a,view:b}=this.viewModel;if(l.isNone(b)||l.isNone(a))return{};const {padding:f}=
b;return{left:`${a.x-f.left}px`,top:`${a.y-f.top}px`}};k._createClass(h,[{key:"location",get:function(){return this.viewModel.location},set:function(a){this.viewModel.location=a}},{key:"view",get:function(){return this.viewModel.view},set:function(a){this.viewModel.view=a}},{key:"visible",get:function(){return this.viewModel.visible},set:function(a){this.viewModel.visible=a}}]);return h}(t);e.__decorate([g.property()],c.prototype,"location",null);e.__decorate([g.property()],c.prototype,"view",null);
e.__decorate([g.property({type:m})],c.prototype,"viewModel",void 0);e.__decorate([g.property()],c.prototype,"visible",null);return c=e.__decorate([r.subclass("esri.widgets.Spinner")],c)});