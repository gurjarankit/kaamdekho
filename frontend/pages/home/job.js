import React, { useState, Component, useEffect } from 'react';
import Image from 'next/image';

//Job by heighest salary
import JobIcon1 from "../../assets/job_images/job_icon_1.svg"
import JobIcon2 from "../../assets/job_images/job_icon_2.svg"
import JobIcon3 from "../../assets/job_images/job_icon_3.svg"
import JobIcon4 from "../../assets/job_images/job_icon_4.svg"
import LocationIcon from "../../assets/job_images/location.svg"
import ExperienceIcon from "../../assets/job_images/experience.svg"
import MakeGradient from '../../layout/MakeGradient'
import SalaryCard from '../../layout/SalaryCard'
import {cardArray} from "../../constant/constant"
import axios from 'axios';
import { useRouter } from "next/router";
import Link from 'next/link';
// import MakeGradient from '../../layout/MakeGradient';
import JobDetail from './jobDetail';

const jobCardArray = [
    { 
      jobIcon:JobIcon1, 
      locationIcon:LocationIcon, 
      experienceIcon:ExperienceIcon, 
      jobName:"Front Desk",
      jobLocationHead:"New Delhi",
      salaryRange:"9000-10000 PM",
      jobLocationBottom:"ITC Maurya, New Delhi",
      jobExperience:"5-6 Yrs",
      postedJob:"Posted 3hrs ago",
      backgroundColor:[
        {degree:"24",color:"rgb(254 94 11)",percent:"50"},
        {degree:"89",color:"rgb(23 18 147)",percent:"91"},
        {degree:"231",color:"rgb(255 51 163)",percent:"251"},
        {degree:"300",color:"rgb(183, 105, 23)",percent:"60"}
      ] 
    },
    { 
      jobIcon:JobIcon2, 
      locationIcon:LocationIcon, 
      experienceIcon:ExperienceIcon, 
      jobName:"Front Desk",
      jobLocationHead:"New Delhi",
      salaryRange:"9000-10000 PM",
      jobLocationBottom:"ITC Maurya, New Delhi",
      jobExperience:"5-6 Yrs",
      postedJob:"Posted 3hrs ago",
      backgroundColor:[
        {degree:"24",color:"rgb(0 117 270)",percent:"50"},
        {degree:"134",color:"rgb(255, 15, 160)",percent:"91"},
        {degree:"231",color:"rgb(255, 90, 0)",percent:"68"},
        {degree:"300",color:"rgb(183 105 23)",percent:"60"},
      ] 
    },
    { 
      jobIcon:JobIcon3, 
      locationIcon:LocationIcon, 
      experienceIcon:ExperienceIcon, 
      jobName:"Front Desk",
      jobLocationHead:"New Delhi",
      salaryRange:"9000-10000 PM",
      jobLocationBottom:"ITC Maurya, New Delhi",
      jobExperience:"5-6 Yrs",
      postedJob:"Posted 3hrs ago",
      backgroundColor:[
        {degree:"263",color:"rgb(10 9 144)",percent:"77"},
        {degree:"179",color:"rgb(255, 15, 160)",percent:"91"},
        {degree:"67",color:"rgb(255, 90, 0)",percent:"68"},
        {degree:"32",color:"rgb(183, 105, 23)",percent:"60"}
      ] 
    },
    { 
      jobIcon:JobIcon4, 
      locationIcon:LocationIcon, 
      experienceIcon:ExperienceIcon, 
      jobName:"Front Desk",
      jobLocationHead:"New Delhi",
      salaryRange:"9000-10000 PM",
      jobLocationBottom:"ITC Maurya, New Delhi",
      jobExperience:"5-6 Yrs",
      postedJob:"Posted 3hrs ago",
      backgroundColor:[
        {degree:"317",color:"rgb(10, 9, 144)",percent:"51"},
        {degree:"243",color:"rgb(255, 15, 160)",percent:"79"},
        {degree:"90",color:"rgb(255, 90, 0)",percent:"105"},
        {degree:"216",color:"rgb(183, 105, 23)",percent:"80"},
      ] 
    },
    { 
      jobIcon:JobIcon1, 
      locationIcon:LocationIcon, 
      experienceIcon:ExperienceIcon, 
      jobName:"Front Desk",
      jobLocationHead:"New Delhi",
      salaryRange:"9000-10000 PM",
      jobLocationBottom:"ITC Maurya, New Delhi",
      jobExperience:"5-6 Yrs",
      postedJob:"Posted 3hrs ago",
      backgroundColor:[
        {degree:"24",color:"rgb(254 94 11)",percent:"50"},
        {degree:"89",color:"rgb(23 18 147)",percent:"91"},
        {degree:"231",color:"rgb(255 51 163)",percent:"251"},
        {degree:"300",color:"rgb(183, 105, 23)",percent:"60"}
      ] 
    },
    { 
      jobIcon:JobIcon2, 
      locationIcon:LocationIcon, 
      experienceIcon:ExperienceIcon, 
      jobName:"Front Desk",
      jobLocationHead:"New Delhi",
      salaryRange:"9000-10000 PM",
      jobLocationBottom:"ITC Maurya, New Delhi",
      jobExperience:"5-6 Yrs",
      postedJob:"Posted 3hrs ago",
      backgroundColor:[
        {degree:"24",color:"rgb(0 117 270)",percent:"50"},
        {degree:"134",color:"rgb(255, 15, 160)",percent:"91"},
        {degree:"231",color:"rgb(255, 90, 0)",percent:"68"},
        {degree:"300",color:"rgb(183 105 23)",percent:"60"},
      ] 
    }
]

