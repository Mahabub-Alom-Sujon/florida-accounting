import React from 'react';

const ServicePage = (props) => {
    return (
        <>
            <div className="service-page">
                <div className="container container-xl container-xxl">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12">
                            {JSON.stringify(props['data'])}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicePage;