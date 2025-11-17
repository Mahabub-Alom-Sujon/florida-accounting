import React from 'react';
import Marquee from "react-fast-marquee";
const PartnerSection = (props) => {
    return (
        <>
            <div className="partner-section">
                {/*{JSON.stringify(props['data'])}*/}
                <div className="container container-xl container-xxl">
                    <div className="row d-flex justify-content-center">
                        <div className="col-xxl-10 col-xl-10 col-lg-10">
                            <h2>Trusted by 200+ Forward Thinking Companies</h2>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-xxl-12 col-xl-12 col-lg-12">
                            <Marquee speed={30}>
                                {props?.data.map((item, index) => (
                                    <div className="child" key={index}>
                                        <img src={item['logo_url']} alt={item['alt_text']}/>
                                    </div>
                                ))}

                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnerSection;