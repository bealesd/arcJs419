// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["../../../core/maybe","./attributeSupport","../../../statistics/utils"],function(m,h,k){return function(){function l(b,a,c){this._fieldDataCache=new Map;this._returnDistinctMap=new Map;this.returnDistinctValues=b.returnDistinctValues??!1;this.fieldsIndex=c;this.featureAdapter=a;if((a=b.outFields)&&!a.includes("*")){this.outFields=a;b=0;for(const d of a){var e=h.getExpressionFromFieldName(d);e=(a=this.fieldsIndex.get(e))?null:h.getWhereClause(e,c);a=a?a.name:h.getAliasFromFieldName(d)||`FIELD_EXP_${b++}`;
this._fieldDataCache.set(d,{alias:a,clause:e})}}}var f=l.prototype;f.countDistinctValues=function(b){if(!this.returnDistinctValues)return b.length;b.forEach(a=>this.getAttributes(a));return this._returnDistinctMap.size};f.getAttributes=function(b){b=this._processAttributesForOutFields(b);return this._processAttributesForDistinctValues(b)};f.getFieldValue=function(b,a,c){const e=c?c.name:a;let d=null;this._fieldDataCache.has(e)?d=this._fieldDataCache.get(e).clause:c||(d=h.getWhereClause(a,this.fieldsIndex),
this._fieldDataCache.set(e,{alias:e,clause:d}));return c?this.featureAdapter.getAttribute(b,e):d.calculateValue(b,this.featureAdapter)};f.getDataValue=function(b,a){const c=a.normalizationType,e=a.normalizationTotal;let d=this.getFieldValue(b,a.field,this.fieldsIndex.get(a.field));a.field2&&(d=`${k.processNullValue(d)}${a.fieldDelimiter}${k.processNullValue(this.getFieldValue(b,a.field2,this.fieldsIndex.get(a.field2)))}`,a.field3&&(d=`${d}${a.fieldDelimiter}${k.processNullValue(this.getFieldValue(b,
a.field3,this.fieldsIndex.get(a.field3)))}`));c&&Number.isFinite(d)&&(b="field"===c&&a.normalizationField?this.getFieldValue(b,a.normalizationField,this.fieldsIndex.get(a.normalizationField)):null,d=k.getNormalizedValue(d,c,b,e));return d};f.getExpressionValue=function(b,a,c,e){b={attributes:this.featureAdapter.getAttributes(b),layer:{fields:this.fieldsIndex.fields}};c=e.createExecContext(b,c);return e.executeFunction(a,c)};f.getExpressionValues=function(b,a,c,e){const d={fields:this.fieldsIndex.fields};
return b.map(g=>{g={attributes:this.featureAdapter.getAttributes(g),layer:d};g=e.createExecContext(g,c);return e.executeFunction(a,g)})};f.validateItem=function(b,a){this._fieldDataCache.has(a)||this._fieldDataCache.set(a,{alias:a,clause:h.getWhereClause(a,this.fieldsIndex)});return this._fieldDataCache.get(a).clause.testFeature(b,this.featureAdapter)};f.validateItems=function(b,a){this._fieldDataCache.has(a)||this._fieldDataCache.set(a,{alias:a,clause:h.getWhereClause(a,this.fieldsIndex)});return this._fieldDataCache.get(a).clause.testSet(b,
this.featureAdapter)};f._processAttributesForOutFields=function(b){const a=this.outFields;if(!a||!a.length)return this.featureAdapter.getAttributes(b);const c={};for(const e of a){const {alias:d,clause:g}=this._fieldDataCache.get(e);c[d]=g?g.calculateValue(b,this.featureAdapter):this.featureAdapter.getAttribute(b,d)}return c};f._processAttributesForDistinctValues=function(b){if(m.isNone(b)||!this.returnDistinctValues)return b;var a=this.outFields,c=[];if(a)for(const d of a){var {alias:e}=this._fieldDataCache.get(d);
c.push(b[e])}else for(e in b)c.push(b[e]);a=`${(a||["*"]).join(",")}=${c.join(",")}`;c=this._returnDistinctMap.get(a)||0;this._returnDistinctMap.set(a,++c);return 1<c?null:b};return l}()});