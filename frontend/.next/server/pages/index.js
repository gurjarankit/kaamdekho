"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,151,229];
exports.modules = {

/***/ 4369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2441);
/* harmony import */ var _constant_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3098);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




async function getStaticProps() {
    let highestSalaryJobs = [];
    let localPopularJobArray = [];
    console.log("inside get static props");
    let highestJobResponse = axios__WEBPACK_IMPORTED_MODULE_3___default().get("/api/dashboard/list");
    let popularJobResponse = axios__WEBPACK_IMPORTED_MODULE_3___default().get("/api/dashboard/keywordAndCountJobs");
    let responses = await Promise.all([
        highestJobResponse,
        popularJobResponse
    ]);
    //Response one data(Highest Salary jobs)
    let data1 = responses[0].data.data;
    let index = 0;
    data1.forEach((element, i)=>{
        if (index == 7) index = 0;
        else index++;
        let localPopularJob = {
            jobIcon: _constant_constant__WEBPACK_IMPORTED_MODULE_2__/* .jobCardArray */ .K3[index].jobIcon,
            locationIcon: _constant_constant__WEBPACK_IMPORTED_MODULE_2__/* .jobCardArray */ .K3[index].locationIcon,
            experienceIcon: _constant_constant__WEBPACK_IMPORTED_MODULE_2__/* .jobCardArray */ .K3[index].experienceIcon,
            jobName: element.title,
            jobLocationHead: element.placeholders.location,
            salaryRange: element.placeholders.salary,
            jobLocationBottom: element.placeholders.location,
            jobExperience: element.placeholders.experience,
            postedJob: element.footerPlaceholderLabel,
            backgroundColor: _constant_constant__WEBPACK_IMPORTED_MODULE_2__/* .jobCardArray */ .K3[index].backgroundColor
        };
        highestSalaryJobs.push(localPopularJob);
    });
    // let localHighestSalary = highestSalaryJobs.slice(0, 8)
    //Response two data(Popular jobs)
    let localPopularJobs = responses[1].data.data;
    console.log("localPopularJobs", localPopularJobs);
    let popularJobindex = 0;
    localPopularJobs.forEach((element)=>{
        if (popularJobindex == 7) popularJobindex = 0;
        else popularJobindex++;
        let populaJobObj = {
            url: _constant_constant__WEBPACK_IMPORTED_MODULE_2__/* .cardArray */ .wC[popularJobindex].url,
            keywordName: element.keyword,
            totalJob: element.totalJobs,
            height: 0,
            width: 0,
            backgroundColor: _constant_constant__WEBPACK_IMPORTED_MODULE_2__/* .cardArray */ .wC[popularJobindex].backgroundColor
        };
        localPopularJobArray.push(populaJobObj);
    });
    // })
    console.log("highestSalaryJobs get static props", highestSalaryJobs.length);
    console.log("localPopularJobArray get static props", localPopularJobArray.length);
    return {
        props: {
            highestSalaryJobs: highestSalaryJobs,
            localPopularJobArray: localPopularJobArray
        }
    };
}
function Index(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
            highestSalaryJobs: props.highestSalaryJobs,
            localPopularJobArray: props.localPopularJobArray
        })
    });
};


/***/ }),

/***/ 9368:
/***/ ((module) => {

module.exports = require("@coreui/react");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4508:
/***/ ((module) => {

module.exports = require("react-responsive-carousel");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,675,505,664,281,82,747,822,572,148,441], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();