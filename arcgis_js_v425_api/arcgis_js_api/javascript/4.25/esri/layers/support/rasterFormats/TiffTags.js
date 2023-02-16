// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(function(){const c=(()=>{const a=[];a[254]="NEWSUBFILETYPE";a[255]="SUBFILETYPE";a[256]="IMAGEWIDTH";a[257]="IMAGELENGTH";a[258]="BITSPERSAMPLE";a[259]="COMPRESSION";a[262]="PHOTOMETRICINTERPRETATION";a[263]="THRESHHOLDING";a[264]="CELLWIDTH";a[265]="CELLLENGTH";a[266]="FILLORDER";a[269]="DOCUMENTNAME";a[270]="IMAGEDESCRIPTION";a[271]="MAKE";a[272]="MODEL";a[273]="STRIPOFFSETS";a[274]="ORIENTATION";a[277]="SAMPLESPERPIXEL";a[278]="ROWSPERSTRIP";a[279]="STRIPBYTECOUNTS";a[280]="MINSAMPLEVALUE";
a[281]="MAXSAMPLEVALUE";a[282]="XRESOLUTION";a[283]="YRESOLUTION";a[284]="PLANARCONFIGURATION";a[285]="PAGENAME";a[286]="XPOSITION";a[287]="YPOSITION";a[288]="FREEOFFSETS";a[289]="FREEBYTECOUNTS";a[290]="GRAYRESPONSEUNIT";a[291]="GRAYRESPONSECURVE";a[292]="T4OPTIONS";a[293]="T6OPTIONS";a[296]="RESOLUTIONUNIT";a[297]="PAGENUMBER";a[300]="COLORRESPONSEUNIT";a[301]="TRANSFERFUNCTION";a[305]="SOFTWARE";a[306]="DATETIME";a[315]="ARTIST";a[316]="HOSTCOMPUTER";a[317]="PREDICTOR";a[318]="WHITEPOINT";a[319]=
"PRIMARYCHROMATICITIES";a[320]="COLORMAP";a[321]="HALFTONEHINTS";a[322]="TILEWIDTH";a[323]="TILELENGTH";a[324]="TILEOFFSETS";a[325]="TILEBYTECOUNTS";a[326]="BADFAXLINES";a[327]="CLEANFAXDATA";a[328]="CONSECUTIVEBADFAXLINES";a[330]="SUBIFD";a[332]="INKSET";a[333]="INKNAMES";a[334]="NUMBEROFINKS";a[336]="DOTRANGE";a[337]="TARGETPRINTER";a[338]="EXTRASAMPLES";a[339]="SAMPLEFORMAT";a[340]="SMINSAMPLEVALUE";a[341]="SMAXSAMPLEVALUE";a[342]="TRANSFERRANGE";a[347]="JPEGTABLES";a[512]="JPEGPROC";a[513]="JPEGIFOFFSET";
a[514]="JPEGIFBYTECOUNT";a[515]="JPEGRESTARTINTERVAL";a[517]="JPEGLOSSLESSPREDICTORS";a[518]="JPEGPOINTTRANSFORM";a[519]="JPEGQTABLES";a[520]="JPEGDCTABLES";a[521]="JPEGACTABLES";a[529]="YCBCRCOEFFICIENTS";a[530]="YCBCRSUBSAMPLING";a[531]="YCBCRPOSITIONING";a[532]="REFERENCEBLACKWHITE";a[700]="XMP";a[33550]="GEOPIXELSCALE";a[33922]="GEOTIEPOINTS";a[33432]="COPYRIGHT";a[42112]="GDAL_METADATA";a[42113]="GDAL_NODATA";a[50844]="RPCCOEFFICIENT";a[34264]="GEOTRANSMATRIX";a[34735]="GEOKEYDIRECTORY";a[34736]=
"GEODOUBLEPARAMS";a[34737]="GEOASCIIPARAMS";a[34665]="EXIFIFD";a[34853]="GPSIFD";a[40965]="INTEROPERABILITYIFD";return a})(),e=(()=>{const a=c.slice();a[36864]="ExifVersion";a[40960]="FlashpixVersion";a[40961]="ColorSpace";a[42240]="Gamma";a[37121]="ComponentsConfiguration";a[37122]="CompressedBitsPerPixel";a[40962]="PixelXDimension";a[40963]="PixelYDimension";a[37500]="MakerNote";a[37510]="UserComment";a[40964]="RelatedSoundFile";a[36867]="DateTimeOriginal";a[36868]="DateTimeDigitized";a[36880]=
"OffsetTime";a[36881]="OffsetTimeOriginal";a[36882]="OffsetTimeDigitized";a[37520]="SubSecTime";a[37521]="SubSecTimeOriginal";a[37522]="SubSecTimeDigitized";a[37888]="Temperature";a[37889]="Humidity";a[37890]="Pressure";a[37891]="WaterDepth";a[37892]="Acceleration";a[37893]="CameraElevationAngle";a[42016]="ImageUniqueID";a[42032]="CameraOwnerName";a[42033]="BodySerialNumber";a[42034]="LensSpecification";a[42035]="LensMake";a[42036]="LensModel";a[42037]="LensSerialNumber";a[33434]="ExposureTime";a[33437]=
"FNumber";a[34850]="ExposureProgram";a[34852]="SpectralSensitivity";a[34855]="PhotographicSensitivity";a[34856]="OECF";a[34864]="SensitivityType";a[34865]="StandardOutputSensitivity";a[34866]="RecommendedExposureIndex";a[34867]="ISOSpeed";a[34868]="ISOSpeedLatitudeyyy";a[34869]="ISOSpeedLatitudezzz";a[37377]="ShutterSpeedValue";a[37378]="ApertureValue";a[37379]="BrightnessValue";a[37380]="ExposureBiasValue";a[37381]="MaxApertureValue";a[37382]="SubjectDistance";a[37383]="MeteringMode";a[37384]="LightSource";
a[37385]="Flash";a[37386]="FocalLength";a[37396]="SubjectArea";a[41483]="FlashEnergy";a[41484]="SpatialFrequencyResponse";a[41486]="FocalPlaneXResolution";a[41487]="FocalPlaneYResolution";a[41488]="FocalPlaneResolutionUnit";a[41492]="SubjectLocation";a[41493]="ExposureIndex";a[41495]="SensingMethod";a[41728]="FileSource";a[41729]="SceneType";a[41730]="CFAPattern";a[41985]="CustomRendered";a[41986]="ExposureMode";a[41987]="WhiteBalance";a[41988]="DigitalZoomRatio";a[41989]="FocalLengthIn35mmFilm";
a[41990]="SceneCaptureType";a[41991]="GainControl";a[41992]="Contrast";a[41993]="Saturation";a[41994]="Sharpness";a[41995]="DeviceSettingDescription";a[41996]="SubjectDistanceRange";return a})(),f=(()=>{const a=[];a[1024]="GTModelTypeGeoKey";a[1025]="GTRasterTypeGeoKey";a[1026]="GTCitationGeoKey";a[2048]="GeographicTypeGeoKey";a[2049]="GeogCitationGeoKey";a[2050]="GeogGeodeticDatumGeoKey";a[2051]="GeogPrimeMeridianGeoKey";a[2052]="GeogLinearUnitsGeoKey";a[2053]="GeogLinearUnitSizeGeoKey";a[2054]=
"GeogAngularUnitsGeoKey";a[2055]="GeogAngularUnitSizeGeoKey";a[2056]="GeogEllipsoidGeoKey";a[2057]="GeogSemiMajorAxisGeoKey";a[2058]="GeogSemiMinorAxisGeoKey";a[2059]="GeogInvFlatteningGeoKey";a[2061]="GeogPrimeMeridianLongGeoKey";a[2060]="GeogAzimuthUnitsGeoKey";a[3072]="ProjectedCSTypeGeoKey";a[3073]="PCSCitationGeoKey";a[3074]="ProjectionGeoKey";a[3075]="ProjCoordTransGeoKey";a[3076]="ProjLinearUnitsGeoKey";a[3077]="ProjLinearUnitSizeGeoKey";a[3078]="ProjStdParallel1GeoKey";a[3079]="ProjStdParallel2GeoKey";
a[3080]="ProjNatOriginLongGeoKey";a[3081]="ProjNatOriginLatGeoKey";a[3082]="ProjFalseEastingGeoKey";a[3083]="ProjFalseNorthingGeoKey";a[3084]="ProjFalseOriginLongGeoKey";a[3085]="ProjFalseOriginLatGeoKey";a[3086]="ProjFalseOriginEastingGeoKey";a[3087]="ProjFalseOriginNorthingGeoKey";a[3088]="ProjCenterLongGeoKey";a[3090]="ProjCenterEastingGeoKey";a[3091]="ProjCenterNorthingGeoKey";a[3092]="ProjScaleAtNatOriginGeoKey";a[3093]="ProjScaleAtCenterGeoKey";a[3094]="ProjAzimuthAngleGeoKey";a[3095]="ProjStraightVertPoleLongGeoKey";
a[4096]="VerticalCSTypeGeoKey";a[4097]="VerticalCitationGeoKey";a[4098]="VerticalDatumGeoKey";a[4099]="VerticalUnitsGeoKey";return a})(),d=new Map;d.set("EXIFIFD",e);d.set("GPSIFD","GPSVersionID GPSLatitudeRef GPSLatitude GPSLongitudeRef GPSLongitude GPSAltitudeRef GPSAltitude GPSTimeStamp GPSSatellites GPSStatus GPSMeasureMode GPSDOP GPSSpeedRef GPSSpeed GPSTrackRef GPSTrack GPSImgDirectionRef GPSImgDirection GPSMapDatum GPSDestLatitudeRef GPSDestLatitude GPSDestLongitudeRef GPSDestLongitude GPSDestBearingRef GPSDestBearing GPSDestDistanceRef GPSDestDistance GPSProcessingMethod GPSAreaInformation GPSDateStamp GPSDifferential GPSHPositioningError".split(" "));
return{TIFF_TAGS:c,ifdTags:d,GEO_KEYS:f,getTagName:(a,b)=>{b=(b||c)[a];void 0===b&&(b="unknown"+String(a));return b}}});