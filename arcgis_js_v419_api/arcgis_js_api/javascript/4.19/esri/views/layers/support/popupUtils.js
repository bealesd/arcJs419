// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/maybe","../../../layers/support/fieldUtils"],function(h,k,e){h.getFetchPopupTemplate=function(a,c){return a.popupTemplate?a.popupTemplate:k.isSome(c)&&c.defaultPopupTemplateEnabled&&k.isSome(a.defaultPopupTemplate)?a.defaultPopupTemplate:null};h.getRequiredFields=async function(a,c=a.popupTemplate){if(!k.isSome(c))return[];const l=await c.getRequiredFields(a.fields);({lastEditInfoEnabled:c}=c);const {objectIdField:f,typeIdField:m,globalIdField:g,relationships:n}=a;
if(l.includes("*"))return["*"];c=c?await e.getFeatureEditFields(a):[];const b=e.fixFields(a.fields,[...l,...c]);m&&b.push(m);b&&f&&e.hasField(a.fields,f)&&-1===b.indexOf(f)&&b.push(f);b&&g&&e.hasField(a.fields,g)&&-1===b.indexOf(g)&&b.push(g);n&&n.forEach(d=>{({keyField:d}=d);b&&d&&e.hasField(a.fields,d)&&-1===b.indexOf(d)&&b.push(d)});return b};Object.defineProperty(h,"__esModule",{value:!0})});