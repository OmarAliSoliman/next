(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6010:function(e,t,n){"use strict";function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,o,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(o=e(t[n]))&&(s&&(s+=" "),s+=o);else for(n in t)t[n]&&(s&&(s+=" "),s+=n)}return s}(e))&&(o&&(o+=" "),o+=t);return o}n.r(t),n.d(t,{clsx:function(){return o}}),t.default=o},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5721)}])},2049:function(e,t,n){"use strict";var o=n(5893);n(7294),t.Z=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"splash",children:(0,o.jsx)("div",{className:"splash_wrapper",children:(0,o.jsx)("img",{src:"./images/Logo-Outdoor.gif",alt:""})})})})}},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(6495).Z,s=n(2648).Z,a=n(1598).Z,r=n(7273).Z,i=a(n(7294)),l=s(n(3121)),c=n(2675),u=n(139),d=n(8730);n(7238);var f=s(n(9824));let m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,n,s,a,r,i){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===n&&r(!0),null==s?void 0:s.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,a=!1;s.current(o({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let v=i.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:s,widthInt:a,qualityInt:l,className:c,imgStyle:u,blurStyle:d,isLazy:f,fill:m,placeholder:p,loading:h,srcString:v,config:y,unoptimized:b,loader:x,onLoadRef:E,onLoadingCompleteRef:j,setBlurComplete:_,setShowAltText:w,onLoad:C,onError:T}=e,N=r(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=f?"lazy":h,i.default.createElement(i.default.Fragment,null,i.default.createElement("img",Object.assign({},N,n,{width:a,height:s,decoding:"async","data-nimg":m?"fill":"1",className:c,loading:h,style:o({},u,d),ref:i.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(T&&(e.src=e.src),e.complete&&g(e,v,p,E,j,_,b))},[v,p,E,j,_,T,b,t]),onLoad:e=>{let t=e.currentTarget;g(t,v,p,E,j,_,b)},onError:e=>{w(!0),"blur"===p&&_(!0),T&&T(e)}})))}),y=i.forwardRef((e,t)=>{let n,s;var a,{src:g,sizes:y,unoptimized:b=!1,priority:x=!1,loading:E,className:j,quality:_,width:w,height:C,fill:T,style:N,onLoad:I,onLoadingComplete:O,placeholder:k="empty",blurDataURL:L,layout:R,objectFit:S,objectPosition:M,lazyBoundary:P,lazyRoot:z}=e,A=r(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=i.useContext(d.ImageConfigContext),B=i.useMemo(()=>{let e=m||D||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return o({},e,{allSizes:t,deviceSizes:n})},[D]),F=A,$=F.loader||f.default;delete F.loader;let q="__next_img_default"in $;if(q){if("custom"===B.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=$;$=t=>{let{config:n}=t,o=r(t,["config"]);return e(o)}}if(R){"fill"===R&&(T=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(N=o({},N,e));let t={responsive:"100vw",fill:"100vw"}[R];t&&!y&&(y=t)}let H="",U=h(w),V=h(C);if("object"==typeof(a=g)&&(p(a)||void 0!==a.src)){let e=p(g)?g.default:g;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(n=e.blurWidth,s=e.blurHeight,L=L||e.blurDataURL,H=e.src,!T){if(U||V){if(U&&!V){let t=U/e.width;V=Math.round(e.height*t)}else if(!U&&V){let t=V/e.height;U=Math.round(e.width*t)}}else U=e.width,V=e.height}}let W=!x&&("lazy"===E||void 0===E);((g="string"==typeof g?g:H).startsWith("data:")||g.startsWith("blob:"))&&(b=!0,W=!1),B.unoptimized&&(b=!0),q&&g.endsWith(".svg")&&!B.dangerouslyAllowSVG&&(b=!0);let[G,K]=i.useState(!1),[Q,Z]=i.useState(!1),X=h(_),J=Object.assign(T?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:S,objectPosition:M}:{},Q?{}:{color:"transparent"},N),Y="blur"===k&&L&&!G?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:U,heightInt:V,blurWidth:n,blurHeight:s,blurDataURL:L}),'")')}:{},ee=function(e){let{config:t,src:n,unoptimized:o,width:s,quality:a,sizes:r,loader:i}=e;if(o)return{src:n,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,n){let{deviceSizes:o,allSizes:s}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let o;o=e.exec(n);o)t.push(parseInt(o[2]));if(t.length){let e=.01*Math.min(...t);return{widths:s.filter(t=>t>=o[0]*e),kind:"w"}}return{widths:s,kind:"w"}}if("number"!=typeof t)return{widths:o,kind:"w"};let a=[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))];return{widths:a,kind:"x"}}(t,s,r),u=l.length-1;return{sizes:r||"w"!==c?r:"100vw",srcSet:l.map((e,o)=>"".concat(i({config:t,src:n,quality:a,width:e})," ").concat("w"===c?e:o+1).concat(c)).join(", "),src:i({config:t,src:n,quality:a,width:l[u]})}}({config:B,src:g,unoptimized:b,width:U,quality:X,sizes:y,loader:$}),et=g,en={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:F.crossOrigin},eo=i.useRef(I);i.useEffect(()=>{eo.current=I},[I]);let es=i.useRef(O);i.useEffect(()=>{es.current=O},[O]);let ea=o({isLazy:W,imgAttributes:ee,heightInt:V,widthInt:U,qualityInt:X,className:j,imgStyle:J,blurStyle:Y,loading:E,config:B,fill:T,unoptimized:b,placeholder:k,loader:$,srcString:et,onLoadRef:eo,onLoadingCompleteRef:es,setBlurComplete:K,setShowAltText:Z},F);return i.default.createElement(i.default.Fragment,null,i.default.createElement(v,Object.assign({},ea,{ref:t})),x?i.default.createElement(l.default,null,i.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},en))):null)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,s=n(7273).Z,a=o(n(7294)),r=n(1003),i=n(7795),l=n(4465),c=n(2692),u=n(8245),d=n(9246),f=n(227),m=n(3468);let p=new Set;function h(e,t,n,o){if(r.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let s=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,a=t+"%"+n+"%"+s;if(p.has(a))return;p.add(a)}Promise.resolve(e.prefetch(t,n,o)).catch(e=>{})}}function g(e){return"string"==typeof e?e:i.formatUrl(e)}let v=a.default.forwardRef(function(e,t){let n,o;let{href:i,as:p,children:v,prefetch:y,passHref:b,replace:x,shallow:E,scroll:j,locale:_,onClick:w,onMouseEnter:C,onTouchStart:T,legacyBehavior:N=!1}=e,I=s(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,N&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));let O=!1!==y,k=a.default.useContext(c.RouterContext),L=a.default.useContext(u.AppRouterContext),R=null!=k?k:L,S=!k,{href:M,as:P}=a.default.useMemo(()=>{if(!k){let e=g(i);return{href:e,as:p?g(p):e}}let[e,t]=r.resolveHref(k,i,!0);return{href:e,as:p?r.resolveHref(k,p):t||e}},[k,i,p]),z=a.default.useRef(M),A=a.default.useRef(P);N&&(o=a.default.Children.only(n));let D=N?o&&"object"==typeof o&&o.ref:t,[B,F,$]=d.useIntersection({rootMargin:"200px"}),q=a.default.useCallback(e=>{(A.current!==P||z.current!==M)&&($(),A.current=P,z.current=M),B(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[P,D,M,$,B]);a.default.useEffect(()=>{R&&F&&O&&h(R,M,P,{locale:_})},[P,M,F,_,O,null==k?void 0:k.locale,R]);let H={ref:q,onClick(e){N||"function"!=typeof w||w(e),N&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,n,o,s,i,l,c,u,d){let{nodeName:f}=e.currentTarget,m="A"===f.toUpperCase();if(m&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!r.isLocalURL(n)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[s?"replace":"push"](n,o,{shallow:i,locale:c,scroll:l}):t[s?"replace":"push"](o||n,{forceOptimisticNavigation:!d})};u?a.default.startTransition(p):p()}(e,R,M,P,x,E,j,_,S,O)},onMouseEnter(e){N||"function"!=typeof C||C(e),N&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),R&&(O||!S)&&h(R,M,P,{locale:_,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){N||"function"!=typeof T||T(e),N&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),R&&(O||!S)&&h(R,M,P,{locale:_,priority:!0,bypassPrefetchedCheck:!0})}};if(!N||b||"a"===o.type&&!("href"in o.props)){let e=void 0!==_?_:null==k?void 0:k.locale,t=(null==k?void 0:k.isLocaleDomain)&&f.getDomainLocale(P,e,null==k?void 0:k.locales,null==k?void 0:k.domainLocales);H.href=t||m.addBasePath(l.addLocale(P,e,null==k?void 0:k.defaultLocale))}return N?a.default.cloneElement(o,H):a.default.createElement("a",Object.assign({},I,H),n)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:l}=e,c=l||!a,[u,d]=o.useState(!1),f=o.useRef(null),m=o.useCallback(e=>{f.current=e},[]);o.useEffect(()=>{if(a){if(c||u)return;let e=f.current;if(e&&e.tagName){let o=function(e,t,n){let{id:o,observer:s,elements:a}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=i.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=r.get(o)))return t;let s=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=s.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:a,elements:s},i.push(n),r.set(n,t),t}(n);return a.set(e,t),s.observe(e),function(){if(a.delete(e),s.unobserve(e),0===a.size){s.disconnect(),r.delete(o);let e=i.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return o}}else if(!u){let e=s.requestIdleCallback(()=>d(!0));return()=>s.cancelIdleCallback(e)}},[c,n,t,u,f.current]);let p=o.useCallback(()=>{d(!1)},[]);return[m,u,p]};var o=n(7294),s=n(4686);let a="function"==typeof IntersectionObserver,r=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:o,blurHeight:s,blurDataURL:a}=e,r=o||t,i=s||n,l=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return r&&i?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(r," ").concat(i,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(o&&s?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(a,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function n(e){let{config:t,src:n,width:o,quality:s}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(o,"&q=").concat(s||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},5721:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var o=n(5893),s=n(7294),a=n(9008),r=n.n(a),i=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("footer",{className:"footer",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"footer_wrapper",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-6",children:(0,o.jsx)("div",{className:"logo",children:(0,o.jsx)("img",{src:"/images/newlogo.svg",alt:""})})}),(0,o.jsxs)("div",{className:"col-sm-12 col-md-6 col-lg-3 ms-auto",children:[(0,o.jsx)("div",{className:"footer_social",children:(0,o.jsx)("div",{className:"social",children:(0,o.jsxs)("ul",{className:"list-unstyled d-flex",children:[(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"https://www.youtube.com/@violacommunications7188",target:"_blank",children:(0,o.jsx)("i",{className:"fab fa-youtube"})})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"https://www.facebook.com/ViolaCommunications/",target:"_blank",children:(0,o.jsx)("i",{className:"fab fa-facebook"})})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"https://www.linkedin.com/company/viola-communications/mycompany/verification/",target:"_blank",children:(0,o.jsx)("i",{className:"fab fa-linkedin-in"})})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"https://twitter.com/violacomm?lang=en",target:"_blank",children:(0,o.jsx)("i",{className:"fab fa-twitter"})})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"https://www.instagram.com/violacommunications/",target:"_blank",children:(0,o.jsx)("i",{className:"fab fa-instagram"})})})]})})}),(0,o.jsxs)("div",{className:"footer_form",children:[(0,o.jsx)("h5",{className:"text-w-300 text-f-3 text-white",children:"Join our newsletter"}),(0,o.jsx)("form",{action:"",children:(0,o.jsxs)("div",{className:"input-group",children:[(0,o.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter your Email"}),(0,o.jsx)("button",{className:"input-group-text",id:"basic-addon2",children:"Subscribe"})]})})]})]})]})})})}),(0,o.jsx)("div",{className:"copy_right",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("h5",{className:"text-w-300",children:"@ 2023 Viola Outdoor all rights reserved"})})})]})};n(5675);var l=n(1664),c=n.n(l),u=function(e){let{openSidebar:t}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"my_navbar",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"wrapper",children:[(0,o.jsx)("div",{className:"logo",children:(0,o.jsx)(c(),{href:"/",children:(0,o.jsx)("img",{src:"/images/newlogo.svg",alt:""})})}),(0,o.jsxs)("div",{className:" burger_menue",children:[(0,o.jsx)("div",{className:"contact",children:(0,o.jsx)("a",{className:"text-f-3",href:"#contactus_section",children:"Contact Us"})}),(0,o.jsx)("div",{className:"menu_icon",onClick:t,children:(0,o.jsxs)("div",{id:"nav-icon1",children:[(0,o.jsx)("span",{}),(0,o.jsx)("span",{})]})})]})]})})})})},d=function(e){let{closeSidebar:t}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"side_nav",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row align-items-center",children:(0,o.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-12",children:(0,o.jsxs)("ul",{className:"list-unstyled links",children:[(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"/#aboutus_section",onClick:t,children:"about us"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"/#ourproduct_section",onClick:t,children:"Our Products"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"/#ourlocation_section",onClick:t,children:"Our Locations"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"/#newsmedia_section",onClick:t,children:"News & Insights"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"/#contactus_section",onClick:t,children:"Contact Us"})})]})})})})})})};n(2049);let f=()=>{document.querySelector("#nav-icon1").classList.toggle("open"),document.querySelector(".side_nav").classList.toggle("side_nav_open"),document.querySelector("html").classList.toggle("menu_open")},m=e=>{document.querySelector(".side_nav").classList.toggle("side_nav_open"),document.querySelector("#nav-icon1").classList.toggle("open"),document.querySelector("html").classList.remove("menu_open")};var p=function(e){let{children:t}=e,[n,a]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{a(!1)},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r(),{children:[(0,o.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65",crossorigin:"anonymous"}),(0,o.jsx)("link",{rel:"shortcut icon",href:"/images/favicon.ico",type:"image/x-icon"}),(0,o.jsx)("link",{rel:"stylesheet",href:"/css/all.min.css"}),(0,o.jsx)("link",{rel:"stylesheet",href:"/css/backbtn_style.css"}),(0,o.jsx)("meta",{charset:"UTF-8"}),(0,o.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,o.jsx)("script",{src:"/js/jquery-3.6.0.min.js"}),(0,o.jsx)("script",{src:"/js/backbtn_script.js"})]}),(0,o.jsx)(d,{closeSidebar:m}),(0,o.jsx)(u,{openSidebar:f}),(0,o.jsxs)("main",{children:[" ",t," "]}),(0,o.jsx)(i,{})]})};n(7403),n(4213);var h=n(5678),g=function(e){let{Component:t,pageProps:n}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(p,{children:[(0,o.jsx)(t,{...n}),(0,o.jsx)(h.Ix,{})]})})}},4213:function(){},7403:function(){},9008:function(e,t,n){e.exports=n(3121)},5675:function(e,t,n){n(9749)},1664:function(e,t,n){e.exports=n(1551)},5678:function(e,t,n){"use strict";n.d(t,{Am:function(){return k},Ix:function(){return j}});var o=n(7294),s=n(6010);let a=e=>"number"==typeof e&&!isNaN(e),r=e=>"string"==typeof e,i=e=>"function"==typeof e,l=e=>r(e)||i(e)?e:null,c=e=>(0,o.isValidElement)(e)||r(e)||i(e)||a(e);function u(e){let{enter:t,exit:n,appendPosition:s=!1,collapse:a=!0,collapseDuration:r=300}=e;return function(e){let{children:i,position:l,preventExitTransition:c,done:u,nodeRef:d,isIn:f}=e,m=s?`${t}--${l}`:t,p=s?`${n}--${l}`:n,h=(0,o.useRef)(0);return(0,o.useLayoutEffect)(()=>{let e=d.current,t=m.split(" "),n=o=>{o.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===h.current&&"animationcancel"!==o.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),(0,o.useEffect)(()=>{let e=d.current,t=()=>{e.removeEventListener("animationend",t),a?function(e,t,n){void 0===n&&(n=300);let{scrollHeight:o,style:s}=e;requestAnimationFrame(()=>{s.minHeight="initial",s.height=o+"px",s.transition=`all ${n}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(t,n)})})}(e,u,r):u()};f||(c?t():(h.current=1,e.className+=` ${p}`,e.addEventListener("animationend",t)))},[f]),o.createElement(o.Fragment,null,i)}}function d(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}let f={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){let n=this.list.get(e).filter(e=>e!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){let t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{let n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},m=e=>{let{theme:t,type:n,...s}=e;return o.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...s})},p={info:function(e){return o.createElement(m,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(m,{...e},o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(m,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(m,{...e},o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function h(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function g(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function v(e){let{closeToast:t,theme:n,ariaLabel:s="close"}=e;return o.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":s},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function y(e){let{delay:t,isRunning:n,closeToast:a,type:r="default",hide:l,className:c,style:u,controlledProgress:d,progress:f,rtl:m,isIn:p,theme:h}=e,g=l||d&&0===f,v={...u,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:g?0:1};d&&(v.transform=`scaleX(${f})`);let y=(0,s.default)("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${h}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":m}),b=i(c)?c({rtl:m,type:r,defaultClassName:y}):(0,s.default)(y,c);return o.createElement("div",{role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:b,style:v,[d&&f>=1?"onTransitionEnd":"onAnimationEnd"]:d&&f<1?null:()=>{p&&a()}})}let b=e=>{let{isRunning:t,preventExitTransition:n,toastRef:a,eventHandlers:r}=function(e){let[t,n]=(0,o.useState)(!1),[s,a]=(0,o.useState)(!1),r=(0,o.useRef)(null),l=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,c=(0,o.useRef)(e),{autoClose:u,pauseOnHover:d,closeToast:f,onClick:m,closeOnClick:p}=e;function v(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),l.didMove=!1,document.addEventListener("mousemove",E),document.addEventListener("mouseup",j),document.addEventListener("touchmove",E),document.addEventListener("touchend",j);let n=r.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=n.getBoundingClientRect(),n.style.transition="",l.x=h(t.nativeEvent),l.y=g(t.nativeEvent),"x"===e.draggableDirection?(l.start=l.x,l.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(l.start=l.y,l.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function y(t){if(l.boundingRect){let{top:n,bottom:o,left:s,right:a}=l.boundingRect;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&l.x>=s&&l.x<=a&&l.y>=n&&l.y<=o?x():b()}}function b(){n(!0)}function x(){n(!1)}function E(n){let o=r.current;l.canDrag&&o&&(l.didMove=!0,t&&x(),l.x=h(n),l.y=g(n),l.delta="x"===e.draggableDirection?l.x-l.start:l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),o.style.transform=`translate${e.draggableDirection}(${l.delta}px)`,o.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function j(){document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",j),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",j);let t=r.current;if(l.canDrag&&l.didMove&&t){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return a(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform=`translate${e.draggableDirection}(0)`,t.style.opacity="1"}}(0,o.useEffect)(()=>{c.current=e}),(0,o.useEffect)(()=>(r.current&&r.current.addEventListener("d",b,{once:!0}),i(e.onOpen)&&e.onOpen((0,o.isValidElement)(e.children)&&e.children.props),()=>{let e=c.current;i(e.onClose)&&e.onClose((0,o.isValidElement)(e.children)&&e.children.props)}),[]),(0,o.useEffect)(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||x(),window.addEventListener("focus",b),window.addEventListener("blur",x)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",b),window.removeEventListener("blur",x))}),[e.pauseOnFocusLoss]);let _={onMouseDown:v,onTouchStart:v,onMouseUp:y,onTouchEnd:y};return u&&d&&(_.onMouseEnter=x,_.onMouseLeave=b),p&&(_.onClick=e=>{m&&m(e),l.canCloseOnClick&&f()}),{playToast:b,pauseToast:x,isRunning:t,preventExitTransition:s,toastRef:r,eventHandlers:_}}(e),{closeButton:l,children:c,autoClose:u,onClick:d,type:f,hideProgressBar:m,closeToast:p,transition:b,position:x,className:E,style:j,bodyClassName:_,bodyStyle:w,progressClassName:C,progressStyle:T,updateId:N,role:I,progress:O,rtl:k,toastId:L,deleteToast:R,isIn:S,isLoading:M,iconOut:P,closeOnClick:z,theme:A}=e,D=(0,s.default)("Toastify__toast",`Toastify__toast-theme--${A}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":z}),B=i(E)?E({rtl:k,position:x,type:f,defaultClassName:D}):(0,s.default)(D,E),F=!!O||!u,$={closeToast:p,type:f,theme:A},q=null;return!1===l||(q=i(l)?l($):(0,o.isValidElement)(l)?(0,o.cloneElement)(l,$):v($)),o.createElement(b,{isIn:S,done:R,position:x,preventExitTransition:n,nodeRef:a},o.createElement("div",{id:L,onClick:d,className:B,...r,style:j,ref:a},o.createElement("div",{...S&&{role:I},className:i(_)?_({type:f}):(0,s.default)("Toastify__toast-body",_),style:w},null!=P&&o.createElement("div",{className:(0,s.default)("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},P),o.createElement("div",null,c)),q,o.createElement(y,{...N&&!F?{key:`pb-${N}`}:{},rtl:k,theme:A,delay:u,isRunning:t,isIn:S,closeToast:p,hide:m,type:f,style:T,className:C,controlledProgress:F,progress:O||0})))},x=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},E=u(x("bounce",!0)),j=(u(x("slide",!0)),u(x("zoom")),u(x("flip")),(0,o.forwardRef)((e,t)=>{let{getToastToRender:n,containerRef:u,isToastActive:m}=function(e){let[,t]=(0,o.useReducer)(e=>e+1,0),[n,s]=(0,o.useState)([]),u=(0,o.useRef)(null),m=(0,o.useRef)(new Map).current,h=e=>-1!==n.indexOf(e),g=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:h,getToast:e=>m.get(e)}).current;function v(e){let{containerId:t}=e,{limit:n}=g.props;!n||t&&g.containerId!==t||(g.count-=g.queue.length,g.queue=[])}function y(e){s(t=>null==e?[]:t.filter(t=>t!==e))}function b(){let{toastContent:e,toastProps:t,staleId:n}=g.queue.shift();E(e,t,n)}function x(e,n){var s,h;let{delay:v,staleId:x,...j}=n;if(!c(e)||!u.current||g.props.enableMultiContainer&&j.containerId!==g.props.containerId||m.has(j.toastId)&&null==j.updateId)return;let{toastId:_,updateId:w,data:C}=j,{props:T}=g,N=()=>y(_),I=null==w;I&&g.count++;let O={...T,style:T.toastStyle,key:g.toastKey++,...j,toastId:_,updateId:w,data:C,closeToast:N,isIn:!1,className:l(j.className||T.toastClassName),bodyClassName:l(j.bodyClassName||T.bodyClassName),progressClassName:l(j.progressClassName||T.progressClassName),autoClose:!j.isLoading&&(s=j.autoClose,h=T.autoClose,!1===s||a(s)&&s>0?s:h),deleteToast(){let e=d(m.get(_),"removed");m.delete(_),f.emit(4,e);let n=g.queue.length;if(g.count=null==_?g.count-g.displayedToast:g.count-1,g.count<0&&(g.count=0),n>0){let e=null==_?g.props.limit:1;if(1===n||1===e)g.displayedToast++,b();else{let t=e>n?n:e;g.displayedToast=t;for(let e=0;e<t;e++)b()}}else t()}};O.iconOut=function(e){let{theme:t,type:n,isLoading:s,icon:l}=e,c=null,u={theme:t,type:n};return!1===l||(i(l)?c=l(u):(0,o.isValidElement)(l)?c=(0,o.cloneElement)(l,u):r(l)||a(l)?c=l:s?c=p.spinner():n in p&&(c=p[n](u))),c}(O),i(j.onOpen)&&(O.onOpen=j.onOpen),i(j.onClose)&&(O.onClose=j.onClose),O.closeButton=T.closeButton,!1===j.closeButton||c(j.closeButton)?O.closeButton=j.closeButton:!0===j.closeButton&&(O.closeButton=!c(T.closeButton)||T.closeButton);let k=e;(0,o.isValidElement)(e)&&!r(e.type)?k=(0,o.cloneElement)(e,{closeToast:N,toastProps:O,data:C}):i(e)&&(k=e({closeToast:N,toastProps:O,data:C})),T.limit&&T.limit>0&&g.count>T.limit&&I?g.queue.push({toastContent:k,toastProps:O,staleId:x}):a(v)?setTimeout(()=>{E(k,O,x)},v):E(k,O,x)}function E(e,t,n){let{toastId:o}=t;n&&m.delete(n);let a={content:e,props:t};m.set(o,a),s(e=>[...e,o].filter(e=>e!==n)),f.emit(4,d(a,null==a.props.updateId?"added":"updated"))}return(0,o.useEffect)(()=>(g.containerId=e.containerId,f.cancelEmit(3).on(0,x).on(1,e=>u.current&&y(e)).on(5,v).emit(2,g),()=>{m.clear(),f.emit(3,g)}),[]),(0,o.useEffect)(()=>{g.props=e,g.isToastActive=h,g.displayedToast=n.length}),{getToastToRender:function(t){let n=new Map,o=Array.from(m.values());return e.newestOnTop&&o.reverse(),o.forEach(e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))},containerRef:u,isToastActive:h}}(e),{className:h,style:g,rtl:v,containerId:y}=e;return(0,o.useEffect)(()=>{t&&(t.current=u.current)},[]),o.createElement("div",{ref:u,className:"Toastify",id:y},n((e,t)=>{let n=t.length?{...g}:{...g,pointerEvents:"none"};return o.createElement("div",{className:function(e){let t=(0,s.default)("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":v});return i(h)?h({position:e,rtl:v,defaultClassName:t}):(0,s.default)(t,l(h))}(e),style:n,key:`container-${e}`},t.map((e,n)=>{let{content:s,props:a}=e;return o.createElement(b,{...a,isIn:m(a.toastId),style:{...a.style,"--nth":n+1,"--len":t.length},key:`toast-${a.key}`},s)}))}))}));j.displayName="ToastContainer",j.defaultProps={position:"top-right",transition:E,autoClose:5e3,closeButton:v,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let _,w=new Map,C=[],T=1;function N(e,t){return w.size>0?f.emit(0,e,t):C.push({content:e,options:t}),t.toastId}function I(e,t){return{...t,type:t&&t.type||e,toastId:t&&(r(t.toastId)||a(t.toastId))?t.toastId:""+T++}}function O(e){return(t,n)=>N(t,I(e,n))}function k(e,t){return N(e,I("default",t))}k.loading=(e,t)=>N(e,I("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),k.promise=function(e,t,n){let o,{pending:s,error:a,success:l}=t;s&&(o=r(s)?k.loading(s,n):k.loading(s.render,{...n,...s}));let c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},u=(e,t,s)=>{if(null==t)return void k.dismiss(o);let a={type:e,...c,...n,data:s},i=r(t)?{render:t}:t;return o?k.update(o,{...a,...i}):k(i.render,{...a,...i}),s},d=i(e)?e():e;return d.then(e=>u("success",l,e)).catch(e=>u("error",a,e)),d},k.success=O("success"),k.info=O("info"),k.error=O("error"),k.warning=O("warning"),k.warn=k.warning,k.dark=(e,t)=>N(e,I("default",{theme:"dark",...t})),k.dismiss=e=>{w.size>0?f.emit(1,e):C=C.filter(t=>null!=e&&t.options.toastId!==e)},k.clearWaitingQueue=function(e){return void 0===e&&(e={}),f.emit(5,e)},k.isActive=e=>{let t=!1;return w.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},k.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{let n=function(e,t){let{containerId:n}=t,o=w.get(n||_);return o&&o.getToast(e)}(e,t);if(n){let{props:o,content:s}=n,a={...o,...t,toastId:t.toastId||e,updateId:""+T++};a.toastId!==e&&(a.staleId=e);let r=a.render||s;delete a.render,N(r,a)}},0)},k.done=e=>{k.update(e,{progress:1})},k.onChange=e=>(f.on(4,e),()=>{f.off(4,e)}),k.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},k.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},f.on(2,e=>{_=e.containerId||e,w.set(_,e),C.forEach(e=>{f.emit(0,e.content,e.options)}),C=[]}).on(3,e=>{w.delete(e.containerId||e),0===w.size&&f.off(0).off(1).off(5)})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);