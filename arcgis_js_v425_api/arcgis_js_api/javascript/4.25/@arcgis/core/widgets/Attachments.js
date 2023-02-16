/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import e from"../core/Error.js";import{i as s}from"../chunks/maybe.js";import{on as i,watch as o,initial as r}from"../core/reactiveUtils.js";import{o as a}from"../chunks/unitFormatUtils.js";import{property as n}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{cast as l}from"../core/accessorSupport/decorators/cast.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import c from"./Widget.js";import p from"./Attachments/AttachmentsViewModel.js";import{g as d}from"../chunks/assets.js";import{s as h,f as u,i as b}from"../chunks/widgetUtils.js";import{m as y}from"../chunks/messageBundle.js";import{t as g}from"../chunks/jsxFactory.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../core/promiseUtils.js";import"../chunks/handleUtils.js";import"../chunks/watch.js";import"../chunks/ArrayPool.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/tracking.js";import"../chunks/byteSizeEstimations.js";import"../chunks/Cyclical.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/projectionEllipsoid.js";import"../geometry/SpatialReference.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/metadata.js";import"../chunks/ensureType.js";import"../chunks/writer.js";import"../chunks/Ellipsoid.js";import"../chunks/number.js";import"../chunks/locale.js";import"../intl.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/domUtils.js";import"../core/Evented.js";import"../core/Promise.js";import"../chunks/uuid.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../Graphic.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../layers/support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";function j(t){const e=t.toLowerCase();return"image/bmp"===e||"image/emf"===e||"image/exif"===e||"image/gif"===e||"image/x-icon"===e||"image/jpeg"===e||"image/png"===e||"image/tiff"===e||"image/x-wmf"===e}const _={addButton:!0,addSubmitButton:!0,cancelAddButton:!0,cancelUpdateButton:!0,deleteButton:!0,errorMessage:!0,progressBar:!0,updateButton:!0},f="esri-attachments__item-button",v=window.CSS;let k=class extends c{constructor(t,e){super(t,e),this.displayType="auto",this.messages=null,this.messagesUnits=null,this.selectedFile=null,this.submitting=!1,this.viewModel=new p,this.visibleElements={..._},this._supportsImageOrientation=v&&v.supports&&v.supports("image-orientation","from-image"),this._addAttachmentForm=null,this._updateAttachmentForm=null}initialize(){this.addHandles([i((()=>this.viewModel?.attachmentInfos),"change",(()=>this.scheduleRender())),i((()=>this.viewModel?.fileInfos),"change",(()=>this.scheduleRender())),o((()=>this.viewModel?.mode),(()=>this._modeChanged()),r)])}loadDependencies(){return Promise.all([import("../chunks/calcite-icon.js")])}get abilities(){return this.viewModel.abilities}set abilities(t){this.viewModel.abilities=t}get effectiveDisplayType(){const{displayType:t}=this;return t&&"auto"!==t?t:this.viewModel.supportsResizeAttachments?"preview":"list"}get graphic(){return this.viewModel.graphic}set graphic(t){this.viewModel.graphic=t}get label(){return this.messages?.widgetLabel??""}set label(t){this._overrideIfSome("label",t)}castVisibleElements(t){return{..._,...t}}addAttachment(){const{_addAttachmentForm:t,viewModel:s}=this;return this._set("submitting",!0),this._set("error",null),s.addAttachment(t).then((t=>(this._set("submitting",!1),this._set("error",null),s.mode="view",t))).catch((t=>{throw this._set("submitting",!1),this._set("error",new e("attachments:add-attachment",this.messages.addErrorMessage,t)),t}))}deleteAttachment(t){const{viewModel:s}=this;return this._set("submitting",!0),this._set("error",null),s.deleteAttachment(t).then((t=>(this._set("submitting",!1),this._set("error",null),s.mode="view",t))).catch((t=>{throw this._set("submitting",!1),this._set("error",new e("attachments:delete-attachment",this.messages.deleteErrorMessage,t)),t}))}updateAttachment(){const{viewModel:t}=this,{_updateAttachmentForm:s}=this;return this._set("submitting",!0),this._set("error",null),t.updateAttachment(s).then((e=>(this._set("submitting",!1),this._set("error",null),t.mode="view",e))).catch((t=>{throw this._set("submitting",!1),this._set("error",new e("attachments:update-attachment",this.messages.updateErrorMessage,t)),t}))}addFile(){const t=this.viewModel.addFile(this.selectedFile,this._addAttachmentForm);return this.viewModel.mode="view",t}updateFile(){const{viewModel:t}=this,e=t.updateFile(this.selectedFile,this._updateAttachmentForm,t.activeFileInfo);return t.mode="view",e}deleteFile(t){const e=this.viewModel.deleteFile(t||this.viewModel.activeFileInfo.file);return this.viewModel.mode="view",e}render(){const{submitting:t,viewModel:e}=this,{state:s}=e;return g("div",{class:this.classes("esri-attachments","esri-widget")},t?this.renderProgressBar():null,"loading"===s?this.renderLoading():this.renderAttachments(),this.renderErrorMessage())}renderErrorMessage(){const{error:t,visibleElements:e}=this;return t&&e.errorMessage?g("div",{key:"error-message",class:"esri-attachments__error-message"},t.message):null}renderAttachments(){const{activeFileInfo:t,mode:e,activeAttachmentInfo:s}=this.viewModel;return"add"===e?this.renderAddForm():"edit"===e?this.renderDetailsForm(s||t):this.renderAttachmentContainer()}renderLoading(){return g("div",{class:"esri-attachments__loader-container",key:"loader"},g("div",{class:"esri-attachments__loader"}))}renderProgressBar(){return this.visibleElements.progressBar?g("div",{class:"esri-attachments__progress-bar",key:"progress-bar"}):null}renderAddForm(){const{submitting:t,selectedFile:e}=this,s=t||!e,i=this.visibleElements.cancelAddButton?g("button",{type:"button",bind:this,disabled:t,onclick:this._cancelForm,class:this.classes("esri-button","esri-button--tertiary","esri-button--small","esri-button--half",t&&"esri-button--disabled")},this.messages.cancel):null,o=this.visibleElements.addSubmitButton?g("button",{type:"submit",disabled:s,class:this.classes("esri-button","esri-button--secondary","esri-button--small","esri-button--half",{"esri-button--disabled":s})},this.messages.add):null,r=e?g("span",{key:"file-name",class:"esri-attachments__file-name"},e.name):null,a=g("form",{bind:this,afterCreate:h,afterRemoved:u,"data-node-ref":"_addAttachmentForm",onsubmit:this._submitAddAttachment},g("fieldset",{class:"esri-attachments__file-fieldset"},r,g("label",{class:this.classes("esri-attachments__file-label","esri-button","esri-button--secondary")},e?this.messages.changeFile:this.messages.selectFile,g("input",{class:"esri-attachments__file-input",type:"file",name:"attachment",bind:this,onchange:this._handleFileInputChange}))),o,i);return g("div",{key:"add-form-container",class:"esri-attachments__form-node"},a)}renderDetailsForm(t){const{visibleElements:e,viewModel:i,selectedFile:o,submitting:r}=this,{abilities:n}=i,l=r||!o;let m,c,p,d;o?(m=o.type,c=o.name,p=o.size):"file"in t?(m=t.file.type,c=t.file.name,p=t.file.size):(m=t.contentType,c=t.name,p=t.size,d=t.url);const b=n.editing&&n.operations.delete&&e.deleteButton?g("button",{key:"delete-button",type:"button",disabled:r,bind:this,onclick:e=>this._submitDeleteAttachment(e,t),class:this.classes("esri-button","esri-button--small","esri-button--tertiary","esri-attachments__delete-button",{"esri-button--disabled":r})},this.messages.delete):void 0,y=n.editing&&n.operations.update&&e.updateButton?g("button",{disabled:l,key:"update-button",type:"submit",class:this.classes("esri-button","esri-button--small","esri-button--third",{"esri-button--disabled":l})},this.messages.update):void 0,j=this.visibleElements.cancelUpdateButton?g("button",{disabled:r,key:"cancel-button",type:"button",bind:this,onclick:this._cancelForm,class:this.classes("esri-button","esri-button--small","esri-button--tertiary","esri-button--third",{"esri-button--disabled":r})},this.messages.cancel):void 0,_=n.editing&&n.operations.update?g("fieldset",{key:"file",class:"esri-attachments__file-fieldset"},g("span",{key:"file-name",class:"esri-attachments__file-name"},c),g("label",{class:this.classes("esri-attachments__file-label","esri-button","esri-button--secondary")},this.messages.changeFile,g("input",{class:"esri-attachments__file-input",type:"file",name:"attachment",bind:this,onchange:this._handleFileInputChange}))):void 0,f=g("fieldset",{key:"size",class:"esri-attachments__metadata-fieldset"},g("label",null,a(this.messagesUnits,p))),v=g("fieldset",{key:"content-type",class:"esri-attachments__metadata-fieldset"},g("label",null,m)),k=s(d)?g("a",{class:"esri-attachments__item-link",href:d,rel:"noreferrer",target:"_blank"},this.renderImageMask(t,400),g("div",{class:"esri-attachments__item-link-overlay"},g("span",{class:"esri-attachments__item-link-overlay-icon"},g("calcite-icon",{icon:"launch"})))):this.renderImageMask(t,400),M=g("form",{bind:this,afterCreate:h,afterRemoved:u,"data-node-ref":"_updateAttachmentForm",onsubmit:e=>this._submitUpdateAttachment(e,t)},g("div",{class:"esri-attachments__metadata"},f,v),_,g("div",{class:"esri-attachments__actions"},b,j,y));return g("div",{key:"edit-form-container",class:"esri-attachments__form-node"},k,M)}renderImageMask(t,e){return"file"in t?this.renderGenericImageMask(t.file.name,t.file.type):this.renderImageMaskForAttachment(t,e)}renderGenericImageMask(t,e){const{supportsResizeAttachments:s}=this.viewModel,i=function(t){const e=d("esri/themes/base/images/files/");return t?"text/plain"===t?`${e}text-32.svg`:"application/pdf"===t?`${e}pdf-32.svg`:"text/csv"===t?`${e}csv-32.svg`:"application/gpx+xml"===t?`${e}gpx-32.svg`:"application/x-dwf"===t?`${e}cad-32.svg`:"application/postscript"===t||"application/json"===t||"text/xml"===t||"model/vrml"===t?`${e}code-32.svg`:"application/x-zip-compressed"===t||"application/x-7z-compressed"===t||"application/x-gzip"===t||"application/x-tar"===t||"application/x-gtar"===t||"application/x-bzip2"===t||"application/gzip"===t||"application/x-compress"===t||"application/x-apple-diskimage"===t||"application/x-rar-compressed"===t||"application/zip"===t?`${e}zip-32.svg`:t.includes("image/")?`${e}image-32.svg`:t.includes("audio/")?`${e}sound-32.svg`:t.includes("video/")?`${e}video-32.svg`:t.includes("msexcel")||t.includes("ms-excel")||t.includes("spreadsheetml")?`${e}excel-32.svg`:t.includes("msword")||t.includes("ms-word")||t.includes("wordprocessingml")?`${e}word-32.svg`:t.includes("powerpoint")||t.includes("presentationml")?`${e}report-32.svg`:`${e}generic-32.svg`:`${e}generic-32.svg`}(e),o={"esri-attachments__image--resizable":s};return g("div",{class:this.classes("esri-attachments__item-mask--icon","esri-attachments__item-mask")},g("img",{title:t,alt:t,src:i,class:this.classes(o,"esri-attachments__image")}))}renderImageMaskForAttachment(t,e){const{supportsResizeAttachments:s}=this.viewModel,{contentType:i,name:o,url:r}=t;if(!s||!j(i))return this.renderGenericImageMask(o,i);const a=this._getCSSTransform(t),n=a?{transform:a,"image-orientation":"none"}:{},l=`${r}${r.includes("?")?"&":"?"}w=${e}`,m={"esri-attachments__image--resizable":s};return g("div",{class:this.classes("esri-attachments__item-mask")},g("img",{styles:n,alt:o,title:o,src:l,class:this.classes(m,"esri-attachments__image")}))}renderFile(t){const{file:e}=t;return g("li",{class:"esri-attachments__item",key:e},g("button",{key:"details-button",bind:this,class:f,title:this.messages.attachmentDetails,"aria-label":this.messages.attachmentDetails,onclick:()=>this._startEditFile(t),type:"button"},this.renderImageMask(t),g("label",{class:"esri-attachments__label"},g("span",{class:"esri-attachments__filename"},e.name||this.messages.noTitle),g("span",{"aria-hidden":"true",class:this.classes("esri-attachments__item-chevron-icon",b(this.container)?"esri-icon-left":"esri-icon-right")}))))}renderAttachmentInfo({attachmentInfo:t,displayType:e}){const{viewModel:s,effectiveDisplayType:i}=this,{abilities:o,supportsResizeAttachments:r}=s,{contentType:a,name:n,url:l}=t,m=this.renderImageMask(t,"list"===e?48:400),c=o.editing?g("span",{"aria-hidden":"true",class:this.classes("esri-attachments__item-chevron-icon",b(this.container)?"esri-icon-left":"esri-icon-right")}):null,p=[m,"preview"===i&&r&&j(a)?null:g("label",{class:"esri-attachments__label"},g("span",{class:"esri-attachments__filename"},n||this.messages.noTitle),c)],d=o.editing?g("button",{key:"details-button",bind:this,class:f,title:this.messages.attachmentDetails,"aria-label":this.messages.attachmentDetails,"data-attachment-info-id":t.id,onclick:()=>this._startEditAttachment(t),type:"button"},p):g("a",{key:"details-link",class:f,href:l,target:"_blank"},p);return g("li",{class:"esri-attachments__item",key:t},d)}renderAttachmentContainer(){const{effectiveDisplayType:t,viewModel:e,visibleElements:s}=this,{attachmentInfos:i,abilities:o,fileInfos:r}=e,a=!!i?.length,n=!!r?.length,l={"esri-attachments__container--list":"preview"!==t,"esri-attachments__container--preview":"preview"===t},m=o.editing&&o.operations.add&&s.addButton?g("button",{bind:this,onclick:()=>this._startAddAttachment(),class:this.classes("esri-button","esri-button--tertiary","esri-attachments__add-attachment-button"),type:"button"},g("span",{"aria-hidden":"true",class:this.classes("esri-attachments__item-add-icon","esri-icon-plus")}),this.messages.add):void 0,c=a?g("ul",{key:"attachments-list",class:"esri-attachments__items"},i.toArray().map((e=>this.renderAttachmentInfo({attachmentInfo:e,displayType:t})))):void 0,p=n?g("ul",{key:"file-list",class:"esri-attachments__items"},r.toArray().map((t=>this.renderFile(t)))):void 0,d=n||a?void 0:g("div",{class:"esri-widget__content--empty"},this.messages.noAttachments);return g("div",{key:"attachments-container",class:this.classes("esri-attachments__container",l)},c,p,d,m)}_modeChanged(){this._set("error",null),this._set("selectedFile",null)}_handleFileInputChange(t){const e=t.target,s=e&&e.files&&e.files.item(0);this._set("selectedFile",s)}_submitDeleteAttachment(t,e){t.preventDefault(),"file"in e?this.deleteFile(e.file):this.deleteAttachment(e)}_submitAddAttachment(t){t.preventDefault(),this.viewModel.filesEnabled?this.addFile():this.addAttachment()}_submitUpdateAttachment(t,e){t.preventDefault(),"file"in e?this.updateFile():this.updateAttachment()}_startEditAttachment(t){const{viewModel:e}=this;e.activeFileInfo=null,e.activeAttachmentInfo=t,e.mode="edit"}_startEditFile(t){const{viewModel:e}=this;e.activeAttachmentInfo=null,e.activeFileInfo=t,e.mode="edit"}_startAddAttachment(){this.viewModel.mode="add"}_cancelForm(t){t.preventDefault(),this.viewModel.mode="view"}_getCSSTransform(t){const{orientationInfo:e}=t;return!this._supportsImageOrientation&&e?[e.rotation?`rotate(${e.rotation}deg)`:"",e.mirrored?"scaleX(-1)":""].join(" "):""}};t([n()],k.prototype,"abilities",null),t([n()],k.prototype,"displayType",void 0),t([n({readOnly:!0})],k.prototype,"effectiveDisplayType",null),t([n()],k.prototype,"graphic",null),t([n()],k.prototype,"label",null),t([n(),y("esri/widgets/Attachments/t9n/Attachments")],k.prototype,"messages",void 0),t([n(),y("esri/core/t9n/Units")],k.prototype,"messagesUnits",void 0),t([n({readOnly:!0})],k.prototype,"selectedFile",void 0),t([n({readOnly:!0})],k.prototype,"submitting",void 0),t([n({readOnly:!0})],k.prototype,"error",void 0),t([n({type:p})],k.prototype,"viewModel",void 0),t([n()],k.prototype,"visibleElements",void 0),t([l("visibleElements")],k.prototype,"castVisibleElements",null),k=t([m("esri.widgets.Attachments")],k);const M=k;export{M as default};