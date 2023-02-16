/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{clone as e}from"../core/lang.js";import{i as s}from"./Logger.js";import{f as t,d as a,e as n}from"./utils5.js";class o{constructor(e){this.name=null,this.label=null,this.description=null,this.supportedBasemaps=null,this.basemapGroups=null,this.schemes=null;const{name:s,label:a,description:n,schemes:o}=e;this.name=s,this.label=a,this.description=n,this.schemes=o;const r=e.basemapGroups||t;let m=[];if(r)for(const e in r)m=m.concat(r[e]);this.supportedBasemaps=m,this.basemapGroups=r}isBasemapSupported(e){const s=a(e,this.supportedBasemaps);return!!(s&&this.supportedBasemaps.indexOf(s)>-1)}getRawSchemes(t){const{basemapId:o,basemapTheme:r}=function(e,t,o){let r=null,m=null;if(t&&(r=a(t,e,!1),r)){const e=n(r);s(e)&&(m=e)}return!r&&o&&(r="dark"===o?"dark-gray":"gray",m=o),r||m||(r="gray",m="light"),{basemapId:r,basemapTheme:m}}(this.supportedBasemaps,t.basemap,t.basemapTheme);let m=r;if(o){const e=n(o,this.basemapGroups);s(e)&&(m=e)}let p=t.geometryType;"multipoint"===p?p="point":"mesh"===p&&(p="polygon");const i=this.schemes[p]||this.schemes.default;return{schemesInfo:e(i[m]),basemapId:o,basemapTheme:r}}}function r(e){const s=e.themeDictionary,t=new Map;for(const e in s){const a=s[e];t.set(e,new o(a))}return t}function m(e,s){const t=[];return e.forEach((e=>{e.isBasemapSupported(s)&&t.push({name:e.name,label:e.label,description:e.description,basemaps:[...e.supportedBasemaps]})})),t}function p(e,s){if(!e)return;if(!s)return;let t=null;const a=[s.primaryScheme,...s.secondarySchemes];for(const s of a)if(s.name.toLowerCase()===e.toLowerCase()){t=s;break}return t}function i(e,s,t){if(!e&&!s)return[];if(!t)return[];const a=!(e&&e.length),n=!(s&&s.length),o=[t.primaryScheme,...t.secondarySchemes],r=[];for(const t of o){const o=!!a||e.some((e=>t.tags.indexOf(e)>-1)),m=!n&&s.some((e=>t.tags.indexOf(e)>-1));o&&!m&&r.push(t)}return r}function c(e){const s=e.theme;if(s)return s.getRawSchemes({basemap:e.basemap,geometryType:e.geometryType,basemapTheme:e.basemapTheme})}export{c as a,i as b,r as c,p as f,m as g};