// export async function getStaticProps() {
//     let highestSalaryJobs = [];
//     // let highestSalaryJobs = [];
//     console.log("inside get static props of job page");
  
//     await fetch("https://6682-2409-4043-809-45b0-dc30-324e-9c5f-e015.ngrok.io/api/dashboard/search/searchByKeyword/commi").then(async (res)=>{
//       let data = await res.json();
    
    
//       //   highestSalaryJobs = [];
//     //   console.log("data.data",data.data.length);
//     //   let index = 0
//     //   data.data.forEach((element,i)=>{
//     //     if(index==7) index = 0
//     //     else index++ 
//     //       let localPopularJob = { 
//     //         jobIcon:jobCardArray[index].jobIcon, 
//     //         locationIcon:jobCardArray[index].locationIcon, 
//     //         experienceIcon:jobCardArray[index].experienceIcon, 
//     //         jobName:element.title,
//     //         jobLocationHead:element.placeholders.location,
//     //         salaryRange:element.placeholders.salary,
//     //         jobLocationBottom:element.placeholders.location,
//     //         jobExperience:element.placeholders.experience,
//     //         postedJob:element.footerPlaceholderLabel,
//     //         backgroundColor:jobCardArray[index].backgroundColor
//     //       }
//     //       highestSalaryJobs.push(localPopularJob)
//     //   })  
//     }).catch((error)=>console.log("error",error))
//     return {
//       props:{
//         highestSalaryJobs
//       }
//     }
//   }

