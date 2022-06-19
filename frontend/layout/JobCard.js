import Image from 'next/image'
import { useEffect, useState } from 'react'
import MakeGradient from './MakeGradient'
import SalaryCard from './SalaryCard'
import Link from 'next/link';

export default function JobCard(props){
    return <>
        <div className="d-flex justify-content-center mt-5">
            <h5 style={{color:"gray"}}>{props.heading}</h5>
        </div>
        <div className=" mx-5 d-flex justify-content-center mt-2">
                {props.col == 4 ?   !props.isCardWithImage ?
                <div className="row col-md-12">
                {props.cardData.map((data,i)=>{
                    return (
                        <div key={i} className="col-md-3 p-3">
                            <SalaryCard data={data} index={i}/>
                        </div>
                    )
                })} </div>:
                <div className="row col-md-12"> 
                {props.cardData.map((data,i)=>{
                    let height = data.height ? data.height : 0;
                    let width = data.width ? data.width : 0;
                    return (
                        <Link href={{pathname: "/home/job",query: {keywordName:data.keywordName}}}>
                            <div key={i} className="col-md-3 p-3">
                                <div className={`d-flex salary-card`} style={MakeGradient(data.backgroundColor)}>
                                    <div style={{margin:"0px",width:"60%"}}>
                                        <Image src={data.url}  alt={`img${i}`} height={height} width={width}/>
                                    </div>
                                    <div className={`d-flex align-items-center`} style={{width:"40%"}}>
                                        <div className='w-100'>
                                            <span  style={{fontWeight:"500"}}>{data.keywordName}</span><br/>
                                            <span  style={{fontSize:"8px",position:"absolute"}}>{`${data.totalJob}  jobs`}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}</div>:
                !props.isCardWithImage ?
                <div className="row col-md-12">
                {props.cardData.map((data,i)=>{
                    return (
                        <div key={i} className="col-md-2 mt-4">
                            <div className={`d-flex job-card-by-category `} style={MakeGradient(data.backgroundColor)}>
                                <div className='p-4 text-center'>
                                    <Image src={data.categoryJobImg} alt="category" height={150} width={142}/>
                                    <div className='category-child'>
                                        <h3>{data.jobName}</h3>
                                        <span>{data.totalJobs}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}</div>:
                <div className="row col-md-12">
                {props.cardData.map((data,i)=>{
                    return ( 
                            <div key={i} className="col-md-2 px-4 text-center city-wise-card-style" > 
                                <Image  src={data.url}  alt={`img${i}`}  height={110} width={110}/>
                                <span style={{fontWeight:"bold"}}>{data?.label}</span>
                            </div>
                        )
                })
                }
                </div>
                }
        </div>
    </>
}