/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../kernel.js";import"../config.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import{o as t,e as i}from"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/ensureType.js";import{subclass as l}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/Evented.js";import"../core/Collection.js";import"../chunks/Promise.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/aliasOf.js";import{cast as a}from"../core/accessorSupport/decorators/cast.js";import"../chunks/jsonMap.js";import"../chunks/resourceExtension.js";import{g as n}from"../chunks/locale.js";import{f as r}from"../chunks/number.js";import{substitute as o}from"../intl.js";import"../request.js";import{g as c}from"../chunks/assets.js";import"../core/Handles.js";import{init as d,whenTrue as u}from"../core/watchUtils.js";import{HandleOwnerMixin as m}from"../core/HandleOwner.js";import"../chunks/_commonjsHelpers.js";import{c as h}from"../chunks/domUtils.js";import{i as p,s as v}from"../chunks/widgetUtils.js";import"../chunks/projector.js";import{a as _}from"../chunks/accessibleHandler.js";import{m as S}from"../chunks/messageBundle.js";import{j as g}from"../chunks/index.js";import M from"./Widget.js";import{P as f}from"../chunks/Popover.js";import"./Slider/SliderViewModel.js";import"../chunks/ResizeObserver.js";import w from"./Slider.js";import b from"./ScaleRangeSlider/ScaleRanges.js";import y from"./ScaleRangeSlider/ScaleRangeSliderViewModel.js";const x=n().substr(0,2),j={ae:"en",ar:"es",at:"de",au:"en",be:"nl",bg:"bg",bo:"es",br:"pt",ca:"en",ch:"de",ci:"fr",cl:"es",cn:"zh",co:"es",cr:"es",cz:"cs",de:"de",dk:"da",ee:"et",eg:"en",es:"es",fi:"fi",fr:"fr",gb:"en",gl:"da",gr:"el",gt:"es",hk:"en",id:"en",ie:"en",il:"en",in:"en",iq:"ar",is:"is",it:"it",jp:"ja",ke:"en",kr:"ko",kw:"ar",li:"de",lt:"lt",lu:"en",lv:"lv",ma:"fr",mg:"fr",ml:"fr",mo:"en",mx:"es",my:"en",ni:"es",nl:"nl",no:"nn",nz:"en",pe:"es",pl:"pl",pr:"es",pt:"pt",ro:"ro",ru:"ru",rw:"en",se:"sv",sg:"en",sk:"sk",sr:"nl",sv:"es",th:"th",tn:"fr",tw:"zh",us:"en",ve:"es",vi:"en",wo:"en",za:"en"};function k(e){return`url(${c(`esri/widgets/ScaleRangeSlider/images/scalePreview/${e}.jpg`)})`}function C(e){e=function(e){return e.toLowerCase()}(e);return`${k(`${x}-${e}`)}, ${k(`${j[e]}-${e}`)}, ${k("en-wo")}`}function T(e){if(e<0||e>=25)return null;return`-${e%5*128}px -${128*Math.floor(e/5)}px`}const R="esri-scale-range-slider",I="esri-scale-range-slider__scale-indicator",P="esri-scale-range-slider__scale-indicator-icon",L="esri-scale-range-slider__scale-indicator-container",N="esri-scale-range-slider__scale-menu-container",A="esri-scale-range-slider__scale-menu-toggle",$="esri-scale-range-slider__scale-menu-toggle-icon",E="esri-scale-range-slider__scale-menu-toggle--active",O="esri-scale-range-slider__scale-menu",V="esri-scale-range-slider__scale-menu-list",z="esri-scale-range-slider__scale-menu-item",D="esri-scale-range-slider__scale-menu-scroller",F="esri-scale-range-slider__scale-item-label",B="esri-scale-range-slider__scale-item-value",U="esri-scale-range-slider__scale-item-value--editable",K="esri-scale-range-slider__scale-preview",H="esri-scale-range-slider__scale-preview-thumbnail",q="esri-icon-down",W="esri-disabled",G="esri-widget",J={preview:!0},Q={maximumFractionDigits:0},X=e=>`1:${r(e,Q)}`;let Y=class extends(m(M)){constructor(e,s){super(e,s),this._activeMenu=null,this._activeMenuNode=null,this._activeMenuToggleNode=null,this._activeThumb=null,this._customMaxScale=-1,this._customMinScale=-1,this._focusedMenuItemIndex=-1,this._previewAutoCloseTimeoutId=null,this._previewPopover=new f({owner:this,placement:"top",anchorElement:()=>0===this._activeThumb?this._minThumbNode:this._maxThumbNode,offset:[0,16],renderContentFunction:this.renderScalePreview}),this._maxScaleMenuPopover=new f({owner:this,placement:"bottom-end",anchorElement:()=>this._activeMenuToggleNode,renderContentFunction:this.renderMaxScaleMenu}),this._minScaleMenuPopover=new f({owner:this,placement:"bottom-start",anchorElement:()=>this._activeMenuToggleNode,renderContentFunction:this.renderMinScaleMenu}),this._scaleMenuNode=null,this._slider=new w({thumbCreatedFunction:(e,s,i)=>{0===e&&(this._minThumbNode=i),1===e&&(this._maxThumbNode=i),this.own([t(i,"mouseenter",(()=>{const{visibleElements:{preview:s}}=this;this._activeThumb=e,this._previewPopover.open=s,this.scheduleRender()})),t(i,"mouseleave",(()=>{this._previewAutoCloseTimeoutId||(this._activeThumb=null,this._previewPopover.open=!1,this.scheduleRender())}))])}}),this.disabled=!1,this.label=void 0,this.layer=null,this.maxScale=null,this.maxScaleLimit=null,this.messages=null,this.minScale=null,this.minScaleLimit=null,this.region="US",this.view=null,this.viewModel=new y,this.visibleElements=J,this._handleScaleMenuToggleClick=e=>{const s=e.currentTarget,i=s.getAttribute("data-type"),l="menu-closing-click-handle";if(this.handles.remove(l),i===this._activeMenu)return this._setActiveMenu(null),void(this._activeMenuToggleNode=null);this._setActiveMenu(i),this._activeMenuToggleNode=s,this.handles.add(t(document,"mousedown",(e=>{const s=e.target,t=h(s,`.${A}`),i=t&&t.getAttribute("data-type");if(t&&i===this._activeMenu)return;!i&&this._scaleMenuNode&&!this._scaleMenuNode.contains(s)&&(this._setActiveMenu(null),this.handles.remove(l),this.scheduleRender())})),l)},this._afterMenuListCreate=e=>{this._activeMenuNode=e,e.children[0].focus({preventScroll:!0})},this._handleCustomScaleEntry=e=>{this._setScaleFromMenuSelection(e),this._customMaxScale=-1,this._customMinScale=-1},this._handleCustomScaleInputBlur=()=>{"max"===this._activeMenu?this._customMaxScale=-1:this._customMinScale=-1},this.handleCustomScaleInputKeyDown=e=>{const s=e.currentTarget,{handleCustomScaleSelect:t}=s["data-render-props"],{key:i,ctrlKey:l,metaKey:a}=e,{viewModel:{scaleRanges:n}}=this;if("Enter"===i){const i=(e=>{const s=e.replace(/.*\(/,"").replace(/\).*$/,"").replace(/.*:/,"").replace(/[^\d.\s]/g,"");return parseFloat(s)})(s.value);return t(isNaN(i)?-1:n.clampScale(i)),e.preventDefault(),void e.stopPropagation()}if(i.length>1||l||a)return;/[:,.\d]/.test(i)||(e.preventDefault(),e.stopPropagation())},this._handleScaleMenuKeyDown=e=>{const s=i(e);if("Escape"===s||"Tab"===s)return this._setActiveMenu(null),void this._activeMenuToggleNode.focus();if("ArrowUp"!==s&&"ArrowDown"!==s)return;const t=this._activeMenuNode.children,l=this._focusedMenuItemIndex,a="ArrowUp"===s?(0===l?t.length:l)-1:(l+1)%t.length;e.preventDefault(),e.stopPropagation(),t[a].focus(),this._focusedMenuItemIndex=a}}initialize(){this.own([d(this,"viewModel",(e=>this._slider.viewModel=e?e.sliderViewModel:null)),d(this,"_interactive",(e=>{this._slider.disabled=!e,e||this._setActiveMenu(null)})),this._slider.on("thumb-drag",(({index:e})=>{const{visibleElements:{preview:s}}=this;this._activeThumb=e,this._previewPopover.open=s,clearTimeout(this._previewAutoCloseTimeoutId);this._previewAutoCloseTimeoutId=setTimeout((()=>{this._previewAutoCloseTimeoutId=null,this._activeThumb=null,this._previewPopover.open=!1,this.scheduleRender()}),250)})),u(this,"view.stationary",(()=>this.scheduleRender()))])}destroy(){this._previewPopover.destroy(),this._previewPopover=null,this._maxScaleMenuPopover.destroy(),this._maxScaleMenuPopover=null,this._minScaleMenuPopover.destroy(),this._minScaleMenuPopover=null,this._slider.destroy(),this._slider=null}get _effectiveMaxScale(){return 0===this.maxScale?this.maxScaleLimit:this.maxScale}get _effectiveMinScale(){return 0===this.minScale?this.minScaleLimit:this.minScale}get _interactive(){return"disabled"!==this.get("viewModel.state")&&!this.disabled}castVisibleElements(e){return{...J,...e}}render(){const{_interactive:e,_slider:s,label:t,messages:i,view:l,viewModel:{scaleRanges:a,state:n}}=this,r=i.scaleRangeLabels[a.findScaleRangeByIndex(s.values[0]).id],o=i.scaleRangeLabels[a.findScaleRangeByIndex(s.values[1]).id];return s.layout=p()?"horizontal-reversed":"horizontal",g("div",{"aria-label":t,class:this.classes(R,G,e?null:W)},"ready"===n&&l?this.renderCurrentScaleIndicator():null,s.render(),g("div",{class:N,key:"scale-menu-toggles"},this.renderScaleMenuToggle("min",r),this.renderScaleMenuToggle("max",o)))}renderMinScaleMenu(){const{_effectiveMaxScale:e,minScaleLimit:s,view:t,viewModel:{scaleRanges:i}}=this,l=t?t.scale:void 0;return this.renderScaleMenu({type:"min",min:s,max:i.findScaleRange(e).minScale,map:l})}renderMaxScaleMenu(){const{_effectiveMinScale:e,maxScaleLimit:s,view:t,viewModel:{scaleRanges:i}}=this,l=t?t.scale:void 0;return this.renderScaleMenu({type:"max",min:i.findScaleRange(e).maxScale,max:s,map:l})}renderScalePreview(){const{_activeThumb:e,_slider:s,region:t,viewModel:{scaleRanges:i}}=this,l=0===e?s.values[0]:s.values[1],a=Object.keys(b.RecommendedScales).indexOf(i.findScaleRangeByIndex(l).id),n={backgroundImage:C(t),backgroundPosition:T(a)};return g("div",{class:K},g("div",{class:H,styles:n}))}renderScaleMenu({map:e,min:s,max:t,type:i}){const l=b.fromScaleRange({minScale:s,maxScale:t}),a=this.messages.featuredScaleLabels,n=b.RecommendedScales,r=Object.keys(n).filter((e=>l.contains(n[e]))).map((e=>this.renderScaleMenuItem({scaleLabel:a[e],scaleValue:n[e],valueVisible:"world"!==e,handleNamedScaleSelect:this._handleRecommendedScaleClick}))),{_customMaxScale:o,_customMinScale:c,messages:d}=this,u="max"===i?o:c;return g("div",{bind:this,class:O,"data-type":i,id:`${this.id}__scale-menu--${i}`,key:`${i}-scale-menu`,afterCreate:v,"data-node-ref":"_scaleMenuNode",onkeydown:this._handleScaleMenuKeyDown},g("div",{class:D},g("ul",{class:V,afterCreate:this._afterMenuListCreate},this.renderScaleMenuItem({scaleValue:u,scaleLabel:d.featuredScaleLabels.custom,valueVisible:!1,handleNamedScaleSelect:this._handleScaleSelection,handleCustomScaleSelect:this._handleCustomScaleEntry}),null!=e?this.renderScaleMenuItem({scaleValue:e,scaleLabel:d.featuredScaleLabels.current,valueVisible:!0,handleNamedScaleSelect:this._handleRecommendedScaleClick}):null,r)))}_handleScaleSelection(){"max"===this._activeMenu?this._customMaxScale=this._effectiveMaxScale:this._customMinScale=this._effectiveMinScale}renderScaleMenuToggle(e,s){const{_activeMenu:t,_interactive:i}=this,l=t===e;return g("button",{"aria-controls":l?`${this.id}__scale-menu--${e}`:"","aria-pressed":l?"true":"false",class:this.classes(A,l?E:null),"data-type":e,key:`${e}-scale-menu-toggle`,onclick:this._handleScaleMenuToggleClick,disabled:!i,type:"button"},s,g("span",{class:this.classes($,q),"aria-hidden":"true"}))}renderScaleMenuItem(e){const{scaleValue:s,scaleLabel:t,valueVisible:i,handleNamedScaleSelect:l,handleCustomScaleSelect:a=null}=e,{id:n}=this,r=`${n}__custom-scale-input`;return g("li",{bind:this,class:z,"data-scale":s,key:t,onclick:l,onkeydown:l,tabIndex:-1},g("label",{class:F,for:r},t),s>-1?a?g("input",{afterCreate:this.focusAndSelectInputOnCreate,class:this.classes(B,U),"data-render-props":e,id:r,key:"value",value:X(s),onkeydown:this.handleCustomScaleInputKeyDown,onblur:this._handleCustomScaleInputBlur}):i?g("div",{class:B,key:"value"},X(s)):null:null)}focusAndSelectInputOnCreate(e){e.focus(),e.select()}renderCurrentScaleIndicator(){const{_slider:e,messages:s,view:t,viewModel:{scaleRanges:i}}=this,l=i.clampScale(t.scale),a=this.viewModel.mapScaleToSlider(l),n=a/e.max,r=s.scaleRangeLabels[i.findScaleRangeByIndex(a).id],c=o(s.currentScaleTooltip,{scaleLabel:r});return g("div",{class:L,key:"scale-indicator"},g("div",{"aria-label":c,class:I,styles:{left:(p()?-1:1)*n*100+"%"},title:c},this.renderCurrentScaleIndicatorIcon()))}renderCurrentScaleIndicatorIcon(){return g("svg",{class:P,height:"8",width:"8",viewBox:"0 0 8 8",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},g("polygon",{points:"4 0 8 8 0 8"}))}_handleRecommendedScaleClick(e){const s=e.currentTarget,t=Number(s["data-scale"]);this._setScaleFromMenuSelection(t)}_setScaleFromMenuSelection(e){"max"===this._activeMenu?this.maxScale=Math.min(e,this._effectiveMinScale-1):this.minScale=Math.max(e,this._effectiveMaxScale+1),this._setActiveMenu(null),this._activeMenuToggleNode.focus()}_setActiveMenu(e){this._activeMenu=e,this._maxScaleMenuPopover.open="max"===e,this._minScaleMenuPopover.open="min"===e,this._focusedMenuItemIndex=e?0:-1}};e([s()],Y.prototype,"_slider",void 0),e([s()],Y.prototype,"_effectiveMaxScale",null),e([s()],Y.prototype,"_effectiveMinScale",null),e([s({readOnly:!0})],Y.prototype,"_interactive",null),e([s()],Y.prototype,"disabled",void 0),e([s({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],Y.prototype,"label",void 0),e([s({aliasOf:"viewModel.layer"})],Y.prototype,"layer",void 0),e([s({aliasOf:"viewModel.maxScale"})],Y.prototype,"maxScale",void 0),e([s({aliasOf:"viewModel.maxScaleLimit"})],Y.prototype,"maxScaleLimit",void 0),e([s(),S("esri/widgets/ScaleRangeSlider/t9n/ScaleRangeSlider")],Y.prototype,"messages",void 0),e([s({aliasOf:"viewModel.minScale"})],Y.prototype,"minScale",void 0),e([s({aliasOf:"viewModel.minScaleLimit"})],Y.prototype,"minScaleLimit",void 0),e([s()],Y.prototype,"region",void 0),e([s({aliasOf:"viewModel.view"})],Y.prototype,"view",void 0),e([s()],Y.prototype,"viewModel",void 0),e([s()],Y.prototype,"visibleElements",void 0),e([a("visibleElements")],Y.prototype,"castVisibleElements",null),e([_()],Y.prototype,"_handleScaleSelection",null),e([_()],Y.prototype,"_handleRecommendedScaleClick",null),Y=e([l("esri.widgets.ScaleRangeSlider")],Y);var Z=Y;export default Z;