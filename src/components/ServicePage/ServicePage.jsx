'use client'
import React from 'react';
import Link from "next/link";
import {FaArrowRightLong} from "react-icons/fa6";
import { usePathname } from 'next/navigation'
import parse from 'html-react-parser';
const ServicePage = (props) => {
    const pathname = usePathname()
    return (
        <>
            <section className="services-details">
                {/*{JSON.stringify(props['data'])}*/}
                <div className="container container-xl container-xxl">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div className="services-details__sidebar">
                                <div className="services-details__sidebar-services">
                                    <div className="title-box">
                                        <h2>All Services</h2>
                                    </div>
                                    <ul className="services-details__sidebar-services-list">
                                        {props?.services?.[0]?.submenus?.map((item) => (
                                            <li key={item.id}>
                                                <Link
                                                    className={`link ${pathname === `/${item.urlName}` ? 'active' : ''}`}
                                                    href={`/${item.urlName}`}
                                                >
                                                    {item.name}
                                                    <span><FaArrowRightLong /></span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className="services-details__content">
                                <div className="card">
                                    <div className="services-details__content-img">
                                        <img className="w-100" src={props?.['data']['img_url']} alt="image"/>
                                    </div>
                                    <div className="services-details__content-text p-4">
                                        <div className="title-box">
                                            <h2>{props?.['data']['heading_title']}</h2>
                                        </div>
                                        <div className="content-text">
                                            {parse(props?.data?.long_des || "")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicePage;