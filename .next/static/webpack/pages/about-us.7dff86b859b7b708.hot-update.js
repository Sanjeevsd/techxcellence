"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about-us",{

/***/ "./pages/about-us.js":
/*!***************************!*\
  !*** ./pages/about-us.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layouts_NavbarTwo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layouts/NavbarTwo */ \"./components/Layouts/NavbarTwo.js\");\n/* harmony import */ var _components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Common/PageBanner */ \"./components/Common/PageBanner.js\");\n/* harmony import */ var _components_AboutUs_AboutContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AboutUs/AboutContent */ \"./components/AboutUs/AboutContent.js\");\n/* harmony import */ var _components_HomeTwo_FeaturesArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HomeTwo/FeaturesArea */ \"./components/HomeTwo/FeaturesArea.js\");\n/* harmony import */ var _components_Common_ServicesContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Common/ServicesContent */ \"./components/Common/ServicesContent.js\");\n/* harmony import */ var _components_PricingPlans_PricingContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PricingPlans/PricingContent */ \"./components/PricingPlans/PricingContent.js\");\n/* harmony import */ var _components_Projects_ProjectsStyleTwo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Projects/ProjectsStyleTwo */ \"./components/Projects/ProjectsStyleTwo.js\");\n/* harmony import */ var _components_Common_TeamCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Common/TeamCard */ \"./components/Common/TeamCard.js\");\n/* harmony import */ var _components_Common_SubscribeStyleTwo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Common/SubscribeStyleTwo */ \"./components/Common/SubscribeStyleTwo.js\");\n/* harmony import */ var _components_Common_PartnerLogos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Common/PartnerLogos */ \"./components/Common/PartnerLogos.js\");\n/* harmony import */ var _components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Layouts/Footer */ \"./components/Layouts/Footer.js\");\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar AboutUs = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(AboutUs, Component1);\n    var _super = _createSuper(AboutUs);\n    function AboutUs() {\n        _classCallCheck(this, AboutUs);\n        return _super.apply(this, arguments);\n    }\n    _createClass(AboutUs, [\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts_NavbarTwo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/sanzeev/Projects/techxcellence-web/pages/about-us.js\",\n                            lineNumber: 18,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            pageTitle: \"About Us\",\n                            breadcrumbTextOne: \"Home\",\n                            breadcrumbTextTwo: \"About Us\",\n                            breadcrumbUrl: \"/\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sanzeev/Projects/techxcellence-web/pages/about-us.js\",\n                            lineNumber: 20,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AboutUs_AboutContent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/sanzeev/Projects/techxcellence-web/pages/about-us.js\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HomeTwo_FeaturesArea__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/sanzeev/Projects/techxcellence-web/pages/about-us.js\",\n                            lineNumber: 29,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_TeamCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/sanzeev/Projects/techxcellence-web/pages/about-us.js\",\n                            lineNumber: 37,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_SubscribeStyleTwo__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/sanzeev/Projects/techxcellence-web/pages/about-us.js\",\n                            lineNumber: 39,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ptb-100\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_PartnerLogos__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/sanzeev/Projects/techxcellence-web/pages/about-us.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/sanzeev/Projects/techxcellence-web/pages/about-us.js\",\n                            lineNumber: 41,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/sanzeev/Projects/techxcellence-web/pages/about-us.js\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true);\n            }\n        }\n    ]);\n    return AboutUs;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutUs);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dC11cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ2U7QUFDQztBQUNLO0FBQ0E7QUFDSztBQUNJO0FBQ0E7QUFDbEI7QUFDa0I7QUFDVjtBQUNYO0FBRWxELFdBQWEsaUJBcUNWOzs7O2FBckNHYSxPQUFPOzs7Ozs7WUFDWEMsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUc7Z0JBQ1AscUJBQ0U7O3NDQUNFLDhEQUFDWixxRUFBUzs7OztnQ0FBRztzQ0FFYiw4REFBQ0MscUVBQVU7NEJBQ1RZLFNBQVMsRUFBQyxVQUFVOzRCQUNwQkMsaUJBQWlCLEVBQUMsTUFBTTs0QkFDeEJDLGlCQUFpQixFQUFDLFVBQVU7NEJBQzVCQyxhQUFhLEVBQUMsR0FBRzs7Ozs7Z0NBQ2pCO3NDQUVGLDhEQUFDZCx3RUFBWTs7OztnQ0FBRztzQ0FFaEIsOERBQUNDLHdFQUFZOzs7O2dDQUFHO3NDQVFoQiw4REFBQ0ksbUVBQVE7Ozs7Z0NBQUc7c0NBRVosOERBQUNDLDZFQUFpQjs7OztnQ0FBRztzQ0FFckIsOERBQUNTLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxTQUFTO3NDQUN0Qiw0RUFBQ1Qsd0VBQVk7Ozs7b0NBQUc7Ozs7O2dDQUNaO3NDQUVOLDhEQUFDQyxtRUFBTTs7OztnQ0FBRzs7Z0NBQ1QsQ0FDSDthQUNIOzs7O0NBQ0YsQ0FuQ3FCWCw0Q0FBUyxDQW1DOUI7QUFFRCwrREFBZVksT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Fib3V0LXVzLmpzPzlkODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdmJhclR3byBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRzL05hdmJhclR3b1wiO1xuaW1wb3J0IFBhZ2VCYW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbW9uL1BhZ2VCYW5uZXJcIjtcbmltcG9ydCBBYm91dENvbnRlbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWJvdXRVcy9BYm91dENvbnRlbnRcIjtcbmltcG9ydCBGZWF0dXJlc0FyZWEgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZVR3by9GZWF0dXJlc0FyZWFcIjtcbmltcG9ydCBTZXJ2aWNlc0NvbnRlbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbW9uL1NlcnZpY2VzQ29udGVudFwiO1xuaW1wb3J0IFByaWNpbmdDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL1ByaWNpbmdQbGFucy9QcmljaW5nQ29udGVudFwiO1xuaW1wb3J0IFByb2plY3RzU3R5bGVUd28gZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHNTdHlsZVR3b1wiO1xuaW1wb3J0IFRlYW1DYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1vbi9UZWFtQ2FyZFwiO1xuaW1wb3J0IFN1YnNjcmliZVN0eWxlVHdvIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1vbi9TdWJzY3JpYmVTdHlsZVR3b1wiO1xuaW1wb3J0IFBhcnRuZXJMb2dvcyBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21tb24vUGFydG5lckxvZ29zXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dHMvRm9vdGVyXCI7XG5cbmNsYXNzIEFib3V0VXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxOYXZiYXJUd28gLz5cblxuICAgICAgICA8UGFnZUJhbm5lclxuICAgICAgICAgIHBhZ2VUaXRsZT1cIkFib3V0IFVzXCJcbiAgICAgICAgICBicmVhZGNydW1iVGV4dE9uZT1cIkhvbWVcIlxuICAgICAgICAgIGJyZWFkY3J1bWJUZXh0VHdvPVwiQWJvdXQgVXNcIlxuICAgICAgICAgIGJyZWFkY3J1bWJVcmw9XCIvXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8QWJvdXRDb250ZW50IC8+XG5cbiAgICAgICAgPEZlYXR1cmVzQXJlYSAvPlxuXG4gICAgICAgIHsvKiA8U2VydmljZXNDb250ZW50IC8+ICovfVxuXG4gICAgICAgIHsvKiA8UHJpY2luZ0NvbnRlbnQgLz4gKi99XG5cbiAgICAgICAgey8qIDxQcm9qZWN0c1N0eWxlVHdvIC8+ICovfVxuXG4gICAgICAgIDxUZWFtQ2FyZCAvPlxuXG4gICAgICAgIDxTdWJzY3JpYmVTdHlsZVR3byAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHRiLTEwMFwiPlxuICAgICAgICAgIDxQYXJ0bmVyTG9nb3MgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dFVzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTmF2YmFyVHdvIiwiUGFnZUJhbm5lciIsIkFib3V0Q29udGVudCIsIkZlYXR1cmVzQXJlYSIsIlNlcnZpY2VzQ29udGVudCIsIlByaWNpbmdDb250ZW50IiwiUHJvamVjdHNTdHlsZVR3byIsIlRlYW1DYXJkIiwiU3Vic2NyaWJlU3R5bGVUd28iLCJQYXJ0bmVyTG9nb3MiLCJGb290ZXIiLCJBYm91dFVzIiwicmVuZGVyIiwicGFnZVRpdGxlIiwiYnJlYWRjcnVtYlRleHRPbmUiLCJicmVhZGNydW1iVGV4dFR3byIsImJyZWFkY3J1bWJVcmwiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/about-us.js\n");

/***/ })

});