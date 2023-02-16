// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../intl ../core/deprecate ../core/HandleOwner ../core/Logger ../core/maybe ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/accessorSupport/decorators/cast ../core/accessorSupport/decorators/subclass ./Widget ./FeatureTable/FeatureTableViewModel ./FeatureTable/Grid/support/ButtonMenu ./FeatureTable/Grid/support/ButtonMenuItem ./support/Heading ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory ../intl/substitute".split(" "),
function(w,t,e,d,y,D,E,F,r,f,M,G,H,I,J,K,n,L,N,x,k,z){const A={header:!0,menu:!0,menuItems:{clearSelection:!0,refreshData:!0,toggleColumns:!0,selectedRecordsShowAllToggle:!0,selectedRecordsShowSelectedToggle:!0,zoomToSelection:!0,deleteSelection:!0},selectionColumn:!0,columnMenus:!0},B=E.getLogger("esri.widgets.FeatureTable");d=function(C){function v(a,b){a=C.call(this,a,b)||this;a._prompt=null;a.menu=null;a.menuConfig=null;a.viewModel=new J;a.visibleElements={...A};a._showDeletePrompt=a._showDeletePrompt.bind(t._assertThisInitialized(a));
a._onDeleteSelectionClick=a._onDeleteSelectionClick.bind(t._assertThisInitialized(a));return a}t._inheritsLoose(v,C);var c=v.prototype;c.initialize=function(){this.handles.add([r.on(()=>this.viewModel.columns,"change",()=>this._syncMenuConfig()),r.on(()=>this.viewModel.activeFilters,"change",()=>this._syncMenuConfig()),r.on(()=>this.highlightIds,"change",g=>{this._syncMenuConfig();this._onSelectionChange(g)}),r.watch(()=>[this.viewModel.store.querying,this.viewModel.store.syncing,this.editingEnabled],
()=>this.scheduleRender()),r.watch(()=>[this.menuConfig,this.editingEnabled],()=>this._syncMenuConfig()),r.watch(()=>this.messages,()=>{this.menu.label=this.messages?.options;this._syncMenuConfig()})]);this._set("menu",new K({label:this.messages?.options,iconClass:"esri-icon-handle-horizontal",...this.menuConfig}));const {attachmentsEnabled:a,relatedRecordsEnabled:b}=this;this.viewModel?.store?.set({attachmentsEnabled:a,relatedRecordsEnabled:b})};c.loadDependencies=function(){return Promise.all([new Promise((a,
b)=>w(["../chunks/calcite-scrim"],a,b)),new Promise((a,b)=>w(["../chunks/calcite-button"],a,b)),new Promise((a,b)=>w(["../chunks/calcite-icon"],a,b))])};c.destroy=function(){this._prompt=null;this.handles.removeAll();this.menu?.destroy()};c.castVisibleElements=function(a){a={...A,...a};this.grid?.set("visibleElements",{...this.grid.visibleElements,selectionColumn:a.selectionColumn,columnMenus:a.columnMenus});return a};c.clearHighlights=function(){y.deprecated(B,"`FeatureTable.clearHighlights` is deprecated in favor of FeatureTable.highlightIds'",
{replacement:"FeatureTable.highlightIds",version:"4.25",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTable.html#highlightIds"});return this.viewModel.clearHighlights()};c.clearSelection=function(){y.deprecated(B,"`FeatureTable.clearSelection` is deprecated in favor of FeatureTable.highlightIds'",{replacement:"FeatureTable.highlightIds",version:"4.25",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTable.html#highlightIds"});
return this.viewModel.clearSelection()};c.clearSelectionFilter=function(){return this.viewModel.clearSelectionFilter()};c.deleteSelection=function(a){return this.highlightIds.length?a?(this._showDeletePrompt(),this.scheduleRender(),Promise.resolve()):this.viewModel.deleteSelection():Promise.resolve()};c.deselectRows=function(a){return this.viewModel.deselectRows(a)};c.filterBySelection=function(){return this.viewModel.filterBySelection()};c.findColumn=function(a){return this.viewModel.findColumn(a)};
c.hideColumn=function(a){this.grid?.hideColumn(a);this._syncMenuConfig()};c.refresh=function(){return this.viewModel.refresh()};c.showAllColumns=function(){return this.viewModel.showAllColumns()};c.showColumn=function(a){this.grid?.showColumn(a);this._syncMenuConfig()};c.sortColumn=function(a,b){return this.viewModel.sortColumn(a,b)};c.selectRows=function(a){return this.viewModel.selectRows(a)};c.scrollToIndex=function(a){return this.viewModel.scrollToIndex(a)};c.zoomToSelection=function(){return this.viewModel.zoomToSelection()};
c.render=function(){var {_prompt:a}=this;a=F.isSome(a)?k.tsx("calcite-scrim",null,this.renderPrompt(a)):null;return k.tsx("div",{bind:this,class:this.classes("esri-feature-table","esri-widget")},this.visibleElements.header?this._renderHeader():null,k.tsx("div",{class:"esri-feature-table__content"},"disabled"!==this.state&&this.grid?.render()),a)};c.renderPrompt=function({title:a,message:b,context:g,actions:l}){const h=!!l.secondary,m=k.tsx("calcite-button",{appearance:"solid",color:"danger"===g?"red":
"blue",width:h?"half":"full",onclick:l.primary.action,key:"prompt-primary-button"},l.primary.label);l=h?k.tsx("calcite-button",{appearance:"clear",color:"danger"===g?"red":"blue",width:"half",onclick:l.secondary.action,key:"prompt-secondary-button"},l.secondary.label):null;return k.tsx("div",{class:`${"esri-feature-table__prompt"}--${g}`},k.tsx("div",{class:"esri-feature-table__prompt__header"},k.tsx("calcite-icon",{icon:"exclamation-mark-triangle"}),k.tsx(L.Heading,{class:"esri-feature-table__prompt__header__heading",
level:2},a)),k.tsx("div",{class:"esri-feature-table__prompt__message"},b),k.tsx("div",{class:"esri-feature-table__prompt__divider"}),k.tsx("div",{class:"esri-feature-table__prompt__actions"},l,m))};c._renderHeader=function(){return k.tsx("div",{key:"header",class:"esri-feature-table__header"},this._renderLoader(),this._renderTitle(),this.visibleElements.menu?this._renderMenu():null)};c._renderTitle=function(){return k.tsx("div",{class:"esri-feature-table__title",key:"title"},this._getTitle())};c._getTitle=
function(){const {grid:a,highlightIds:b,layer:g,messages:l,viewModel:{size:h}}=this;return a&&g?z.substitute(l.header,{title:g.title,count:h,selected:b.length||0}):""};c._renderLoader=function(){const {state:a,store:b}=this.viewModel;return k.tsx("div",{class:"esri-feature-table__loader-container"},"loading"===a||b.syncing||b.querying?k.tsx("div",{class:"esri-feature-table__loader",key:"loader"}):null)};c._renderMenu=function(){return k.tsx("div",{class:"esri-feature-table__menu"},this.menu.render())};
c._onSelectionChange=function(a){const {added:b,removed:g}=a;a=b.map(h=>this.viewModel.store.getLocalItemByKey(h)||{objectId:h,feature:null,attachments:null,relatedRecords:null});const l=g.map(h=>this.viewModel.store.getLocalItemByKey(h)||{objectId:h,feature:null,attachments:null,relatedRecords:null});this.emit("selection-change",{added:a,removed:l})};c._syncMenuConfig=function(){this.menu?.set({...this.menuConfig,items:this._getMenuItems()})};c._getMenuItems=function(){const a=this.menuConfig?.items,
b=this._getDefaultMenuItems(),g=[];b?.length&&g.push(...b);a?.length&&g.push(...a);return g};c._getDefaultMenuItems=function(){const {highlightIds:a,messages:b,viewModel:g,visibleElements:l}=this,{menuItems:h}=l,m=[];h?.refreshData&&m.push(new n({selectionEnabled:!1,label:b?.refreshData,clickFunction:()=>this.refresh()}));if(a.length){const p=this._getSelectionFilter();h?.clearSelection&&m.push(new n({selectionEnabled:!1,label:b?.clearSelection,clickFunction:()=>this.highlightIds?.removeAll()}));
h?.zoomToSelection&&this.view&&m.push(new n({selectionEnabled:!1,label:b?.zoomToSelection,clickFunction:()=>this.viewModel.zoomToSelection()}));if(h?.selectedRecordsShowSelectedToggle&&(!p||a.length!==p.objectIds.length)){const q=b.showSelected,u=new n({selectionEnabled:!1,label:q,clickFunction:()=>{this.filterBySelection();u.set("label",q)}});m.push(u)}h?.deleteSelection&&this.editingEnabled&&this.layer?.capabilities?.operations?.supportsDelete&&m.push(new n({selectionEnabled:!1,label:b.deleteSelection,
clickFunction:this._showDeletePrompt}))}if(h?.selectedRecordsShowAllToggle&&this._hasSelectionFilter()){const p=b.showAllRecords,q=new n({selectionEnabled:!1,label:p,clickFunction:()=>{this.clearSelectionFilter();q.set("label",p)}});m.push(q)}h?.toggleColumns&&m.push(new n({iconClass:"esri-icon-right",label:b?.toggleColumns,clickFunction:this._toggleMenuItemSelectedIcon,items:g?.columns?.items.map(({header:p,hidden:q,path:u})=>new n({label:p||u,selected:!q,selectionEnabled:!0,iconClass:"esri-icon-check-mark",
clickFunction:()=>this._toggleColumnFromMenuItem(u)}))}));return m.length?m:null};c._toggleMenuItemSelectedIcon=function({item:a}){a?.set("iconClass",a?.selected?"esri-icon-down":"esri-icon-right")};c._toggleColumnFromMenuItem=function(a){const {grid:b,viewModel:g}=this;g.findColumn(a)?.hidden?b.showColumn(a):b.hideColumn(a)};c._showDeletePrompt=function(){const {messages:a,messagesCommon:b}=this,g=z.substitute(a.deleteSelectionCount,{count:this.highlightIds.length||0});this.menu.open=!1;this._prompt=
{title:g,message:a.deleteRecordsRemoved,context:"danger",actions:{primary:{label:b.delete,action:this._onDeleteSelectionClick},secondary:{label:a.keepRecords,action:()=>this._prompt=null}}}};c._onDeleteSelectionClick=function(){var a=t._asyncToGenerator(function*(){yield this.viewModel.deleteSelection();this._prompt=null});return function(){return a.apply(this,arguments)}}();c._getSelectionFilter=function(){return this.viewModel.activeFilters?.find(a=>"selection"===a.type)};c._hasSelectionFilter=
function(){return!!this._getSelectionFilter()};t._createClass(v,[{key:"activeFilters",get:function(){return this.viewModel.activeFilters}},{key:"activeSortOrders",get:function(){return this.viewModel.activeSortOrders}},{key:"attachmentsEnabled",get:function(){return this.viewModel.attachmentsEnabled},set:function(a){this.viewModel.attachmentsEnabled=a}},{key:"autoRefreshEnabled",get:function(){return this.viewModel.autoRefreshEnabled},set:function(a){this.viewModel.autoRefreshEnabled=a}},{key:"columnReorderingEnabled",
get:function(){return this.viewModel.columnReorderingEnabled},set:function(a){this.viewModel.columnReorderingEnabled=a}},{key:"columns",get:function(){return this.viewModel.columns}},{key:"editingEnabled",get:function(){return this.viewModel.editingEnabled},set:function(a){this.viewModel.editingEnabled=a}},{key:"fieldConfigs",get:function(){return this.viewModel.fieldConfigs},set:function(a){this.viewModel.fieldConfigs=a}},{key:"filterGeometry",get:function(){return this.viewModel.filterGeometry},
set:function(a){this.viewModel.filterGeometry=a}},{key:"grid",get:function(){return this.viewModel.grid}},{key:"hiddenFields",get:function(){return this.viewModel.hiddenFields},set:function(a){this.viewModel.hiddenFields=a}},{key:"highlightEnabled",get:function(){return this.viewModel.highlightEnabled},set:function(a){this.viewModel.highlightEnabled=a}},{key:"highlightIds",get:function(){return this.viewModel.highlightIds},set:function(a){this.viewModel.highlightIds=a}},{key:"highlightOnRowSelectEnabled",
get:function(){return this.viewModel.highlightEnabled},set:function(a){this.viewModel.highlightEnabled=a}},{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(a){this._overrideIfSome("label",a)}},{key:"layer",get:function(){return this.viewModel.layer},set:function(a){this.viewModel.layer=a}},{key:"messages",get:function(){return this.viewModel.messages},set:function(a){this.viewModel.messages=a}},{key:"messagesCommon",get:function(){return this.viewModel.messagesCommon},
set:function(a){this.viewModel.messagesCommon=a}},{key:"messagesURIUtils",get:function(){return this.viewModel.messagesURIUtils},set:function(a){this.viewModel.messagesURIUtils=a}},{key:"multiSortEnabled",get:function(){return this.viewModel.multiSortEnabled},set:function(a){this.viewModel.multiSortEnabled=a}},{key:"pageSize",get:function(){return this.viewModel.pageSize},set:function(a){this.viewModel.pageSize=a}},{key:"relatedRecordsEnabled",get:function(){return this.viewModel.relatedRecordsEnabled},
set:function(a){this.viewModel.relatedRecordsEnabled=a}},{key:"state",get:function(){return this.viewModel.state}},{key:"tableTemplate",get:function(){return this.viewModel.tableTemplate},set:function(a){this.viewModel.tableTemplate=a}},{key:"timeExtent",get:function(){return this.viewModel.timeExtent},set:function(a){this.viewModel.timeExtent=a}},{key:"view",get:function(){return this.viewModel.view},set:function(a){this.viewModel.view=a}}]);return v}(D.HandleOwnerMixin(I));e.__decorate([f.property({readOnly:!0})],
d.prototype,"activeFilters",null);e.__decorate([f.property({readOnly:!0})],d.prototype,"activeSortOrders",null);e.__decorate([f.property()],d.prototype,"attachmentsEnabled",null);e.__decorate([f.property()],d.prototype,"autoRefreshEnabled",null);e.__decorate([f.property()],d.prototype,"columnReorderingEnabled",null);e.__decorate([f.property({readOnly:!0})],d.prototype,"columns",null);e.__decorate([f.property()],d.prototype,"editingEnabled",null);e.__decorate([f.property()],d.prototype,"fieldConfigs",
null);e.__decorate([f.property()],d.prototype,"filterGeometry",null);e.__decorate([f.property({readOnly:!0})],d.prototype,"grid",null);e.__decorate([f.property()],d.prototype,"hiddenFields",null);e.__decorate([f.property()],d.prototype,"highlightEnabled",null);e.__decorate([f.property()],d.prototype,"highlightIds",null);e.__decorate([f.property()],d.prototype,"highlightOnRowSelectEnabled",null);e.__decorate([f.property()],d.prototype,"label",null);e.__decorate([f.property()],d.prototype,"layer",null);
e.__decorate([f.property(),x.messageBundle("esri/widgets/FeatureTable/t9n/FeatureTable")],d.prototype,"messages",null);e.__decorate([f.property(),x.messageBundle("esri/t9n/common")],d.prototype,"messagesCommon",null);e.__decorate([f.property(),x.messageBundle("esri/widgets/support/t9n/uriUtils")],d.prototype,"messagesURIUtils",null);e.__decorate([f.property({readOnly:!0})],d.prototype,"menu",void 0);e.__decorate([f.property()],d.prototype,"menuConfig",void 0);e.__decorate([f.property()],d.prototype,
"multiSortEnabled",null);e.__decorate([f.property()],d.prototype,"pageSize",null);e.__decorate([f.property()],d.prototype,"relatedRecordsEnabled",null);e.__decorate([f.property({readOnly:!0})],d.prototype,"state",null);e.__decorate([f.property()],d.prototype,"tableTemplate",null);e.__decorate([f.property()],d.prototype,"timeExtent",null);e.__decorate([f.property()],d.prototype,"view",null);e.__decorate([f.property()],d.prototype,"viewModel",void 0);e.__decorate([f.property()],d.prototype,"visibleElements",
void 0);e.__decorate([G.cast("visibleElements")],d.prototype,"castVisibleElements",null);return d=e.__decorate([H.subclass("esri.widgets.FeatureTable")],d)});