(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7],{3348:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/jjoripingBabo",function(){return c(8314)}])},8969:function(a,b,c){"use strict";var d=c(5893),e=c(1664),f=c.n(e),g=c(8580),h=c.n(g),i=c(1163),j=function(){var a=(0,i.useRouter)();return(0,d.jsx)("div",{className:h().header,children:(0,d.jsxs)("ul",{children:[(0,d.jsx)(f(),{href:"/",children:(0,d.jsx)("li",{className:"/"===a.asPath?h().current:void 0,children:"메인"})}),(0,d.jsx)(f(),{href:"/introduce",children:(0,d.jsx)("li",{className:"/introduce"===a.asPath?h().current:void 0,children:"자기소개"})}),(0,d.jsx)(f(),{href:"/portfolio",children:(0,d.jsx)("li",{className:"/portfolio"===a.asPath?h().current:void 0,children:"포트폴리오"})}),(0,d.jsx)(f(),{href:"/privateChat",children:(0,d.jsx)("li",{className:"/privateChat"===a.asPath?h().current:void 0,children:"개인 잡담"})}),(0,d.jsx)(f(),{href:"/jjoripingBabo",children:(0,d.jsx)("li",{className:"/jjoripingBabo"===a.asPath?h().current:void 0,children:"쪼리핑 바보"})})]})})};b.Z=j},8314:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return s}});var d=c(5893),e=c(8969),f=c(6053),g=c.n(f),h=c(1799),i=c(9396);function j(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function k(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a,b)||function(a,b){if(a){if("string"==typeof a)return j(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return j(a,b)}}(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=c(7294),m=c(1948),n=c.n(m);function o(a){for(var b=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],c=0;c<b.length;c++){var d=k(b[c],3),e=d[0],f=d[1],g=d[2];if(a[e]&&a[e]===a[f]&&a[e]===a[g])return a[e]}return null}function p(a){return(0,d.jsx)("button",{className:n().square,onClick:a.onClick,children:a.value})}var q=function(a){var b=function(b){return(0,d.jsx)(p,{value:a.squares[b],onClick:function(){return a.onClick(b)}})};return(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:n().board_row,children:[b(0),b(1),b(2)]}),(0,d.jsxs)("div",{className:n().board_row,children:[b(3),b(4),b(5)]}),(0,d.jsxs)("div",{className:n().board_row,children:[b(6),b(7),b(8)]})]})},r=function(){var a,b=function(a){var b=f.histories.slice(0,f.stepNumber+1),c=b[b.length-1].squares.slice();!o(c)&&!c[a]&&(c[a]=f.xIsNext?"X":"O",g({histories:b.concat([{squares:c}]),stepNumber:b.length,xIsNext:!f.xIsNext}))},c=function(a){var b=!1;b=a%2==0,g(f.stepNumber=a),g((0,i.Z)((0,h.Z)({},f),{stepNumber:a,xIsNext:b}))},e=(0,l.useState)({histories:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0}),f=e[0],g=e[1],j=f.histories,k=j[f.stepNumber];console.log("log1 "+f.stepNumber),console.log(j[f.stepNumber]);var m=o(k.squares),p=j.map(function(a,b){return(0,d.jsx)("li",{children:(0,d.jsx)("button",{onClick:function(){return c(b)},children:b?"Go to move #"+b:"Go to game start"})},b)});return console.log(f.stepNumber),a=m?"Winner: "+m:9==f.stepNumber?" Tie! ":"Next player: "+(f.xIsNext?"X":"O"),(0,d.jsxs)("div",{className:n().game,children:[(0,d.jsx)("div",{className:n().game_board,children:(0,d.jsx)(q,{squares:k.squares,onClick:function(a){return b(a)}})}),(0,d.jsxs)("div",{className:n().game_info,children:[(0,d.jsx)("div",{children:a}),(0,d.jsx)("ol",{children:p})]})]})},s=function(){return(0,d.jsxs)("div",{children:[(0,d.jsx)(e.Z,{}),(0,d.jsxs)("footer",{className:g().footer,children:[(0,d.jsx)("h1",{children:"이 공간은 간단한 토이 프로젝트 무엇이든지 만들고 생산하는 장소 입니다."}),(0,d.jsx)("br",{}),(0,d.jsx)("h2",{children:" 틱텍토"}),(0,d.jsx)(r,{}),(0,d.jsx)("h2",{children:" 다음 미니 게임을 기대해주세요!"})]})]})}},8580:function(a){a.exports={header:"header_header__n6agz",current:"header_current__jhjKn"}},6053:function(a){a.exports={linkHighlight:"main_linkHighlight__lyzL2",main:"main_main__9lb_G",body:"main_body__S7dFa",container:"main_container__s5l5Z",row:"main_row__ukFMN",header_container:"main_header_container__mJ_9C",header_myName:"main_header_myName__hAhem",header_icons:"main_header_icons__GZsCb",header_icon:"main_header_icon__KQaP_",header_upMenu:"main_header_upMenu__UEwzb",nav:"main_nav__pOwjr",titleSection:"main_titleSection__4UxqX",title:"main_title__Vtdnt",html5:"main_html5__aAmyV",github:"main_github__R6jGV",facebook:"main_facebook__OGcs0",twitter:"main_twitter__MVt_Q",sectionContainer:"main_sectionContainer__qTPC1",flex:"main_flex__WC_jr",sameRow:"main_sameRow__ENwFk",normal:"main_normal__rRoG0",cont_main:"main_cont_main__1tfCN",cont_center:"main_cont_center__sNGr7",Hacked:"main_Hacked__YYJ0N"}},1948:function(a){a.exports={board_row:"tictacto_board_row__HOFta",status:"tictacto_status__zC40g",square:"tictacto_square__aOxQP","kbd-navigation":"tictacto_kbd-navigation__a4rcx",game:"tictacto_game__3r6hP",game_info:"tictacto_game_info__dzKby"}},9396:function(a,b,c){"use strict";function d(a,b){return b=null!=b?b:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))}),a}c.d(b,{Z:function(){return d}})}},function(a){a.O(0,[424,774,888,179],function(){var b;return a(a.s=3348)}),_N_E=a.O()}])