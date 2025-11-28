import React from 'react';

const BannerArea = () => {
    return (
        <>
            <div className="banner-area"
                 style={{
                     backgroundImage: 'url("/images/page-bg.jpg")',
                     backgroundSize: "cover",
                     backgroundPosition: "center",
                     backgroundRepeat: "no-repeat"
                 }}
            >
                <div className="container container-xl container-xxl">
                    <div className="row">
                        <div className="col-lg-12 col-xl-12 col-xxl-12">
                            <div className="content-text">
                                <h1>Florida Accounting & Advisers</h1>
                                <p>Your trusted partner for Accounting, Bookkeeping, Payroll & Tax Solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerArea;