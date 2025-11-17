import React from 'react';
import {FaRegCalendarAlt} from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import moment from "moment/moment";
import parse from "html-react-parser";

const BlogDetails = (props) => {
    return (
        <>
            <div className="blog-details">
                {/*{JSON.stringify(props['data'])}*/}
                <div className="container container-xl container-xxl">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                            <div className="blog-details-left shadow">
                                <div className="blog-details-img">
                                    <img className="w-100" src={props?.['data']?.['img_url']} alt={props?.['data']?.['alt_text']}/>
                                </div>
                                <div className="blog-details-text p-4">
                                    <div className="meta-box">
                                        <div className="blog-date">
                                            <i><FaRegCalendarAlt/></i>
                                            <span>{moment(props?.['data']?.createdAt).format('LL')}</span>
                                        </div>
                                        <div className="blog-date ms-4">
                                            <i><FaRegCircleUser/></i>
                                            <span>{props?.['data']?.['author']}</span>
                                        </div>
                                    </div>
                                    <div className="blog-details-title">
                                        <h2>{props?.['data']?.['heading_title']}</h2>
                                    </div>
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

export default BlogDetails;