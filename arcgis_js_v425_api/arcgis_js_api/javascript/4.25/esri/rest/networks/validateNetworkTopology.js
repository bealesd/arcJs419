// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","./support/ValidateNetworkTopologyResult"],function(f,k,l,d,m){function e(){e=k._asyncToGenerator(function*(c,b,a){c=d.parseUrl(c);const g=b.toJSON();b.validationSet&&(g.validationSet=JSON.stringify(b.validationSet));b=d.encode({...c.query,...g,f:"json"});a=d.asValidOptions(b,{...a,method:"post"});({data:a}=yield l(`${c.path}/validateNetworkTopology`,a));if(!a)return null;a=m.fromJSON(a);a.serviceEdits=a.serviceEdits.map(h=>
({layerId:h.id,editedFeatures:h.editedFeatures}));return a});return e.apply(this,arguments)}f.validateNetworkTopology=function(c,b,a){return e.apply(this,arguments)};Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});