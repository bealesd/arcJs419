/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{a as r}from"./maybe.js";import{i as t}from"./networkEnums.js";function e(e,i){if(r(e))return null;const s={},a=new RegExp(`^${i}`,"i");for(const r of Object.keys(e))if(a.test(r)){const a=r.substring(i.length);s[t.fromJSON(a)]=e[r]}return s}function i(e,i,s){if(!r(e)){i.attributes||(i.attributes={});for(const r in e){const a=t.toJSON(r);i.attributes[`${s}${a}`]=e[r]}}}function s(r){const e={};for(const i of Object.keys(r)){const s=i;e[t.fromJSON(s)]=r[i]}return e}function a(r){const e={};for(const i of Object.keys(r)){const s=i;e[t.toJSON(s)]=r[i]}return e}function o(t,e){return r(t)||r(e)?null:Math.round((t-e)/6e4)}function n(r){const t=r.toJSON(),e=t;return e.accumulateAttributeNames&&(e.accumulateAttributeNames=t.accumulateAttributeNames.join()),e.attributeParameterValues&&(e.attributeParameterValues=JSON.stringify(t.attributeParameterValues)),e.barriers&&(e.barriers=JSON.stringify(t.barriers)),e.outSR&&(e.outSR=t.outSR.wkid),e.overrides&&(e.overrides=JSON.stringify(t.overrides)),e.polygonBarriers&&(e.polygonBarriers=JSON.stringify(t.polygonBarriers)),e.polylineBarriers&&(e.polylineBarriers=JSON.stringify(t.polylineBarriers)),e.restrictionAttributeNames&&(e.restrictionAttributeNames=t.restrictionAttributeNames.join()),e.stops&&(e.stops=JSON.stringify(t.stops)),e.travelMode&&(e.travelMode=JSON.stringify(t.travelMode)),e}function u(r){const t=r.toJSON(),e=t;return e.accumulateAttributeNames&&(e.accumulateAttributeNames=t.accumulateAttributeNames.join()),e.attributeParameterValues&&(e.attributeParameterValues=JSON.stringify(t.attributeParameterValues)),e.barriers&&(e.barriers=JSON.stringify(t.barriers)),e.facilities&&(e.facilities=JSON.stringify(t.facilities)),e.incidents&&(e.incidents=JSON.stringify(t.incidents)),e.outSR&&(e.outSR=t.outSR.wkid),e.overrides&&(e.overrides=JSON.stringify(t.overrides)),e.polygonBarriers&&(e.polygonBarriers=JSON.stringify(t.polygonBarriers)),e.polylineBarriers&&(e.polylineBarriers=JSON.stringify(t.polylineBarriers)),e.restrictionAttributeNames&&(e.restrictionAttributeNames=t.restrictionAttributeNames.join()),e.travelMode&&(e.travelMode=JSON.stringify(t.travelMode)),e}function l(r){const t=r.toJSON(),e=t;return e.accumulateAttributeNames&&(e.accumulateAttributeNames=t.accumulateAttributeNames.join()),e.attributeParameterValues&&(e.attributeParameterValues=JSON.stringify(t.attributeParameterValues)),e.barriers&&(e.barriers=JSON.stringify(t.barriers)),e.defaultBreaks&&(e.defaultBreaks=t.defaultBreaks.join()),e.excludeSourcesFromPolygons&&(e.excludeSourcesFromPolygons=t.excludeSourcesFromPolygons.join()),e.facilities&&(e.facilities=JSON.stringify(t.facilities)),e.outSR&&(e.outSR=t.outSR.wkid),e.overrides&&(e.overrides=JSON.stringify(t.overrides)),e.polygonBarriers&&(e.polygonBarriers=JSON.stringify(t.polygonBarriers)),e.polylineBarriers&&(e.polylineBarriers=JSON.stringify(t.polylineBarriers)),e.restrictionAttributeNames&&(e.restrictionAttributeNames=t.restrictionAttributeNames.join()),e.travelMode&&(e.travelMode=JSON.stringify(t.travelMode)),e}export{o as a,l as b,u as c,a as f,e as g,n as r,i as s,s as t};
