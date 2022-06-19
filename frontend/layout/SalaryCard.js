import React from 'react';
import Link from 'next/link';
import MakeGradient from './MakeGradient'
import Image from 'next/image';
function SalaryCard(props) {
    const { data,index } = props;
    return (
        <>
            {/* <Link href="/home/jobDetail"> */}
                <div>
                    <div>
                        <span className='new-job'>
                            New
                        </span>
                    </div>
                    <div className={`d-flex job-card`} style={MakeGradient(data.backgroundColor)}>
                        
                        <div className='job-card-head'>
                            <Image  src={data.jobIcon} alt={`job_icon${index}`} height={30} width={30}/>
                            <div className='job-card-head-child'>
                                <Image  src={data.locationIcon} alt={`location_icon${index}`} height={20} width={20}/>
                                <span>{data.jobLocationHead}</span>
                            </div>
                        </div>
                        <div className='pb-2' style={{marginLeft:"12px",lineHeight:"1.4"}}>
                            <div className='job-type'>
                                <span className=''>{data.jobName}</span>
                            </div>
                            <div className='salary-range my-2'>
                                <span className='salary-rupee-symbol'>
                                    ₹
                                </span> 
                                <span className='salary-range-head'>
                                    {data.salaryRange}
                                </span>
                            </div>
                            <div className='my-2'>
                                <span className='job-location'>
                                    {data.jobLocationBottom}
                                </span> 
                            </div>
                            <div className=''>
                                <div className='job-experience job-location'>
                                    <Image  src={data.experienceIcon} alt={`experience_icon${index}`} height={20} width={20}/>
                                    <span className='px-2'>{data.jobExperience}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </Link> */}
            <div>
                <span className='job-posted'>{data.postedJob}</span>
                <button className="apply-job-btn">Apply on Naukri.com</button>
            </div>
        </>
    );
}

export default SalaryCard;