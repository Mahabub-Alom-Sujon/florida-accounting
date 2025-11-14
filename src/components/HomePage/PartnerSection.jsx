import React from 'react';
import Marquee from "react-fast-marquee";
const PartnerSection = () => {
    return (
        <>
            <div className="partner-section">
                <div className="container container-xl container-xxl">
                    <div className="row d-flex justify-content-center">
                        <div className="col-xxl-10 col-xl-10 col-lg-10">
                            <h2>Trusted by 200+ Forward Thinking Companies</h2>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-xxl-12 col-xl-12 col-lg-12">
                            <Marquee speed={30}>
                                <div className="child">
                                    <img src="/images/partner-1.png" alt="Logo"/>
                                </div>
                                <div className="child">
                                    <img src="/images/partner-2.png" alt="Logo"/>
                                </div>
                                <div className="child">
                                    <img src="/images/partner-1.png" alt="Logo"/>
                                </div>
                                <div className="child">
                                    <img src="/images/partner-2.png" alt="Logo"/>
                                </div>
                                <div className="child">
                                    <img src="/images/partner-1.png" alt="Logo"/>
                                </div>
                                <div className="child">
                                    <img src="/images/partner-2.png" alt="Logo"/>
                                </div>
                                <div className="child">
                                    <img src="/images/partner-1.png" alt="Logo"/>
                                </div>
                                <div className="child">
                                    <img src="/images/partner-2.png" alt="Logo"/>
                                </div>
                                <div className="child">
                                    <img src="/images/partner-1.png" alt="Logo"/>
                                </div>
                                <div className="child">
                                    <img src="/images/partner-2.png" alt="Logo"/>
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnerSection;