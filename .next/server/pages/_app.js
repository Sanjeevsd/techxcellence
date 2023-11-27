/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsdUdBQTZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVjaHhjZWxsZW5jZS8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcz82NmVjIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./components/Layouts/GoTop.js":
/*!*************************************!*\
  !*** ./components/Layouts/GoTop.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GoTop)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass GoTop extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            is_visible: false\n        };\n    }\n    componentDidMount() {\n        var scrollComponent = this;\n        document.addEventListener(\"scroll\", function(e) {\n            scrollComponent.toggleVisibility();\n        });\n    }\n    toggleVisibility() {\n        if (window.pageYOffset > 300) {\n            this.setState({\n                is_visible: true\n            });\n        } else {\n            this.setState({\n                is_visible: false\n            });\n        }\n    }\n    scrollToTop() {\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    }\n    render() {\n        const { is_visible  } = this.state;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"back-to-top\",\n            children: is_visible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"top\",\n                onClick: ()=>this.scrollToTop()\n                ,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"fas fa-chevron-up\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/Layouts/GoTop.js\",\n                        lineNumber: 43,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"fas fa-chevron-up\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/Layouts/GoTop.js\",\n                        lineNumber: 44,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/Layouts/GoTop.js\",\n                lineNumber: 42,\n                columnNumber: 21\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/Layouts/GoTop.js\",\n            lineNumber: 40,\n            columnNumber: 13\n        }, this);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dHMvR29Ub3AuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUF5QztBQUUxQixNQUFNRSxLQUFLLFNBQVNELDRDQUFTO0lBQ3hDRSxZQUFZQyxLQUFLLENBQUU7UUFDZixLQUFLLENBQUNBLEtBQUssQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDQyxLQUFLLEdBQUc7WUFDVEMsVUFBVSxFQUFFLEtBQUs7U0FDcEIsQ0FBQztLQUNMO0lBRURDLGlCQUFpQixHQUFHO1FBQ2hCLElBQUlDLGVBQWUsR0FBRyxJQUFJO1FBQzFCQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxTQUFTQyxDQUFDLEVBQUU7WUFDNUNILGVBQWUsQ0FBQ0ksZ0JBQWdCLEVBQUUsQ0FBQztTQUN0QyxDQUFDLENBQUM7S0FDTjtJQUVEQSxnQkFBZ0IsR0FBRztRQUNmLElBQUlDLE1BQU0sQ0FBQ0MsV0FBVyxHQUFHLEdBQUcsRUFBRTtZQUMxQixJQUFJLENBQUNDLFFBQVEsQ0FBQztnQkFDVlQsVUFBVSxFQUFFLElBQUk7YUFDbkIsQ0FBQyxDQUFDO1NBQ04sTUFBTTtZQUNILElBQUksQ0FBQ1MsUUFBUSxDQUFDO2dCQUNWVCxVQUFVLEVBQUUsS0FBSzthQUNwQixDQUFDLENBQUM7U0FDTjtLQUNKO0lBRURVLFdBQVcsR0FBRztRQUNWSCxNQUFNLENBQUNJLFFBQVEsQ0FBQztZQUNaQyxHQUFHLEVBQUUsQ0FBQztZQUNOQyxRQUFRLEVBQUUsUUFBUTtTQUNyQixDQUFDLENBQUM7S0FDTjtJQUVEQyxNQUFNLEdBQUc7UUFDTCxNQUFNLEVBQUVkLFVBQVUsR0FBRSxHQUFHLElBQUksQ0FBQ0QsS0FBSztRQUNqQyxxQkFDSSw4REFBQ2dCLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLGFBQWE7c0JBQ3ZCaEIsVUFBVSxrQkFDUCw4REFBQ2UsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLEtBQUs7Z0JBQUNDLE9BQU8sRUFBRSxJQUFNLElBQUksQ0FBQ1AsV0FBVyxFQUFFO2dCQUFBOztrQ0FDbEQsOERBQUNRLEdBQUM7d0JBQUNGLFNBQVMsRUFBQyxtQkFBbUI7Ozs7OzRCQUFLO2tDQUNyQyw4REFBQ0UsR0FBQzt3QkFBQ0YsU0FBUyxFQUFDLG1CQUFtQjs7Ozs7NEJBQUs7Ozs7OztvQkFDbkM7Ozs7O2dCQUVSLENBQ1I7S0FDTDtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVjaHhjZWxsZW5jZS8uL2NvbXBvbmVudHMvTGF5b3V0cy9Hb1RvcC5qcz82YTVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29Ub3AgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzX3Zpc2libGU6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHZhciBzY3JvbGxDb21wb25lbnQgPSB0aGlzO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHNjcm9sbENvbXBvbmVudC50b2dnbGVWaXNpYmlsaXR5KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZVZpc2liaWxpdHkoKSB7XG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAzMDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGlzX3Zpc2libGU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNfdmlzaWJsZTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2Nyb2xsVG9Ub3AoKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaXNfdmlzaWJsZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFjay10by10b3BcIj5cbiAgICAgICAgICAgICAgICB7aXNfdmlzaWJsZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wXCIgb25DbGljaz17KCkgPT4gdGhpcy5zY3JvbGxUb1RvcCgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLXVwXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tdXBcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiR29Ub3AiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJpc192aXNpYmxlIiwiY29tcG9uZW50RGlkTW91bnQiLCJzY3JvbGxDb21wb25lbnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidG9nZ2xlVmlzaWJpbGl0eSIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwic2V0U3RhdGUiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layouts/GoTop.js\n");

/***/ }),

/***/ "./components/Layouts/Loader.js":
/*!**************************************!*\
  !*** ./components/Layouts/Loader.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass Loader extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: `preloader ${this.props.loading ? \"\" : \"preloader-deactivate\"}`,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"loader\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"shadow\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/Layouts/Loader.js\",\n                        lineNumber: 8,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"box\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/Layouts/Loader.js\",\n                        lineNumber: 9,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/Layouts/Loader.js\",\n                lineNumber: 7,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/Layouts/Loader.js\",\n            lineNumber: 6,\n            columnNumber: 13\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dHMvTG9hZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBeUM7QUFFekMsTUFBTUUsTUFBTSxTQUFTRCw0Q0FBUztJQUMxQkUsTUFBTSxHQUFHO1FBQ0wscUJBQ0ksOERBQUNDLEtBQUc7WUFBQ0MsU0FBUyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLEdBQUcsRUFBRSxHQUFHLHNCQUFzQixDQUFDLENBQUM7c0JBQzNFLDRFQUFDSCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsUUFBUTs7a0NBQ25CLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsUUFBUTs7Ozs7NEJBQU87a0NBQzlCLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsS0FBSzs7Ozs7NEJBQU87Ozs7OztvQkFDekI7Ozs7O2dCQUNKLENBQ1I7S0FDTDtDQUNKO0FBRUQsaUVBQWVILE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlY2h4Y2VsbGVuY2UvLi9jb21wb25lbnRzL0xheW91dHMvTG9hZGVyLmpzPzcyNjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHByZWxvYWRlciAke3RoaXMucHJvcHMubG9hZGluZyA/ICcnIDogJ3ByZWxvYWRlci1kZWFjdGl2YXRlJ31gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvd1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTG9hZGVyIiwicmVuZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwicHJvcHMiLCJsb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layouts/Loader.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"AppInitialProps\", ({\n    enumerable: true,\n    get: function() {\n        return _utils.AppInitialProps;\n    }\n}));\nObject.defineProperty(exports, \"NextWebVitalsMetric\", ({\n    enumerable: true,\n    get: function() {\n        return _utils.NextWebVitalsMetric;\n    }\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _utils = __webpack_require__(/*! ../shared/lib/utils */ \"../shared/lib/utils\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nfunction appGetInitialProps(_) {\n    return _appGetInitialProps.apply(this, arguments);\n}\nfunction _appGetInitialProps() {\n    _appGetInitialProps = /**\n * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n * This allows for keeping state between navigation, custom error handling, injecting additional data.\n */ _asyncToGenerator(function*({ Component , ctx  }) {\n        const pageProps = yield (0, _utils).loadGetInitialProps(Component, ctx);\n        return {\n            pageProps\n        };\n    });\n    return _appGetInitialProps.apply(this, arguments);\n}\nclass App extends _react.default.Component {\n    render() {\n        const { Component , pageProps  } = this.props;\n        return /*#__PURE__*/ _react.default.createElement(Component, Object.assign({}, pageProps));\n    }\n}\nexports[\"default\"] = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps; //# sourceMappingURL=_app.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQ3pDRyxLQUFLLEVBQUUsSUFBSTtDQUNkLEVBQUMsQ0FBQztBQUNISCxtREFBa0Q7SUFDOUNJLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxHQUFHLEVBQUUsV0FBVztRQUNaLE9BQU9DLE1BQU0sQ0FBQ0MsZUFBZSxDQUFDO0tBQ2pDO0NBQ0osRUFBQyxDQUFDO0FBQ0hQLHVEQUFzRDtJQUNsREksVUFBVSxFQUFFLElBQUk7SUFDaEJDLEdBQUcsRUFBRSxXQUFXO1FBQ1osT0FBT0MsTUFBTSxDQUFDRSxtQkFBbUIsQ0FBQztLQUNyQztDQUNKLEVBQUMsQ0FBQztBQUNITixrQkFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLElBQUlRLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQU8sQ0FBQyxDQUFDO0FBQ3JELElBQUlOLE1BQU0sR0FBR00sbUJBQU8sQ0FBQyxnREFBcUIsQ0FBQztBQUMzQyxTQUFTQyxrQkFBa0IsQ0FBQ0MsR0FBRyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3ZFLElBQUk7UUFDQSxJQUFJQyxJQUFJLEdBQUdQLEdBQUcsQ0FBQ0ssR0FBRyxDQUFDLENBQUNDLEdBQUcsQ0FBQztRQUN4QixJQUFJakIsS0FBSyxHQUFHa0IsSUFBSSxDQUFDbEIsS0FBSztLQUN6QixDQUFDLE9BQU9tQixLQUFLLEVBQUU7UUFDWk4sTUFBTSxDQUFDTSxLQUFLLENBQUMsQ0FBQztRQUNkLE9BQU87S0FDVjtJQUNELElBQUlELElBQUksQ0FBQ0UsSUFBSSxFQUFFO1FBQ1hSLE9BQU8sQ0FBQ1osS0FBSyxDQUFDLENBQUM7S0FDbEIsTUFBTTtRQUNIcUIsT0FBTyxDQUFDVCxPQUFPLENBQUNaLEtBQUssQ0FBQyxDQUFDc0IsSUFBSSxDQUFDUixLQUFLLEVBQUVDLE1BQU0sQ0FBQyxDQUFDO0tBQzlDO0NBQ0o7QUFDRCxTQUFTUSxpQkFBaUIsQ0FBQ0MsRUFBRSxFQUFFO0lBQzNCLE9BQU8sV0FBVztRQUNkLElBQUlDLElBQUksR0FBRyxJQUFJLEVBQUVDLElBQUksR0FBR0MsU0FBUztRQUNqQyxPQUFPLElBQUlOLE9BQU8sQ0FBQyxTQUFTVCxPQUFPLEVBQUVDLE1BQU0sRUFBRTtZQUN6QyxJQUFJRixHQUFHLEdBQUdhLEVBQUUsQ0FBQ0ksS0FBSyxDQUFDSCxJQUFJLEVBQUVDLElBQUksQ0FBQztZQUM5QixTQUFTWixLQUFLLENBQUNkLEtBQUssRUFBRTtnQkFDbEJVLGtCQUFrQixDQUFDQyxHQUFHLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRSxNQUFNLEVBQUVmLEtBQUssQ0FBQyxDQUFDO2FBQzFFO1lBQ0QsU0FBU2UsTUFBTSxDQUFDYyxHQUFHLEVBQUU7Z0JBQ2pCbkIsa0JBQWtCLENBQUNDLEdBQUcsRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFLE9BQU8sRUFBRWMsR0FBRyxDQUFDLENBQUM7YUFDekU7WUFDRGYsS0FBSyxDQUFDZ0IsU0FBUyxDQUFDLENBQUM7U0FDcEIsQ0FBQyxDQUFDO0tBQ04sQ0FBQztDQUNMO0FBQ0QsU0FBU3RCLHNCQUFzQixDQUFDdUIsR0FBRyxFQUFFO0lBQ2pDLE9BQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFVLEdBQUdELEdBQUcsR0FBRztRQUNqQ3pCLE9BQU8sRUFBRXlCLEdBQUc7S0FDZixDQUFDO0NBQ0w7QUFDRCxTQUFTRSxrQkFBa0IsQ0FBQ0MsQ0FBQyxFQUFFO0lBQzNCLE9BQU9DLG1CQUFtQixDQUFDUCxLQUFLLENBQUMsSUFBSSxFQUFFRCxTQUFTLENBQUMsQ0FBQztDQUNyRDtBQUNELFNBQVNRLG1CQUFtQixHQUFHO0lBQzNCQSxtQkFBbUIsR0FBRzs7O0dBR3ZCLENBQUNaLGlCQUFpQixDQUFDLFVBQVUsRUFBRWEsU0FBUyxHQUFHQyxHQUFHLEdBQUcsRUFBRTtRQUM5QyxNQUFNQyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRW5DLE1BQU0sQ0FBQyxDQUFDb0MsbUJBQW1CLENBQUNILFNBQVMsRUFBRUMsR0FBRyxDQUFDO1FBQ3ZFLE9BQU87WUFDSEMsU0FBUztTQUNaLENBQUM7S0FDTCxDQUFDLENBQUM7SUFDSCxPQUFPSCxtQkFBbUIsQ0FBQ1AsS0FBSyxDQUFDLElBQUksRUFBRUQsU0FBUyxDQUFDLENBQUM7Q0FDckQ7QUFDRCxNQUFNYSxHQUFHLFNBQVNqQyxNQUFNLENBQUNELE9BQU8sQ0FBQzhCLFNBQVM7SUFDdENLLE1BQU0sR0FBRztRQUNMLE1BQU0sRUFBRUwsU0FBUyxHQUFHRSxTQUFTLEdBQUcsR0FBRyxJQUFJLENBQUNJLEtBQUs7UUFDN0MsT0FBTyxhQUFhLENBQUNuQyxNQUFNLENBQUNELE9BQU8sQ0FBQ3FDLGFBQWEsQ0FBQ1AsU0FBUyxFQUFFdkMsTUFBTSxDQUFDK0MsTUFBTSxDQUFDLEVBQUUsRUFBRU4sU0FBUyxDQUFDLENBQUMsQ0FBRTtLQUMvRjtDQUNKO0FBQ0R2QyxrQkFBZSxHQUFHeUMsR0FBRyxDQUFDO0FBQ3RCQSxHQUFHLENBQUNLLG1CQUFtQixHQUFHWixrQkFBa0IsQ0FBQztBQUM3Q08sR0FBRyxDQUFDTSxlQUFlLEdBQUdiLGtCQUFrQixDQUFDLENBRXpDLGdDQUFnQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlY2h4Y2VsbGVuY2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanM/OTYxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFwcEluaXRpYWxQcm9wc1wiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3V0aWxzLkFwcEluaXRpYWxQcm9wcztcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk5leHRXZWJWaXRhbHNNZXRyaWNcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF91dGlscy5OZXh0V2ViVml0YWxzTWV0cmljO1xuICAgIH1cbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi91dGlsc1wiKTtcbmZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgICB9XG59XG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoXykge1xuICAgIHJldHVybiBfYXBwR2V0SW5pdGlhbFByb3BzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5mdW5jdGlvbiBfYXBwR2V0SW5pdGlhbFByb3BzKCkge1xuICAgIF9hcHBHZXRJbml0aWFsUHJvcHMgPSAvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovIF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKih7IENvbXBvbmVudCAsIGN0eCAgfSkge1xuICAgICAgICBjb25zdCBwYWdlUHJvcHMgPSB5aWVsZCAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhZ2VQcm9wc1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBfYXBwR2V0SW5pdGlhbFByb3BzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQgLCBwYWdlUHJvcHMgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7fSwgcGFnZVByb3BzKSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEFwcDtcbkFwcC5vcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzO1xuQXBwLmdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wcztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2FwcC5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiX3V0aWxzIiwiQXBwSW5pdGlhbFByb3BzIiwiTmV4dFdlYlZpdGFsc01ldHJpYyIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlc29sdmUiLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImFyZyIsImluZm8iLCJlcnJvciIsImRvbmUiLCJQcm9taXNlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwib2JqIiwiX19lc01vZHVsZSIsImFwcEdldEluaXRpYWxQcm9wcyIsIl8iLCJfYXBwR2V0SW5pdGlhbFByb3BzIiwiQ29tcG9uZW50IiwiY3R4IiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIkFwcCIsInJlbmRlciIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsImFzc2lnbiIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/bootstrap.min.css */ \"./styles/bootstrap.min.css\");\n/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/fontawesome.min.css */ \"./styles/fontawesome.min.css\");\n/* harmony import */ var _styles_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_flaticon_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/flaticon.css */ \"./styles/flaticon.css\");\n/* harmony import */ var _styles_flaticon_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_flaticon_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! animate.css */ \"./node_modules/animate.css/animate.css\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../node_modules/react-modal-video/css/modal-video.min.css */ \"./node_modules/react-modal-video/css/modal-video.min.css\");\n/* harmony import */ var _node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ \"./node_modules/react-accessible-accordion/dist/fancy-example.css\");\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/style.scss */ \"./styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_responsive_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/responsive.scss */ \"./styles/responsive.scss\");\n/* harmony import */ var _styles_responsive_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_responsive_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_Layouts_Loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layouts/Loader */ \"./components/Layouts/Loader.js\");\n/* harmony import */ var _components_Layouts_GoTop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Layouts/GoTop */ \"./components/Layouts/GoTop.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass MyApp extends (next_app__WEBPACK_IMPORTED_MODULE_9___default()) {\n    // Preloader\n    state = {\n        loading: true\n    };\n    componentDidMount() {\n        this.timerHandle = setTimeout(()=>this.setState({\n                loading: false\n            })\n        , 2000);\n    }\n    componentWillUnmount() {\n        if (this.timerHandle) {\n            clearTimeout(this.timerHandle);\n            this.timerHandle = 0;\n        }\n    }\n    render() {\n        const { Component , pageProps  } = this.props;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_10___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"viewport\",\n                            content: \"width=device-width, initial-scale=1\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sanzeev/Projects/techxcellence-web/pages/_app.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"TechXcellence - Digital marketing agency in nepal\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sanzeev/Projects/techxcellence-web/pages/_app.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"Achieve your business goals with our expert digital marketing services by increasing brand visibility, website traffic, and generating valuable leads.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sanzeev/Projects/techxcellence-web/pages/_app.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sanzeev/Projects/techxcellence-web/pages/_app.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/sanzeev/Projects/techxcellence-web/pages/_app.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts_Loader__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    loading: this.state.loading\n                }, void 0, false, {\n                    fileName: \"/Users/sanzeev/Projects/techxcellence-web/pages/_app.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts_GoTop__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                    scrollStepInPx: \"100\",\n                    delayInMs: \"15.50\"\n                }, void 0, false, {\n                    fileName: \"/Users/sanzeev/Projects/techxcellence-web/pages/_app.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFxQztBQUNFO0FBQ1A7QUFDWDtBQUM4QztBQUNSO0FBQzdCO0FBQ0s7QUFFUjtBQUNFO0FBQ3FCO0FBQ0Y7QUFFakMsTUFBTUksS0FBSyxTQUFTSixpREFBRztJQUNwQyxZQUFZO0lBQ1pLLEtBQUssR0FBRztRQUNOQyxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUM7SUFDRkMsaUJBQWlCLEdBQUc7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdDLFVBQVUsQ0FDM0IsSUFBTSxJQUFJLENBQUNDLFFBQVEsQ0FBQztnQkFBRUosT0FBTyxFQUFFLEtBQUs7YUFBRSxDQUFDO1FBQUEsRUFDdkMsSUFBSSxDQUNMLENBQUM7S0FDSDtJQUNESyxvQkFBb0IsR0FBRztRQUNyQixJQUFJLElBQUksQ0FBQ0gsV0FBVyxFQUFFO1lBQ3BCSSxZQUFZLENBQUMsSUFBSSxDQUFDSixXQUFXLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUNBLFdBQVcsR0FBRyxDQUFDLENBQUM7U0FDdEI7S0FDRjtJQUVESyxNQUFNLEdBQUc7UUFDUCxNQUFNLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEdBQUcsSUFBSSxDQUFDQyxLQUFLO1FBRTNDLHFCQUNFOzs4QkFDRSw4REFBQ2YsbURBQUk7O3NDQUNILDhEQUFDZ0IsTUFBSTs0QkFBQ0MsSUFBSSxFQUFDLFVBQVU7NEJBQUNDLE9BQU8sRUFBQyxxQ0FBcUM7Ozs7O2dDQUFHO3NDQUV0RSw4REFBQ0MsT0FBSztzQ0FBQyxtREFBaUQ7Ozs7O2dDQUFRO3NDQUNoRSw4REFBQ0gsTUFBSTs0QkFDSEMsSUFBSSxFQUFDLGFBQWE7NEJBQ2xCQyxPQUFPLEVBQUMsd0pBQXdKOzs7OztnQ0FDaEs7Ozs7Ozt3QkFDRzs4QkFFUCw4REFBQ0wsU0FBUztvQkFBRSxHQUFHQyxTQUFTOzs7Ozt3QkFBSTs4QkFHNUIsOERBQUNiLG1FQUFNO29CQUFDSSxPQUFPLEVBQUUsSUFBSSxDQUFDRCxLQUFLLENBQUNDLE9BQU87Ozs7O3dCQUFJOzhCQUd2Qyw4REFBQ0gsa0VBQUs7b0JBQUNrQixjQUFjLEVBQUMsS0FBSztvQkFBQ0MsU0FBUyxFQUFDLE9BQU87Ozs7O3dCQUFHOzt3QkFDL0MsQ0FDSDtLQUNIO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZWNoeGNlbGxlbmNlLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2ZvbnRhd2Vzb21lLm1pbi5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9mbGF0aWNvbi5jc3NcIjtcbmltcG9ydCBcImFuaW1hdGUuY3NzXCI7XG5pbXBvcnQgXCIuLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwtdmlkZW8vY3NzL21vZGFsLXZpZGVvLm1pbi5jc3NcIjtcbmltcG9ydCBcInJlYWN0LWFjY2Vzc2libGUtYWNjb3JkaW9uL2Rpc3QvZmFuY3ktZXhhbXBsZS5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvcmVzcG9uc2l2ZS5zY3NzXCI7XG5cbmltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dHMvTG9hZGVyXCI7XG5pbXBvcnQgR29Ub3AgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0cy9Hb1RvcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gIC8vIFByZWxvYWRlclxuICBzdGF0ZSA9IHtcbiAgICBsb2FkaW5nOiB0cnVlLFxuICB9O1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnRpbWVySGFuZGxlID0gc2V0VGltZW91dChcbiAgICAgICgpID0+IHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KSxcbiAgICAgIDIwMDBcbiAgICApO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnRpbWVySGFuZGxlKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lckhhbmRsZSk7XG4gICAgICB0aGlzLnRpbWVySGFuZGxlID0gMDtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuXG4gICAgICAgICAgPHRpdGxlPlRlY2hYY2VsbGVuY2UgLSBEaWdpdGFsIG1hcmtldGluZyBhZ2VuY3kgaW4gbmVwYWw8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgY29udGVudD1cIkFjaGlldmUgeW91ciBidXNpbmVzcyBnb2FscyB3aXRoIG91ciBleHBlcnQgZGlnaXRhbCBtYXJrZXRpbmcgc2VydmljZXMgYnkgaW5jcmVhc2luZyBicmFuZCB2aXNpYmlsaXR5LCB3ZWJzaXRlIHRyYWZmaWMsIGFuZCBnZW5lcmF0aW5nIHZhbHVhYmxlIGxlYWRzLlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblxuICAgICAgICB7LyogUHJlbG9hZGVyICovfVxuICAgICAgICA8TG9hZGVyIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gLz5cblxuICAgICAgICB7LyogR28gVG9wIEJ1dHRvbiAqL31cbiAgICAgICAgPEdvVG9wIHNjcm9sbFN0ZXBJblB4PVwiMTAwXCIgZGVsYXlJbk1zPVwiMTUuNTBcIiAvPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkFwcCIsIkhlYWQiLCJMb2FkZXIiLCJHb1RvcCIsIk15QXBwIiwic3RhdGUiLCJsb2FkaW5nIiwiY29tcG9uZW50RGlkTW91bnQiLCJ0aW1lckhhbmRsZSIsInNldFRpbWVvdXQiLCJzZXRTdGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2xlYXJUaW1lb3V0IiwicmVuZGVyIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicHJvcHMiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJ0aXRsZSIsInNjcm9sbFN0ZXBJblB4IiwiZGVsYXlJbk1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-accessible-accordion/dist/fancy-example.css":
/*!************************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/fancy-example.css ***!
  \************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-modal-video/css/modal-video.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-modal-video/css/modal-video.min.css ***!
  \****************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/bootstrap.min.css":
/*!**********************************!*\
  !*** ./styles/bootstrap.min.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/flaticon.css":
/*!*****************************!*\
  !*** ./styles/flaticon.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/fontawesome.min.css":
/*!************************************!*\
  !*** ./styles/fontawesome.min.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/responsive.scss":
/*!********************************!*\
  !*** ./styles/responsive.scss ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();