"use strict";(self["webpackChunkv3_admin"]=self["webpackChunkv3_admin"]||[]).push([[436],{9145:function(e,a,n){n.d(a,{Z:function(){return m}});var t=n(6252),l=n(3577),u=n(2262),s=n(6110);const o={style:{"margin-bottom":"15px"}},r={style:{display:"flex","align-items":"center"}},i=(0,t._)("span",null,"切换权限：",-1);var c=(0,t.aZ)({emits:["change"],setup(e,{emit:a}){const n=(0,s.L)(),c=(0,t.Fl)((()=>n.roles)),d=(0,u.iH)(c.value[0]);return(0,t.YP)(d,(async e=>{await n.changeRoles(e),a("change")})),(e,a)=>{const n=(0,t.up)("el-radio-button"),s=(0,t.up)("el-radio-group");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",o," 你的权限："+(0,l.zw)((0,u.SU)(c)),1),(0,t._)("div",r,[i,(0,t.Wm)(s,{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=e=>d.value=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{label:"editor"}),(0,t.Wm)(n,{label:"admin"})])),_:1},8,["modelValue"])])])}}});const d=c;var m=d},7297:function(e,a,n){n.r(a),n.d(a,{default:function(){return c}});var t=n(6252),l=n(2119),u=n(9145);const s={class:"app-container"},o=(0,t.Uk)(" 当前页面只有 admin 权限可见 ");var r=(0,t.aZ)({setup(e){const a=(0,l.tv)(),n=()=>{a.push({path:"/401"}).catch((e=>{console.warn(e)}))};return(e,a)=>{const l=(0,t.up)("el-tag");return(0,t.wg)(),(0,t.iD)("div",s,[(0,t.Wm)(l,{type:"success",size:"large",style:{"margin-bottom":"15px"}},{default:(0,t.w5)((()=>[o])),_:1}),(0,t.Wm)(u.Z,{onChange:n})])}}});const i=r;var c=i}}]);