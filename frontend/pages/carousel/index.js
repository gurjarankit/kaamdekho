// import MakeGradient from '../../layout/MakeGradient'
import Image from 'next/image'
import aboutLogo from "../../assets/images/about_logo.svg"

const Carousel = (props) => {
    return (
        <div className='blogs-parent'>
            <div>
                <div className="blogs">
                    <div className="d-flex justify-content-between px-3 mx-2 align-items-center blog-inner">
                       <div className='about-child-image h-100 d-flex justify-content-center'>
                           <Image src={aboutLogo} alt={'carousel_img'}/>
                       </div>
                       <div>
                            <h1 className="blogs-size">Carousel</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;