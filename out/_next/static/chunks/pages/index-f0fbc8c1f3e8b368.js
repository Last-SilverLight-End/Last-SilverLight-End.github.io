(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5075)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,u=n(7273).Z,a=r(n(7294)),l=n(6273),f=n(2725),c=n(3462),i=n(1018),s=n(7190),d=n(1210),p=n(8684),v="undefined"!==typeof a.default.useTransition,h={};function y(e,t,n,o){if(e&&l.isLocalURL(t)){e.prefetch(t,n,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;h[t+"%"+n+(r?"%"+r:"")]=!0}}var _=a.default.forwardRef((function(e,t){var n,r=e.href,_=e.as,b=e.children,x=e.prefetch,g=e.passHref,j=e.replace,C=e.soft,M=e.shallow,R=e.scroll,L=e.locale,m=e.onClick,E=e.onMouseEnter,O=e.onTouchStart,P=e.legacyBehavior,w=void 0===P?!0!==Boolean(!1):P,k=u(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,!w||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var T=!1!==x,I=o(v?a.default.useTransition():[],2)[1],S=a.default.useContext(c.RouterContext),N=a.default.useContext(i.AppRouterContext);N&&(S=N);var U,Z=a.default.useMemo((function(){var e=o(l.resolveHref(S,r,!0),2),t=e[0],n=e[1];return{href:t,as:_?l.resolveHref(S,_):n||t}}),[S,r,_]),A=Z.href,B=Z.as,D=a.default.useRef(A),H=a.default.useRef(B);w&&(U=a.default.Children.only(n));var K=w?U&&"object"===typeof U&&U.ref:t,G=o(s.useIntersection({rootMargin:"200px"}),3),X=G[0],q=G[1],z=G[2],F=a.default.useCallback((function(e){H.current===B&&D.current===A||(z(),H.current=B,D.current=A),X(e),K&&("function"===typeof K?K(e):"object"===typeof K&&(K.current=e))}),[B,K,A,z,X]);a.default.useEffect((function(){var e=q&&T&&l.isLocalURL(A),t="undefined"!==typeof L?L:S&&S.locale,n=h[A+"%"+B+(t?"%"+t:"")];e&&!n&&y(S,A,B,{locale:t})}),[B,A,q,L,T,S]);var J={ref:F,onClick:function(e){w||"function"!==typeof m||m(e),w&&U.props&&"function"===typeof U.props.onClick&&U.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,u,a,f,c,i){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var s=function(){"softPush"in t&&"softReplace"in t?t[u?r?"softReplace":"softPush":r?"replace":"push"](n):t[r?"replace":"push"](n,o,{shallow:a,locale:c,scroll:f})};i?i(s):s()}}(e,S,A,B,j,C,M,R,L,N?I:void 0)},onMouseEnter:function(e){w||"function"!==typeof E||E(e),w&&U.props&&"function"===typeof U.props.onMouseEnter&&U.props.onMouseEnter(e),l.isLocalURL(A)&&y(S,A,B,{priority:!0})},onTouchStart:function(e){w||"function"!==typeof O||O(e),w&&U.props&&"function"===typeof U.props.onTouchStart&&U.props.onTouchStart(e),l.isLocalURL(A)&&y(S,A,B,{priority:!0})}};if(!w||g||"a"===U.type&&!("href"in U.props)){var Q="undefined"!==typeof L?L:S&&S.locale,V=S&&S.isLocaleDomain&&d.getDomainLocale(B,Q,S.locales,S.domainLocales);J.href=V||p.addBasePath(f.addLocale(B,Q,S&&S.defaultLocale))}return w?a.default.cloneElement(U,J):a.default.createElement("a",Object.assign({},k,J),n)}));t.default=_,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,i=r.useRef(),s=o(r.useState(!1),2),d=s[0],p=s[1],v=o(r.useState(null),2),h=v[0],y=v[1];r.useEffect((function(){if(a){if(i.current&&(i.current(),i.current=void 0),c||d)return;return h&&h.tagName&&(i.current=function(e,t,n){var o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=f.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(o&&(t=l.get(o)))return t;var r=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:u,elements:r},f.push(n),l.set(n,t),t}(n),r=o.id,u=o.observer,a=o.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),l.delete(r);var t=f.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&f.splice(t,1)}}}(h,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==i.current||i.current(),i.current=void 0}}if(!d){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[h,c,n,t,d]);var _=r.useCallback((function(){p(!1)}),[]);return[y,d,_]};var r=n(7294),u=n(9311),a="function"===typeof IntersectionObserver;var l=new Map,f=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var o=(0,n(2648).Z)(n(7294)),r=o.default.createContext(null);t.AppRouterContext=r;var u=o.default.createContext(null);t.LayoutRouterContext=u;var a=o.default.createContext(null);t.GlobalLayoutRouterContext=a},5075:function(e,t,n){"use strict";n.r(t);var o=n(5893),r=n(1664),u=n.n(r),a=n(1163),l=function(){(0,a.useRouter)();return(0,o.jsx)(u(),{href:"/test",children:(0,o.jsx)("a",{children:"\ub20c\ub7ec \ub0b4 \uc790\uae30 \uc18c\uac1c\uc57c"})})},f=function(){(0,a.useRouter)();return(0,o.jsx)(u(),{href:"https://github.com/Last-SilverLight-End",children:(0,o.jsx)("a",{children:"\ub20c\ub7ec \ub0b4 \uae43\ud5c8\ube0c \ub9c1\ud06c\uc57c"})})};t.default=function(){return(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"\ud648\ud398\uc774\uc9c0\uc5d0 \uc624\uc2e0\uac78 \ud658\uc601\ud569\ub2c8\ub2e4!"}),(0,o.jsx)("h2",{children:"\uc790\uae30\uc18c\uac1c"}),(0,o.jsx)(l,{}),(0,o.jsx)("h1",{}),(0,o.jsx)(f,{})]})}},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);