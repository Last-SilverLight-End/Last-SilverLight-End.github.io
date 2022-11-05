(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[371],{5073:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio",function(){return c(8389)}])},8969:function(a,b,c){"use strict";var d=c(1799),e=c(9396),f=c(4288),g=c(1664),h=c.n(g),i=c(8580),j=c.n(i),k=c(1163),l=function(a){return(0,f.tZ)(h(),{href:a.path,children:(0,f.tZ)("li",{className:a.router.asPath===a.path?j().current:void 0,children:a.text})})},m=function(){var a,b=(a=(0,k.useRouter)(),function(b){return(0,f.tZ)(l,(0,e.Z)((0,d.Z)({},b),{router:a}))});return(0,f.tZ)("div",{className:j().header,children:(0,f.BX)("ul",{children:[(0,f.tZ)(b,{path:"/",text:"메인"}),(0,f.tZ)(b,{path:"/introduce",text:"자기소개"}),(0,f.tZ)(b,{path:"/portfolio",text:"포트폴리오"}),(0,f.tZ)(b,{path:"/privateChat",text:"개인 잡담"}),(0,f.tZ)(b,{path:"/jjoripingBabo",text:"놀이 공간"})]})})};b.Z=m},7753:function(a,b,c){"use strict";var d=c(1799),e=c(9396),f=c(4288),g=function(a){return(0,f.tZ)("img",(0,e.Z)((0,d.Z)({},a),{src:a.src}))};b.Z=g},8389:function(a,b,c){"use strict";function d(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}c.r(b),c.d(b,{default:function(){return t}});var e=c(4288),f=c(1664),g=c.n(f);c(7294),c(8417),c(8679);var h=c(7906);function i(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return(0,h.O)(b)}c(7278);var j=c(8969),k=c(6855),l=c.n(k),m=c(7753);function n(){var a=d(["\n          display: flex;\n          flex-direction: column;\n          \n          gap: 20px;\n        "]);return n=function(){return a},a}function o(){var a=d(["\n            list-style: '* ';\n            width: max-content;\n            text-align: left;\n            margin: 0 auto;\n          "]);return o=function(){return a},a}function p(){var a=d(["\n            font-weight: bold;\n          "]);return p=function(){return a},a}function q(){var a=d(["\n          padding: 20px;\n          background: #2b9def;\n          color: rgb(255, 255, 255);\n          text-align: center;\n          flex: 1; \n\n        "]);return q=function(){return a},a}var r=function(a){return(0,e.BX)("div",{children:[(0,e.tZ)("h4",{children:a.title}),(0,e.tZ)("div",{children:a.children})]})},s=function(a){return(0,e.BX)("section",{className:l().portfolio_cardSection,children:[(0,e.tZ)("h1",{className:l().underLine,children:a.projectName}),(0,e.tZ)("div",{className:l().underPhoto,children:a.images}),(0,e.BX)(r,{title:"진행 기간",children:[a.duration[0]," ~ ",a.duration[1]]}),(0,e.tZ)(r,{title:"사용 언어 및 기타사항",children:a.language}),(0,e.tZ)(r,{title:"세부 과정",children:(0,e.tZ)("div",{css:i(n()),children:(0,e.tZ)("ul",{css:i(o()),children:a.details.map(function(a,b){return(0,e.tZ)("li",{children:a},b)})})})}),(0,e.tZ)("h4",{children:a.links.map(function(a,b){return(0,e.tZ)(g(),{href:a.href,children:a.text},b)})})]})},t=function(){return(0,e.BX)(e.HY,{children:[(0,e.tZ)(j.Z,{}),(0,e.tZ)("div",{children:(0,e.BX)("main",{className:l().portfolio_main,children:[(0,e.tZ)("div",{className:l().portfolio_intro,children:(0,e.tZ)("h1",{css:i(p()),children:"Projects"})}),(0,e.tZ)(s,{projectName:"Nail Art 제작 플랫폼",duration:["2022.03","2022.06"],language:"ReactJs와 Flask 를 이용한 네일 아트 제작 플랫폼 서비스 사용자 UI 개발",images:[(0,e.tZ)(m.Z,{alt:"Nail Art Picture",src:"/images/portfolio_NailArt1.png"},0),(0,e.tZ)(m.Z,{alt:"Nail Art Picture",src:"/images/portfolio_NailArt2.jpg"},1),(0,e.tZ)(m.Z,{alt:"Nail Art Picture",src:"/images/portfolio_NailArt3.png"},2)],details:["사용자가 네일 하트 한 그림이나 작품을 도면화 하여","NFT, Zepeto , SnapShot 에 올릴 수 있도록 도면화 및 자동 올리기 서비스 제공","Teachable Machine 과 YOLO를 활용한 자동화 파일을 적용하여 Nail을 인식 및 추출하는","용도로 사용할 수 있도록 제작, 저장된 사진을 자동화 파일과 주고 받을 수 있게 하는","Flask 로 서버 구축 , 직접적으로 배포 하기 위한 Ngnix와 ngrok를 이용하여 연결 및 구현",],links:[{text:"Nail Art 제작 플랫폼 링크",href:"https://github.com/MyAndroidAppstudy/MyAndroidAppstudy.github.io"}]}),(0,e.tZ)(s,{projectName:"Barista Simulation",duration:["2021.10","2021.12"],language:"C# 기반 unity 와 Oculus 2 를 이용하여 구현",images:[(0,e.tZ)(m.Z,{alt:"Barista Simulation Picture",src:"/images/portfolio_baristaSimulation.png"},0),],details:["XR Tool Kit 를 이용하여 OVRPlayer 움직일수 있도록 설정.","HandController부분 Grab설정하여 집을 수 있도록 만듬.","Particle System을 통해 커피와 물이 나오도록 구현.","시뮬레이션 UI를 만들어 커피를 제공 하였을 시 클리어 문구와 함께 main Menu로 되돌아가게 구성.",],links:[{text:"## 바리스타 시뮬레이션 시연 영상 링크 ##",href:"https://youtu.be/uN2SQNCIDV4"}]}),(0,e.tZ)(s,{projectName:"실시간 채팅 앱",duration:["2021.05","2021.07"],language:"JAVA를 활용한 Android Studio 내 채팅 앱 개발",images:[(0,e.tZ)(m.Z,{alt:"Chatting App Picture 1",src:"/images/portfolio_LiveChattingApp1.png"},0),(0,e.tZ)(m.Z,{alt:"Chatting App Picture 2",src:"/images/portfolio_LiveChattingApp2.png"},1),],details:["로그인 화면 등 Android UI 부분들을 XML로 Layout, Fragment로 사용하여 구성.","FireBase auth를 통해 회원가입 및 로그인 구성 과정 구현.","채팅창의 실시간 로그를 기록 및 저장, 화면 나갔다 와도 유지될 수 있도록 구현.","추후 프로필 추가등 업데이트 및 수정 예정.",],links:[{text:"## 채팅앱 깃허브 링크 ##",href:"https://github.com/Last-SilverLight-End/android_page"}]}),(0,e.tZ)(s,{projectName:" Time Matters / 당신의 선택으로 인해 엔딩이 결정되는 게임 ",duration:["2020.12","2021.02"],language:(0,e.BX)(e.HY,{children:[(0,e.tZ)("p",{children:"Unity C#을 활용한 어플리케이션 앱 게임 개발"}),(0,e.tZ)("p",{children:"Google Docs로 토의 정리 및 진행방향 결정"})]}),images:[(0,e.tZ)(m.Z,{alt:"Chatting App Picture 2",src:"/images/portfolio_timeMatters1.png"},0),(0,e.tZ)(m.Z,{alt:"Chatting App Picture 2",src:"/images/portfolio_timeMatters2.png"},1),(0,e.tZ)(m.Z,{alt:"Chatting App Picture 2",src:"/images/portfolio_timeMatters3.png"},2),],details:["게임 전체 디자인 및 제작","FireBase auth를 통해 회원가입 및 로그인 구성 과정 구현.","로그라이크 특성을 잘 나타내어 구현","프로젝트 결과 , GitHub URL or 동영상",],links:[{text:"## Time Matters 깃허브 링크 ##",href:"https://github.com/riroan/Time-Matters-Game"}]}),(0,e.tZ)(s,{projectName:" Love of Language / 컴퓨터 지식이 필요한 미연시 게임 ",duration:["2020.07","2020.09"],language:"Android 환경에 대응하는 Renpy Tool 사용, Python을 사용하여 제작",images:[(0,e.tZ)(m.Z,{alt:"Chatting App Picture 2",src:"/images/portfolio_loveOfLanguage1.png"},0),(0,e.tZ)(m.Z,{alt:"Chatting App Picture 2",src:"/images/portfolio_loveOfLanguage2.png"},1),],details:["프로그래밍 문제 출제 및 컴퓨터 구조 공부","미연시 게임의 특성에 따라 스토리 제작.","Menu에 따른 선택지 코딩 및 mp3 파일을 가져와 music을 삽입."," Style 과 add를 이용해 메인화면 일부 수정.",],links:[{text:"## 언어의 사랑 깃허브 링크 ##",href:"https://github.com/SoleRowCoding/Love-of-Language"}]}),(0,e.BX)("div",{css:i(q()),children:[(0,e.tZ)("h2",{className:l().linkHighlight,children:" 더더욱 추가될 수 있으니 그때마다 업데이트 하겠습니다"}),(0,e.tZ)(g(),{href:"https://github.com/Last-SilverLight-End",children:"## 깃허브 홈페이지는 여기로 ##"})]})]})})]})}},8580:function(a){a.exports={header:"header_header__n6agz",current:"header_current__jhjKn","menu-button-container":"header_menu-button-container___5hPd",menu:"header_menu__cfTtF"}},6855:function(a){a.exports={header:"portfolio_header__OZa2A",underLine:"portfolio_underLine__D_JSM",portfolio_main:"portfolio_portfolio_main__q2OrY",underPhoto:"portfolio_underPhoto__IJdy6",portfolio_intro:"portfolio_portfolio_intro__xQpxl",portfolio_cardSection:"portfolio_portfolio_cardSection__vz45D"}}},function(a){a.O(0,[89,774,888,179],function(){var b;return a(a.s=5073)}),_N_E=a.O()}])