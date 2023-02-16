// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/has ../../../../../core/maybe ../../../../../core/Logger ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/property ../../../../../core/jsonMap ../../../../../core/accessorSupport/decorators/subclass ../../../../../core/urlUtils ../../../../../core/uuid ../../../../../portal/support/resourceExtension ../../../../../core/Accessor ../../../../../intl/locale ../../../../../core/mathUtils ../../../../../intl/messages ../../../../../intl ../../../../../core/Handles ../../../../../geometry/projectionEllipsoid ../../../../../core/unitUtils ../../../../../core/watchUtils ../../../../../geometry/projection ../../../../../core/Quantity ../../../../../core/quantityFormatUtils ../../graphics/AreaMeasurement3D ./AreaMeasurementPathHelper ../support/measurementUtils ./MeasurementData ../support/UnitNormalizer".split(" "),
function(p,c,b,k,H,I,e,J,w,K,L,M,x,y,z,q,N,A,n,h,B,C,r,t,D,E,u,F,G){b=function(v){function l(){var a=v.apply(this,arguments)||this;a._unitNormalizer=new G;a._measurementData=new F;a._handles=new A;a.dataObject=new D.AreaMeasurement3D;a.path=new E.AreaMeasurement3DPathHelper;a.cursorPoint=null;a.state="initial";a.lastDraggedVertex=null;a.mode="auto";a.unit="metric";a.active=!1;a.fittingSettings={maxRelativeErrorCoplanar:.005,maxRelativeErrorAlmostCoplanar:.01,verticalAngleThreshold:80};a.geodesicMeasurementDistanceThreshold=
1E5;return a}p._inheritsLoose(l,v);var f=l.prototype;f.initialize=function(){this.path.model=this.dataObject;q.fetchMessageBundle("esri/core/t9n/Units").then(a=>{this.messages=a});this._handles.add(y.onLocaleChange(async()=>{this.messages=await q.fetchMessageBundle("esri/core/t9n/Units")}));this._handles.add(B.whenTrue(this.sceneView,"ready",()=>{var {spatialReference:a}=this.sceneView,d=n.getSphericalPCPF(a);d=d===n.SphericalECEFSpatialReference?n.WGS84ECEFSpatialReference:d;this._worldSpatialReference=
a=!a||C.canProjectWithoutEngine(a,d)?d:a;this._unitNormalizer.spatialReference=a;this.path.view=this.sceneView}),"scene-view");this.reset();this._handles.add(this.path.on("clear",()=>{this.notifyChange("numVertices");this._updateMeasurementData()}));this._handles.add(this.path.on("vertex-update",()=>{this.notifyChange("numVertices");this._updateMeasurementData()}));this._handles.add(this.watch("state",()=>this._updateMeasurementData(),!0));this._handles.add(this.watch("fittingSettings",()=>this._updateMeasurementData()))};
f.destroy=function(){this._handles.destroy();this._handles=null};f._updateMeasurementData=function(){const a=this._measurementData;a.update(this.path,this.sceneView,this._unitNormalizer,this.validMeasurement,this.sceneView.renderSpatialReference,this._worldSpatialReference,this.fittingSettings);this.dataObject.result={area:a.area,geodesicArea:a.geodesicArea,pathLength:a.pathLength,geodesicPathLength:a.geodesicPathLength,perimeterLength:a.perimeterLength};this.notifyChange("measurementData")};f.reset=
function(){this.clearMeasurement();this._updateMeasurementData()};f.clearMeasurement=function(){this.path.clear();this.state="initial";this.cursorPoint=null};f.finishMeasurement=function(){3>this.path.numVertices?this.clearMeasurement():this.state="measured"};f._preferredAreaUnit=function(a,d){switch(d){case "metric":return h.preferredMetricAreaUnit(a.value,a.unit);case "imperial":return h.preferredImperialAreaUnit(a.value,a.unit);default:return d}};f._preferredLengthUnit=function(a,d){d=this._deriveLengthUnitFromAreaUnit(d);
switch(d){case "metric":return h.preferredMetricLengthUnit(a.value,a.unit);case "imperial":return h.preferredImperialLengthUnit(a.value,a.unit);default:return d}};f._toPreferredAreaUnit=function(a,d){return a.toUnit(this._preferredAreaUnit(a,d))};f._toPreferredLengthUnit=function(a,d){return a.toUnit(this._preferredLengthUnit(a,d))};f._formatAreaLabel=function(a,d,g){return a&&d&&t.formatDecimal(a,d,this._preferredAreaUnit(d,g))};f._formatLengthLabel=function(a,d,g){return a&&d&&t.formatDecimal(a,
d,this._preferredLengthUnit(d,g))};f._deriveLengthUnitFromAreaUnit=function(a){switch(a){case "metric":return"metric";case "imperial":return"imperial";case "square-inches":return"inches";case "square-feet":return"feet";case "square-yards":return"yards";case "square-miles":return"miles";case "square-us-feet":return"us-feet";case "square-millimeters":return"millimeters";case "square-centimeters":return"centimeters";case "square-decimeters":return"decimeters";case "square-meters":return"meters";case "square-kilometers":return"kilometers";
case "acres":return"imperial";case "ares":case "hectares":return"metric"}throw Error("unhandled area unit");};p._createClass(l,[{key:"validMeasurement",get:function(){return 3<=this.numVertices&&"measured"===this.state||"editing"===this.state}},{key:"numVertices",get:function(){return this.path.numVertices}},{key:"measurementData",get:function(){return this._measurementData}},{key:"area",get:function(){return this.measurementData.area}},{key:"geodesicArea",get:function(){return this.measurementData.geodesicArea}},
{key:"areaLabel",get:function(){return this._formatAreaLabel(this.messages,"geodesic"===this.measurementMode?this.measurementData.geodesicArea:this.measurementData.area,this.unit)}},{key:"pathLength",get:function(){return this.measurementData.pathLength}},{key:"geodesicPathLength",get:function(){return this.measurementData.geodesicPathLength}},{key:"pathLengthLabel",get:function(){return this._formatLengthLabel(this.messages,"geodesic"===this.measurementMode?this.measurementData.geodesicPathLength:
this.measurementData.pathLength,this.unit)}},{key:"perimeterLength",get:function(){return this.measurementData.perimeterLength}},{key:"geodesicPerimeterLength",get:function(){return this.measurementData.geodesicPathLength}},{key:"perimeterLengthLabel",get:function(){return this.measurementData.perimeterLength&&this._formatLengthLabel(this.messages,"geodesic"===this.measurementMode?this.measurementData.geodesicPathLength:this.measurementData.perimeterLength,this.unit)}},{key:"cursorSegmentLength",
get:function(){const a=this.path.lastPoint;return k.isSome(a)&&k.isSome(this.cursorPoint)?new r(this._unitNormalizer.normalizeDistance(u.segmentLengthEuclidean(a,this.cursorPoint,this._worldSpatialReference)),"meters"):null}},{key:"geodesicCursorSegmentLength",get:function(){const a=this.path.lastPoint;return k.isSome(a)&&k.isSome(this.cursorPoint)?new r(u.segmentLengthGeodesic(a,this.cursorPoint),"meters"):null}},{key:"cursorSegmentLengthLabel",get:function(){return this._formatLengthLabel(this.messages,
"geodesic"===this.measurementMode?this.geodesicCursorSegmentLength:this.cursorSegmentLength,this.unit)}},{key:"viewData",get:function(){const a=this.measurementData,d="geodesic"===this.measurementMode;var g=d?this.geodesicArea:this.area;let m=1;g&&(g=this._toPreferredAreaUnit(g,this.unit),m=z.nextHighestPowerOfTen(Math.sqrt(g.value)/Math.sqrt(300)),m*=Math.sqrt(h.convertUnit(1,g.unit,"square-meters")),m/=this._unitNormalizer.normalizeDistance(1));return{validMeasurement:this.validMeasurement,path:this.path,
positionsGeographic:a.positionsGeographic,positionsRenderCoords:a.positionsRenderCoords,positionsProjected:a.positionsProjectedWorldCoords,positionsFittedRenderCoords:a.positionsFittedRenderCoords,intersectingSegments:d?a.geodesicIntersectingSegments:a.intersectingSegments,triangleIndices:d?a.geodesicTriangleIndices:a.triangleIndices,fittingMode:a.fittingMode,areaCentroid:d?a.geodesicAreaCentroidRenderCoords:a.areaCentroidRenderCoords,pathLengthLabelSegmentIndex:this.validMeasurement?0:this.path.numVertices-
2,perimeterLengthLabelSegmentIndex:0,checkerSize:m}}},{key:"measurementMode",get:function(){let a=this.mode;"auto"===a&&(a="euclidean",(this.geodesicPathLength?this.geodesicPathLength.value:0)+(!this.validMeasurement&&this.geodesicCursorSegmentLength?this.geodesicCursorSegmentLength.value:0)>this.geodesicMeasurementDistanceThreshold&&(a="geodesic"));null==this.geodesicPathLength&&(a="euclidean");return a}}]);return l}(x);c.__decorate([e.property()],b.prototype,"messages",void 0);c.__decorate([e.property()],
b.prototype,"dataObject",void 0);c.__decorate([e.property({constructOnly:!0})],b.prototype,"sceneView",void 0);c.__decorate([e.property({readOnly:!0})],b.prototype,"path",void 0);c.__decorate([e.property()],b.prototype,"cursorPoint",void 0);c.__decorate([e.property()],b.prototype,"state",void 0);c.__decorate([e.property()],b.prototype,"lastDraggedVertex",void 0);c.__decorate([e.property()],b.prototype,"mode",void 0);c.__decorate([e.property()],b.prototype,"unit",void 0);c.__decorate([e.property()],
b.prototype,"active",void 0);c.__decorate([e.property()],b.prototype,"fittingSettings",void 0);c.__decorate([e.property({readOnly:!0})],b.prototype,"validMeasurement",null);c.__decorate([e.property({readOnly:!0})],b.prototype,"numVertices",null);c.__decorate([e.property({readOnly:!0})],b.prototype,"measurementData",null);c.__decorate([e.property({readOnly:!0})],b.prototype,"area",null);c.__decorate([e.property({readOnly:!0})],b.prototype,"geodesicArea",null);c.__decorate([e.property({readOnly:!0})],
b.prototype,"areaLabel",null);c.__decorate([e.property({readOnly:!0})],b.prototype,"pathLength",null);c.__decorate([e.property({readOnly:!0})],b.prototype,"geodesicPathLength",null);c.__decorate([e.property({readOnly:!0})],b.prototype,"pathLengthLabel",null);c.__decorate([e.property({readOnly:!0})],b.prototype,"perimeterLength",null);c.__decorate([e.property({readOnly:!0})],b.prototype,"geodesicPerimeterLength",null);c.__decorate([e.property({readOnly:!0})],b.prototype,"perimeterLengthLabel",null);
c.__decorate([e.property({readOnly:!0})],b.prototype,"cursorSegmentLength",null);c.__decorate([e.property({readOnly:!0})],b.prototype,"geodesicCursorSegmentLength",null);c.__decorate([e.property({readOnly:!0})],b.prototype,"cursorSegmentLengthLabel",null);c.__decorate([e.property({readOnly:!0})],b.prototype,"viewData",null);c.__decorate([e.property()],b.prototype,"geodesicMeasurementDistanceThreshold",void 0);c.__decorate([e.property({readOnly:!0})],b.prototype,"measurementMode",null);return b=c.__decorate([w.subclass("esri.views.3d.interactive.measurementTools.areaMeasurement3D.AreaMeasurement3DModel")],
b)});