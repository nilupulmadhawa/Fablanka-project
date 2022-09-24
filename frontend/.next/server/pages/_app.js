(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$l": () => (/* binding */ REMOVE_AUTH_LOADING),
/* harmony export */   "$x": () => (/* binding */ LOGOUT_SUCCESS),
/* harmony export */   "DU": () => (/* binding */ LOAD_USER_SUCCESS),
/* harmony export */   "Eq": () => (/* binding */ SET_AUTH_LOADING),
/* harmony export */   "F3": () => (/* binding */ AUTHENTICATED_FAIL),
/* harmony export */   "IL": () => (/* binding */ AUTHENTICATED_SUCCESS),
/* harmony export */   "MZ": () => (/* binding */ REFRESH_FAIL),
/* harmony export */   "Qj": () => (/* binding */ LOGIN_FAIL),
/* harmony export */   "UM": () => (/* binding */ REFRESH_SUCCESS),
/* harmony export */   "XP": () => (/* binding */ LOGIN_SUCCESS),
/* harmony export */   "YY": () => (/* binding */ REGISTER_FAIL),
/* harmony export */   "_h": () => (/* binding */ LOAD_USER_FAIL),
/* harmony export */   "bp": () => (/* binding */ REGISTER_SUCCESS),
/* harmony export */   "ek": () => (/* binding */ LOGOUT_FAIL),
/* harmony export */   "qu": () => (/* binding */ RESET_REGISTER_SUCCESS)
/* harmony export */ });
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_FAIL = "REGISTER_FAIL";
const RESET_REGISTER_SUCCESS = "RESET_REGISTER_SUCCESS";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
const LOGOUT_FAIL = "LOGOUT_FAIL";
const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
const LOAD_USER_FAIL = "LOAD_USER_FAIL";
const AUTHENTICATED_SUCCESS = "AUTHENTICATED_SUCCESS";
const AUTHENTICATED_FAIL = "AUTHENTICATED_FAIL";
const REFRESH_SUCCESS = "REFRESH_SUCCESS";
const REFRESH_FAIL = "REFRESH_FAIL";
const SET_AUTH_LOADING = "SET_AUTH_LOADING";
const REMOVE_AUTH_LOADING = "REMOVE_AUTH_LOADING";


/***/ }),

/***/ 2654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6604);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5800);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










 //importing font awesome css

_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__.config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
const App = ({ Component , pageProps  })=>{
    const store = (0,_store__WEBPACK_IMPORTED_MODULE_3__/* .useStore */ .o)(pageProps.initialReduxState);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
        store: store,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "FabLanka"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, inital-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
                        rel: "stylesheet",
                        integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
                        crossOrigin: "anonymous"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "https://use.fontawesome.com/releases/v5.15.1/css/all.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        charset: "UTF-8",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        href: "bower_components/aos/dist/aos.css"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
                        integrity: "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
                        crossOrigin: "anonymous",
                        defer: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        src: "bower_components/aos/dist/aos.js",
                        defer: true
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* binding */ useStore)
});

// UNUSED EXPORTS: initializeStore

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
// EXTERNAL MODULE: ./src/actions/types.js
var types = __webpack_require__(9581);
;// CONCATENATED MODULE: ./src/reducers/auth.js

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    register_success: false,
    userLoginFailed: false
};
const authReducer = (state = initialState, action)=>{
    const { type , payload  } = action;
    switch(type){
        case types/* REGISTER_SUCCESS */.bp:
            return {
                ...state,
                register_success: true
            };
        case types/* REGISTER_FAIL */.YY:
            return {
                ...state
            };
        case types/* RESET_REGISTER_SUCCESS */.qu:
            return {
                ...state,
                register_success: false
            };
        case types/* LOGIN_SUCCESS */.XP:
            return {
                ...state,
                isAuthenticated: true
            };
        case types/* LOGIN_FAIL */.Qj:
            return {
                ...state,
                isAuthenticated: false,
                userLoginFailed: true
            };
        case types/* LOGOUT_SUCCESS */.$x:
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        case types/* LOGOUT_FAIL */.ek:
            return {
                ...state
            };
        case types/* LOAD_USER_SUCCESS */.DU:
            return {
                ...state,
                user: payload.user
            };
        case types/* LOAD_USER_FAIL */._h:
            return {
                ...state,
                user: null
            };
        case types/* AUTHENTICATED_SUCCESS */.IL:
            return {
                ...state,
                isAuthenticated: true
            };
        case types/* AUTHENTICATED_FAIL */.F3:
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        case types/* REFRESH_SUCCESS */.UM:
            return {
                ...state
            };
        case types/* REFRESH_FAIL */.MZ:
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        case types/* SET_AUTH_LOADING */.Eq:
            return {
                ...state,
                loading: true
            };
        case types/* REMOVE_AUTH_LOADING */.$l:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
    ;
};
/* harmony default export */ const auth = (authReducer);

;// CONCATENATED MODULE: ./src/reducers/index.js


/* harmony default export */ const reducers = ((0,external_redux_namespaceObject.combineReducers)({
    auth: auth
}));

;// CONCATENATED MODULE: ./src/store.js





let store;
function initStore(initialState) {
    return (0,external_redux_namespaceObject.createStore)(reducers, initialState, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default()))));
}
;
const initializeStore = (preloadedState)=>{
    let _store = store ?? initStore(preloadedState);
    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState
        });
        // Reset the current store
        store = undefined;
    }
    // For SSG and SSR always create a new store
    if (true) return _store;
    // Create the store once in the client
    if (!store) store = _store;
    return _store;
};
function useStore(initialState) {
    const store = (0,external_react_.useMemo)(()=>initializeStore(initialState), [
        initialState
    ]);
    return store;
}
;


/***/ }),

/***/ 5800:
/***/ (() => {



/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 86:
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/fontawesome-svg-core");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2654));
module.exports = __webpack_exports__;

})();