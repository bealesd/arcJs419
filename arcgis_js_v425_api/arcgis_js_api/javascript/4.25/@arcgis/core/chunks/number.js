/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{s as t}from"./jsonMap.js";import{b as o,g as e}from"./locale.js";import{b as r}from"./maybe.js";const n={year:"numeric",month:"numeric",day:"numeric"},a={year:"numeric",month:"long",day:"numeric"},h={year:"numeric",month:"short",day:"numeric"},m={year:"numeric",month:"long",weekday:"long",day:"numeric"},i={hour:"numeric",minute:"numeric"},s={...i,second:"numeric"},l={"short-date":n,"short-date-short-time":{...n,...i},"short-date-short-time-24":{...n,...i,hour12:!1},"short-date-long-time":{...n,...s},"short-date-long-time-24":{...n,...s,hour12:!1},"short-date-le":n,"short-date-le-short-time":{...n,...i},"short-date-le-short-time-24":{...n,...i,hour12:!1},"short-date-le-long-time":{...n,...s},"short-date-le-long-time-24":{...n,...s,hour12:!1},"long-month-day-year":a,"long-month-day-year-short-time":{...a,...i},"long-month-day-year-short-time-24":{...a,...i,hour12:!1},"long-month-day-year-long-time":{...a,...s},"long-month-day-year-long-time-24":{...a,...s,hour12:!1},"day-short-month-year":h,"day-short-month-year-short-time":{...h,...i},"day-short-month-year-short-time-24":{...h,...i,hour12:!1},"day-short-month-year-long-time":{...h,...s},"day-short-month-year-long-time-24":{...h,...s,hour12:!1},"long-date":m,"long-date-short-time":{...m,...i},"long-date-short-time-24":{...m,...i,hour12:!1},"long-date-long-time":{...m,...s},"long-date-long-time-24":{...m,...s,hour12:!1},"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":i,"long-time":s},g=t()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"});g.apiValues,g.toJSON.bind(g),g.fromJSON.bind(g);const y={ar:"ar-u-nu-latn-ca-gregory"};let d=new WeakMap,u=l["short-date-short-time"];function c(t){const o=t||u;let r=d.get(o);if(!r){const t=e(),n=y[e()]||t;r=new Intl.DateTimeFormat(n,o),d.set(o,r)}return r}function D(t){return t?l[t]:null}function T(t,o){return c(o).format(t)}o((()=>{d=new WeakMap,u=l["short-date-short-time"]}));const S={ar:"ar-u-nu-latn"};let M=new WeakMap,f={};function p(t={}){const o={};return null!=t.digitSeparator&&(o.useGrouping=t.digitSeparator),null!=t.places&&(o.minimumFractionDigits=o.maximumFractionDigits=t.places),o}function L(t,o){return-0===t&&(t=0),function(t){const o=t||f;if(!M.has(o)){const r=e(),n=S[e()]||r;M.set(o,new Intl.NumberFormat(n,t))}return r(M.get(o))}(o).format(t)}o((()=>{M=new WeakMap,f={}}));export{L as a,p as b,D as c,T as f,c as g};
