import React from 'react';
import Image from 'next/image';

import favouriteIcon from "../../assets/Icons/favourite.svg"
import shareIcon from "../../assets/Icons/share.svg"
import experienceIcon from "../../assets/Icons/experience.svg"
import locationIcon from "../../assets/job_images/location.svg"
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
}

function JobDetail(props) {
    const jobDetail = props.jobDetail ? props.jobDetail : staticJobDetail;
    return (
        <div className='col-md-4 job-right-Div'>
            <div className='d-flex px-3'>
                <div className="px-2 mt-2" style={{width:"120px",borderRadius:"12px",height:"130px",minWidth:'120px', background:"black", color:"white"}}>
                    <div className='d-flex' style={{position:"relative", bottom:"-100px"}}>
                        <div>
                            <Image  src={locationIcon} alt="location_icon" width={15} height={15}/>
                        </div>
                        <span  className='mx-1' style={{fontSize:"10px",color:"gray",marginTop:"4px"}}>{jobDetail.location}</span>
                    </div>
                </div>
                <div style={{paddingLeft:"15px"}}>
                    <div>
                        <h2>{jobDetail.title}</h2>
                    </div>
                    <div style={{marginTop:"-10px"}}>
                        <span style={{fontSize:"11px"}}>{jobDetail.location}</span>
                    </div>
                    <div className='d-flex'>
                        <div className=''>
                            <Image  src={experienceIcon} alt="experience_icon" width={22} height={22}/>
                        </div>
                        <span className='px-1 mt-1' style={{fontSize:"11px"}}>{jobDetail.experience}</span> 
                        <span className='px-1 mt-1' style={{fontSize:"11px"}}>|</span>
                        <span className='px-1 mt-1' style={{fontSize:"11px"}}>₹ {jobDetail.salary}</span>
                    </div>
                    <div className='row mx-0 w-100'>
                        {console.log("jobDetail.tagsAndSkills")} 
                        {jobDetail?.tagsAndSkills?.map((data,i)=>{
                            return <span key={`${i}`} className='col-sm-1 px-2 span-border' style={{margin:"2px 2px 2px 0px",minWidth:"60px",minHeight:"19px",width:"fit-content"}}>{data}</span>
                        })}
                        <div className='d-flex justify-content-center' style={{width:"fit-content"}}>
                            <Image  src={shareIcon} alt="share_icon" width={20} height={20}/>
                        </div>
                    </div>
                    <div className='mt-2 d-flex'>
                        <div className=''>
                            <Image  src={favouriteIcon} alt="favourite_icon" width={15} height={15}/>
                        </div>
                        <span className='mx-1 fw-bolder' style={{color:"red"}}> favourite</span>
                    </div>
                </div>
            </div>
            <div className='px-3'>
                <h6 className='text-primary fw-bold'>Job Description</h6>
                <p className='text-secondary' style={{fontSize:"14px"}} dangerouslySetInnerHTML={{ __html: jobDetail.jobDescription }} />
            </div>
            <div className='px-3'>
                <h6 className='fw-bold'>About Company</h6>
                <p className='text-secondary' style={{fontSize:"14px"}}>
                    {/* Hiring an Art Director for a reputed Co. located in Mumbai (kurla) */}
                </p>
            </div>
            <div className='px-3'>
                <span className='text-secondary fs-7'>Website</span>
                {/* <a href={`/${jobDetail.staticUrl}`}> */}
                    <p className='text-secondary' style={{fontSize:"14px"}}>
                        {/* {jobDetail.staticUrl} */}
                        {/* Hiring an Art Director for a reputed Co. located in Mumbai (kurla) */}
                    </p>
                {/* </a> */}
            </div>
            <div className='d-flex p-3 justify-content-around'>
                <button className="comparejob-apply-job-btn" style={{width:"50%"}}>
                    Apply on Naukri.com
                </button>
                <button className="comparejob-apply-job-btn" style={{width:"40%"}}>
                    Compare Job
                </button>
            </div>
        </div>
    );
}

export default JobDetail;