var p=Object.defineProperty;var r=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var m=(o,e,a)=>e in o?p(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,l=(o,e)=>{for(var a in e||(e={}))g.call(e,a)&&m(o,a,e[a]);if(r)for(var a of r(e))v.call(e,a)&&m(o,a,e[a]);return o};import{g as c,h as d,n as b,p as f,q as h,j as s,r as t,s as y,t as D,v as L}from"./app.1f76b4a4.js";import{S as P}from"./SkipLink.f3427549.js";var C=c({name:"Layout",setup(){const o=L(),e=d(),a=D(),u=b(),i=f(),n=h(()=>e.value.blog.sidebarDisplay||o.value.blog.sidebarDisplay||"mobile");return()=>[s(P),s(t("CommonWrapper"),{},l(l({default:()=>u.value.home?s(t("HomePage")):s(y,()=>s(t("NormalPage"),{key:a.value.path}))},n.value!=="none"?{navScreenBottom:()=>s(t("BloggerInfo"))}:{}),!i.value&&n.value==="always"?{sidebar:()=>s(t("BloggerInfo"))}:{}))]}});export{C as default};
