// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../request ../geometry/support/normalizeUtils ./utils ../core/queryUtils ./networkUtils ../tasks/support/ServiceAreaSolveResult".split(" "),function(n,q,r,t,u,c,v){const w=u.createQueryParamsHelper({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:k=>k.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},
returnPointBarriers:{name:"returnBarriers"},travelMode:!0});n.solve=async function(k,a,p){const l=[],f=[],d={},g={},m=t.parseUrl(k);a.facilities&&a.facilities.features&&c.collectGeometries(a.facilities.features,f,"facilities.features",d);a.pointBarriers&&a.pointBarriers.features&&c.collectGeometries(a.pointBarriers.features,f,"pointBarriers.features",d);a.polylineBarriers&&a.polylineBarriers.features&&c.collectGeometries(a.polylineBarriers.features,f,"polylineBarriers.features",d);a.polygonBarriers&&
a.polygonBarriers.features&&c.collectGeometries(a.polygonBarriers.features,f,"polygonBarriers.features",d);return r.normalizeCentralMeridian(f).then(b=>{for(const e in d){const h=d[e];l.push(e);g[e]=b.slice(h[0],h[1])}return c.isInputGeometryZAware(g,l)?c.fetchServiceDescription(m.path).catch(()=>({dontCheck:!0})):Promise.resolve({dontCheck:!0})}).then(b=>{("dontCheck"in b?b.dontCheck:b.hasZ)||c.dropZValuesOffInputGeometry(g,l);for(const e in g)g[e].forEach((h,x)=>{a.get(e)[x].geometry=h});b={query:{...m.query,
f:"json",...w.toQueryParams(a)}};p&&(b={...p,...b});return q(`${m.path}/solveServiceArea`,b)}).then(b=>v.fromJSON(b.data))};Object.defineProperty(n,"__esModule",{value:!0})});