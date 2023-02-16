/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../kernel.js";import"../config.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/ensureType.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/Evented.js";import"../core/Collection.js";import"../chunks/Promise.js";import"../core/urlUtils.js";import{aliasOf as e}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/jsonMap.js";import"../chunks/resourceExtension.js";import"../chunks/locale.js";import"../chunks/number.js";import"../intl.js";import"../request.js";import"../chunks/assets.js";import"../core/Handles.js";import"../core/watchUtils.js";import"../chunks/domUtils.js";import"../chunks/widgetUtils.js";import"../chunks/projector.js";import{a as i}from"../chunks/accessibleHandler.js";import{m as r}from"../chunks/messageBundle.js";import{j as a}from"../chunks/index.js";import n from"./Widget.js";import l from"./NavigationToggle/NavigationToggleViewModel.js";const c="esri-navigation-toggle esri-widget",p="esri-navigation-toggle__button esri-widget--button",g="esri-navigation-toggle__button--active",m="esri-navigation-toggle__button--pan",u="esri-navigation-toggle__button--rotate",d="esri-navigation-toggle--horizontal",h="esri-icon-rotate",j="esri-icon-pan",v="esri-icon-pan2",k="esri-disabled";let b=class extends n{constructor(s,o){super(s,o),this.iconClass=v,this.label=void 0,this.messages=null,this.view=null,this.viewModel=new l}set layout(s){"horizontal"!==s&&(s="vertical"),this._set("layout",s)}toggle(){return this.viewModel.toggle()}render(){const s="disabled"===this.get("viewModel.state"),o="pan"===this.get("viewModel.navigationMode"),t={[k]:s,[d]:"horizontal"===this.layout},e={[g]:o},i={[g]:!o},r=s?-1:0,n=this.messages.toggle;return a("div",{bind:this,class:this.classes(c,t),onclick:this._toggle,onkeydown:this._toggle,tabIndex:r,"aria-label":n,title:n},a("div",{class:this.classes(p,m,e)},a("span",{class:j})),a("div",{class:this.classes(p,u,i)},a("span",{class:h})))}_toggle(){this.toggle()}};s([o()],b.prototype,"iconClass",void 0),s([o({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],b.prototype,"label",void 0),s([o({value:"vertical"})],b.prototype,"layout",null),s([o(),r("esri/widgets/NavigationToggle/t9n/NavigationToggle")],b.prototype,"messages",void 0),s([e("viewModel.view")],b.prototype,"view",void 0),s([o({type:l})],b.prototype,"viewModel",void 0),s([i()],b.prototype,"_toggle",null),b=s([t("esri.widgets.NavigationToggle")],b);var w=b;export default w;