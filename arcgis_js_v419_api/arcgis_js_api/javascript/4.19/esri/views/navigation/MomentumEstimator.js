// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../core/mathUtils","./FilteredFiniteDifference","./Momentum"],function(e,h,f,k){let m=function(){function g(a=2.5,b=.01,c=.95,l=12){this.minimumInitialVelocity=a;this.stopVelocity=b;this.friction=c;this.maxVelocity=l;this.enabled=!0;this.value=new f.FilteredFiniteDifference(.8);this.time=new f.FilteredFiniteDifference(.3)}var d=g.prototype;d.add=function(a,b){if(this.enabled){if(this.time.hasLastValue){if(.01>this.time.computeDelta(b))return;if(this.value.hasFilteredDelta){const c=
this.value.computeDelta(a);0>this.value.filteredDelta*c&&this.value.reset()}}this.time.update(b);this.value.update(a)}};d.reset=function(){this.value.reset();this.time.reset()};d.evaluateMomentum=function(){if(!this.enabled||!this.value.hasFilteredDelta)return null;let a=this.value.filteredDelta/this.time.filteredDelta;a=h.clamp(a,-this.maxVelocity,this.maxVelocity);return Math.abs(a)<this.minimumInitialVelocity?null:this.createMomentum(a,this.stopVelocity,this.friction)};d.createMomentum=function(a,
b,c){return new k.Momentum(a,b,c)};return g}();e.MomentumEstimator=m;Object.defineProperty(e,"__esModule",{value:!0})});