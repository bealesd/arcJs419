// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../layers/support/layerUtils"],function(m,p){m.findToFindRESTParameters=function(c){const {contains:q,dynamicLayers:g,geometryPrecision:r,layerDefinitions:e,layerIds:h,maxAllowableOffset:t,outSR:k,returnGeometry:u,searchFields:n,searchText:v}=c.toJSON();c={contains:q,returnGeometry:u,geometryPrecision:r,maxAllowableOffset:t,searchText:v};h&&(c.layers=h.join(","));n&&(c.searchFields=n.join(","));k&&(c.sr=k.wkid||JSON.stringify(k));if(e){var a=[];for(var d=0;d<e.length;d++){var f=
e[d];a[f.id]=f.definitionExpression}c.layerDefs=p.serializeLayerDefinitions(a)}if(g&&g.length){a=[];for(d=0;d<g.length;d++){var b=g[d];const l=b.id;!b.subLayerIds&&h&&-1!==h.indexOf(l)&&(f={id:l},f.source=b.source,b=null,e&&e.length&&(b=(b=e.filter(w=>w.id===l)[0])&&b.definitionExpression),b&&(f.definitionExpression=b),a.push(f))}a=JSON.stringify(a);"[]"===a&&(a="[{}]");c.dynamicLayers=a}return c};Object.defineProperty(m,"__esModule",{value:!0})});