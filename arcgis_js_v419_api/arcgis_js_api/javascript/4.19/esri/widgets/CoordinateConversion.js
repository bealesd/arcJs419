// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/global ../core/has ../core/Logger ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/aliasOf ../core/accessorSupport/decorators/cast ../core/jsonMap ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../core/events ./support/widgetUtils ./support/decorators/accessibleHandler ./support/decorators/messageBundle ../chunks/index ./Widget ./CoordinateConversion/support/Conversion ./CoordinateConversion/CoordinateConversionViewModel".split(" "),
function(v,l,w,k,E,q,p,F,K,G,L,M,N,H,x,r,y,c,I,z,A){const B={settingsButton:!0,inputButton:!0,captureButton:!0,expandButton:!0},C=E.getLogger("esri.widgets.CoordinateConversion");k=function(D){function u(a,b){a=D.call(this,a,b)||this;a._popupMessage=null;a._popupId=null;a._coordinateInput=null;a._badInput=!1;a._goToEnabled=!1;a._conversionFormat=null;a._settingsFormat=null;a._previewConversion=null;a._expanded=!1;a._popupVisible=!1;a._settingsVisible=!1;a._inputVisible=!1;a.conversions=null;a.currentLocation=
null;a.formats=null;a.goToOverride=null;a.label=void 0;a.messages=null;a.messagesCommon=null;a.mode=null;a.orientation="auto";a.requestDelay=null;a.view=null;a.viewModel=new A;a.visibleElements={...B};return a}v._inheritsLoose(u,D);var e=u.prototype;e.castVisibleElements=function(a){return{...B,...a}};e.reverseConvert=function(a,b){return this.viewModel.reverseConvert(a,b)};e.render=function(){const a=this.get("viewModel.state"),b="disabled"===a?c.jsx("div",{key:"esri-coordinate__no-basemap"},this.messages.noBasemap):
null,d=!b&&this._inputVisible?this._renderInputForm():null,f=!b&&this._settingsVisible?this._renderSettings():null,h=b||d||f?null:this._renderConversionsView(),g=this._popupVisible?this._renderPopup():null;return c.jsx("div",{class:this.classes("esri-coordinate-conversion esri-widget",{["esri-coordinate-conversion--capture-mode"]:"capture"===this.mode,["esri-disabled"]:"loading"===a,["esri-coordinate-conversion--no-basemap"]:"disabled"===a})},g,b,h,f,d)};e._addConversion=function(a){a=a.target;const b=
a["data-index"],d=new z({format:a.options[a.options.selectedIndex]["data-format"]});a.options.selectedIndex=0;0<=b&&this.conversions.removeAt(b);this.conversions.add(d,b)};e._findSettingsFormat=function(){return this._settingsFormat||this.conversions.reduceRight((a,b)=>{b=b.format;return b.get("hasDisplayProperties")?b:a},null)||this.formats.find(a=>a.hasDisplayProperties)};e._hidePopup=function(){this._popupId&&(clearTimeout(this._popupId),this._popupId=null);this._popupVisible=!1;this._popupMessage=
null;this.scheduleRender()};e._onConvertComplete=function(){this._inputVisible=!1;this._coordinateInput.value=""};e._onCopy=function(a){const b=a.currentTarget["data-conversion"].displayCoordinate;"clipboardData"in w?w.clipboardData.setData("text",b):a.clipboardData.setData("text/plain",b);this._showPopup(this.messages.copySuccessMessage);a.preventDefault()};e._processUserInput=function(a){a=H.eventKey(a);const b=this.viewModel;"Enter"!==a&&a?this._badInput&&(this._badInput=!1):this._reverseConvert(this._coordinateInput.value,
this._coordinateInput["data-format"]).then(d=>{"capture"===this.mode?b.resume():this.mode="capture";this.currentLocation=d;b.setLocation(d);this._onConvertComplete()}).catch(d=>{C.error(d);this._showPopup(this.messages.invalidCoordinate);this._badInput=!0})};e._reverseConvert=function(a,b){const d=this.viewModel;return b.reverseConvert(a).then(f=>{this._goToEnabled&&d.goToLocation(f).catch(h=>{C.warn(h);this._showPopup(this.messages.locationOffBasemap)});return f})};e._setInputFormat=function(a){a=
a.target;this._conversionFormat=a[a.options.selectedIndex]["data-format"]};e._setPreviewConversion=function(){const a=this._findSettingsFormat(),b=this.viewModel;if(a){const d=this.conversions.find(f=>f.format===a);this._previewConversion=new z({format:a,position:{location:this.currentLocation,coordinate:d&&d.position.coordinate}});this._previewConversion.position.coordinate||b.previewConversion(this._previewConversion)}};e._setSettingsFormat=function(a){a=a.target;this._settingsFormat=a[a.options.selectedIndex]["data-format"];
this._setPreviewConversion()};e._showPopup=function(a,b=2500){this._popupMessage=a;this._popupVisible?clearTimeout(this._popupId):this._popupVisible=!0;this.scheduleRender();this._popupId=setTimeout(()=>{this._popupId=null;this._hidePopup()},b)};e._toggleGoTo=function(){this._goToEnabled=!this._goToEnabled};e._updateCurrentPattern=function(a){a.stopPropagation();a=a.target;const b=this._findSettingsFormat();b&&(b.currentPattern=a.value)};e._renderConversion=function(a,b){const {messages:d}=this,f=
`${this.id}__list-item-${b}`,h=`${a.format.name} ${d.conversionOutputSuffix}`;var g=0===b;const m=g||this._expanded,n=g?this._renderFirstConversion(a):this._renderTools(b,a,f);g=g&&!a.displayCoordinate?d.noLocation:a.displayCoordinate;g=c.jsx("div",{"aria-label":g,class:"esri-coordinate-conversion__display","data-conversion":a,role:"listitem",tabindex:"0",title:g},g);const t=this._renderOptions(this.formats.filter(J=>J!==a.format));return m?c.jsx("li",{"aria-label":h,class:"esri-coordinate-conversion__row",
id:f,key:a,role:"group",title:h,tabindex:"0"},c.jsx("select",{"aria-controls":f,"aria-label":d.selectFormat,class:this.classes("esri-select","esri-coordinate-conversion__select-row"),bind:this,"data-index":b,onchange:this._addConversion,title:d.selectFormat},c.jsx("option",{"aria-label":a.format.name,selected:!0,title:a.format.name},a.format.name.toUpperCase()),t),g,n):null};e._renderCopyButton=function(a){return c.jsx("li",{"aria-label":this.messagesCommon.copy,bind:this,class:this.classes("esri-widget--button",
"esri-coordinate-conversion__row-button"),"data-conversion":a,onclick:this._copyCoordinateOutput,onkeydown:this._copyCoordinateOutput,oncopy:this._onCopy,role:"button",tabindex:"0",title:this.messagesCommon.copy},c.jsx("span",{"aria-hidden":"true",class:"esri-icon-duplicate"}))};e._renderFirstConversion=function(a){var b=this.id;const d={["esri-icon-down"]:!this._expanded,["esri-icon-up"]:this._expanded},{messages:f,messagesCommon:h,multipleConversions:g,visibleElements:m}=this;var n="live"===this.mode?
f.captureMode:f.liveMode;const t=this._expanded?h.collapse:h.expand;a=a.displayCoordinate&&"capture"===this.mode?this._renderCopyButton(a):null;b=g&&m.expandButton&&c.jsx("li",{"aria-controls":`${b}__${"esri-coordinate-conversion__conversion-list"}`,"aria-label":t,bind:this,class:"esri-widget--button",key:"esri-coordinate-conversion__expand-button",onclick:this._toggleExpand,onkeydown:this._toggleExpand,role:"button",tabindex:"0",title:t},c.jsx("span",{"aria-hidden":"true",class:this.classes(d)}));
n=!g&&m.captureButton&&c.jsx("li",{"aria-label":n,bind:this,class:this.classes("esri-widget--button","esri-coordinate-conversion__mode-toggle"),key:"esri-coordinate-conversion__mode-toggle",onclick:this._toggleMode,onkeydown:this._toggleMode,role:"button",tabindex:"0",title:n},c.jsx("span",{"aria-hidden":"true",class:"esri-icon-map-pin"}));return c.jsx("ul",{class:"esri-coordinate-conversion__tools"},a,b,n)};e._renderInputForm=function(){const a=this._conversionFormat||this.conversions.getItemAt(0).format;
var b=this.formats.findIndex(n=>n.name===a.name),d=this.id;const f=`${d}__${"esri-coordinate-conversion__input-coordinate"}`;d=`${d}__${"esri-coordinate-conversion__input-coordinate"}__header`;b=this._renderOptions(this.formats,!0,b);const h={["esri-coordinate-conversion__input-coordinate--rejected"]:this._badInput},{messages:g,messagesCommon:m}=this;return c.jsx("div",{"aria-labelledby":d,class:"esri-coordinate-conversion__input-form",key:"esri-coordinate-conversion__input-form",role:"search"},c.jsx("div",
{class:"esri-coordinate-conversion__heading"},c.jsx("div",{"aria-label":m.back,bind:this,class:this.classes("esri-widget--button","esri-coordinate-conversion__back-button"),onclick:this._toggleInputVisibility,onkeydown:this._toggleInputVisibility,role:"button",tabindex:"0",title:m.back},this._renderBackIcon()),c.jsx("h4",{class:"esri-widget__heading",id:d},g.inputCoordTitle)),c.jsx("div",{class:"esri-coordinate-conversion__input-group"},c.jsx("select",{"aria-controls":f,"aria-label":g.selectFormat,
bind:this,class:this.classes("esri-select","esri-coordinate-conversion__select-row"),onchange:this._setInputFormat,title:g.selectFormat},b),c.jsx("input",{afterCreate:x.storeNode,"aria-labelledby":d,"aria-required":"true",bind:this,class:this.classes("esri-coordinate-conversion__input-coordinate","esri-input",h),"data-format":a,"data-node-ref":"_coordinateInput",id:f,onkeydown:this._processUserInput,placeholder:g.inputCoordTitle,role:"textbox",spellcheck:!1,title:g.inputCoordTitle,type:"text"})),
c.jsx("div",{class:"esri-coordinate-conversion__input-group"},c.jsx("label",{"aria-label":g.goTo},c.jsx("input",{bind:this,checked:this._goToEnabled,onclick:this._toggleGoTo,title:g.goTo,type:"checkbox"}),g.goTo),c.jsx("button",{"aria-label":g.convert,bind:this,class:this.classes("esri-coordinate-conversion__button","esri-button"),onclick:this._processUserInput,title:g.convert,type:"button"},g.convert)))};e._renderConversionsView=function(){const a=`${this.id}__${"esri-coordinate-conversion__conversion-list"}`;
var b=this._renderPrimaryTools();const d=this._renderOptions(this.formats),f=this.conversions.map((g,m)=>this._renderConversion(g,m)).toArray(),{messages:h}=this;b=this._expanded?c.jsx("div",{class:"esri-coordinate-conversion__row"},c.jsx("select",{"aria-controls":a,"aria-label":h.addConversion,bind:this,class:this.classes("esri-select","esri-coordinate-conversion__select-primary"),onchange:this._addConversion,title:h.addConversion},c.jsx("option",{disabled:!0,selected:!0,value:""},h.addConversion),
d),b):null;return c.jsx("div",{class:this.classes("esri-coordinate-conversion__conversions-view",{["esri-coordinate-conversion__conversions-view--expanded"]:this._expanded,["esri-coordinate-conversion__conversions-view--expand-up"]:"expand-up"===this.orientation,["esri-coordinate-conversion__conversions-view--expand-down"]:"expand-down"===this.orientation}),key:"esri-coordinate-conversion__main-view"},c.jsx("ul",{"aria-expanded":this._expanded?"true":"false",class:"esri-coordinate-conversion__conversion-list",
id:a},f),b)};e._renderOptions=function(a,b,d){const f=this.conversions.getItemAt(0);return a.map((h,g)=>{const m=b||!f?!1:f.format.name===h.name||this.conversions.map(n=>n.format.name).includes(h.name);return c.jsx("option",{"aria-label":h.name,"data-format":h,disabled:m,key:h.name,selected:g===d,value:h.name},h.name.toUpperCase())}).toArray()};e._renderPopup=function(){return c.jsx("div",{class:"esri-coordinate-conversion__popup",role:"alert"},this._popupMessage)};e._renderPrimaryTools=function(){const {messages:a,
visibleElements:b}=this;var d="live"===this.mode?a.captureMode:a.liveMode;const f=b.inputButton&&c.jsx("li",{bind:this,class:"esri-widget--button",onclick:this._toggleInputVisibility,onkeydown:this._toggleInputVisibility,role:"button",tabindex:"0",title:a.inputCoordTitle},c.jsx("span",{"aria-hidden":"true",class:"esri-icon-edit"}));d=b.captureButton&&c.jsx("li",{bind:this,class:this.classes("esri-widget--button","esri-coordinate-conversion__mode-toggle"),onclick:this._toggleMode,onkeydown:this._toggleMode,
role:"button",tabindex:"0",title:d},c.jsx("span",{"aria-hidden":"true",class:"esri-icon-map-pin"}));const h=b.settingsButton&&c.jsx("li",{bind:this,class:"esri-widget--button",onclick:this._toggleSettingsVisibility,onkeydown:this._toggleSettingsVisibility,role:"button",tabindex:"0",title:a.settingsTitle},c.jsx("span",{"aria-hidden":"true",class:"esri-icon-settings2"}));return c.jsx("ul",{class:"esri-coordinate-conversion__tools"},f,d,h)};e._renderSettings=function(){var a=this.id;const b=`${a}__${"esri-coordinate-conversion__pattern-input"}`,
d=`${a}__${"esri-coordinate-conversion__pattern-input"}__header`;a=`${a}__${"esri-coordinate-conversion__preview-coordinate"}`;var f=this.formats.filter(t=>t.hasDisplayProperties),h=this._findSettingsFormat();const g=f.indexOf(h);f=this._renderOptions(f,!0,g);h=h.get("currentPattern");const {messages:m,messagesCommon:n}=this;return c.jsx("div",{"aria-labelledby":d,class:"esri-coordinate__settings",key:"esri-coordinate-conversion__settings"},c.jsx("div",{class:"esri-coordinate-conversion__heading"},
c.jsx("div",{bind:this,class:this.classes("esri-widget--button","esri-coordinate-conversion__back-button"),onclick:this._toggleSettingsVisibility,onkeydown:this._toggleSettingsVisibility,role:"button",tabindex:"0",title:n.back},this._renderBackIcon()),c.jsx("h4",{class:"esri-widget__heading",id:d},m.settingsTitle)),c.jsx("div",{class:"esri-coordinate-conversion__settings-group"},c.jsx("label",{for:b},m.changeCoordinateDisplay),c.jsx("select",{"aria-label":m.selectFormat,class:"esri-select",bind:this,
onchange:this._setSettingsFormat,title:m.selectFormat},f),c.jsx("div",{class:"esri-coordinate-conversion__settings-group-horizontal"},c.jsx("input",{"aria-controls":a,bind:this,class:this.classes("esri-coordinate-conversion__pattern-input","esri-input"),id:b,oninput:this._updateCurrentPattern,spellcheck:!1,title:m.changeCoordinateDisplay,type:"text",value:h}),c.jsx("div",{"aria-controls":b,bind:this,class:"esri-widget--button",onclick:this._setDefaultPattern,onkeydown:this._setDefaultPattern,role:"button",
tabindex:"0",title:m.defaultPattern},c.jsx("span",{"aria-hidden":"true",class:"esri-icon-refresh"})))),c.jsx("div",{class:"esri-coordinate-conversion__settings-group"},c.jsx("label",null,n.preview,c.jsx("div",{class:"esri-coordinate-conversion__preview-coordinate",id:a,tabindex:"0"},this._previewConversion.displayCoordinate))))};e._renderBackIcon=function(){return c.jsx("span",{"aria-hidden":"true",class:x.isRTL()?"esri-icon-right-arrow":"esri-icon-left-arrow"})};e._renderTools=function(a,b,d){b=
b.displayCoordinate&&"capture"===this.mode?this._renderCopyButton(b):null;const {messages:f}=this;return c.jsx("ul",{class:"esri-coordinate-conversion__tools",role:"listitem"},b,c.jsx("li",{"aria-controls":d,"aria-label":f.removeConversion,bind:this,class:this.classes("esri-widget--button","esri-coordinate-conversion__row-button"),"data-index":a,key:`${d}__${"esri-widget--button"}`,onclick:this._removeConversion,onkeydown:this._removeConversion,tabindex:"0",role:"button",title:f.removeConversion},
c.jsx("span",{"aria-hidden":"true",class:"esri-icon-close"})))};e._copyCoordinateOutput=function(a){a=a.target;if(!("createTextRange"in document.body)){const b=window.getSelection(),d=document.createRange();d.selectNodeContents(a);b.removeAllRanges();b.addRange(d)}document.execCommand("copy")};e._removeConversion=function(a){this.conversions.removeAt(a.currentTarget["data-index"])};e._setDefaultPattern=function(a){a.stopPropagation();if(a=this._findSettingsFormat())a.currentPattern=a.get("defaultPattern")};
e._toggleExpand=function(){this._expanded=!this._expanded};e._toggleInputVisibility=function(){this._inputVisible=!this._inputVisible;this._popupVisible&&this._hidePopup();this._inputVisible?this.viewModel.pause():this.viewModel.resume()};e._toggleMode=function(){this.mode="live"===this.mode?"capture":"live"};e._toggleSettingsVisibility=function(){this._settingsVisible=!this._settingsVisible;this._popupVisible&&this._hidePopup();this._settingsVisible?(this._setPreviewConversion(),this.viewModel.pause()):
this.viewModel.resume()};v._createClass(u,[{key:"multipleConversions",get:function(){const a=this._get("multipleConversions");return"boolean"===typeof a?a:!0},set:function(a){!1===a&&(this._expanded=!1,this.conversions.splice(1,this.conversions.length-1));this._set("multipleConversions",a)}}]);return u}(I);l.__decorate([p.aliasOf("viewModel.conversions")],k.prototype,"conversions",void 0);l.__decorate([p.aliasOf("viewModel.currentLocation")],k.prototype,"currentLocation",void 0);l.__decorate([p.aliasOf("viewModel.formats")],
k.prototype,"formats",void 0);l.__decorate([p.aliasOf("viewModel.goToOverride")],k.prototype,"goToOverride",void 0);l.__decorate([q.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],k.prototype,"label",void 0);l.__decorate([q.property(),y.messageBundle("esri/widgets/CoordinateConversion/t9n/CoordinateConversion")],k.prototype,"messages",void 0);l.__decorate([q.property(),y.messageBundle("esri/t9n/common")],k.prototype,"messagesCommon",void 0);l.__decorate([p.aliasOf("viewModel.mode")],
k.prototype,"mode",void 0);l.__decorate([q.property()],k.prototype,"orientation",void 0);l.__decorate([p.aliasOf("viewModel.requestDelay")],k.prototype,"requestDelay",void 0);l.__decorate([q.property()],k.prototype,"multipleConversions",null);l.__decorate([p.aliasOf("viewModel.locationSymbol")],k.prototype,"locationSymbol",void 0);l.__decorate([p.aliasOf("viewModel.view")],k.prototype,"view",void 0);l.__decorate([q.property({type:A})],k.prototype,"viewModel",void 0);l.__decorate([q.property()],k.prototype,
"visibleElements",void 0);l.__decorate([F.cast("visibleElements")],k.prototype,"castVisibleElements",null);l.__decorate([r.accessibleHandler()],k.prototype,"_copyCoordinateOutput",null);l.__decorate([r.accessibleHandler()],k.prototype,"_removeConversion",null);l.__decorate([r.accessibleHandler()],k.prototype,"_setDefaultPattern",null);l.__decorate([r.accessibleHandler()],k.prototype,"_toggleExpand",null);l.__decorate([r.accessibleHandler()],k.prototype,"_toggleInputVisibility",null);l.__decorate([r.accessibleHandler()],
k.prototype,"_toggleMode",null);l.__decorate([r.accessibleHandler()],k.prototype,"_toggleSettingsVisibility",null);return k=l.__decorate([G.subclass("esri.widgets.CoordinateConversion")],k)});