import Image from 'next/image'
import aboutLogo from "../../assets/images/about_logo.svg"
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {CCarousel,CImage, CCarouselItem,CCarouselCaption } from '@coreui/react'

export default class About extends Component {
	render() {
		return (<>
                {/* <div className='about-mobile'>
                    <CCarousel controls indicators dark>
                        <CCarouselItem>
                            <div className='d-flex justify-content-center'>
                                <div className="about">
                                    <div className="about-child d-flex justify-content-between align-items-center">
                                        <div className='about-child-image d-flex justify-content-center'>
                                            <Image src={aboutLogo} alt={aboutLogo}/>
                                        </div>
                                        <div className='d-flex justify-content-center'>
                                            <h1 className='about-heading' >About us</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CCarouselItem>
                        <CCarouselItem>
                        <div className='d-flex justify-content-center'>
                            <div className="about">
                                <div className="about-child d-flex justify-content-between py-4 align-items-center">
                                    <div className=''>
                                        <div className='about-child-image d-flex justify-content-center'>
                                            <Image src={aboutLogo} alt={aboutLogo}/>
                                        </div>
                                    </div>
                                    <div className='mx-4'></div>
                                    <div>
                                        <p style={{fontSize:"20px",color:"white"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis-
                                        mod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                                        veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea com
                                        modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse moL
                                        orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis
                                        mod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                                        veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea com
                                        mod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim</p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        </CCarouselItem>
                        <CCarouselItem>
                        <div className='d-flex justify-content-center'>
                            <div className="about">
                                <div className="about-child d-flex justify-content-between align-items-center">
                                    <div className=''>
                                        <div className='about-child-image d-flex justify-content-center'>
                                            <Image src={aboutLogo} alt={aboutLogo}/>
                                        </div>
                                    </div>
                                    <div className='mx-2'></div>
                                    <div className=''>
                                        <h5 style={{color:"white",lineHeight:"150%"}}>
                                            Get in touch with us for any partnership and hiring-related queries <br />
                                            Address: W-15/26 Western Avenue, Sainik Farms, <br />
                                            New Delhi – 110062, 2223 First Floor, Sector 45C, Chandigarh 160047 <br />
                                            Phone: 022-26718364 / 022-26718365 <br />
                                            Email: info@hiretality.com <br />
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        </CCarouselItem>
                    </CCarousel>
                </div>	 */}
                <div className=''>
                    <div className='d-flex justify-content-center'>
                        <div className="about">
                            <div className="about-child d-flex justify-content-between align-items-center">
                                <div className='about-child-image d-flex justify-content-center'>
                                    <Image src={aboutLogo} alt={aboutLogo}/>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <h1 className='about-heading' >About us</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                        <div className="about">
                            <div className="about-child d-flex justify-content-between align-items-center py-3">
                                <div>
                                    <p style={{fontSize:"20px",color:"white"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis-
                                    mod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                                    veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea com
                                    modo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse moL
                                    orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis
                                    mod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                                    veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea com
                                    mod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                        <div className="about">
                            <div className="about-child d-flex justify-content-between align-items-center py-3">
                                <div className=''>
                                    <h5 style={{color:"white",lineHeight:"150%"}}>
                                        Get in touch with us for any partnership and hiring-related queries <br />
                                        Address: W-15/26 Western Avenue, Sainik Farms, <br />
                                        New Delhi – 110062, 2223 First Floor, Sector 45C, Chandigarh 160047 <br />
                                        Phone: 022-26718364 / 022-26718365 <br />
                                        Email: info@hiretality.com <br />
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>	
            </>

		);
	}
};