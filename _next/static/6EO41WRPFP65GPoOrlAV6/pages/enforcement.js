(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{osPF:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/enforcement",function(){return t("vR/8")}])},"vR/8":function(e,n,t){"use strict";t.r(n);var a=t("doui"),r=t("q1tI"),i=t("i8i4"),o=t("tjUo"),u=r.createElement,l=function(){var e=r.useState(""),n=Object(a.a)(e,2),t=n[0],i=n[1],l=r.useState(""),f=Object(a.a)(l,2),s=f[0],p=f[1],v=r.useState(""),g=Object(a.a)(v,2),m=g[0],h=g[1],w=r.useState(""),b=Object(a.a)(w,2),C=b[0],j=b[1],y=r.useState(""),S=Object(a.a)(y,2),O=S[0],_=S[1],x=r.useState(""),z=Object(a.a)(x,2),E=z[0],I=z[1];return u(d,null,u("div",null,u("div",null,"Mandatory dot (even if user enters comma) as floating point"),u(o.a,{accept:/[\d.,]+/g,format:function(e){return(e.match(/\d+[.,]?\d*/)||[]).join("")},replace:function(e){return e.replace(",",".")},value:t,onChange:i},c)),u("div",null,u("div",null,"Lower case"),u(o.a,{accept:/./g,format:function(e){return e},replace:function(e){return e.toLowerCase()},value:s,onChange:p},c)),u("div",null,u("div",null,"Upper case"),u(o.a,{accept:/./g,format:function(e){return e},replace:function(e){return e.toUpperCase()},value:m,onChange:h},c)),u("div",null,u("div",null,"Capital first letter"),u(o.a,{accept:/./g,format:function(e){return e},replace:function(e){return e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()},value:C,onChange:j},c)),u("div",null,u("div",null,"Allow latin letters only"),u(o.a,{accept:/[a-zA-Z]/g,format:function(e){return(e.match(/[a-zA-Z]/g)||[]).join("")},value:O,onChange:_},c)),u("div",null,u("div",null,"Leave a comment about Rifm"),u(o.a,{accept:/./g,format:function(e){return e},replace:function(e){return"Rifm is the best mask and formatting library. I love it! ".repeat(20).slice(0,e.length)},value:E,onChange:I},c)))},c=function(e){var n=e.value,t=e.onChange;return u("input",{style:{width:"100%",height:32,fontSize:"inherit",boxSizing:"border-box"},value:n,onChange:t})},d=function(e){var n=e.children;return u("div",{style:{display:"grid",padding:16,gap:24,gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",alignItems:"end"}},n)};if("undefined"!==typeof document){var f=document.getElementById("root");f&&i.render(u(l,null),f)}n.default=l}},[["osPF",1,0]]]);