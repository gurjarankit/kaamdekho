import React from 'react';
import MakeGradient from '../../layout/MakeGradient'
import Image from 'next/image'
import aboutLogo from "../../assets/images/about_logo.svg"

const cardArray = [
    { 
      jobTitle:"India's most Amazing Vacation Rentals",
      backgroundColor:[
        {degree:"136",color:"rgb(49 57 229)",percent:"53"},
        {degree:"233",color:"rgb(255 109 197)",percent:"48"},
        {degree:"313",color:"rgb(255, 90, 0)",percent:"111"},
        {degree:"39",color:"rgb(30 39 156)",percent:"231"}
      ] 
    },
    { 
        jobTitle:"India's most Amazing Vacation Rentals",
        backgroundColor:[
          {degree:"136",color:"rgb(40 48 233)",percent:"63"},
          {degree:"233",color:"rgb(255 109 197)",percent:"48"},
          {degree:"313",color:"rgb(255, 90, 0)",percent:"111"},
          {degree:"39",color:"rgb(30 39 156)",percent:"231"}
        ] 
    },
    { 
        jobTitle:"India's most Amazing Vacation Rentals",
        backgroundColor:[
          {degree:"136",color:"rgb(40 48 233)",percent:"63"},
          {degree:"233",color:"rgb(255 109 197)",percent:"48"},
          {degree:"313",color:"rgb(255, 90, 0)",percent:"111"},
          {degree:"39",color:"rgb(30 39 156)",percent:"231"}
        ] 
    },
    { 
        jobTitle:"India's most Amazing Vacation Rentals",
        backgroundColor:[
          {degree:"136",color:"rgb(40 48 233)",percent:"63"},
          {degree:"233",color:"rgb(255 109 197)",percent:"48"},
          {degree:"313",color:"rgb(255, 90, 0)",percent:"111"},
          {degree:"39",color:"rgb(30 39 156)",percent:"231"}
        ] 
    },
    { 
        jobTitle:"India's most Amazing Vacation Rentals",
        backgroundColor:[
          {degree:"136",color:"rgb(40 48 233)",percent:"63"},
          {degree:"233",color:"rgb(255 109 197)",percent:"48"},
          {degree:"313",color:"rgb(255, 90, 0)",percent:"111"},
          {degree:"39",color:"rgb(30 39 156)",percent:"231"}
        ] 
    },
    { 
        jobTitle:"India's most Amazing Vacation Rentals",
        backgroundColor:[
          {degree:"136",color:"rgb(40 48 233)",percent:"63"},
          {degree:"233",color:"rgb(255 109 197)",percent:"48"},
          {degree:"313",color:"rgb(255, 90, 0)",percent:"111"},
          {degree:"39",color:"rgb(30 39 156)",percent:"231"}
        ] 
    },
  ]

const Card = (cardData) => {
    return(
        <div className="d-flex justify-content-center mt-5">
            <div className="row col-md-12">
                {cardData.cardDetail.map((data,i)=>{
                    return (
                        <div key={i} className="col-md-4 py-2 px-3 ">
                            <div className={`job-card-blogs `} style={MakeGradient(data.backgroundColor)}>
                                <div className='h-75 p-3'>
                                    <h1 style={{fontWeight:"bold"}}>{data.jobTitle}</h1>
                                </div>
                                <div className='h-25 mt-3 px-3'>
                                    <button className='tab-to-see-btn'>
                                        tab to see                                           
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
} 
const Blogs = (props) => {
    return (
        <div className='blogs-parent'>
            <div>
                <div className="blogs">
                    <div className="d-flex justify-content-between px-3 mx-2 align-items-center blog-inner">
                       <div className='about-child-image h-100 d-flex justify-content-center'>
                           <Image src={aboutLogo} alt={aboutLogo}/>
                       </div>
                       <div>
                            <h1 className="blogs-size">Blogs</h1>
                        </div>
                    </div>
                </div>
            </div>
             <div>
                 <Card cardDetail={cardArray}/>
             </div>
        </div>
    );
}

export default Blogs;