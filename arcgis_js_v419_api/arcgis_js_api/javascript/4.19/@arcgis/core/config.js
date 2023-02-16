/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{g as e}from"./core/lang.js";import{d as r}from"./chunks/object.js";const s={apiKey:void 0,applicationUrl:e.location&&e.location.href,assetsPath:"",fontsUrl:"https://static.arcgis.com/fonts",geometryService:null,geometryServiceUrl:"https://utility.arcgisonline.com/arcgis/rest/services/Geometry/GeometryServer",geoRSSServiceUrl:"https://utility.arcgis.com/sharing/rss",kmlServiceUrl:"https://utility.arcgis.com/sharing/kml",portalUrl:"https://www.arcgis.com",workers:{loaderConfig:{has:{},paths:{},map:{},packages:[]}},request:{httpsDomains:["arcgis.com","arcgisonline.com","esrikr.com","premiumservices.blackbridge.com","esripremium.accuweather.com","gbm.digitalglobe.com","firstlook.digitalglobe.com","msi.digitalglobe.com"],interceptors:[],maxUrlLength:2e3,proxyRules:[],proxyUrl:null,timeout:6e4,trustedServers:[],useIdentity:!0},log:{interceptors:[],level:null}};if(e.esriConfig&&(r(s,e.esriConfig,!0),delete s.has),!s.assetsPath){const e=import.meta.url;s.assetsPath=e.slice(0,e.indexOf("@arcgis/"))}s.baseUrl&&console.warn("[esri.config]","baseUrl has been replaced by assetsPath"),Object.defineProperty(s,"baseUrl",{set(){console.warn("[esri.config]","baseUrl has been replaced by assetsPath")}}),s.request.corsEnabledServers=[],s.request.corsEnabledServers.push=function(){return console.warn("[esri.config]","request.corsEnabledServers is not supported and will be removed in a future release. See http://esriurl.com/cors8664"),0};export default s;