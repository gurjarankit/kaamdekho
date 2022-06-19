"use strict";
exports.id = 441;
exports.ids = [441];
exports.modules = {

/***/ 2441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./assets/city_images/delhi.svg
/* harmony default export */ const delhi = ({"src":"/_next/static/media/delhi.a9d0e0fc.svg","height":109,"width":125});
;// CONCATENATED MODULE: ./assets/city_images/mumbai.svg
/* harmony default export */ const mumbai = ({"src":"/_next/static/media/mumbai.d686d317.svg","height":109,"width":125});
;// CONCATENATED MODULE: ./assets/city_images/bengaluru.svg
/* harmony default export */ const bengaluru = ({"src":"/_next/static/media/bengaluru.159562a7.svg","height":109,"width":125});
;// CONCATENATED MODULE: ./assets/city_images/chennai.svg
/* harmony default export */ const chennai = ({"src":"/_next/static/media/chennai.e5ffedc6.svg","height":109,"width":125});
;// CONCATENATED MODULE: ./assets/city_images/kolkata.svg
/* harmony default export */ const kolkata = ({"src":"/_next/static/media/kolkata.7c246dc0.svg","height":109,"width":110});
;// CONCATENATED MODULE: ./assets/city_images/hyderabad.svg
/* harmony default export */ const hyderabad = ({"src":"/_next/static/media/hyderabad.82b5db34.svg","height":109,"width":125});
;// CONCATENATED MODULE: ./assets/city_images/pune.svg
/* harmony default export */ const pune = ({"src":"/_next/static/media/pune.3d7b408c.svg","height":109,"width":110});
;// CONCATENATED MODULE: ./assets/city_images/ahemdabad.svg
/* harmony default export */ const ahemdabad = ({"src":"/_next/static/media/ahemdabad.16dd14ad.svg","height":109,"width":125});
;// CONCATENATED MODULE: ./assets/city_images/jaipur.svg
/* harmony default export */ const jaipur = ({"src":"/_next/static/media/jaipur.55e1361f.svg","height":109,"width":125});
;// CONCATENATED MODULE: ./assets/city_images/lucknow.svg
/* harmony default export */ const lucknow = ({"src":"/_next/static/media/lucknow.43e53414.svg","height":109,"width":125});
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./layout/MakeGradient.js
var MakeGradient = __webpack_require__(5653);
// EXTERNAL MODULE: ./layout/SalaryCard.js
var SalaryCard = __webpack_require__(6782);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./layout/JobCard.js






function JobCard(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "d-flex justify-content-center mt-5",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                    style: {
                        color: "gray"
                    },
                    children: props.heading
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " mx-5 d-flex justify-content-center mt-2",
                children: props.col == 4 ? !props.isCardWithImage ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row col-md-12",
                    children: [
                        props.cardData.map((data, i)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-3 p-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(SalaryCard/* default */.Z, {
                                    data: data,
                                    index: i
                                })
                            }, i);
                        }),
                        " "
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row col-md-12",
                    children: props.cardData.map((data, i)=>{
                        let height = data.height ? data.height : 0;
                        let width = data.width ? data.width : 0;
                        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: {
                                pathname: "/home/job",
                                query: {
                                    keywordName: data.keywordName
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-3 p-3",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `d-flex salary-card`,
                                    style: (0,MakeGradient/* default */.Z)(data.backgroundColor),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            style: {
                                                margin: "0px",
                                                width: "60%"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: data.url,
                                                alt: `img${i}`,
                                                height: height,
                                                width: width
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `d-flex align-items-center`,
                                            style: {
                                                width: "40%"
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "w-100",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        style: {
                                                            fontWeight: "500"
                                                        },
                                                        children: data.keywordName
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        style: {
                                                            fontSize: "8px",
                                                            position: "absolute"
                                                        },
                                                        children: `${data.totalJob}  jobs`
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }, i)
                        });
                    })
                }) : !props.isCardWithImage ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row col-md-12",
                    children: props.cardData.map((data, i)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-2 mt-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `d-flex job-card-by-category `,
                                style: (0,MakeGradient/* default */.Z)(data.backgroundColor),
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "p-4 text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: data.categoryJobImg,
                                            alt: "category",
                                            height: 150,
                                            width: 142
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "category-child",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    children: data.jobName
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: data.totalJobs
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }, i);
                    })
                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row col-md-12",
                    children: props.cardData.map((data, i)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-md-2 px-4 text-center city-wise-card-style",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: data.url,
                                    alt: `img${i}`,
                                    height: 110,
                                    width: 110
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    style: {
                                        fontWeight: "bold"
                                    },
                                    children: data === null || data === void 0 ? void 0 : data.label
                                })
                            ]
                        }, i);
                    })
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./constant/constant.js + 11 modules
var constant = __webpack_require__(3098);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./pages/blogs/index.js
var blogs = __webpack_require__(5747);
// EXTERNAL MODULE: ./pages/carousel/index.js
var carousel = __webpack_require__(7148);
// EXTERNAL MODULE: ./pages/about/index.js
var about = __webpack_require__(8822);
// EXTERNAL MODULE: ./pages/compare-job/index.js + 1 modules
var compare_job = __webpack_require__(3082);
// EXTERNAL MODULE: ./pages/kam_dekho_wtsup/index.js
var kam_dekho_wtsup = __webpack_require__(3572);
;// CONCATENATED MODULE: ./pages/home/index.js

