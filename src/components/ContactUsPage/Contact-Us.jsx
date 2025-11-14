import React from 'react';
import {FaArrowRight} from "react-icons/fa6";
import {IoLocationOutline} from "react-icons/io5";
import {AiOutlineMail} from "react-icons/ai";
import {MdPhoneInTalk} from "react-icons/md";

const ContactUs = () => {
    return (
        <>
            <div className="contact-us">
                <div className="container container-xl container-xxl">
                    <div className="row">
                        <div className="col-xl-8 col-xxl-8 col-lg-8">
                            <div className="divider">
                                <div className="sub-title-divider d-flex align-items-center position-relative">
                                    <h5>Contact Details</h5>
                                </div>
                                <div className="title">
                                    <h2>Get in Touch.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-6 col-xl-6 col-xxl-6">
                            <div className="contact-us-left">
                                <p>Gravida vulputate aliquet tempor sit. Neque sed pretium non urna sed etid aenean
                                    haretra quam placerat adipiscing penatibus aliquam adipiscing gravida elementum
                                    aliquet eget senectus felis enim diam molestie.</p>
                                <div className="address">
                                    <ul>
                                        <li>
                                            <span><IoLocationOutline/></span>
                                            <div className="ms-3">
                                                <h6 className="mb-1">Palm Beach:</h6>
                                                <p className="mb-0">980 N Federal Hwy. Suite 110, Boca Raton, FL
                                                    33432</p>
                                            </div>
                                        </li>
                                        <li>
                                            <span><IoLocationOutline/></span>
                                            <div className="ms-3">
                                                <h6 className="mb-1">Treasure Coast:</h6>
                                                <p className="mb-0">789 SW Federal Hwy Suite 201, Stuart, FL 34994</p>
                                            </div>
                                        </li>
                                        <li>
                                            <span><MdPhoneInTalk/></span>
                                            <div className="ms-3">
                                                <h6 className="mb-1">Call Us One:</h6>
                                                <p className="mb-0">+1 (772) 282-0922</p>
                                            </div>
                                        </li>
                                        <li>
                                            <span><MdPhoneInTalk/></span>
                                            <div className="ms-3">
                                                <h6 className="mb-1">Call Us Two:</h6>
                                                <p className="mb-0">+1 (561) 939-2553</p>
                                            </div>
                                        </li>
                                        <li>
                                            <span><AiOutlineMail/></span>
                                            <div className="ms-3">
                                                <h6 className="mb-1">Our Email:</h6>
                                                <p className="mb-0">roxana@fl-accounting.com</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6 col-xxl-6">
                            <div className="contact-us-right">
                                <div className="contact-title">
                                    <h2>Send A Message!</h2>
                                </div>
                                <div className="contact-form">
                                    <form>
                                        <div className="row">
                                            <div className="col-xl-6 col-xxl-6 col-lg-6">
                                                <input type="text" className="form-control mb-4"
                                                       placeholder="First Name"/>
                                            </div>
                                            <div className="col-xl-6 col-xxl-6 col-lg-6">
                                                <input type="text" className="form-control mb-4"
                                                       placeholder="Last Name"/>
                                            </div>
                                            <div className="col-xl-6 col-xxl-6 col-lg-6">
                                                <input type="email" className="form-control mb-4" placeholder="Eamil"/>
                                            </div>
                                            <div className="col-xl-6 col-xxl-6 col-lg-6">
                                                <input type="text" className="form-control mb-4" placeholder="Phone Number"/>
                                            </div>
                                            <div className="col-xl-12 col-xxl-12 col-lg-12">
                                                <input type="text" className="form-control mb-4" placeholder="Subject"/>
                                            </div>
                                            <div className="col-xl-12 col-xxl-12 col-lg-12">
                                                <textarea
                                                    className="form-control mb-3 textarea"
                                                    placeholder="Write your Message:"
                                                    rows="6"
                                                    cols="10"
                                                >
                                                </textarea>
                                            </div>
                                            <div className="col-xl-12 col-xxl-12 col-lg-12">
                                                <button type="submit" className="form-btn">
                                                    Send Message
                                                    <span><FaArrowRight/></span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;