// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/aliasOf ../core/jsonMap ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../core/events ../core/Collection ../core/watchUtils ./support/widgetUtils ./support/decorators/messageBundle ../chunks/index ./Widget ../tasks/support/PrintTemplate ./support/Popover ./Print/FileLink ./Print/PrintViewModel ./Print/TemplateOptions".split(" "),
function(G,n,m,R,Z,y,z,aa,S,J,ba,ca,K,T,B,U,L,b,V,W,X,M,N,O){const P=T.ofType(M),D=R.getLogger("esri.widgets.Print");m=function(Q){function H(c,d){var a=Q.call(this,c,d)||this;a._activeTabFocusRequested=!1;a._advancedOptionsVisibleForLayout=!1;a._advancedOptionsVisibleForMapOnly=!1;a._awaitingServerResponse=!1;a._exportedFileNameMap={};a._focusedTemplateIndex=0;a._layoutTabSelected=!0;a._pendingExportScroll=!1;a._rootNode=null;a._selectTemplateNode=null;a._templateListPopover=new X({owner:G._assertThisInitialized(a),
placement:"top",offset:[0,-100],anchorElement:()=>a._selectTemplateNode,renderContentFunction:a.renderTemplateList});a.allowedFormats=null;a.allowedLayouts=null;a.exportedLinks=new P;a.iconClass="esri-icon-printer";a.includeDefaultTemplates=null;a.label=void 0;a.portal=null;a.printServiceUrl=null;a.templateOptions=new O;a.view=null;a.viewModel=new N;a.handleTemplateListCreation=e=>e.focus();a.handleTemplateChildBlur=e=>{var f;(null==(f=e.relatedTarget)?0:f.closest(".esri-print__template-list"))||
a.handleCloseTemplateSelection()};a.handleCloseTemplateSelection=()=>{a._focusedTemplateIndex=0;a._templateListPopover.open=!1;a._selectTemplateNode.focus()};a.handleSelectTemplateClick=()=>{a._focusedTemplateIndex=0;a._templateListPopover.open=!0};a.handleTemplateListClick=e=>{a.applyTemplate(e.target["data-template"])};a.handleTemplateListKeyDown=e=>{if("Enter"===e.key||" "===e.key)a.applyTemplate(a.viewModel.defaultTemplates.getItemAt(a._focusedTemplateIndex)),e.preventDefault();else{if("ArrowDown"===
e.key||"ArrowUp"===e.key){var {defaultTemplates:f}=a.viewModel;const g=(a._focusedTemplateIndex+("ArrowDown"===e.key?1:-1))%f.length;a._focusedTemplateIndex=0>g?f.length-1:g;f=e.currentTarget;U.keepMenuItemWithinView(f.querySelectorAll(".esri-menu__list-item")[a._focusedTemplateIndex],f.parentElement);e.preventDefault()}"Escape"===e.key&&a.handleCloseTemplateSelection()}};a._removeLink=e=>{(e=e.currentTarget["data-item"])&&"error"===e.state&&a.exportedLinks.remove(e)};a._focusOnTabChange=a._focusOnTabChange.bind(G._assertThisInitialized(a));
return a}G._inheritsLoose(H,Q);var k=H.prototype;k.initialize=function(){this.own([B.init(this,"viewModel.templatesInfo",e=>{const {format:f,layout:g}=this.templateOptions;if(e){const l=g===e.layout.defaultValue||g&&"MAP_ONLY"===g.toUpperCase()||e.layout.choiceList&&-1<e.layout.choiceList.indexOf(g),p=f===e.format.defaultValue||e.format.choiceList&&-1<e.format.choiceList.indexOf(f);l||(g&&D.warn("User sets an invalid layout, resetting it to the default valid one..."),this.templateOptions.layout=e.layout.defaultValue);
p||(f&&D.warn("User sets an invalid format, resetting it to the default valid one..."),this.templateOptions.format=e.format.defaultValue);g&&"MAP_ONLY"===g.toUpperCase()&&(this._layoutTabSelected=!1)}}),B.init(this,"templateOptions.format",e=>{const {viewModel:{templatesInfo:f}}=this;if(f&&e){let g=!1;f.format.choiceList&&f.format.choiceList.forEach(l=>{l.toUpperCase()===e.toUpperCase()&&(this.templateOptions.format=l,g=!0)});g||(this.templateOptions.format=f.format.defaultValue,D.warn("User sets an invalid format, resetting it to the default valid one..."));
this.scheduleRender()}}),B.init(this,"templateOptions.layout",e=>{const {viewModel:{templatesInfo:f}}=this;if(f&&e){this._layoutTabSelected="MAP_ONLY"!==e.toUpperCase();let g=!this._layoutTabSelected;g||f.layout.choiceList&&f.layout.choiceList.forEach(l=>{l.toUpperCase()===e.toUpperCase()&&(this.templateOptions.layout=l,g=!0)});g||(this.templateOptions.layout=f.layout.defaultValue,D.warn("User sets an invalid layout, resetting it to the default valid one..."));this.scheduleRender()}}),B.init(this,
"templateOptions.dpi",e=>{0>=e?this.templateOptions.dpi=1:this.scheduleRender()}),B.init(this,"viewModel.view.scale",e=>{const {scale:f,scaleEnabled:g}=this.templateOptions;g&&f||(this.templateOptions.scale=e)})]);const {height:c,width:d}=this.templateOptions;this.templateOptions.width=d||800;this.templateOptions.height=c||1100;const a=setTimeout(()=>{this._awaitingServerResponse=!0;this.scheduleRender()},500);this.viewModel.load().then(()=>clearTimeout(a))};k.render=function(){const {attributionEnabled:c,
author:d,copyright:a,dpi:e,format:f,height:g,layout:l,legendEnabled:p,scaleEnabled:t,scale:w,width:C}=this.templateOptions;var q="ready"!==this.get("viewModel.state"),r=this.renderTitleOrFileNameSection();const {includeDefaultTemplates:I,messages:h,viewModel:Y}=this;var v=this.get("viewModel.templatesInfo.format.choiceList")||[];v=0<v.length?v.map(u=>b.jsx("option",{key:u,selected:u===f,value:u},u.toUpperCase())):b.jsx("option",{key:"format-default-option"},h.formatDefaultOption);v=b.jsx("div",{class:"esri-print__form-section-container"},
b.jsx("label",null,h.fileFormatTitle,b.jsx("select",{class:"esri-select",onchange:this._updateFromOption,"data-target-property":"format",bind:this},v)));var x=this.get("viewModel.templatesInfo.layout.choiceList")||[];x=0<x.length?x.map(u=>b.jsx("option",{key:u,selected:u===l,value:u},h[u]||u)):b.jsx("option",{key:"layout-default-option"},h.layoutDefaultOption);x=b.jsx("div",{class:"esri-print__form-section-container"},b.jsx("label",null,h.layoutTitle,b.jsx("select",{class:"esri-select",onchange:this._updateFromOption,
"data-target-property":"layout",bind:this},x)));var A=b.jsx("div",{class:"esri-print__form-section-container"},b.jsx("label",null,h.dpi,b.jsx("input",{type:"number",class:this.classes("esri-print__input-text","esri-input"),"data-input-name":"dpi",onchange:this._handleDPIChange,value:`${e}`,min:"1",tabIndex:0,bind:this}))),E=b.jsx("div",{class:this.classes("esri-print__scale-info-container","esri-print__form-section-container")},b.jsx("label",null,b.jsx("input",{"data-option-name":"scaleEnabled",checked:t,
type:"checkbox",tabIndex:0,onchange:this._toggleInputValue,bind:this}),h.scale),b.jsx("div",{class:"esri-print__scale-input-container"},b.jsx("input",{"aria-label":h.scaleLabel,"aria-valuenow":`${w}`,role:"spinbutton",type:"number",class:this.classes("esri-print__input-text","esri-input","esri-print__scale-input"),tabIndex:0,"data-input-name":"scale",onchange:this._updateInputValue,disabled:!t,value:`${w}`,bind:this}),b.jsx("button",{type:"button","aria-label":h.reset,class:this.classes("esri-widget--button",
"esri-print__refresh-button","esri-icon-refresh"),tabIndex:0,onclick:this._resetToCurrentScale,bind:this}))),F=this._advancedOptionsVisibleForLayout?b.jsx("div",{"aria-labelledby":`${this.id}__advancedOptionsForLayout`,class:"esri-print__advanced-options-container"},E,b.jsx("div",{class:this.classes("esri-print__author-info-container","esri-print__form-section-container")},b.jsx("label",null,h.author,b.jsx("input",{type:"text",value:d,class:this.classes("esri-print__input-text","esri-input"),tabIndex:0,
"data-input-name":"author",onchange:this._updateInputValue,bind:this}))),b.jsx("div",{class:this.classes("esri-print__copyright-info-container","esri-print__form-section-container")},b.jsx("label",null,h.copyright,b.jsx("input",{type:"text",class:this.classes("esri-print__input-text","esri-input"),tabIndex:0,value:a,"data-input-name":"copyright",onchange:this._updateInputValue,bind:this}))),A,b.jsx("div",{class:this.classes("esri-print__legend-info-container","esri-print__form-section-container")},
b.jsx("label",null,b.jsx("input",{type:"checkbox","data-option-name":"legendEnabled",tabIndex:0,checked:p,onchange:this._toggleInputValue,bind:this}),h.legend))):null;A=this._advancedOptionsVisibleForMapOnly?b.jsx("div",{"aria-labelledby":`${this.id}__advancedOptionsForMapOnly`,class:"esri-print__advanced-options-container"},E,A,b.jsx("div",{class:"esri-print__form-section-container"},b.jsx("label",null,b.jsx("input",{"data-option-name":"attributionEnabled",type:"checkbox",onchange:this._toggleInputValue,
tabIndex:0,checked:c,bind:this}),h.attribution))):null;x=this._layoutTabSelected?b.jsx("section",{key:"esri-print__layoutContent",id:`${this.id}__layoutContent`,"aria-labelledby":`${this.id}__layoutTab`,class:"esri-print__layout-section",role:"tabpanel","aria-selected":this._layoutTabSelected.toString()},b.jsx("div",{class:"esri-print__panel-container"},r,x,this._layoutTabSelected?v:null),b.jsx("div",{class:this.classes("esri-print__panel-container","esri-print__advanced-options-section")},b.jsx("button",
{"aria-label":h.advancedOptions,"aria-expanded":this._advancedOptionsVisibleForLayout?"true":"false",class:"esri-print__advanced-options-button",onclick:this._showAdvancedOptions,bind:this,type:"button"},b.jsx("div",{class:"esri-print__advanced-options-button-container"},b.jsx("span",{"aria-hidden":"true",class:this.classes("esri-icon-right-triangle-arrow","esri-print__advanced-options-button-icon--closed")}),b.jsx("span",{"aria-hidden":"true",class:this.classes("esri-icon-left-triangle-arrow","esri-print__advanced-options-button-icon--closed-rtl")}),
b.jsx("span",{"aria-hidden":"true",class:this.classes("esri-icon-down-arrow","esri-print__advanced-options-button-icon--opened")}),b.jsx("span",{class:"esri-print__advanced-options-button-title"},h.advancedOptions))),F)):b.jsx("section",{key:"esri-print__mapOnlyContent",id:`${this.id}__mapOnlyContent`,"aria-selected":(!this._layoutTabSelected).toString(),"aria-labelledby":`${this.id}__mapOnlyTab`,class:"esri-print__map-only-section",role:"tabpanel"},b.jsx("div",{class:"esri-print__panel-container"},
r,this._layoutTabSelected?null:v,b.jsx("div",{class:this.classes("esri-print__size-container","esri-print__form-section-container")},b.jsx("div",{class:"esri-print__width-container"},b.jsx("label",null,h.width,b.jsx("input",{type:"number",class:this.classes("esri-print__input-text","esri-input"),"data-input-name":"width",onchange:this._updateInputValue,value:`${C}`,tabIndex:0,bind:this}))),b.jsx("div",{class:"esri-print__height-container"},b.jsx("label",null,h.height,b.jsx("input",{type:"number",
class:this.classes("esri-print__input-text","esri-input"),"data-input-name":"height",onchange:this._updateInputValue,value:`${g}`,tabIndex:0,bind:this}))),b.jsx("button",{type:"button","aria-label":h.swap,class:this.classes("esri-widget--button","esri-print__swap-button","esri-icon-swap"),onclick:this._switchInput,tabIndex:0,bind:this})),b.jsx("div",{class:this.classes("esri-print__panel-container","esri-print__advanced-options-section")},b.jsx("button",{"aria-label":h.advancedOptions,"aria-expanded":this._advancedOptionsVisibleForMapOnly?
"true":"false",type:"button",class:"esri-print__advanced-options-button",onclick:this._showAdvancedOptions,bind:this},b.jsx("div",{class:"esri-print__advanced-options-button-container"},b.jsx("span",{"aria-hidden":"true",class:this.classes("esri-icon-right-triangle-arrow","esri-print__advanced-options-button-icon--closed")}),b.jsx("span",{"aria-hidden":"true",class:this.classes("esri-icon-left-triangle-arrow","esri-print__advanced-options-button-icon--closed-rtl")}),b.jsx("span",{"aria-hidden":"true",
class:this.classes("esri-icon-down-arrow","esri-print__advanced-options-button-icon--opened")}),b.jsx("span",{class:"esri-print__advanced-options-button-title"},h.advancedOptions))),A)));F=this.exportedLinks.toArray();A=this._renderExportedLink(F);E={["esri-button--disabled"]:q||!l&&!f};r=null!=this.get("view")&&"2d"!==this.get("view.type");v=b.jsx("div",{class:"esri-print__panel--error"},r?h.sceneViewError:h.serviceError);q=b.jsx("div",null,b.jsx("ul",{class:"esri-print__layout-tab-list",role:"tablist",
onclick:this._toggleLayoutPanel,onkeydown:this._handleLayoutPanelKeyDown,bind:this},b.jsx("li",{afterCreate:this._focusOnTabChange,afterUpdate:this._focusOnTabChange,id:`${this.id}__layoutTab`,"data-tab-id":"layoutTab",class:"esri-print__layout-tab",role:"tab",tabIndex:0,"aria-selected":`${this._layoutTabSelected}`},h.layoutTab),b.jsx("li",{afterCreate:this._focusOnTabChange,afterUpdate:this._focusOnTabChange,id:`${this.id}__mapOnlyTab`,"data-tab-id":"mapOnlyTab",class:"esri-print__layout-tab",role:"tab",
tabIndex:0,"aria-selected":`${!this._layoutTabSelected}`},h.mapOnlyTab)),x,b.jsx("button",{"aria-label":h.exportDescription,type:"button",class:this.classes("esri-print__export-button","esri-button",E),disabled:q,tabIndex:0,onclick:this._handlePrintMap,bind:this},h.export),I&&0<Y.defaultTemplates.length?this.renderTemplateSectionTrigger():null,b.jsx("div",{class:"esri-print__export-panel-container",afterUpdate:this._scrollExportIntoView,bind:this},b.jsx("h3",{class:this.classes("esri-print__export-title",
"esri-widget__heading")},h.exportText),0<F.length?null:b.jsx("div",null,b.jsx("div",null,h.exportHint)),A));q=b.jsx("div",{class:"esri-print__container"},b.jsx("header",{class:"esri-print__header-title"},h.export),this.error||r||!this.view?v:q);q="initializing"===this.get("viewModel.state")?this._renderLoader():q;return b.jsx("div",{afterCreate:this._handleRootAfterCreate,bind:this,class:this.classes("esri-print","esri-widget","esri-widget--panel")},q)};k.renderTemplateSectionTrigger=function(){const {messages:c,
_templateListPopover:d}=this,a=d.open;return b.jsx("button",{afterCreate:e=>this._selectTemplateNode=e,"aria-controls":a?`${this.id}__template-selection`:"","aria-label":c.selectTemplateDescription,"aria-pressed":a.toString(),class:this.classes("esri-button","esri-button--tertiary","esri-print__template-button"),onclick:this.handleSelectTemplateClick,title:c.selectTemplateDescription},c.selectTemplate)};k.renderTemplateList=function(){const {messages:c,messagesCommon:d,viewModel:a}=this,{defaultTemplates:e}=
a,f=c.selectTemplateDescription,g=`${this.id}__template-selection`;return b.jsx("div",{class:this.classes("esri-print__template-list","esri-widget","esri-widget--panel"),id:g},b.jsx("h3",{class:this.classes("esri-menu__header","esri-widget__heading")},c.selectTemplate),b.jsx("div",{class:"esri-print__template-list-scroller"},b.jsx("ul",{afterCreate:this.handleTemplateListCreation,"aria-activedescendant":`${this.id}__template-item--${this._focusedTemplateIndex}`,"aria-label":f,class:"esri-menu__list",
key:"templates",onblur:this.handleTemplateChildBlur,onclick:this.handleTemplateListClick,onkeydown:this.handleTemplateListKeyDown,role:"listbox",tabIndex:0,title:f},e.toArray().map((l,p)=>{const {description:t}=l;return b.jsx("li",{"aria-label":t,class:this.classes("esri-menu__list-item",{["esri-menu__list-item--focus"]:p===this._focusedTemplateIndex}),"data-template":l,id:`${this.id}__template-item--${p}`,key:l.label,title:t},l.label)}))),b.jsx("div",{class:"esri-print__template-list-footer"},b.jsx("button",
{type:"button",class:this.classes("esri-button","esri-button--secondary"),onblur:this.handleTemplateChildBlur,onclick:this.handleCloseTemplateSelection},d.done)))};k.applyTemplate=function(c){var d;const {format:a,layout:e,layoutOptions:f}=c;({templateOptions:c}=this);this._templateListPopover.open=!1;this._toggleTab("map-only"===e?"mapOnlyTab":"layoutTab",!1);a&&(c.format=a);e&&(c.layout=e);this._focusedTemplateIndex=null;c.legendEnabled=null!=(d=null==f?void 0:f.legend)?d:c.legendEnabled;this.handleCloseTemplateSelection()};
k.renderTitleOrFileNameSection=function(){const {templateOptions:c,messages:d}=this;let a,e,f,g;this._layoutTabSelected?(a=d.title,e=d.titlePlaceHolder,f=c.title,g="title"):(a=d.fileName,e=d.fileNamePlaceHolder,f=c.fileName,g="fileName");return b.jsx("div",{class:"esri-print__form-section-container",key:g},b.jsx("label",null,a,b.jsx("input",{type:"text",tabIndex:0,placeholder:e,class:this.classes("esri-print__input-text","esri-input"),value:f,"data-input-name":g,onchange:this._updateInputValue,bind:this})))};
k._handleRootAfterCreate=function(c){this._rootNode=c;this.own(K.on(c,"scroll",()=>{this._templateListPopover.open&&this.handleCloseTemplateSelection()}))};k._focusOnTabChange=function(c){if(this._activeTabFocusRequested){var d=c.getAttribute("data-tab-id");if("layoutTab"===d&&this._layoutTabSelected||"mapOnlyTab"===d&&!this._layoutTabSelected)c.focus(),this._activeTabFocusRequested=!1}};k._renderLoader=function(){return b.jsx("div",{class:this.classes({["esri-print__loader"]:this._awaitingServerResponse}),
key:"loader"})};k._createFileLink=function(c,d){d=d||this.messages.untitled;c=c.format.toLowerCase();c=-1<c.indexOf("png")?"png":c;const a=d+c;void 0!==this._exportedFileNameMap[a]?this._exportedFileNameMap[a]++:this._exportedFileNameMap[a]=0;return new M({name:d,extension:c,count:this._exportedFileNameMap[a]})};k._toPrintTemplate=function(c){const {attributionEnabled:d,author:a,copyright:e,dpi:f,forceFeatureAttributes:g,format:l,height:p,layout:t,legendEnabled:w,title:C,scale:q,width:r}=c;c=new W({attributionVisible:d,
layoutOptions:{authorText:a||"",copyrightText:e||"",titleText:C||""},forceFeatureAttributes:g,format:l,layout:t,outScale:q});r&&(c.exportOptions.width=r);p&&(c.exportOptions.height=p);f&&(c.exportOptions.dpi=f);w||(c.layoutOptions.legendLayers=[]);return c};k._resetToCurrentScale=function(){this.templateOptions.scale=this.viewModel.view.scale};k._updateInputValue=function(c){var d=c.target;c=d.getAttribute("data-input-name");if("number"===d.type){var a=d.valueAsNumber;if(isNaN(a)||!(0<a)){d.value=
`${this.templateOptions[c]}`;return}d=d.valueAsNumber}else d=d.value;this.templateOptions[c]=d};k._handleDPIChange=function(c){this._updateInputValue(c);c=c.currentTarget.valueAsNumber;const {height:d,width:a}={width:Math.round(8.3333*c),height:Math.round(11.4583*c)};({templateOptions:c}=this);c.height=d;c.width=a};k._handlePrintMap=function(){this._pendingExportScroll=!0;const {templateOptions:c}=this,d=this._toPrintTemplate(c),a=this._createFileLink(d,this._layoutTabSelected?d.layoutOptions.titleText:
c.fileName);this.exportedLinks.add(a);this.emit("submit",{link:a});this.viewModel.print(d).then(e=>{a.set({url:e&&e.url,state:"ready"})}).catch(e=>{a.set({error:e,state:"error"})}).then(()=>{this.emit("complete",{link:a});this.scheduleRender()})};k._updateFromOption=function(c){var d=c.target;c=d.selectedOptions?d.selectedOptions.item(0).value:d.options[d.selectedIndex].value;d=d.getAttribute("data-target-property");this.templateOptions[d]=c};k._switchInput=function(){[this.templateOptions.width,
this.templateOptions.height]=[this.templateOptions.height,this.templateOptions.width]};k._showAdvancedOptions=function(){this._layoutTabSelected?this._advancedOptionsVisibleForLayout=!this._advancedOptionsVisibleForLayout:this._advancedOptionsVisibleForMapOnly=!this._advancedOptionsVisibleForMapOnly};k._scrollExportIntoView=function(){if(this._pendingExportScroll){this._pendingExportScroll=!1;const {_rootNode:c,_rootNode:{clientHeight:d,scrollHeight:a}}=this,e=a-d;0<e&&(c.scrollTop=e)}};k._toggleInputValue=
function(c){c=c.target;const d=c.getAttribute("data-option-name");this.templateOptions[d]=c.checked;"scaleEnabled"===d&&(this.viewModel.scaleEnabled=this.templateOptions.scaleEnabled,this.templateOptions[d]||this._resetToCurrentScale())};k._renderExportedLink=function(c){const d=this.messages;return c.map(a=>{const {error:e,url:f,formattedName:g,state:l}=a,p="error"===l,t="pending"===l,w="ready"===l,C={["esri-widget__anchor--disabled"]:t||p};let q=f||null;q&&(q=J.addProxy(q));var r=J.hasSameOrigin(f,
location.href);r={["esri-icon-loading-indicator"]:t,["esri-rotating"]:t,["esri-icon-download"]:r&&w,["esri-icon-launch-link-external"]:!r&&w,["esri-icon-error"]:p,["esri-print__exported-file--error"]:p};const I={["esri-print__exported-file--error"]:p};return b.jsx("div",{"aria-label":t?d.pending:w?d.ready:d.errorMessage,class:"esri-print__exported-file","data-item":a,key:g,onclick:this._removeLink,title:p?e.message:""},b.jsx("a",{"aria-label":`${g}. ${d.linkReady}`,download:g,href:q,rel:"noreferrer",
tabIndex:0,target:"_blank",class:this.classes("esri-widget__anchor esri-print__exported-file-link",C)},b.jsx("span",{class:this.classes(r)}),b.jsx("span",{class:this.classes("esri-print__exported-file-link-title",I)},g)))})};k._toggleLayoutPanel=function(c){this._toggleTab(c.target.getAttribute("data-tab-id"))};k._toggleTab=function(c,d=!0){(this._layoutTabSelected="layoutTab"===c)?(c=this.get("viewModel.templatesInfo.layout.choiceList"),this.templateOptions.layout=c&&c[0]):this.templateOptions.layout=
"MAP_ONLY";d&&(this._activeTabFocusRequested=!0)};k._handleLayoutPanelKeyDown=function(c){const d=K.eventKey(c),a=c.target.getAttribute("data-tab-id");if("Enter"===d||" "===d)this._toggleTab(a),c.preventDefault(),c.stopPropagation();else if("ArrowLeft"===d||"ArrowRight"===d)this._toggleTab("layoutTab"===a?"mapOnlyTab":"layoutTab"),c.preventDefault(),c.stopPropagation()};return H}(V);n.__decorate([z.aliasOf("viewModel.allowedFormats")],m.prototype,"allowedFormats",void 0);n.__decorate([z.aliasOf("viewModel.allowedLayouts")],
m.prototype,"allowedLayouts",void 0);n.__decorate([z.aliasOf("viewModel.error")],m.prototype,"error",void 0);n.__decorate([y.property({type:P})],m.prototype,"exportedLinks",void 0);n.__decorate([y.property()],m.prototype,"iconClass",void 0);n.__decorate([z.aliasOf("viewModel.includeDefaultTemplates")],m.prototype,"includeDefaultTemplates",void 0);n.__decorate([y.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],m.prototype,"label",void 0);n.__decorate([y.property(),L.messageBundle("esri/widgets/Print/t9n/Print")],
m.prototype,"messages",void 0);n.__decorate([y.property(),L.messageBundle("esri/t9n/common")],m.prototype,"messagesCommon",void 0);n.__decorate([z.aliasOf("viewModel.portal")],m.prototype,"portal",void 0);n.__decorate([z.aliasOf("viewModel.printServiceUrl")],m.prototype,"printServiceUrl",void 0);n.__decorate([y.property({type:O})],m.prototype,"templateOptions",void 0);n.__decorate([z.aliasOf("viewModel.view")],m.prototype,"view",void 0);n.__decorate([y.property({type:N})],m.prototype,"viewModel",
void 0);return m=n.__decorate([S.subclass("esri.widgets.Print")],m)});