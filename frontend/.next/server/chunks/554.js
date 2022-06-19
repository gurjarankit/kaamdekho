"use strict";
exports.id = 554;
exports.ids = [554];
exports.modules = {

/***/ 7554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ jobDetail)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./assets/Icons/favourite.svg
/* harmony default export */ const favourite = ({"src":"/_next/static/media/favourite.d9244fa5.svg","height":34,"width":36});
;// CONCATENATED MODULE: ./assets/Icons/share.svg
/* harmony default export */ const share = ({"src":"/_next/static/media/share.b7f6e8b5.svg","height":51,"width":51});
;// CONCATENATED MODULE: ./assets/Icons/experience.svg
/* harmony default export */ const experience = ({"src":"/_next/static/media/experience.54a20fbc.svg","height":44,"width":59});
// EXTERNAL MODULE: ./assets/job_images/location.svg
var job_images_location = __webpack_require__(5603);
;// CONCATENATED MODULE: ./pages/home/jobDetail.js







const staticJobDetail = {
    title: "Sampling Officer",
    location: "Guwahati",
    experience: "0-1 Yrs",
    salary: "Not disclosed",
    jobDescription: "3 Sampling Officer (Female) for a Leading FMCG Company<br><br>Sampling Officer Jobs in Guwahati - Vacancy in Fresher Trainee Sampling Officer <br><br>eligibility Criteria - - experience - Freshers can <br><br>Industry Fresher Trainee Work Experience 0 - 1 Years Qualification Other Bachelor Degree",
    staticUrl: "lakshmi-north-east-solutions-jobs-careers-748083",
    tagsAndSkills: [
        "Nutrition",
        "Hotel management",
        "Commerce",
        "FMCG",
        "Home science"
    ]
};
function JobDetail(props) {
    var ref;
    const jobDetail = props.jobDetail ? props.jobDetail : staticJobDetail;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "col-md-4 job-right-Div",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "d-flex px-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "px-2 mt-2",
                        style: {
                            width: "120px",
                            borderRadius: "12px",
                            height: "130px",
                            minWidth: "120px",
                            background: "black",
                            color: "white"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "d-flex",
                            style: {
                                position: "relative",
                                bottom: "-100px"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: job_images_location/* default */.Z,
                                        alt: "location_icon",
                                        width: 15,
                                        height: 15
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "mx-1",
                                    style: {
                                        fontSize: "10px",
                                        color: "gray",
                                        marginTop: "4px"
                                    },
                                    children: jobDetail.location
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            paddingLeft: "15px"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: jobDetail.title
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    marginTop: "-10px"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    style: {
                                        fontSize: "11px"
                                    },
                                    children: jobDetail.location
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: experience,
                                            alt: "experience_icon",
                                            width: 22,
                                            height: 22
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "px-1 mt-1",
                                        style: {
                                            fontSize: "11px"
                                        },
                                        children: jobDetail.experience
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "px-1 mt-1",
                                        style: {
                                            fontSize: "11px"
                                        },
                                        children: "|"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "px-1 mt-1",
                                        style: {
                                            fontSize: "11px"
                                        },
                                        children: [
                                            "\u20B9 ",
                                            jobDetail.salary
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row mx-0 w-100",
                                children: [
                                    console.log("jobDetail.tagsAndSkills"),
                                    jobDetail === null || jobDetail === void 0 ? void 0 : (ref = jobDetail.tagsAndSkills) === null || ref === void 0 ? void 0 : ref.map((data, i)=>{
                                        return /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "col-sm-1 px-2 span-border",
                                            style: {
                                                margin: "2px 2px 2px 0px",
                                                minWidth: "60px",
                                                minHeight: "19px",
                                                width: "fit-content"
                                            },
                                            children: data
                                        }, `${i}`);
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "d-flex justify-content-center",
                                        style: {
                                            width: "fit-content"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: share,
                                            alt: "share_icon",
                                            width: 20,
                                            height: 20
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mt-2 d-flex",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: favourite,
                                            alt: "favourite_icon",
                                            width: 15,
                                            height: 15
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "mx-1 fw-bolder",
                                        style: {
                                            color: "red"
                                        },
                                        children: " favourite"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "px-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                        className: "text-primary fw-bold",
                        children: "Job Description"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-secondary",
                        style: {
                            fontSize: "14px"
                        },
                        dangerouslySetInnerHTML: {
                            __html: jobDetail.jobDescription
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "px-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                        className: "fw-bold",
                        children: "About Company"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-secondary",
                        style: {
                            fontSize: "14px"
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "px-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-secondary fs-7",
                        children: "Website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-secondary",
                        style: {
                            fontSize: "14px"
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "d-flex p-3 justify-content-around",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "comparejob-apply-job-btn",
                        style: {
                            width: "50%"
                        },
                        children: "Apply on Naukri.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "comparejob-apply-job-btn",
                        style: {
                            width: "40%"
                        },
                        children: "Compare Job"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const jobDetail = (JobDetail);


/***/ })

};
;