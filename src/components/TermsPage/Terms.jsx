import React from 'react';
import parse from "html-react-parser";

const Terms = (props) => {
    return (
        <>
            <div className="terms">
                <div className="container container-xl container-xxl">
                    <div className="row">
                        <div className="col-lg-12 col-xl-12 col-xxl-12">
                            <div className="card border-0 shadow">
                                <div className="card-body p-5">
                                    <div className="content-text">
                                        {parse(props?.data?.long_des || "")}
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

export default Terms;