import { useState } from "react"
// import { useRouter } from "next/router";
import Link from 'next/link';
import Image from 'next/image';
import styles from "../styles/Layout.module.css"

import logo from "../assets/images/logo.svg"
import blogs from "../assets/images/blogs.svg"
import shortListJob from "../assets/images/shortlist_job.svg"
import comparejob from "../assets/images/comparejob.svg"
import jobs from "../assets/images/jobs.svg"
import search from "../assets/images/search.svg"

import NavigationLink from "./navigationLink";

const navigationRoutes = [
    {
        url:"/",
        label:"Shortlisted  jobs",
        image: {
            imgUrl: shortListJob,
            width:85,
            height:35,
        }
    },
    {
        url:"/blogs",
        label:"Blogs",
        image: {
            imgUrl: blogs,
            width:40,
            height:35,
        }
    },
    {
        url:"/",
        label:"Jobs",
        image: {
            imgUrl: jobs,
            width:38,
            height:34,
        }
    },
    {
        url:"/home/job",
        label:"Search Jobs",
        image: {
            imgUrl: search,
            width:50,
            height:35,
        }
    },
    {
        url:"/compare-job",
        label:"Compare Jobs",
        image: {
            imgUrl: comparejob,
            width:60,
            height:35,
        }
    },
    {
        url:"/about",
        label:"About Us",
        image: {
            imgUrl: comparejob,
            width:50,
            height:35,
        }
    }
];
export default function Navbar(){
    // const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => {
        setIsOpen(!isOpen);
    }
    return <>
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Link href="/">
                        <Image src={logo} alt="logo" width={140} height={55} /> 
                </Link>
                <div className={isOpen === false ? styles.navmenu : styles.navmenu +' '+ styles.active}>
                    {navigationRoutes.map((singleRoute, i) => {
                        return (
                            <>
                                <NavigationLink
                                    key={singleRoute.i}
                                    href={singleRoute.url}
                                    text={singleRoute.label}
                                    image={singleRoute.image}
                                    // router={router}
                                    isMobileView={isOpen}
                                    openMenu={openMenu}
                                />
                                {!isOpen && (i+1) != navigationRoutes.length && <div className='verticle_line'></div>}
                            </>
                        );
                    })}
                </div>
                <button className={`${isOpen === false ? styles.hamburger : styles.hamburger +' '+styles.active} ${styles.button}`} onClick={openMenu}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </nav>
        </header>
    </>
}
