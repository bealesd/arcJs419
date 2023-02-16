/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import"./tslib.es6.js";import"./ArrayPool.js";import{f as t}from"../core/lang.js";import"./deprecate.js";import"./object.js";import"../kernel.js";import"../config.js";import{i as r}from"./Logger.js";import"./string.js";import"./metadata.js";import"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./Message.js";import"../core/Error.js";import"./ensureType.js";import"../core/accessorSupport/decorators/subclass.js";import"./JSONSupport.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./enumeration.js";import"./reader.js";import"./writer.js";import"./resourceExtension.js";import o from"../geometry/SpatialReference.js";import"../request.js";import"./assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"./mathUtils2.js";import"./vec3f64.js";import"./common.js";import{x as e}from"./vec3.js";import"./colorUtils.js";import"../Color.js";import"./zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"../renderers/PointCloudRenderer.js";import"./PointSizeSplatAlgorithm.js";import"./LegendOptions.js";import"../renderers/PointCloudClassBreaksRenderer.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/PointCloudStretchRenderer.js";import"../renderers/PointCloudUniqueValueRenderer.js";import"./unitUtils.js";import"./mat4.js";import"./pe.js";import"./aaBoundingRect.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformationStep.js";import"../geometry/support/GeographicTransformation.js";import{projectBuffer as s}from"../geometry/projection.js";import"./vec4.js";import{c as i}from"./quat.js";import{f as a,c as p}from"./vec3f32.js";import{b as n}from"./quatf32.js";import"./I3SBinaryReader.js";import{r as m,g as f,e as u,f as l}from"./PointCloudWorkerUtil.js";class j{transform(o){const e=this._transform(o),s=[e.points.buffer,e.rgb.buffer];r(e.pointIdFilterMap)&&s.push(e.pointIdFilterMap.buffer);for(const r of e.attributes)"buffer"in r.values&&t(r.values.buffer)&&r.values.buffer!==e.rgb.buffer&&s.push(r.values.buffer);return Promise.resolve({result:e,transferList:s})}_transform(t){const e=m(t.schema,t.geometryBuffer);let s=e.length/3,i=null;const a=[],p=f(t.primaryAttributeData,e,s);r(t.primaryAttributeData)&&p&&a.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:p});const n=f(t.modulationAttributeData,e,s);r(t.modulationAttributeData)&&n&&a.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:n});let j=u(t.rendererInfo,p,n,s);if(t.filterInfo&&t.filterInfo.length>0&&r(t.filterAttributesData)){const r=t.filterAttributesData.map((t=>{const r=f(t,e,s),o={attributeInfo:t.attributeInfo,values:r};return a.push(o),o}));i=new Uint32Array(s),s=l(e,j,i,t.filterInfo,r)}for(const r of t.userAttributesData){const t=f(r,e,s);a.push({attributeInfo:r.attributeInfo,values:t})}3*s<j.length&&(j=new Uint8Array(j.buffer.slice(0,3*s))),this._applyElevationOffsetInPlace(e,s,t.elevationOffset);const c=this._transformCoordinates(e,s,t.obb,o.fromJSON(t.inSR),o.fromJSON(t.outSR));return{obb:t.obb,points:c,rgb:j,attributes:a,pointIdFilterMap:i}}_transformCoordinates(t,r,o,n,m){if(!s(t,n,0,t,m,0,r))throw Error("Can't reproject");const f=a(o.center[0],o.center[1],o.center[2]),u=p(),l=p();i(c,o.quaternion);const j=new Float32Array(3*r);for(let s=0;s<r;s++)u[0]=t[3*s]-f[0],u[1]=t[3*s+1]-f[1],u[2]=t[3*s+2]-f[2],e(l,u,c),o.halfSize[0]=Math.max(o.halfSize[0],Math.abs(l[0])),o.halfSize[1]=Math.max(o.halfSize[1],Math.abs(l[1])),o.halfSize[2]=Math.max(o.halfSize[2],Math.abs(l[2])),j[3*s]=u[0],j[3*s+1]=u[1],j[3*s+2]=u[2];return j}_applyElevationOffsetInPlace(t,r,o){if(0!==o)for(let e=0;e<r;e++)t[3*e+2]+=o}}const c=n();function b(){return new j}export default b;
