// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/maybe ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/aliasOf ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/promiseUtils ../../core/Collection ../../core/collectionUtils ../../core/Handles ../support/InteractiveToolViewModel ../../views/3d/interactive/analysisTools/slice/SliceTool ../../views/3d/interactive/graphics/Slice".split(" "),
function(k,e,b,g,r,B,f,t,C,u,D,E,F,v,m,n,w,x,y,z){const A=r.getLogger("esri.widgets.Slice.SliceViewModel"),l=new Set;b=function(p){function h(a){a=p.call(this,a)||this;a.supportedViewType="3d";a.handles=new w;a.model=new z.Slice;a.shape=null;l.add(k._assertThisInitialized(a));return a}k._inheritsLoose(h,p);var c=h.prototype;c.initialize=function(){this.handles.add(this.watch("shape",(a,d)=>{g.isNone(d)&&g.isSome(a)?this.tool||this.creatingTool||this.createTool():g.isSome(d)&&g.isNone(a)&&this.removeTool()},
!0))};c.destroy=function(){l.delete(this);this.handles.destroy()};c.start=function(){l.forEach(a=>{a.view===this.view&&a!==this&&a.clear()});return this.createTool()};c.clear=function(){this.removeTool();this._set("excludeGroundSurface",!1);this._set("excludedLayers",new m)};c.removeSliceAndStart=function(){this.removeTool();this.shape=null;return this.start()};c.enterExcludeLayerMode=function(){this.tool&&this.tool.enterExcludeLayerMode()};c.exitExcludeLayerMode=function(){this.tool&&this.tool.exitExcludeLayerMode()};
c._updateToolOrRecreate=function(a){this.tool?a(this.tool):this.creatingTool&&v.ignoreAbortErrors(this.createTool())};c.createToolParams=function(){return{toolConstructor:y,constructorArguments:()=>({excludeGroundSurface:this.excludeGroundSurface,excludedLayers:this.excludedLayers,tiltEnabled:this.tiltEnabled,model:this.model})}};c.logUnsupportedError=function(){this.logError("Slice widget is not implemented for MapView")};c.logError=function(...a){A.error(...a)};k._createClass(h,[{key:"state",get:function(){return this.isDisabled?
"disabled":this.tool?this.tool.state:"ready"}},{key:"tiltEnabled",get:function(){var a,d,q;return null!=(a=null!=(d=null==(q=this.tool)?void 0:q.tiltEnabled)?d:this._get("tiltEnabled"))?a:!1},set:function(a){this._set("tiltEnabled",a);this._updateToolOrRecreate(d=>d.tiltEnabled=a)}},{key:"excludedLayers",get:function(){return this.tool?this.tool.excludedLayers:this._get("excludedLayers")||new m},set:function(a){this._set("excludedLayers",n.referenceSetter(a,this.excludedLayers));this._updateToolOrRecreate(d=>
d.excludedLayers=a)}},{key:"excludeGroundSurface",get:function(){return this.tool?this.tool.excludeGroundSurface:this._get("excludeGroundSurface")||!1},set:function(a){this._set("excludeGroundSurface",a);this._updateToolOrRecreate(d=>d.excludeGroundSurface=a)}}]);return h}(x.InteractiveToolViewModel);e.__decorate([f.property({readOnly:!0})],b.prototype,"state",null);e.__decorate([f.property()],b.prototype,"tool",void 0);e.__decorate([f.property()],b.prototype,"model",void 0);e.__decorate([f.property({aliasOf:"model.plane"})],
b.prototype,"shape",void 0);e.__decorate([f.property({type:Boolean})],b.prototype,"tiltEnabled",null);e.__decorate([t.aliasOf("tool.layersMode")],b.prototype,"layersMode",void 0);e.__decorate([f.property({cast:n.castForReferenceSetter})],b.prototype,"excludedLayers",null);e.__decorate([f.property({nonNullable:!0})],b.prototype,"excludeGroundSurface",null);return b=e.__decorate([u.subclass("esri.widgets.slice.SliceViewModel")],b)});