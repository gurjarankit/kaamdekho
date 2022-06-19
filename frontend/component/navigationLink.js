import Link from 'next/link';
import Image from 'next/image';


function NavigationLink({ href, text,  image, isMobileView, openMenu }) {
	// const isActive = router.asPath === (href === "/home" ? "/" : href);
    const {imgUrl, height, width, } = image;
	return (
        <>
            <Link href={href}>
                <a onClick={isMobileView ? openMenu : null} style={{textDecoration: "none",color:"black"}}>
                    <div className='text-center' style={{padding:"0rem 0.8rem"}}  role={"button"} >
                        <div>
                            <Image src={imgUrl} alt="blogs" width={width} height={height} className="pt-2"/>
                        </div>
                        <div>
                            <span style={{fontSize:"12px"}}>
                                {text}
                            </span>
                        </div>
                    </div>
                </a>
            </Link>
            {isMobileView && <br />}
        </>
	);
}

export default NavigationLink