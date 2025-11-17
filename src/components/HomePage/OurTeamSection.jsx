import React from 'react';

const OurTeamSection = (props) => {
    return (
        <>
            <div className="team-section">
                <div className="container container-xl container-xxl">
                    <div className="row d-flex justify-content-center">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                            <div className="divider">
                                <div className="sub-title-divider d-flex justify-content-center position-relative">
                                    <h5>Our Expertise</h5>
                                </div>
                                <div className="title text-center">
                                    <h2>Meet With Professional Team</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        {
                            props.data.map((item, index) => (
                                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6" key={index}>
                                    <div className="single-team">
                                        <div className="team-img">
                                            <img src={item['img_url']} alt={item['alt_text']}/>
                                        </div>
                                        <div className="team-content">
                                            <h3>{item['name']}</h3>
                                            <span>{item['position']}</span>
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

export default OurTeamSection;