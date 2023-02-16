// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","./_commonjsHelpers"],function(g,d){var c=d.createCommonjsModule(function(h,k){(function(a){a=a(d.commonjsRequire,k);void 0!==a&&(h.exports=a)})(function(a,f){Object.defineProperty(f,"__esModule",{value:!0});f.default={_decimalSeparator:".",_thousandSeparator:",",_big_number_suffix_3:"k",_big_number_suffix_6:"M",_big_number_suffix_9:"G",_big_number_suffix_12:"T",_big_number_suffix_15:"P",_big_number_suffix_18:"E",_big_number_suffix_21:"Z",_big_number_suffix_24:"Y",_small_number_suffix_3:"m",
_small_number_suffix_6:"\u03bc",_small_number_suffix_9:"n",_small_number_suffix_12:"p",_small_number_suffix_15:"f",_small_number_suffix_18:"a",_small_number_suffix_21:"z",_small_number_suffix_24:"y",_byte_suffix_B:"B",_byte_suffix_KB:"KB",_byte_suffix_MB:"MB",_byte_suffix_GB:"GB",_byte_suffix_TB:"TB",_byte_suffix_PB:"PB",_date_millisecond:"mm:ss SSS",_date_second:"HH:mm:ss",_date_minute:"HH:mm",_date_hour:"HH:mm",_date_day:"MMM dd",_date_week:"ww",_date_month:"MMM",_date_year:"yyyy",_duration_millisecond:"SSS",
_duration_millisecond_second:"ss.SSS",_duration_millisecond_minute:"mm:ss SSS",_duration_millisecond_hour:"hh:mm:ss SSS",_duration_millisecond_day:"d'd' mm:ss SSS",_duration_millisecond_week:"d'd' mm:ss SSS",_duration_millisecond_month:"M'm' dd'd' mm:ss SSS",_duration_millisecond_year:"y'y' MM'm' dd'd' mm:ss SSS",_duration_second:"ss",_duration_second_minute:"mm:ss",_duration_second_hour:"hh:mm:ss",_duration_second_day:"d'd' hh:mm:ss",_duration_second_week:"d'd' hh:mm:ss",_duration_second_month:"M'm' dd'd' hh:mm:ss",
_duration_second_year:"y'y' MM'm' dd'd' hh:mm:ss",_duration_minute:"mm",_duration_minute_hour:"hh:mm",_duration_minute_day:"d'd' hh:mm",_duration_minute_week:"d'd' hh:mm",_duration_minute_month:"M'm' dd'd' hh:mm",_duration_minute_year:"y'y' MM'm' dd'd' hh:mm",_duration_hour:"hh'h'",_duration_hour_day:"d'd' hh'h'",_duration_hour_week:"d'd' hh'h'",_duration_hour_month:"M'm' dd'd' hh'h'",_duration_hour_year:"y'y' MM'm' dd'd' hh'h'",_duration_day:"d'd'",_duration_day_week:"d'd'",_duration_day_month:"M'm' dd'd'",
_duration_day_year:"y'y' MM'm' dd'd'",_duration_week:"w'w'",_duration_week_month:"w'w'",_duration_week_year:"w'w'",_duration_month:"M'm'",_duration_month_year:"y'y' MM'm'",_duration_year:"y'y'",_era_ad:"\u516c\u5143",_era_bc:"\u516c\u5143\u524d",A:"\u4e0a\u5348",P:"\u4e0b\u5348",AM:"\u4e0a\u5348",PM:"\u4e0b\u5348","A.M.":"\u4e0a\u5348","P.M.":"\u4e0b\u5348",January:"\u4e00\u6708",February:"\u4e8c\u6708",March:"\u4e09\u6708",April:"\u56db\u6708",May:"\u4e94\u6708",June:"\u516d\u6708",July:"\u4e03\u6708",
August:"\u516b\u6708",September:"\u4e5d\u6708",October:"\u5341\u6708",November:"\u5341\u4e00\u6708",December:"\u5341\u4e8c\u6708",Jan:"1\u6708",Feb:"2\u6708",Mar:"3\u6708",Apr:"4\u6708","May(short)":"5\u6708",Jun:"6\u6708",Jul:"7\u6708",Aug:"8\u6708",Sep:"9\u6708",Oct:"10\u6708",Nov:"11\u6708",Dec:"12\u6708",Sunday:"\u661f\u671f\u65e5",Monday:"\u661f\u671f\u4e00",Tuesday:"\u661f\u671f\u4e8c",Wednesday:"\u661f\u671f\u4e09",Thursday:"\u661f\u671f\u56db",Friday:"\u661f\u671f\u4e94",Saturday:"\u661f\u671f\u516d",
Sun:"\u5468\u65e5",Mon:"\u5468\u4e00",Tue:"\u5468\u4e8c",Wed:"\u5468\u4e09",Thu:"\u5468\u56db",Fri:"\u5468\u4e94",Sat:"\u5468\u516d",_dateOrd:function(e){var b="th";if(11>e||13<e)switch(e%10){case 1:b="\u65e5";break;case 2:b="\u65e5";break;case 3:b="\u65e5"}return b},"Zoom Out":"\u7f29\u653e",Play:"\u64ad\u653e",Stop:"\u505c\u9760\u70b9",Legend:"\u56fe\u4f8b","Click, tap or press ENTER to toggle":"",Loading:"\u52a0\u8f7d",Home:"\u4e3b\u9875",Chart:"","Serial chart":"","X/Y chart":"","Pie chart":"",
"Gauge chart":"","Radar chart":"","Sankey diagram":"","Flow diagram":"","Chord diagram":"","TreeMap chart":"","Sliced chart":"",Series:"","Candlestick Series":"","OHLC Series":"","Column Series":"","Line Series":"","Pie Slice Series":"","Funnel Series":"","Pyramid Series":"","X/Y Series":"",Map:"","Press ENTER to zoom in":"","Press ENTER to zoom out":"","Use arrow keys to zoom in and out":"","Use plus and minus keys on your keyboard to zoom in and out":"",Export:"\u6253\u5370",Image:"\u5f71\u50cf",
Data:"\u6570\u636e",Print:"\u6253\u5370","Click, tap or press ENTER to open":"","Click, tap or press ENTER to print.":"","Click, tap or press ENTER to export as %1.":"",'To save the image, right-click this link and choose "Save picture as..."':"",'To save the image, right-click thumbnail on the left and choose "Save picture as..."':"","(Press ESC to close this message)":"","Image Export Complete":"","Export operation took longer than expected. Something might have gone wrong.":"","Saved from":"",
PNG:"",JPG:"",GIF:"",SVG:"",PDF:"",JSON:"",CSV:"",XLSX:"","Use TAB to select grip buttons or left and right arrows to change selection":"","Use left and right arrows to move selection":"","Use left and right arrows to move left selection":"","Use left and right arrows to move right selection":"","Use TAB select grip buttons or up and down arrows to change selection":"","Use up and down arrows to move selection":"","Use up and down arrows to move lower selection":"","Use up and down arrows to move upper selection":"",
"From %1 to %2":"\u81ea %1 \u81f3 %2","From %1":"\u81ea %1","To %1":"\u81f3 %1","No parser available for file: %1":"","Error parsing file: %1":"","Unable to load file: %1":"","Invalid date":""}})}),l=d.getDefaultExportFromCjs(c);c=Object.freeze(Object.assign(Object.create(null),c,{"default":l}));g.zh_Hans=c});