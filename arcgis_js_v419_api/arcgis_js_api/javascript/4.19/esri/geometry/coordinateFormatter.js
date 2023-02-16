// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../core/Error","./SpatialReference","./Point","../chunks/pe"],function(g,n,l,m,c){function k(a){let b=null;a||(a=l.WGS84);if(a.wkid){if(b=c.PeFactory.geogcs(a.wkid),!b)throw new n("coordinate-formatter:invalid-spatial-reference","wkid is not valid");}else if(a.wkt){if(b=c.PeFactory.fromString(c.PeDefs.PE_TYPE_GEOGCS,a.wkt),!b)throw new n("coordinate-formatter:invalid-spatial-reference","wkt is not valid");}else throw new n("coordinate-formatter:invalid-spatial-reference","wkid and wkt are missing");
return b}function q(a){let b=-1;switch(a){case "automatic":b=c.PeNotationMgrs.PE_MGRS_STYLE_AUTO;break;case "new-180-in-zone-01":b=c.PeNotationMgrs.PE_MGRS_STYLE_NEW|c.PeNotationMgrs.PE_MGRS_180_ZONE_1_PLUS;break;case "new-180-in-zone-60":b=c.PeNotationMgrs.PE_MGRS_STYLE_NEW;break;case "old-180-in-zone-01":b=c.PeNotationMgrs.PE_MGRS_STYLE_OLD|c.PeNotationMgrs.PE_MGRS_180_ZONE_1_PLUS;break;case "old-180-in-zone-60":b=c.PeNotationMgrs.PE_MGRS_STYLE_OLD}return b}function r(a){let b=-1;switch(a){case "latitude-band-indicators":b=
c.PeNotationUtm.PE_UTM_OPTS_NONE;break;case "north-south-indicators":b=c.PeNotationUtm.PE_UTM_OPTS_NS}return b}g.fromLatitudeLongitude=function(a,b){const d=[];a=a.replace(/\u2032/g,"'");const e=k(b);return c.PeNotationDms.dms_to_geog(e,1,[a],d)?new m(d[0][0],d[0][1],b||l.WGS84):null};g.fromMgrs=function(a,b,d){const e=[],f=q(d);if(-1===f)return console.warn(`invalid conversionMode: ${d}`),null;d=k(b);return c.PeNotationMgrs.mgrs_to_geog_extended(d,1,[a],f,e)?new m(e[0][0],e[0][1],b||l.WGS84):null};
g.fromUsng=function(a,b){const d=[];!b&&/\(.+27/.test(a)&&(b=l.GCS_NAD_1927);const e=k(b);return c.PeNotationUsng.usng_to_geog(e,1,[a],d)?new m(d[0][0],d[0][1],b||l.WGS84):null};g.fromUtm=function(a,b,d){const e=[],f=r(d);if(-1===f)return console.warn(`invalid conversionMode: ${d}`),null;d=k(b);return c.PeNotationUtm.utm_to_geog(d,1,[a],f,e)?new m(e[0][0],e[0][1],b||l.WGS84):null};g.isLoaded=function(){return c.isLoaded()};g.isSupported=function(){return c.isSupported()};g.load=function(){return c.load()};
g.toLatitudeLongitude=function(a,b,d=0){const e=[[a.x,a.y]],f=[];a=k(a.spatialReference);let h=0;switch(b){case "dd":h=c.PeNotationDms.geog_to_dd(a,1,e,d,f);break;case "ddm":h=c.PeNotationDms.geog_to_ddm(a,1,e,d,f);break;case "dms":h=c.PeNotationDms.geog_to_dms(a,1,e,d,f);break;default:return console.warn(`invalid format: ${b}`),null}return h?f[0]:null};g.toMgrs=function(a,b,d=0,e=!1){const f=[[a.x,a.y]],h=[];a=k(a.spatialReference);let p=q(b);if(-1===p)return console.warn(`invalid conversionMode: ${b}`),
null;e&&(p|=c.PeNotationMgrs.PE_MGRS_ADD_SPACES);return c.PeNotationMgrs.geog_to_mgrs_extended(a,1,f,d,!1,p,h)?h[0]:null};g.toUsng=function(a,b=0,d=!1){const e=[[a.x,a.y]],f=[];a=k(a.spatialReference);return c.PeNotationUsng.geog_to_usng(a,1,e,b,!1,d,f)?f[0]:null};g.toUtm=function(a,b,d=!1){const e=[[a.x,a.y]],f=[];a=k(a.spatialReference);let h=r(b);if(-1===h)return console.warn(`invalid conversionMode: ${b}`),null;d&&(h|=c.PeNotationUtm.PE_UTM_OPTS_ADD_SPACES);return c.PeNotationUtm.geog_to_utm(a,
1,e,h,f)?f[0]:null};Object.defineProperty(g,"__esModule",{value:!0})});