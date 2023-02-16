/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import t from"../../../core/Accessor.js";import s from"../../../core/Error.js";import{HandleOwnerMixin as r}from"../../../core/HandleOwner.js";import{watch as i,initial as o}from"../../../core/reactiveUtils.js";import{property as n}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import{subclass as p}from"../../../core/accessorSupport/decorators/subclass.js";import a from"../../../views/interactive/snapping/FeatureSnappingLayerSource.js";import{g as c,c as u}from"../../../chunks/layerListUtils.js";import l from"../../../core/Collection.js";import m from"../../LayerList/LayerListViewModel.js";import{i as h}from"../../../chunks/maybe.js";import d from"../../LayerList/ListItem.js";import"../../../core/Handles.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../chunks/object.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/string.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/tracking.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../chunks/WatchUpdatingTracking.js";import"../../../core/Evented.js";import"../../../chunks/shared.js";import"../../../chunks/SimpleObservable.js";import"../../../core/Identifiable.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../support/actions/ActionBase.js";import"../../../support/actions/ActionButton.js";import"../../../chunks/ActionSlider.js";import"../../../support/actions/ActionToggle.js";import"../../LayerList/ListItemPanel.js";import"../../Widget.js";import"../../../intl.js";import"../../../chunks/number.js";import"../../../chunks/jsonMap.js";import"../../../chunks/locale.js";import"../../../chunks/messages.js";import"../../../request.js";import"../../../kernel.js";import"../../../core/urlUtils.js";import"../../../chunks/assets.js";import"../../../chunks/domUtils.js";import"../../../core/Promise.js";import"../../../chunks/uuid.js";import"../../../chunks/projector.js";import"../../../chunks/widgetUtils.js";import"../../../chunks/jsxWidgetSupport.js";import"../widget.js";import"../../../chunks/accessibleHandler.js";import"../../../chunks/messageBundle.js";import"../../../chunks/vmEvent.js";import"../../../chunks/jsxFactory.js";import"../../../chunks/themeUtils.js";const g=e=>j(e)||y(e),j=e=>{if(!("type"in e))return!1;switch(e.type){case"feature":case"geojson":case"csv":case"graphics":case"wfs":case"map-notes":case"oriented-imagery":case"scene":case"building-scene":return!0;default:return!1}},y=e=>{const t=c(e);if(e.hasOwnProperty(t)&&h(e[t]))for(const s of e[t])if(g(s))return!0;return!1};var f;let S=f=class extends d{constructor(e){super(e),this.children=new l}get enabled(){return!!h(this.featureSource)&&this.featureSource.enabled}get featureSource(){const{layer:e,getFeatureSnappingSources:t}=this;return t().find((t=>t.layer===e))}_initializeChildLayers(e){if(!e)return;const t=e.filter(g);super._initializeChildLayers(t)}_makeChildren(e){return e.map((e=>u(e)?new f({layer:e,parent:this,view:this.view,getFeatureSnappingSources:this.getFeatureSnappingSources}):null)).reverse()}};e([n()],S.prototype,"children",void 0),e([n()],S.prototype,"enabled",null),e([n({constructOnly:!0})],S.prototype,"getFeatureSnappingSources",void 0),e([n()],S.prototype,"featureSource",null),e([n()],S.prototype,"parent",void 0),S=f=e([p("esri.widgets.support.SnappingControls.SnappingListItem")],S);let w=class extends m{constructor(){super(...arguments),this.featureSnappingSources=new l}get operationalItemsFlat(){return this.operationalItems.flatten((e=>e.children))}_compileList(){const e=this.get("view.map.layers");if(!e)return;const t=e.filter(g);this._watchLayersListMode(t);const s=this._getViewableLayers(t);s&&s.length?(this._createNewItems(s),this._removeItems(s),this._sortItems(s)):this._removeAllItems()}_createListItem(e){return new S({layer:e,view:this.view,getFeatureSnappingSources:()=>this.featureSnappingSources})}};e([n()],w.prototype,"featureSnappingSources",void 0),e([n()],w.prototype,"operationalItems",void 0),w=e([p("esri.widgets.support.SnappingControls.SnappingLayerListViewModel")],w);let k=class extends(r(t)){constructor(e){super(e),this.layerListViewModel=new w,this.snappingOptions=null,this.view=null}initialize(){this.handles.add([i((()=>({viewModel:this.layerListViewModel,view:this.view})),(({viewModel:e,view:t})=>{e.view=t}),o),i((()=>({viewModel:this.layerListViewModel,sources:this.snappingOptions?.featureSources})),(({viewModel:e,sources:t})=>{e.featureSnappingSources=t}),o)])}get state(){return this.get("snappingOptions")?"ready":"disabled"}enableSnappingForLayer(e){(this._findSnappingSourceForLayer(e)??this._makeSnappingSourceForLayer(e)).enabled=!0}disableSnappingForLayer(e){const t=this._findSnappingSourceForLayer(e);t&&(t.enabled=!1)}updateEnabledFeatureSources(e){for(const t of this.snappingOptions.featureSources)u(t.layer)&&(t.enabled=e.includes(t.layer.id))}_findSnappingSourceForLayer(e){return this.snappingOptions.featureSources.find((t=>t.layer.id===e))}_makeSnappingSourceForLayer(e){const{layer:t}=this.layerListViewModel.operationalItemsFlat.find((t=>t.layer.id===e));if(!t)throw new s("snapping-controls:layer-not-found",`cannot enable snapping for layer with id ${e} because no such layer was found in the view`);const r=new a({layer:t});return this.snappingOptions.featureSources.add(r),r}};e([n({constructOnly:!0})],k.prototype,"layerListViewModel",void 0),e([n({constructOnly:!0})],k.prototype,"snappingOptions",void 0),e([n()],k.prototype,"state",null),e([n({constructOnly:!0})],k.prototype,"view",void 0),k=e([p("esri.widgets.support.SnappingControls.SnappingControlsViewModel")],k);const v=k;export{v as default};
