// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/has ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/property ../../../../core/jsonMap ../../../../core/accessorSupport/decorators/subclass ../../../../core/urlUtils ../../../../core/uuid ../../../../portal/support/resourceExtension ../../../../core/promiseUtils ../../../../core/Accessor ../../../../geometry/support/spatialReferenceUtils ../../../../geometry/Extent ../../../../geometry/support/aaBoundingRect ../../../../layers/support/TileInfo ../../tiling/TileKey ../../tiling/TileInfoView ../../viewStateUtils ../../engine/Bitmap".split(" "),
function(u,h,g,L,M,l,N,z,O,P,Q,A,B,C,v,D,E,F,G,w,H){const m=D.create(),q=[0,0],x=new F(0,0,0,0);g=function(y){function t(b){var a=y.call(this,b)||this;a._imagePromise=null;a.hidpi=!1;a.imageMaxWidth=2048;a.imageMaxHeight=2048;a.imageRotationSupported=!1;a.imageNormalizationSupported=!1;a.update=A.debounce(async(f,p)=>{const c=f.state;var e=C.getInfo(c.spatialReference);const d=a.hidpi?f.pixelRatio:1;if(!f.stationary||a.destroyed)return null;a.imageRotationSupported?(q[0]=c.size[0],q[1]=c.size[1]):
w.getOuterSize(q,c);f=e&&(c.extent.xmin<e.valid[0]||c.extent.xmax>e.valid[1]);f=!a.imageNormalizationSupported&&f;e=a.imageRotationSupported?c.rotation:0;if(Math.floor(q[0]*d)>a.imageMaxWidth||Math.floor(q[1]*d)>a.imageMaxHeight||f){let k=Math.min(a.imageMaxWidth,a.imageMaxHeight);f&&(k=Math.min(c.worldScreenWidth,k));a._imagePromise=a._tiledExport(c,k,e,d,p)}else a._imagePromise=a._singleExport(c,q,e,d,p);return a._imagePromise.then(async k=>{a._imagePromise=null;if(!a.destroyed){for(const n of a.container.children)k.includes(n)||
n.fadeOut().then(()=>{n.remove()});for(const n of k)a.container.addChild(n),n.fadeIn()}}).catch(k=>{a._imagePromise=null;throw k;})},5E3);return a}u._inheritsLoose(t,y);var r=t.prototype;r.destroy=function(){};r.updateExports=function(b){for(const a of this.container.children){if(!a.visible||!a.stage)break;b(a)?console.error("ExportStrategy.updateExports doesn't support promise yet"):(a.invalidateTexture(),a.requestRender())}};r._export=function(b,a,f,p,c,e){return Promise.resolve().then(()=>this.fetchSource(b,
Math.floor(a*c),Math.floor(f*c),{rotation:p,pixelRatio:c,signal:e})).then(d=>{d=new H.Bitmap(d,"additive");d.x=b.xmin;d.y=b.ymax;d.resolution=b.width/a;d.rotation=p;d.pixelRatio=c;return d})};r._singleExport=function(b,a,f,p,c){w.getBBox(m,b.center,b.resolution,a);b=new v(m[0],m[1],m[2],m[3],b.spatialReference);return this._export(b,a[0],a[1],f,p,c).then(e=>[e])};r._tiledExport=function(b,a,f,p,c){var e=E.create({size:a,spatialReference:b.spatialReference,scales:[b.scale]});const d=new G(e);e=d.getTileCoverage(b);
if(!e)return null;const k=[];e.forEach((n,I,J,K)=>{x.set(n,I,J,K);d.getTileBounds(m,x);n=new v(m[0],m[1],m[2],m[3],b.spatialReference);k.push(this._export(n,a,a,f,p,c))});return Promise.all(k)};u._createClass(t,[{key:"updating",get:function(){return null!==this._imagePromise}}]);return t}(B);h.__decorate([l.property()],g.prototype,"_imagePromise",void 0);h.__decorate([l.property()],g.prototype,"container",void 0);h.__decorate([l.property()],g.prototype,"fetchSource",void 0);h.__decorate([l.property()],
g.prototype,"hidpi",void 0);h.__decorate([l.property()],g.prototype,"imageMaxWidth",void 0);h.__decorate([l.property()],g.prototype,"imageMaxHeight",void 0);h.__decorate([l.property()],g.prototype,"imageRotationSupported",void 0);h.__decorate([l.property()],g.prototype,"imageNormalizationSupported",void 0);h.__decorate([l.property()],g.prototype,"requestUpdate",void 0);h.__decorate([l.property()],g.prototype,"updating",null);return g=h.__decorate([z.subclass("esri.views.2d.layers.support.ExportStrategy")],
g)});