// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/has ../../../../../core/maybe ../../../../../core/Logger ../../../../../core/accessorSupport/ensureType ../../../../../core/handleUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/jsonMap ../../../../../core/accessorSupport/decorators/subclass ../../../../../core/urlUtils ../../../../../core/uuid ../../../../../portal/support/resourceExtension ../../../../../core/Evented ../../../../../core/mathUtils ../../../../../core/screenUtils ../../../../../chunks/vec3f64 ../../../../../chunks/vec3 ../../../../../core/Handles ../../../../../core/unitUtils ../../../../../core/watchUtils ../../../../../chunks/mat4 ../../../../../geometry/support/aaBoundingRect ../../../../../chunks/vec2f64 ../../../../../chunks/vec2 ../../../../../support/elevationInfoUtils ../../../support/stack ../../../support/geometryUtils ../../../layers/graphics/elevationAlignmentUtils ../../../layers/graphics/ElevationContext ../../../webgl-engine/lib/Texture ../../../../interactive/editGeometry/EditGeometry ../../../../interactive/dragEventPipeline ../../../../interactive/InteractiveToolBase ../dragEventPipeline3D ../../manipulatorUtils ../manipulatorUtils ../../analysisTools/slice/sliceToolUtils ../../analysisTools/slice/images/heading-rotate-png ../../visualElements/OutlineVisualElement ../../../layers/graphics/GraphicState ../visualElementUtils ../manipulations/MoveXYGraphicManipulation ../reshapeGraphic/ReshapeOperation ./PreserveAspectRatio ../../../../interactive/editGeometry/support/editPlaneUtils".split(" "),
function(m,G,p,la,k,ma,na,J,q,oa,K,pa,qa,ra,L,M,N,C,l,O,H,P,Q,R,S,x,T,r,h,U,V,W,X,w,Y,D,E,Z,n,aa,ba,ca,da,ea,fa,ha,t){m.ExtentTransformTool=function(I){function y(a){a=I.call(this,a)||this;a.enableZ=!0;a.enableRotation=!0;a.enableScaling=!0;a._preserveAspectRatio=new ha.PreserveAspectRatio;a.grabbing=!1;a.inputState=null;a.type="transform-3d";a.handles=new O;a.moveZManipulator=null;a.resizeManipulators=null;a.rotateManipulator=null;a.attachmentOrigin=null;a.outlineVisualElement=null;a.mapBounds=h.boundedPlane.create();
a.mapBoundsStart=h.boundedPlane.create();a.displayBounds=h.boundedPlane.create();a.displayBoundsStart=h.boundedPlane.create();a.displayBoundsMarginStart=0;a.resizeHandles=[{direction:[1,0]},{direction:[1,1]},{direction:[0,1]},{direction:[-1,1]},{direction:[-1,0]},{direction:[-1,-1]},{direction:[0,-1]},{direction:[1,-1]}];return a}G._inheritsLoose(y,I);var e=y.prototype;e.initialize=function(){this.graphicState=new ca.GraphicState({graphic:this.graphic});var a=this.graphic.geometry;this.reshapeHelper=
new fa.ReshapeGeometryHelper(X.EditGeometry.fromGeometry(a,this.view.viewingMode),a.type);this.graphicMoveManipulation=new ea.MoveXYGraphicManipulation({tool:this,view:this.view,graphicState:this.graphicState});this.handles.add(this._createMoveXYGraphicDragPipeline());this.moveZManipulator=n.createShiftManipulator(this.view,0);this.moveZManipulator.state|=n.IsShiftEdgeOnScreenFlag;this.handles.add(this.watch("enableZ",()=>this.updateManipulatorAvailability(this.moveZManipulator,0)));this.handles.add(this._createMoveZDragPipeline());
this.manipulators.add(this.moveZManipulator);this.resizeManipulators=this.resizeHandles.map(b=>{const c=n.createResizeManipulator(this.view,b);this.handles.add(this.watch("enableScaling",()=>this.updateManipulatorAvailability(c,2)));c.events.on("grab-changed",d=>this._onResizeGrab(d));this.handles.add(this._createResizeDragPipeline(c,b));return c});this.manipulators.addMany(this.resizeManipulators);this.rotateManipulatorTexture=new W.Texture(aa,{width:64,height:64,mipmap:!0,preMultiplyAlpha:!0});
this.view._stage&&this.view._stage.add(this.rotateManipulatorTexture);this.rotateManipulator=n.createRotateManipulator(this.view,this.rotateManipulatorTexture);this.handles.add(this.watch("enableRotation",()=>this.updateManipulatorAvailability(this.rotateManipulator,3)));this.rotateManipulator.events.on("grab-changed",b=>{this._onRotateGrab(b)});this.handles.add(this._createRotateDragPipeline(this.rotateManipulator));this.manipulators.add(this.rotateManipulator);this.calculateMapBounds();this.updateDisplayBounds(this.mapBounds);
a=da.createVisualElements({view:this.view,graphic:this.graphic,forEachManipulator:b=>this.forEachManipulator(b),onManipulatorsChanged:()=>J.makeHandle()});this.outlineVisualElement=a.visualElement instanceof ba.OutlineVisualElement?a.visualElement:null;k.isSome(this.outlineVisualElement)&&this.handles.add(this.outlineVisualElement.events.on("attachment-origin-changed",()=>this.updateDisplayBounds(this.mapBounds)));this.handles.add(a);this.handles.add([this.graphicState.on("changed",()=>this.onGeometryChanged()),
this.graphicState.watch("displaying",()=>this.updateAllManipulatorAvailability()),P.init(this.graphicState,"isDraped",()=>this.graphicDrapedChanged()),this.view.trackGraphicState(this.graphicState)]);(a=this.view.pointsOfInterest)&&this.handles.add(a.focus.watch("location",()=>this.updateDisplayBounds(this.mapBounds)));a=b=>{this.handles.add(b.events.on("grab-changed",()=>{this.grabbing=b.grabbing;this.updateAllManipulatorAvailability()}))};this.forEachManipulator(a);this.graphicMoveManipulation.forEachManipulator(a);
a=(b,c)=>{this.handles.add(b.events.on("immediate-click",d=>{1===c&&this.emit("immediate-click",{...d,graphic:this.graphic});d.stopPropagation()}))};this.forEachManipulator(a);this.graphicMoveManipulation.forEachManipulator(a);this.onGeometryChanged();this.updateAllManipulatorAvailability()};e.graphicDrapedChanged=function(){this.handles.remove("draped-elevation-changes");this.updateDisplayBounds(this.mapBounds);this.graphicState.isDraped&&this.handles.add(this.view.elevationProvider.on("elevation-change",
a=>{k.isSome(this.attachmentOrigin)&&R.containsXY(a.extent,this.attachmentOrigin.x,this.attachmentOrigin.y)&&this.updateDisplayBounds(this.mapBounds)}),"draped-elevation-changes")};e.updateAllManipulatorAvailability=function(){this.forEachManipulator((a,b)=>this.updateManipulatorAvailability(a,b))};e.updateManipulatorAvailability=function(a,b){const c=this.graphicState.displaying,d=this.grabbing&&!a.grabbing;a.interactive=!d;const g=this.enableZ&&Z.canMoveZ(this.graphic);switch(b){case 3:a.available=
c&&this.enableRotation;break;case 2:a.available=c&&(this.enableScaling||this.enableRotation||g);a.interactive=!d&&this.enableScaling;a.state=this.enableScaling?n.resizeNormal:n.resizeOutlineOnly;break;case 0:a.available=c&&g;break;default:a.available=c}};e.forEachManipulator=function(a){this.resizeManipulators.forEach(b=>a(b,2));a(this.rotateManipulator,3);a(this.moveZManipulator,0)};e.destroy=function(){this.view._stage&&this.view._stage.remove(this.rotateManipulatorTexture);this.handles.destroy();
this.graphicMoveManipulation.destroy();this.reshapeHelper.destroy();this._set("view",null);this._set("graphic",null)};e.reset=function(){};e.onDetach=function(){this.displayBounds=this.mapBounds=null};e.onGeometryChanged=function(){this.updateDisplayBounds(this.mapBounds)};e.calculateMapBounds=function(){const a=this.graphic.geometry,b=this.reshapeHelper.editGeometry;var c=b.components[0].edges[0];c=x.subtract(r.sv2d.get(),c.left.pos,c.right.pos);x.normalize(c,c);var d=k.unwrapOr(E.getGraphicAttachmentOrigin(this.view,
this.graphic),a.extent.center);d=80*this.view.pixelSizeAt(d);const g=this.view.spatialReference;g!==a.spatialReference&&(d*=H.getMetersPerUnitForSR(g)/H.getMetersPerUnitForSR(a.spatialReference));t.calculateOrientedBounds(c,b,d,this.mapBounds)};e.updateDisplayBounds=function(a){const b=this.graphic.geometry;var c=k.isSome(this.outlineVisualElement)&&!this.graphicState.isDraped&&k.isSome(this.outlineVisualElement.attachmentOrigin)?this.outlineVisualElement.attachmentOrigin:E.getGraphicAttachmentOrigin(this.view,
this.graphic);this.attachmentOrigin=k.unwrapOr(c,b.extent.center);c=k.isSome(c)?c.z:U.evaluateElevationAlignmentAtPoint(a.origin,this.view.elevationProvider,V.ElevationContext.fromElevationInfo(T.getGraphicEffectiveElevationInfo(this.graphic)),this.view.renderCoordsHelper);const d=h.boundedPlane.copy(a);l.set(d.origin,a.origin[0],a.origin[1],c);t.mapPlaneToRenderPlane(d,this.view.renderCoordsHelper,b.spatialReference,this.displayBoundsMargin(),this.displayBounds);this.updateManipulators()};e.displayBoundsMargin=
function(){const a=this.view.pointsOfInterest;return 10*this.view.pixelSizeAt(a?a.focus.location:this.reshapeHelper.geometry.extent.center)};e._createMoveXYGraphicDragPipeline=function(){return this.graphicMoveManipulation.createDragPipeline((a,b,c)=>this.applyGraphicMoveSteps(b,c))};e._createMoveZDragPipeline=function(){const a=this.view,b=this.reshapeHelper.geometry.spatialReference;return w.createManipulatorDragEventPipeline(this.moveZManipulator,(c,d,g)=>{c=C.clone(c.renderLocation);d=d.next(D.screenToZConstrained(a,
c,b)).next(w.addScreenDelta());this.applyGraphicMoveSteps(d,g)})};e.applyGraphicMoveSteps=function(a,b){a=a.next(c=>{"start"===c.action&&(this.inputState={type:"move"},h.boundedPlane.copy(this.mapBounds,this.mapBoundsStart),this.emit("graphic-translate-start",{graphic:this.graphic,dxScreen:c.screenDeltaX,dyScreen:c.screenDeltaY}));return c}).next(w.addMapDelta()).next(this._moveDragUpdateGeometry()).next(c=>{const d={graphic:this.graphic,dxScreen:c.screenDeltaX,dyScreen:c.screenDeltaY};switch(c.action){case "start":case "update":(c.mapEnd.x-
c.mapStart.x||c.mapEnd.y-c.mapStart.y||c.mapEnd.z-c.mapStart.z)&&this.emit("graphic-translate",d);break;case "end":this.inputState=null,this.emit("graphic-translate-stop",d)}return c});b.next(()=>{k.isSome(this.inputState)&&this.emit("graphic-translate-stop",{graphic:this.graphic,dxScreen:0,dyScreen:0});this.cancel()});return a};e._moveDragUpdateGeometry=function(){return a=>{if(k.isNone(this.inputState)||"move"!==this.inputState.type)return a;var b=[];for(const c of this.reshapeHelper.editGeometry.components)b.push(...c.vertices);
b=this.reshapeHelper.moveVertices(b,a.mapDeltaX,a.mapDeltaY,a.mapDeltaZ,"start"===a.action?0:1);t.apply(b,this.mapBounds);this.graphic.geometry=this.reshapeHelper.geometry;return a}};e._onResizeGrab=function(a){"start"===a.action&&(a=this._calculatePickRay(a.screenPoint),h.plane.intersectRay(this.displayBounds.plane,a,r.sv3d.get())&&(h.boundedPlane.copy(this.displayBounds,this.displayBoundsStart),h.boundedPlane.copy(this.mapBounds,this.mapBoundsStart),this.displayBoundsMarginStart=this.displayBoundsMargin(),
this.inputState={type:"resize"}))};e._createResizeDragPipeline=function(a,b){return w.createManipulatorDragEventPipeline(a,(c,d,g)=>{k.isNone(this.inputState)||(d.next(f=>{"start"===f.action&&this.emit("graphic-scale-start",{graphic:this.graphic,xScale:1,yScale:1});return f}).next(D.screenToRenderPlane(this.view,this.displayBoundsStart.plane)).next(f=>({...f,handle:b})).next(this._resizeDragRenderPlaneToFactors()).next(this._preserveAspectRatio.createDragEventPipelineStep(),this._preserveAspectRatio.next).next(this._resizeDragUpdateGeometry()).next(f=>
{const z={graphic:this.graphic,xScale:f.factor1,yScale:f.factor2};switch(f.action){case "start":case "update":this.emit("graphic-scale",z);break;case "end":this.inputState=null,this.emit("graphic-scale-stop",z)}return f}),g.next(()=>{k.isSome(this.inputState)&&this.emit("graphic-scale-stop",{graphic:this.graphic,xScale:1,yScale:1});this.cancel()}))})};e._resizeDragRenderPlaneToFactors=function(){return a=>{const b=this.displayBoundsStart,c=a.handle.direction,d=this.displayBoundsMargin(),g=this.displayBoundsMarginStart;
var f=l.copy(r.sv3d.get(),b.origin);l.scaleAndAdd(f,f,b.basis1,-c[0]);l.scaleAndAdd(f,f,b.basis2,-c[1]);const z=l.subtract(r.sv3d.get(),a.renderEnd,f),ia=l.subtract(r.sv3d.get(),a.renderStart,f),ja=n.isDiagonalResizeHandle(a.handle);f=n.calculateDiagonalResizeHandleScale(b);const ka=n.calculateDiagonalResizeHandleScale(this.displayBounds)/f;f=(u,F)=>{if(0===u)return 1;let v=l.length(F),A=.5*u*l.dot(F,z)/v;const B=0>A?-1:1;ja&&(u=v-.5*u*l.dot(F,ia)/v,A+=u*B*ka);u=v<1.5*g?1:1E-6;v=Math.max(v-g,1E-6);
0<B&&(A-=d);return B*Math.max(A/v*B,u)};return{...a,factor1:f(c[0],b.basis1),factor2:f(c[1],b.basis2)}}};e._resizeDragUpdateGeometry=function(){return a=>{var b=l.copy(C.create(),this.mapBoundsStart.origin);l.scaleAndAdd(b,b,this.mapBoundsStart.basis1,-a.handle.direction[0]);l.scaleAndAdd(b,b,this.mapBoundsStart.basis2,-a.handle.direction[1]);const c=x.set(S.create(),this.mapBoundsStart.basis1[0],this.mapBoundsStart.basis1[1]);x.normalize(c,c);const d=[];for(var g of this.reshapeHelper.editGeometry.components)d.push(...g.vertices);
g="start"===a.action?0:1;b=this.reshapeHelper.scaleVertices(d,this.reshapeHelper.editGeometry.coordinateHelper.fromXYZ(b),c,a.factor1,a.factor2,g,1);h.boundedPlane.copy(this.mapBoundsStart,this.mapBounds);t.apply(b,this.mapBounds);this.graphic.geometry=this.reshapeHelper.geometry;return a}};e._onRotateGrab=function(a){if("start"===a.action){var b=n.createRotatePlane(this.displayBounds,this.view.renderCoordsHelper,1,h.plane.create());a=this._calculatePickRay(a.screenPoint);h.plane.intersectRay(b,a,
r.sv3d.get())&&(h.boundedPlane.copy(this.displayBounds,this.displayBoundsStart),h.boundedPlane.copy(this.mapBounds,this.mapBoundsStart),this.inputState={type:"rotate",rotatePlane:b})}};e._createRotateDragPipeline=function(a){return w.createManipulatorDragEventPipeline(a,(b,c,d)=>{b=this.inputState;k.isNone(b)||(c.next(g=>{"start"===g.action&&this.emit("graphic-rotate-start",{graphic:this.graphic,angle:0});return g}).next(D.screenToRenderPlane(this.view,b.rotatePlane)).next(this._rotateDragRenderPlaneToRotate(b)).next(this._rotateDragUpdateGeometry()).next(g=>
{const f={graphic:this.graphic,angle:M.rad2deg(g.rotateAngle)};switch(g.action){case "start":case "update":this.emit("graphic-rotate",f);break;case "end":this.inputState=null,this.emit("graphic-rotate-stop",f)}return g}),d.next(()=>{k.isSome(this.inputState)&&this.emit("graphic-rotate-stop",{graphic:this.graphic,angle:0});this.cancel()}))})};e._rotateDragRenderPlaneToRotate=function(a){return b=>{const c=h.plane.normal(a.rotatePlane),d=E.calculateInputRotationTransform(b.renderStart,b.renderEnd,this.displayBounds.origin,
c);return{...b,rotateAxis:c,rotateAngle:d}}};e._rotateDragUpdateGeometry=function(){return a=>{var b=l.copy(C.create(),this.mapBoundsStart.origin);const c=[];for(var d of this.reshapeHelper.editGeometry.components)c.push(...d.vertices);d="start"===a.action?0:1;b=this.reshapeHelper.rotateVertices(c,this.reshapeHelper.editGeometry.coordinateHelper.fromXYZ(b),a.rotateAngle,d,1);h.boundedPlane.copy(this.mapBoundsStart,this.mapBounds);t.apply(b,this.mapBounds);this.graphic.geometry=this.reshapeHelper.geometry;
return a}};e._calculatePickRay=function(a){const b=h.ray.create();a=N.screenPointObjectToArray(a);h.ray.fromScreen(this.view.state.camera,a,b);l.normalize(b.direction,b.direction);return b};e.updateManipulators=function(){if(this.visible){var a=n.calculateBoundedPlaneTranslateRotate(this.displayBounds,r.sm4d.get());n.updateRotateHeadingHandle(this.rotateManipulator,a,this.displayBounds,this.view.renderCoordsHelper);this.updateZMoveHandle(this.moveZManipulator,a);this.resizeManipulators.forEach((b,
c)=>{n.updateResizeHandle(b,this.resizeHandles[c],a,this.displayBounds)})}};e.updateZMoveHandle=function(a,b){var c=this.displayBounds;c=l.subtract(r.sv3d.get(),c.origin,c.basis1);const d=r.sm4d.get();Q.rotateZ(d,b,2*Math.PI/2);d[12]=0;d[13]=0;d[14]=0;a.modelTransform=d;a.renderLocation=c};e.cancel=function(){const a=this.reshapeHelper.editGeometry.lastOperation;k.isNone(a)||(this.reshapeHelper.undo(),this.graphic.geometry=this.reshapeHelper.geometry,t.unapply(a,this.mapBounds),this.updateDisplayBounds(this.mapBounds),
this.inputState=null)};e.canUndo=function(){return this.reshapeHelper.canUndo};e.undo=function(){if(k.isSome(this.inputState))this.view.activeTool=null;else if(this.canUndo()){const a=this.reshapeHelper.undo();this.graphic.geometry=this.reshapeHelper.geometry;t.unapply(k.unwrap(a),this.mapBounds);this.updateDisplayBounds(this.mapBounds)}};e.canRedo=function(){return this.reshapeHelper.canRedo};e.redo=function(){if(this.canRedo()){const a=this.reshapeHelper.redo();this.graphic.geometry=this.reshapeHelper.geometry;
t.apply(k.unwrap(a),this.mapBounds);this.updateDisplayBounds(this.mapBounds)}};G._createClass(y,[{key:"preserveAspectRatio",get:function(){return this._preserveAspectRatio.enabled},set:function(a){this._preserveAspectRatio.enabled=a;this._set("preserveAspectRatio",a)}}]);return y}(L.EventedMixin(Y.InteractiveToolBase));p.__decorate([q.property({constructOnly:!0,nonNullable:!0})],m.ExtentTransformTool.prototype,"view",void 0);p.__decorate([q.property({constructOnly:!0,nonNullable:!0})],m.ExtentTransformTool.prototype,
"graphic",void 0);p.__decorate([q.property({constructOnly:!0,nonNullable:!0})],m.ExtentTransformTool.prototype,"enableZ",void 0);p.__decorate([q.property()],m.ExtentTransformTool.prototype,"enableRotation",void 0);p.__decorate([q.property()],m.ExtentTransformTool.prototype,"enableScaling",void 0);p.__decorate([q.property()],m.ExtentTransformTool.prototype,"preserveAspectRatio",null);p.__decorate([q.property()],m.ExtentTransformTool.prototype,"grabbing",void 0);p.__decorate([q.property()],m.ExtentTransformTool.prototype,
"inputState",void 0);p.__decorate([q.property({readOnly:!0})],m.ExtentTransformTool.prototype,"type",void 0);m.ExtentTransformTool=p.__decorate([K.subclass("esri.views.3d.interactive.editingTools.graphicTransform3D.ExtentTransformTool")],m.ExtentTransformTool);m.EPSILON=1E-6;Object.defineProperty(m,"__esModule",{value:!0})});