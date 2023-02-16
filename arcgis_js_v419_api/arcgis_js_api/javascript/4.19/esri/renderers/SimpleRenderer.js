// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/lang ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ./Renderer ./mixins/VisualVariablesMixin ./support/commonProperties".split(" "),function(k,e,d,m,v,w,g,n,p,x,y,z,q,r,t){var h;d=h=function(l){function f(a){a=l.call(this,
a)||this;a.description=null;a.label=null;a.symbol=null;a.type="simple";return a}k._inheritsLoose(f,l);var c=f.prototype;c.collectRequiredFields=async function(a,b){await Promise.all([this.collectSymbolFields(a,b),this.collectVVRequiredFields(a,b)])};c.collectSymbolFields=async function(a,b){await Promise.all(this.getSymbols().map(u=>u.collectRequiredFields(a,b)))};c.getSymbol=function(a,b){return this.symbol};c.getSymbolAsync=async function(a,b){return this.symbol};c.getSymbols=function(){return this.symbol?
[this.symbol]:[]};c.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce((a,b)=>a+b.getAttributeHash(),"")};c.getMeshHash=function(){return this.getSymbols().reduce((a,b)=>a+=JSON.stringify(b),"")};c.clone=function(){return new h({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:m.clone(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})};k._createClass(f,[{key:"arcadeRequired",get:function(){return this.arcadeRequiredForVisualVariables}}]);
return f}(r.VisualVariablesMixin(q));e.__decorate([g.property({type:String,json:{write:!0}})],d.prototype,"description",void 0);e.__decorate([g.property({type:String,json:{write:!0}})],d.prototype,"label",void 0);e.__decorate([g.property(t.rendererSymbolProperty)],d.prototype,"symbol",void 0);e.__decorate([n.enumeration({simple:"simple"})],d.prototype,"type",void 0);return d=h=e.__decorate([p.subclass("esri.renderers.SimpleRenderer")],d)});