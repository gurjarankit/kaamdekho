//Job By City
import DelhiImg from "../../assets/city_images/delhi.svg"
import MumbaiImg from "../../assets/city_images/mumbai.svg"
import BengaluruImg from "../../assets/city_images/bengaluru.svg"
import ChennaiImg from "../../assets/city_images/chennai.svg"
import KolkataImg from "../../assets/city_images/kolkata.svg"
import HyderabadImg from "../../assets/city_images/hyderabad.svg"
import PuneImg from "../../assets/city_images/pune.svg"
import AhemdabadImg from "../../assets/city_images/ahemdabad.svg"
import JaipurImg from "../../assets/city_images/jaipur.svg"
import LucknowImg from "../../assets/city_images/lucknow.svg"
import Slider from "react-slick";

import JobCard from '../../layout/JobCard'
import { Component, useEffect, useState } from "react"

import {jobCardArray,cardArray,jobCardByCategoryArray} from '../../constant/constant';
import axios from 'axios'

import Blog from '../blogs'
import Carousel from '../carousel'
import About from '../about'
import CompareJob from '../compare-job'
import Wtsup from '../kam_dekho_wtsup'



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  state = {
    activePage : 1,
    highestSalaryJobs : [],
    highestSalaryJobsSplitArray : [],
    PopularJobCardData: [],
    highestSalaryJobsOverAllArray : [],
    PopularJobOverAllArray: [],
    nextPage: 0,
  }

  componentDidMount(){
    // this.fetchApi();
    let localHighestSalary = this.props.highestSalaryJobs.slice(0, 8)
    let localPopularJobCardData = this.props.localPopularJobArray.slice(0, 8)
    
    let lastPage = (this.props.highestSalaryJobs.length/8).toFixed();
    let localHighestSalaryJobsSplitArray = [];
    for(let i=0 ; i<lastPage ; i++){
      let sliceData = this.props.highestSalaryJobs.slice(i*8, ((i+1)*8))
      localHighestSalaryJobsSplitArray.push(sliceData)
    }
    console.log("lastPage",lastPage);
    console.log("localHighestSalaryJobsSplitArray",localHighestSalaryJobsSplitArray);
    this.setState({
      highestSalaryJobs: localHighestSalary,
      PopularJobCardData: localPopularJobCardData,
      highestSalaryJobsOverAllArray: this.props.highestSalaryJobs,
      PopularJobOverAllArray: this.props.localPopularJobArray,
      highestSalaryJobsSplitArray: localHighestSalaryJobsSplitArray
    })
  }

  fetchApi =async () => {
    let highestJobResponse = axios.get("/api/dashboard/list")
    let popularJobResponse = axios.get("/api/dashboard/keywordAndCountJobs")

    Promise.all([highestJobResponse,popularJobResponse]).then(async (responses)=>{
      console.log("Response",responses);
      //Response one data(Highest Salary jobs)
      let data1 = responses[0].data.data
      let highestSalaryJobs = [];
      let index = 0
      data1.forEach((element,i)=>{
        if(index==7) index = 0
        else index++ 
          let localPopularJob = { 
            jobIcon:jobCardArray[index].jobIcon, 
            locationIcon:jobCardArray[index].locationIcon, 
            experienceIcon:jobCardArray[index].experienceIcon, 
            jobName:element.title,
            jobLocationHead:element.placeholders.location,
            salaryRange:element.placeholders.salary,
            jobLocationBottom:element.placeholders.location,
            jobExperience:element.placeholders.experience,
            postedJob:element.footerPlaceholderLabel,
            backgroundColor:jobCardArray[index].backgroundColor
          }
          highestSalaryJobs.push(localPopularJob)
      }) 
      console.log("highestSalary job component did mount",highestSalaryJobs); 
      let localHighestSalary = highestSalaryJobs.slice(0, 8)

      //Response two data(Popular jobs)
      let localPopularJobs = responses[1].data.data
      console.log("localPopularJobs",localPopularJobs);
      let popularJobindex = 0
      let localPopularJobArray = []
      localPopularJobs.forEach((element)=>{
        if(popularJobindex==7) popularJobindex = 0
        else popularJobindex++ 
        let populaJobObj = { 
          url: cardArray[popularJobindex].url, 
          keywordName: element.keyword,
          totalJob: element.totalJobs,
          height:0, 
          width:0,
          backgroundColor: cardArray[popularJobindex].backgroundColor
        }
        localPopularJobArray.push(populaJobObj)
      })
      let localPopularJobCardData = localPopularJobArray.slice(0, 8)

      this.setState({
        highestSalaryJobs: localHighestSalary,
        PopularJobCardData: localPopularJobCardData,
        highestSalaryJobsOverAllArray: highestSalaryJobs,
        PopularJobOverAllArray: localPopularJobArray
      })
    }).catch((error)=>console.log("error",error))
  }

  //Pagination page change
  handlePageChange = (pageNumber) => {
    let startIndex = pageNumber*8-8;
    let endIndex = pageNumber*8;
    this.setState({
      highestSalaryJobs: this.state.highestSalaryJobsOverAllArray.slice(startIndex,endIndex),
      activePage: pageNumber
    })
  }

  //next card
  nextCard = (e) => {
    let overAllPopularJobLength = this.state.highestSalaryJobsOverAllArray.length;
    let lastPage = (this.state.highestSalaryJobsOverAllArray.length/8).toFixed();
    let currentPage = this.state.activePage;
    let nextPage = currentPage+1;
    console.log("overAllPopularJobLength",overAllPopularJobLength);
    console.log("lastPage",lastPage);
    console.log("currentPage",currentPage);
    console.log("nextPage",nextPage);
    if(nextPage <= lastPage){
      this.handlePageChange(nextPage);
    }
  }

  //slider change
  next() {
    console.log("this.slider",this.slider);
    this.slider.slickNext();
  }
  previous() {
    console.log("this.slider",this.slider);
    this.slider.slickPrev();
  }

  render(){
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      // accessibility: true,
      arrows:false,
      slidesToScroll: 1,
      beforeChange: (current, next) =>{
        this.setState({ nextPage: next })
      },
      afterChange: current => {
        // this.setState({ nextPage: next })
      }
    };
    return (
      <>
        <div className="mt-5">
          <div className="d-flex justify-content-center input-div">
            <input type="text" style={{marginRight:"20px"}} className="search_input" placeholder="Search Job" />
            <input type="text" style={{marginLeft:"40px"}} className="search_input location_input" placeholder="Location" />
          </div>
          {
            this.state.PopularJobCardData.length != 0 ? <JobCard isCardWithImage={true} col={4} heading={"MOST POPULAR JOBS"} applyGradient={true} cardData={this.state.PopularJobCardData} />:
            <JobCard isCardWithImage={true} col={4} heading={"MOST POPULAR JOBS"} applyGradient={true} cardData={cardArray} />
          }
          <hr />
          <div className="">
          <Slider ref={c => (this.slider = c)} {...settings}>
            {this.state.highestSalaryJobsSplitArray.map(function(slideCardData, i) {
              return (
                <JobCard key={i} isCardWithImage={false} col={4} heading={"JOBS WITH HEIGHEST SALARIES"} applyGradient={true} cardData={slideCardData}/>
              );
            })}
          </Slider>
          </div>
          <div className="mx-5 px-3 d-flex justify-content-between">
            <button disabled={this.state.nextPage == 0 || this.state.highestSalaryJobsSplitArray.length <= 1} className="prev-btn" onClick={this.previous}>
              &laquo; Previous
            </button>
            <button disabled={this.state.nextPage == this.state.highestSalaryJobsSplitArray.length-1 || this.state.highestSalaryJobsSplitArray.length <= 1} className="next-btn" onClick={this.next}>
              Next &raquo;
            </button>
          </div>
          <hr />
          <JobCard isCardWithImage={false} col={5} heading={"JOBS OF DIFFERENT CATEGORY"} applyGradient={true} cardData={jobCardByCategoryArray}/>
          <hr />
          <JobCard isCardWithImage={true} col={5} heading={"JOBS BY CITY"} applyGradient={false} cardData={[{url: DelhiImg,label: "DELHI"},{url: MumbaiImg,label: "MUMBAI"},{url: BengaluruImg,label: "BENGALURU"},{url: ChennaiImg,label: "CHENNAI"},{url: KolkataImg,label: "KOLKATA"},{url: HyderabadImg,label: "HYDERABAD"},{url: PuneImg,label: "PUNE"},{url: AhemdabadImg,label: "AHMEDABAD"},{url: JaipurImg,label: "JAIPUR"},{url: LucknowImg,label: "LUCKNOW"}]}/>
        </div>
        <hr />
        <Carousel />
        <hr />
        <div className="d-flex justify-content-center mt-5">
            <h5 style={{color:"gray"}}>COMPARE JOB</h5>
        </div>
        <CompareJob />
        <hr />
        <Blog />
        <hr />
        <Wtsup />
        <hr />
        <div  className="my-5"></div>
        <About />
        <div  className="my-5"></div>
        {/* <hr /> */}
      </>
    )
  }
}
