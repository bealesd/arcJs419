// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["../../../../geometry/support/aaBoundingBox","./I3SUtil","../../support/orientedBoundingBox"],function(t,w,r){return function(){function u(a,b,c){this._pages=[];this.pageSize=0;this._renderSR=this._nodeSR=null;this._nodeSR=a;this._renderSR=b;this.pageSize=c}var g=u.prototype;g.addPage=function(a,b,c=0){for(;this._pages.length<a;)this._pages.push(null);var e=this._nodeSR,f=this._renderSR,k=new r.ObbArray(b.length);for(var d=0;d<b.length;d++)w.transformObb(b[d].obb,e,k.obbs[d],f,c);this._pages[a]=
{nodes:b,renderObbs:k.obbs,parents:new Uint32Array(this.pageSize)};a=this._pages;b=this.pageSize;for(c=[0];c.length;)for(e=c.pop(),f=a[e/b|0].nodes[e%b],k=0;k<f.childCount;k++)d=f.firstChild+k,null!=a[d/b|0]&&(a[d/b|0].parents[d%b]=e,c.push(d))};g.hasPage=function(a){return!!this._pages[a]};g.getNode=function(a){const b=this.pageSize;return this._pages[a/b|0].nodes[a%b]};g.getRenderObb=function(a){const b=this.pageSize;return this._pages[a/b|0].renderObbs[a%b]};g.getRenderCenter=function(a){return this.getRenderObb(a).center};
g.setRenderObb=function(a,b){const c=this.pageSize;r.set(b,this._pages[a/c|0].renderObbs[a%c])};g.getParentId=function(a){const b=this.pageSize;return this._pages[a/b|0].parents[a%b]};g.hasNodes=function(a,b){var c=a/this.pageSize|0;for(a=(a+b-1)/this.pageSize|0;c<=a;c++)if(null==this._pages[c])return!1;return!0};g.forEachNodeId=function(a){for(let b=0;b<this._pages.length;b++){const c=this._pages[b];if(c)for(let e=0;e<c.nodes.length;e++)a(b*this.pageSize+e)}};g.createVisibilityTraverse=function(){var a=
this,b=[],c=[],e=t.create();return(f,k)=>{if(a.hasNodes(0,1))for(b.length=0,b.push(0),c.length=0,c.push(0);0<b.length;){var d=b.pop();let q=c.pop();var n=a.getNode(d),p=a.getRenderObb(d),m=!0;if(null!=f.clippingBox){var l=1<<f.frustum.length;if(0===(q&l)){var h=r.toAaBoundingBox(p,e);t.contains(f.clippingBox,h)?q|=l:t.intersects(f.clippingBox,h)||(m=!1)}}for(l=0;l<f.frustum.length&&m;l++)if(h=1<<l,0===(q&h)){const v=r.intersectPlane(p,f.frustum[l]);0<v?m=!1:0>v&&(q|=h)}if(k.predicate(d,n,m)){p=n.firstChild;
n=n.childCount;m=!1;h=p/a.pageSize|0;for(l=(p+n-1)/a.pageSize|0;h<=l;h++)if(!a.hasPage(h)){k.pageMiss(d,h);m=!0;break}if(!m)for(d=0;d<n;d++)b.push(p+d),c.push(q)}}}};return u}()});