//Job By City




















class Home extends external_react_.Component {
    constructor(props){
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    state = {
        activePage: 1,
        highestSalaryJobs: [],
        highestSalaryJobsSplitArray: [],
        PopularJobCardData: [],
        highestSalaryJobsOverAllArray: [],
        PopularJobOverAllArray: [],
        nextPage: 0
    };
    componentDidMount() {
        // this.fetchApi();
        let localHighestSalary = this.props.highestSalaryJobs.slice(0, 8);
        let localPopularJobCardData = this.props.localPopularJobArray.slice(0, 8);
        let lastPage = (this.props.highestSalaryJobs.length / 8).toFixed();
        let localHighestSalaryJobsSplitArray = [];
        for(let i = 0; i < lastPage; i++){
            let sliceData = this.props.highestSalaryJobs.slice(i * 8, (i + 1) * 8);
            localHighestSalaryJobsSplitArray.push(sliceData);
        }
        console.log("lastPage", lastPage);
        console.log("localHighestSalaryJobsSplitArray", localHighestSalaryJobsSplitArray);
        this.setState({
            highestSalaryJobs: localHighestSalary,
            PopularJobCardData: localPopularJobCardData,
            highestSalaryJobsOverAllArray: this.props.highestSalaryJobs,
            PopularJobOverAllArray: this.props.localPopularJobArray,
            highestSalaryJobsSplitArray: localHighestSalaryJobsSplitArray
        });
    }
    fetchApi = async ()=>{
        let highestJobResponse = external_axios_default().get("/api/dashboard/list");
        let popularJobResponse = external_axios_default().get("/api/dashboard/keywordAndCountJobs");
        Promise.all([
            highestJobResponse,
            popularJobResponse
        ]).then(async (responses)=>{
            console.log("Response", responses);
            //Response one data(Highest Salary jobs)
            let data1 = responses[0].data.data;
            let highestSalaryJobs = [];
            let index = 0;
            data1.forEach((element, i)=>{
                if (index == 7) index = 0;
                else index++;
                let localPopularJob = {
                    jobIcon: constant/* jobCardArray */.K3[index].jobIcon,
                    locationIcon: constant/* jobCardArray */.K3[index].locationIcon,
                    experienceIcon: constant/* jobCardArray */.K3[index].experienceIcon,
                    jobName: element.title,
                    jobLocationHead: element.placeholders.location,
                    salaryRange: element.placeholders.salary,
                    jobLocationBottom: element.placeholders.location,
                    jobExperience: element.placeholders.experience,
                    postedJob: element.footerPlaceholderLabel,
                    backgroundColor: constant/* jobCardArray */.K3[index].backgroundColor
                };
                highestSalaryJobs.push(localPopularJob);
            });
            console.log("highestSalary job component did mount", highestSalaryJobs);
            let localHighestSalary = highestSalaryJobs.slice(0, 8);
            //Response two data(Popular jobs)
            let localPopularJobs = responses[1].data.data;
            console.log("localPopularJobs", localPopularJobs);
            let popularJobindex = 0;
            let localPopularJobArray = [];
            localPopularJobs.forEach((element)=>{
                if (popularJobindex == 7) popularJobindex = 0;
                else popularJobindex++;
                let populaJobObj = {
                    url: constant/* cardArray */.wC[popularJobindex].url,
                    keywordName: element.keyword,
                    totalJob: element.totalJobs,
                    height: 0,
                    width: 0,
                    backgroundColor: constant/* cardArray */.wC[popularJobindex].backgroundColor
                };
                localPopularJobArray.push(populaJobObj);
            });
            let localPopularJobCardData = localPopularJobArray.slice(0, 8);
            this.setState({
                highestSalaryJobs: localHighestSalary,
                PopularJobCardData: localPopularJobCardData,
                highestSalaryJobsOverAllArray: highestSalaryJobs,
                PopularJobOverAllArray: localPopularJobArray
            });
        }).catch((error)=>console.log("error", error)
        );
    };
    //Pagination page change
    handlePageChange = (pageNumber)=>{
        let startIndex = pageNumber * 8 - 8;
        let endIndex = pageNumber * 8;
        this.setState({
            highestSalaryJobs: this.state.highestSalaryJobsOverAllArray.slice(startIndex, endIndex),
            activePage: pageNumber
        });
    };
    //next card
    nextCard = (e)=>{
        let overAllPopularJobLength = this.state.highestSalaryJobsOverAllArray.length;
        let lastPage = (this.state.highestSalaryJobsOverAllArray.length / 8).toFixed();
        let currentPage = this.state.activePage;
        let nextPage = currentPage + 1;
        console.log("overAllPopularJobLength", overAllPopularJobLength);
        console.log("lastPage", lastPage);
        console.log("currentPage", currentPage);
        console.log("nextPage", nextPage);
        if (nextPage <= lastPage) {
            this.handlePageChange(nextPage);
        }
    };
    //slider change
    next() {
        console.log("this.slider", this.slider);
        this.slider.slickNext();
    }
    previous() {
        console.log("this.slider", this.slider);
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            // accessibility: true,
            arrows: false,
            slidesToScroll: 1,
            beforeChange: (current, next)=>{
                this.setState({
                    nextPage: next
                });
            },
            afterChange: (current)=>{
            // this.setState({ nextPage: next })
            }
        };
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mt-5",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "d-flex justify-content-center input-div",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    style: {
                                        marginRight: "20px"
                                    },
                                    className: "search_input",
                                    placeholder: "Search Job"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    style: {
                                        marginLeft: "40px"
                                    },
                                    className: "search_input location_input",
                                    placeholder: "Location"
                                })
                            ]
                        }),
                        this.state.PopularJobCardData.length != 0 ? /*#__PURE__*/ jsx_runtime_.jsx(JobCard, {
                            isCardWithImage: true,
                            col: 4,
                            heading: "MOST POPULAR JOBS",
                            applyGradient: true,
                            cardData: this.state.PopularJobCardData
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(JobCard, {
                            isCardWithImage: true,
                            col: 4,
                            heading: "MOST POPULAR JOBS",
                            applyGradient: true,
                            cardData: constant/* cardArray */.wC
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                                ref: (c)=>this.slider = c
                                ,
                                ...settings,
                                children: this.state.highestSalaryJobsSplitArray.map(function(slideCardData, i) {
                                    return /*#__PURE__*/ jsx_runtime_.jsx(JobCard, {
                                        isCardWithImage: false,
                                        col: 4,
                                        heading: "JOBS WITH HEIGHEST SALARIES",
                                        applyGradient: true,
                                        cardData: slideCardData
                                    }, i);
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mx-5 px-3 d-flex justify-content-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    disabled: this.state.nextPage == 0 || this.state.highestSalaryJobsSplitArray.length <= 1,
                                    className: "prev-btn",
                                    onClick: this.previous,
                                    children: "\xab Previous"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    disabled: this.state.nextPage == this.state.highestSalaryJobsSplitArray.length - 1 || this.state.highestSalaryJobsSplitArray.length <= 1,
                                    className: "next-btn",
                                    onClick: this.next,
                                    children: "Next \xbb"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(JobCard, {
                            isCardWithImage: false,
                            col: 5,
                            heading: "JOBS OF DIFFERENT CATEGORY",
                            applyGradient: true,
                            cardData: constant/* jobCardByCategoryArray */.z_
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(JobCard, {
                            isCardWithImage: true,
                            col: 5,
                            heading: "JOBS BY CITY",
                            applyGradient: false,
                            cardData: [
                                {
                                    url: delhi,
                                    label: "DELHI"
                                },
                                {
                                    url: mumbai,
                                    label: "MUMBAI"
                                },
                                {
                                    url: bengaluru,
                                    label: "BENGALURU"
                                },
                                {
                                    url: chennai,
                                    label: "CHENNAI"
                                },
                                {
                                    url: kolkata,
                                    label: "KOLKATA"
                                },
                                {
                                    url: hyderabad,
                                    label: "HYDERABAD"
                                },
                                {
                                    url: pune,
                                    label: "PUNE"
                                },
                                {
                                    url: ahemdabad,
                                    label: "AHMEDABAD"
                                },
                                {
                                    url: jaipur,
                                    label: "JAIPUR"
                                },
                                {
                                    url: lucknow,
                                    label: "LUCKNOW"
                                }
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                /*#__PURE__*/ jsx_runtime_.jsx(carousel["default"], {}),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "d-flex justify-content-center mt-5",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        style: {
                            color: "gray"
                        },
                        children: "COMPARE JOB"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(compare_job["default"], {}),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                /*#__PURE__*/ jsx_runtime_.jsx(blogs["default"], {}),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                /*#__PURE__*/ jsx_runtime_.jsx(kam_dekho_wtsup["default"], {}),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "my-5"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(about["default"], {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "my-5"
                })
            ]
        });
    }
};


/***/ })

};
;