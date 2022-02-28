"use strict";(self["webpackChunkv3_admin"]=self["webpackChunkv3_admin"]||[]).push([[729],{2885:function(e,n,t){t.d(n,{Z:function(){return m}});var i=t(8534),r=(t(5666),t(6252)),o=t(3577),u=t(2262),a=t(5879),s={style:{"margin-bottom":"15px"}},l=(0,r._)("p",null,"切换权限：",-1),d=(0,r.aZ)({emits:["change"],setup:function(e,n){var t=n.emit,d=(0,r.Fl)((function(){return a.h.state.user.roles})),c=(0,u.iH)(d.value[0]);return(0,r.YP)(c,function(){var e=(0,i.Z)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.h.dispatch("user/changeRoles",n);case 2:t("change");case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),function(e,n){var t=(0,r.up)("el-radio-button"),i=(0,r.up)("el-radio-group");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",s," 你的权限："+(0,o.zw)((0,u.SU)(d)),1),l,(0,r.Wm)(i,{modelValue:c.value,"onUpdate:modelValue":n[0]||(n[0]=function(e){return c.value=e})},{default:(0,r.w5)((function(){return[(0,r.Wm)(t,{label:"editor"}),(0,r.Wm)(t,{label:"admin"})]})),_:1},8,["modelValue"])])}}});const c=d;var m=c},4922:function(e,n,t){t.r(n),t.d(n,{default:function(){return O}});var i=t(6252),r=t(2262),o=(t(1539),t(6699),t(2023),t(5879)),u=function(e){if(e&&e instanceof Array&&e.length>0){var n=o.h.state.user.roles,t=e;return n.some((function(e){return t.includes(e)}))}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1},a=t(2885),s={class:"app-container"},l={class:"permission-alert"},d=(0,i.Uk)(" Only "),c=(0,i.Uk)("admin"),m=(0,i.Uk)("can see this "),f=(0,i.Uk)(" v-permission=\"['admin']\" "),p={class:"permission-alert"},k=(0,i.Uk)(" Only "),w=(0,i.Uk)("editor"),v=(0,i.Uk)("can see this "),h=(0,i.Uk)(" v-permission=\"['editor']\" "),y={class:"permission-alert"},U=(0,i.Uk)(" Both "),g=(0,i.Uk)("admin"),_=(0,i.Uk)("and "),b=(0,i.Uk)("editor"),W=(0,i.Uk)("can see this "),C=(0,i.Uk)(" v-permission=\"['admin','editor']\" "),j=(0,i.Uk)(" 在某些情况下，不适合使用 v-permission。例如：Element-UI 的 el-tab 或 el-table-column 以及其它动态渲染 dom 的场景。你只能通过手动设置 v-if 来实现。 "),x=(0,i.Uk)(" Admin can see this "),D=(0,i.Uk)(" v-if=\"checkPermission(['admin'])\" "),S=(0,i.Uk)(" Editor can see this "),R=(0,i.Uk)(" v-if=\"checkPermission(['editor'])\" "),Z=(0,i.Uk)(" Both admin or editor can see this "),P=(0,i.Uk)(" v-if=\"checkPermission(['admin','editor'])\" "),q=(0,i.aZ)({setup:function(e){var n=(0,r.qj)({key:1,handleRolesChange:function(){n.key++}});return function(e,t){var o=(0,i.up)("el-tag"),q=(0,i.up)("el-tab-pane"),A=(0,i.up)("el-tabs"),E=(0,i.Q2)("permission");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i.Wm)(a.Z,{onChange:(0,r.SU)(n).handleRolesChange},null,8,["onChange"]),((0,i.wg)(),(0,i.iD)("div",{key:(0,r.SU)(n).key,style:{"margin-top":"30px"}},[(0,i._)("div",null,[(0,i.wy)(((0,i.wg)(),(0,i.iD)("span",l,[d,(0,i.Wm)(o,null,{default:(0,i.w5)((function(){return[c]})),_:1}),m])),[[E,["admin"]]]),(0,i.wy)(((0,i.wg)(),(0,i.j4)(o,{class:"permission-sourceCode",type:"info"},{default:(0,i.w5)((function(){return[f]})),_:1})),[[E,["admin"]]])]),(0,i._)("div",null,[(0,i.wy)(((0,i.wg)(),(0,i.iD)("span",p,[k,(0,i.Wm)(o,null,{default:(0,i.w5)((function(){return[w]})),_:1}),v])),[[E,["editor"]]]),(0,i.wy)(((0,i.wg)(),(0,i.j4)(o,{class:"permission-sourceCode",type:"info"},{default:(0,i.w5)((function(){return[h]})),_:1})),[[E,["editor"]]])]),(0,i._)("div",null,[(0,i.wy)(((0,i.wg)(),(0,i.iD)("span",y,[U,(0,i.Wm)(o,null,{default:(0,i.w5)((function(){return[g]})),_:1}),_,(0,i.Wm)(o,null,{default:(0,i.w5)((function(){return[b]})),_:1}),W])),[[E,["admin","editor"]]]),(0,i.wy)(((0,i.wg)(),(0,i.j4)(o,{class:"permission-sourceCode",type:"info"},{default:(0,i.w5)((function(){return[C]})),_:1})),[[E,["admin","editor"]]])])])),((0,i.wg)(),(0,i.iD)("div",{key:"checkPermission"+(0,r.SU)(n).key,style:{"margin-top":"60px"}},[(0,i.Wm)(o,{type:"info"},{default:(0,i.w5)((function(){return[j]})),_:1}),(0,i.Wm)(A,{type:"border-card",style:{width:"550px","margin-top":"60px"}},{default:(0,i.w5)((function(){return[(0,r.SU)(u)(["admin"])?((0,i.wg)(),(0,i.j4)(q,{key:0,label:"Admin"},{default:(0,i.w5)((function(){return[x,(0,i.Wm)(o,{class:"permission-sourceCode",type:"info"},{default:(0,i.w5)((function(){return[D]})),_:1})]})),_:1})):(0,i.kq)("",!0),(0,r.SU)(u)(["editor"])?((0,i.wg)(),(0,i.j4)(q,{key:1,label:"Editor"},{default:(0,i.w5)((function(){return[S,(0,i.Wm)(o,{class:"permission-sourceCode",type:"info"},{default:(0,i.w5)((function(){return[R]})),_:1})]})),_:1})):(0,i.kq)("",!0),(0,r.SU)(u)(["admin","editor"])?((0,i.wg)(),(0,i.j4)(q,{key:2,label:"Admin-OR-Editor"},{default:(0,i.w5)((function(){return[Z,(0,i.Wm)(o,{class:"permission-sourceCode",type:"info"},{default:(0,i.w5)((function(){return[P]})),_:1})]})),_:1})):(0,i.kq)("",!0)]})),_:1})]))])}}}),A=t(3744);const E=(0,A.Z)(q,[["__scopeId","data-v-69edb54c"]]);var O=E}}]);