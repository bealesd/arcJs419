/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{i as t,b as e}from"./Logger.js";import{g as o}from"./metadata.js";import n from"../core/Accessor.js";import r from"../core/Collection.js";const f=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"];function i(t){return t instanceof n}function c(t){return t instanceof r?Object.keys(t.items):i(t)?o(t).keys():t?Object.keys(t):[]}function s(t,e){return t instanceof r?t.items[e]:t[e]}function u(t){return t?t.declaredClass:null}function l(e,o){const n=e.diff;if(n&&"function"==typeof n)return n(e,o);const r=c(e),a=c(o);if(0===r.length&&0===a.length)return;if(!r.length||!a.length||function(t,e){return!(!Array.isArray(t)||!Array.isArray(e))&&t.length!==e.length}(e,o))return{type:"complete",oldValue:e,newValue:o};const p=a.filter((t=>-1===r.indexOf(t))),y=r.filter((t=>-1===a.indexOf(t))),d=r.filter((t=>a.indexOf(t)>-1&&s(e,t)!==s(o,t))).concat(p,y).sort(),m=u(e);if(m&&f.indexOf(m)>-1&&d.length)return{type:"complete",oldValue:e,newValue:o};let h;const b=i(e)&&i(o);for(const r of d){const f=s(e,r),i=s(o,r);let c;(b||"function"!=typeof f&&"function"!=typeof i)&&(f!==i&&(null==f&&null==i||(c=n&&n[r]&&"function"==typeof n[r]?n[r](f,i):"object"==typeof f&&"object"==typeof i&&u(f)===u(i)?l(f,i):{type:"complete",oldValue:f,newValue:i},t(c)&&(t(h)?h.diff[r]=c:h={type:"partial",diff:{[r]:c}}))))}return h}function a(t,o){if(e(t))return!1;const n=o.split(".");let r=t;for(const t of n){if("complete"===r.type)return!0;if("partial"!==r.type)return!1;{const e=r.diff[t];if(!e)return!1;r=e}}return!0}function p(t,e){for(const o of e)if(a(t,o))return!0;return!1}function y(t,e){if("function"!=typeof t&&"function"!=typeof e&&(t||e))return!t||!e||"object"==typeof t&&"object"==typeof e&&u(t)!==u(e)?{type:"complete",oldValue:t,newValue:e}:l(t,e)}function d(t){if(e(t))return!0;switch(t.type){case"complete":return!1;case"collection":{const e=t;for(const t of e.added)if(!d(t))return!1;for(const t of e.removed)if(!d(t))return!1;for(const t of e.changed)if(!d(t))return!1;return!0}case"partial":for(const e in t.diff){if(!d(t.diff[e]))return!1}return!0}}export{p as a,y as d,a as h,d as i};