(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44],{9361:function(a,b){"use strict";b.Z=function(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}},2429:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privateChat",function(){return c(6720)}])},8969:function(a,b,c){"use strict";var d=c(1799),e=c(9396),f=c(4288),g=c(7753),h=c(8580),i=c.n(h),j=c(1664),k=c.n(j),l=c(1163),m=c(7294),n=function(){var a,b=(0,l.useRouter)(),c=(0,m.useState)(!1),h=c[0],j=c[1],n=function(){j(!h)},o=(0,m.useState)({width:0,height:0}),p=o[0],q=o[1],r=function(a){var c=function(c){c.preventDefault(),b.push({pathname:a.path}).then(function(){window.scrollTo(0,0)})};return(0,f.tZ)(k(),{href:a.path,children:(0,f.tZ)("li",{className:a.router.asPath===a.path?i().current:void 0,onClick:c,children:(0,f.tZ)("strong",{children:a.text})})})};(0,m.useEffect)(function(){window.scrollTo(0,0);var a=function(){q({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",a),a(),function(){return window.removeEventListener("resize",a)}},[]),console.log(p.width,p.height);var s=(a=b,function(b){return(0,f.tZ)(r,(0,e.Z)((0,d.Z)({},b),{router:a}))});return p.width>=1020?(0,f.tZ)("div",{className:i().header,children:(0,f.BX)("ul",{children:[(0,f.tZ)(s,{path:"/",text:"메인"}),(0,f.tZ)(s,{path:"/introduce",text:"자기소개"}),(0,f.tZ)(s,{path:"/portfolio",text:"포트폴리오"})]})}):(0,f.BX)("div",{className:i().header,children:[(0,f.tZ)(g.Z,{className:i().headerImg,alt:"html5",src:"/images/menubar.png",height:60,width:60,onClick:n}),(0,f.BX)("ul",{children:[(0,f.tZ)(s,{path:"/",text:"메인"}),(0,f.tZ)(s,{path:"/introduce",text:"자기소개"}),(0,f.tZ)(s,{path:"/portfolio",text:"포트폴리오"})]})]})};b.Z=n},7753:function(a,b,c){"use strict";var d=c(1799),e=c(9396),f=c(4288),g=function(a){return(0,f.tZ)("img",(0,e.Z)((0,d.Z)({},a),{src:a.src}))};b.Z=g},8045:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(9361).Z,e=c(4941).Z,f=c(3929).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){var b,c,h=a.src,i=a.sizes,p=a.unoptimized,q=void 0!==p&&p,v=a.priority,B=void 0!==v&&v,D=a.loading,E=a.lazyRoot,F=void 0===E?null:E,G=a.lazyBoundary,H=a.className,I=a.quality,J=a.width,K=a.height,L=a.style,M=a.objectFit,N=a.objectPosition,O=a.onLoadingComplete,P=a.placeholder,Q=void 0===P?"empty":P,R=a.blurDataURL,S=j(a,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),T=k.useContext(o.ImageConfigContext),U=k.useMemo(function(){var a=s||T||m.imageConfigDefault,b=f(a.deviceSizes).concat(f(a.imageSizes)).sort(function(a,b){return a-b}),c=a.deviceSizes.sort(function(a,b){return a-b});return g({},a,{allSizes:b,deviceSizes:c})},[T]),V=S,W=i?"responsive":"intrinsic";"layout"in V&&(V.layout&&(W=V.layout),delete V.layout);var X=A;if("loader"in V){if(V.loader){var Y,Z=V.loader;X=function(a){a.config;var b=j(a,["config"]);return Z(b)}}delete V.loader}var $="";if(x(h)){var _=w(h)?h.default:h;if(!_.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(_)));if(R=R||_.blurDataURL,$=_.src,(!W||"fill"!==W)&&(K=K||_.height,J=J||_.width,!_.height||!_.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(_)))}h="string"==typeof h?h:$;var aa=!B&&("lazy"===D|| void 0===D);(h.startsWith("data:")||h.startsWith("blob:"))&&(q=!0,aa=!1),t.has(h)&&(aa=!1),r&&(q=!0);var ab=e(k.useState(!1),2),ac=ab[0],ad=ab[1],ae=e(n.useIntersection({rootRef:F,rootMargin:G||"200px",disabled:!aa}),3),af=ae[0],ag=ae[1],ah=ae[2],ai=!aa||ag,aj={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ak={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},al=!1,am=z(J),an=z(K),ao=z(I),ap=Object.assign({},L,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:N}),aq="blur"!==Q||ac?{}:{backgroundSize:M||"cover",backgroundPosition:N||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(R,'")')};if("fill"===W)aj.display="block",aj.position="absolute",aj.top=0,aj.left=0,aj.bottom=0,aj.right=0;else if(void 0!==am&& void 0!==an){var ar=an/am,as=isNaN(ar)?"100%":"".concat(100*ar,"%");"responsive"===W?(aj.display="block",aj.position="relative",al=!0,ak.paddingTop=as):"intrinsic"===W?(aj.display="inline-block",aj.position="relative",aj.maxWidth="100%",al=!0,ak.maxWidth="100%",b="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(am,"%27%20height=%27").concat(an,"%27/%3e")):"fixed"===W&&(aj.display="inline-block",aj.position="relative",aj.width=am,aj.height=an)}var at={src:u,srcSet:void 0,sizes:void 0};ai&&(at=y({config:U,src:h,unoptimized:q,layout:W,width:am,quality:ao,sizes:i,loader:X}));var au=h,av="imagesrcset",aw="imagesizes";aw="imageSizes";var ax=(d(c={},"imageSrcSet",at.srcSet),d(c,aw,at.sizes),c),ay=k.default.useLayoutEffect,az=k.useRef(O),aA=k.useRef(h);k.useEffect(function(){az.current=O},[O]),ay(function(){aA.current!==h&&(ah(),aA.current=h)},[ah,h]);var aB=g({isLazy:aa,imgAttributes:at,heightInt:an,widthInt:am,qualityInt:ao,layout:W,className:H,imgStyle:ap,blurStyle:aq,loading:D,config:U,unoptimized:q,placeholder:Q,loader:X,srcString:au,onLoadingCompleteRef:az,setBlurComplete:ad,setIntersection:af,isVisible:ai,noscriptSizes:i},V);return k.default.createElement(k.default.Fragment,null,k.default.createElement("span",{style:aj},al?k.default.createElement("span",{style:ak},b?k.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:b}):null):null,k.default.createElement(C,Object.assign({},aB))),B?k.default.createElement(l.default,null,k.default.createElement("link",Object.assign({key:"__nimg-"+at.src+at.srcSet+at.sizes,rel:"preload",as:"image",href:at.srcSet?void 0:at.src},ax))):null)};var g=c(6495).Z,h=c(2648).Z,i=c(1598).Z,j=c(7273).Z,k=i(c(7294)),l=h(c(5443)),m=c(9309),n=c(7190),o=c(9977);c(3794);var p=c(2392),q={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,experimentalUnoptimized:!0},r=(q.experimentalRemotePatterns,q.experimentalUnoptimized),s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,experimentalUnoptimized:!0},t=new Set,u="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",v=new Map([["default",function(a){var b=a.config,c=a.src,d=a.width,e=a.quality;return c.endsWith(".svg")&&!b.dangerouslyAllowSVG?c:"".concat(p.normalizePathTrailingSlash(b.path),"?url=").concat(encodeURIComponent(c),"&w=").concat(d,"&q=").concat(e||75)}],["imgix",function(a){var b=a.config,c=a.src,d=a.width,e=a.quality,f=new URL("".concat(b.path).concat(D(c))),g=f.searchParams;return g.set("auto",g.getAll("auto").join(",")||"format"),g.set("fit",g.get("fit")||"max"),g.set("w",g.get("w")||d.toString()),e&&g.set("q",e.toString()),f.href}],["cloudinary",function(a){var b=a.config,c=a.src,d=a.width,e=a.quality,f=["f_auto","c_limit","w_"+d,"q_"+(e||"auto")].join(",")+"/";return"".concat(b.path).concat(f).concat(D(c))}],["akamai",function(a){var b=a.config,c=a.src,d=a.width;return"".concat(b.path).concat(D(c),"?imwidth=").concat(d)}],["custom",function(a){var b=a.src;throw Error('Image with src "'.concat(b,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function w(a){return void 0!==a.default}function x(a){var b;return"object"==typeof a&&(w(a)|| void 0!==(b=a).src)}function y(a){var b=a.config,c=a.src,d=a.unoptimized,e=a.layout,g=a.width,h=a.quality,i=a.sizes,j=a.loader;if(d)return{src:c,srcSet:void 0,sizes:void 0};var k=function(a,b,c,d){var e=a.deviceSizes,g=a.allSizes;if(d&&("fill"===c||"responsive"===c)){for(var h=/(^|\s)(1?\d?\d)vw/g,i=[];j=h.exec(d);j)i.push(parseInt(j[2]));if(i.length){var j,k,l=.01*(k=Math).min.apply(k,f(i));return{widths:g.filter(function(a){return a>=e[0]*l}),kind:"w"}}return{widths:g,kind:"w"}}return"number"!=typeof b||"fill"===c||"responsive"===c?{widths:e,kind:"w"}:{widths:f(new Set([b,2*b].map(function(a){return g.find(function(b){return b>=a})||g[g.length-1]}))),kind:"x"}}(b,g,e,i),l=k.widths,m=k.kind,n=l.length-1;return{sizes:i||"w"!==m?i:"100vw",srcSet:l.map(function(a,d){return"".concat(j({config:b,src:c,quality:h,width:a})," ").concat("w"===m?a:d+1).concat(m)}).join(", "),src:j({config:b,src:c,quality:h,width:l[n]})}}function z(a){return"number"==typeof a?a:"string"==typeof a?parseInt(a,10):void 0}function A(a){var b,c=(null==(b=a.config)?void 0:b.loader)||"default",d=v.get(c);if(d)return d(a);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(m.VALID_LOADERS.join(", "),". Received: ").concat(c))}function B(a,b,c,d,e,f){a&&a.src!==u&&a["data-loaded-src"]!==b&&(a["data-loaded-src"]=b,("decode"in a?a.decode():Promise.resolve()).catch(function(){}).then(function(){if(a.parentNode&&(t.add(b),"blur"===d&&f(!0),null==e?void 0:e.current)){var c=a.naturalWidth,g=a.naturalHeight;e.current({naturalWidth:c,naturalHeight:g})}}))}var C=function(a){var b=a.imgAttributes,c=(a.heightInt,a.widthInt),d=a.qualityInt,e=a.layout,f=a.className,h=a.imgStyle,i=a.blurStyle,l=a.isLazy,m=a.placeholder,n=a.loading,o=a.srcString,p=a.config,q=a.unoptimized,r=a.loader,s=a.onLoadingCompleteRef,t=a.setBlurComplete,u=a.setIntersection,v=a.onLoad,w=a.onError,x=(a.isVisible,a.noscriptSizes),z=j(a,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return n=l?"lazy":n,k.default.createElement(k.default.Fragment,null,k.default.createElement("img",Object.assign({},z,b,{decoding:"async","data-nimg":e,className:f,style:g({},h,i),ref:k.useCallback(function(a){u(a),(null==a?void 0:a.complete)&&B(a,o,e,m,s,t)},[u,o,e,m,s,t,]),onLoad:function(a){B(a.currentTarget,o,e,m,s,t),v&&v(a)},onError:function(a){"blur"===m&&t(!0),w&&w(a)}})),(l||"blur"===m)&&k.default.createElement("noscript",null,k.default.createElement("img",Object.assign({},z,y({config:p,src:o,unoptimized:q,layout:e,width:c,quality:d,sizes:x,loader:r}),{decoding:"async","data-nimg":e,style:h,className:f,loading:n}))))};function D(a){return"/"===a[0]?a.slice(1):a}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},6720:function(a,b,c){"use strict";c.r(b);var d=c(4288),e=c(8969),f=c(5675),g=c.n(f),h=c(3191),i=c(6053),j=c.n(i),k=function(){return(0,d.BX)("div",{children:[(0,d.tZ)(e.Z,{}),(0,d.BX)("div",{className:j().plays,children:[(0,d.tZ)("h1",{children:"My Private Plays"}),(0,d.BX)("div",{className:j().youtube,children:[(0,d.tZ)(h.Z,{videoId:"NGYYKJ0R0OA",opts:{height:"600px",width:"80%",playerVars:{autoplay:1}}}),(0,d.tZ)("br",{}),(0,d.tZ)("h2",{children:" 개인적으로 오래된 노래를 은근 듣기도 하고요 ."})]})]}),(0,d.BX)("div",{className:j().eternal_return,children:[(0,d.tZ)("h2",{children:"이터널 리턴 게임을 하기도 하죠"}),(0,d.tZ)(g(),{alt:"myHandsome pictures",src:"/images/favorite_game.jpg",width:1200,height:700})]}),(0,d.tZ)("footer",{className:j().footer})]})};b.default=k},8580:function(a){a.exports={header:"header_header__n6agz",current:"header_current__jhjKn","menu-button-container":"header_menu-button-container___5hPd",menu:"header_menu__cfTtF"}},6053:function(a){a.exports={container:"main_container__s5l5Z",row:"main_row__ukFMN",title:"main_title__Vtdnt",cont_center:"main_cont_center__sNGr7",contents:"main_contents__HwvFm",square:"main_square__s546b",cont_right:"main_cont_right__Xa6FD",nav:"main_nav__pOwjr",column:"main_column__28UQG",col7:"main_col7__hKDw8",col8:"main_col8___e9jM",cont_left:"main_cont_left__5NIWi",header:"main_header__4U_Tj",header_tit:"main_header_tit__gDW7A",header_icon:"main_header_icon__KQaP_",col1:"main_col1__Tee4T",col_title:"main_col_title__pyihE",col_desc:"main_col_desc__z07g9",menu:"main_menu__03Dqb",col2:"main_col2__9TQJM",col4:"main_col4__9QaTJ",slider:"main_slider__aumKi",col9:"main_col9__2xvpl",linkHighlight:"main_linkHighlight__lyzL2",main:"main_main__9lb_G",body:"main_body__S7dFa",header_container:"main_header_container__mJ_9C",header_myName:"main_header_myName__hAhem",blog_image:"main_blog_image__ec0dg",header_upMenu:"main_header_upMenu__UEwzb",titleSection:"main_titleSection__4UxqX",html5:"main_html5__aAmyV",github:"main_github__R6jGV",facebook:"main_facebook__OGcs0",twitter:"main_twitter__MVt_Q",sectionContainer:"main_sectionContainer__qTPC1",flex:"main_flex__WC_jr",sameRow:"main_sameRow__ENwFk",normal:"main_normal__rRoG0",lines:"main_lines__oKRvs",eternal_return:"main_eternal_return__1b_Jw",plays:"main_plays__yzMea",youtube:"main_youtube__7EUZe",award_cont:"main_award_cont__5v0sc",Hacked:"main_Hacked__YYJ0N"}},5675:function(a,b,c){a.exports=c(8045)}},function(a){a.O(0,[89,191,774,888,179],function(){var b;return a(a.s=2429)}),_N_E=a.O()}])