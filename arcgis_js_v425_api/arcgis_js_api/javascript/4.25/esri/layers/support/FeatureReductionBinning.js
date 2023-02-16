// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../PopupTemplate ../../renderers/ClassBreaksRenderer ../../renderers/DictionaryRenderer ../../renderers/DotDensityRenderer ../../renderers/HeatmapRenderer ../../renderers/PieChartRenderer ../../renderers/Renderer ../../renderers/SimpleRenderer ../../renderers/UniqueValueRenderer ../../renderers/support/jsonUtils ../../renderers/support/types ../../symbols ../../core/lang ../../core/object ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../core/accessorSupport/extensions/serializableProperty/reader ./AggregateField ./commonProperties ./FeatureReduction ./LabelClass".split(" "),
function(t,d,u,b,I,J,K,L,M,v,w,x,y,z,h,A,e,N,p,B,C,D,E,F,q,G,H){var k;const l=E.createTypeReader({types:z.symbolTypesRenderer});b=k=function(r){function m(a){a=r.call(this,a)||this;a.type="binning";a.binType="geohash";a.fixedBinLevel=3;a.labelingInfo=null;a.labelsVisible=!0;a.popupEnabled=!0;a.popupTemplate=null;a.fields=[];a.renderer=null;return a}t._inheritsLoose(m,r);var n=m.prototype;n.writeFields=function(a,c,g){a=a.filter(f=>"avg_angle"!==f.statisticType).map(f=>f.toJSON());A.setDeepValue(g,
a,c)};n.readRenderer=function(a,c,g){return(a=c.drawingInfo?.renderer)?x.read(a,c,g)??void 0:c.defaultSymbol?c.types&&c.types.length?new w({defaultSymbol:l(c.defaultSymbol,c,g),field:c.typeIdField,uniqueValueInfos:c.types.map(f=>({id:f.id,symbol:l(f.symbol,f,g)}))}):new v({symbol:l(c.defaultSymbol,c,g)}):null};n.clone=function(){return new k({fields:h.clone(this.fields),fixedBinLevel:this.fixedBinLevel,labelingInfo:h.clone(this.labelingInfo),labelsVisible:this.labelsVisible,popupEnabled:this.popupEnabled,
popupTemplate:h.clone(this.popupTemplate),renderer:h.clone(this.renderer)})};return m}(G.FeatureReduction);d.__decorate([p.enumeration({binning:"binning"})],b.prototype,"type",void 0);d.__decorate([p.enumeration({geohash:"geohash"})],b.prototype,"binType",void 0);d.__decorate([e.property({type:Number,range:{min:1,max:9},json:{write:!0}})],b.prototype,"fixedBinLevel",void 0);d.__decorate([e.property({type:[H],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],
b.prototype,"labelingInfo",void 0);d.__decorate([e.property(q.labelsVisible)],b.prototype,"labelsVisible",void 0);d.__decorate([e.property(q.popupEnabled)],b.prototype,"popupEnabled",void 0);d.__decorate([e.property({type:u,json:{name:"popupInfo",write:!0}})],b.prototype,"popupTemplate",void 0);d.__decorate([e.property({type:[F],json:{write:!0}})],b.prototype,"fields",void 0);d.__decorate([D.writer("fields")],b.prototype,"writeFields",null);d.__decorate([e.property({types:y.rendererTypes,json:{write:{target:"drawingInfo.renderer"}}})],
b.prototype,"renderer",void 0);d.__decorate([B.reader("renderer",["drawingInfo.renderer"])],b.prototype,"readRenderer",null);return b=k=d.__decorate([C.subclass("esri.layers.support.FeatureReductionBinning")],b)});