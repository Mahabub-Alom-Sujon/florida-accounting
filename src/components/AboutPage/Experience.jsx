import React from 'react';

const Experience = () => {
    return (
        <>
            <div className="experience">
                <div className="container container-xl container-xxl">
                    <div className="row">
                        <div className="col-lg-6 col-xl-6 col-xxl-6">
                            <div className="experience-left">
                                <div className="divider">
                                    <div className="sub-title-divider d-flex align-items-center position-relative">
                                        <h5>Our About Us</h5>
                                    </div>
                                    <div className="title">
                                        <h2>Discover The World of Finance</h2>
                                    </div>
                                </div>
                                <div className="content-text">
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                                </div>
                                <div className="years-project">
                                    <div className="item">
                                        <div>
                                            <img src="/images/best-seller.png" alt="image"/>
                                        </div>
                                        <div className="text-content">
                                            <h3>10</h3>
                                            <p>Years of Experience</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div>
                                            <img src="/images/paper-plane.png" alt="image"/>
                                        </div>
                                        <div className="text-content">
                                            <h3>250</h3>
                                            <p>Completed Projects</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6 col-xxl-6">
                            <div className="experience-right">
                                <img src="/images/experience.jpg" alt="Experience" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Experience;