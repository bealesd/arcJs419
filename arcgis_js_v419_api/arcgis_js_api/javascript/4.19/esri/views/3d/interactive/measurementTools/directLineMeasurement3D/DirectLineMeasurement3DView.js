// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/has ../../../../../core/maybe ../../../../../core/Logger ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/property ../../../../../core/jsonMap ../../../../../core/accessorSupport/decorators/subclass ../../../../../core/urlUtils ../../../../../core/uuid ../../../../../portal/support/resourceExtension ../../../../../core/Accessor ../../../../../core/screenUtils ../../../../../chunks/vec3f64 ../../../../../core/Handles ../../../support/ElevationProvider ../../../support/geometryUtils ../../../webgl-engine/lib/Intersector ../../visualElements/LaserlineVisualElement ../../manipulatorUtils ../support/viewUtils".split(" "),
function(c,t,k,G,d,H,I,n,J,x,K,L,M,y,z,q,u,A,v,B,C,D,r){var p;const w={laserLineGlowColor:[1,.5,0],laserLineGlowWidth:8,laserLineGlowFalloff:8,laserLineInnerColor:[1,1,1],laserLineInnerWidth:.75,laserLineGlobalAlpha:.75,laserLineEnabled:!0,handleColor:[1,.5,0],handleOpacity:.5,handleRadius:5};c.DirectLineMeasurement3DView=p=function(g){function l(a){var b=g.call(this,{model:a.model})||this;b._state="pending";b._visible=!1;b._laserLine=null;b._handles=new u;b._listenerHandles=null;b._cursorPosition=
q.create();b._startPosition=q.create();b._endPosition=q.create();b._lastDraggedHandle=null;b.dataObjectView=null;b._view=a.model.sceneView;b._params=a.params?r.copyParameter(w,a.params):r.copyParameter(w,{});b._intersector=new B.Intersector(b._view.state.mode);b._intersector.options.store=0;return b}t._inheritsLoose(l,g);var e=l.prototype;e.initialize=function(){const a=this.model.model,b=this._view.getAnalysisView(a);d.isSome(b)?this._initialize(b):this._view.whenAnalysisView(a).then(f=>this._initialize(f))};
e._initialize=function(a){switch(this._state){case "destroyed":return}this._set("dataObjectView",a);this._laserLine=new C.LaserlineVisualElement({view:this._view,attached:!0});this._initializeListeners();this._state="ready"};e.destroy=function(){switch(this._state){case "pending":this._state="destroyed";return;case "ready":break;default:return}this.hide();this._destroyListeners();this._handles.destroy();this._handles=null;this._laserLine.destroy();this._laserLine=null;this._state="destroyed"};e.createManipulators=
function(){const a=()=>{const h=D.createSphereManipulator(this._view,this._params.handleColor,this._params.handleOpacity);h.available=!1;h.radius=this._params.handleRadius;return h},b=a(),f=a();this.model.startPoint&&(b.location=d.unwrap(this.model.startPoint),b.available=!0);this.model.endPoint&&(f.location=d.unwrap(this.model.endPoint),f.available=!0);const m=()=>{let h=this._lastDraggedHandle;b.grabbing&&!f.grabbing&&(h="start");f.grabbing&&!b.grabbing&&(h="end");b.grabbing||f.grabbing||(h=null);
const E=h!==this._lastDraggedHandle;this._lastDraggedHandle=h;E&&this.visible&&this._updateLaserLine()};this._handles.add([b.events.on("grab-changed",()=>{m()}),f.events.on("grab-changed",()=>{m()})]);return{start:b,end:f}};e.show=function(){switch(this._state){case "ready":this._visible||(this._visible=!0,this.model.model.visible=!0,this._laserLine.style={innerColor:this._params.laserLineInnerColor,innerWidth:this._params.laserLineInnerWidth,glowColor:this._params.laserLineGlowColor,glowWidth:this._params.laserLineGlowWidth,
glowFalloff:this._params.laserLineGlowFalloff,globalAlpha:this._params.laserLineGlobalAlpha},this._laserLine.visible=!0,this._updateCursorPosition(),this._updateStartPosition(),this._updateEndPosition(),this._updateLaserLine());break;case "pending":this._visible=!0}};e.hide=function(){switch(this._state){case "ready":this._visible&&(this._visible=!1,this.model.model.visible=!1,this._laserLine.visible=!1,this._view.cursor=null);break;case "pending":this._visible=!1}};e.pick=function(a){var b=this._view.spatialReference;
a=z.screenPointObjectToArray(a.screenPoint);this._view.sceneIntersectionHelper.intersectToolIntersectorScreen(a,this._intersector);a=this._intersector.results.min;const f=q.create();if(!a.getIntersectionPoint(f))return new p.PickResult;b=this._view.renderCoordsHelper.fromRenderCoords(f,b);return d.isNone(b)?new p.PickResult:new p.PickResult("TerrainRenderer"===a.intersector?"ground":"feature",f,b)};e.getElevation=function(a){return this._view.basemapTerrain.ready?d.unwrapOr(A.getElevationAtPoint(this._view.elevationProvider,
a),0):0};e.overlappingHandles=function(a,b){return r.pointToPointScreenDistance(a,b,this._view)<=this._params.handleRadius};e._updateCursorPosition=function(){this.model.cursorPoint&&this._view.renderCoordsHelper.toRenderCoords(this.model.cursorPoint,this._cursorPosition)};e._updateStartPosition=function(){d.isSome(this.model.startPoint)&&this._view.renderCoordsHelper.toRenderCoords(this.model.startPoint,this._startPosition)};e._updateEndPosition=function(){d.isSome(this.model.endPoint)&&this._view.renderCoordsHelper.toRenderCoords(this.model.endPoint,
this._endPosition)};e._getFocusPosition=function(){const a=this.model,b=this.viewMode===c.ViewMode.Direct&&d.isSome(this.dataObjectView)&&"euclidean"===this.dataObjectView.visualizedMeasurement;switch(a.state){case "drawing":return b?this._startPosition:a.endPoint?this._endPosition:this._startPosition;case "editing":return b?"start"===this._lastDraggedHandle?this._endPosition:this._startPosition:"start"===this._lastDraggedHandle?this._startPosition:this._endPosition;default:return a.cursorPoint?this._cursorPosition:
null}};e._getFocusSpherePosition=function(){return"drawing"===this.model.state||"end"===this._lastDraggedHandle?this._startPosition:this._endPosition};e._updateLaserLine=function(){const a=this.model,b=this._getFocusPosition(),f=this.viewMode,m=this.dataObjectView,h=this._params.laserLineEnabled&&!!b&&"measured"!==a.state&&a.active;h&&d.isSome(m)?(this._laserLine.heightManifoldTarget="euclidean"===m.actualVisualizedMeasurement?b:null,this._laserLine.pointDistanceLine=h&&a.startPoint&&"geodesic"===
m.actualVisualizedMeasurement?{origin:this._getFocusSpherePosition(),target:b}:null,this._laserLine.lineVerticalPlaneSegment=h&&f===c.ViewMode.Triangle?v.lineSegment.fromPoints(this._startPosition,this._endPosition,F):null):(this._laserLine.heightManifoldTarget=null,this._laserLine.pointDistanceLine=null,this._laserLine.lineVerticalPlaneSegment=null)};e._initializeListeners=function(){this._listenerHandles=new u;this._listenerHandles.add([this.model.watch("state",a=>{d.applySome(this.dataObjectView,
b=>{b.allowVisualElementsOrientationChange="measured"!==a});this._visible&&this._updateLaserLine()},!0),this.model.watch("measurementMode",()=>{this._visible&&this._updateLaserLine()},!0),this.model.watch("cursorPoint",()=>{this._updateCursorPosition();this._visible&&this._updateLaserLine()},!0),this.model.model.watch("startPoint",()=>{this._updateStartPosition();this._visible&&this._updateLaserLine()},!0),this.model.model.watch("endPoint",()=>{this._updateEndPosition();this._visible&&this._updateLaserLine()},
!0),this.model.watch("active",()=>{this._visible&&this._updateLaserLine()},!0)])};e._destroyListeners=function(){this._listenerHandles.destroy();this._listenerHandles=null};t._createClass(l,[{key:"requiresCursorPoint",get:function(){return"initial"===this.model.state&&this.model.active}},{key:"visible",get:function(){return this._visible},set:function(a){a?this.show():this.hide()}},{key:"viewMode",get:function(){const a=this.dataObjectView;if(d.isSome(a))switch(a.viewMode){default:case "none":return c.ViewMode.None;
case "segment":return c.ViewMode.Direct;case "segment-and-triangle":return c.ViewMode.Triangle;case "segment-and-projection":return c.ViewMode.ProjectedGeodesic}else return c.ViewMode.None}},{key:"testData",get:function(){const a=this._laserLine.testData;return{...d.isSome(this.dataObjectView)?this.dataObjectView.testData:{labels:{direct:null,horizontal:null,vertical:null},stripeLength:1},laserLineRenderer:{heightManifoldEnabled:d.isSome(a)?a.heightManifoldEnabled:!1,heightManifoldTarget:d.isSome(a)?
a.heightManifoldTarget:null,pointDistanceEnabled:d.isSome(a)?a.pointDistanceEnabled:!1,pointDistanceOrigin:d.isSome(a)?a.pointDistanceOrigin:null,pointDistanceTarget:d.isSome(a)?a.pointDistanceTarget:null,lineVerticalPlaneEnabled:d.isSome(a)?a.lineVerticalPlaneEnabled:!1}}}},{key:"directLabelText",get:function(){return d.isSome(this.dataObjectView)?this.dataObjectView.segmentLabel.text:null}},{key:"horizontalLabelText",get:function(){return d.isSome(this.dataObjectView)?this.dataObjectView.horizontalLabel.text:
null}},{key:"verticalLabelText",get:function(){return d.isSome(this.dataObjectView)?this.dataObjectView.verticalLabel.text:null}}]);return l}(y);k.__decorate([n.property({readOnly:!0})],c.DirectLineMeasurement3DView.prototype,"dataObjectView",void 0);k.__decorate([n.property({constructOnly:!0})],c.DirectLineMeasurement3DView.prototype,"model",void 0);k.__decorate([n.property()],c.DirectLineMeasurement3DView.prototype,"directLabelText",null);k.__decorate([n.property()],c.DirectLineMeasurement3DView.prototype,
"horizontalLabelText",null);k.__decorate([n.property()],c.DirectLineMeasurement3DView.prototype,"verticalLabelText",null);c.DirectLineMeasurement3DView=p=k.__decorate([x.subclass("esri.views.3d.interactive.measurementTools.directLineMeasurement3D.DirectLineMeasurement3DView")],c.DirectLineMeasurement3DView);(function(g){g.PickRequest=function(){};g.PickResult=function(l=null,e=null,a=null){this.type=l;this.scenePoint=e;this.mapPoint=a}})(c.DirectLineMeasurement3DView||(c.DirectLineMeasurement3DView=
{}));(function(g){g[g.Triangle=0]="Triangle";g[g.ProjectedGeodesic=1]="ProjectedGeodesic";g[g.Direct=2]="Direct";g[g.None=3]="None"})(c.ViewMode||(c.ViewMode={}));const F=v.lineSegment.create();c.default=c.DirectLineMeasurement3DView;Object.defineProperty(c,"__esModule",{value:!0})});