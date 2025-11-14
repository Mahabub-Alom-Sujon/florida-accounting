"use client"
import React from 'react';
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Typewriter from 'typewriter-effect';
const HeroSection = (props) => {
    return (
        <>
            {/*{JSON.stringify(props['data']["0"]['background_url'])}*/}
            <div className="hero-section" style={{backgroundImage: `url(${props?.['data']?.["0"]?.['background_url']})`}}>
                <div className="container container-xl container-xxl">
                    <div className="row d-flex align-items-center">
                        <div className="col-xxl-7 col-xl-7 col-lg-7">
                            <div className="slider-content">
                                <h5>{props?.['data']?.["0"]?.['subTitle']}</h5>
                                <h1>{props?.['data']?.["0"]?.['heading_title']}<br/>
                                    <span>
                                        <Typewriter
                                            options={{
                                                loop: true,
                                                delay: 75,
                                                autoStart: true,
                                                pauseFor: 1000,
                                                //strings: "Grow Your Business",
                                                strings: props['data']?.["0"]?.["typewriter"]?.map((item) => item?.text),
                                            }}
                                        />
                                    </span>
                                </h1>
                                <div className="slider-text">
                                    <p>{props?.['data']?.["0"]?.['description']}</p>
                                </div>
                            </div>
                            <div className="slider-btn mt-4">
                                <button>
                                    <Link href="/">Explore More <span><FaArrowRight/></span></Link>
                                </button>
                                <button>
                                    <Link href="/">Get in touch</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;