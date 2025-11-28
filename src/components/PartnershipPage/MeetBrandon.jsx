import React from 'react';
import {FaRegCheckCircle} from "react-icons/fa";

const MeetBrandon = () => {
    return (
        <>
            <div className="meet-brandon">
                <div className="container container-xl container-xxl">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-8 col-xxl-6">
                            <div className="title text-center">
                                <h2>Meet Your CPA – <span>Brandon</span></h2>
                            </div>

                        </div>
                    </div>
                    <div className="row mt-5 d-flex align-items-center justify-content-center">
                        <div className="col-lg-4 col-xl-4 col-xxl-4 col-sm-8 col-md-6">
                            <div className="card border-0 shadow">
                                <div className="card-body d-flex align-items-center justify-content-center p-5">
                                    <div className="image-card">
                                        <img
                                            src="https://fl-accounting.com/wp-content/uploads/2022/12/everglades-brandon.jpg"
                                            alt="MeetBrandon"
                                        />
                                        <div className="text-center mt-4">
                                            <h4 className="fw-bold">Brandon, CPA</h4>
                                            <p>Lead Accountant & Tax Advisor</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-8 col-xl-8 col-xxl-8 col-sm-12 col-md-12">
                            <div className="right-side">
                                <div className="card border-0 shadow p-4">
                                    <div className="card-body d-flex align-items-center justify-content-center">
                                        <div className="item-content">
                                            <h3>Welcome! I'm here to help.</h3>
                                            <p>Brandon oversees all accounting and tax matters at Florida Accounting & Advisers. With deep roots in Florida and a commitment to personal service, he ensures every client receives accurate, timely, and confidential care.</p>
                                            <div className="row mt-4">
                                                <div className="col-lg-6 col-xl-6 col-xxl-6">
                                                    <h5>Education</h5>
                                                    <ul>
                                                        <li>
                                                            <span><FaRegCheckCircle /></span>
                                                            <p>Master of Accounting – Florida Atlantic University, 2016</p>
                                                        </li>
                                                        <li>
                                                            <span><FaRegCheckCircle/></span>
                                                            <p>B.A. Accounting – University of Central Florida, 2014</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6 col-xl-6 col-xxl-6">
                                                    <h5>Credentials & Memberships</h5>
                                                    <ul>
                                                        <li>
                                                            <span><FaRegCheckCircle/></span>
                                                            <p>Licensed Certified Public Accountant – State of
                                                                Florida</p>
                                                        </li>
                                                        <li>
                                                            <span><FaRegCheckCircle/></span>
                                                            <p>Member, American Institute of CPAs (AICPA)</p>
                                                        </li>
                                                        <li>
                                                            <span><FaRegCheckCircle/></span>
                                                            <p>Member, Florida Institute of CPAs (FICPA)</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
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

export default MeetBrandon;