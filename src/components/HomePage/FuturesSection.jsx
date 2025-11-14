import React from 'react';

const FuturesSection = () => {
    return (
        <>
            <div className="futures-section">
                <div className="container container-xxl container-xl">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4">
                            <div className="single-futures d-flex align-items-center">
                                <div className="icon">
                                    <img src="/images/24-hours.png" alt="image"/>
                                </div>
                                <div className="content-text">
                                    <h5>24/7 Support Customer</h5>
                                    <p>Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh
                                        pulvinar.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4">
                            <div className="single-futures d-flex align-items-center">
                                <div className="icon">
                                    <img src="/images/customer_service.png" alt="image"/>
                                </div>
                                <div className="content-text">
                                    <h5>100% Customer Satisfaction</h5>
                                    <p>Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh
                                        pulvinar.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4">
                            <div className="single-futures d-flex align-items-center">
                                <div className="icon">
                                    <img src="/images/advisory.png" alt="image"/>
                                </div>
                                <div className="content-text">
                                    <h5>Unlimited Tax advice</h5>
                                    <p>Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh
                                        pulvinar.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FuturesSection;