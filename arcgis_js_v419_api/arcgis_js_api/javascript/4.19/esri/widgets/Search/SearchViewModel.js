// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../config ../../core/maybe ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/Error ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/promiseUtils ../../core/Accessor ../../geometry/SpatialReference ../../geometry/Point ../../core/Evented ../../core/Collection ../../intl/locale ../../PopupTemplate ../../symbols/SimpleLineSymbol ../../intl/messages ../../assets ../../portal/Portal ../../symbols/PictureMarkerSymbol ../../symbols/SimpleFillSymbol ../../symbols/SimpleMarkerSymbol ../../symbols/TextSymbol ../../Graphic ../../core/Handles ../../core/watchUtils ../../views/support/layerViewUtils ../support/GoTo ../../chunks/location ./SearchSource ./support/geometryUtils ./LayerSearchSource ./support/locatorUtils ./LocatorSearchSource ../support/geolocationUtils".split(" "),
function(K,h,U,V,w,g,ua,k,va,W,q,wa,xa,ya,v,X,Y,L,Z,aa,ba,M,ca,da,ea,N,fa,ha,ia,ja,O,ka,C,la,ma,P,na,J,x,D,Q,E){function n(r,t){return r.hasOwnProperty(t)&&null!=r[t]&&""!==r[t]}const u=g.getLogger("esri.widgets.Search.SearchViewModel"),F=aa.ofType({key:r=>r.layer?"layer":"locator",base:na,typeMap:{layer:x,locator:Q}}),R=Y.WGS84,oa=/<(?:.|\s)*?>/g;g=function(r){function t(a){a=r.call(this,a)||this;a._handles=new ka;a._gotoController=null;a._searching=null;a.autoNavigate=!0;a.autoSelect=!0;a.defaultPopupTemplate=
null;a.defaultSources=new F;a.defaultSymbol=new fa({url:ea.getAssetUrl(U("trident")?"esri/images/search/search-symbol-32.png":"esri/images/search/search-symbol-32.svg"),size:24,width:24,height:24});a.includeDefaultSources=!0;a.maxInputLength=128;a.maxResults=6;a.maxSuggestions=6;a.messages=null;a.minSuggestCharacters=1;a.popupEnabled=!0;a.popupTemplate=null;a.portal=N.getDefault();a.resultCount=null;a.resultGraphicEnabled=!0;a.resultGraphic=null;a.results=null;a.selectedSuggestion=null;a.searchAllEnabled=
!0;a.selectedResult=null;a.sources=new F;a.suggestionDelay=150;a.suggestionCount=null;a.suggestions=null;a.suggestionsEnabled=!0;a.view=null;return a}K._inheritsLoose(t,r);var f=t.prototype;f.initialize=function(){const a=async()=>{const b=await da.fetchMessageBundle("esri/widgets/Search/t9n/Search");this.messages=b;this.defaultPopupTemplate=new M({title:b.searchResult,content:"{Match_addr}"})};a();this._handles.add([C.on(this,["defaultSources","sources"],"change",()=>this.notifyChange("allSources")),
C.init(this,["includeDefaultSources","view","portal"],()=>this._update()),ba.onLocaleChange(a)])};f.destroy=function(){this._abortGoTo();this.clearGraphics();this._handles.destroy();this._handles=null};f.clear=function(){this.searchTerm=""};f.clearGraphics=function(){this._removeHighlight();this._closePopup();this.view&&this.view.graphics.remove(this.resultGraphic);this._set("resultGraphic",null)};f.search=function(a,b){this.emit("search-start");this.clearGraphics();const c=this._createSuggestionForSearch(a);
this._searching=a=this.when().then(()=>this._getResultsFromSources(c,b).then(d=>{const e={activeSourceIndex:this.activeSourceIndex,searchTerm:c.text,numResults:0,numErrors:0,errors:[],results:[]};this._formatResponse(e,d,c);d=this._getFirstResult(e.results);const l=(c.location&&d?d.name:c.text).replace(oa,"");this._set("searchTerm",l);(c.key&&"number"===typeof c.sourceIndex||c.location)&&this._set("selectedSuggestion",c);this._set("results",e.results);this._set("resultCount",e.results.reduce((m,p)=>
m+p.results.length,0));this.emit("search-complete",e);return this._selectFirstResult(d).then(()=>e)})).then(d=>{this._clearSearching();return d},d=>{this._clearSearching();throw d;});this.notifyChange("state");return a};f.searchNearby=function(a){if(!this.locationEnabled){var b=new q("searchNearby:geolocation-unsupported","Geolocation API is unsupported.",{geolocation:navigator.geolocation});u.error(b);return Promise.reject(b)}this._searching=b=E.getCurrentPosition().then(c=>E.positionToPoint({position:c,
view:this.view},a)).then(c=>this.search(c,a));this.notifyChange("state");b.catch(()=>{}).then(()=>this._clearSearching());return b};f.select=function(a){this.clearGraphics();if(!a){var b=new q("select:missing-parameter","Cannot select without a searchResult.",{searchResult:a});u.error(b);return Promise.reject(b)}const {view:c}=this,d=n(a,"sourceIndex")?a.sourceIndex:this._getSourceIndexOfResult(a),e=this.allSources.getItemAt(d);if(!e)return b=new q("select:missing-source","Cannot select without a source.",
{source:e}),u.error(b),Promise.reject(b);b=e instanceof x?this._getLayerSourcePopupTemplate(e):e.popupTemplate;const l=e.resultSymbol||this._getDefaultSymbol(a),m=n(e,"resultGraphicEnabled")?e.resultGraphicEnabled:this.resultGraphicEnabled,p=n(e,"autoNavigate")?e.autoNavigate:this.autoNavigate,G=n(e,"popupEnabled")?e.popupEnabled:this.popupEnabled,pa=G?b||this.popupTemplate||this.defaultPopupTemplate:null,{feature:y}=a;if(!y)return b=new q("select:missing-feature","Cannot select without a feature.",
{feature:y}),u.error(b),Promise.reject(b);const {attributes:qa,geometry:S,layer:ra,sourceLayer:sa}=y,H=J.getPointFromGeometry(S);b={layerViewQuery:this._getLayerView(y),elevationQuery:c&&w.isSome(H)?J.getPointWithElevation(H,c).catch(()=>H):Promise.resolve(H)};return v.eachAlways(b).then(z=>{const A=z.layerViewQuery.value,ta=z.elevationQuery.value;l instanceof ja&&(l.text=a.name);z=c&&p?a.target||a.extent:null;return(w.isSome(z)?this._goToSearchResult(z):Promise.resolve()).then(()=>{var I;const B=
A?y:new O({geometry:S,symbol:l,attributes:qa,layer:ra,sourceLayer:sa,popupTemplate:pa}),T=G&&(null==(I=this.view)?void 0:I.popup);(I=T&&B.getEffectivePopupTemplate(T.defaultPopupTemplateEnabled))&&c.popup.open({features:[B],location:ta});A&&la.highlightsSupported(A)&&!I&&this._highlightFeature({graphic:B,layerView:A});!A&&m&&c&&c.graphics.push(B);this._set("selectedResult",a);this._set("resultGraphic",B);this.emit("select-result",{result:a,source:e,sourceIndex:d});return a})})};f.suggest=function(a,
b,c){const d=a||this.searchTerm;this.emit("suggest-start",{searchTerm:d});return this._suggestTimer(b,c).then(()=>this._suggestImmediate(d,c).then(e=>{this._set("suggestions",e.results);this._set("suggestionCount",e.results.reduce((l,m)=>l+m.results.length,0));this.emit("suggest-complete",e);return e}))};f.when=async function(){await C.whenFalseOnce(this,"updating")};f._update=async function(){const {portal:a,view:b}=this;if(this.includeDefaultSources){var c=this._updatingPromise=v.eachAlways([null==
a?void 0:a.load(),null==b?void 0:b.when()]);if(this.destroyed)return;this.notifyChange("updating");await c;if(c!==this._updatingPromise)return}this._updatingPromise=null;this.notifyChange("updating");c=C.whenOnce(this,"messages");this.destroyed||(this._handles.add(c),await c,this._updateDefaultSources())};f._clearSearching=function(){this._searching=null;this.notifyChange("state")};f._convertHelperServices=function(){var a,b;const c=null==(a=this.portal)?void 0:null==(b=a.helperServices)?void 0:b.geocode;
return c?c.map(d=>{var e;if(!1!==d.placefinding){var l=V.apiKey&&D.isArcGISWorldGeocoder(d.url)?{url:"https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer"}:null;d=Q.fromJSON({...d,...l});l=null==(e=d.locator)?void 0:e.url;(D.isArcGISWorldGeocoder(l)||D.isProxiedArcGISWorldGeocoder(l)||D.isMeteredArcGISWorldGeocoder(l))&&d.set({singleLineFieldName:"SingleLine",outFields:d.outFields||["Addr_type","Match_addr","StAddr","City"],placeholder:d.placeholder||this.messages.placeholder,
defaultZoomScale:"number"===typeof d.defaultZoomScale?d.defaultZoomScale:2500});if(d.singleLineFieldName)return d}}).filter(Boolean):[]};f._getLayerSources=function(a,b){var c;const d=null==(c=this.view)?void 0:c.map;return a.map(e=>{const l=d.findLayerById(e.id);if(l){e=this._getLayerJSON(e);var m=x.fromJSON(e);m.placeholder=b;this._getLayer(l,e).then(p=>{m.layer=p});return m}}).filter(Boolean).toArray()};f._getTableSources=function(a,b){var c;const d=null==(c=this.view)?void 0:c.map;return a.map(e=>
{const l=d.findTableById(e.id);if(l){e=this._getLayerJSON(e);var m=x.fromJSON(e);m.placeholder=b;this._getLayer(l,e).then(p=>{m.layer=p});return m}}).filter(Boolean).toArray()};f._convertApplicationProperties=function(){var a,b,c;const d=null==(a=this.view)?void 0:a.map;a=null==d?void 0:null==(b=d.applicationProperties)?void 0:null==(c=b.viewing)?void 0:c.search;if(!a)return[];const {enabled:e,hintText:l,layers:m,tables:p}=a;if(!e)return[];b=this._getLayerSources(m,l);c=this._getTableSources(p,l);
return[...b,...c]};f._getSubLayer=function(a,b){return a.load().then(()=>{if(!a.allSublayers)return Promise.reject();const c=a.allSublayers.find(d=>d.id===b.subLayer);return c?c.createFeatureLayer():Promise.reject()})};f._getBuildingSubLayer=async function(a,b){await a.load();a=a.allSublayers.find(c=>c.id===b.subLayer);if("building-component"!==(null==a?void 0:a.type))return Promise.reject();await a.load();if(null==a.associatedLayer)return Promise.reject();await a.associatedLayer.load();return a};
f._getLayer=function(a,b){return"feature"===a.type||"scene"===a.type||"csv"===a.type||"geojson"===a.type||"ogc-feature"===a.type?Promise.resolve(a):"map-image"===a.type?this._getSubLayer(a,b).catch(()=>{const c=new q("search:create-featurelayer","Could not create a FeatureLayer from the MapImageLayer",{layer:a});u.error(c);return null}):"building-scene"===a.type?this._getBuildingSubLayer(a,b):Promise.resolve(null)};f._getLayerJSON=function(a){return"function"===typeof a.toJSON?a.toJSON():a};f._updateDefaultSources=
function(){const {defaultSources:a,includeDefaultSources:b}=this;a.removeAll();b&&a.addMany([...this._convertApplicationProperties(),...this._convertHelperServices()]);this.notifyChange("allSources")};f._abortGoTo=function(){this._gotoController&&this._gotoController.abort();this._gotoController=null};f._clear=function(){this._abortGoTo();this._set("resultCount",null);this._set("results",null);this._set("suggestions",null);this._set("suggestionCount",null);this._set("selectedResult",null);this._set("selectedSuggestion",
null);this.emit("search-clear")};f._closePopup=function(){var a;const b=null==(a=this.view)?void 0:a.popup;({resultGraphic:a}=this);if(b&&a){var {selectedFeature:c}=b;c&&c===a&&b.close()}};f._suggestTimer=function(a,b){return v.after(null!=a?a:this.suggestionDelay,null,b&&b.signal)};f._createLocationForSearch=function(a){return a instanceof O?J.getPointFromGeometry(a.geometry):a instanceof L?a:Array.isArray(a)&&2===a.length?new L({longitude:a[0],latitude:a[1]}):null};f._createSuggestionForSearch=
function(a){if(a&&n(a,"key")&&n(a,"text")&&n(a,"sourceIndex"))return a;const b=this._createLocationForSearch(a),c="string"===typeof a?a:this.searchTerm,{selectedSuggestion:d,selectedResult:e}=this,l=(a=!a&&d&&e)&&d.location;return a&&d.key===e.key&&d.sourceIndex===e.sourceIndex||l?d:{location:w.unwrap(b),text:b?"":c,sourceIndex:null,key:null}};f._getFirstResult=function(a){let b=null;a&&a.some(c=>{({results:c}=c);c=c[0];const d=!!c;d&&(b=c);return d});return b};f._selectFirstResult=function(a){return this.autoSelect&&
a?this.select(a):Promise.resolve(null)};f._suggestImmediate=function(a,b){return this.when().then(()=>this._getSuggestionsFromSources(a,b)).then(c=>{const d={activeSourceIndex:this.activeSourceIndex,searchTerm:a,numResults:0,numErrors:0,errors:[],results:[]};this._formatResponse(d,c);return d})};f._formatSourceResponse=function(a,b,c){const d=b&&b.value||[];b=b&&b.error;const e=this.allSources.getItemAt(c);b?(a.errors.push({sourceIndex:c,source:e,error:b}),a.numErrors++):(a.results.push({sourceIndex:c,
source:e,results:d}),a.numResults+=d.length)};f._formatResponse=function(a,b,c){if(b)if(-1===a.activeSourceIndex){const d=c&&n(c,"sourceIndex")&&-1!==c.sourceIndex?c.sourceIndex:void 0;b.forEach((e,l)=>{this._formatSourceResponse(a,e,void 0!==d?d:l)})}else this._formatSourceResponse(a,b[0],a.activeSourceIndex)};f._getResultsFromSources=function(a,b){var {allSources:c}=this;const d=!a.location&&n(a,"sourceIndex")?a.sourceIndex:this.activeSourceIndex,e=[];if(!c.length)return c=new q("search:no-sources-defined",
"At least one source is required.",{allSources:c}),u.error(c),Promise.reject(c);-1===d?c.forEach((l,m)=>{e.push(this._getResultsFromSource(a,m,b))}):e.push(this._getResultsFromSource(a,d,b));return v.eachAlways(e)};f._getSuggestionsFromSources=function(a,b){const {allSources:c,activeSourceIndex:d}=this,e=[];if(!c.length){const l=new q("suggest:no-sources-defined","At least one source is required.",{allSources:c});u.error(l);return Promise.reject(l)}-1===d?c.forEach((l,m)=>{e.push(this._getSuggestionsFromSource(a,
m,b))}):e.push(this._getSuggestionsFromSource(a,d,b));return v.eachAlways(e)};f._getResultsFromSource=function(a,b,c){var d;const e=this.allSources.getItemAt(b),{location:l=null}=a,m=(null==(d=this.view)?void 0:d.spatialReference)||R;d=n(e,"maxResults")?e.maxResults:this.maxResults;const p=e instanceof x&&n(e,"exactMatch")?e.exactMatch:!1,{view:G}=this;return e.getResults({view:G,sourceIndex:b,location:l,suggestResult:a,spatialReference:m,exactMatch:p,maxResults:d},c)};f._getSuggestionsFromSource=
function(a,b,c){const d=this.allSources.getItemAt(b);var e=n(d,"suggestionsEnabled")?d.suggestionsEnabled:this.suggestionsEnabled,l=a.length;const m=n(d,"minSuggestCharacters")?d.minSuggestCharacters:this.minSuggestCharacters;if(e&&a.trim()&&l>=m){var p;e=(null==(p=this.view)?void 0:p.spatialReference)||R;p=n(d,"maxSuggestions")?d.maxSuggestions:this.maxSuggestions;({view:l}=this);return d.getSuggestions({view:l,sourceIndex:b,suggestTerm:a,spatialReference:e,maxSuggestions:p},c)}return Promise.resolve(null)};
f.createDefaultSymbol=function(a,b){if("point"===b)return new ia({color:a.color,size:a.size,outline:{color:a.outline.color,width:a.outline.width}});if("polyline"===b)return new ca({color:a.color,width:a.width});if("polygon"===b)return new ha({color:a.color,outline:{color:a.outline.color,width:a.outline.width}})};f._getLayerSourcePopupTemplate=function(a){const {layer:b}=a;if(b)return n(a,"popupTemplate")?a.popupTemplate:b.popupTemplate};f._getSourceIndexOfResult=function(a){let b=null;this.results.some(c=>
c.results.some(d=>d===a?(b=c.sourceIndex,!0):!1));return b};f._goToSearchResult=async function(a){const b=!!a;this._abortGoTo();const c=v.createAbortController();this._gotoController=c;await this.callGoTo({target:{target:a},options:{animate:b,signal:c.signal}});this._gotoController=null};f._getDefaultSymbol=function(a){var b,c,d,e=null==(b=this.view)?void 0:null==(c=b.map)?void 0:null==(d=c.basemap)?void 0:d.id;a=w.get(a,"feature","geometry","type");return w.isSome(a)&&(e=(e=P.getSchemes({basemap:e,
geometryType:a})||P.getSchemes({basemap:"topo",geometryType:a}))&&e.primaryScheme)?(e.color&&n(e,"opacity")&&(e.color.a=e.opacity),this.createDefaultSymbol(e,a)):this.defaultSymbol};f._removeHighlight=function(){this._handles.remove("highlight")};f._getLayerView=async function(a){const {view:b}=this;if(!a||!b||"building-component"===a.layer.type)return Promise.resolve(null);({layer:a}=a);await b.when();return b.whenLayerView(a)};f._highlightFeature=function(a){const {graphic:b,layerView:c}=a,{attributes:d,
layer:e}=b;({objectIdField:a}=e);a=c.highlight(d&&d[a]||b);this._handles.add(a,"highlight")};K._createClass(t,[{key:"activeSource",get:function(){return this.allSources.getItemAt(this.activeSourceIndex)||null}},{key:"activeSourceIndex",get:function(){return 1!==this.allSources.length&&this.searchAllEnabled?-1:0},set:function(a){void 0===a?this._clearOverride("activeSourceIndex"):this._override("activeSourceIndex",a)}},{key:"allPlaceholder",get:function(){var a;return null==(a=this.messages)?void 0:
a.allPlaceholder},set:function(a){a?this._override("allPlaceholder",a):this._clearOverride("allPlaceholder")}},{key:"allSources",get:function(){const {sources:a,defaultSources:b,includeDefaultSources:c}=this,d="function"===typeof c?c.call(null,{sources:a,defaultSources:b}):c?b.concat(a):a,e=this._get("allSources")||new F;e.removeAll();e.addMany(d.filter(Boolean));return e}},{key:"locationEnabled",get:function(){return this._get("locationEnabled")||E.supported()},set:function(a){if(void 0===a)this._clearOverride("locationEnabled");
else{var b=E.supported();if(a&&!b){const c=new q("locationEnabled:geolocation-unsupported","Geolocation API is unsupported.",{geolocation:navigator.geolocation});u.error(c)}this._override("locationEnabled",a&&b)}}},{key:"placeholder",get:function(){const {allSources:a,activeSourceIndex:b,allPlaceholder:c}=this;if(-1===b)return c;const d=a.getItemAt(b);return d?d.placeholder:""}},{key:"searchTerm",get:function(){return this._get("searchTerm")||""},set:function(a){this._set("searchTerm",a||"");this.clearGraphics();
this.selectedSuggestion&&this.selectedSuggestion.text!==a&&this._set("selectedSuggestion",null);""===a&&this._clear()}},{key:"state",get:function(){return this._searching?"searching":this.updating?"loading":0===this.allSources.length?"disabled":"ready"}},{key:"updating",get:function(){return null!=this._updatingPromise}}]);return t}(ma.GoToMixin(Z.EventedMixin(X)));g.ALL_INDEX=-1;h.__decorate([k.property({readOnly:!0,value:null})],g.prototype,"activeSource",null);h.__decorate([k.property()],g.prototype,
"activeSourceIndex",null);h.__decorate([k.property()],g.prototype,"allPlaceholder",null);h.__decorate([k.property({readOnly:!0,dependsOn:["defaultSources.length","sources.length","includeDefaultSources"]})],g.prototype,"allSources",null);h.__decorate([k.property()],g.prototype,"autoNavigate",void 0);h.__decorate([k.property()],g.prototype,"autoSelect",void 0);h.__decorate([k.property()],g.prototype,"defaultPopupTemplate",void 0);h.__decorate([k.property({readOnly:!0})],g.prototype,"defaultSources",
void 0);h.__decorate([k.property()],g.prototype,"defaultSymbol",void 0);h.__decorate([k.property()],g.prototype,"includeDefaultSources",void 0);h.__decorate([k.property()],g.prototype,"locationEnabled",null);h.__decorate([k.property()],g.prototype,"maxInputLength",void 0);h.__decorate([k.property()],g.prototype,"maxResults",void 0);h.__decorate([k.property()],g.prototype,"maxSuggestions",void 0);h.__decorate([k.property()],g.prototype,"messages",void 0);h.__decorate([k.property()],g.prototype,"minSuggestCharacters",
void 0);h.__decorate([k.property({readOnly:!0})],g.prototype,"placeholder",null);h.__decorate([k.property()],g.prototype,"popupEnabled",void 0);h.__decorate([k.property({type:M})],g.prototype,"popupTemplate",void 0);h.__decorate([k.property({type:N})],g.prototype,"portal",void 0);h.__decorate([k.property()],g.prototype,"resultCount",void 0);h.__decorate([k.property()],g.prototype,"resultGraphicEnabled",void 0);h.__decorate([k.property({readOnly:!0})],g.prototype,"resultGraphic",void 0);h.__decorate([k.property({readOnly:!0})],
g.prototype,"results",void 0);h.__decorate([k.property({readOnly:!0})],g.prototype,"selectedSuggestion",void 0);h.__decorate([k.property()],g.prototype,"searchAllEnabled",void 0);h.__decorate([k.property({readOnly:!0})],g.prototype,"selectedResult",void 0);h.__decorate([k.property()],g.prototype,"searchTerm",null);h.__decorate([k.property({type:F})],g.prototype,"sources",void 0);h.__decorate([k.property({readOnly:!0,dependsOn:["allSources.length","updating"]})],g.prototype,"state",null);h.__decorate([k.property()],
g.prototype,"suggestionDelay",void 0);h.__decorate([k.property()],g.prototype,"suggestionCount",void 0);h.__decorate([k.property({readOnly:!0})],g.prototype,"suggestions",void 0);h.__decorate([k.property()],g.prototype,"suggestionsEnabled",void 0);h.__decorate([k.property({readOnly:!0})],g.prototype,"updating",null);h.__decorate([k.property()],g.prototype,"view",void 0);h.__decorate([k.property()],g.prototype,"clear",null);return g=h.__decorate([W.subclass("esri.widgets.Search.SearchViewModel")],
g)});