// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./definitions"],function(a,b){a.json={title:"Integrated Mesh Layer config on layer item",type:"object",properties:{layers:{type:"array",items:{properties:{id:{type:"integer",description:"ID of the service layer."},layerDefinition:{type:"object",description:"A layerDefinition object defining the attribute schema and drawing information for the layer.",allOf:[{$ref:"#/definitions/layerDefinition_schema.json"},{properties:{elevationInfo:{},maxScale:{},minScale:{}},additionalProperties:!1}]},
listMode:{type:"string",description:"To show or hide layers in the layer list",enum:["hide","show"],default:"show"},modifications:{type:"string",description:"URL to modifications json file, typically stored in `ITEM/resources`. Content of the file follows the $ref:[Modifications schema](modifications_schema.json)."},opacity:{type:"number",description:"The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",minimum:0,maximum:1,default:1},
visibility:{type:"boolean",description:"Boolean property determining whether the layer is initially visible in the web scene.",default:!0}},additionalProperties:!1}}},additionalProperties:!1,$schema:"http://json-schema.org/draft-07/schema",definitions:b.schema_definitions};Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});