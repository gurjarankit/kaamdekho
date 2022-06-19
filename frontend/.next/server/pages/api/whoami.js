"use strict";
(() => {
var exports = {};
exports.id = 268;
exports.ids = [268];
exports.modules = {

/***/ 1865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "handler": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "nextjs-cors"
const external_nextjs_cors_namespaceObject = require("nextjs-cors");
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
;// CONCATENATED MODULE: ./pages/api/whoami.js


async function handler(req, res) {
    console.log("Ankit chhaltore");
// Run the cors middleware
// nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
// await NextCors(req, res, {
//    // Options
//    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
//    origin: '*',
//    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// });
// const response = await axios.get("https://cors-anywhere.herokuapp.com/https://0d93-2402-8100-3861-fa1-f49d-78b1-8867-15cc.ngrok.io/api/dashboard/search/searchByKeyword/Commi")
// const data = await response.json();
// console.log("data",data)
// Rest of the API logic
// res.json({ message: 'Hello NextJs Cors!' });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1865));
module.exports = __webpack_exports__;

})();