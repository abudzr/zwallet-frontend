_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"6Yi/":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var a=n("nKUr"),i=n("cpVT"),o=n("q1tI"),s=n("YFqc"),r=n.n(s),c=n("20a2"),l=n("ZuQN"),u=n.n(l),d=n("wHSu"),f=n("IP2g"),g=n("vDqi"),b=n.n(g),p=n("PSD3"),m=n.n(p);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function j(){var e=Object(c.useRouter)(),t=Object(o.useState)({email:"",password:""}),n=t[0],s=t[1],l=Object(o.useState)(!1),g=l[0],p=l[1],j=Object(o.useState)(null),_=(j[0],j[1],function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n);t[e.target.name]=e.target.value,s(t)});return Object(o.useEffect)((function(){localStorage.getItem("token")&&e.push("/home")}),[]),Object(a.jsxs)("main",{className:u.a["main-login"],children:[Object(a.jsx)("section",{className:u.a["auth-logins"],children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{className:[["pt-5"],["ml-5"],u.a["title-login"]].join(" "),children:"Zwallet"}),Object(a.jsxs)("div",{className:[["d-flex"],u.a["image-login"]].join(" "),children:[Object(a.jsx)("img",{className:u.a.bgWave,src:"/images/vector4.png",alt:"Picture of the author"}),Object(a.jsx)("img",{src:"/images/Groupphone.png",alt:"Picture of the author",width:512.5133847528468,height:536.4722634749991})]}),Object(a.jsxs)("div",{className:u.a["bottom-section"],children:[Object(a.jsx)("p",{className:u.a["title-bottom-section"],children:"App that Covering Banking Needs."}),Object(a.jsx)("p",{className:u.a["subtitle-bottom-section"],children:"Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage."})]})]})}),Object(a.jsxs)("aside",{className:u.a["auth-login"],children:[Object(a.jsx)("p",{className:u.a["title-aside"],children:"Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users"}),Object(a.jsx)("p",{className:u.a["subtitle-aside"],children:"Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!"}),Object(a.jsx)("h2",{className:u.a["title-aside-mobile"],children:"Login"}),Object(a.jsx)("p",{className:u.a["subtitle-aside-mobile"],children:"Login to your existing account to access all the features in Zwallet."}),Object(a.jsxs)("form",{className:[["mt-5"],u.a["form-aside"]].join(" "),children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)(f.a,{icon:d.f,className:""===n.email?u.a.iconEmail:u.a["iconLogin-active"]}),Object(a.jsx)("input",{type:"email",className:[["form-control mt-1"],u.a["form-control"]].join(" "),name:"email",id:"email",placeholder:"Enter your e-mail",onChange:_})]}),Object(a.jsxs)("div",{className:"form-group mt-5",children:[Object(a.jsx)(f.a,{icon:d.i,className:""===n.password?u.a.iconPassword:u.a["iconLogin-active"]}),Object(a.jsx)("input",{type:g?"text":"password",className:[["form-control mt-1"],u.a["form-control"]].join(" "),name:"password",id:"password",placeholder:"Enter your password",onChange:_}),Object(a.jsx)(f.a,{icon:g?d.g:d.h,className:u.a.iconPass,onClick:function(){p(!g)}})]}),Object(a.jsx)("div",{className:u.a["forgot-pass"],children:Object(a.jsx)(r.a,{href:"/auth/forgot-password",children:Object(a.jsx)("a",{children:"Forgot Password?"})})}),Object(a.jsx)("div",{className:"d-flex justify-content-center",children:Object(a.jsx)("button",{type:"submit",className:""===n.email&&""===n.password?[["mt-5 btn"],u.a["btn-auth"]].join(" "):[["mt-5 btn"],u.a["btn-auth-active"]].join(" "),disabled:""===n.email&&""===n.password,onClick:function(t){t.preventDefault();b.a.post("".concat("http://be-zwallet.abudzaralghifari.xyz/api/v1","/users/auth/login"),n).then((function(t){localStorage.setItem("id",t.data.data.id),localStorage.setItem("token",t.data.data.token),2==t.data.data.role&&e.push("/home")})).catch((function(e){m.a.fire("Something Error!",e,"error")}))},children:"Login"})}),Object(a.jsxs)("p",{className:u.a["dont-haveacc"],children:["Don\u2019t have an account? Let\u2019s",Object(a.jsx)(r.a,{href:"/auth/signup",children:Object(a.jsx)("a",{children:" Sign Up"})})]})]})]})]})}},Mk4X:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/signin",function(){return n("6Yi/")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},ZuQN:function(e,t,n){e.exports={"main-login":"signin_main-login__2GIp0","auth-logins":"signin_auth-logins__1ZTwH","auth-login":"signin_auth-login__3CqCs","title-login":"signin_title-login__33As4",bgWave:"signin_bgWave__2C3O8","title-bottom-section":"signin_title-bottom-section__14OwE","subtitle-bottom-section":"signin_subtitle-bottom-section__OCsYh","title-aside":"signin_title-aside__1zfs7","subtitle-aside":"signin_subtitle-aside__2w_Je","form-aside":"signin_form-aside__3PfGj","forgot-pass":"signin_forgot-pass___kRJG","btn-auth":"signin_btn-auth__1F9gC","btn-auth-active":"signin_btn-auth-active__Msd4O","dont-haveacc":"signin_dont-haveacc__3G7dP",iconEmail:"signin_iconEmail__1SVfb",iconPassword:"signin_iconPassword__1Hvc7","iconLogin-active":"signin_iconLogin-active__3JRKf",iconPass:"signin_iconPass__2Bwb4","title-aside-mobile":"signin_title-aside-mobile__1K0rw","subtitle-aside-mobile":"signin_subtitle-aside-mobile__PqAkz","image-login":"signin_image-login__Zwj3D","text-mobile":"signin_text-mobile__3q0Yz"}},cTJO:function(e,t,n){"use strict";var a=n("zoAU"),i=n("7KCV");t.__esModule=!0,t.default=void 0;var o=i(n("q1tI")),s=n("elyg"),r=n("nOHt"),c=n("vNVm"),l={};function u(e,t,n,a){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,a).catch((function(e){0}));var i=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;l[t+"%"+n+(i?"%"+i:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,r.useRouter)(),i=n&&n.pathname||"/",d=o.default.useMemo((function(){var t=(0,s.resolveHref)(i,e.href,!0),n=a(t,2),o=n[0],r=n[1];return{href:o,as:e.as?(0,s.resolveHref)(i,e.as):r||o}}),[i,e.href,e.as]),f=d.href,g=d.as,b=e.children,p=e.replace,m=e.shallow,h=e.scroll,j=e.locale;"string"===typeof b&&(b=o.default.createElement("a",null,b));var _=o.Children.only(b),v=_&&"object"===typeof _&&_.ref,O=(0,c.useIntersection)({rootMargin:"200px"}),w=a(O,2),y=w[0],x=w[1],N=o.default.useCallback((function(e){y(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,y]);(0,o.useEffect)((function(){var e=x&&t&&(0,s.isLocalURL)(f),a="undefined"!==typeof j?j:n&&n.locale,i=l[f+"%"+g+(a?"%"+a:"")];e&&!i&&u(n,f,g,{locale:a})}),[g,f,x,j,t,n]);var P={ref:N,onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,t,n,a,i,o,r,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==r&&(r=a.indexOf("#")<0),t[i?"replace":"push"](n,a,{shallow:o,locale:c,scroll:r}))}(e,n,f,g,p,m,h,j)},onMouseEnter:function(e){(0,s.isLocalURL)(f)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),u(n,f,g,{priority:!0}))}};if(e.passHref||"a"===_.type&&!("href"in _.props)){var E="undefined"!==typeof j?j:n&&n.locale,k=n&&n.isLocaleDomain&&(0,s.getDomainLocale)(g,E,n&&n.locales,n&&n.domainLocales);P.href=k||(0,s.addBasePath)((0,s.addLocale)(g,E,n&&n.defaultLocale))}return o.default.cloneElement(_,P)};t.default=d},cpVT:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},vNVm:function(e,t,n){"use strict";var a=n("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,c=(0,i.useRef)(),l=(0,i.useState)(!1),u=a(l,2),d=u[0],f=u[1],g=(0,i.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||d||e&&e.tagName&&(c.current=function(e,t,n){var a=function(e){var t=e.rootMargin||"",n=r.get(t);if(n)return n;var a=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return r.set(t,n={id:t,observer:i,elements:a}),n}(n),i=a.id,o=a.observer,s=a.elements;return s.set(e,t),o.observe(e),function(){s.delete(e),o.unobserve(e),0===s.size&&(o.disconnect(),r.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,i.useEffect)((function(){if(!s&&!d){var e=(0,o.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[d]),[g,d]};var i=n("q1tI"),o=n("0G5g"),s="undefined"!==typeof IntersectionObserver;var r=new Map}},[["Mk4X",0,2,5,1,3,4,7]]]);