"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/HomeOne/TestimonialSection.js":
/*!**************************************************!*\
  !*** ./components/HomeOne/TestimonialSection.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\nvar OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(__webpack_require__.e(/*! import() */ \"node_modules_react-owl-carousel3_lib_OwlCarousel_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-owl-carousel3 */ \"./node_modules/react-owl-carousel3/lib/OwlCarousel.js\", 23)), {\n    loadableGenerated: {\n        modules: [\n            \"../components/HomeOne/TestimonialSection.js -> \" + \"react-owl-carousel3\"\n        ]\n    }\n});\n_c = OwlCarousel;\nvar options = {\n    loop: true,\n    nav: false,\n    dots: true,\n    smartSpeed: 2000,\n    margin: 30,\n    autoplayHoverPause: true,\n    autoplay: true,\n    responsive: {\n        0: {\n            items: 1\n        },\n        576: {\n            items: 1\n        },\n        768: {\n            items: 2\n        },\n        1200: {\n            items: 2\n        }\n    }\n};\nvar TestimonialSection = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(TestimonialSection, Component1);\n    var _super = _createSuper(TestimonialSection);\n    function TestimonialSection() {\n        _classCallCheck(this, TestimonialSection);\n        var _this;\n        _this = _super.apply(this, arguments);\n        _defineProperty(_assertThisInitialized(_this), \"_isMounted\", false);\n        _defineProperty(_assertThisInitialized(_this), \"state\", {\n            display: false\n        });\n        return _this;\n    }\n    _createClass(TestimonialSection, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                this._isMounted = true;\n                this.setState({\n                    display: true\n                });\n            }\n        },\n        {\n            key: \"componentWillUnmount\",\n            value: function componentWillUnmount() {\n                this._isMounted = false;\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"testimonial-section ptb-100\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"row align-items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-lg-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"testimonial-content-area\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Testimonial\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/HomeOne/TestimonialSection.js\",\n                                                lineNumber: 49,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: \"What Our Client Say\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/HomeOne/TestimonialSection.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    \"Read what our clients have to say about the services we provide at\",\n                                                    \" \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"https://techxcellencenpl.com\",\n                                                        children: \"TechXcellence Nepal\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/HomeOne/TestimonialSection.js\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    \".\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/HomeOne/TestimonialSection.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/HomeOne/TestimonialSection.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/HomeOne/TestimonialSection.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-lg-8\",\n                                    children: this.state.display ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OwlCarousel, _objectSpread({\n                                        className: \"testimonial-slides owl-carousel owl-theme\"\n                                    }, options, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"testimonial-single-item\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"testimonial-image\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: \"/images/sneakersbysuyug.jpeg\",\n                                                        alt: \"image\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/HomeOne/TestimonialSection.js\",\n                                                        lineNumber: 68,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/HomeOne/TestimonialSection.js\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"testimonial-content-text\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                            children: \"Sneakers By Suyug\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/HomeOne/TestimonialSection.js\",\n                                                            lineNumber: 71,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            children: \"Arman Bhandari\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/HomeOne/TestimonialSection.js\",\n                                                            lineNumber: 72,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"icon\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                                className: \"flaticon-quote\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/HomeOne/TestimonialSection.js\",\n                                                                lineNumber: 74,\n                                                                columnNumber: 25\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/HomeOne/TestimonialSection.js\",\n                                                            lineNumber: 73,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            children: \"Excellent Service by TechXcellence to boos my shoes sales. I am very happy with the service and would recommend to everyone.\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/HomeOne/TestimonialSection.js\",\n                                                            lineNumber: 76,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/HomeOne/TestimonialSection.js\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/HomeOne/TestimonialSection.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 19\n                                        }, this)\n                                    }), void 0, false, {\n                                        fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/HomeOne/TestimonialSection.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, this) : \"\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/HomeOne/TestimonialSection.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/HomeOne/TestimonialSection.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/HomeOne/TestimonialSection.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sanzeev/Projects/techxcellence-web/components/HomeOne/TestimonialSection.js\",\n                    lineNumber: 44,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ]);\n    return TestimonialSection;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestimonialSection);\nvar _c;\n$RefreshReg$(_c, \"OwlCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWVPbmUvVGVzdGltb25pYWxTZWN0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ047QUFDbkMsSUFBTUcsV0FBVyxHQUFHRCxtREFBTyxDQUFDLDBPQUE2Qjs7Ozs7O0VBQUM7QUFBcERDLEtBQUFBLFdBQVc7QUFFakIsSUFBTUMsT0FBTyxHQUFHO0lBQ2RDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLEdBQUcsRUFBRSxLQUFLO0lBQ1ZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxNQUFNLEVBQUUsRUFBRTtJQUNWQyxrQkFBa0IsRUFBRSxJQUFJO0lBQ3hCQyxRQUFRLEVBQUUsSUFBSTtJQUNkQyxVQUFVLEVBQUU7QUFDVixTQUFDLEVBQUU7WUFDREMsS0FBSyxFQUFFLENBQUM7U0FDVDtBQUNELFdBQUcsRUFBRTtZQUNIQSxLQUFLLEVBQUUsQ0FBQztTQUNUO0FBQ0QsV0FBRyxFQUFFO1lBQ0hBLEtBQUssRUFBRSxDQUFDO1NBQ1Q7QUFDRCxZQUFJLEVBQUU7WUFDSkEsS0FBSyxFQUFFLENBQUM7U0FDVDtLQUNGO0NBQ0Y7QUFFRCxzQkFBd0IsaUJBb0ZyQjs7OzthQXBGR0Msa0JBQWtCOzs7O1FBQ3RCQywrQ0FBQUEsWUFBVSxFQUFHLEtBQUssQ0FBQztRQUNuQkMsK0NBQUFBLE9BQUssRUFBRztZQUNOQyxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7Ozs7O1lBQ0ZDLEdBQWlCLEVBQWpCQSxtQkFBaUI7bUJBQWpCQSxTQUFBQSxpQkFBaUIsR0FBRztnQkFDbEIsSUFBSSxDQUFDSCxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixJQUFJLENBQUNJLFFBQVEsQ0FBQztvQkFBRUYsT0FBTyxFQUFFLElBQUk7aUJBQUUsQ0FBQyxDQUFDO2FBQ2xDOzs7WUFDREcsR0FBb0IsRUFBcEJBLHNCQUFvQjttQkFBcEJBLFNBQUFBLG9CQUFvQixHQUFHO2dCQUNyQixJQUFJLENBQUNMLFVBQVUsR0FBRyxLQUFLLENBQUM7YUFDekI7OztZQUVETSxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRztnQkFDUCxxQkFDRSw4REFBQ0MsU0FBTztvQkFBQ0MsU0FBUyxFQUFDLDZCQUE2Qjs4QkFDOUMsNEVBQUNDLEtBQUc7d0JBQUNELFNBQVMsRUFBQyxXQUFXO2tDQUN4Qiw0RUFBQ0MsS0FBRzs0QkFBQ0QsU0FBUyxFQUFDLHdCQUF3Qjs7OENBQ3JDLDhEQUFDQyxLQUFHO29DQUFDRCxTQUFTLEVBQUMsVUFBVTs4Q0FDdkIsNEVBQUNDLEtBQUc7d0NBQUNELFNBQVMsRUFBQywwQkFBMEI7OzBEQUN2Qyw4REFBQ0UsTUFBSTswREFBQyxhQUFXOzs7OztvREFBTzswREFDeEIsOERBQUNDLElBQUU7MERBQUMscUJBQW1COzs7OztvREFBSzswREFDNUIsOERBQUNDLEdBQUM7O29EQUFDLG9FQUVTO29EQUFDLEdBQUc7a0VBQ2QsOERBQUNDLEdBQUM7d0RBQUNDLElBQUksRUFBQyw4QkFBOEI7a0VBQUMscUJBQW1COzs7Ozs0REFBSTtvREFBQSxHQUVoRTs7Ozs7O29EQUFJOzs7Ozs7NENBQ0E7Ozs7O3dDQUNGOzhDQUVOLDhEQUFDTCxLQUFHO29DQUFDRCxTQUFTLEVBQUMsVUFBVTs4Q0FDdEIsSUFBSSxDQUFDUCxLQUFLLENBQUNDLE9BQU8saUJBQ2pCLDhEQUFDZCxXQUFXO3dDQUNWb0IsU0FBUyxFQUFDLDJDQUEyQzt1Q0FDakRuQixPQUFPO2tEQUVYLDRFQUFDb0IsS0FBRzs0Q0FBQ0QsU0FBUyxFQUFDLHlCQUF5Qjs7OERBQ3RDLDhEQUFDQyxLQUFHO29EQUFDRCxTQUFTLEVBQUMsbUJBQW1COzhEQUNoQyw0RUFBQ08sS0FBRzt3REFBQ0MsR0FBRyxFQUFDLDhCQUE4Qjt3REFBQ0MsR0FBRyxFQUFDLE9BQU87Ozs7OzREQUFHOzs7Ozt3REFDbEQ7OERBQ04sOERBQUNSLEtBQUc7b0RBQUNELFNBQVMsRUFBQywwQkFBMEI7O3NFQUN2Qyw4REFBQ0csSUFBRTtzRUFBQyxtQkFBaUI7Ozs7O2dFQUFLO3NFQUMxQiw4REFBQ0QsTUFBSTtzRUFBQyxnQkFBYzs7Ozs7Z0VBQU87c0VBQzNCLDhEQUFDRCxLQUFHOzREQUFDRCxTQUFTLEVBQUMsTUFBTTtzRUFDbkIsNEVBQUNVLEdBQUM7Z0VBQUNWLFNBQVMsRUFBQyxnQkFBZ0I7Ozs7O29FQUFLOzs7OztnRUFDOUI7c0VBQ04sOERBQUNJLEdBQUM7c0VBQUMsOEhBSUg7Ozs7O2dFQUFJOzs7Ozs7d0RBQ0E7Ozs7OztnREFDRjs7Ozs7NENBbUJNLEdBRWQsRUFBRTs7Ozs7d0NBRUE7Ozs7OztnQ0FDRjs7Ozs7NEJBQ0Y7Ozs7O3dCQUNFLENBQ1Y7YUFDSDs7OztDQUNGLENBbEZnQzFCLDRDQUFTLENBa0Z6QztBQUVELCtEQUFlYSxrQkFBa0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hvbWVPbmUvVGVzdGltb25pYWxTZWN0aW9uLmpzP2QyNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuY29uc3QgT3dsQ2Fyb3VzZWwgPSBkeW5hbWljKGltcG9ydChcInJlYWN0LW93bC1jYXJvdXNlbDNcIikpO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICBsb29wOiB0cnVlLFxuICBuYXY6IGZhbHNlLFxuICBkb3RzOiB0cnVlLFxuICBzbWFydFNwZWVkOiAyMDAwLFxuICBtYXJnaW46IDMwLFxuICBhdXRvcGxheUhvdmVyUGF1c2U6IHRydWUsXG4gIGF1dG9wbGF5OiB0cnVlLFxuICByZXNwb25zaXZlOiB7XG4gICAgMDoge1xuICAgICAgaXRlbXM6IDEsXG4gICAgfSxcbiAgICA1NzY6IHtcbiAgICAgIGl0ZW1zOiAxLFxuICAgIH0sXG4gICAgNzY4OiB7XG4gICAgICBpdGVtczogMixcbiAgICB9LFxuICAgIDEyMDA6IHtcbiAgICAgIGl0ZW1zOiAyLFxuICAgIH0sXG4gIH0sXG59O1xuXG5jbGFzcyBUZXN0aW1vbmlhbFNlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBfaXNNb3VudGVkID0gZmFsc2U7XG4gIHN0YXRlID0ge1xuICAgIGRpc3BsYXk6IGZhbHNlLFxuICB9O1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5OiB0cnVlIH0pO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXN0aW1vbmlhbC1zZWN0aW9uIHB0Yi0xMDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0aW1vbmlhbC1jb250ZW50LWFyZWFcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5UZXN0aW1vbmlhbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDM+V2hhdCBPdXIgQ2xpZW50IFNheTwvaDM+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBSZWFkIHdoYXQgb3VyIGNsaWVudHMgaGF2ZSB0byBzYXkgYWJvdXQgdGhlIHNlcnZpY2VzIHdlXG4gICAgICAgICAgICAgICAgICBwcm92aWRlIGF0e1wiIFwifVxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdGVjaHhjZWxsZW5jZW5wbC5jb21cIj5UZWNoWGNlbGxlbmNlIE5lcGFsPC9hPlxuICAgICAgICAgICAgICAgICAgLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOFwiPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kaXNwbGF5ID8gKFxuICAgICAgICAgICAgICAgIDxPd2xDYXJvdXNlbFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGVzdGltb25pYWwtc2xpZGVzIG93bC1jYXJvdXNlbCBvd2wtdGhlbWVcIlxuICAgICAgICAgICAgICAgICAgey4uLm9wdGlvbnN9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0aW1vbmlhbC1zaW5nbGUtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3RpbW9uaWFsLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NuZWFrZXJzYnlzdXl1Zy5qcGVnXCIgYWx0PVwiaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0aW1vbmlhbC1jb250ZW50LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDM+U25lYWtlcnMgQnkgU3V5dWc8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFybWFuIEJoYW5kYXJpPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tcXVvdGVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBFeGNlbGxlbnQgU2VydmljZSBieSBUZWNoWGNlbGxlbmNlIHRvIGJvb3MgbXkgc2hvZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVzLiBJIGFtIHZlcnkgaGFwcHkgd2l0aCB0aGUgc2VydmljZSBhbmQgd291bGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29tbWVuZCB0byBldmVyeW9uZS5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInRlc3RpbW9uaWFsLXNpbmdsZS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdGltb25pYWwtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY2xpZW50LWltYWdlLzIuanBnXCIgYWx0PVwiaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0aW1vbmlhbC1jb250ZW50LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDM+RWR3YXJkIEJvbGQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkNFTyAmIEZvdW5kZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1xdW90ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWduYSBhbGlxdWEuIFF1aXMgaXBzdW0gc3VzcGVuZGlzc2UgZ3JhdmlkYS5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDwvT3dsQ2Fyb3VzZWw+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdGltb25pYWxTZWN0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZHluYW1pYyIsIk93bENhcm91c2VsIiwib3B0aW9ucyIsImxvb3AiLCJuYXYiLCJkb3RzIiwic21hcnRTcGVlZCIsIm1hcmdpbiIsImF1dG9wbGF5SG92ZXJQYXVzZSIsImF1dG9wbGF5IiwicmVzcG9uc2l2ZSIsIml0ZW1zIiwiVGVzdGltb25pYWxTZWN0aW9uIiwiX2lzTW91bnRlZCIsInN0YXRlIiwiZGlzcGxheSIsImNvbXBvbmVudERpZE1vdW50Iiwic2V0U3RhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJzcGFuIiwiaDMiLCJwIiwiYSIsImhyZWYiLCJpbWciLCJzcmMiLCJhbHQiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/HomeOne/TestimonialSection.js\n");

/***/ })

});