_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{"1GK0":function(e,t,c){e.exports={"card-topup":"topup_card-topup__1Bcgo","form-topup":"topup_form-topup__4G70_"}},RJPF:function(e,t,c){"use strict";var a=c("nKUr"),n=(c("q1tI"),c("Rvrb")),o=c.n(n),r=c("wHSu"),s=c("IP2g"),i=c("YFqc"),l=c.n(i),j=c("20a2");t.a=function(){var e=Object(j.useRouter)();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:o.a.sidebar,children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row flex flex-wrap",children:[Object(a.jsxs)("div",{className:[["mb-5"],o.a["icon-sidebar"]].join(" "),children:[Object(a.jsx)(s.a,{icon:r.m,className:o.a.iconSidebar}),Object(a.jsx)(l.a,{href:"/home",children:Object(a.jsx)("a",{className:o.a.dashboard,children:"Dashboard"})})]}),Object(a.jsxs)("div",{className:"mb-5",children:[Object(a.jsx)(s.a,{icon:r.c,className:o.a.iconSidebar}),Object(a.jsx)(l.a,{href:"/transfer",children:Object(a.jsx)("a",{className:o.a.Transfer,children:"Transfer"})})]}),Object(a.jsxs)("div",{className:"mb-5",children:[Object(a.jsx)(s.a,{icon:r.k,className:o.a.iconSidebar}),Object(a.jsx)(l.a,{href:"/topup",children:Object(a.jsx)("a",{className:o.a["top-up"],children:"Top Up"})})]}),Object(a.jsxs)("div",{className:"mb-5",children:[Object(a.jsx)(s.a,{icon:r.n,className:o.a.iconSidebar}),Object(a.jsx)(l.a,{href:"/profile",children:Object(a.jsx)("a",{className:o.a.profile,children:"Profile"})})]}),Object(a.jsxs)("div",{className:[["mb-5"],o.a["icon-logout"]].join(" "),children:[Object(a.jsx)(s.a,{icon:r.l,className:o.a.iconSidebar}),Object(a.jsx)(l.a,{href:"#",children:Object(a.jsx)("a",{className:o.a["log-out"],onClick:function(){localStorage.clear("token"),e.push("/")},children:"Logout"})})]})]})})})})}},Rmcy:function(e,t,c){"use strict";c.r(t);var a=c("nKUr"),n=c("q+Le"),o=c("q1tI"),r=c("RJPF"),s=c("cpVT"),i=c("vDqi"),l=c.n(i),j=c("1GK0"),d=c.n(j),b=c("7lUT"),u=c("20a2"),p=c("PSD3"),O=c.n(p);function m(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,a)}return c}var f=function(){var e=Object(u.useRouter)(),t=Object(o.useState)(),c=t[0],n=t[1],r=Object(o.useState)({idUser:"",amount:"",notes:""}),i=r[0],j=r[1],p=Object(o.useState)(),f=p[0],h=p[1];return Object(o.useEffect)((function(){var e=localStorage.getItem("token"),t="".concat("http://localhost:8080/api/v1","/users/find-one");l.a.get(t,{headers:{Authorization:"Bearer "+e}}).then((function(e){var t=e.data.data[0];console.log(e.data.data[0]),n(t.id)})).catch((function(e){console.log(e)}))}),[]),Object(a.jsx)("div",{className:d.a["card-topup"],children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("p",{children:"Top Up"}),Object(a.jsxs)("form",{className:[["mt-5"],d.a["form-topup"]].join(" "),children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"number",className:[["form-control mt-1"],d.a["form-control"]].join(" "),name:"amount",id:"amount",placeholder:"Enter your amount",onChange:function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?m(Object(c),!0).forEach((function(t){Object(s.a)(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):m(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}({},i);t[e.target.name]=e.target.value,j(t)}})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsxs)("select",{id:"notes",name:"notes",onChange:function(e){h(e.target.value)},children:[Object(a.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Payment Method"}),Object(a.jsx)("option",{value:"atm",children:"ATM"}),Object(a.jsx)("option",{value:"ebanking",children:"E-Banking"}),Object(a.jsx)("option",{value:"ovo",children:"Ovo"}),Object(a.jsx)("option",{value:"dana",children:"Dana"})]})})]}),Object(a.jsx)(b.a,{title:"Confirm",btn:"btn-confirm",onClick:function(t){t.preventDefault();l.a.post("".concat("http://localhost:8080/api/v1","/transaction/user/topup"),{idUser:c,amount:i.amount,notes:f}).then((function(t){O.a.fire({title:"Success!",text:t.data.message,icon:"success",confirmButtonText:"Ok",confirmButtonColor:"#6379F4"}),e.push("/home")})).catch((function(e){console.log(e),O.a.fire({title:"Error!",text:e.response.data.message,icon:"error",confirmButtonText:"Ok",confirmButtonColor:"#6379F4"})}))}})]})})},h=c("9doM"),x=c("1PBC");t.default=function(){return Object(a.jsxs)(n.a,{title:"Top Up | Z-wallet",children:[Object(a.jsx)(h.a,{}),Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-lg-4",children:Object(a.jsx)(r.a,{})}),Object(a.jsx)("div",{className:"col-lg-8",children:Object(a.jsx)(f,{})})]})}),Object(a.jsx)(x.a,{})]})}},Rvrb:function(e,t,c){e.exports={sidebar:"sidebar_sidebar__10iqd",iconSidebar:"sidebar_iconSidebar__2DPa1","icon-logout":"sidebar_icon-logout__3xSF5",sidebars:"sidebar_sidebars__1MEVs"}},cpVT:function(e,t,c){"use strict";function a(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}c.d(t,"a",(function(){return a}))},dQ9L:function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/topup",function(){return c("Rmcy")}])}},[["dQ9L",0,2,5,1,3,4,6,7]]]);