// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./definitions"],function(a,b){a.json={title:"Building Scene Layer config on layer item",type:"object",properties:{layers:{type:"array",items:{properties:{activeFilterId:{type:"string",description:"specifies the id of the currently active filter"},filters:{type:"array",description:"A list of filters available for this layer. Overrides filters defined on the service.",items:{$ref:"#/definitions/buildingSceneLayer_filter_schema.json"},uniqueItems:!0},id:{type:"integer",description:"ID of the service layer."},
layerDefinition:{type:"object",description:"Additional properties that can define an elevation offset for the layer.",allOf:[{$ref:"#/definitions/layerDefinition_schema.json"},{properties:{elevationInfo:{},maxScale:{},minScale:{}},additionalProperties:!1}]},listMode:{type:"string",description:"To show or hide the sublayer in the layer list. If the layer has sublayers, selecting `hide-children` will hide them in the layer list.",enum:["hide","hide-children","show"],default:"show"},opacity:{type:"number",
description:"The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",minimum:0,maximum:1,default:1},sublayers:{type:"array",description:"An array of objects specifying overrides for building scene layer sublayers",items:{$ref:"#/definitions/buildingSceneLayer_sublayer_schema.json"},uniqueItems:!0},visibility:{type:"boolean",description:"Boolean property determining whether the layer is initially visible in the web scene",default:!0}},
additionalProperties:!1}}},additionalProperties:!1,$schema:"http://json-schema.org/draft-07/schema",definitions:b.schema_definitions};Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});