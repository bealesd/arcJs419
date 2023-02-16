// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../Widget ../../support/widgetUtils ../../support/jsxFactory".split(" "),function(b,k,c,g,d,q,r,l,m,t,e){const n={clearLevel:"",selectLevel:""};b.Label=function(h){function f(a,p){a=h.call(this,a,p)||this;a.level=null;a.active=!1;
a.hovering=!1;a.onClear=()=>{};return a}k._inheritsLoose(f,h);f.prototype.render=function(){var a=g.unwrapOr(this.messages,n);if(g.isNone(this.level))return e.tsx("div",{class:"esri-building-level-picker-label--empty",title:a.selectLevel},a.selectLevel);a=a.clearLevel;return e.tsx("div",{bind:this,class:this.classes("esri-building-level-picker-label",{["esri-building-level-picker-label--active"]:this.active,["esri-building-level-picker-label--hover"]:this.hovering}),onclick:this.onClear,title:a,"aria-label":a},
e.tsx("span",null,this.level),e.tsx("button",{bind:this,class:this.classes("esri-building-level-picker-label__clear-button","esri-icon-close"),disabled:!this.active,onclick:this.onClear,type:"button"}))};return f}(m);c.__decorate([d.property()],b.Label.prototype,"level",void 0);c.__decorate([d.property({nonNullable:!0})],b.Label.prototype,"active",void 0);c.__decorate([d.property({nonNullable:!0})],b.Label.prototype,"hovering",void 0);c.__decorate([d.property()],b.Label.prototype,"messages",void 0);
c.__decorate([d.property({nonNullable:!0})],b.Label.prototype,"onClear",void 0);b.Label=c.__decorate([l.subclass("esri.widgets.BuildingExplorer.BuildingLevelPicker.Label")],b.Label);Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});