"use strict";
(() => {
var exports = {};
exports.id = 318;
exports.ids = [318];
exports.modules = {

/***/ 3592:
/***/ ((module) => {

module.exports = require("db");

/***/ }),

/***/ 7073:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const db = __webpack_require__(3592);
module.exports = (req, res)=>{
    res.setHeader("content-type", "text/plain");
    res.send(`
    working:
    ${db}
  `);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7073));
module.exports = __webpack_exports__;

})();