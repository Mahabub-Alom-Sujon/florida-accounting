import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { MdPhoneInTalk } from "react-icons/md";
import {FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import {AiOutlineInstagram, AiOutlineMail} from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import {IoLocationOutline} from "react-icons/io5";
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className="footer">
                <div className="container container-xl container-xxl">
                    <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3">
                            <div className="single-widget">
                                <div className="footer-img">
                                    <Image
                                        src="/images/FAA.png"
                                        alt="logo"
                                        width={150}
                                        height={70}
                                        sizes="100vw"
                                        //priority
                                    />
                                </div>
                                <div className="content-text">
                                    <p>Our Company Provides A Full Range Of Accounting Services, From Tax Preparation To
                                        Payroll To Consulting And Everything In Between.</p>
                                </div>
                                <div className="social-media">
                                    <ul>
                                        <li>
                                            <Link href="https://www.facebook.com/Floridaaccounting" target="_blank"><FaFacebookF/></Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.linkedin.com/in/roxanascaffidi" target="_blank"><FaLinkedinIn/></Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.instagram.com/floridaaccounting" target="_blank"><AiOutlineInstagram/></Link>
                                        </li>
                                        <li>
                                            <Link href="https://x.com/fl_accounting" target="_blank"><FaTwitter/></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3">
                            <div className="single-widget">
                                <h4>Quick Menu</h4>
                                <ul>
                                    <li>
                                        <Link href="/"><span><FaArrowRightLong /></span> Client Portal</Link>
                                    </li>
                                    <li>
                                        <Link href="/"><span><FaArrowRightLong/></span> Tax Tips</Link>
                                    </li>
                                    <li>
                                        <Link href="/"><span><FaArrowRightLong /></span> Specials</Link>
                                    </li>
                                    <li>
                                        <Link href="/"> <span><FaArrowRightLong /></span> Client Resources</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3">
                            <div className="single-widget">
                                <h4>Our Services</h4>
                                <ul>
                                    <li>
                                        <Link href="/"><span><FaArrowRightLong /></span> Accounting & Bookkeeping</Link>
                                    </li>
                                    <li>
                                        <Link href="/"><span><FaArrowRightLong /></span> Payroll Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/"><span><FaArrowRightLong /></span> Tax Preparation &
                                            Planning</Link>
                                    </li>
                                    <li>
                                        <Link href="/"><span><FaArrowRightLong /></span> New Business Formation</Link>
                                    </li>
                                    <li>
                                        <Link href="/"> <span><FaArrowRightLong/></span> Strategic Business Planning</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3">
                            <div className="single-widget">
                                <h4>Contact Us</h4>
                                <ul>
                                    <li>
                                        <span><MdPhoneInTalk/></span>
                                        <p>+1 (772) 282-0922</p>
                                    </li>
                                    <li>
                                        <span><MdPhoneInTalk/></span>
                                        <p>+1 (561) 939-2553</p>
                                    </li>
                                    <li>
                                        <span><AiOutlineMail/></span>
                                        <Link href="mailto:roxana@fl-accounting.com"> roxana@fl-accounting.com</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
            <div className="container container-xl container-xxl">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12">
                            <p>Copyright &copy; {currentYear} Florida Accounting & Advisers </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;