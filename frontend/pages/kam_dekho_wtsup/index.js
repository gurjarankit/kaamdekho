import Image from 'next/image'
import aboutLogo from "../../assets/images/about_logo.svg"

const kam_dekho_wtsup = (props) => {
    return (
        <>
            <div className='d-flex justify-content-center'>
                <div className="wtsup my-5 py-5 h-100">
                    <div className="d-flex justify-content-between mx-5 align-items-center" >
                        <div className='about-child-image h-100 d-flex justify-content-center'>
                            <Image src={aboutLogo} alt={aboutLogo} />
                        </div>
                        <div className='mx-2'></div>
                        <div className='' >
                            <div className="">
                                <h1 className='wtsup-heading'>Kaam Dekho</h1>
                                <h1 className='wtsup-heading'> on whatsaap</h1>
                            </div>
                            <div className="d-flex justify-content-center"> 
                                <input className="input pt-4 w-100"  placeholder="your no." type="text" />
                            </div>
                            <div className="d-flex justify-content-center">
                                <input className="input pt-4 w-100"  placeholder="Designation looking" type="text" />
                            </div>
                            <div className="d-flex justify-content-center">
                                <input className="input pt-4 w-100"  placeholder="Salary Expectation" type="text" />
                            </div>
                            <div className="d-flex justify-content-center">
                                <input className="input pt-4 w-100"  placeholder="Location" type="text" />
                            </div>
                            <div className='d-flex justify-content-center mt-5'>
                                <button  className="next-btn">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default kam_dekho_wtsup;