import React from 'react';
import { MdAccountBalance } from "react-icons/md";
import Link from "next/link";
import {FaArrowRight} from "react-icons/fa6";
const ServiceSection = (props) => {
    return (
        <>
            <div className="service-section">
                <div className="container container-xl container-xxl">
                    <div className="row d-flex justify-content-center">
                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                            <div className="divider">
                                <div className="sub-title-divider d-flex justify-content-center position-relative">
                                    <h5>Our Services</h5>
                                </div>
                                <div className="title text-center">
                                    <h2>Financial Solutions To Grow Business</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        {
                            props?.data?.map((item, index) => (
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6" key={index}>
                                    <div className="service-item mb-4">
                                        <div className="icon-container">
                                            <img src={item['icon_url']} alt="icon"/>
                                        </div>
                                        <div className="service-title">
                                            <h3>
                                                <Link href={`/${item?.['submenus']?.['urlName']}`}>{item['heading_title']}</Link>
                                            </h3>
                                        </div>
                                        <div className="service-text">
                                            <p>{item["short_des"]}</p>
                                        </div>
                                        <div className="service-btn">
                                            <button>
                                                <Link href={`/${item?.['submenus']?.['urlName']}`}>{item['button_text']} <span><FaArrowRight/></span></Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceSection;