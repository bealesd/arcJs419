/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{u as e}from"../core/lang.js";import{f as n}from"./messages.js";import{substitute as t}from"../intl.js";import{numericTypes as i}from"../layers/support/fieldUtils.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import o from"../popup/content/FieldsContent.js";import"../popup/content/MediaContent.js";import"../popup/content/RelationshipContent.js";import s from"../popup/content/TextContent.js";import a from"../popup/ExpressionInfo.js";import r from"../popup/FieldInfo.js";import{g as l}from"./utils15.js";import{viewScaleRE as p}from"./visualVariableUtils.js";import{l as m}from"./utils12.js";let f=0;const u="expression/";function d(e){return"hasVisualVariables"in e&&e.hasVisualVariables()?e.visualVariables.filter((e=>!(p.test(e.valueExpression)||"target"in e&&"outline"===e.target))):[]}function c(e,n){return n?m(e)?.find((e=>e.name.toLowerCase()===n.toLowerCase())):null}function x(e,n,t){let o=null;if(t){const n=e.featureReduction;n&&"popupTemplate"in n&&n.popupTemplate&&(o=n.popupTemplate.fieldInfos)}else"popupTemplate"in e&&e.popupTemplate&&(o=e.popupTemplate.fieldInfos);const s=t?c(e,n):e.getField(n);let a=null;if(o&&o.some((e=>!(!e||e.fieldName.toLowerCase()!==s.name.toLowerCase()||(a=e.clone(),0)))),!a){const e=i.includes(s.type),n="integer"===s.type||"small-integer"===s.type;a=new r({fieldName:s.name,isEditable:s.editable,visible:!0,format:e?{places:n?0:2,digitSeparator:!0}:null})}return a.label||(a.label=s.alias),a}function g(e){const{expression:n,title:t,returnType:i}=e;return new a({name:"expr"+f++,expression:n,title:t,returnType:i})}function b(e){const n="number"===e.returnType?{places:2,digitSeparator:!0}:null;return new r({fieldName:`expression/${e.name}`,visible:!0,format:n})}async function j(i){const o=await n("esri/smartMapping/t9n/smartMapping"),{renderer:s,layer:a,normFieldExpressionTemplate:r,isFeatureReduction:p}=i,m=[],f=[],u=l(s,d);for(const e of u)if("field"===e.type)m.push(x(a,e.field,p));else if("normalized-field"===e.type){const n=p?c(a,e.field):a.getField(e.field),i=p?c(a,e.normalizationField):a.getField(e.normalizationField),s=g({type:"expression",expression:`\n      $feature["${n.name}"];\n      $feature["${i.name}"];\n      ${"percentage"===r?`($feature["${n.name}"] / $feature["${i.name}"]) * 100;`:`$feature["${n.name}"] / $feature["${i.name}"];`}\n      `,title:t("percentage"===r?o.normFieldLabelAsPercent:o.normFieldLabel,{expression1:n.alias,expression2:i.alias}),returnType:"number"});m.push(b(s),x(a,e.field,p),x(a,e.normalizationField,p)),f.push(s)}else if("expression"===e.type){const n=g(e);m.push(b(n)),f.push(n)}return{fieldInfos:e(m,((e,n)=>e.fieldName===n.fieldName)),expressionInfos:e(f,((e,n)=>e.expression===n.expression))}}async function F(e,i,a){const{fieldInfos:r,expressionInfos:l}=i,p=await n("esri/smartMapping/t9n/smartMapping");if(r.length>2)return[new o({fieldInfos:r})];const m=[];for(const n of r){const i=n.fieldName;let o=n.label;if(!o){const n=a?c(e,i):e.getField(i);if(n)o=n.alias||i;else if(l){const e=i.split("expression/")[1],n=l[l.findIndex((n=>n.name===e))];n&&(o=n.title||n.name)}}m.push(new s({text:t(p.fieldInfo,{fieldLabel:o,fieldValue:`{${i}}`})}))}return m}function y(e){return!(!("normalizationField"in e)||!e.normalizationField)||"hasVisualVariables"in e&&e.hasVisualVariables()&&e.visualVariables.some((e=>!(!("normalizationField"in e)||!e.normalizationField)))}export{j as a,F as b,x as c,u as e,d as g,y as h};