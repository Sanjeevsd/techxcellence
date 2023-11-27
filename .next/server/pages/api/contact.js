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
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
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

/***/ "(api)/./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nodemailer_sendgrid_transport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nodemailer-sendgrid-transport */ \"nodemailer-sendgrid-transport\");\n/* harmony import */ var nodemailer_sendgrid_transport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nodemailer_sendgrid_transport__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// const transporter = {\n//     auth: {\n//         // Update your SendGrid API key here\n//         api_key: '...'\n//     }\n// }\nlet transporter = {\n    host: \"mail.zameenterminal.com\",\n    port: 465,\n    secure: true,\n    auth: {\n        user: \"support@techxcellencenpl.com\",\n        pass: \"K8nb6+j753\"\n    }\n};\nconst mailer = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport(transporter);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    console.log(req.body);\n    const { name , email , number , subject , text  } = req.body;\n    const data = {\n        // Update your email here\n        to: [\n            \"support@techxcellencenpl.com\",\n            \"ankit@techxcellencenpl.com\",\n            \"nikesh@techxcellencenpl.com\", \n        ],\n        from: \"support@techxcellencenpl.com\",\n        subject: `Enquiry From ${email}`,\n        text: text,\n        html: `\n            <b>From:</b> ${name} <br /> \n            <b>Email:</b> ${email} <br /> \n            <b>Number:</b> ${number} <br /> \n            <b>Subject:</b> ${subject} <br /> \n            <b>Message:</b> ${text} \n        `\n    };\n    try {\n        const response = await mailer.sendMail(data);\n        console.log(response);\n        res.status(200).send(\"Email send successfully\");\n    } catch (error) {\n        console.log(error);\n        res.status(500).send(\"Error proccessing charge\");\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFvQztBQUNvQjtBQUV4RCx3QkFBd0I7QUFDeEIsY0FBYztBQUNkLCtDQUErQztBQUMvQyx5QkFBeUI7QUFDekIsUUFBUTtBQUNSLElBQUk7QUFDSixJQUFJRSxXQUFXLEdBQUc7SUFDaEJDLElBQUksRUFBRSx5QkFBeUI7SUFDL0JDLElBQUksRUFBRSxHQUFHO0lBQ1RDLE1BQU0sRUFBRSxJQUFJO0lBQ1pDLElBQUksRUFBRTtRQUNKQyxJQUFJLEVBQUUsOEJBQThCO1FBQ3BDQyxJQUFJLEVBQUUsWUFBWTtLQUNuQjtDQUNGO0FBRUQsTUFBTUMsTUFBTSxHQUFHVCxpRUFBMEIsQ0FBQ0UsV0FBVyxDQUFDO0FBRXRELGlFQUFlLE9BQU9TLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQ2pDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDSSxJQUFJLENBQUMsQ0FBQztJQUN0QixNQUFNLEVBQUVDLElBQUksR0FBRUMsS0FBSyxHQUFFQyxNQUFNLEdBQUVDLE9BQU8sR0FBRUMsSUFBSSxHQUFFLEdBQUdULEdBQUcsQ0FBQ0ksSUFBSTtJQUV2RCxNQUFNTSxJQUFJLEdBQUc7UUFDWCx5QkFBeUI7UUFDekJDLEVBQUUsRUFBRTtZQUNGLDhCQUE4QjtZQUM5Qiw0QkFBNEI7WUFDNUIsNkJBQTZCO1NBQzlCO1FBQ0RDLElBQUksRUFBRSw4QkFBOEI7UUFDcENKLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRUYsS0FBSyxDQUFDLENBQUM7UUFDaENHLElBQUksRUFBRUEsSUFBSTtRQUNWSSxJQUFJLEVBQUUsQ0FBQzt5QkFDYyxFQUFFUixJQUFJLENBQUM7MEJBQ04sRUFBRUMsS0FBSyxDQUFDOzJCQUNQLEVBQUVDLE1BQU0sQ0FBQzs0QkFDUixFQUFFQyxPQUFPLENBQUM7NEJBQ1YsRUFBRUMsSUFBSSxDQUFDO1FBQzNCLENBQUM7S0FDTjtJQUNELElBQUk7UUFDRixNQUFNSyxRQUFRLEdBQUcsTUFBTWhCLE1BQU0sQ0FBQ2lCLFFBQVEsQ0FBQ0wsSUFBSSxDQUFDO1FBQzVDUixPQUFPLENBQUNDLEdBQUcsQ0FBQ1csUUFBUSxDQUFDLENBQUM7UUFDdEJiLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztLQUNqRCxDQUFDLE9BQU9DLEtBQUssRUFBRTtRQUNkaEIsT0FBTyxDQUFDQyxHQUFHLENBQUNlLEtBQUssQ0FBQyxDQUFDO1FBQ25CakIsR0FBRyxDQUFDZSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0tBQ2xEO0NBQ0YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlY2h4Y2VsbGVuY2UvLi9wYWdlcy9hcGkvY29udGFjdC5qcz8zNDkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub2RlbWFpbGVyIGZyb20gXCJub2RlbWFpbGVyXCI7XG5pbXBvcnQgc2dUcmFuc3BvcnQgZnJvbSBcIm5vZGVtYWlsZXItc2VuZGdyaWQtdHJhbnNwb3J0XCI7XG5cbi8vIGNvbnN0IHRyYW5zcG9ydGVyID0ge1xuLy8gICAgIGF1dGg6IHtcbi8vICAgICAgICAgLy8gVXBkYXRlIHlvdXIgU2VuZEdyaWQgQVBJIGtleSBoZXJlXG4vLyAgICAgICAgIGFwaV9rZXk6ICcuLi4nXG4vLyAgICAgfVxuLy8gfVxubGV0IHRyYW5zcG9ydGVyID0ge1xuICBob3N0OiBcIm1haWwuemFtZWVudGVybWluYWwuY29tXCIsXG4gIHBvcnQ6IDQ2NSxcbiAgc2VjdXJlOiB0cnVlLCAvLyB0cnVlIGZvciA0NjUsIGZhbHNlIGZvciBvdGhlciBwb3J0c1xuICBhdXRoOiB7XG4gICAgdXNlcjogXCJzdXBwb3J0QHRlY2h4Y2VsbGVuY2VucGwuY29tXCIsIC8vIGdlbmVyYXRlZCBldGhlcmVhbCB1c2VyXG4gICAgcGFzczogXCJLOG5iNitqNzUzXCIsXG4gIH0sXG59O1xuXG5jb25zdCBtYWlsZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh0cmFuc3BvcnRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XG4gIGNvbnN0IHsgbmFtZSwgZW1haWwsIG51bWJlciwgc3ViamVjdCwgdGV4dCB9ID0gcmVxLmJvZHk7XG5cbiAgY29uc3QgZGF0YSA9IHtcbiAgICAvLyBVcGRhdGUgeW91ciBlbWFpbCBoZXJlXG4gICAgdG86IFtcbiAgICAgIFwic3VwcG9ydEB0ZWNoeGNlbGxlbmNlbnBsLmNvbVwiLFxuICAgICAgXCJhbmtpdEB0ZWNoeGNlbGxlbmNlbnBsLmNvbVwiLFxuICAgICAgXCJuaWtlc2hAdGVjaHhjZWxsZW5jZW5wbC5jb21cIixcbiAgICBdLFxuICAgIGZyb206IFwic3VwcG9ydEB0ZWNoeGNlbGxlbmNlbnBsLmNvbVwiLFxuICAgIHN1YmplY3Q6IGBFbnF1aXJ5IEZyb20gJHtlbWFpbH1gLFxuICAgIHRleHQ6IHRleHQsXG4gICAgaHRtbDogYFxuICAgICAgICAgICAgPGI+RnJvbTo8L2I+ICR7bmFtZX0gPGJyIC8+IFxuICAgICAgICAgICAgPGI+RW1haWw6PC9iPiAke2VtYWlsfSA8YnIgLz4gXG4gICAgICAgICAgICA8Yj5OdW1iZXI6PC9iPiAke251bWJlcn0gPGJyIC8+IFxuICAgICAgICAgICAgPGI+U3ViamVjdDo8L2I+ICR7c3ViamVjdH0gPGJyIC8+IFxuICAgICAgICAgICAgPGI+TWVzc2FnZTo8L2I+ICR7dGV4dH0gXG4gICAgICAgIGAsXG4gIH07XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBtYWlsZXIuc2VuZE1haWwoZGF0YSk7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKFwiRW1haWwgc2VuZCBzdWNjZXNzZnVsbHlcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKFwiRXJyb3IgcHJvY2Nlc3NpbmcgY2hhcmdlXCIpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbIm5vZGVtYWlsZXIiLCJzZ1RyYW5zcG9ydCIsInRyYW5zcG9ydGVyIiwiaG9zdCIsInBvcnQiLCJzZWN1cmUiLCJhdXRoIiwidXNlciIsInBhc3MiLCJtYWlsZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsIm5hbWUiLCJlbWFpbCIsIm51bWJlciIsInN1YmplY3QiLCJ0ZXh0IiwiZGF0YSIsInRvIiwiZnJvbSIsImh0bWwiLCJyZXNwb25zZSIsInNlbmRNYWlsIiwic3RhdHVzIiwic2VuZCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();