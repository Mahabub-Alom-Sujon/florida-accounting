import React from 'react';

const FuturesSection = (props) => {
    return (
        <>
            <div className="futures-section">
                <div className="container container-xxl container-xl">
                    <div className="row">
                        {
                            props?.data?.map((item, index) => (
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-4 col-sm-12" key={index}>
                                    <div className="single-futures d-flex align-items-center">
                                        <div className="icon">
                                            <img src={item['icon_url']} alt={item['alt_text']}/>
                                        </div>
                                        <div className="content-text">
                                            <h5>{item['heading_title']}</h5>
                                            <p>{item['text']}</p>
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

export default FuturesSection;