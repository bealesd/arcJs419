// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/maybe ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/deprecate ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../geometry/Point ../../geometry ../../core/Handles ../input/InputManager ../support/screenUtils ./DrawAction ./input/DrawEvents ./input/Keys ../3d/interactive/editingTools/draw/DrawTool".split(" "),
function(e,k,l,C,b,r,D,t,u,E,v,F,G,H,w,I,x,d,m,y,g,z,A){e.PointDrawAction=function(n){function h(a){a=n.call(this,a)||this;a._cursorScreenPoint=null;a._addVertexOnPointerUp=!1;a._activePointerId=null;a._viewHandles=new x;return a}k._inheritsLoose(h,n);var c=h.prototype;c.initialize=function(){"2d"===this.view.type?this._addViewHandles():this._addDrawTool(this.view)};c.destroy=function(){"2d"===this.view.type?(this._removeViewHandles(),this._viewHandles.destroy()):this._removeDrawTool();this.emit("destroy")};
c.complete=function(){"2d"===this.view.type?this._cursorScreenPoint&&this._completeDrawing():this._drawTool.completeCreateOperation()};c._addViewHandles=function(){this._removeViewHandles();this._viewHandles.add([this.view.on("pointer-down",a=>{this._shouldHandlePointerEvent(a)&&(this._snappingTask=b.abortMaybe(this._snappingTask),this._activePointerId=a.pointerId,this._addVertexOnPointerUp=!0,this._cursorScreenPoint=m.createScreenPointFromEvent(a),"touch"===a.pointerType&&this._updateCursor(a.native))},
d.ViewEventPriorities.TOOL),this.view.on("pointer-move",a=>{this._snappingTask=b.abortMaybe(this._snappingTask);this._cursorScreenPoint=m.createScreenPointFromEvent(a);"touch"!==a.pointerType&&this._updateCursor(a.native)},d.ViewEventPriorities.TOOL),this.view.on("pointer-drag",a=>{this._shouldHandlePointerEvent(a)&&(this._snappingTask=b.abortMaybe(this._snappingTask),this._addVertexOnPointerUp=!1)},d.ViewEventPriorities.TOOL),this.view.on("pointer-up",a=>{this._shouldHandlePointerEvent(a)&&(this._snappingTask=
b.abortMaybe(this._snappingTask),this._activePointerId=null,this._addVertexOnPointerUp?(a.stopPropagation(),this._vertexAddHandler()):this._updateCursor(a.native,"touch"===a.pointerType))},d.ViewEventPriorities.TOOL),this.view.on("drag",["Shift"],a=>{a.stopPropagation()},d.ViewEventPriorities.TOOL),this.view.on("key-down",a=>{a.key===z.KEYS.drawCompleteKey&&this._cursorScreenPoint&&(this._snappingTask=b.abortMaybe(this._snappingTask),this._vertexAddHandler())},d.ViewEventPriorities.TOOL)])};c._removeViewHandles=
function(){this._viewHandles.removeAll()};c._addDrawTool=function(a){this._drawTool=new A.DrawTool({view:a,elevationInfo:this.elevationInfo,hasZ:this.hasZ,geometryType:"point",mode:"click"});this.view.toolViewManager.tools.push(this._drawTool);this.view.activeTool=this._drawTool;this._drawTool.on("cursor-update",f=>{1===f.vertices.length&&this.emit("cursor-update",new g.CursorUpdateEvent(this.view,null,f.vertices[0].vertexIndex,this._drawTool.getVertexCoords()))});this._drawTool.on("complete",f=>
{this.emit("draw-complete",new g.DrawCompleteEvent(null,this._drawTool.getVertexCoords()));this._removeDrawTool()})};c._removeDrawTool=function(){b.isSome(this._drawTool)&&(this.view.tools.remove(this._drawTool),this._drawTool.destroy(),this._drawTool=null)};c._addVertex=function(a){a=this._coordinateHelper.fromArray(a);this._isDuplicateOfLastVertex(a)||(this._lastVertexUnsnapped=this._stagedVertexUnsnapped,this._popCursorVertex(),this._editGeometry.appendVertex(a),this.notifyChange("vertices"))};
c._updateCursor=function(a,f=!1){this._popCursorVertex();if(this._cursorScreenPoint){var p=this.getCoordsAndPointFromScreenPoint(this._cursorScreenPoint);if(b.isSome(p)&&!f){this._pushCursorVertex(p.vertex);const q=()=>new g.CursorUpdateEvent(this.view,a,this._activeComponent.vertices.length,this.vertices,b.isSome(this._stagedVertex)?new w(this._stagedVertex):null);this.emit("cursor-update",q());b.isSome(this._snappingTask)&&this._snappingTask.promise.then(B=>{B.valid&&this.emit("cursor-update",q())},
()=>{})}}};c._completeDrawing=function(a){this._activePointerId=null;this._popCursorVertex();this._snappingTask=b.abortMaybe(this._snappingTask);b.isSome(this._snappingManager)&&this._snappingManager.doneSnapping();a=new g.DrawCompleteEvent(a,this.vertices);this.emit("draw-complete",a);a.defaultPrevented||this._removeViewHandles()};c._shouldHandlePointerEvent=function(a){return("mouse"!==a.pointerType||0===a.button)&&(b.isNone(this._activePointerId)||this._activePointerId===a.pointerId)};c._vertexAddHandler=
function(){const a=b.isSome(this._stagedVertex)?this._coordinateHelper.pointToArray(this._stagedVertex):this.getCoordsFromScreenPoint(this._cursorScreenPoint);b.isSome(a)&&(this._addVertex(a),this._completeDrawing())};k._createClass(h,[{key:"coordinates",get:function(){u.deprecatedProperty(r.getLogger("esri.views.draw.PointDrawAction"),"coordinates",{replacement:"vertices",version:"4.19"});return this.vertices[0]}}]);return h}(y);l.__decorate([t.property({readOnly:!0})],e.PointDrawAction.prototype,
"coordinates",null);e.PointDrawAction=l.__decorate([v.subclass("esri.views.draw.PointDrawAction")],e.PointDrawAction);Object.defineProperty(e,"__esModule",{value:!0})});