// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../geometry/SpatialReference".split(" "),function(g,e,b,h,f,p,k,l,m){b=function(a){function d(c){c=a.call(this,c)||this;c.addresses=null;c.categories=null;c.countryCode=null;c.locationType=null;c.outSpatialReference=null;return c}g._inheritsLoose(d,
a);return d}(h.JSONSupport);e.__decorate([f.property({type:[Object],json:{read:{reader:a=>a&&a.records?a.records.map(d=>d.attributes):null},write:{writer:(a,d)=>{const c=[];Array.isArray(a)&&a.forEach(n=>{c.push({attributes:n})});d.addresses={records:c}}}}})],b.prototype,"addresses",void 0);e.__decorate([f.property({type:[String],json:{read:{source:"category",reader:a=>a?a.split(","):null},write:{target:"category",writer:(a,d)=>{d.category=a?a.join(","):null}}}})],b.prototype,"categories",void 0);
e.__decorate([f.property({type:String,json:{read:{source:"sourceCountry"},write:{target:"sourceCountry"}}})],b.prototype,"countryCode",void 0);e.__decorate([f.property({type:String,json:{write:!0}})],b.prototype,"locationType",void 0);e.__decorate([f.property({type:m,json:{read:{source:"outSR"},write:{target:"outSR"}}})],b.prototype,"outSpatialReference",void 0);b=e.__decorate([l.subclass("esri.rest.support.AddressesToLocationsParameters")],b);b.from=k.ensureType(b);return b});