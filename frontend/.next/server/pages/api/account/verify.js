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
exports.id = "pages/api/account/verify";
exports.ids = ["pages/api/account/verify"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "(api)/./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL)\n/* harmony export */ });\nconst API_URL = \"http://localhost:8000\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvY29uZmlnL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxPQUFPLEdBQUdDLHVCQUErQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29uZmlnL2luZGV4LmpzPzMzYTYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMOyJdLCJuYW1lcyI6WyJBUElfVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/config/index.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/account/verify.js":
/*!*****************************************!*\
  !*** ./src/pages/api/account/verify.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/index */ \"(api)/./src/config/index.js\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"GET\") {\n        const cookies = cookie__WEBPACK_IMPORTED_MODULE_1___default().parse(req.headers.cookie ?? \"\");\n        const access = cookies.access ?? false;\n        if (access === false) {\n            return res.status(403).json({\n                error: \"User forbidden from making the request\"\n            });\n        }\n        const body = JSON.stringify({\n            token: access\n        });\n        try {\n            const apiRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__.API_URL}/api/token/verify/`, {\n                method: \"POST\",\n                headers: {\n                    \"Accept\": \"application/json\",\n                    \"Content-Type\": \"application/json\"\n                },\n                body: body\n            });\n            if (apiRes.status === 200) {\n                return res.status(200).json({\n                    success: \"Authenticated successfully\"\n                });\n            } else {\n                return res.status(apiRes.status).json({\n                    error: \"Failed to authenticate\"\n                });\n            }\n        } catch (err) {\n            return res.status(500).json({\n                error: \"Something went wrong when trying to authenticate\"\n            });\n        }\n    } else {\n        res.setHeader(\"Allow\", [\n            \"GET\"\n        ]);\n        return res.status(405).json({\n            error: `Method ${req.method} not allowed`\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2FjY291bnQvdmVyaWZ5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZ0Q7QUFDcEI7QUFFNUIsaUVBQWUsT0FBT0UsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDL0IsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3RCLE1BQU1DLE9BQU8sR0FBR0osbURBQVksQ0FBQ0MsR0FBRyxDQUFDSyxPQUFPLENBQUNOLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEQsTUFBTU8sTUFBTSxHQUFHSCxPQUFPLENBQUNHLE1BQU0sSUFBSSxLQUFLO1FBRXRDLElBQUlBLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDbEIsT0FBT0wsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFDeEJDLEtBQUssRUFBRSx3Q0FBd0M7YUFDbEQsQ0FBQyxDQUFDO1NBQ047UUFFRCxNQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO1lBQ3hCQyxLQUFLLEVBQUVQLE1BQU07U0FDaEIsQ0FBQztRQUVGLElBQUk7WUFDQSxNQUFNUSxNQUFNLEdBQUcsTUFBTUMsS0FBSyxDQUFDLENBQUMsRUFBRWpCLGtEQUFPLENBQUMsa0JBQWtCLENBQUMsRUFBRTtnQkFDdkRJLE1BQU0sRUFBRSxNQUFNO2dCQUNkRyxPQUFPLEVBQUU7b0JBQ0wsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsY0FBYyxFQUFFLGtCQUFrQjtpQkFDckM7Z0JBQ0RLLElBQUksRUFBRUEsSUFBSTthQUNiLENBQUM7WUFFRixJQUFJSSxNQUFNLENBQUNQLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQ3ZCLE9BQU9OLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVRLE9BQU8sRUFBRSw0QkFBNEI7aUJBQUUsQ0FBQyxDQUFDO2FBQzFFLE1BQU07Z0JBQ0gsT0FBT2YsR0FBRyxDQUFDTSxNQUFNLENBQUNPLE1BQU0sQ0FBQ1AsTUFBTSxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFDbENDLEtBQUssRUFBRSx3QkFBd0I7aUJBQ2xDLENBQUMsQ0FBQzthQUNOO1NBQ0osQ0FBQyxPQUFNUSxHQUFHLEVBQUU7WUFDVCxPQUFPaEIsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFDeEJDLEtBQUssRUFBRSxrREFBa0Q7YUFDNUQsQ0FBQyxDQUFDO1NBQ047S0FDSixNQUFNO1FBQ0hSLEdBQUcsQ0FBQ2lCLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFBQyxLQUFLO1NBQUMsQ0FBQyxDQUFDO1FBQ2hDLE9BQU9qQixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRVQsR0FBRyxDQUFDRSxNQUFNLENBQUMsWUFBWSxDQUFDO1NBQUUsQ0FBQyxDQUFDO0tBQzlFO0NBQ0osRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL2FwaS9hY2NvdW50L3ZlcmlmeS5qcz8wNzdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvaW5kZXgnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdjb29raWUnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgY29uc3QgY29va2llcyA9IGNvb2tpZS5wYXJzZShyZXEuaGVhZGVycy5jb29raWUgPz8gJycpO1xuICAgICAgICBjb25zdCBhY2Nlc3MgPSBjb29raWVzLmFjY2VzcyA/PyBmYWxzZTtcblxuICAgICAgICBpZiAoYWNjZXNzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5qc29uKHtcbiAgICAgICAgICAgICAgICBlcnJvcjogJ1VzZXIgZm9yYmlkZGVuIGZyb20gbWFraW5nIHRoZSByZXF1ZXN0J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgdG9rZW46IGFjY2Vzc1xuICAgICAgICB9KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYXBpUmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vYXBpL3Rva2VuL3ZlcmlmeS9gLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogYm9keVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChhcGlSZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiAnQXV0aGVudGljYXRlZCBzdWNjZXNzZnVsbHknIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhhcGlSZXMuc3RhdHVzKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICdGYWlsZWQgdG8gYXV0aGVudGljYXRlJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICBlcnJvcjogJ1NvbWV0aGluZyB3ZW50IHdyb25nIHdoZW4gdHJ5aW5nIHRvIGF1dGhlbnRpY2F0ZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ0dFVCddKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6IGBNZXRob2QgJHtyZXEubWV0aG9kfSBub3QgYWxsb3dlZGAgfSk7XG4gICAgfVxufTsiXSwibmFtZXMiOlsiQVBJX1VSTCIsImNvb2tpZSIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNvb2tpZXMiLCJwYXJzZSIsImhlYWRlcnMiLCJhY2Nlc3MiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRva2VuIiwiYXBpUmVzIiwiZmV0Y2giLCJzdWNjZXNzIiwiZXJyIiwic2V0SGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/account/verify.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/account/verify.js"));
module.exports = __webpack_exports__;

})();