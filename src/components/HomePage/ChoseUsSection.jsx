import React from 'react';

const ChoseUsSection = () => {
    return (
        <>
            <div className="chose-us-section">
                <div className="container container-xl container-xxl">
                    <div className="row">
                        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12">
                            <div className="chose-us-left">
                                <div className="divider">
                                    <div className="sub-title-divider d-flex align-items-center position-relative">
                                        <h5>Who We Are</h5>
                                    </div>
                                    <div className="title">
                                        <h2>We Provide High Quality Consulting Services To Our Clients</h2>
                                    </div>
                                </div>
                                <div className="content-text">
                                    <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum
                                        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                        Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
                                </div>
                                <div className="row g-0 mt-5">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div className="single-counter">
                                            <h2><span>20+</span></h2>
                                            <span>Years Of Experience</span>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div className="single-counter">
                                            <h2><span>20K+</span></h2>
                                            <span>Happy Clients</span>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div className="single-counter">
                                            <h2><span>15K+</span></h2>
                                            <span>Clients Served</span>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div className="single-counter">
                                            <h2><span>100%</span></h2>
                                            <span>Client Satisfaction</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-5 col-lg-5">
                            <div className="chose-us-right">
                                <div className="chose-us-img">
                                    <img src="/images/choose-us-img.png" alt="img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChoseUsSection;