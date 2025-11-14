import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {FaAngleDown, FaArrowRightLong} from "react-icons/fa6";
const AppNavBar = (props) => {
    return (
        <>
            <div className="AppNavBar">
                {/*{JSON.stringify(props.data)}*/}
                <div className="container container-xxl container-xl">
                    <div className="row d-flex align-items-center">
                        <div className="col-xxl-2 col-xl-2 col-lg-2">
                            <Link className="navbar-brand" href="/">
                                <Image
                                    src="/images/FAA.png"
                                    alt="logo"
                                    width={100}
                                    height={50}
                                    sizes="100vw"
                                    //priority
                                />
                            </Link>
                        </div>
                        <div className="col-xxl-7 col-xl-7 col-lg-7">
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link className="nav-link" href="/">Home</Link>
                                </li>
                                {props.data?.map((item, i) => (
                                    <li key={i} className="nav-item">
                                        <Link className="nav-link" href="/">
                                            {item.name} <span><FaAngleDown /></span>
                                        </Link>
                                        {item.submenus && item.submenus.length > 0 && (
                                            <div className="Dropdown-menu">
                                                <ul className="ps-0">
                                                    {item.submenus.map((sub, j) => (
                                                        <li key={j}>
                                                            <Link href={`/${sub.urlName}`}>
                                                                <FaArrowRightLong /> {sub.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                ))}
                                <li className="nav-item">
                                    <Link className="nav-link" href="/blog">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/contact-us">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3">
                           <div className="nav-right">
                               <div className="phone-item d-flex align-items-center">
                                   <div>
                                       <img src="/images/phone.png" alt="phone"/>
                                   </div>
                                   <div className="phone-number ms-2">
                                       <Link href="tel:+17722820922">
                                            <span>+1 (772) 282-0922</span>
                                       </Link>
                                   </div>
                               </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppNavBar;