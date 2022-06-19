(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,151];
exports.modules = {

/***/ 2136:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Layout_button__9_Au2",
	"navbar": "Layout_navbar__OuN2_",
	"hamburger": "Layout_hamburger__JbfQq",
	"bar": "Layout_bar__u8wjH",
	"navmenu": "Layout_navmenu__upBn0",
	"navitem": "Layout_navitem__5wPVR",
	"navlink": "Layout_navlink__Cu2tv",
	"navlogo": "Layout_navlogo__IDZGD",
	"active": "Layout_active__VNpgM"
};


/***/ }),

/***/ 3089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/styles.css
var styles = __webpack_require__(5800);
;// CONCATENATED MODULE: external "@fortawesome/fontawesome-svg-core"
const fontawesome_svg_core_namespaceObject = require("@fortawesome/fontawesome-svg-core");
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./component/footer.js


function Footer(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "footer-wrap",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "widgetFooter",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "uppercase",
                                children: "useful links"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                id: "footerUsefulLink",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        title: "About US",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "usefulLinksIcons",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "far fa-id-card"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "\xa0About us"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        title: "Our Team",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "usefulLinksIcons",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "far fa-handshake"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "\xa0Our team"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        title: "Gallery",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "usefulLinksIcons",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "far fa-images"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "\xa0Gallery"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        title: "Contact Us",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "usefulLinksIcons",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "far fa-envelope"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "\xa0Contact us"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "widgetFooter",
                        id: "footerLogo"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "widgetFooter",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "uppercase",
                                children: "Social media links"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                id: "footerMediaLinks",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "media1",
                                        title: "Facebook",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "mediaLinksIcons fb",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-facebook-square"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "fb",
                                                children: "\xa0facebook"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "media2",
                                        title: "Twitter",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "mediaLinksIcons twit",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter-square"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "twit",
                                                children: "\xa0Twitter"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "media3",
                                        title: "Instagram",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "mediaLinksIcons insta",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-instagram"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "insta",
                                                children: "\xa0instagram"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "media4",
                                        title: "Github",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "mediaLinksIcons git",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-github-alt"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "git",
                                                children: "\xa0Github"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "footerCopy",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "inb",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "mt-3",
                        children: [
                            "Copyrights",
                            /*#__PURE__*/ jsx_runtime_.jsx("sup", {
                                children: "\xa9"
                            }),
                            " 2022. Developed with Kaam Dekho"
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./styles/Layout.module.css
var Layout_module = __webpack_require__(2136);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./assets/images/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.c001d384.svg","height":281,"width":675});
;// CONCATENATED MODULE: ./assets/images/blogs.svg
/* harmony default export */ const blogs = ({"src":"/_next/static/media/blogs.6f19472b.svg","height":60,"width":60});
;// CONCATENATED MODULE: ./assets/images/shortlist_job.svg
/* harmony default export */ const shortlist_job = ({"src":"/_next/static/media/shortlist_job.149aba05.svg","height":60,"width":60});
;// CONCATENATED MODULE: ./assets/images/comparejob.svg
/* harmony default export */ const comparejob = ({"src":"/_next/static/media/comparejob.cc38a30d.svg","height":61,"width":61});
;// CONCATENATED MODULE: ./assets/images/jobs.svg
/* harmony default export */ const jobs = ({"src":"/_next/static/media/jobs.ba37aac4.svg","height":52,"width":48});
;// CONCATENATED MODULE: ./assets/images/search.svg
/* harmony default export */ const search = ({"src":"/_next/static/media/search.88904230.svg","height":59,"width":58});
;// CONCATENATED MODULE: ./component/navigationLink.js



function NavigationLink({ href , text , image , isMobileView , openMenu  }) {
    // const isActive = router.asPath === (href === "/home" ? "/" : href);
    const { imgUrl , height , width ,  } = image;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: href,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    onClick: isMobileView ? openMenu : null,
                    style: {
                        textDecoration: "none",
                        color: "black"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-center",
                        style: {
                            padding: "0rem 0.8rem"
                        },
                        role: "button",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: imgUrl,
                                    alt: "blogs",
                                    width: width,
                                    height: height,
                                    className: "pt-2"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    style: {
                                        fontSize: "12px"
                                    },
                                    children: text
                                })
                            })
                        ]
                    })
                })
            }),
            isMobileView && /*#__PURE__*/ jsx_runtime_.jsx("br", {})
        ]
    });
}
/* harmony default export */ const navigationLink = (NavigationLink);

;// CONCATENATED MODULE: ./component/navbar.js


// import { useRouter } from "next/router";










const navigationRoutes = [
    {
        url: "/",
        label: "Shortlisted  jobs",
        image: {
            imgUrl: shortlist_job,
            width: 85,
            height: 35
        }
    },
    {
        url: "/blogs",
        label: "Blogs",
        image: {
            imgUrl: blogs,
            width: 40,
            height: 35
        }
    },
    {
        url: "/",
        label: "Jobs",
        image: {
            imgUrl: jobs,
            width: 38,
            height: 34
        }
    },
    {
        url: "/home/job",
        label: "Search Jobs",
        image: {
            imgUrl: search,
            width: 50,
            height: 35
        }
    },
    {
        url: "/compare-job",
        label: "Compare Jobs",
        image: {
            imgUrl: comparejob,
            width: 60,
            height: 35
        }
    },
    {
        url: "/about",
        label: "About Us",
        image: {
            imgUrl: comparejob,
            width: 50,
            height: 35
        }
    }
];
function Navbar() {
    // const router = useRouter();
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const openMenu = ()=>{
        setIsOpen(!isOpen);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            className: (Layout_module_default()).header,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: (Layout_module_default()).navbar,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: logo,
                            alt: "logo",
                            width: 140,
                            height: 55
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: isOpen === false ? (Layout_module_default()).navmenu : (Layout_module_default()).navmenu + " " + (Layout_module_default()).active,
                        children: navigationRoutes.map((singleRoute, i)=>{
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(navigationLink, {
                                        href: singleRoute.url,
                                        text: singleRoute.label,
                                        image: singleRoute.image,
                                        // router={router}
                                        isMobileView: isOpen,
                                        openMenu: openMenu
                                    }, singleRoute.i),
                                    !isOpen && i + 1 != navigationRoutes.length && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "verticle_line"
                                    })
                                ]
                            });
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: `${isOpen === false ? (Layout_module_default()).hamburger : (Layout_module_default()).hamburger + " " + (Layout_module_default()).active} ${(Layout_module_default()).button}`,
                        onClick: openMenu,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (Layout_module_default()).bar
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (Layout_module_default()).bar
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (Layout_module_default()).bar
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./component/layout.js



function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    marginTop: "130px"
                },
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    });
};

;// CONCATENATED MODULE: ./pages/_app.js




 // import Font Awesome CSS





fontawesome_svg_core_namespaceObject.config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
(external_axios_default()).defaults.baseURL = "http://localhost:4000";
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5800:
/***/ (() => {



/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,675,505,664], () => (__webpack_exec__(3089)));
module.exports = __webpack_exports__;

})();