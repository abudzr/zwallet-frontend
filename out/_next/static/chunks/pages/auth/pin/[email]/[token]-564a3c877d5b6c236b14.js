_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(r.AmpStateContext))};var i,a=(i=n("q1tI"))&&i.__esModule?i:{default:i},r=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,i=e.hybrid,a=void 0!==i&&i,r=e.hasQuery,o=void 0!==r&&r;return n||a&&o}},"1ccW":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},n.apply(this,arguments)}e.exports=n},"48fX":function(e,t,n){var i=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}},"5fIB":function(e,t,n){var i=n("7eYB");e.exports=function(e){if(Array.isArray(e))return i(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var r=i?Object.getOwnPropertyDescriptor(e,a):null;r&&(r.get||r.set)?Object.defineProperty(n,a,r):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),r=(i=n("Xuae"))&&i.__esModule?i:{default:i},o=n("lwAK"),s=n("FYa8"),c=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,i={};return function(a){var r=!0,o=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){o=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?r=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?r=!1:t.add(a.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var l=f[c];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?r=!1:n.add(l);else{var d=a.props[l],p=i[l]||new Set;"name"===l&&o||!p.has(d)?(p.add(d),i[l]=p):r=!1}}}return r}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(o.AmpStateContext),i=(0,a.useContext)(s.HeadManagerContext);return a.default.createElement(r.default,{reduceComponentsToState:p,headManager:i,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},"98FW":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}},Aiso:function(e,t,n){e.exports=n("dQHF")},FYa8:function(e,t,n){"use strict";var i;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((i=n("q1tI"))&&i.__esModule?i:{default:i}).default.createContext({});t.HeadManagerContext=a},R1ZD:function(e,t,n){e.exports={"main-pin":"pin_main-pin__3N2gO","auth-pins":"pin_auth-pins__TE6Yc","auth-pin":"pin_auth-pin__1nzvj","title-pin":"pin_title-pin__E46J2",bgWave:"pin_bgWave__8898f","title-bottom-section":"pin_title-bottom-section__1FQvt","subtitle-bottom-section":"pin_subtitle-bottom-section__PgOw3","title-aside":"pin_title-aside__2fK-o","subtitle-aside":"pin_subtitle-aside__1UH9e","btn-auth":"pin_btn-auth__23Qwe","btn-auth-active":"pin_btn-auth-active__1Escq","btn-auths":"pin_btn-auths__2wqi3","input-pin":"pin_input-pin__QN57z","text-mobile":"pin_text-mobile__LdBGm","title-aside-mobile":"pin_title-aside-mobile__16rAW","subtitle-aside-mobile":"pin_subtitle-aside-mobile__2jOlF",success:"pin_success__1AeaO","image-pin":"pin_image-pin__PtXeL"}},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},UWYU:function(e,t,n){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},Xuae:function(e,t,n){"use strict";var i=n("mPvQ"),a=n("/GRZ"),r=n("i2R6"),o=(n("qXWd"),n("48fX")),s=n("tCBg"),c=n("T0f4");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){o(n,e);var t=u(n);function n(e){var r;return a(this,n),(r=t.call(this,e))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(i(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return r(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},bHZv:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var i=n("nKUr"),a=n("q1tI"),r=n("20a2"),o=(n("Aiso"),n("R1ZD")),s=n.n(o),c=n("4mLu"),u=n.n(c),l=n("vDqi"),d=n.n(l),f=n("PSD3"),p=n.n(f);function h(){var e=Object(r.useRouter)().query,t=Object(r.useRouter)(),n=Object(a.useState)(null),o=n[0],c=n[1],l=Object(a.useState)(!1),f=l[0],h=l[1];return Object(i.jsxs)("main",{className:s.a["main-pin"],children:[Object(i.jsx)("section",{className:s.a["auth-pins"],children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h2",{className:[["pt-5"],["ml-5"],s.a["title-pin"]].join(" "),children:"Zwallet"}),Object(i.jsxs)("div",{className:[["d-flex"],s.a["image-pin"]].join(" "),children:[Object(i.jsx)("img",{className:s.a.bgWave,src:"/images/vector4.png",alt:"Picture of the author"}),Object(i.jsx)("img",{src:"/images/Groupphone.png",alt:"Picture of the author",width:512.5133847528468,height:536.4722634749991})]}),Object(i.jsxs)("div",{className:s.a["bottom-section"],children:[Object(i.jsx)("p",{className:s.a["title-bottom-section"],children:"App that Covering Banking Needs."}),Object(i.jsx)("p",{className:s.a["subtitle-bottom-section"],children:"Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage."})]})]})}),Object(i.jsxs)("aside",{className:s.a["auth-pin"],children:[!1===f&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("p",{className:s.a["title-aside"],children:["Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN ",Object(i.jsx)("br",{}),"That You Created Yourself."]}),Object(i.jsx)("p",{className:s.a["subtitle-aside"],children:"Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don\u2019t tell anyone about your Zwallet account password and the PIN."}),Object(i.jsx)("h2",{className:s.a["title-aside-mobile"],children:"Create Security PIN"}),Object(i.jsx)("p",{className:s.a["subtitle-aside-mobile"],children:"Create a PIN that\u2019s contain 6 digits number for security purpose in Zwallet."}),Object(i.jsx)("div",{className:s.a["input-pin"],children:Object(i.jsx)(u.a,{length:6,secret:!0,onChange:function(e){c(e)},initialValue:"",type:"numeric",inputMode:"number",autoSelect:!0,regexCriteria:/^[ A-Za-z0-9_@./#&+-]*$/,focus:!0})}),Object(i.jsx)("div",{className:"d-flex justify-content-center",children:Object(i.jsx)("button",{type:"submit",className:null===o?[["mt-5 btn"],s.a["btn-auth"]].join(" "):[["mt-5 btn"],s.a["btn-auth-active"]].join(" "),onClick:function(t){t.preventDefault();var n="".concat("http://be-zwallet.abudzaralghifari.xyz/api/v1","/users/new/create-pin/?email=").concat(e.email);d.a.put(n,{pin:o}).then((function(e){h(!0),p.a.fire("Success","Create Pin Success!","success")}),(function(e){e&&p.a.fire(" ERROR!!!","Create pin Failed!","error")}))},disabled:!(!o||6===o.length),children:"Confirm"})})]}),!0===f&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("img",{className:s.a.success,src:"/images/success.png",alt:"Picture success"}),Object(i.jsx)("p",{className:s.a["title-aside"],children:"Your PIN Was Successfully Created"}),Object(i.jsx)("p",{className:s.a["subtitle-aside"],children:"Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!"}),Object(i.jsx)("h2",{className:s.a["title-aside-mobile"],children:"PIN Successfully Created"}),Object(i.jsx)("p",{className:s.a["subtitle-aside-mobile"],children:"Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!"}),Object(i.jsx)("div",{className:"d-flex justify-content-center",children:Object(i.jsx)("button",{type:"submit",className:[["mt-5 btn"],s.a["btn-auths"]].join(" "),onClick:function(){t.push("/auth/signin")},children:"Login Now"})})]})]})]})}},dEHY:function(e,t,n){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},dQHF:function(e,t,n){"use strict";var i=n("zoAU"),a=n("mPvQ"),r=n("AroE");t.__esModule=!0,t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,r=void 0!==a&&a,s=e.priority,d=void 0!==s&&s,p=e.loading,h=e.className,m=e.quality,b=e.width,v=e.height,g=e.objectFit,y=e.objectPosition,x=e.loader,O=void 0===x?j:x,A=(0,o.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader"]),S=n?"responsive":"intrinsic",N=!1;"unsized"in A?(N=Boolean(A.unsized),delete A.unsized):"layout"in A&&(A.layout&&(S=A.layout),delete A.layout);0;var k=!d&&("lazy"===p||"undefined"===typeof p);t&&t.startsWith("data:")&&(r=!0,k=!1);var M,C,z,I=(0,f.useIntersection)({rootMargin:"200px",disabled:!k}),P=i(I,2),E=P[0],q=P[1],H=!k||q,W=w(b),R=w(v),D=w(m),F={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:g,objectPosition:y};if("undefined"!==typeof W&&"undefined"!==typeof R&&"fill"!==S){var Y=R/W,B=isNaN(Y)?"100%":"".concat(100*Y,"%");"responsive"===S?(M={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},C={display:"block",boxSizing:"border-box",paddingTop:B}):"intrinsic"===S?(M={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},C={boxSizing:"border-box",display:"block",maxWidth:"100%"},z='<svg width="'.concat(W,'" height="').concat(R,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===S&&(M={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:W,height:R})}else"undefined"===typeof W&&"undefined"===typeof R&&"fill"===S&&(M={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var Z={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};H&&(Z=_({src:t,unoptimized:r,layout:S,width:W,quality:D,sizes:n,loader:O}));N&&(M=void 0,C=void 0,F=void 0);return c.default.createElement("div",{style:M},C?c.default.createElement("div",{style:C},z?c.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,l.toBase64)(z))}):null):null,!H&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},A,_({src:t,unoptimized:r,layout:S,width:W,quality:D,sizes:n,loader:O}),{src:t,decoding:"async",sizes:n,style:F,className:h}))),c.default.createElement("img",Object.assign({},A,Z,{decoding:"async",className:h,ref:E,style:F})),d?c.default.createElement(u.default,null,c.default.createElement("link",{key:"__nimg-"+Z.src+Z.srcSet+Z.sizes,rel:"preload",as:"image",href:Z.srcSet?void 0:Z.src,imagesrcset:Z.srcSet,imagesizes:Z.sizes})):null)};var o=r(n("98FW")),s=r(n("1ccW")),c=r(n("q1tI")),u=r(n("8Kt/")),l=n("dEHY"),d=n("UWYU"),f=n("vNVm");var p=new Map([["imgix",function(e){var t=e.root,n=e.src,i=e.width,a=e.quality,r=["auto=format","fit=max","w="+i],o="";a&&r.push("q="+a);r.length&&(o="?"+r.join("&"));return"".concat(t).concat(x(n)).concat(o)}],["cloudinary",function(e){var t=e.root,n=e.src,i=e.width,a=e.quality,r=["f_auto","c_limit","w_"+i,"q_"+(a||"auto")].join(",")+"/";return"".concat(t).concat(r).concat(x(n))}],["akamai",function(e){var t=e.root,n=e.src,i=e.width;return"".concat(t).concat(x(n),"?imwidth=").concat(i)}],["default",function(e){var t=e.root,n=e.src,i=e.width,a=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(a||75)}]]),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||d.imageConfigDefault,m=h.deviceSizes,b=h.imageSizes,v=h.loader,g=h.path,y=(h.domains,[].concat(a(m),a(b)));function _(e){var t=e.src,n=e.unoptimized,i=e.layout,r=e.width,o=e.quality,s=e.sizes,c=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var u=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){var i=a(n.matchAll(/(^|\s)(1?\d?\d)vw/g)).map((function(e){return parseInt(e[2])}));if(i.length){var r=.01*Math.min.apply(Math,a(i));return{widths:y.filter((function(e){return e>=m[0]*r})),kind:"w"}}return{widths:y,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:m,kind:"w"}:{widths:a(new Set([e,2*e].map((function(e){return y.find((function(t){return t>=e}))||y[y.length-1]})))),kind:"x"}}(r,i,s),l=u.widths,d=u.kind,f=l.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:l.map((function(e,n){return"".concat(c({src:t,quality:o,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:c({src:t,quality:o,width:l[f]})}}function w(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function j(e){var t=p.get(v);if(t)return t((0,s.default)({root:g},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(v))}function x(e){return"/"===e[0]?e.slice(1):e}m.sort((function(e,t){return e-t})),y.sort((function(e,t){return e-t}))},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},kJte:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/pin/[email]/[token]",function(){return n("bHZv")}])},lwAK:function(e,t,n){"use strict";var i;t.__esModule=!0,t.AmpStateContext=void 0;var a=((i=n("q1tI"))&&i.__esModule?i:{default:i}).default.createContext({});t.AmpStateContext=a},mPvQ:function(e,t,n){var i=n("5fIB"),a=n("rlHP"),r=n("KckH"),o=n("kG2m");e.exports=function(e){return i(e)||a(e)||r(e)||o()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var i=n("C+bE"),a=n("qXWd");e.exports=function(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?a(e):t}},vNVm:function(e,t,n){"use strict";var i=n("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,c=(0,a.useRef)(),u=(0,a.useState)(!1),l=i(u,2),d=l[0],f=l[1],p=(0,a.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||d||e&&e.tagName&&(c.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var i=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:i}),n}(n),a=i.id,r=i.observer,o=i.elements;return o.set(e,t),r.observe(e),function(){o.delete(e),r.unobserve(e),0===o.size&&(r.disconnect(),s.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,a.useEffect)((function(){if(!o&&!d){var e=(0,r.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,r.cancelIdleCallback)(e)}}}),[d]),[p,d]};var a=n("q1tI"),r=n("0G5g"),o="undefined"!==typeof IntersectionObserver;var s=new Map}},[["kJte",0,2,1,3,7,8]]]);