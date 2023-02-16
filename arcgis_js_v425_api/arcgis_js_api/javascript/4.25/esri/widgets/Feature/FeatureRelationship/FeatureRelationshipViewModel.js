// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../Graphic ../../../core/Accessor ../../../core/Clonable ../../../core/Collection ../../../core/HandleOwner ../../../core/Identifiable ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/throttle ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../rest/support/RelationshipQuery ../support/featureUtils".split(" "),
function(g,e,E,d,F,z,G,H,t,q,u,f,Q,R,I,A,B){d=function(C){function r(c){var a=C.call(this,c)||this;a._queryAbortController=null;a._queryPageAbortController=null;a._queryFeatureCountAbortController=null;a.featuresPerPage=10;a.description=null;a.graphic=null;a.layer=null;a.map=null;a.orderByFields=null;a.featureCount=0;a.relationshipId=null;a.showAllEnabled=!1;a.title=null;a._cancelQuery=()=>{const {_queryAbortController:b}=g._assertThisInitialized(a);b&&b.abort();a._queryAbortController=null};a._cancelQueryFeatureCount=
()=>{const {_queryFeatureCountAbortController:b}=g._assertThisInitialized(a);b&&b.abort();a._queryFeatureCountAbortController=null};a._cancelQueryPage=()=>{const {_queryPageAbortController:b}=g._assertThisInitialized(a);b&&b.abort();a._queryPageAbortController=null};a._queryController=g._asyncToGenerator(function*(){a._cancelQuery();const b=new AbortController;a._queryAbortController=b;yield t.ignoreAbortErrors(a._query());a._queryAbortController===b&&(a._queryAbortController=null)});a._queryFeatureCountController=
g._asyncToGenerator(function*(){a._cancelQueryFeatureCount();const b=new AbortController;a._queryFeatureCountAbortController=b;yield t.ignoreAbortErrors(a._queryFeatureCount());a._queryFeatureCountAbortController===b&&(a._queryFeatureCountAbortController=null)});a._queryPageController=g._asyncToGenerator(function*(){const b=new AbortController;a._queryPageAbortController=b;yield t.ignoreAbortErrors(a._queryPage());a._queryPageAbortController===b&&(a._queryPageAbortController=null)});a._queryThrottled=
u.throttle(a._queryController,100,g._assertThisInitialized(a));a._queryFeatureCountThrottled=u.throttle(a._queryFeatureCountController,100,g._assertThisInitialized(a));a._queryPageThrottled=u.throttle(a._queryPageController,100,g._assertThisInitialized(a));a._query=g._asyncToGenerator(function*(){const {_queryAbortController:b,relatedFeatures:h}=g._assertThisInitialized(a);a._destroyRelatedFeatureViewModels();a.featurePage=1;h.removeAll();h.addMany(a._sliceFeatures(yield a._queryRelatedFeatures({signal:b?.signal})))});
a.handles.add([q.watch(()=>[a.displayCount,a.graphic,a.layer,a.map,a.orderByFieldsFixedCasing,a.relationshipId,a.featuresPerPage,a.showAllEnabled],()=>a._queryThrottled(),q.initial),q.watch(()=>[a.featurePage,a.showAllEnabled],()=>a._queryPageThrottled()),q.watch(()=>[a.layer,a.relationshipId,a.objectId],()=>a._queryFeatureCountThrottled())]);return a}g._inheritsLoose(r,C);var m=r.prototype;m.destroy=function(){this._destroyRelatedFeatureViewModels();this.relatedFeatures.removeAll();this._cancelQuery();
this._cancelQueryFeatureCount();this._cancelQueryPage()};m._destroyRelatedFeatureViewModels=function(){this.relatedFeatureViewModels?.forEach(c=>!c.destroyed&&c.destroy());this.relatedFeatureViewModels.removeAll()};m._queryFeatureCount=function(){var c=g._asyncToGenerator(function*(){const {layer:a,relatedLayer:b,relationshipId:h,objectId:k,_queryFeatureCountAbortController:v}=this;yield a?.load();if(b&&"number"===typeof k&&a?.capabilities?.queryRelated?.supportsCount){yield b.load();var l=b.createQuery();
l=new A({cacheHint:a.capabilities?.queryRelated?.supportsCacheHint??!1,relationshipId:h,returnGeometry:!1,objectIds:[k],where:l.where});l=yield a.queryRelatedFeaturesCount(l,{signal:v?.signal});this._set("featureCount",l[k]||0)}else this._set("featureCount",0)});return function(){return c.apply(this,arguments)}}();m._sliceFeatures=function(c){const {showAllEnabled:a,displayCount:b}=this;return a?c:b?c.slice(0,b):[]};m._queryPage=function(){var c=g._asyncToGenerator(function*(){const {relatedFeatures:a,
featurePage:b,showAllEnabled:h,_queryPageAbortController:k}=this;!h||2>b||a.addMany(yield this._queryRelatedFeatures({signal:k?.signal}))});return function(){return c.apply(this,arguments)}}();m._queryRelatedFeatures=function(){var c=g._asyncToGenerator(function*(a){const {orderByFieldsFixedCasing:b,showAllEnabled:h,featuresPerPage:k,displayCount:v,layer:l,relationshipId:J,featurePage:K,featureCount:D,relatedLayer:p}=this;yield l?.load();const {relationship:L,objectId:w}=this;if(!L||"number"!==typeof w||
!l?.capabilities?.queryRelated?.supportsPagination)return[];var x=h?((K-1)*k+D)%D:0;const M=h?k:v;if(!p)return[];yield p.load();var y=p.objectIdField;y=[...b?.map(n=>n.field),y];const N=b?.map(n=>`${n.field} ${n.order}`),O=l.capabilities?.queryRelated?.supportsCacheHint||!1,P=p.createQuery();x=new A({orderByFields:N,start:x,num:M,outFields:y,cacheHint:O,relationshipId:J,returnGeometry:!1,objectIds:[w],where:P.where});a=(yield l.queryRelatedFeatures(x,{signal:a?.signal}))[w]?.features||[];a.forEach(n=>
n.sourceLayer=p);return a});return function(a){return c.apply(this,arguments)}}();g._createClass(r,[{key:"featurePage",get:function(){return this._get("featurePage")},set:function(c){const {featuresPerPage:a,featureCount:b}=this;this._set("featurePage",Math.min(Math.max(c,1),Math.ceil(b/a)||1))}},{key:"orderByFieldsFixedCasing",get:function(){const {orderByFields:c,relatedLayer:a}=this;return c&&a?.loaded?c.map(b=>{const h=b.clone();b=B.getFixedFieldName(b.field,a);h.field=b;return h}):c}},{key:"itemDescriptionFieldName",
get:function(){return this.orderByFieldsFixedCasing?.[0]?.field||null}},{key:"displayCount",get:function(){return this._get("displayCount")},set:function(c){this._set("displayCount",Math.min(Math.max(c,0),10))}},{key:"objectId",get:function(){return this.graphic?.attributes?.[this.objectIdField]??null}},{key:"objectIdField",get:function(){return this.layer?.objectIdField||null}},{key:"relatedFeatures",get:function(){return this._get("relatedFeatures")||new z}},{key:"relatedLayer",get:function(){const {layer:c,
map:a,relationship:b}=this;return c?.loaded?B.findRelatedLayer(a,c,b):null}},{key:"relationship",get:function(){const {relationshipId:c,layer:a}=this;return"number"===typeof c?a?.relationships?.find(({id:b})=>b===c)??null:null}},{key:"relatedFeatureViewModels",get:function(){return this._get("relatedFeatureViewModels")||new z}},{key:"state",get:function(){const {_queryAbortController:c,_queryFeatureCountAbortController:a,_queryPageAbortController:b,graphic:h,relatedLayer:k}=this;return a?"loading":
c||b?"querying":h&&k?"ready":"disabled"}}]);return r}(F.ClonableMixin(H.IdentifiableMixin(G.HandleOwnerMixin(d))));e.__decorate([f.property()],d.prototype,"_queryAbortController",void 0);e.__decorate([f.property()],d.prototype,"_queryPageAbortController",void 0);e.__decorate([f.property()],d.prototype,"_queryFeatureCountAbortController",void 0);e.__decorate([f.property({value:1})],d.prototype,"featurePage",null);e.__decorate([f.property()],d.prototype,"featuresPerPage",void 0);e.__decorate([f.property({readOnly:!0})],
d.prototype,"orderByFieldsFixedCasing",null);e.__decorate([f.property()],d.prototype,"description",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"itemDescriptionFieldName",null);e.__decorate([f.property({value:3})],d.prototype,"displayCount",null);e.__decorate([f.property({type:E})],d.prototype,"graphic",void 0);e.__decorate([f.property()],d.prototype,"layer",void 0);e.__decorate([f.property()],d.prototype,"map",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"objectId",
null);e.__decorate([f.property({readOnly:!0})],d.prototype,"objectIdField",null);e.__decorate([f.property()],d.prototype,"orderByFields",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"relatedFeatures",null);e.__decorate([f.property({readOnly:!0})],d.prototype,"relatedLayer",null);e.__decorate([f.property({readOnly:!0})],d.prototype,"relationship",null);e.__decorate([f.property({readOnly:!0})],d.prototype,"featureCount",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"relatedFeatureViewModels",
null);e.__decorate([f.property()],d.prototype,"relationshipId",void 0);e.__decorate([f.property()],d.prototype,"showAllEnabled",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"state",null);e.__decorate([f.property()],d.prototype,"title",void 0);return d=e.__decorate([I.subclass("esri.widgets.Feature.FeatureRelationship.FeatureRelationshipViewModel")],d)});