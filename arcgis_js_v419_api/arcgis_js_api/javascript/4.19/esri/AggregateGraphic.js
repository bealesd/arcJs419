// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("./chunks/_rollupPluginBabelHelpers ./chunks/tslib.es6 ./core/has ./core/Logger ./core/accessorSupport/ensureType ./core/accessorSupport/decorators/property ./core/jsonMap ./core/accessorSupport/decorators/subclass ./core/urlUtils ./core/uuid ./portal/support/resourceExtension ./Graphic".split(" "),function(k,c,b,n,p,g,q,l,r,t,u,m){var d;b=d=function(h){function e(){var a=h.apply(this,arguments)||this;a.isAggregate=!0;return a}k._inheritsLoose(e,h);var f=e.prototype;f.getEffectivePopupTemplate=
function(a){return this.popupTemplate?this.popupTemplate:(a=this.sourceLayer&&this.sourceLayer.featureReduction)&&"popupTemplate"in a&&a.popupEnabled?a.popupTemplate:null};f.getObjectId=function(){return this.objectId};f.clone=function(){return new d({objectId:this.objectId,...this.cloneProperties()})};return e}(m);c.__decorate([g.property({type:Boolean})],b.prototype,"isAggregate",void 0);c.__decorate([g.property({type:Number,json:{read:!0}})],b.prototype,"objectId",void 0);return b=d=c.__decorate([l.subclass("esri.AggregateGraphic")],
b)});