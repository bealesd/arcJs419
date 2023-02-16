/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{i as t,b as i,c as s,u as r}from"./Logger.js";import{o as n}from"./metadata.js";import{n as a}from"./compilerUtils.js";import{E as o}from"./Evented.js";import c from"../geometry/Point.js";import{d as l}from"./mathUtils2.js";import{c as h,Z as d}from"./vec3f64.js";import{e as u,t as f,i as m,b as g,g as p,h as _,a as v,s as b,n as y,c as S}from"./vec3.js";import"../geometry.js";import{b as w,d as j,s as E,g as L}from"./screenUtils.js";import{e as T}from"./unitUtils.js";import{c as P,g as R,m as O,i as A,a as z}from"./mat4.js";import{x}from"./aaBoundingRect.js";import{canProjectWithoutEngine as D,projectPoint as C,sphericalPCPFtoLonLatElevation as F,computeLatLonToENURotation as M}from"../geometry/projection.js";import{c as q,f as I}from"./vec4f64.js";import{c as W,a as V}from"./quatf64.js";import{f as B}from"./mat3.js";import{a as U}from"./BufferView.js";import{j as k}from"./vec2.js";import{f as N,B as G}from"./aaBoundingBox.js";import{g as $}from"./ElevationProvider.js";import{g as H,S as K,T as Z,d as J,C as Q,l as X,n as Y,E as ee,p as te,a as ie,b as se,V as re,q as ne,r as ae,s as oe,F as ce,x as le,R as he,m as de,M as ue,K as fe,G as me,A as ge,w as pe}from"./VertexColor.glsl.js";import{P as _e}from"./Program.js";import{m as ve,a as be,d as ye}from"./renderState.js";import{n as Se}from"./InterleavedLayout.js";import{a as we,s as je}from"./stack.js";import{u as Ee,r as Le,p as Te}from"./geometryUtils.js";import{k as Pe,W as Re,C as Oe,c as Ae,f as ze,G as xe}from"./ColorMaterial.js";import{a as De}from"./Util.js";import{O as Ce}from"./Object3D.js";import{C as Fe}from"./Camera.js";class Me{constructor(e){this.idHint=0,this.camera=new Fe,this._elevation={offset:0,override:null},this.collisionType={type:"point"},this.collisionPriority=0,this._renderObjects=[],this.autoScaleRenderObjects=!0,this._available=!0,this._noDisplayCount=0,this._radius=10,this._worldSized=!1,this.focusMultiplier=2,this.touchMultiplier=2.5,this.worldOriented=!1,this._modelTransform=W(),this._worldFrame=null,this._renderLocation=h(),this._renderLocationDirty=!0,this._location=new c({x:0,y:0,z:0}),this._elevationAlignedLocation=new c,this._elevationAlignedLocationDirty=!0,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.cursor=null,this._grabbing=!1,this.dragging=!1,this._hovering=!1,this._selected=!1,this._state=0,this._focused=!1,this.events=new o.EventEmitter,this._screenLocation={screenPointArray:w(),renderScreenPointArray:j(),pixelSize:0},this._screenLocationDirty=!0,this._applyObjectTransform=null,this._engineResourcesAddedToStage=!1,this._engineResources=null,this._attached=!1,this._engineLayer=null,this._materialIdReferences=null,this._location.spatialReference=e.view.spatialReference;for(const t in e)this[t]=e[t];this.view.state&&this.view.state.camera&&this.camera.copyFrom(this.view.state.camera)}destroy(){this._removeResourcesFromStage(),this._engineResources=null,this.view=null,this.camera=null}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this._elevationAlignedLocationDirty=!0,this._renderLocationDirty=!0,this._updateEngineObject()}get renderObjects(){return this._renderObjects}set renderObjects(e){this._removeResourcesFromStage(),this._engineResources=null,this._renderObjects=e.slice(),this._updateEngineObject()}set available(e){e!==this._available&&(this._available=e,this._updateEngineObject())}get available(){return this._available}disableDisplay(){return this._noDisplayCount++,1===this._noDisplayCount&&this._updateEngineObject(),{remove:n((()=>{this._noDisplayCount--,0===this._noDisplayCount&&this._updateEngineObject()}))}}set radius(e){e!==this._radius&&(this._radius=e,this._updateEngineObject())}get radius(){return this._radius}set worldSized(e){e!==this._worldSized&&(this._worldSized=e,this._updateEngineObject())}get worldSized(){return this._worldSized}get modelTransform(){return this._modelTransform}set modelTransform(e){qe(e)&&(this._screenLocationDirty=!0),P(this._modelTransform,e),this._updateEngineObject()}get renderLocation(){return this._renderLocationDirty&&(this._renderLocationDirty=!1,this.view.renderCoordsHelper.toRenderCoords(this.elevationAlignedLocation,this._renderLocation),this.worldOriented?(this._worldFrame||(this._worldFrame=W()),function(e,t,i){switch(e.viewingMode){case"local":return A(i),!0;case"global":{const s=T(e.renderCoordsHelper.spatialReference);F(t,0,Ge,0,s.radius),M(l(Ge[1]),l(Ge[0]),i)}}}(this.view,this._renderLocation,this._worldFrame)):this._worldFrame&&(this._worldFrame=null)),this._renderLocation}set renderLocation(e){this.view.renderCoordsHelper.fromRenderCoords(e,this._location),this.elevationAlignedLocation=this._location}get location(){return this._location}set location(e){Pe(e,this._location),this._renderLocationDirty=!0,this._screenLocationDirty=!0,this._elevationAlignedLocationDirty=!0,this._updateEngineObject(),this.events.emit("location-update",{location:this._location})}get elevationAlignedLocation(){return this._elevationAlignedLocationDirty?(this._evaluateElevationAlignment(),this._updateElevationAlignedLocation(),this._elevationAlignedLocation):this._elevationAlignedLocation}set elevationAlignedLocation(e){Pe(e,this._location),this._evaluateElevationAlignment(),this._location.z-=this._elevation.offset,this._updateElevationAlignedLocation(),this._updateEngineObject(),this.events.emit("location-update",{location:this._location})}_updateElevationAlignedLocation(){this._elevationAlignedLocation.x=this.location.x,this._elevationAlignedLocation.y=this.location.y;const e=t(this._elevation.override)?this._elevation.override:this.location.z||0;this._elevationAlignedLocation.z=e+this._elevation.offset,this._elevationAlignedLocation.spatialReference=this.location.spatialReference,this._renderLocationDirty=!0,this._screenLocationDirty=!0,this._elevationAlignedLocationDirty=!1}grabbableForEvent(){return!0}get grabbing(){return this._grabbing}set grabbing(e){e!==this._grabbing&&(this._grabbing=e,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())}get hovering(){return this._hovering}set hovering(e){e!==this._hovering&&(this._hovering=e,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())}get selected(){return this._selected}set selected(e){e!==this._selected&&(this._selected=e,this._updateEngineObject(),this.events.emit("select-changed",{action:e?"select":"deselect"}))}get state(){return this._state}set state(e){e!==this._state&&(this._state=e,this._updateEngineObject())}updateStateEnabled(e,t){t?this.state|=e:this.state&=~e}_setFocused(e){e!==this._focused&&(this._focused=e,this.events.emit("focus-changed",{action:!0===e?"focus":"unfocus"}))}get focused(){return this._focused}get screenLocation(){return this.ensureScreenLocation(),this._screenLocation}ensureScreenLocation(){if(!this._screenLocationDirty)return;this._screenLocation.pixelSize=this.camera.computeScreenPixelSizeAt(this.renderLocation),this._screenLocationDirty=!1;let e;if(qe(this._modelTransform)){const t=this._calculateModelTransformOffset(Je);e=u(t,t,this.renderLocation)}else e=this.renderLocation;this.camera.projectToRenderScreen(e,this._screenLocation.renderScreenPointArray),this.camera.renderToScreen(this._screenLocation.renderScreenPointArray,this._screenLocation.screenPointArray)}get applyObjectTransform(){return this._applyObjectTransform}set applyObjectTransform(e){this._applyObjectTransform=e,this._screenLocationDirty=!0,this._updateEngineObject()}intersectionDistance(e,t){if(!this.available)return null;const s=E(e,Ie),r=this._getCollisionRadius(t),n=-1*this.collisionPriority;switch(this.collisionType.type){case"point":if(k(this.screenLocation.screenPointArray,s)<r*r)return this.screenLocation.renderScreenPointArray[2]+n;break;case"line":{const e=this.collisionType.paths,t=this._getWorldToScreenObjectScale(),a=this._calculateObjectTransform(t,ke),o=r*this.screenLocation.pixelSize,c=Le.fromScreen(this.camera,s,Ve);if(i(c))return null;for(const t of e){if(0===t.length)continue;const e=m(Ge,t[0],a);for(let i=1;i<t.length;i++){const s=m($e,t[i],a),r=Ee.closestRayDistance2(Ee.fromPoints(e,s,We),c);if(null!=r&&r<o*o){const t=u(we.get(),e,s);g(t,t,.5);const i=L(we.get());return this.camera.projectToRenderScreen(t,i),i[2]+n}p(e,s)}}break}case"disc":{var o;const e=this.collisionType.direction,t=null!=(o=this.collisionType.offset)?o:d,a=this._getWorldToScreenObjectScale(),c=this._calculateObjectTransform(a,ke),l=r*this.screenLocation.pixelSize,h=Le.fromScreen(this.camera,s,Ve);if(i(h))return null;const u=B(Be,c),g=f(Ke,e,u),p=m(Ze,t,c);Te.fromPositionAndNormal(p,g,Ne);const v=He;if(Te.intersectRay(Ne,h,v)&&_(v,p)<l*l)return this.screenLocation.renderScreenPointArray[2]+n;break}case"ribbon":{const{paths:e,direction:t}=this.collisionType,a=this._getWorldToScreenObjectScale(),o=this._calculateObjectTransform(a,ke),c=r*this.camera.computeScreenPixelSizeAt(this.renderLocation),l=Le.fromScreen(this.camera,s,Ve);if(i(l))return null;const h=B(Be,o),d=f(Ke,t,h),_=this._calculateModelTransformPosition(Ze);Te.fromPositionAndNormal(_,d,Ne);const v=He;if(!Te.intersectRay(Ne,l,v))break;for(const t of e){if(0===t.length)continue;const e=m(Ge,t[0],o);for(let i=1;i<t.length;i++){const s=m($e,t[i],o),r=Ee.distance2(Ee.fromPoints(e,s,We),v);if(null!=r&&r<c*c){const t=u(we.get(),e,s);g(t,t,.5);const i=L(we.get());return this.camera.projectToRenderScreen(t,i),i[2]+n}p(e,s)}}break}default:a(this.collisionType)}return null}attach(e={manipulator3D:{}}){var t;if(!this.view._stage)return;const s=e.manipulator3D;if(i(s.engineLayerId)){const e=new Re({isPickable:!1});this.view._stage.add(e),s.engineLayerId=e.id,this._engineLayer=e}else null!=(t=this.view._stage)&&t.getObject&&(this._engineLayer=this.view._stage.getObject(s.engineLayerId));s.engineLayerReferences=(s.engineLayerReferences||0)+1,this._materialIdReferences=s.materialIdReferences,i(this._materialIdReferences)&&(this._materialIdReferences=new Map,s.materialIdReferences=this._materialIdReferences),this.camera.copyFrom(this.view.state.camera),this._attached=!0,this._updateEngineObject(),D(this._location.spatialReference,this.view.spatialReference)||(this.location=new c({x:0,y:0,z:0,spatialReference:this.view.spatialReference}))}detach(e={manipulator3D:{}}){const t=e.manipulator3D;t.engineLayerReferences--;const i=0===t.engineLayerReferences;i&&(t.engineLayerId=null),this._removeResourcesFromStage(i),this._engineResources=null,this._engineLayer=null,this._materialIdReferences=null,this._attached=!1}onViewChange(){this.camera.copyFrom(this.view.state.camera),this._screenLocationDirty=!0,this._updateEngineObject()}onElevationChange(e){C(this.location,Qe,e.spatialReference),x(e.extent,Qe)&&(this.location=this._location)}_evaluateElevationAlignment(e=this.location){if(i(this.elevationInfo))return!1;let t=null,r=0;const n=s(this.elevationInfo.offset,0);switch(this.elevationInfo.mode){case"on-the-ground":t=s($(this.view.elevationProvider,e,"ground"),0);break;case"relative-to-ground":r=s($(this.view.elevationProvider,e,"ground"),0)+n;break;case"relative-to-scene":r=s($(this.view.elevationProvider,e,"scene"),0)+n;break;case"absolute-height":r=n}return(r!==this._elevation.offset||t!==this._elevation.override)&&(this._elevation.offset=r,this._elevation.override=t,!0)}_updateEngineObject(){if(!this._attached)return;if(!this.available)return void this._removeResourcesFromStage();const e=this._getWorldToScreenObjectScale(),i=ke;if(!0===this.autoScaleRenderObjects){const t=this._getFocusedSize(this._radius,this.focused)*e;this._calculateObjectTransform(t,i)}else this._calculateObjectTransform(e,i);const{objectsByState:s}=this._ensureEngineResources(),r=(this.focused?2:1)|(this.selected?8:4),n=this._noDisplayCount>0;for(const{stateMask:e,objects:t}of s){if(n){for(const e of t)e.setVisible(!1);continue}const s=!(0!=(15&e))||(r&e)==(15&e),a=!(0!=(65520&e))||(this.state&e)==(65520&e);if(s&&a)for(const e of t)e.setVisible(!0),e.transformation=i;else for(const e of t)e.setVisible(!1)}t(this._engineLayer)&&this._engineLayer.commit()}_ensureEngineResources(){if(i(this._engineResources)){const e=r(this._engineLayer),t=[],i=new Set;this.renderObjects.forEach((({material:e})=>{i.has(e)||(t.push(e),i.add(e))}));const s=(e,t)=>{const{geometry:i,material:s,transform:r}=t;Array.isArray(i)?i.forEach((t=>e.addGeometry(t,s,r))):e.addGeometry(i,s,r)},n=new Map;this._renderObjects.forEach((e=>{const t=new Ce({castShadow:!1});s(t,e);const i=e.stateMask||0,r=n.get(i)||[];r.push(t),n.set(i,r)}));const a=[];n.forEach(((e,t)=>a.push({stateMask:t,objects:e}))),this._engineResources={objectsByState:a,layer:e,materials:t}}return this._addResourcesToStage(),this._engineResources}_addResourcesToStage(){if(this._engineResourcesAddedToStage||i(this._engineResources))return;const{objectsByState:e,layer:t,materials:s}=this._engineResources;s.forEach((e=>{const t=r(this._materialIdReferences),i=t.get(e.id)||0;0===i&&this.view._stage.add(e),t.set(e.id,i+1)})),e.forEach((({objects:e})=>e.forEach((e=>{t.add(e),this.view._stage.add(e)})))),this._engineResourcesAddedToStage=!0}_removeResourcesFromStage(e=!1){if(!this._engineResourcesAddedToStage||i(this._engineResources))return;const{objectsByState:t,layer:s,materials:n}=this._engineResources;t.forEach((({objects:e})=>{s.removeMany(e),this.view._stage.removeMany(e)})),n.forEach((e=>{const t=r(this._materialIdReferences),i=t.get(e.id);1===i?(this.view._stage.remove(e),t.delete(e.id)):t.set(e.id,i-1)})),e&&this.view._stage.remove(s),this._engineResourcesAddedToStage=!1}_getCollisionRadius(e){return this._getFocusedSize(this.radius,!0)*("touch"===e?this.touchMultiplier:1)}_getFocusedSize(e,t){return e*(t?this.focusMultiplier:1)}_getWorldToScreenObjectScale(){return this._worldSized?1:this.screenLocation.pixelSize}_calculateModelTransformPosition(e){const t=this._getWorldToScreenObjectScale(),i=this._calculateObjectTransform(t,Ue);return v(e,i[12],i[13],i[14])}_calculateModelTransformOffset(e){const t=this._calculateModelTransformPosition(e);return b(e,t,this.renderLocation)}_calculateObjectTransform(e,i){return R(i,e,0,0,0,0,e,0,0,0,0,e,0,0,0,0,1),this._worldFrame&&O(i,i,this._worldFrame),O(i,i,this._modelTransform),i[12]+=this.renderLocation[0],i[13]+=this.renderLocation[1],i[14]+=this.renderLocation[2],i[15]=1,t(this._applyObjectTransform)&&this._applyObjectTransform(i),i}get test(){let e=!1;if(t(this._engineResources))for(const t in this._engineResources.objectsByState){const i=this._engineResources.objectsByState[t];for(const t of i.objects)if(t.isVisible){e=!0;break}if(e)break}return{areAnyResourcesVisible:e}}}function qe(e){return 0!==e[12]||0!==e[13]||0!==e[14]}const Ie=w(),We=Ee.create(),Ve=Le.create(),Be=V(),Ue=W(),ke=W(),Ne=Te.create(),Ge=h(),$e=h(),He=h(),Ke=h(),Ze=h(),Je=h(),Qe=new c({x:0,y:0,z:0,spatialReference:null});var Xe;!function(e){e.builder=function(e,t){e.vertex.uniforms.add("camPos","vec3").add("perScreenPixelRatio","float").add("screenSize","float"),e.vertex.code.add(H`
    float computeRenderPixelSizeAt( vec3 pWorld ){
      vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
      float viewDirectionDistance = abs(dot(viewForward, pWorld - camPos));
      return viewDirectionDistance*perScreenPixelRatio;
    }

    vec3 screenSizeScaling(vec3 position, vec3 anchor){
      return position * screenSize * computeRenderPixelSizeAt(anchor) + anchor;
    }
  `)},e.bindPassUniforms=function(e,t,i){e.setUniform1f("perScreenPixelRatio",i.camera.perScreenPixelRatio),e.setUniform1f("screenSize",t.screenSize)}}(Xe||(Xe={}));var Ye=Object.freeze({__proto__:null,build:function(e){const t=new K;return t.include(Z,{linearDepth:!1}),t.include(Xe.builder,{}),t.include(J,e),t.fragment.include(Q),t.vertex.uniforms.add("proj","mat4").add("view","mat4"),t.fragment.uniforms.add("color","vec4"),t.attributes.add("position","vec3"),t.varyings.add("vWorldPosition","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),e.screenSizeEnabled&&t.attributes.add("offset","vec3"),e.shadingEnabled&&(t.vertex.uniforms.add("viewNormal","mat4"),t.fragment.uniforms.add("shadedColor","vec4").add("shadingDirection","vec3"),t.attributes.add("normal","vec3"),t.varyings.add("vViewNormal","vec3")),t.vertex.code.add(H`
    void main(void) {
      vWorldPosition = ${e.screenSizeEnabled?"screenSizeScaling(offset, position)":"position"};
  `),e.shadingEnabled&&t.vertex.code.add(H`
      vec3 worldNormal = normal;
      vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;
    `),t.vertex.code.add(H`
    ${e.multipassTerrainEnabled?"depth = (view * vec4(vWorldPosition, 1.0)).z;":""}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  }
  `),e.multipassTerrainEnabled&&(t.fragment.include(X),t.include(Y,e)),t.fragment.code.add(H`
    void main() {
      discardBySlice(vWorldPosition);
      ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
    `),e.shadingEnabled?t.fragment.code.add(H`
      vec3 viewNormalNorm = normalize(vViewNormal);
      float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
      vec4 finalColor = mix(color, shadedColor, shadingFactor);
    `):t.fragment.code.add(H`
      vec4 finalColor = color;
    `),t.fragment.code.add(H`
      if (finalColor.a < ${H.float(ee)}) {
        discard;
      }
      ${7===e.output?H`gl_FragColor = vec4(finalColor.a);`:""}

      ${0===e.output?H`gl_FragColor = highlightSlice(finalColor, vWorldPosition); ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    }
    `),t}});class et extends se{initializeProgram(e){const t=et.shader.get(),i=this.configuration,s=t.build({output:i.output,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,screenSizeEnabled:i.screenSizeEnabled,shadingEnabled:i.shadingEnabled,OITEnabled:0===i.transparencyPassType,multipassTerrainEnabled:i.multipassTerrainEnabled,cullAboveGround:i.cullAboveGround});return new _e(e.rctx,s.generateSource("vertex"),s.generateSource("fragment"),it)}bindPass(e,t,i){const{screenSizeEnabled:s,shadingEnabled:r}=this.configuration,{color:n,shadingTint:a,shadingDirection:o}=t;re.bindProjectionMatrix(this.program,i.camera.projectionMatrix),this.program.setUniform4fv("color",n),i.multipassTerrainEnabled&&(this.program.setUniform2fv("cameraNearFar",i.camera.nearFar),this.program.setUniform2fv("inverseViewport",i.inverseViewport),ne(this.program,e,i)),r&&(this.program.setUniform4fv("shadedColor",this.blendColor(st,a,n)),this.program.setUniform3fv("shadingDirection",o),this.program.setUniformMatrix4fv("viewNormal",i.camera.viewInverseTransposeMatrix)),s&&Xe.bindPassUniforms(this.program,t,i)}blendColor(e,t,i){const s=1-t[3],r=t[3]+i[3]*s;return 0===r?(e[3]=r,e):(e[0]=(t[0]*t[3]+i[0]*i[3]*s)/r,e[1]=(t[1]*t[3]+i[1]*i[3]*s)/r,e[2]=(t[2]*t[3]+i[2]*i[3]*s)/r,e[3]=i[3],e)}bindDraw(e){re.bindView(this.program,e),re.bindCamPosition(this.program,e.origin,e.camera.viewInverseTransposeMatrix),J.bindUniformsWithOrigin(this.program,this.configuration,e)}setPipelineState(e){const t=this.configuration,i=3===e,s=2===e;return ve({blending:0!==t.output&&7!==t.output||!t.transparent?null:i?ae:oe(e),culling:(r=t.cullFace,0!==r&&{face:1===r?1028:1029,mode:2305}),depthTest:{func:s?513:t.shadingEnabled?515:513},depthWrite:i?t.writeDepth&&be:ce(e),colorWrite:ye,polygonOffset:i||s?null:le});var r}initializePipeline(){return this.setPipelineState(this.configuration.transparencyPassType)}}et.shader=new he(Ye,(()=>Promise.resolve().then((function(){return Ye}))));class tt extends ie{constructor(){super(...arguments),this.output=0,this.cullFace=0,this.slicePlaneEnabled=!1,this.transparent=!1,this.writeDepth=!0,this.screenSizeEnabled=!0,this.shadingEnabled=!0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!0}}e([te({count:8})],tt.prototype,"output",void 0),e([te({count:3})],tt.prototype,"cullFace",void 0),e([te()],tt.prototype,"slicePlaneEnabled",void 0),e([te()],tt.prototype,"transparent",void 0),e([te()],tt.prototype,"writeDepth",void 0),e([te()],tt.prototype,"screenSizeEnabled",void 0),e([te()],tt.prototype,"shadingEnabled",void 0),e([te({count:4})],tt.prototype,"transparencyPassType",void 0),e([te()],tt.prototype,"multipassTerrainEnabled",void 0),e([te()],tt.prototype,"cullAboveGround",void 0);const it={position:0,normal:1,offset:2},st=q();class rt extends ue{constructor(e){super(e,at),this.supportsEdges=!0,this.techniqueConfig=new tt,this._vertexAttributeLocations=it}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.params.cullFace,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.screenSizeEnabled=this.params.screenSizeEnabled,this.techniqueConfig.shadingEnabled=this.params.shadingEnabled,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!t||t.cullAboveGround,this.techniqueConfig}getPassParameters(){return this.params}intersect(e,t,i,s,r,n,a){if(this.params.screenSizeEnabled){const i=e.vertexAttributes.get("offset"),o={applyToVertex:(e,t,r,n)=>{const a=v(ct,i.data[3*n+0],i.data[3*n+1],i.data[3*n+2]),o=v(lt,e,t,r);return g(a,a,this.params.screenSize*s.camera.computeRenderPixelSizeAt(a)),u(o,o,a),[o[0],o[1],o[2]]},applyToAabb:e=>{const t=N(e,ct);return G(e,this.params.screenSize*s.camera.computeRenderPixelSizeAt(t))}};fe(e,t,s,r,n,o,a)}else fe(e,t,s,r,n,void 0,a)}getGLMaterial(e){return 0===e.output||7===e.output||4===e.output?new nt(e):void 0}createBufferWriter(){return new ot(this.params.screenSizeEnabled)}}class nt extends me{constructor(e){super(e),this.updateParameters()}updateParameters(e){this.technique=this.techniqueRep.acquireAndReleaseExisting(et,this.material.getTechniqueConfig(this.output,e),this.technique)}beginSlot(e){if(4===this.output)return 3===e;let t=3;return this.technique.configuration.transparent&&(t=this.technique.configuration.writeDepth?5:8),e===t}ensureParameters(e){this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.getPassParameters(),t)}}const at={color:[1,1,1,1],shadingTint:[0,0,0,.25],shadingDirection:y(h(),[.5,-.5,-.5]),transparent:!1,writeDepth:!0,slicePlaneEnabled:!1,cullFace:0,screenSizeEnabled:!1,screenSize:14,shadingEnabled:!0,...de};class ot{constructor(e){this.screenSizeEnabled=e;const t=Se().vec3f("position").vec3f("normal");this.screenSizeEnabled&&t.vec3f("offset"),this.vertexBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,i,s){if(ge(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,i,s),this.screenSizeEnabled){if(!t.vertexAttributes.has("offset"))throw new Error("offset vertex attribute required for screenSizeEnabled ShadedColorMaterial");{const r=t.vertexAttributes.get("offset"),n=t.indices.get("offset");De(3===r.size);const a=i.getField("offset",U);if(!a)throw new Error("unable to acquire view for offset");pe(n,r.data,e.invTranspTransformation,a,s)}}}}const ct=h(),lt=h();function ht(e,t=4){const i=I(e[0],e[1],e[2],e.length>3?e[3]:1),s=e[3]<1;return new rt({color:i,transparent:s,writeDepth:!0,cullFace:2,renderOccluded:t})}function dt(e,t=4){const i=I(e[0],e[1],e[2],4===e.length?e[3]:1);return new Oe({color:i,transparent:!0,writeDepth:!0,cullFace:1,renderOccluded:t})}function ut(e,t,i){return new Me({view:e,renderObjects:[{geometry:xe.createSphereGeometry(1,32,32),material:ht(I(t[0],t[1],t[2],null!=i?i:1))}]})}function ft(e,t,i,s){const r=b(we.get(),e,i),n=mt(r,S(we.get(),s,r),i,je.get());z(n,n);const a=m(we.get(),t,n);return Math.atan2(a[1],a[0])}function mt(e,t,i,s){const r=y(we.get(),e),n=y(we.get(),t),a=S(we.get(),r,n);return s[0]=r[0],s[1]=r[1],s[2]=r[2],s[3]=0,s[4]=n[0],s[5]=n[1],s[6]=n[2],s[7]=0,s[8]=a[0],s[9]=a[1],s[10]=a[2],s[11]=0,s[12]=i[0],s[13]=i[1],s[14]=i[2],s[15]=1,s}function gt(e,i){const s=e.getViewForGraphic(i);return t(s)&&"computeAttachmentOrigin"in s?s.computeAttachmentOrigin(i,e.spatialReference):null}function pt(e,s,r){const n=gt(e,r);t(n)?s.elevationAlignedLocation=n:function(e,t){if(i(t))return;const s=Ae(t);if(i(s))return;e.location=ze(s)}(s,r.geometry)}export{Me as M,rt as S,ht as a,ft as b,ut as c,mt as d,dt as e,gt as g,pt as p};
