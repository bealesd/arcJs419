// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../core/asyncUtils ../../core/maybe ../../core/promiseUtils ../../core/reactiveUtils".split(" "),function(f,m,n,g,p,h){function k(a){const {view:c,tool:b}=a;g.isNone(b)||(c.tools.remove(b),a.tool=null)}f.activateAnalysisViewTool=function(a,c){a.interactive=!0;const {tool:b,view:d}=a;d.activeTool=b;let e=p.onAbort(c,()=>{d.activeTool===b&&(d.activeTool=null)});return n.createTask(function(){var q=m._asyncToGenerator(function*(l){yield h.whenOnce(()=>
g.isNone(b)||!b.active,l);e=g.removeMaybe(e)});return function(l){return q.apply(this,arguments)}}(),c)};f.connectAnalysisViewToTool=function(a,c){return h.watch(()=>a.interactive,()=>{if(a.interactive){k(a);const {view:b,analysis:d}=a,e=new c({view:b,analysis:d,analysisViewData:a});a.tool=e;b.tools.add(e)}else k(a)},h.syncAndInitial)};f.removeAnalysisViewTool=k;Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});