const Card = (props) => {
    const jobDetail = props.cardDetails.jobDetail;
    const { isMobile, cardHandler,isCardClicked } = props;

    return (
        <>
            <div className={`row col-md-12   mt-4 ${isMobile ? 'px-1  mx-0' : 'px-3 mx-0'}`}>
                {isMobile ?
                <div className='px-3 mb-3' >
                    <div className={`d-flex job-card`} style={MakeGradient([
                            {degree:"24",color:"rgb(0 117 270)",percent:"50"},
                            {degree:"134",color:"rgb(255, 15, 160)",percent:"91"},
                            {degree:"231",color:"rgb(255, 90, 0)",percent:"68"},
                            {degree:"300",color:"rgb(183 105 23)",percent:"60"},
                        ])}>
                            <div className='mt-4' >
                                <input className='bg-white mt-3 filter-location-input' type="text" placeholder='Filters'/> <br />
                                <input className='filter-location-input left-div-input-location bg-white '  type="text" placeholder='Location'/>
                            </div>
                    </div>
                </div> : null
                }
                {
                    isCardClicked && isMobile ?  <> <JobDetail jobDetail = {jobDetail} /> <hr /> </> : null  
                }

                <div className={`col-md-8 job-right-Div ${!isCardClicked ? 'w-100' : ''}`}>
                    <div className='job-hidden-card'>
                        {cardArray.map((data,i)=>{
                            if(i<5){
                                let height = data.height ? data.height : 0;
                                let width = data.width ? data.width : 0;
                                return (
                                    <div key={i} className={`${i==0 ? 'job-hidden-card-child-active' : 'job-hidden-card-child'}`} /*className={`${i==0 ? 'col-md-3' : 'col-md-2'}`}*/>
                                        <div className={`d-flex`} style={{...MakeGradient(data.backgroundColor),color: "white",borderRadius: "10px",overflow:"hidden"}}>
                                            <div style={{margin:"0px",width:"50%"}}>
                                                <Image src={data.url}  alt={`img${i}`} height={height} width={width}/>
                                            </div>
                                            <div className={`d-flex align-items-center`} style={{width:"40%"}}>
                                                <div style={{lineHeight:"1"}}>
                                                    <span  style={{fontWeight:"400"}}>{data.keywordName}</span><br/>
                                                    <span  style={{fontSize:"8px"}}>{data.totalJob}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div className='mt-4'>
                        <h2 >Front desk ka Kaam Dekho</h2>
                        <span className="left-div-span">1825 Results</span>
                    </div>
                    <div className='job-input-grid'>
                        {/* <div className="job-input-grid"> */}
                            <input className='left-div-input' type="text" placeholder='Filters'/>
                            <input className='left-div-input left-div-input-location' type="text" placeholder='Location'/>
                        {/* </div> */}
                        
                        <div className='d-flex'>
                            <div className='d-flex'> 
                                <div className='left-div-verticle-line'></div>
                                <span className='mx-2'>Jaipur</span>
                            </div>
                            <div className='d-flex'> 
                                <div className='left-div-verticle-line  mx-2'></div>
                                <span>Hilton</span>
                            </div>
                            <div className='d-flex'>
                                <div className='left-div-verticle-line  mx-2'></div>
                                <span style={{width:"max-content"}}>₹ 9000-10000</span>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className='col-md-4' style={{float:"left"}}>
                            <div>
                                <h5 className='fw-bold'>Job type</h5>
                                <div className='row mx-0 w-100'>
                                    {["Graduate","Graduate","Graduate","Graduate","Graduate","Graduate","Graduate","Graduate","Graduate","Graduate","Graduate","Graduate"].map((data,i)=>{
                                        return <span key={`${i}`} className='col-sm-1 px-2 span-border' style={{margin:"2px 2px 2px 0px",minWidth:"60px",minHeight:"19px",width:"fit-content"}}>{data}</span>
                                    })}
                                </div>
                            </div>
                            <hr />
                            <div className='mt-4'>
                                <h5 className='fw-bold'>Salary expecting</h5>
                                <div className='row mx-0 w-100'>
                                    {["Graduate","Graduate","Graduate","Graduate"].map((data,i)=>{
                                        return <span key={`${i}`} className='col-md-1 px-2 span-border' style={{margin:"2px 2px 2px 0px",minWidth:"60px",minHeight:"19px",width:"fit-content"}}>{data}</span>
                                    })}
                                </div>
                            </div>
                            <hr />
                            <div className='mt-4'>
                                <h5 className='fw-bold'>Department type</h5>
                                <div className='row mx-0 w-100'>
                                    {["Graduate","Graduate","Graduate","Graduate","Graduate","Graduate","Graduate","Graduate","Graduate","Graduate","Graduate","Graduate"].map((data,i)=>{
                                        return <span key={`${i}`} className='col-md-1 px-2 span-border' style={{margin:"2px 2px 2px 0px",minWidth:"60px",minHeight:"19px",width:"fit-content"}}>{data}</span>
                                    })}
                                </div>
                            </div>
                            <hr />
                            <div className='mt-4'>
                                <h5 className='fw-bold'>Hirers</h5>
                                <div className='row mx-0 w-100'>
                                    {["Naukri.com","Indeed","Naukri.com","Indeed","Indeed","Indeed","Indeed","Indeed","Indeed","Indeed","Indeed","Indeed"].map((data,i)=>{
                                        return <span key={`${i}`} className='col-md-1 px-2 span-border' style={{margin:"2px 2px 2px 0px",minWidth:"60px",minHeight:"19px",width:"fit-content"}}>{data}</span>
                                    })}
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className='row d-flex justify-content-center'>{
                        jobCardArray.map((data,i)=>{
                            return (
                                <div key={i} style={{width:"279px"}} onClick={()=>{cardHandler(data)}}>
                                    <SalaryCard data={data} index={i}/>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                </div>
                
                {isMobile ? <div className='my-3'></div> : null }
                {
                    isCardClicked && !isMobile ?  <JobDetail jobDetail = {jobDetail} /> : null  
                }
                
            </div>
        </>
    )
}

function Job(){
    const [cardDetails,setCardDetails] = useState({
        keywordJobArray:[],
        jobDetail:{}
    });
    const [isCardClicked, setIsCardClicked] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const router = useRouter();

    useEffect(()=>{
        const fetchApi =  async () => {
            const query = router.query;
            const keyword = query.keywordName
            console.log("query",keyword);
            if(keyword != undefined){
                axios.get(`/api/dashboard/search/searchByKeyword/${keyword}`).then((resData)=>{
                    let data = resData.data.data
                    let singleJobDetail = data[0]
                    let jobObj = {
                        title: singleJobDetail.title,
                        location: singleJobDetail.placeholders.location,
                        experience: singleJobDetail.placeholders.experience,
                        salary: singleJobDetail.placeholders.salary,
                        jobDescription: singleJobDetail.jobDescription,
                        staticUrl: singleJobDetail.staticUrl,
                        tagsAndSkills: singleJobDetail.tagsAndSkills
                    } 
                    console.log("jobObj",jobObj);
                    setCardDetails({...cardDetails, jobDetail:{}})
                }).catch((error)=>{
                    console.log("Error",error);
                })
            }
        }
        fetchApi();
        //resizing screen
        window.addEventListener("resize", handleResize)
        handleResize();
    },[])

    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 765) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }
     
    const cardHandler = (singleJobDetail) => {
        console.log("card handler",singleJobDetail);
        let jobObj = {
            title: singleJobDetail.jobName,
            location: singleJobDetail.jobLocationHead,
            experience: singleJobDetail.jobExperience,
            salary: singleJobDetail.salaryRange,
            jobDescription: "<p>To head the F&B Operations in 5 Star Hotel at Dehradun . </p><br/><p>Candidate should have the experience of handling  big banquet operations, as well as heading the fine dining restaurants experience in best brands is preferred. </p><br/><p>Immediate Joiner needs to apply only.</p><br/><br/><p>Mail Id-hr.lpv@lphotels.com </p><br/>",
            staticUrl: "lp-vilas-by-lp-hotels-a-unit-of-m-s-motel-lalit-pa-lace-jobs-careers-5813006",
            tagsAndSkills: ['restaurant', 'banquet operations']
        } 
        setCardDetails((cardDetails) =>({ ...cardDetails, jobDetail:jobObj}))
        setIsCardClicked(true);
    }

    return(
        <div>
            <Card cardDetails={cardDetails} isMobile={isMobile} cardHandler={cardHandler} isCardClicked={isCardClicked}/>
        </div>
    )
}

export default Job;