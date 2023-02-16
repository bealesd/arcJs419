/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{substitute as t}from"../intl.js";import{e as s}from"../core/promiseUtils.js";import r from"../core/Handles.js";import{watch as i,on as o,initial as n}from"../core/reactiveUtils.js";import{e as l}from"../chunks/string.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{subclass as u}from"../core/accessorSupport/decorators/subclass.js";import c from"./Widget.js";import h from"./Search/SearchResultRenderer.js";import p from"./Search/SearchViewModel.js";import{s as d,l as m,m as g}from"../chunks/widgetUtils.js";import{m as _}from"../chunks/messageBundle.js";import{v}from"../chunks/vmEvent.js";import{t as y}from"../chunks/jsxFactory.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/object.js";import"../chunks/locale.js";import"../chunks/maybe.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/messages.js";import"../core/Error.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/handleUtils.js";import"../chunks/watch.js";import"../chunks/ArrayPool.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/tracking.js";import"../chunks/metadata.js";import"../chunks/domUtils.js";import"../core/Evented.js";import"../core/Accessor.js";import"../core/Promise.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/accessibleHandler.js";import"../Graphic.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../layers/support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/layerViewUtils.js";import"./Search/LayerSearchSource.js";import"./Search/SearchSource.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../chunks/FullTextSearch.js";import"../chunks/geometryUtils3.js";import"../chunks/scaleUtils.js";import"./Search/LocatorSearchSource.js";import"../chunks/suggestLocations.js";import"../chunks/utils4.js";import"../rest/support/AddressCandidate.js";import"../chunks/commonProperties3.js";import"../chunks/geolocationUtils.js";import"../chunks/trimExtend.js";import"../rest/support/GeneralizeParameters.js";import"../rest/support/LengthsParameters.js";import"../rest/support/OffsetParameters.js";import"../chunks/project.js";import"../chunks/utils5.js";import"../rest/support/ProjectParameters.js";import"../rest/support/RelationParameters.js";import"../rest/support/TrimExtendParameters.js";import"./support/GoTo.js";const b=/<[a-z/][\s\S]*>/i;let M=class extends c{constructor(e,t){super(e,t),this._activeMenuItemIndex=-1,this._handles=new r,this._inputNode=null,this._menuItemCount=0,this._sourceMenuButtonNode=null,this._sourceListNode=null,this._suggestionListNode=null,this._searchResultRenderer=new h,this._locateFailed=null,this._container=null,this.activeMenu="none",this.disabled=!1,this.iconClass="esri-icon-search",this.messages=null,this.messagesCommon=null,this.viewModel=new p,this._clearActiveMenu=()=>{this.activeMenu="none"},this._removeActiveMenu=e=>{const t=e.relatedTarget;t&&this._container?.contains(t)||this._clearActiveMenu()},this.addHandles([i((()=>this.searchTerm),(e=>{(e&&"warning"===this.activeMenu||!e&&!this.get("viewModel.selectedSuggestion.location"))&&this._clearActiveMenu()})),o((()=>this.viewModel?.allSources),"change",(()=>this._watchSourceChanges())),i((()=>this.activeMenu),(()=>this._resetActiveMenuItemIndex()),n),i((()=>this.viewModel?.defaultPopupTemplate),(e=>{e&&(e.content=this._renderSearchResultsContent.bind(this))}),n)])}destroy(){this._handles.destroy(),this._handles=null,this._cancelSuggest(),this._cancelSearch(),this._searchResultRenderer&&(this._searchResultRenderer.viewModel=null,this._searchResultRenderer.destroy(),this._searchResultRenderer=null)}get displayedSearchTerm(){return`${this.viewModel.searchTerm}`.trim()}get inputId(){return this._buildId("input")}get suggestionsMenuId(){return this._buildId("suggest-menu")}get sourceMenuId(){return this._buildId("source-menu")}get sourceMenuButtonId(){return this._buildId("source-menu-button")}get activeSource(){return this.viewModel.activeSource}get activeSourceIndex(){return this.viewModel.activeSourceIndex}set activeSourceIndex(e){this.viewModel.activeSourceIndex=e}get allPlaceholder(){return this.viewModel.allPlaceholder}set allPlaceholder(e){this.viewModel.allPlaceholder=e}get allSources(){return this.viewModel.allSources}get autoNavigate(){return this.viewModel.autoNavigate}set autoNavigate(e){this.viewModel.autoNavigate=e}get autoSelect(){return this.viewModel.autoSelect}set autoSelect(e){this.viewModel.autoSelect=e}get defaultSources(){return this.viewModel.defaultSources}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(e){this.viewModel.goToOverride=e}get includeDefaultSources(){return this.viewModel.includeDefaultSources}set includeDefaultSources(e){this.viewModel.includeDefaultSources=e}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get locationEnabled(){return this.viewModel.locationEnabled}set locationEnabled(e){this.viewModel.locationEnabled=e}get maxResults(){return this.viewModel.maxResults}set maxResults(e){this.viewModel.maxResults=e}get maxSuggestions(){return this.viewModel.maxSuggestions}set maxSuggestions(e){this.viewModel.maxSuggestions=e}get minSuggestCharacters(){return this.viewModel.minSuggestCharacters}set minSuggestCharacters(e){this.viewModel.minSuggestCharacters=e}get popupEnabled(){return this.viewModel.popupEnabled}set popupEnabled(e){this.viewModel.popupEnabled=e}get popupTemplate(){return this.viewModel.popupTemplate}set popupTemplate(e){this.viewModel.popupTemplate=e}get portal(){return this.viewModel.portal}set portal(e){this.viewModel.portal=e}get resultGraphic(){return this.viewModel.resultGraphic}set resultGraphic(e){this.viewModel.resultGraphic=e}get resultGraphicEnabled(){return this.viewModel.resultGraphicEnabled}set resultGraphicEnabled(e){this.viewModel.resultGraphicEnabled=e}get results(){return this.viewModel.results}get searchAllEnabled(){return this.viewModel.searchAllEnabled}set searchAllEnabled(e){this.viewModel.searchAllEnabled=e}get searchTerm(){return this.viewModel.searchTerm}set searchTerm(e){this.viewModel.searchTerm=e}get selectedResult(){return this.viewModel.selectedResult}get sources(){return this.viewModel.sources}set sources(e){this.viewModel.sources=e}get suggestions(){return this.viewModel.suggestions}get suggestionsEnabled(){return this.viewModel.suggestionsEnabled}set suggestionsEnabled(e){this.viewModel.suggestionsEnabled=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}clear(){this.viewModel.clear()}focus(){this._inputNode?.focus(),this.emit("search-focus")}blur(){this._inputNode?.blur(),this.emit("search-blur")}search(e){this._clearActiveMenu(),this._cancelSuggest(),this._cancelSearch();const t=new AbortController,{signal:s}=t;return this._searchController=t,this.viewModel.search(e,{signal:s}).catch((e=>{if(this._searchController===t)return this._clearActiveMenu(),this._searchController=null,e})).then((e=>{if(this._searchController===t)return this.activeMenu=e.numResults?"none":"warning",this._searchController=null,e}))}suggest(e){this._cancelSuggest();const t=new AbortController,{signal:s}=t;return this._suggestController=t,this.viewModel.suggest(e,null,{signal:s}).then((e=>{if(this._suggestController===t)return this._suggestController=null,e.numResults&&this._openSuggestionMenu(),this._scrollToTopSuggestion(),e})).catch((()=>{if(this._suggestController===t)return this._suggestController=null,null}))}render(){const{state:e}=this.viewModel,t={"esri-disabled":"disabled"===e,"esri-widget--disabled":this.disabled};return y("div",{class:this.classes("esri-search esri-widget",t)},"loading"===e?this.renderLoader():this.renderContainer())}renderSubmitButton(){const{messages:e,disabled:t}=this;return y("button",{"aria-label":e.searchButtonTitle,bind:this,disabled:t,class:this.classes("esri-search__submit-button","esri-widget--button"),key:"esri-search__submit-button",onclick:this._handleSearchButtonClick,title:e.searchButtonTitle,type:"button"},y("span",{"aria-hidden":"true",class:"esri-icon-search"}))}renderWarningMenu(){return y("div",{key:"esri-search__error-menu",class:this.classes("esri-menu","esri-search__warning-menu")},y("div",{class:"esri-search__warning-body"},this.renderWarning()))}renderSourceMenuButton(){const{messages:e,activeMenu:t,sourceMenuId:s,sourceMenuButtonId:r,disabled:i}=this,{activeSourceIndex:o,allSources:n}=this.viewModel;return n.length>1?y("button",{id:r,key:"esri-search__source-menu-button",bind:this,disabled:i,"aria-label":e.searchIn,title:e.searchIn,"aria-haspopup":"true","aria-expanded":("source"===t).toString(),"aria-controls":s,class:this.classes("esri-search__sources-button","esri-widget--button"),onclick:this._handleSourcesMenuToggleClick,onfocus:this._handleSourcesMenuToggleFocus,afterCreate:d,"data-node-ref":"_sourceMenuButtonNode",type:"button"},y("span",{"aria-hidden":"true",class:"esri-icon-down-arrow esri-search__sources-button--down"}),y("span",{"aria-hidden":"true",class:"esri-icon-up-arrow esri-search__sources-button--up"}),y("span",{class:"esri-search__source-name"},this._getSourceName(o))):null}renderSourcesList(){const{allSources:e,searchAllEnabled:t}=this.viewModel,{_activeMenuItemIndex:s,activeMenu:r,sourceMenuId:i,sourceMenuButtonId:o}=this,n="source"===r&&s>-1?this._buildId("source-item",s):null;return e.length>1?y("ul",{"aria-activedescendant":n,"aria-labelledby":o,id:i,role:"menu",bind:this,afterCreate:d,onkeydown:this._handleSourceMenuKeydown,onkeyup:this._handleSourceMenuKeyup,"data-node-ref":"_sourceListNode",class:"esri-menu__list",tabIndex:-1},t?this.renderSource(p.ALL_INDEX):null,e.map(((e,t)=>this.renderSource(t))).toArray()):null}renderSourcesMenu(){const{allSources:e}=this.viewModel;return e.length>1?y("div",{key:"esri-search__source-menu",class:this.classes("esri-menu","esri-search__sources-menu")},this.renderSourcesList()):null}renderLoader(){const{messages:e,messagesCommon:t,disabled:s}=this;return y("div",{class:"esri-widget__loader",key:"base-loader",tabIndex:s?-1:null},y("span",{"aria-hidden":"true",class:"esri-widget__loader-animation"}),y("span",{class:"esri-icon-font-fallback-text"},e.searchButtonTitle),y("span",{class:"esri-widget__loader-text"},t.loading))}renderContainer(){const{allSources:e,state:t}=this.viewModel,{activeMenu:s}=this,r={"esri-search--multiple-sources":e.length>1,"esri-search--loading":"loading"===t,"esri-search--searching":"searching"===t,"esri-search--warning":"warning"===s,"esri-search--sources":"source"===s,"esri-search--show-suggestions":"suggestion"===s};return y("div",{tabIndex:-1,afterCreate:e=>{this._container=e,e.addEventListener("focusout",this._removeActiveMenu)},afterRemoved:e=>{e.removeEventListener("focusout",this._removeActiveMenu)},class:this.classes(r,"esri-search__container"),key:"base-container"},this.renderSourceMenuButton(),this.renderSourcesMenu(),this.renderInputContainer(),this.renderSubmitButton(),this.renderWarningMenu())}renderClearButton(){return this.searchTerm?y("button",{bind:this,disabled:this.disabled,class:this.classes("esri-search__clear-button","esri-widget--button"),key:"esri-search__clear-button",onclick:this._handleClearButtonClick,onfocus:this._clearActiveMenu,title:this.messages.clearButtonTitle,type:"button"},y("span",{"aria-hidden":"true",class:"esri-icon-close"})):null}renderLocationGroup(){const{messages:e,locationEnabled:t,displayedSearchTerm:s}=this,r=t&&!s,i="suggestion"===this.activeMenu&&0===this._activeMenuItemIndex;return r?y("ul",{role:"group",key:"esri-search__suggestion-list-current-location",class:this.classes("esri-menu__list","esri-search__suggestions-list","esri-search__suggestions-list--current-location")},y("li",{bind:this,"data-current-location-item":!0,onclick:this._handleUseCurrentLocationClick,id:this._buildId("suggestion-item",0),"aria-selected":("suggestion"===this.activeMenu&&0===this._activeMenuItemIndex).toString(),role:"option",class:this.classes("esri-menu__list-item",i?"esri-menu__list-item--focus":null)},y("span",{"aria-hidden":"true",class:"esri-icon-locate-circled"})," ",e.useCurrentLocation)):null}renderInput(){const{activeMenu:e,locationEnabled:t,displayedSearchTerm:s,messages:r,suggestionsMenuId:i,inputId:o,_activeMenuItemIndex:n,disabled:l}=this,{maxInputLength:a,placeholder:u,searchTerm:c,suggestionCount:h}=this.viewModel,p=!((!t||s)&&!h),m="suggestion"===e&&n>-1?this._buildId("suggestion-item",n):null;return y("input",{"aria-activedescendant":m,"aria-autocomplete":"list","aria-expanded":(p&&"suggestion"===e).toString(),"aria-controls":p?i:null,"aria-haspopup":"listbox","aria-label":r.searchButtonTitle,bind:this,disabled:l,placeholder:u,maxlength:a,autocomplete:"off",type:"text",class:this.classes("esri-input","esri-search__input"),value:c,id:o,role:"combobox",onkeyup:this._handleInputKeyup,onclick:this._openSuggestionMenu,oninput:this._handleInputPaste,onpaste:this._handleInputPaste,afterCreate:d,"data-node-ref":"_inputNode",onfocus:this.focus,onblur:this.blur,title:c?"":u})}renderForm(){return y("form",{key:"esri-search__form",bind:this,disabled:this.disabled,class:"esri-search__form",onsubmit:this._formSubmit,role:"search"},this.renderInput())}renderSuggestList(e){const{sourceIndex:t}=e,s=e.results.length,r=e.results;return s?y("ul",{role:"group",key:`esri-search__suggestion-list-${t}`,class:this.classes("esri-menu__list","esri-search__suggestions-list")},r.map((e=>this.renderSuggestion(e,this._menuItemCount++)))):null}renderSuggestionsGroup(){const{suggestions:e}=this.viewModel;return e?e.map((e=>[this.renderSuggestionHeader(e),this.renderSuggestList(e)])):null}renderSuggestionsMenu(){const{displayedSearchTerm:e,locationEnabled:t,suggestionsMenuId:s,inputId:r}=this,{suggestionCount:i}=this.viewModel,o=t&&!e||i;return this._menuItemCount=0,o?y("div",{id:s,key:"esri-search__suggestions-menu",class:this.classes("esri-menu","esri-search__suggestions-menu"),role:"listbox","aria-labelledby":r,bind:this,afterCreate:d,"data-node-ref":"_suggestionListNode"},this.renderLocationGroup(),this.renderSuggestionsGroup()):null}renderInputContainer(){return y("div",{key:"esri-search__input-container",class:"esri-search__input-container"},this.renderForm(),this.renderSuggestionsMenu(),this.renderClearButton())}renderSuggestionHeader(e){const{allSources:t,activeSourceIndex:s}=this.viewModel,{sourceIndex:r}=e,i=e.results.length,o=t.length>1&&s===p.ALL_INDEX;return i&&o?y("div",{key:`esri-search__suggestion-header-${r}`,class:"esri-menu__header"},this._getSourceName(r)):null}renderSuggestion(e,t){const{_activeMenuItemIndex:s,messages:r}=this,{searchTerm:i}=this.viewModel;if(i){const{text:o}=e,n=o||r.untitledResult,l=b.test(n),a=[];if(l)a.push(y("div",{innerHTML:n}));else{const e=this._splitResult(n,i),t=i.toLowerCase();e.forEach(((e,s)=>{e&&e.length&&(e.toLowerCase()===t?a.push(y("strong",{key:s},e)):a.push(e))}))}const u="suggestion"===this.activeMenu&&s===t;return y("li",{bind:this,id:this._buildId("suggestion-item",t),"aria-selected":("suggestion"===this.activeMenu&&this._activeMenuItemIndex===t).toString(),onclick:this._handleSuggestionClick,key:`esri-search__suggestion_${t}`,"data-suggestion":e,role:"option",class:this.classes("esri-menu__list-item",u?"esri-menu__list-item--focus":null)},a)}}renderSource(e){const{activeSourceIndex:t,searchAllEnabled:s}=this.viewModel,r={"esri-menu__list-item--active":e===t,"esri-menu__list-item--focus":"source"===this.activeMenu&&e===(s?this._activeMenuItemIndex-1:this._activeMenuItemIndex)},i=s?e+1:e;return y("li",{bind:this,key:`esri-search__source-${e}`,id:this._buildId("source-item",i),"aria-checked":(e===t).toString(),onclick:this._handleSourceClick,"data-source-index":e,role:"menuitemradio",class:this.classes("esri-search__source","esri-menu__list-item",r)},this._getSourceName(e))}renderNoResultsWarning(e){const{messages:s}=this,r=e?t(s.noResultsFoundForValue,{value:`"${e}"`}):s.noResultsFound;return y("div",{key:"esri-search__no_results"},y("div",{class:"esri-search__warning-header"},s.noResults),y("div",{class:"esri-search__warning-text"},r))}renderEmptySearchWarning(){const{messages:e}=this;return y("div",{key:"esri-search__empty-search"},y("span",{"aria-hidden":"true",class:"esri-icon-notice-triangle"}),y("span",{class:"esri-search__no-value-text"},e.emptyValue))}renderLocateWarning(){const{messages:e}=this;return y("div",{key:"esri-search__locate-error"},y("span",{"aria-hidden":"true",class:"esri-icon-notice-triangle"}),y("span",{class:"esri-search__no-value-text"},e.locateError))}renderWarning(){const{displayedSearchTerm:e,_locateFailed:t}=this,{viewModel:s}=this;return t?this.renderLocateWarning():s.selectedSuggestion?.location||e?this.renderNoResultsWarning(e):this.renderEmptySearchWarning()}_resetActiveMenuItemIndex(){this._activeMenuItemIndex=-1}_buildId(e,t){return`${this.id}-${e}${void 0===t?"":`-${t}`}`}_watchSourceChanges(){const{_handles:e,viewModel:{allSources:t}}=this,s="sources";e.remove(s),t.forEach((t=>e.add(i((()=>t.name),(()=>this.scheduleRender())),s)))}_handleSourcesMenuToggleFocus(){"source"!==this.activeMenu&&this._clearActiveMenu()}_handleSourcesMenuToggleClick(){const e="source"===this.activeMenu;this.activeMenu=e?"none":"source",this.renderNow(),"source"===this.activeMenu&&this._sourceListNode?.focus()}_handleClearButtonClick(){this.viewModel.clear(),this._focus()}_handleSearchButtonClick(){this.search()}_handleSuggestionClick(e){const t=e.currentTarget["data-suggestion"];t&&(this._focus(),this.search(t))}_handleUseCurrentLocationClick(){this._useCurrentLocation()}_useCurrentLocation(){this._focus("none"),this._cancelSuggest(),this._cancelSearch();const e=new AbortController,{signal:t}=e;this._searchController=e,this.viewModel.searchNearby({signal:t}).then((e=>{this.activeMenu=e.numResults?"none":"warning"})).catch((()=>{this._locateFailed=!0,this.activeMenu="warning"})).then((()=>{this._searchController=null}))}_handleSourceClick(e){this._setSourceFromMenuItem(e.currentTarget)}_setSourceFromMenuItem(e){if(!e)return;const t=e["data-source-index"];this.viewModel.activeSourceIndex=t,this._clearActiveMenu(),this._sourceMenuButtonNode?.focus()}_cancelSuggest(){this._suggestController&&(this._suggestController.abort(),this._suggestController=null)}_cancelSearch(){this._searchController&&(this._searchController.abort(),this._searchController=null),this._locateFailed=!1}_handleInputKeyup(e){const t=s(e);if(e.ctrlKey||e.metaKey||"Copy"===t||"ArrowLeft"===t||"ArrowRight"===t||"Shift"===t)return;if("Tab"===t||"Escape"===t||e.shiftKey&&"Tab"===t)return this._cancelSuggest(),void("Escape"===t&&this._clearActiveMenu());const r="Home"===t||"End"===t||"ArrowUp"===t||"ArrowDown"===t;if("Enter"===t&&this._activeMenuItemIndex<0)return void this._cancelSuggest();const i=this._suggestionListNode?.getElementsByTagName("li");if(i?.length){if("suggestion"!==this.activeMenu&&this._openSuggestionMenu(),r)return e.preventDefault(),this._cancelSuggest(),void this._handleItemNavigation(t,i,this._suggestionListNode);const s=i[this._activeMenuItemIndex];if("Enter"===t&&s){const e=s["data-suggestion"];return void(e?(this._focus(),this.search(e)):s["data-current-location-item"]&&this._useCurrentLocation())}}this.viewModel.searchTerm&&this.suggest()}_handleItemNavigation(e,t,s){const r=this._activeMenuItemIndex;"Home"===e&&(this._activeMenuItemIndex=0),"End"===e&&(this._activeMenuItemIndex=t.length-1),"ArrowUp"===e&&(this._activeMenuItemIndex=this._activeMenuItemIndex<=0?t.length-1:this._activeMenuItemIndex-1),"ArrowDown"===e&&(this._activeMenuItemIndex=this._activeMenuItemIndex===t.length-1?0:this._activeMenuItemIndex+1),r!==this._activeMenuItemIndex&&m(t[this._activeMenuItemIndex],s)}_scrollToTopSuggestion(){this._suggestionListNode&&(this._suggestionListNode.scrollTop=0)}_openSuggestionMenu(){this.activeMenu="suggestion"}_handleInputPaste(e){const t=e.target;this.viewModel.searchTerm!==t.value&&(this.viewModel.searchTerm=t.value),this.viewModel.searchTerm&&this.suggest()}_handleSourceMenuKeydown(e){const t=s(e);if(g(t)){e.preventDefault();const t=this._sourceListNode.getElementsByTagName("li")[this._activeMenuItemIndex];this._setSourceFromMenuItem(t)}else"ArrowUp"!==t&&"ArrowDown"!==t&&"End"!==t&&"Home"!==t||e.preventDefault()}_handleSourceMenuKeyup(e){const t=s(e),r="ArrowUp"===t||"ArrowDown"===t||"End"===t||"Home"===t;if(r&&e.preventDefault(),"Escape"===t)return this._clearActiveMenu(),void this._sourceMenuButtonNode?.focus();const i=this._sourceListNode?.getElementsByTagName("li");return i&&0!==i.length&&r?("source"!==this.activeMenu&&(this.activeMenu="source"),void this._handleItemNavigation(t,i,this._sourceListNode.parentElement)):void 0}_focus(e){this.focus(),e&&(this.activeMenu=e)}_formSubmit(e){e.preventDefault(),-1===this._activeMenuItemIndex&&this.search()}_getSourceName(e){const{messages:t}=this,s=this.viewModel,{allSources:r}=s,i=r.getItemAt(e);return e===p.ALL_INDEX?t.all:i&&i.name||t.untitledSource}_splitResult(e,t){const s=l(t);return e.replace(new RegExp(`(^|)(${s})(|$)`,"ig"),"$1|$2|$3").split("|")}_renderSearchResultsContent(){return this._searchResultRenderer.showMoreResultsOpen=!1,this._searchResultRenderer.viewModel=this.viewModel,this._searchResultRenderer}};e([a()],M.prototype,"_activeMenuItemIndex",void 0),e([a()],M.prototype,"displayedSearchTerm",null),e([a({readOnly:!0})],M.prototype,"inputId",null),e([a({readOnly:!0})],M.prototype,"suggestionsMenuId",null),e([a({readOnly:!0})],M.prototype,"sourceMenuId",null),e([a({readOnly:!0})],M.prototype,"sourceMenuButtonId",null),e([a()],M.prototype,"activeMenu",void 0),e([a({readOnly:!0})],M.prototype,"activeSource",null),e([a()],M.prototype,"activeSourceIndex",null),e([a()],M.prototype,"allPlaceholder",null),e([a({readOnly:!0})],M.prototype,"allSources",null),e([a()],M.prototype,"autoNavigate",null),e([a()],M.prototype,"autoSelect",null),e([a({readOnly:!0})],M.prototype,"defaultSources",null),e([a()],M.prototype,"disabled",void 0),e([a()],M.prototype,"goToOverride",null),e([a()],M.prototype,"iconClass",void 0),e([a()],M.prototype,"includeDefaultSources",null),e([a()],M.prototype,"label",null),e([a()],M.prototype,"locationEnabled",null),e([a()],M.prototype,"maxResults",null),e([a()],M.prototype,"maxSuggestions",null),e([a(),_("esri/widgets/Search/t9n/Search")],M.prototype,"messages",void 0),e([a(),_("esri/t9n/common")],M.prototype,"messagesCommon",void 0),e([a()],M.prototype,"minSuggestCharacters",null),e([a()],M.prototype,"popupEnabled",null),e([a()],M.prototype,"popupTemplate",null),e([a()],M.prototype,"portal",null),e([a()],M.prototype,"resultGraphic",null),e([a()],M.prototype,"resultGraphicEnabled",null),e([a({readOnly:!0})],M.prototype,"results",null),e([a()],M.prototype,"searchAllEnabled",null),e([a()],M.prototype,"searchTerm",null),e([a({readOnly:!0})],M.prototype,"selectedResult",null),e([a()],M.prototype,"sources",null),e([a({readOnly:!0})],M.prototype,"suggestions",null),e([a()],M.prototype,"suggestionsEnabled",null),e([a()],M.prototype,"view",null),e([v(["search-complete","search-clear","search-start","select-result","suggest-start","suggest-complete"]),a({type:p})],M.prototype,"viewModel",void 0),M=e([u("esri.widgets.Search")],M);const j=M;export{j as default};