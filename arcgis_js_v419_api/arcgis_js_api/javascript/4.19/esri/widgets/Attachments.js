// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/Logger ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/aliasOf ../core/accessorSupport/decorators/cast ../core/jsonMap ../core/accessorSupport/decorators/subclass ../core/Error ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../core/watchUtils ../core/unitFormatUtils ./support/widgetUtils ./support/decorators/messageBundle ../chunks/index ./Widget ./Attachments/AttachmentsViewModel ./Attachments/support/attachmentUtils".split(" "),
function(G,k,g,O,n,z,H,P,I,u,Q,R,S,A,J,q,B,b,K,C,D){const E={addButton:!0,addSubmitButton:!0,cancelAddButton:!0,cancelUpdateButton:!0,deleteButton:!0,errorMessage:!0,progressBar:!0,updateButton:!0},v=window.CSS;g=function(F){function w(a,c){a=F.call(this,a,c)||this;a.abilities=null;a.displayType="list";a.graphic=null;a.label=void 0;a.messages=null;a.messagesUnits=null;a.selectedFile=null;a.submitting=!1;a.viewModel=new C;a.visibleElements={...E};a._supportsImageOrientation=v&&v.supports&&v.supports("image-orientation",
"from-image");a._addAttachmentForm=null;a._updateAttachmentForm=null;return a}G._inheritsLoose(w,F);var e=w.prototype;e.initialize=function(){this.own(A.on(this,"viewModel.attachmentInfos","change",()=>this.scheduleRender()),A.init(this,"viewModel.mode",()=>this._modeChanged()))};e.castVisibleElements=function(a){return{...E,...a}};e.addAttachment=function(){const {_addAttachmentForm:a,viewModel:c}=this;this._set("submitting",!0);this._set("error",null);return c.addAttachment(a).then(d=>{this._set("submitting",
!1);this._set("error",null);c.mode="view";return d}).catch(d=>{this._set("submitting",!1);this._set("error",new u("attachments:add-attachment",this.messages.addErrorMessage,d));throw d;})};e.deleteAttachment=function(a){const {viewModel:c}=this;this._set("submitting",!0);this._set("error",null);return c.deleteAttachment(a).then(d=>{this._set("submitting",!1);this._set("error",null);c.mode="view";return d}).catch(d=>{this._set("submitting",!1);this._set("error",new u("attachments:delete-attachment",
this.messages.deleteErrorMessage,d));throw d;})};e.updateAttachment=function(){const {viewModel:a}=this,{_updateAttachmentForm:c}=this;this._set("submitting",!0);this._set("error",null);return a.updateAttachment(c).then(d=>{this._set("submitting",!1);this._set("error",null);a.mode="view";return d}).catch(d=>{this._set("submitting",!1);this._set("error",new u("attachments:update-attachment",this.messages.updateErrorMessage,d));throw d;})};e.render=function(){const {submitting:a,viewModel:c}=this,{state:d}=
c;return b.jsx("div",{class:this.classes("esri-attachments","esri-widget")},a?this.renderProgressBar():null,"loading"===d?this.renderLoading():this.renderAttachments(),this.renderErrorMessage())};e.renderErrorMessage=function(){const {error:a,visibleElements:c}=this;return a&&c.errorMessage?b.jsx("div",{key:"error-message",class:"esri-attachments__error-message"},a.message):null};e.renderAttachments=function(){const {mode:a,activeAttachmentInfo:c}=this.viewModel;return"add"===a?this.renderAddForm():
"edit"===a?this.renderDetailsForm(c):this.renderAttachmentContainer()};e.renderLoading=function(){return b.jsx("div",{class:"esri-attachments__loader-container",key:"loader"},b.jsx("div",{class:"esri-attachments__loader"}))};e.renderProgressBar=function(){return this.visibleElements.progressBar?b.jsx("div",{class:"esri-attachments__progress-bar",key:"progress-bar"}):null};e.renderAddForm=function(){const {submitting:a,selectedFile:c}=this;var d=a||!c,f=this.visibleElements.cancelAddButton?b.jsx("button",
{type:"button",bind:this,disabled:a,onclick:this._cancelForm,class:this.classes("esri-button","esri-button--tertiary","esri-button--small","esri-button--half",a&&"esri-button--disabled")},this.messages.cancel):null;d=this.visibleElements.addSubmitButton?b.jsx("button",{type:"submit",disabled:d,class:this.classes("esri-button","esri-button--secondary","esri-button--small","esri-button--half",{["esri-button--disabled"]:d})},this.messages.add):null;const h=c?b.jsx("span",{key:"file-name",class:"esri-attachments__file-name"},
c.name):null;f=b.jsx("form",{bind:this,afterCreate:q.storeNode,afterRemoved:q.discardNode,"data-node-ref":"_addAttachmentForm",onsubmit:this._submitAddAttachment},b.jsx("fieldset",{class:"esri-attachments__file-fieldset"},h,b.jsx("label",{class:this.classes("esri-attachments__file-label","esri-button","esri-button--secondary")},c?this.messages.changeFile:this.messages.selectFile,b.jsx("input",{class:"esri-attachments__file-input",type:"file",name:"attachment",bind:this,onchange:this._handleFileInputChange}))),
d,f);return b.jsx("div",{key:"add-form-container",class:"esri-attachments__form-node"},f)};e.renderDetailsForm=function(a){const {visibleElements:c,viewModel:d,selectedFile:f,submitting:h}=this,{contentType:l,size:p,url:r}=a;var {abilities:m}=d,t=h||!f,x=m.editing&&m.operations.delete&&c.deleteButton?b.jsx("button",{key:"delete-button",type:"button",disabled:h,bind:this,onclick:L=>this._submitDeleteAttachment(L,a),class:this.classes("esri-button","esri-button--small","esri-button--tertiary","esri-attachments__delete-button",
{["esri-button--disabled"]:h})},this.messages.delete):null;t=m.editing&&m.operations.update&&c.updateButton?b.jsx("button",{disabled:t,key:"update-button",type:"submit",class:this.classes("esri-button","esri-button--small","esri-button--third",{["esri-button--disabled"]:t})},this.messages.update):null;const M=this.visibleElements.cancelUpdateButton?b.jsx("button",{disabled:h,key:"cancel-button",type:"button",bind:this,onclick:this._cancelForm,class:this.classes("esri-button","esri-button--small",
"esri-button--tertiary","esri-button--third",{["esri-button--disabled"]:h})},this.messages.cancel):null;var y=f?b.jsx("span",{key:"file-name",class:"esri-attachments__file-name"},f.name):null;m=m.editing&&m.operations.update?b.jsx("fieldset",{key:"file",class:"esri-attachments__file-fieldset"},y,b.jsx("label",{class:this.classes("esri-attachments__file-label","esri-button","esri-button--secondary")},this.messages.changeFile,b.jsx("input",{class:"esri-attachments__file-input",type:"file",name:"attachment",
bind:this,onchange:this._handleFileInputChange}))):null;y=b.jsx("fieldset",{key:"size",class:"esri-attachments__metadata-fieldset"},b.jsx("label",null,J.formatFileSize(this.messagesUnits,p)));const N=b.jsx("fieldset",{key:"content-type",class:"esri-attachments__metadata-fieldset"},b.jsx("label",null,l));x=b.jsx("form",{bind:this,afterCreate:q.storeNode,afterRemoved:q.discardNode,"data-node-ref":"_updateAttachmentForm",onsubmit:this._submitUpdateAttachment},b.jsx("div",{class:"esri-attachments__metadata"},
y,N),m,b.jsx("div",{class:"esri-attachments__actions"},x,M,t));return b.jsx("div",{key:"edit-form-container",class:"esri-attachments__form-node"},b.jsx("a",{class:"esri-attachments__item-link",href:r,rel:"noreferrer",target:"_blank"},this.renderImageMask({attachmentInfo:a,size:400}),b.jsx("div",{class:"esri-attachments__item-link-overlay"},b.jsx("span",{class:"esri-attachments__item-link-overlay-icon"},b.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32"},b.jsx("path",
{d:"M28 13h1v16H3V3h16v1H4v24h24zm-5-9h4.293L15.646 15.638l.707.707L28 4.707V9h1V3h-6z"}),b.jsx("path",{fill:"none",d:"M0 0h32v32H0z"}))))),x)};e.renderImageMask=function({attachmentInfo:a,size:c}){var {supportsResizeAttachments:d}=this.viewModel;const {contentType:f,name:h,url:l}=a,p=d&&D.isSupportedImage(f);a=(a=this._getCSSTransform(a,p))?{transform:a,"image-orientation":"none"}:{};const r=-1===l.indexOf("?")?"?":"\x26";c=p?`${l}${r}w=${c}`:D.getIconPath(f);d={["esri-attachments__image--resizable"]:d};
return b.jsx("div",{class:this.classes({["esri-attachments__item-mask--icon"]:!p},"esri-attachments__item-mask")},b.jsx("img",{styles:a,alt:h,src:c,class:this.classes(d,"esri-attachments__image")}))};e.renderAttachmentInfo=function({attachmentInfo:a,displayType:c}){var {viewModel:d}=this;({abilities:d}=d);const {name:f,url:h}=a;c=this.renderImageMask({attachmentInfo:a,size:"list"===c?48:400});var l=d.editing?b.jsx("span",{"aria-hidden":"true",class:this.classes("esri-attachments__item-chevron-icon",
q.isRTL()?"esri-icon-left":"esri-icon-right")}):null;l=b.jsx("label",{class:"esri-attachments__label"},b.jsx("span",{class:"esri-attachments__filename"},f||this.messages.noTitle),l);c=[c,l];d=d.editing?b.jsx("button",{key:"details-button",bind:this,class:"esri-attachments__item-button",title:this.messages.attachmentDetails,"aria-label":this.messages.attachmentDetails,"data-attachment-info-id":a.id,onclick:()=>this._startEditAttachment(a),type:"button"},c):b.jsx("a",{key:"details-link",class:"esri-attachments__item-button",
href:h,target:"_blank"},c);return b.jsx("li",{class:"esri-attachments__item",key:a},d)};e.renderAttachmentContainer=function(){const {displayType:a,viewModel:c,visibleElements:d}=this,{attachmentInfos:f,abilities:h}=c;var l=f&&f.length;const p={["esri-attachments__container--list"]:"preview"!==a,["esri-attachments__container--preview"]:"preview"===a},r=h.editing&&h.operations.add&&d.addButton?b.jsx("button",{bind:this,onclick:()=>this._startAddAttachment(),class:this.classes("esri-button","esri-button--tertiary",
"esri-attachments__add-attachment-button"),type:"button"},b.jsx("span",{"aria-hidden":"true",class:this.classes("esri-attachments__item-add-icon","esri-icon-plus")}),this.messages.add):null;l=l?b.jsx("ul",{class:"esri-attachments__items"},f.toArray().map(m=>this.renderAttachmentInfo({attachmentInfo:m,displayType:a}))):b.jsx("div",{class:"esri-widget__content--empty"},this.messages.noAttachments);return b.jsx("div",{key:"attachments-container",class:this.classes("esri-attachments__container",p)},l,
r)};e._modeChanged=function(){this._set("error",null);this._set("selectedFile",null)};e._handleFileInputChange=function(a){a=(a=a.target)&&a.files&&a.files.item(0);this._set("selectedFile",a)};e._submitDeleteAttachment=function(a,c){a.preventDefault();this.deleteAttachment(c)};e._submitAddAttachment=function(a){a.preventDefault();this.addAttachment()};e._submitUpdateAttachment=function(a){a.preventDefault();this.updateAttachment()};e._startEditAttachment=function(a){const {viewModel:c}=this;c.activeAttachmentInfo=
a;c.mode="edit"};e._startAddAttachment=function(){this.viewModel.mode="add"};e._cancelForm=function(a){a.preventDefault();this.viewModel.mode="view"};e._getCSSTransform=function(a,c){({orientationInfo:a}=a);return!this._supportsImageOrientation&&c&&a?[a.rotation?`rotate(${a.rotation}deg)`:"",a.mirrored?"scaleX(-1)":""].join(" "):""};return w}(K);k.__decorate([z.aliasOf("viewModel.abilities")],g.prototype,"abilities",void 0);k.__decorate([n.property()],g.prototype,"displayType",void 0);k.__decorate([z.aliasOf("viewModel.graphic")],
g.prototype,"graphic",void 0);k.__decorate([n.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],g.prototype,"label",void 0);k.__decorate([n.property(),B.messageBundle("esri/widgets/Attachments/t9n/Attachments")],g.prototype,"messages",void 0);k.__decorate([n.property(),B.messageBundle("esri/core/t9n/Units")],g.prototype,"messagesUnits",void 0);k.__decorate([n.property({readOnly:!0})],g.prototype,"selectedFile",void 0);k.__decorate([n.property({readOnly:!0})],g.prototype,"submitting",
void 0);k.__decorate([n.property({readOnly:!0})],g.prototype,"error",void 0);k.__decorate([n.property({type:C})],g.prototype,"viewModel",void 0);k.__decorate([n.property()],g.prototype,"visibleElements",void 0);k.__decorate([H.cast("visibleElements")],g.prototype,"castVisibleElements",null);return g=k.__decorate([I.subclass("esri.widgets.Attachments")],g)});