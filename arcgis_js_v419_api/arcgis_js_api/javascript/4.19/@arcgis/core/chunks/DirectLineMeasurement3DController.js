/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"./ArrayPool.js";import"../core/lang.js";import"./deprecate.js";import"./object.js";import"../kernel.js";import"../config.js";import{b as t}from"./Logger.js";import"./string.js";import"./metadata.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import r from"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./Message.js";import"../core/Error.js";import"./ensureType.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import"./Evented.js";import"../core/Collection.js";import"./JSONSupport.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./reader.js";import"./writer.js";import"./resourceExtension.js";import"../geometry/SpatialReference.js";import"../request.js";import"./assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import{r as o,b as a,d as n}from"./mathUtils2.js";import{c as m}from"./vec3f64.js";import"./common.js";import{k as c}from"./vec3.js";import"./zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"./extentUtils.js";import p from"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import l from"../core/Handles.js";import{f as j,e as d,S as h,W as g}from"./unitUtils.js";import{whenOnce as u}from"../core/watchUtils.js";import"./mat4.js";import"./pe.js";import"./aaBoundingRect.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformationStep.js";import"../geometry/support/GeographicTransformation.js";import{canProjectWithoutEngine as f,projectPointToVector as _,projectPointToWGS84ComparableLonLat as y}from"../geometry/projection.js";import"./_commonjsHelpers.js";import{isSupported as b,geodesicLengths as P,inverseGeodeticSolver as w}from"../geometry/support/geodesicUtils.js";import"./geometryEngineBase.js";import"./hydrated.js";import{geodesicLength as z}from"../geometry/geometryEngine.js";import{U as M,Q as v}from"./UnitNormalizer.js";let D=class extends r{constructor(e){super(e),this._tempStartPosition=m(),this._tempEndPosition=m(),this._tempCornerPosition=m(),this._unitNormalizer=new M,this._handles=new l}initialize(){this._handles.add(u(this.view,"ready",(()=>this._initialize()),!0))}_initialize(){const e=this.view.spatialReference,t=j(e),s=t===h?g:t;this._sphericalPCPF=s;const r=f(e,s);this._unitNormalizer.spatialReference=r?s:e,this._handles.add([this.dataObject.watch("startPoint",(()=>this._updateMeasurement()),!0),this.dataObject.watch("endPoint",(()=>this._updateMeasurement()),!0),this.dataObject.watch("settings",(()=>this._updateMeasurement()),!0)],"model"),this._updateMeasurement()}_updateMeasurement(){const e=this.dataObject.startPoint,s=this.dataObject.endPoint;if(t(e)||t(s))return void(this.dataObject.measurement=null);const r=this._euclideanDistances(e,s),i=this._exactGeodesicDistanceAndAngle(e,s,r.horizontal.value);this.dataObject.measurement={directDistance:r.direct,horizontalDistance:r.horizontal,verticalDistance:r.vertical,geodesicDistance:i.distance,geodesicAngle:i.angle}}_euclideanDistances(e,t){e.z>t.z&&(e=[e,e=t][0]);const s=e.clone();s.z=t.z;const r=this._tempStartPosition,i=this._tempEndPosition,o=this._tempCornerPosition,a=this.view.spatialReference,n=this._sphericalPCPF,m=f(a,n)?n:a;_(e,r,m),_(t,i,m),_(s,o,m);const p=c(r,i),l=c(o,i),j=Math.abs(t.z-e.z),d=e=>this._unitNormalizer.normalizeDistance(e),h=d(p),g=d(l),u=d(j);return{direct:new v(h,"meters"),horizontal:new v(g,"meters"),vertical:new v(u,"meters")}}_exactGeodesicDistanceAndAngle(e,t,s){const r=e.spatialReference,i=new p({paths:[e,t],spatialReference:r}),o=r.isGeographic&&b(r)?P([i],"meters")[0]:r.isWebMercator?z(i,"meters"):void 0,{distance:a,angle:n}=o?{distance:o,angle:this._fallbackGeodesicAngle(o,r)}:this._fallbackGeodesicDistance(e,t,s);return{distance:new v(a,"meters"),angle:new v(n,"degrees")}}_fallbackGeodesicAngle(e,t){return e/d(t).metersPerDegree}_fallbackGeodesicDistance(e,t,s){if(y(e,U)){y(t,G);const e=n(U[0]),s=n(U[1]),r=n(G[0]),i=n(G[1]),m=Math.abs(r-e),c=a(Math.sin(s)*Math.sin(i)+Math.cos(s)*Math.cos(i)*Math.cos(m)),p=o(c),l={distance:0};return w(l,[U[0],U[1]],[G[0],G[1]]),{distance:l.distance,angle:p}}{const t=e.spatialReference,r=s;return{distance:r,angle:this._fallbackGeodesicAngle(r,t)}}}};e([s()],D.prototype,"view",void 0),e([s()],D.prototype,"dataObject",void 0),D=e([i("esri.views.3d.interactive.graphics.DirectLineMeasurement3D.DirectLineMeasurement3DController")],D);const U=m(),G=m();export{D as DirectLineMeasurement3DController};