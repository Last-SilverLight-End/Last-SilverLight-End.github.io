(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7],{3348:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/jjoripingBabo",function(){return c(3426)}])},8969:function(a,b,c){"use strict";var d=c(1799),e=c(9396),f=c(4288),g=c(7753),h=c(8580),i=c.n(h),j=c(1664),k=c.n(j),l=c(1163),m=c(7294),n=function(){var a,b=(0,l.useRouter)(),c=(0,m.useState)(!1),h=c[0],j=c[1],n=function(){j(!h)},o=(0,m.useState)({width:0,height:0}),p=o[0],q=o[1],r=function(a){var c=function(c){c.preventDefault(),b.push({pathname:a.path}).then(function(){window.scrollTo(0,0)})};return(0,f.tZ)(k(),{href:a.path,children:(0,f.tZ)("li",{className:a.router.asPath===a.path?i().current:void 0,onClick:c,children:(0,f.tZ)("strong",{children:a.text})})})};(0,m.useEffect)(function(){window.scrollTo(0,0);var a=function(){q({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",a),a(),function(){return window.removeEventListener("resize",a)}},[]),console.log(p.width,p.height);var s=(a=b,function(b){return(0,f.tZ)(r,(0,e.Z)((0,d.Z)({},b),{router:a}))});return p.width>=1020?(0,f.tZ)("div",{className:i().header,children:(0,f.BX)("ul",{children:[(0,f.tZ)(s,{path:"/",text:"메인"}),(0,f.tZ)(s,{path:"/introduce",text:"자기소개"}),(0,f.tZ)(s,{path:"/portfolio",text:"포트폴리오"})]})}):(0,f.BX)("div",{className:i().header,children:[(0,f.tZ)(g.Z,{className:i().headerImg,alt:"html5",src:"/images/menubar.png",height:60,width:60,onClick:n}),(0,f.BX)("ul",{children:[(0,f.tZ)(s,{path:"/",text:"메인"}),(0,f.tZ)(s,{path:"/introduce",text:"자기소개"}),(0,f.tZ)(s,{path:"/portfolio",text:"포트폴리오"})]})]})};b.Z=n},7753:function(a,b,c){"use strict";var d=c(1799),e=c(9396),f=c(4288),g=function(a){return(0,f.tZ)("img",(0,e.Z)((0,d.Z)({},a),{src:a.src}))};b.Z=g},3426:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return s}});var d=c(4288),e=c(8969),f=c(1799),g=c(9396),h=c(603),i=c(1948),j=c.n(i),k=c(7294);function l(a){for(var b=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],],c=0;c<b.length;c++){var d=(0,h.Z)(b[c],3),e=d[0],f=d[1],g=d[2];if(a[e]&&a[e]===a[f]&&a[e]===a[g])return a[e]}return null}function m(a){return(0,d.tZ)("button",{className:j().square,onClick:a.onClick,children:a.value})}var n=function(a){var b=function(b){return(0,d.tZ)(m,{value:a.squares[b],onClick:function(){return a.onClick(b)}})};return(0,d.BX)("div",{children:[(0,d.BX)("div",{className:j().board_row,children:[b(0),b(1),b(2)]}),(0,d.BX)("div",{className:j().board_row,children:[b(3),b(4),b(5)]}),(0,d.BX)("div",{className:j().board_row,children:[b(6),b(7),b(8)]})]})},o=function(){var a,b=function(a){var b=h.histories.slice(0,h.stepNumber+1),c=b[b.length-1].squares.slice();!l(c)&&!c[a]&&(c[a]=h.xIsNext?"X":"O",i({histories:b.concat([{squares:c}]),stepNumber:b.length,xIsNext:!h.xIsNext}))},c=function(a){var b=!1;b=a%2==0,i(h.stepNumber=a),i((0,g.Z)((0,f.Z)({},h),{stepNumber:a,xIsNext:b}))},e=(0,k.useState)({histories:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0}),h=e[0],i=e[1],m=h.histories,o=m[h.stepNumber];console.log("log1 "+h.stepNumber),console.log(m[h.stepNumber]);var p=l(o.squares),q=m.map(function(a,b){return(0,d.tZ)("li",{children:(0,d.tZ)("button",{onClick:function(){return c(b)},children:b?"Go to move #"+b:"Go to game start"})},b)});return console.log(h.stepNumber),a=p?"Winner: "+p:9==h.stepNumber?" Tie! ":"Next player: "+(h.xIsNext?"X":"O"),(0,d.BX)("div",{className:j().game,children:[(0,d.tZ)("div",{className:j().game_board,children:(0,d.tZ)(n,{squares:o.squares,onClick:function(a){return b(a)}})}),(0,d.BX)("div",{className:j().game_info,children:[(0,d.tZ)("div",{children:a}),(0,d.tZ)("ol",{children:q})]})]})},p=c(5687),q=c.n(p),r=function(){return(0,d.BX)("div",{children:[(0,d.tZ)("h1",{children:"이 공간은 간단한 토이 프로젝트 무엇이든지 만들고 생산하는 장소 입니다."}),(0,d.tZ)(e.Z,{}),(0,d.BX)("div",{className:q().gameProject,children:[(0,d.BX)("div",{className:q().tictacto,children:[(0,d.tZ)("h1",{children:" 틱텍토"}),(0,d.tZ)(o,{}),(0,d.tZ)("h2",{children:" 다음 미니 게임을 기대해주세요!"})]}),(0,d.tZ)("div",{})]})]})},s=r},8580:function(a){a.exports={header:"header_header__n6agz",current:"header_current__jhjKn","menu-button-container":"header_menu-button-container___5hPd",menu:"header_menu__cfTtF"}},5687:function(a){a.exports={tictacto:"jjoripingBabo_tictacto__YmUnj",gameProject:"jjoripingBabo_gameProject__vBg2K",games:"jjoripingBabo_games__XMtnm"}},1948:function(a){a.exports={board_row:"tictacto_board_row__HOFta",status:"tictacto_status__zC40g",square:"tictacto_square__aOxQP","kbd-navigation":"tictacto_kbd-navigation__a4rcx",game:"tictacto_game__3r6hP",game_info:"tictacto_game_info__dzKby"}},603:function(a,b,c){"use strict";function d(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function e(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a,b)||function(a,b){if(a){if("string"==typeof a)return d(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return d(a,b)}}(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}c.d(b,{Z:function(){return e}})}},function(a){a.O(0,[89,774,888,179],function(){var b;return a(a.s=3348)}),_N_E=a.O()}])