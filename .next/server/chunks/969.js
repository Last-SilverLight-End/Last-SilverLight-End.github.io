exports.id = 969;
exports.ids = [969];
exports.modules = {

/***/ 654:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__n6agz",
	"current": "header_current__jhjKn",
	"menu-button-container": "header_menu-button-container___5hPd",
	"menu": "header_menu__cfTtF"
};


/***/ }),

/***/ 8969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(654);
/* harmony import */ var _styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);




/*FC -> functional component */ const Header = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: router.asPath === "/" ? (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().current) : undefined,
                        children: "메인"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/introduce",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: router.asPath === "/introduce" ? (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().current) : undefined,
                        children: "자기소개"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/portfolio",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: router.asPath === "/portfolio" ? (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().current) : undefined,
                        children: "포트폴리오"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/privateChat",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: router.asPath === "/privateChat" ? (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().current) : undefined,
                        children: "개인 잡담"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/jjoripingBabo",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: router.asPath === "/jjoripingBabo" ? (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().current) : undefined,
                        children: "쪼리핑 바보"
                    })
                })
            ]
        })
    });
};
/* list로 나타낼때는 이런 식으로 함

const headerLinks = [
  { label: "자기소개", href: "/introduce" },
  { label: "포트폴리오", href: "/portfolio" },
  { label: "개인 잡담", href: "/privateChat" },
  { label: "쪼리핑 바보", href: "/jjoripingBabo" }
];

        {headerLinks.map(({ label, href }) => (
          <Link href={href}>
            <a>
              {label}
            </a>
          </Link>
          <link
          >
        ))}
*/ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ })

};
;