import React from 'react';

const CompanyHistory = () => {
    return (
        <>
            <div className="company-history">
                <div className="container container-xl container-xxl">
                    <div className="row">
                        <div className="col-xl-6 col-xxl-6 col-lg-6">
                            <div className="company-history-left">
                                <img className="img-fluid" src="/images/company-history.jpg" alt="image" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-xxl-6 col-lg-6">
                            <div className="company-history-right">
                                <div className="divider">
                                    <div className="sub-title-divider d-flex align-items-center position-relative">
                                        <h5>Who We Are</h5>
                                    </div>
                                    <div className="title">
                                        <h2>Our Company History</h2>
                                    </div>
                                </div>
                                <div className="content-text">
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div>
                                <div className="company-history-list">
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <img src="/images/team-business.png" alt="image"/>
                                            </div>
                                            <div>
                                                <h3>Our Vision</h3>
                                                <p>We bring the right people together to challenge established thinking
                                                    and drive transform in 2020</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <img src="/images/agenda.png" alt="image"/>
                                            </div>
                                            <div>
                                                <h3>Our Mision</h3>
                                                <p>We bring the right people together to challenge established thinking
                                                    and drive transform in 2020</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <img src="/images/script.png" alt="image"/>
                                            </div>
                                            <div>
                                                <h3>Our Story</h3>
                                                <p>We bring the right people together to challenge established thinking
                                                    and drive transform in 2020</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CompanyHistory;