// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ./core/accessorSupport/ensureType ./geometry/SpatialReference ./geometry/Geometry ./geometry/Point ./geometry/Extent ./geometry/Multipoint ./geometry/Polygon ./geometry/Polyline ./geometry/support/typeUtils ./geometry/support/jsonUtils".split(" "),function(a,b,m,c,e,f,g,h,k,d,n){const l={base:c,key:"type",typeMap:{extent:f,multipoint:g,point:e,polyline:k,polygon:h}};b=b.ensureOneOfType(l);a.SpatialReference=m;a.BaseGeometry=c;a.Point=e;a.Extent=f;a.Multipoint=g;a.Polygon=h;a.Polyline=
k;a.featureGeometryTypeKebabDictionary=d.featureGeometryTypeKebabDictionary;a.isFeatureGeometryType=d.isFeatureGeometryType;a.typeKebabDictionary=d.typeKebabDictionary;a.fromJSON=n.fromJSON;a.ensureType=b;a.geometryTypes=l;a.isGeometry=function(p){return p instanceof c};Object.defineProperty(a,"__esModule",{value:!0})});