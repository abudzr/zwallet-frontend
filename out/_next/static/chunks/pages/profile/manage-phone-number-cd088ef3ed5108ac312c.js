_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[30],{F82U:function(e,a,c){"use strict";c.r(a);var n=c("nKUr"),t=c("q1tI"),s=c("q+Le"),i=c("1PBC"),r=c("9doM"),o=c("RJPF"),l=c("cTld"),d=c.n(l),j=c("vDqi"),b=c.n(j),h=c("20a2"),u=c("PSD3"),f=c.n(u);a.default=function(){var e=Object(h.useRouter)(),a=Object(t.useState)({}),c=a[0],l=a[1];return Object(t.useEffect)((function(){var e=localStorage.getItem("token"),a="".concat("https://be-zwallet.abudzaralghifari.xyz/api/v1","/users/find-one");b.a.get(a,{headers:{Authorization:"Bearer "+e}}).then((function(e){var a=e.data.data[0];l(a)})).catch((function(e){console.log(e)}))}),[]),Object(n.jsxs)(s.a,{title:"Profile | Z-wallet",children:[Object(n.jsx)(r.a,{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-lg-4",children:Object(n.jsx)(o.a,{})}),Object(n.jsx)("div",{className:"col-lg-8",children:Object(n.jsxs)("div",{className:d.a["card-profile"],children:[Object(n.jsx)("h6",{children:"Manage Phone Number"}),Object(n.jsxs)("p",{children:["You can only delete the phone number and then",Object(n.jsx)("br",{})," you must add another phone number."]}),Object(n.jsxs)("div",{className:[["d-flex"],["justify-content-between"],d.a["card-phone"]].join(" "),children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"Primary"}),Object(n.jsx)("p",{children:c.phoneNumber})]}),Object(n.jsx)("div",{className:"mt-3 mr-3",children:Object(n.jsx)("img",{src:"/images/trash.png",alt:"delete phone",onClick:function(a){f.a.fire({title:"Are you sure you want to delete this?",showDenyButton:!0,confirmButtonText:"Delete",confirmButtonColor:"#6379F4",denyButtonText:"Cancel",denyButtonColor:"#ffba33",focusDeny:!0}).then((function(n){if(n.isConfirmed){a.preventDefault();var t=localStorage.getItem("id"),s="".concat("https://be-zwallet.abudzaralghifari.xyz/api/v1","/users/delete-phone/").concat(t);b.a.put(s,c.phoneNumber).then((function(a){e.push("/profile")})).catch((function(e){return alert(e)}))}else f.a.fire({title:"delete canceled",text:"",icon:"info",confirmButtonText:"Ok",confirmButtonColor:"#6a4029"})}))}})})]})]})})]})}),Object(n.jsx)(i.a,{})]})}},L8BP:function(e,a,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/manage-phone-number",function(){return c("F82U")}])},RJPF:function(e,a,c){"use strict";var n=c("nKUr"),t=(c("q1tI"),c("Rvrb")),s=c.n(t),i=c("wHSu"),r=c("IP2g"),o=c("YFqc"),l=c.n(o),d=c("20a2");a.a=function(){var e=Object(d.useRouter)();return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:s.a.sidebar,children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row flex flex-wrap",children:[Object(n.jsxs)("div",{className:[["mb-5"],s.a["icon-sidebar"]].join(" "),children:[Object(n.jsx)(r.a,{icon:i.m,className:s.a.iconSidebar}),Object(n.jsx)(l.a,{href:"/home",children:Object(n.jsx)("a",{className:s.a.dashboard,children:"Dashboard"})})]}),Object(n.jsxs)("div",{className:"mb-5",children:[Object(n.jsx)(r.a,{icon:i.c,className:s.a.iconSidebar}),Object(n.jsx)(l.a,{href:"/transfer",children:Object(n.jsx)("a",{className:s.a.Transfer,children:"Transfer"})})]}),Object(n.jsxs)("div",{className:"mb-5",children:[Object(n.jsx)(r.a,{icon:i.k,className:s.a.iconSidebar}),Object(n.jsx)(l.a,{href:"/topup",children:Object(n.jsx)("a",{className:s.a["top-up"],children:"Top Up"})})]}),Object(n.jsxs)("div",{className:"mb-5",children:[Object(n.jsx)(r.a,{icon:i.n,className:s.a.iconSidebar}),Object(n.jsx)(l.a,{href:"/profile",children:Object(n.jsx)("a",{className:s.a.profile,children:"Profile"})})]}),Object(n.jsxs)("div",{className:[["mb-5"],s.a["icon-logout"]].join(" "),children:[Object(n.jsx)(r.a,{icon:i.l,className:s.a.iconSidebar}),Object(n.jsx)(l.a,{href:"#",children:Object(n.jsx)("a",{className:s.a["log-out"],onClick:function(){localStorage.clear("token"),e.push("/")},children:"Logout"})})]})]})})})})}},Rvrb:function(e,a,c){e.exports={sidebar:"sidebar_sidebar__10iqd",iconSidebar:"sidebar_iconSidebar__2DPa1","icon-logout":"sidebar_icon-logout__3xSF5",sidebars:"sidebar_sidebars__1MEVs"}},cTld:function(e,a,c){e.exports={"card-profile":"managephone_card-profile__7tfwE","card-phone":"managephone_card-phone__3HFs-"}}},[["L8BP",0,2,5,1,3,4,6,7]]]);