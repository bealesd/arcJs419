// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ./maybe ./accessorSupport/decorators/subclass ./promiseUtils ./Accessor".split(" "),function(f,k,l,p,m,g,q){let r=function(){function d(c){this.instance=c;this._resolver=g.createDeferred();this._status=0;this._resolvingPromises=[];this._resolver.promise.then(()=>{this._status=1;this._cleanUp()},()=>{this._status=2;this._cleanUp()})}var b=d.prototype;b.addResolvingPromise=function(c){this._resolvingPromises.push(c);this._tryResolve()};
b.isResolved=function(){return 1===this._status};b.isRejected=function(){return 2===this._status};b.isFulfilled=function(){return 0!==this._status};b.abort=function(){this._resolver.reject(g.createAbortError())};b.when=function(c,e){return this._resolver.promise.then(c,e)};b._cleanUp=function(){this._allPromise=this._resolvingPromises=this._allPromise=null};b._tryResolve=function(){if(!this.isFulfilled()){var c=g.createDeferred(),e=[...this._resolvingPromises,p.assumeNonNull(c.promise)],a=this._allPromise=
Promise.all(e);a.then(()=>{this.isFulfilled()||this._allPromise!==a||this._resolver.resolve(this.instance)},h=>{this.isFulfilled()||this._allPromise!==a||g.isAbortError(h)||this._resolver.reject(h)});c.resolve()}};return d}();const n=d=>{d=function(b){function c(...a){a=b.call(this,...a)||this;a._promiseProps=new r(k._assertThisInitialized(a));a.addResolvingPromise(Promise.resolve());return a}k._inheritsLoose(c,b);var e=c.prototype;e.isResolved=function(){return this._promiseProps.isResolved()};e.isRejected=
function(){return this._promiseProps.isRejected()};e.isFulfilled=function(){return this._promiseProps.isFulfilled()};e.when=function(a,h){return(new Promise((t,u)=>{this._promiseProps.when(t,u)})).then(a,h)};e.catch=function(a){return this.when(null,a)};e.addResolvingPromise=function(a){a&&!this._promiseProps.isFulfilled()&&this._promiseProps.addResolvingPromise("_promiseProps"in a?a.when():a)};return c}(d);return d=l.__decorate([m.subclass("esri.core.Promise")],d)};f.EsriPromise=function(d){function b(){return d.apply(this,
arguments)||this}k._inheritsLoose(b,d);return b}(n(q));f.EsriPromise=l.__decorate([m.subclass("esri.core.Promise")],f.EsriPromise);f.EsriPromiseMixin=n;Object.defineProperty(f,"__esModule",{value:!0})});