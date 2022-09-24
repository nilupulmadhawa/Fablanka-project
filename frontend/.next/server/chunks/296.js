"use strict";
exports.id = 296;
exports.ids = [296];
exports.modules = {

/***/ 2327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f7": () => (/* binding */ reset_register_success),
/* harmony export */   "x4": () => (/* binding */ login),
/* harmony export */   "xh": () => (/* binding */ request_refresh),
/* harmony export */   "z2": () => (/* binding */ register)
/* harmony export */ });
/* unused harmony exports load_user, check_auth_status, logout */
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9581);

const load_user = ()=>async (dispatch)=>{
        try {
            const res = await fetch("/api/account/user", {
                method: "GET",
                headers: {
                    Accept: "application/json"
                }
            });
            const data = await res.json();
            if (res.status === 200) {
                dispatch({
                    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .LOAD_USER_SUCCESS */ .DU,
                    payload: data
                });
            } else {
                dispatch({
                    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .LOAD_USER_FAIL */ ._h
                });
            }
        } catch (err) {
            dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_0__/* .LOAD_USER_FAIL */ ._h
            });
        }
    };
const check_auth_status = ()=>async (dispatch)=>{
        try {
            const res = await fetch("/api/account/verify", {
                method: "GET",
                headers: {
                    Accept: "application/json"
                }
            });
            if (res.status === 200) {
                dispatch({
                    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .AUTHENTICATED_SUCCESS */ .IL
                });
                dispatch(load_user());
            } else {
                dispatch({
                    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .AUTHENTICATED_FAIL */ .F3
                });
            }
        } catch (err) {
            dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_0__/* .AUTHENTICATED_FAIL */ .F3
            });
        }
    };
const request_refresh = ()=>async (dispatch)=>{
        try {
            const res = await fetch("/api/account/refresh", {
                method: "GET",
                headers: {
                    Accept: "application/json"
                }
            });
            if (res.status === 200) {
                dispatch({
                    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .REFRESH_SUCCESS */ .UM
                });
                dispatch(check_auth_status());
            } else {
                dispatch({
                    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .REFRESH_FAIL */ .MZ
                });
            }
        } catch (err) {
            dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_0__/* .REFRESH_FAIL */ .MZ
            });
        }
    };
const register = (first_name, last_name, username, password, re_password)=>async (dispatch)=>{
        const body = JSON.stringify({
            first_name,
            last_name,
            username,
            password,
            re_password
        });
        dispatch({
            type: _types__WEBPACK_IMPORTED_MODULE_0__/* .SET_AUTH_LOADING */ .Eq
        });
        try {
            const res = await fetch("/api/account/register", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: body
            });
            if (res.status === 201) {
                dispatch({
                    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .REGISTER_SUCCESS */ .bp
                });
            } else {
                dispatch({
                    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .REGISTER_FAIL */ .YY
                });
            }
        } catch (err) {
            dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_0__/* .REGISTER_FAIL */ .YY
            });
        }
        dispatch({
            type: _types__WEBPACK_IMPORTED_MODULE_0__/* .REMOVE_AUTH_LOADING */ .$l
        });
    };
const reset_register_success = ()=>(dispatch)=>{
        dispatch({
            type: _types__WEBPACK_IMPORTED_MODULE_0__/* .RESET_REGISTER_SUCCESS */ .qu
        });
    };
const login = (username, password)=>async (dispatch)=>{
        const body = JSON.stringify({
            username,
            password
        });
        dispatch({
            type: _types__WEBPACK_IMPORTED_MODULE_0__/* .SET_AUTH_LOADING */ .Eq
        });
        try {
            const res = await fetch("/api/account/login", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: body
            });
            if (res.status === 200) {
                dispatch({
                    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .LOGIN_SUCCESS */ .XP
                });
                dispatch(load_user());
            } else {
                ////////////////////////////////////////////////////////////////
                console.log(res.status);
                dispatch({
                    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .LOGIN_FAIL */ .Qj
                });
            }
        } catch (err) {
            dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_0__/* .LOGIN_FAIL */ .Qj
            });
        }
        dispatch({
            type: _types__WEBPACK_IMPORTED_MODULE_0__/* .REMOVE_AUTH_LOADING */ .$l
        });
    };
const logout = ()=>async (dispatch)=>{
        try {
            const res = await fetch("/api/account/logout", {
                method: "POST",
                headers: {
                    Accept: "application/json"
                }
            });
            if (res.status === 200) {
                dispatch({
                    type: LOGOUT_SUCCESS
                });
            } else {
                dispatch({
                    type: LOGOUT_FAIL
                });
            }
        } catch (err) {
            dispatch({
                type: LOGOUT_FAIL
            });
        }
    };


/***/ }),

/***/ 9581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 2296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2327);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9783);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);







const Footer = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\hocs\\Layout.js -> " + "../components/Footer"
        ]
    },
    ssr: false
});
const Navbar = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\hocs\\Layout.js -> " + "../components/Navbar"
        ]
    },
    ssr: false
});
const Layout = ({ title , content , children  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        aos__WEBPACK_IMPORTED_MODULE_4___default().init({
            duration: 1000
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (dispatch && dispatch !== null && dispatch !== undefined) dispatch((0,_actions_auth__WEBPACK_IMPORTED_MODULE_6__/* .request_refresh */ .xh)());
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: content
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Navbar, {
                className: "sticky-sm-top"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container-fluid px-5 mt-5",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Footer, {})
            })
        ]
    });
};
Layout.defaultProps = {
    title: "FabLanka",
    content: "FabLanka"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);


/***/ })

};
;