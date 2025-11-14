import React from 'react';
import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
const AboutSection = (props) => {
    return (
        <>
            <div className="about-section">
                {/*{JSON.stringify(props.data)}*/}
                <div className="container container-xl container-xxl">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="about-left">
                                <div>
                                    <img className="w-100" src={props?.data?.img_url} alt={props?.data?.alt_text}/>
                                    {/*<Image*/}
                                    {/*    src="/images/about-image.png"*/}
                                    {/*    alt="logo"*/}
                                    {/*    width={545}*/}
                                    {/*    height={400}*/}
                                    {/*    sizes="100vw"*/}
                                    {/*    //className="w-auto h-auto"*/}
                                    {/*    priority*/}
                                    {/*/>*/}
                                    {/*<div className="year-content">*/}
                                    {/*    <div className="year-number">*/}
                                    {/*        <h2>10</h2>*/}
                                    {/*        <span>YEARS OF</span>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>

                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="about-right">
                                <div className="divider">
                                    <div className="sub-title-divider d-flex align-items-center position-relative">
                                        <h5>Who We Are</h5>
                                    </div>
                                    <div className="title">
                                        <h2>{props?.data?.heading_title}</h2>
                                    </div>
                                </div>
                                <div className="content-text">
                                    <p>{props?.data?.text}</p>
                                </div>
                                <div className="about-list">
                                    <ul>
                                        <li>
                                            <IoMdCheckmarkCircleOutline/>
                                            <p className="mb-0">Increase tax credits</p>
                                        </li>
                                        <li>
                                            <IoMdCheckmarkCircleOutline/>
                                            <p className="mb-0">Reduce cash spend on taxes</p>
                                        </li>
                                        <li>
                                            <IoMdCheckmarkCircleOutline/>
                                            <p className="mb-0">Sustain peace of mind</p>
                                        </li>
                                        <li>
                                            <IoMdCheckmarkCircleOutline/>
                                            <p className="mb-0">Business legal activity</p>
                                        </li>
                                        <li>
                                            <IoMdCheckmarkCircleOutline/>
                                            <p className="mb-0">Corporation tax consultant</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="about-btn">
                                    <button>
                                        <Link href="/about">{props?.data?.button_text} <span><FaArrowRight/></span></Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutSection;