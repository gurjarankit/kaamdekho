import Footer from "./footer";
import Navbar from "./navbar";
export default function Layout({children}){
    return <>
        <Navbar />
        <div style={{marginTop:"130px"}}>
            {children}
        </div>
        <Footer />
    </>
}
