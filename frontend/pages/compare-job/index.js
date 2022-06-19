import React from 'react';
import Image from 'next/image';
import SearchIcon from '../../assets/compare_job/search_icon.svg'
const Card = (cardData) => {
    return(
        <>
        <div className="col-md-6">
            <div className="row col-md-12 mx-1">
                <div className="col-sm-6 py-1">
                    <button className="compare-job-btn w-100">
                        <div className="w-25">
                            <Image src={SearchIcon} alt='search-icon' width={25} height={50}/>
                        </div>
                        <div className='d-flex w-75' style={{flexDirection:"column"}}>
                            <span style={{fontSize:'20px'}}>Multicuisine Chef</span>
                            <span style={{fontSize:'8px'}}>ITC Maurya, New Delhi</span>
                        </div>
                    </button>
                </div>
                <div className="col-sm-6 py-1">
                    <button className="compare-job-btn w-100">
                        <div className="w-25">
                            <Image src={SearchIcon} alt='search-icon' width={25} height={50}/>
                        </div>
                        <div  className='d-flex w-75' style={{flexDirection:"column"}}>
                            <span style={{fontSize:'20px'}}>Chinease Chef</span>
                            <span style={{fontSize:'8px'}}>Taj Palace, New Delhi</span>
                        </div>
                    </button>
                </div>
            </div>
            <div className="my-5 d-flex justify-content-center">
                <div  className="outer">
                    <div className="left-job-comparison">Multi </div>
                    <div className="right-job-comparison">head chef</div>
                    <div className="center-job-comparison px-3">
                        <div className='d-flex justify-content-center' style={{height:"34px"}}>
                            <span className='span'>Designation</span> 
                        </div>
                        <div  className='span-parent'>
                            <span className='span'>Salary</span> 
                        </div>
                        <div className='span-parent'>
                            <span className='span'>Location</span> 
                        </div>
                        <div className='span-parent'>
                            <span className='span'>Minimum Requirement</span> 
                        </div>
                        <div className='span-parent'>
                            <span className='span'>Employer</span> 
                        </div>
                        <div className='span-parent'>
                            <span className='span'>Experience</span> 
                        </div>
                    </div>
                    <div className="left-job-comparison ">15000</div>
                    <div className="right-job-comparison ">22000</div>
                    <div className="left-job-comparison ">Lodhi road</div>
                    <div className="right-job-comparison">chanakya</div>
                    <div className="left-job-comparison">Graduate</div>
                    <div className="right-job-comparison">10th Pass</div>
                    <div className="left-job-comparison"></div>
                    <div className="right-job-comparison"></div>
                    <div className="left-job-comparison">3yrs</div>
                    <div className="right-job-comparison">2yrs</div>
                </div>
            </div>
            <div className="row col-sm-12 mb-5 d-flex justify-content-center">
                <div className="col-sm-4" style={{width:"fit-content"}}>
                    <button className="comparejob-apply-job-btn">
                        Apply on Naukri.com
                    </button>
                </div>
                <div className="col-sm-4" style={{width:"fit-content"}}>
                    <button className="comparejob-apply-job-btn ">
                        Apply on Naukri.com
                    </button>
                </div>
            </div>
        </div>
        
    </>
    )
} 
const CompareJob = props => {
    return (
        <div className='mt-5 mx-2 row'>
            <Card cardDetail={[]}/>
            <Card cardDetail={[]}/>
        </div>
    );
}; 

export default CompareJob;