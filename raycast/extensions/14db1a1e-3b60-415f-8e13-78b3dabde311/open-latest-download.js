"use strict";var d=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var u=Object.prototype.hasOwnProperty;var D=(o,t)=>{for(var n in t)d(o,n,{get:t[n],enumerable:!0})},g=(o,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of w(t))!u.call(o,i)&&i!==n&&d(o,i,{get:()=>t[i],enumerable:!(a=c(t,i))||a.enumerable});return o};var h=o=>g(d({},"__esModule",{value:!0}),o);var y={};D(y,{default:()=>p});module.exports=h(y);var r=require("fs"),m=require("os"),s=require("path"),f=(0,s.join)((0,m.homedir)(),"Downloads");function x(){return(0,r.readdirSync)(f).filter(t=>!t.startsWith(".")).map(t=>{let n=(0,s.join)(f,t),a=(0,r.statSync)(n).mtime;return{file:t,path:n,lastModifiedAt:a}}).sort((t,n)=>n.lastModifiedAt.getTime()-t.lastModifiedAt.getTime())}async function l(){let o=x();if(!(o.length<1))return o[0]}var e=require("@raycast/api");async function p(){let o=await l();if(o===void 0){await(0,e.showHUD)("No downloads found");return}await(0,e.open)(o.path),await(0,e.popToRoot)()}0&&(module.exports={});
