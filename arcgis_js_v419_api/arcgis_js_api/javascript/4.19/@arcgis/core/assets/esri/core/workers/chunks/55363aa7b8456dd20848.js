self.webpackChunkRemoteClient([21,82],{174:function(e,t,i){"use strict";i.r(t);var r,a=i(11),o=(i(17),i(1)),s=(i(19),i(4),i(18),i(6),i(0)),n=(i(9),i(3),i(7)),l=(i(15),i(16),i(12),i(2),i(10),i(8)),c=i(5),p=i(13),d=i(42),u=(i(73),i(74)),h=i(14),m=(i(48),i(43),i(45)),b=(i(44),i(21),i(46),i(57),i(58),i(77),i(27),i(69)),g=(i(51),i(52),i(49),i(54),i(50)),y=(i(84),i(88),i(86),i(85),i(87),i(75)),O=i(186),j=i(187);let v=r=class extends(Object(d.a)(u.a)){constructor(e){super(e),this.access=null,this.accessInformation=null,this.applicationProxies=null,this.avgRating=null,this.categories=null,this.created=null,this.culture=null,this.description=null,this.extent=null,this.groupCategories=null,this.id=null,this.itemControl=null,this.licenseInfo=null,this.modified=null,this.name=null,this.numComments=null,this.numRatings=null,this.numViews=null,this.owner=null,this.ownerFolder=null,this.portal=null,this.screenshots=null,this.size=null,this.snippet=null,this.sourceJSON=null,this.tags=null,this.title=null,this.type=null,this.typeKeywords=null,this.url=null}static from(e){return Object(c.l)(r,e)}destroy(){this.portal=null}get displayName(){const e=this.type,t=this.typeKeywords||[];let i=e;return"Feature Service"===e||"Feature Collection"===e?i=t.indexOf("Table")>-1?"Table":t.indexOf("Route Layer")>-1?"Route Layer":t.indexOf("Markup")>-1?"Markup":"Feature Layer":"Image Service"===e?i=t.indexOf("Elevation 3D Layer")>-1?"Elevation Layer":t.indexOf("Tiled Imagery")>-1?"Tiled Imagery Layer":"Imagery Layer":"Scene Service"===e?i="Scene Layer":"Scene Package"===e?i="Scene Layer Package":"Stream Service"===e?i="Feature Layer":"Geoprocessing Service"===e&&this.portal&&this.portal.isPortal?i=t.indexOf("Web Tool")>-1?"Tool":"Geoprocessing Service":"Geocoding Service"===e?i="Locator":"Geoenrichment Service"===e?i="GeoEnrichment Service":"Microsoft Powerpoint"===e?i="Microsoft PowerPoint":"GeoJson"===e?i="GeoJSON":"Globe Service"===e?i="Globe Layer":"Vector Tile Service"===e?i="Tile Layer":"netCDF"===e?i="NetCDF":"Map Service"===e?i=-1===t.indexOf("Spatiotemporal")&&(t.indexOf("Hosted Service")>-1||t.indexOf("Tiled")>-1)&&-1===t.indexOf("Relational")?"Tile Layer":"Map Image Layer":e&&e.toLowerCase().indexOf("add in")>-1?i=e.replace(/(add in)/gi,"Add-In"):"datastore catalog service"===e?i="Big Data File Share":"Compact Tile Package"===e&&(i="Tile Package (tpkx)"),i}readExtent(e){return e&&e.length?new g.b(e[0][0],e[0][1],e[1][0],e[1][1]):null}get iconUrl(){const e=this.type&&this.type.toLowerCase()||"",t=this.typeKeywords||[];let i,r=!1,a=!1,o=!1,s=!1,n=!1,l=!1;return e.indexOf("service")>0||"feature collection"===e||"kml"===e||"wms"===e||"wmts"===e||"wfs"===e?(r=t.indexOf("Hosted Service")>-1,"feature service"===e||"feature collection"===e||"kml"===e||"wfs"===e?(a=t.indexOf("Table")>-1,o=t.indexOf("Route Layer")>-1,s=t.indexOf("Markup")>-1,n=-1!==t.indexOf("Spatiotemporal"),l=-1!==t.indexOf("UtilityNetwork"),i=n&&a?"spatiotemporaltable":a?"table":o?"routelayer":s?"markup":n?"spatiotemporal":r?"featureshosted":l?"utilitynetwork":"features"):i="map service"===e||"wms"===e||"wmts"===e?r||t.indexOf("Tiled")>-1||"wmts"===e?"maptiles":"mapimages":"scene service"===e?t.indexOf("Line")>-1?"sceneweblayerline":t.indexOf("3DObject")>-1?"sceneweblayermultipatch":t.indexOf("Point")>-1?"sceneweblayerpoint":t.indexOf("IntegratedMesh")>-1?"sceneweblayermesh":t.indexOf("PointCloud")>-1?"sceneweblayerpointcloud":t.indexOf("Polygon")>-1?"sceneweblayerpolygon":t.indexOf("Building")>-1?"sceneweblayerbuilding":"sceneweblayer":"image service"===e?t.indexOf("Elevation 3D Layer")>-1?"elevationlayer":t.indexOf("Tiled Imagery")>-1?"tiledimagerylayer":"imagery":"stream service"===e?"streamlayer":"vector tile service"===e?"vectortile":"datastore catalog service"===e?"datastorecollection":"geocoding service"===e?"geocodeservice":"geoprocessing service"===e&&t.indexOf("Web Tool")>-1&&this.portal&&this.portal.isPortal?"tool":"layers"):i="web map"===e||"cityengine web scene"===e?"maps":"web scene"===e?t.indexOf("ViewingMode-Local")>-1?"webscenelocal":"websceneglobal":"web mapping application"===e||"mobile application"===e||"application"===e||"operation view"===e||"desktop application"===e?"apps":"map document"===e||"map package"===e||"published map"===e||"scene document"===e||"globe document"===e||"basemap package"===e||"mobile basemap package"===e||"mobile map package"===e||"project package"===e||"project template"===e||"pro map"===e||"layout"===e||"layer"===e&&t.indexOf("ArcGIS Pro")>-1||"explorer map"===e&&t.indexOf("Explorer Document")?"mapsgray":"service definition"===e||"csv"===e||"shapefile"===e||"cad drawing"===e||"geojson"===e||"360 vr experience"===e||"netcdf"===e||"administrative report"===e?"datafiles":"explorer add in"===e||"desktop add in"===e||"windows viewer add in"===e||"windows viewer configuration"===e?"appsgray":"arcgis pro add in"===e||"arcgis pro configuration"===e?"addindesktop":"rule package"===e||"file geodatabase"===e||"sqlite geodatabase"===e||"csv collection"===e||"kml collection"===e||"windows mobile package"===e||"map template"===e||"desktop application template"===e||"gml"===e||"arcpad package"===e||"code sample"===e||"form"===e||"document link"===e||"earth configuration"===e||"operations dashboard add in"===e||"rules package"===e||"image"===e||"workflow manager package"===e||"explorer map"===e&&t.indexOf("Explorer Mapping Application")>-1||t.indexOf("Document")>-1?"datafilesgray":"network analysis service"===e||"geoprocessing service"===e||"geodata service"===e||"geometry service"===e||"geoprocessing package"===e||"locator package"===e||"geoprocessing sample"===e||"workflow manager service"===e?"toolsgray":"layer"===e||"layer package"===e||"explorer layer"===e?"layersgray":"scene package"===e?"scenepackage":"mobile scene package"===e?"mobilescenepackage":"tile package"===e||"compact tile package"===e?"tilepackage":"task file"===e?"taskfile":"report template"===e?"report-template":"statistical data collection"===e?"statisticaldatacollection":"insights workbook"===e?"workbook":"insights model"===e?"insightsmodel":"insights page"===e?"insightspage":"insights theme"===e?"insightstheme":"hub initiative"===e?"hubinitiative":"hubpage"===e?"hubpage":"hub event"===e?"hubevent":"hub site application"===e?"hubsite":"relational database connection"===e?"relationaldatabaseconnection":"big data file share"===e?"datastorecollection":"image collection"===e?"imagecollection":"style"===e?"style":"desktop style"===e?"desktopstyle":"dashboard"===e?"dashboard":"raster function template"===e?"rasterprocessingtemplate":"vector tile package"===e?"vectortilepackage":"ortho mapping project"===e?"orthomappingproject":"ortho mapping template"===e?"orthomappingtemplate":"solution"===e?"solutions":"geopackage"===e?"geopackage":"deep learning package"===e?"deeplearningpackage":"real time analytic"===e?"realtimeanalytics":"big data analytic"===e?"bigdataanalytics":"feed"===e?"feed":"excalibur imagery project"===e?"excaliburimageryproject":"notebook"===e?"notebook":"storymap"===e?"storymap":"survey123 add in"===e?"survey123addin":"mission"===e?"mission":"mission report"===e?"missionreport":"quickcapture project"===e?"quickcaptureproject":"pro report"===e?"proreport":"urban model"===e?"urbanmodel":"web experience"===e?"experiencebuilder":"web experience template"===e?"webexperiencetemplate":"workflow"===e?"workflow":"insights script"===e?"insightsscript":"kernel gateway connection"===e?"kernelgatewayconnection":"hub initiative template"===e?"hubinitiativetemplate":"storymap theme"===e?"storymaptheme":"knowledge graph"===e?"knowledgegraph":"maps",i?Object(b.a)("esri/images/portal/"+i+"16.png"):null}get isLayer(){return["Map Service","Feature Service","Feature Collection","Scene Service","Image Service","Stream Service","Vector Tile Service","WMTS","WMS"].indexOf(this.type)>-1}get itemUrl(){const e=this.get("portal.restUrl");return e?e+"/content/items/"+this.id:null}get thumbnailUrl(){const e=this.itemUrl,t=this.thumbnail;return e&&t?this.portal._normalizeUrl(`${e}/info/${t}?f=json`):null}get userItemUrl(){const e=this.get("portal.restUrl");if(!e)return null;const t=this.owner||this.get("portal.user.username");return t?`${e}/content/users/${this.ownerFolder?`${t}/${this.ownerFolder}`:t}/items/${this.id}`:null}load(e){this.portal||(this.portal=y.a.getDefault());const t=this.portal.load(e).then(()=>this.sourceJSON?this.sourceJSON:this.id&&this.itemUrl?this.portal._request(this.itemUrl,{signal:Object(s.h)(e)?e.signal:null}):{}).then(e=>{this.sourceJSON=e,this.read(e)});return this.addResolvingPromise(t),Promise.resolve(this)}addRating(e){const t={method:"post",query:{}};return e instanceof j.a&&(e=e.rating),isNaN(e)||"number"!=typeof e||(t.query.rating=e),this.portal._request(this.itemUrl+"/addRating",t).then(()=>new j.a({rating:e,created:new Date}))}clone(){const e={access:this.access,accessInformation:this.accessInformation,applicationProxies:Object(o.b)(this.applicationProxies),avgRating:this.avgRating,categories:Object(o.b)(this.categories),created:Object(o.b)(this.created),culture:this.culture,description:this.description,extent:Object(o.b)(this.extent),groupCategories:Object(o.b)(this.groupCategories),id:this.id,itemControl:this.itemControl,licenseInfo:this.licenseInfo,modified:Object(o.b)(this.modified),name:this.name,numComments:this.numComments,numRatings:this.numRatings,numViews:this.numViews,owner:this.owner,ownerFolder:this.ownerFolder,portal:this.portal,screenshots:Object(o.b)(this.screenshots),size:this.size,snippet:this.snippet,tags:Object(o.b)(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:Object(o.b)(this.typeKeywords),url:this.url};return this.loaded&&(e.loadStatus="loaded"),new r({sourceJSON:this.sourceJSON}).set(e)}createPostQuery(){const e=this.toJSON();for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]));return e}deleteRating(){return this.portal._request(this.itemUrl+"/deleteRating",{method:"post"}).then(()=>{})}fetchData(e="json",t){return this.portal._request(this.itemUrl+"/data",{responseType:e,...t})}fetchRating(e){return this.portal._request(this.itemUrl+"/rating",e).then(e=>null!=e.rating?(e.created=new Date(e.created),new j.a(e)):null)}fetchRelatedItems(e,t){return this.portal._requestToTypedArray(this.itemUrl+"/relatedItems",{query:e,...t},r)}getThumbnailUrl(e){let t=this.thumbnailUrl;return t&&e&&(t+="&w="+e),t}reload(){return this.portal._request(this.itemUrl,{cacheBust:!0}).then(e=>(this.sourceJSON=e,this.read(e),this))}update(e){return this.id?this.load().then(()=>this.portal._signIn()).then(()=>{const t=e&&e.data,i={method:"post"};i.query=this.createPostQuery();for(const e in i.query)null===i.query[e]&&(i.query[e]="");return i.query.clearEmptyFields=!0,null!=t&&("string"==typeof t?i.query.text=t:"object"==typeof t&&(i.query.text=JSON.stringify(t))),this.portal._request(this.userItemUrl+"/update",i).then(()=>this.reload())}):Promise.reject(new l.a("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}updateThumbnail(e){return this.id?this.load().then(()=>this.portal._signIn()).then(()=>{const t=e.thumbnail,i=e.filename,r={method:"post"};if("string"==typeof t)Object(h.u)(t)?r.query={data:t}:r.query={url:Object(h.y)(t)},Object(s.h)(i)&&(r.query.filename=i);else{const e=new FormData;Object(s.h)(i)?e.append("file",t,i):e.append("file",t),r.body=e}return this.portal._request(this.userItemUrl+"/updateThumbnail",r).then(()=>this.reload())}):Promise.reject(new l.a("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async fetchResources(e={},t){return(await i.e(9).then(i.bind(null,185))).fetchResources(this,e,t)}async addResource(e,t,r){const a=await i.e(9).then(i.bind(null,185));return e.portalItem=this,a.addOrUpdateResource(e,"add",t,r)}async removeResource(e,t){const r=await i.e(9).then(i.bind(null,185));if(e.portalItem&&e.portalItem.itemUrl!==this.itemUrl)throw new l.a("removeresource:portal-item-mismatch","The portal item associated with the provided resource does not match the item");return r.removeResource(this,e,t)}async removeAllResources(e){return(await i.e(9).then(i.bind(null,185))).removeAllResources(this,e)}resourceFromPath(e){return new O.a({portalItem:this,path:e})}toJSON(){const e=this.extent,t={created:this.created&&this.created.getTime(),description:this.description,extent:e&&[[e.xmin,e.ymin],[e.xmax,e.ymax]],id:this.id,modified:this.modified&&this.modified.getTime(),name:this.name,owner:this.owner,ownerFolder:this.ownerFolder,snippet:this.snippet,tags:this.tags,thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:this.typeKeywords,url:this.url};return Object(o.g)(t)}static fromJSON(e){if(!e)return null;if(e.declaredClass)throw new Error("JSON object is already hydrated");return new r({sourceJSON:e})}_getPostQuery(){const e=this.toJSON();for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]));return e}};Object(a.a)([Object(n.d)({type:["private","shared","org","public"]})],v.prototype,"access",void 0),Object(a.a)([Object(n.d)()],v.prototype,"accessInformation",void 0),Object(a.a)([Object(n.d)({json:{read:{source:"appProxies"}}})],v.prototype,"applicationProxies",void 0),Object(a.a)([Object(n.d)()],v.prototype,"avgRating",void 0),Object(a.a)([Object(n.d)()],v.prototype,"categories",void 0),Object(a.a)([Object(n.d)({type:Date})],v.prototype,"created",void 0),Object(a.a)([Object(n.d)()],v.prototype,"culture",void 0),Object(a.a)([Object(n.d)()],v.prototype,"description",void 0),Object(a.a)([Object(n.d)({readOnly:!0})],v.prototype,"displayName",null),Object(a.a)([Object(n.d)({type:g.b})],v.prototype,"extent",void 0),Object(a.a)([Object(m.a)("extent")],v.prototype,"readExtent",null),Object(a.a)([Object(n.d)()],v.prototype,"groupCategories",void 0),Object(a.a)([Object(n.d)({readOnly:!0})],v.prototype,"iconUrl",null),Object(a.a)([Object(n.d)()],v.prototype,"id",void 0),Object(a.a)([Object(n.d)({readOnly:!0})],v.prototype,"isLayer",null),Object(a.a)([Object(n.d)()],v.prototype,"itemControl",void 0),Object(a.a)([Object(n.d)({readOnly:!0})],v.prototype,"itemUrl",null),Object(a.a)([Object(n.d)()],v.prototype,"licenseInfo",void 0),Object(a.a)([Object(n.d)({type:Date})],v.prototype,"modified",void 0),Object(a.a)([Object(n.d)()],v.prototype,"name",void 0),Object(a.a)([Object(n.d)()],v.prototype,"numComments",void 0),Object(a.a)([Object(n.d)()],v.prototype,"numRatings",void 0),Object(a.a)([Object(n.d)()],v.prototype,"numViews",void 0),Object(a.a)([Object(n.d)()],v.prototype,"owner",void 0),Object(a.a)([Object(n.d)()],v.prototype,"ownerFolder",void 0),Object(a.a)([Object(n.d)({type:y.a})],v.prototype,"portal",void 0),Object(a.a)([Object(n.d)()],v.prototype,"screenshots",void 0),Object(a.a)([Object(n.d)()],v.prototype,"size",void 0),Object(a.a)([Object(n.d)()],v.prototype,"snippet",void 0),Object(a.a)([Object(n.d)()],v.prototype,"sourceJSON",void 0),Object(a.a)([Object(n.d)()],v.prototype,"tags",void 0),Object(a.a)([Object(n.d)()],v.prototype,"thumbnail",void 0),Object(a.a)([Object(n.d)({readOnly:!0})],v.prototype,"thumbnailUrl",null),Object(a.a)([Object(n.d)()],v.prototype,"title",void 0),Object(a.a)([Object(n.d)()],v.prototype,"type",void 0),Object(a.a)([Object(n.d)()],v.prototype,"typeKeywords",void 0),Object(a.a)([Object(n.d)()],v.prototype,"url",void 0),Object(a.a)([Object(n.d)({readOnly:!0})],v.prototype,"userItemUrl",null),v=r=Object(a.a)([Object(p.g)("esri.portal.PortalItem")],v);var f=v;t.default=f},186:function(e,t,i){"use strict";var r=i(11),a=(i(17),i(1),i(19),i(4),i(6),i(0)),o=(i(9),i(3),i(7)),s=i(15),n=(i(16),i(12),i(2),i(10),i(8)),l=(i(5),i(13)),c=i(14),p=i(48);i(21);const d=a.a.getLogger("esri.portal.PortalItemResource");let u=class extends s.d{constructor(e){super(e),this.portalItem=null}normalizeCtorArgs(e){return e&&e.portalItem&&e.path?{...e,path:this.normalizePath(e.path,e.portalItem)}:e}set path(e){Object(a.h)(e)&&Object(c.s)(e)?d.error("portalitemresource:invalid-path","A portal item resource path must be relative"):this._set("path",e)}_castPath(e){return this.normalizePath(e,this.portalItem)}get url(){return this.portalItem&&this.path?`${this.portalItem.itemUrl}/resources/${this.path}`:null}get itemRelativeUrl(){return this.portalItem&&this.path?"./resources/"+this.path:null}fetch(e="json",t){const i=this.url;if(Object(a.c)(i))throw new n.a("portal-item-resource:fetch","Portal item resource does not refer to a valid item or path");return this.portalItem.portal._request(i,{responseType:e,signal:Object(a.g)(t,"signal")})}async update(e,t){return(await i.e(9).then(i.bind(null,185))).addOrUpdateResource(this,"update",e,t)}hasPath(){return Object(a.h)(this.path)}normalizePath(e,t){return Object(a.c)(e)?e:(e=e.replace(/^\/+/,""),Object(a.h)(t)&&Object(c.s)(e)&&(e=Object(c.A)(e,t.itemUrl)),e.replace(/^\/+/,"").replace(/^(\.\/)?resources\//,""))}};Object(r.a)([Object(o.d)()],u.prototype,"portalItem",void 0),Object(r.a)([Object(o.d)({type:String,value:null})],u.prototype,"path",null),Object(r.a)([Object(p.a)("path")],u.prototype,"_castPath",null),Object(r.a)([Object(o.d)({type:String,readOnly:!0})],u.prototype,"url",null),Object(r.a)([Object(o.d)({type:String,readOnly:!0})],u.prototype,"itemRelativeUrl",null),u=Object(r.a)([Object(l.g)("esri.portal.PortalItemResource")],u);var h=u;t.a=h},187:function(e,t,i){"use strict";var r=i(11),a=(i(17),i(1),i(19),i(4),i(6),i(0),i(9),i(3),i(7)),o=i(15),s=(i(16),i(12),i(2),i(10),i(8),i(5),i(13));i(14),i(21);let n=class extends o.d{constructor(e){super(e),this.created=null,this.rating=null}};Object(r.a)([Object(a.d)()],n.prototype,"created",void 0),Object(r.a)([Object(a.d)()],n.prototype,"rating",void 0),n=Object(r.a)([Object(s.g)("esri.portal.PortalRating")],n);var l=n;t.a=l}});