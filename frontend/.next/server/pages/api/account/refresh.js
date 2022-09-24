"use strict";
(() => {
var exports = {};
exports.id = 71;
exports.ids = [71];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 1711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ API_URL)
/* harmony export */ });
const API_URL = "https://api.fablanka.org";


/***/ }),

/***/ 8252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1711);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    if (req.method === "GET") {
        const cookies = cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req.headers.cookie ?? "");
        const refresh = cookies.refresh ?? false;
        if (refresh === false) {
            return res.status(401).json({
                error: "User unauthorized to make this request"
            });
        }
        const body = JSON.stringify({
            refresh
        });
        try {
            const apiRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__/* .API_URL */ .T}/api/token/refresh/`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: body
            });
            const data = await apiRes.json();
            if (apiRes.status === 200) {
                res.setHeader("Set-Cookie", [
                    cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize("access", data.access, {
                        httpOnly: true,
                        secure: "production" !== "development",
                        maxAge: 60 * 30,
                        sameSite: "strict",
                        path: "/api/"
                    }),
                    cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize("refresh", data.refresh, {
                        httpOnly: true,
                        secure: "production" !== "development",
                        maxAge: 60 * 60 * 24,
                        sameSite: "strict",
                        path: "/api/"
                    }), 
                ]);
                return res.status(200).json({
                    success: "Refresh request successful"
                });
            } else {
                return res.status(apiRes.status).json({
                    error: "Failed to fulfill refresh request"
                });
            }
        } catch (err) {
            return res.status(500).json({
                error: "Something went wrong when trying to fulfill refresh request"
            });
        }
    } else {
        res.setHeader("Allow", [
            "GET"
        ]);
        return res.status(405).json({
            error: `Method ${req.method} not allowed`
        });
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8252));
module.exports = __webpack_exports__;

})();