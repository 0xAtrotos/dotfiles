"use strict";var i=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var d=Object.prototype.hasOwnProperty;var l=(t,e)=>{for(var n in e)i(t,n,{get:e[n],enumerable:!0})},y=(t,e,n,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of m(e))!d.call(t,r)&&r!==n&&i(t,r,{get:()=>e[r],enumerable:!(o=p(e,r))||o.enumerable});return t};var w=t=>y(i({},"__esModule",{value:!0}),t);var h={};l(h,{default:()=>g});module.exports=w(h);var u=require("child_process");var a=require("@raycast/api"),f=require("child_process");function x(t){let e=(0,a.getPreferenceValues)(),n=[];return e.preventDisplay&&n.push("d"),e.preventDisk&&n.push("m"),e.preventSystem&&n.push("i"),typeof t=="string"&&n.push(` ${t}`),n.length>0?`-${n.join("")}`:""}async function c(t=!0,e){return t&&await(0,a.launchCommand)({name:"index",type:a.LaunchType.Background,context:{caffinated:!1}}),e&&await(0,a.showHUD)(e),(0,f.exec)("/usr/bin/killall caffeinate")}async function s(t=!0,e,n){return await c(!1),t&&await(0,a.launchCommand)({name:"index",type:a.LaunchType.Background,context:{caffinated:!0}}),e&&await(0,a.showHUD)(e),(0,f.exec)(`/usr/bin/caffeinate ${x(n)}`)}var g=async()=>{try{(0,u.execSync)("ps aux | pgrep caffeinate"),await c(!0,"Your Mac is now deffeinated")}catch{await s(!0,"Your Mac is now caffeinated")}};0&&(module.exports={});
