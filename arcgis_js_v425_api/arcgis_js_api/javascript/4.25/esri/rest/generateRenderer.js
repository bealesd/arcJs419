// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../request ../renderers/support/jsonUtils ./query/executeQuery ./utils ../kernel ../core/urlUtils ./query/support/AttachmentInfo ./support/AttachmentQuery ../geometry/Extent ../geometry/Geometry ../geometry/Multipoint ../geometry/Point ../geometry/Polygon ../geometry/Polyline ../geometry/support/normalizeUtils ../core/Error ../core/pbf ../core/unitUtils ../geometry/support/spatialReferenceUtils ./support/Query ../geometry ./support/FeatureSet ../layers/graphics/featureConversionUtils ./support/RelationshipQuery ./support/TopFeaturesQuery ./support/StatisticDefinition".split(" "),
function(n,r,t,u,v,w,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,x,O,P,Q,R,S,p){function l(){l=r._asyncToGenerator(function*(b,a,c,d){b=w.parseUrl(b);const {source:e,checkValueRange:g}=a;({classificationDefinition:a}=c);const f={...c.toJSON(),f:"json"};c=null;c="esri.tasks.support.ClassBreaksDefinition"===a.declaredClass?a.classificationField:a.attributeField;e&&(a={source:e?.toJSON()},f.layer=JSON.stringify(a));f.classificationDef&&(f.classificationDef=JSON.stringify(f.classificationDef));a={query:f};d&&(a={...d,
...a});const h={url:b.path,field:c,checkValueRange:g};return t(b.path+"/generateRenderer",a).then(k=>y(h,k))});return l.apply(this,arguments)}function y(b,a){const {field:c,checkValueRange:d,url:e}=b,g=a&&a.data;if(g){if(!d)return b=q(g),Promise.resolve(b);b=new p({statisticType:"min",onStatisticField:c});a=new p({statisticType:"max",onStatisticField:c});b=new x({outStatistics:[b,a]});return v.executeQuery(e,b).then(f=>{f=f.features[0].attributes;let h=null,k=null;for(const m in f)0===m.toLowerCase().indexOf("min")?
h=f[m]:k=f[m];return q(g,h,k)})}}function q(b,a,c){if("classBreaks"===b.type){const d=u.fromJSON(b);return{classBreaks:d.classBreakInfos.map((e,g)=>{0===g&&void 0!==a&&null!==a&&(e.minValue=a);g===d.classBreakInfos.length-1&&void 0!==c&&null!==c&&(e.maxValue=c);return{minValue:e.minValue,maxValue:e.maxValue,label:e.label}}),normalizationTotal:d.normalizationTotal}}return{uniqueValues:b.uniqueValueInfos.map((d,e)=>{0===e&&void 0!==a&&null!==a&&(d.value=a);e===b.uniqueValueInfos.length-1&&void 0!==
c&&null!==c&&(d.value=c);return{count:d.count,value:d.value,label:d.label}})}}n.generateRenderer=function(b,a,c,d){return l.apply(this,arguments)};Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});