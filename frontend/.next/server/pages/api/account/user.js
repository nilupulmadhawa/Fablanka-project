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
exports.id = "pages/api/account/user";
exports.ids = ["pages/api/account/user"];
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

/***/ "(api)/./src/pages/api/account/user.js":
/*!***************************************!*\
  !*** ./src/pages/api/account/user.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/index */ \"(api)/./src/config/index.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"GET\") {\n        const cookies = cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req.headers.cookie ?? \"\");\n        const access = cookies.access ?? false;\n        if (access === false) {\n            return res.status(401).json({\n                error: \"User unauthorized to make this request\"\n            });\n        }\n        try {\n            const apiRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__.API_URL}/api/account/user`, {\n                method: \"GET\",\n                headers: {\n                    \"Accept\": \"application/json\",\n                    \"Authorization\": `Bearer ${access}`\n                }\n            });\n            const data = await apiRes.json();\n            if (apiRes.status === 200) {\n                return res.status(200).json({\n                    user: data.user\n                });\n            } else {\n                return res.status(apiRes.status).json({\n                    error: data.error\n                });\n            }\n        } catch (err) {\n            return res.status(500).json({\n                error: \"Something went wrong when retrieving user\"\n            });\n        }\n    } else {\n        res.setHeader(\"Allow\", [\n            \"GET\"\n        ]);\n        return res.status(405).json({\n            error: `Method ${req.method} not allowed`\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2FjY291bnQvdXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRCO0FBQ29CO0FBRWhELGlFQUFlLE9BQU9FLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQy9CLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN0QixNQUFNQyxPQUFPLEdBQUdMLG1EQUFZLENBQUNFLEdBQUcsQ0FBQ0ssT0FBTyxDQUFDUCxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RELE1BQU1RLE1BQU0sR0FBR0gsT0FBTyxDQUFDRyxNQUFNLElBQUksS0FBSztRQUV0QyxJQUFJQSxNQUFNLEtBQUssS0FBSyxFQUFFO1lBQ2xCLE9BQU9MLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQ3hCQyxLQUFLLEVBQUUsd0NBQXdDO2FBQ2xELENBQUMsQ0FBQztTQUNOO1FBRUQsSUFBSTtZQUNBLE1BQU1DLE1BQU0sR0FBRyxNQUFNQyxLQUFLLENBQUMsQ0FBQyxFQUFFWixrREFBTyxDQUFDLGlCQUFpQixDQUFDLEVBQUU7Z0JBQ3RERyxNQUFNLEVBQUUsS0FBSztnQkFDYkcsT0FBTyxFQUFFO29CQUNMLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLGVBQWUsRUFBRSxDQUFDLE9BQU8sRUFBRUMsTUFBTSxDQUFDLENBQUM7aUJBQ3RDO2FBQ0osQ0FBQztZQUNGLE1BQU1NLElBQUksR0FBRyxNQUFNRixNQUFNLENBQUNGLElBQUksRUFBRTtZQUVoQyxJQUFJRSxNQUFNLENBQUNILE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQ3ZCLE9BQU9OLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQ3hCSyxJQUFJLEVBQUVELElBQUksQ0FBQ0MsSUFBSTtpQkFDbEIsQ0FBQyxDQUFDO2FBQ04sTUFBTTtnQkFDSCxPQUFPWixHQUFHLENBQUNNLE1BQU0sQ0FBQ0csTUFBTSxDQUFDSCxNQUFNLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUNsQ0MsS0FBSyxFQUFFRyxJQUFJLENBQUNILEtBQUs7aUJBQ3BCLENBQUMsQ0FBQzthQUNOO1NBQ0osQ0FBQyxPQUFNSyxHQUFHLEVBQUU7WUFDVCxPQUFPYixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUN4QkMsS0FBSyxFQUFFLDJDQUEyQzthQUNyRCxDQUFDLENBQUM7U0FDTjtLQUNKLE1BQU07UUFDSFIsR0FBRyxDQUFDYyxTQUFTLENBQUMsT0FBTyxFQUFFO1lBQUMsS0FBSztTQUFDLENBQUMsQ0FBQztRQUNoQyxPQUFPZCxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQ3hCQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUVULEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQztTQUM1QyxDQUFDLENBQUM7S0FDTjtDQUNKLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9hcGkvYWNjb3VudC91c2VyLmpzPzk2NWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvb2tpZSBmcm9tICdjb29raWUnO1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICBjb25zdCBjb29raWVzID0gY29va2llLnBhcnNlKHJlcS5oZWFkZXJzLmNvb2tpZSA/PyAnJyk7XG4gICAgICAgIGNvbnN0IGFjY2VzcyA9IGNvb2tpZXMuYWNjZXNzID8/IGZhbHNlO1xuXG4gICAgICAgIGlmIChhY2Nlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oe1xuICAgICAgICAgICAgICAgIGVycm9yOiAnVXNlciB1bmF1dGhvcml6ZWQgdG8gbWFrZSB0aGlzIHJlcXVlc3QnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhcGlSZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9hcGkvYWNjb3VudC91c2VyYCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthY2Nlc3N9YFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaVJlcy5qc29uKCk7XG5cbiAgICAgICAgICAgIGlmIChhcGlSZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICB1c2VyOiBkYXRhLnVzZXJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoYXBpUmVzLnN0YXR1cykuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBkYXRhLmVycm9yXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgIGVycm9yOiAnU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hlbiByZXRyaWV2aW5nIHVzZXInXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydHRVQnXSk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7XG4gICAgICAgICAgICBlcnJvcjogYE1ldGhvZCAke3JlcS5tZXRob2R9IG5vdCBhbGxvd2VkYFxuICAgICAgICB9KTtcbiAgICB9XG59O1xuIl0sIm5hbWVzIjpbImNvb2tpZSIsIkFQSV9VUkwiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjb29raWVzIiwicGFyc2UiLCJoZWFkZXJzIiwiYWNjZXNzIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiYXBpUmVzIiwiZmV0Y2giLCJkYXRhIiwidXNlciIsImVyciIsInNldEhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/account/user.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/account/user.js"));
module.exports = __webpack_exports__;

})();