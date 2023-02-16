// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../core/maybe","./capabilities/DisjointTimerQuery"],function(g,f,h){let k=function(){function b(a){this._timer=a;this._timer.disjoint();this._query=this._timer.createQuery();this._timer.beginTimeElapsed(this._query)}var c=b.prototype;c.stop=function(a,d=50){this._timer.endTimeElapsed();this._checkQueryResult(a,d)};c.abort=function(){this._deleteQuery()};c._deleteQuery=function(){this._query&&(this._timer.deleteQuery(this._query),this._query=null)};c._checkQueryResult=function(a,
d){if(this._timer.disjoint())this._deleteQuery(),a(null);else{var e=f.unwrapOrThrow(this._query);this._timer.resultAvailable(e)?(e=this._timer.getResult(e),this._deleteQuery(),a(e/1E6)):setTimeout(()=>this._checkQueryResult(a,d),d)}};return b}(),m=function(){function b(a){this._timer=a;this._timer.disjoint();this._start=this._timer.createQuery();this._end=this._timer.createQuery();this._timer.createTimestamp(this._start)}var c=b.prototype;c.abort=function(){this._deleteQueries()};c.stop=function(a,
d=50){this._timer.createTimestamp(f.unwrapOrThrow(this._end));this._checkQueryResult(a,d)};c._deleteQueries=function(){this._start&&(this._timer.deleteQuery(this._start),this._start=null);this._end&&(this._timer.deleteQuery(this._end),this._end=null)};c._checkQueryResult=function(a,d){if(this._timer.disjoint())this._deleteQueries(),a(null);else if(this._end&&this._timer.resultAvailable(this._end)){var e=this._timer.getResult(f.unwrapOrThrow(this._start)),l=this._timer.getResult(f.unwrapOrThrow(this._end));
this._deleteQueries();a((l-e)/1E6)}else setTimeout(()=>this._checkQueryResult(a,d),d)};return b}();g.startMeasurement=function(b){b=b.capabilities.disjointTimerQuery;return f.isNone(b)?null:0<b.timestampBits()?new m(b):h.hasRunningElapsedTimer?null:new k(b)};Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});