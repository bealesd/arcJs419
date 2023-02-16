// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../Color ../symbols ../core/Clonable ../core/maybe ../core/screenUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ../layers/support/fieldUtils ./Renderer ./mixins/VisualVariablesMixin ./support/AttributeColorInfo ./support/OthersCategory ./support/PieChartLegendOptions ../symbols/SimpleMarkerSymbol ../symbols/SimpleFillSymbol ../symbols/SimpleLineSymbol".split(" "),
function(h,c,m,b,q,r,t,d,E,F,u,v,w,x,y,z,n,A,B,C,D){b=function(p){function k(a){a=p.call(this,a)||this;a.attributes=null;a.backgroundFillSymbol=null;a.defaultColor=new m([0,0,0,0]);a.defaultLabel=null;a.holePercentage=0;a.othersCategory=new n.OthersCategory;a.legendOptions=null;a.outline=null;a.size=12;a.type="pie-chart";return a}h._inheritsLoose(k,p);var f=k.prototype;f.getSymbol=function(){return new B({size:this.size?this.size/2+(this.outline?.width||0):0})};f.getSymbolAsync=function(){var a=h._asyncToGenerator(function*(){return this.getSymbol()});
return function(){return a.apply(this,arguments)}}();f.getSymbols=function(){return[this.getSymbol(),this.backgroundFillSymbol].filter(r.isSome)};f.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce((a,e)=>a+e.getAttributeHash(),"")};f.getMeshHash=function(){return this.getSymbols().reduce((a,e)=>a+=JSON.stringify(e),"")};f.collectRequiredFields=function(){var a=h._asyncToGenerator(function*(e,l){yield this.collectVVRequiredFields(e,l);for(const g of this.attributes)g.valueExpression&&
(yield w.collectArcadeFieldNames(e,l,g.valueExpression)),g.field&&e.add(g.field)});return function(e,l){return a.apply(this,arguments)}}();return k}(y.VisualVariablesMixin(q.ClonableMixin(x)));c.__decorate([d.property({type:[z],json:{write:!0}})],b.prototype,"attributes",void 0);c.__decorate([d.property({type:C,json:{default:null,write:!0}})],b.prototype,"backgroundFillSymbol",void 0);c.__decorate([d.property({type:m,json:{write:!0}})],b.prototype,"defaultColor",void 0);c.__decorate([d.property({type:String,
json:{write:!0}})],b.prototype,"defaultLabel",void 0);c.__decorate([d.property({type:Number,range:{min:0,max:1},json:{write:!0}})],b.prototype,"holePercentage",void 0);c.__decorate([d.property({type:n.OthersCategory,json:{write:!0}})],b.prototype,"othersCategory",void 0);c.__decorate([d.property({type:A.PieChartLegendOptions,json:{write:!0}})],b.prototype,"legendOptions",void 0);c.__decorate([d.property({type:D,json:{default:null,write:!0}})],b.prototype,"outline",void 0);c.__decorate([d.property({type:Number,
cast:t.toPt,json:{write:!0}})],b.prototype,"size",void 0);c.__decorate([u.enumeration({pieChart:"pie-chart"})],b.prototype,"type",void 0);return b=c.__decorate([v.subclass("esri.renderers.PieChartRenderer")],b)});