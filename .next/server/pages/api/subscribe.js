"use strict";
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
exports.id = "pages/api/subscribe";
exports.ids = ["pages/api/subscribe"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "nodemailer-sendgrid-transport":
/*!************************************************!*\
  !*** external "nodemailer-sendgrid-transport" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("nodemailer-sendgrid-transport");

/***/ }),

/***/ "(api)/./pages/api/subscribe.js":
/*!********************************!*\
  !*** ./pages/api/subscribe.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nodemailer_sendgrid_transport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nodemailer-sendgrid-transport */ \"nodemailer-sendgrid-transport\");\n/* harmony import */ var nodemailer_sendgrid_transport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nodemailer_sendgrid_transport__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// const transporter = {\n//     auth: {\n//         // Update your SendGrid API key here\n//         api_key: '...'\n//     }\n// }\nlet transporter = {\n    host: \"mail.zameenterminal.com\",\n    port: 465,\n    secure: true,\n    auth: {\n        user: \"support@techxcellencenpl.com\",\n        pass: \"K8nb6+j753\"\n    }\n};\nconst mailer = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport(transporter);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { email  } = req.body;\n    const data = {\n        // Update your email here\n        to: [\n            \"support@techxcellencenpl.com\",\n            \"ankit@techxcellencenpl.com\",\n            \"nikesh@techxcellencenpl.com\", \n        ],\n        from: \"support@techxcellencenpl.com\",\n        subject: `Subscribed:${email}`,\n        text: \"From:\" + email,\n        html: `\n            <b>From:</b> ${email} <br /> \n           \n        `\n    };\n    try {\n        const response = await mailer.sendMail(data);\n        console.log(response);\n        res.status(200).send(\"Email send successfully\");\n    } catch (error) {\n        console.log(error);\n        res.status(500).send(\"Error proccessing charge\");\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3Vic2NyaWJlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9DO0FBQ29CO0FBRXhELHdCQUF3QjtBQUN4QixjQUFjO0FBQ2QsK0NBQStDO0FBQy9DLHlCQUF5QjtBQUN6QixRQUFRO0FBQ1IsSUFBSTtBQUNKLElBQUlFLFdBQVcsR0FBRztJQUNoQkMsSUFBSSxFQUFFLHlCQUF5QjtJQUMvQkMsSUFBSSxFQUFFLEdBQUc7SUFDVEMsTUFBTSxFQUFFLElBQUk7SUFDWkMsSUFBSSxFQUFFO1FBQ0pDLElBQUksRUFBRSw4QkFBOEI7UUFDcENDLElBQUksRUFBRSxZQUFZO0tBQ25CO0NBQ0Y7QUFFRCxNQUFNQyxNQUFNLEdBQUdULGlFQUEwQixDQUFDRSxXQUFXLENBQUM7QUFFdEQsaUVBQWUsT0FBT1MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDakMsTUFBTSxFQUFFQyxLQUFLLEdBQUUsR0FBR0YsR0FBRyxDQUFDRyxJQUFJO0lBRTFCLE1BQU1DLElBQUksR0FBRztRQUNYLHlCQUF5QjtRQUN6QkMsRUFBRSxFQUFFO1lBQ0YsOEJBQThCO1lBQzlCLDRCQUE0QjtZQUM1Qiw2QkFBNkI7U0FDOUI7UUFDREMsSUFBSSxFQUFFLDhCQUE4QjtRQUNwQ0MsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFTCxLQUFLLENBQUMsQ0FBQztRQUM5Qk0sSUFBSSxFQUFFLE9BQU8sR0FBR04sS0FBSztRQUNyQk8sSUFBSSxFQUFFLENBQUM7eUJBQ2MsRUFBRVAsS0FBSyxDQUFDOztRQUV6QixDQUFDO0tBQ047SUFDRCxJQUFJO1FBQ0YsTUFBTVEsUUFBUSxHQUFHLE1BQU1aLE1BQU0sQ0FBQ2EsUUFBUSxDQUFDUCxJQUFJLENBQUM7UUFDNUNRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLENBQUMsQ0FBQztRQUN0QlQsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0tBQ2pELENBQUMsT0FBT0MsS0FBSyxFQUFFO1FBQ2RKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxLQUFLLENBQUMsQ0FBQztRQUNuQmYsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0tBQ2xEO0NBQ0YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlY2h4Y2VsbGVuY2UvLi9wYWdlcy9hcGkvc3Vic2NyaWJlLmpzPzMyMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSBcIm5vZGVtYWlsZXJcIjtcbmltcG9ydCBzZ1RyYW5zcG9ydCBmcm9tIFwibm9kZW1haWxlci1zZW5kZ3JpZC10cmFuc3BvcnRcIjtcblxuLy8gY29uc3QgdHJhbnNwb3J0ZXIgPSB7XG4vLyAgICAgYXV0aDoge1xuLy8gICAgICAgICAvLyBVcGRhdGUgeW91ciBTZW5kR3JpZCBBUEkga2V5IGhlcmVcbi8vICAgICAgICAgYXBpX2tleTogJy4uLidcbi8vICAgICB9XG4vLyB9XG5sZXQgdHJhbnNwb3J0ZXIgPSB7XG4gIGhvc3Q6IFwibWFpbC56YW1lZW50ZXJtaW5hbC5jb21cIixcbiAgcG9ydDogNDY1LFxuICBzZWN1cmU6IHRydWUsIC8vIHRydWUgZm9yIDQ2NSwgZmFsc2UgZm9yIG90aGVyIHBvcnRzXG4gIGF1dGg6IHtcbiAgICB1c2VyOiBcInN1cHBvcnRAdGVjaHhjZWxsZW5jZW5wbC5jb21cIiwgLy8gZ2VuZXJhdGVkIGV0aGVyZWFsIHVzZXJcbiAgICBwYXNzOiBcIks4bmI2K2o3NTNcIixcbiAgfSxcbn07XG5cbmNvbnN0IG1haWxlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHRyYW5zcG9ydGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgZW1haWwgfSA9IHJlcS5ib2R5O1xuXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgLy8gVXBkYXRlIHlvdXIgZW1haWwgaGVyZVxuICAgIHRvOiBbXG4gICAgICBcInN1cHBvcnRAdGVjaHhjZWxsZW5jZW5wbC5jb21cIixcbiAgICAgIFwiYW5raXRAdGVjaHhjZWxsZW5jZW5wbC5jb21cIixcbiAgICAgIFwibmlrZXNoQHRlY2h4Y2VsbGVuY2VucGwuY29tXCIsXG4gICAgXSxcbiAgICBmcm9tOiBcInN1cHBvcnRAdGVjaHhjZWxsZW5jZW5wbC5jb21cIixcbiAgICBzdWJqZWN0OiBgU3Vic2NyaWJlZDoke2VtYWlsfWAsXG4gICAgdGV4dDogXCJGcm9tOlwiICsgZW1haWwsXG4gICAgaHRtbDogYFxuICAgICAgICAgICAgPGI+RnJvbTo8L2I+ICR7ZW1haWx9IDxiciAvPiBcbiAgICAgICAgICAgXG4gICAgICAgIGAsXG4gIH07XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBtYWlsZXIuc2VuZE1haWwoZGF0YSk7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKFwiRW1haWwgc2VuZCBzdWNjZXNzZnVsbHlcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKFwiRXJyb3IgcHJvY2Nlc3NpbmcgY2hhcmdlXCIpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbIm5vZGVtYWlsZXIiLCJzZ1RyYW5zcG9ydCIsInRyYW5zcG9ydGVyIiwiaG9zdCIsInBvcnQiLCJzZWN1cmUiLCJhdXRoIiwidXNlciIsInBhc3MiLCJtYWlsZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJyZXEiLCJyZXMiLCJlbWFpbCIsImJvZHkiLCJkYXRhIiwidG8iLCJmcm9tIiwic3ViamVjdCIsInRleHQiLCJodG1sIiwicmVzcG9uc2UiLCJzZW5kTWFpbCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJzZW5kIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/subscribe.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/subscribe.js"));
module.exports = __webpack_exports__;

})();