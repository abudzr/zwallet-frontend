_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{RJPF:function(e,s,c){"use strict";var a=c("nKUr"),r=(c("q1tI"),c("Rvrb")),n=c.n(r),t=c("wHSu"),o=c("IP2g"),i=c("YFqc"),l=c.n(i),j=c("20a2");s.a=function(){var e=Object(j.useRouter)();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:n.a.sidebar,children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row flex flex-wrap",children:[Object(a.jsxs)("div",{className:[["mb-5"],n.a["icon-sidebar"]].join(" "),children:[Object(a.jsx)(o.a,{icon:t.m,className:n.a.iconSidebar}),Object(a.jsx)(l.a,{href:"/home",children:Object(a.jsx)("a",{className:n.a.dashboard,children:"Dashboard"})})]}),Object(a.jsxs)("div",{className:"mb-5",children:[Object(a.jsx)(o.a,{icon:t.c,className:n.a.iconSidebar}),Object(a.jsx)(l.a,{href:"/transfer",children:Object(a.jsx)("a",{className:n.a.Transfer,children:"Transfer"})})]}),Object(a.jsxs)("div",{className:"mb-5",children:[Object(a.jsx)(o.a,{icon:t.k,className:n.a.iconSidebar}),Object(a.jsx)(l.a,{href:"/topup",children:Object(a.jsx)("a",{className:n.a["top-up"],children:"Top Up"})})]}),Object(a.jsxs)("div",{className:"mb-5",children:[Object(a.jsx)(o.a,{icon:t.n,className:n.a.iconSidebar}),Object(a.jsx)(l.a,{href:"/profile",children:Object(a.jsx)("a",{className:n.a.profile,children:"Profile"})})]}),Object(a.jsxs)("div",{className:[["mb-5"],n.a["icon-logout"]].join(" "),children:[Object(a.jsx)(o.a,{icon:t.l,className:n.a.iconSidebar}),Object(a.jsx)(l.a,{href:"#",children:Object(a.jsx)("a",{className:n.a["log-out"],onClick:function(){localStorage.clear("token"),e.push("/")},children:"Logout"})})]})]})})})})}},Rvrb:function(e,s,c){e.exports={sidebar:"sidebar_sidebar__10iqd",iconSidebar:"sidebar_iconSidebar__2DPa1","icon-logout":"sidebar_icon-logout__3xSF5",sidebars:"sidebar_sidebars__1MEVs"}},bt2M:function(e,s,c){e.exports={"card-profile":"changepass_card-profile__1o2l5",iconLock:"changepass_iconLock__1eZ4F",iconLock2:"changepass_iconLock2__3qszf",iconLock3:"changepass_iconLock3__1dIiO",iconPass:"changepass_iconPass__SLhHo",iconPass2:"changepass_iconPass2__269Fe",iconPass3:"changepass_iconPass3__dN6nC"}},cpVT:function(e,s,c){"use strict";function a(e,s,c){return s in e?Object.defineProperty(e,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[s]=c,e}c.d(s,"a",(function(){return a}))},sOj6:function(e,s,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/change-password",function(){return c("ttMB")}])},ttMB:function(e,s,c){"use strict";c.r(s);var a=c("nKUr"),r=c("q1tI"),n=c("RJPF"),t=c("q+Le"),o=c("9doM"),i=c("1PBC"),l=c("cpVT"),j=c("bt2M"),d=c.n(j),b=c("wHSu"),u=c("IP2g"),p=c("7lUT"),O=c("vDqi"),f=c.n(O),m=c("PSD3"),h=c.n(m),x=c("20a2");function w(e,s){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),c.push.apply(c,a)}return c}var _=function(){var e=Object(x.useRouter)(),s=Object(r.useState)({currentPassword:"",password:"",confirmPassword:""}),c=s[0],n=s[1],t=Object(r.useState)(!1),o=t[0],i=t[1],j=Object(r.useState)(!1),O=j[0],m=j[1],_=Object(r.useState)(!1),g=_[0],P=_[1],N=function(e){var s=function(e){for(var s=1;s<arguments.length;s++){var c=null!=arguments[s]?arguments[s]:{};s%2?w(Object(c),!0).forEach((function(s){Object(l.a)(e,s,c[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):w(Object(c)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(c,s))}))}return e}({},c);s[e.target.name]=e.target.value,n(s)};return Object(a.jsxs)("div",{className:d.a["card-profile"],children:[Object(a.jsx)("h6",{children:"Change Password"}),Object(a.jsxs)("p",{children:["You must enter your current password and then",Object(a.jsx)("br",{})," type your new password twice."]}),Object(a.jsxs)("form",{children:[Object(a.jsxs)("div",{className:"form-group mt-5",children:[Object(a.jsx)(u.a,{icon:b.i,className:d.a.iconLock}),Object(a.jsx)("input",{type:o?"text":"password",className:[["form-control mt-1"],d.a["form-control"]].join(" "),name:"currentPassword",id:"currentPassword",placeholder:"Current password",onChange:N}),Object(a.jsx)(u.a,{icon:o?b.g:b.h,className:d.a.iconPass,onClick:function(){i(!o)}})]}),Object(a.jsxs)("div",{className:"form-group mt-5",children:[Object(a.jsx)(u.a,{icon:b.i,className:d.a.iconLock2}),Object(a.jsx)("input",{type:O?"text":"password",className:[["form-control mt-1"],d.a["form-control"]].join(" "),name:"password",id:"password",placeholder:"New password",onChange:N}),Object(a.jsx)(u.a,{icon:O?b.g:b.h,className:d.a.iconPass2,onClick:function(){m(!O)}})]}),Object(a.jsxs)("div",{className:"form-group mt-5",children:[Object(a.jsx)(u.a,{icon:b.i,className:d.a.iconLock3}),Object(a.jsx)("input",{type:g?"text":"password",className:[["form-control mt-1"],d.a["form-control"]].join(" "),name:"confirmPassword",id:"confirmPassword",placeholder:"Repeat new password",onChange:N}),Object(a.jsx)(u.a,{icon:g?b.g:b.h,className:d.a.iconPass3,onClick:function(){P(!g)}})]}),Object(a.jsx)(p.a,{title:"Change Password",btn:"btn-change-pass",onClick:function(s){s.preventDefault();var a=localStorage.getItem("id"),r="".concat("http://be-zwallet.abudzaralghifari.xyz/api/v1","/users/edit-password/").concat(a);f.a.put(r,{currentPassword:c.currentPassword,password:c.password,confirmPassword:c.confirmPassword}).then((function(s){e.push("/profile"),h.a.fire("Success","Update Password Success!","success")}),(function(e){e&&h.a.fire(" ERROR!!!","Update Password Failed!","error")}))}})]})]})};s.default=function(){return Object(a.jsxs)(t.a,{title:"Profile | Z-wallet",children:[Object(a.jsx)(o.a,{}),Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-lg-4",children:Object(a.jsx)(n.a,{})}),Object(a.jsx)("div",{className:"col-lg-8",children:Object(a.jsx)(_,{})})]})}),Object(a.jsx)(i.a,{})]})}}},[["sOj6",0,2,5,1,3,4,6,7]]]);