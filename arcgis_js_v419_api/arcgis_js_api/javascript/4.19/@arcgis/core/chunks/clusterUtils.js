/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{i as n}from"./Logger.js";import{u as i}from"../core/scheduling.js";import{b as e}from"./sizeVariableUtils.js";import{b as t}from"./utils5.js";import{c as o}from"./MD5.js";import{g as l}from"./utils6.js";const a="cluster_count";function r(n,i){return n.split(`cluster_${i}_`).pop()}function s(i,l){const a=function(n){if(!n)return null;const{field:i,valueExpression:o,normalizationField:l,normalizationType:a,normalizationTotal:r}=n;let s=null;if(o)s=o;else if(i){const n=t({normalizationType:a,normalizationField:l,normalizationTotal:r});if(n){const t=n.toLowerCase();if(s=i.toLowerCase()+",norm:"+t,l)s+=","+l.toLowerCase();else if("percent-of-total"===t){let n=r;e(n)&&0!==n||(n=null),s+=","+n}}}return s}(i);return`${l}_${n(a)?function(n){return o(n)}(a):i.field}`}function u(n,i){return`cluster_${s(n,i)}`}function p(n,i){const e=i.getField(n);return e&&e.type}function f(i,e){const t="rotation"===e.type?e.rotationType:null,o=e.legendOptions&&e.legendOptions.title,l=e.field,a=l?p(l,i):null;return{field:l,fieldType:n(a)?a:null,rotationType:t,valueExpression:e.valueExpression,valueExpressionTitle:e.valueExpressionTitle||e.valueExpression&&o,normalizationField:"normalizationField"in e?e.normalizationField:null,vvType:e.type}}function c(n){return n?n.replace(/"/g,'\\"'):""}function m(n,i,e){return`\n  var uvInfos = [${function(n){return n.map((n=>`{\n        "value": "${String(n.value)}",\n        "label": "${c(String(n.label))}"\n      }`))}(n).join(", ")}];\n  var predominantType = Text($feature["${i}"]);\n  var label = "${c(e)}";\n\n  for (var i = 0; i < Count(uvInfos); i++) {\n    if (uvInfos[i].value == predominantType) {\n      label = uvInfos[i].label;\n      break;\n    }\n  }\n\n  return label;\n  `}function v(n,i){const e=[s(n,i)];return"date"===n.fieldType&&e.push(n.fieldType.toLowerCase()),n.rotationType&&e.push(n.rotationType.toLowerCase()),e.join("_")}function T(n,i){return{statisticHash:v(n,i),attributeInfo:n,statisticType:i}}function d(e,t,o=!0){const a=[],r=function(i,e){const t="field"in e&&e.field,o=t?p(t,i):null;return{field:t,fieldType:n(o)?o:null,valueExpression:"valueExpression"in e?e.valueExpression:null,valueExpressionTitle:"valueExpressionTitle"in e?e.valueExpressionTitle:null,normalizationField:"normalizationField"in e?e.normalizationField:null,normalizationType:"normalizationType"in e?e.normalizationType:null,normalizationTotal:"normalizationTotal"in e?e.normalizationTotal:null}}(e,t);"class-breaks"===t.type?a.push(T(r,"avg")):"unique-value"===t.type&&a.push(T(r,"type"));const s=l(t);for(const n of s){const i=f(e,n);a.push(T(i,"avg"))}return o?i(a,((n,i)=>n.statisticHash===i.statisticHash)):a}export{u as a,m as b,a as c,r as d,d as g};