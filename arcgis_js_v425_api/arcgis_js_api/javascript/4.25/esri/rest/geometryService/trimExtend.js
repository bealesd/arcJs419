// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../geometry ../../request ../utils ../operations/trimExtend ../support/TrimExtendParameters ../../geometry/Polyline".split(" "),function(d,g,t,h,e,k,l,m){function c(){c=g._asyncToGenerator(function*(b,a,f){a=l.from(a);const n=k.trimExtendToRESTParameters(a);b=e.parseUrl(b);const p=a.sr;a=e.asValidOptions({...b.query,f:"json",...n},f);return h(b.path+"/trimExtend",a).then(({data:q})=>(q.geometries||[]).map(({paths:r})=>new m({spatialReference:p,
paths:r})))});return c.apply(this,arguments)}d.trimExtend=function(b,a,f){return c.apply(this,arguments)};Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});