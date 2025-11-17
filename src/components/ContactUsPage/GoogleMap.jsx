import React from 'react';
import { GoogleMapsEmbed } from '@next/third-parties/google';

const GoogleMap = () => {
    return (
        <>
            <div className="google-map">
                <div className="container container-xl container-xxl">
                    <div className="row">
                        <div className="col-xl-6 col-xxl-6 col-lg-6 col-md-12 mb-4 col-sm-12">
                            <div className="card shadow border-0">
                                <GoogleMapsEmbed
                                    apiKey=""
                                    height={200}
                                    width="100%"
                                    mode="place"
                                    q="Brooklyn+Bridge,New+York,NY"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GoogleMap;