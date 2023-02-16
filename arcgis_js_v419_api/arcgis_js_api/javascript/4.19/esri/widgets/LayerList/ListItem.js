// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/aliasOf ../../core/accessorSupport/decorators/cast ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/Accessor ../../core/Collection ../../core/Identifiable ../../support/actions/ActionBase ../../support/actions/ActionButton ../../support/actions/ActionToggle ../../core/watchUtils ../../core/HandleOwner ../../layers/support/Sublayer ../../support/actions/ActionSlider ./ListItemPanel ./support/layerListUtils".split(" "),
function(p,c,q,F,d,r,w,G,x,H,I,J,b,m,y,z,A,B,h,C,D,E,t,k){var l;q=m.ofType({key:"type",defaultKeyValue:"button",base:z,typeMap:{button:A,toggle:B,slider:E}});const u=m.ofType(q);b=l=function(v){function n(a){a=v.call(this,a)||this;a.actionsSections=new u;a.actionsOpen=!1;a.children=new (m.ofType(l));a.childrenSortable=!0;a.error=null;a.layer=null;a.layerView=null;a.open=!1;a.panel=null;a.parent=null;a.sortable=!0;a.view=null;a.visible=null;return a}p._inheritsLoose(n,v);var g=n.prototype;g.initialize=
function(){this.handles.add([h.init(this,"layer",a=>this._watchLayerProperties(a)),h.init(this,"view",a=>this._updateChildren(a)),h.init(this,"panel",a=>this._setListItemOnPanel(a)),h.init(this,["layer","view"],()=>this._getLayerView())])};g.destroy=function(){this.view=null};g.castPanel=function(a){this.get("panel.open")&&!a.hasOwnProperty("open")&&(a.open=!0);return a?new t(a):null};g.clone=function(){return new l({actionsSections:this.actionsSections.clone(),actionsOpen:this.actionsOpen,children:this.children.clone(),
layer:this.layer,open:this.open,panel:this.panel,title:this.title,view:this.view,visible:this.visible})};g._setListItemOnPanel=function(a){a&&(a.listItem=this)};g._updateChildren=function(a){const e=this.children;e&&e.forEach(f=>f.view=a)};g._addChildren=function(a){this.handles.remove("child-list-mode");this.children.removeAll();if(a){a.forEach(f=>{this.handles.add(h.watch(f,"listMode",()=>this._addChildren(a)),"child-list-mode")});var e=[];a.filter(f=>"hide"!==k.findLayerListMode(f)).forEach(f=>
{k.canDisplayLayer(f)&&(f=new l({layer:f,parent:this,view:this.view}),e.unshift(f))});this.children.addMany(e)}};g._watchSublayerChanges=function(a){a&&this.handles.add(a.on("change",()=>{this._addChildren(a)}),"layer")};g._initializeChildLayers=function(a){this._addChildren(a);this._watchSublayerChanges(a)};g._watchLayerProperties=function(a){if(this.handles&&(this.handles.remove("layer"),this.handles.remove("child-list-mode"),a))if(this.handles.add(h.watch(a,"listMode",()=>this._watchLayerProperties(a)),
"layer"),"hide-children"===k.findLayerListMode(a))this.children.removeAll();else{var e=k.getNormalizedChildLayerProperty(a);e&&this.handles.add(h.init(a,e,()=>{a.hasOwnProperty(e)&&this._initializeChildLayers(a[e])}),"layer")}};g._getLayerView=async function(){const {layer:a,view:e}=this;if(a&&e)try{const f=await e.whenLayerView(a);f.layer===this.layer&&this._set("layerView",f)}catch{}};g._isLayerUpdating=function(a){return a instanceof D?!1:a&&"loading"===a.loadStatus};p._createClass(n,[{key:"title",
get:function(){const a=this.get("layer.layer");return(!a||a&&this.get("layer.layer.loaded"))&&this.get("layer.title")||this.get("layer.attributes.title")||""},set:function(a){void 0===a?this._clearOverride("title"):this._override("title",a)}},{key:"updating",get:function(){const a=this.layerView;return a?a.updating:this._isLayerUpdating(this.layer)}},{key:"visibleAtCurrentScale",get:function(){return!k.isLayerOutsideScaleRange(this.layer,this.get("view.scale"))}},{key:"visibilityMode",get:function(){return k.findLayerVisibilityMode(this.layer)}}]);
return n}(y.IdentifiableMixin(C.HandleOwnerMixin(b)));c.__decorate([d.property({type:u})],b.prototype,"actionsSections",void 0);c.__decorate([d.property()],b.prototype,"actionsOpen",void 0);c.__decorate([d.property({type:m})],b.prototype,"children",void 0);c.__decorate([d.property()],b.prototype,"childrenSortable",void 0);c.__decorate([r.aliasOf("layer.loadError?")],b.prototype,"error",void 0);c.__decorate([d.property()],b.prototype,"layer",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,
"layerView",void 0);c.__decorate([d.property()],b.prototype,"open",void 0);c.__decorate([d.property({type:t})],b.prototype,"panel",void 0);c.__decorate([w.cast("panel")],b.prototype,"castPanel",null);c.__decorate([d.property()],b.prototype,"parent",void 0);c.__decorate([d.property()],b.prototype,"sortable",void 0);c.__decorate([d.property()],b.prototype,"title",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"updating",null);c.__decorate([d.property({value:null})],b.prototype,"view",void 0);
c.__decorate([r.aliasOf("layer.visible")],b.prototype,"visible",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"visibleAtCurrentScale",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"visibilityMode",null);return b=l=c.__decorate([x.subclass("esri.widgets.LayerList.ListItem")],b)});