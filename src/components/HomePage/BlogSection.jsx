import React from 'react';
import Link from "next/link";
import {FaArrowRight} from "react-icons/fa6";
import {FaRegCalendarAlt} from "react-icons/fa";
import moment from "moment/moment";
const BlogSection = (props) => {
    return (
        <>
            <div className="blog-section">
                {/*{JSON.stringify(props['data'])}*/}
                <div className="container container-xl container-xxl">
                    <div className="row d-flex justify-content-center">
                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                            <div className="divider">
                                <div className="sub-title-divider d-flex justify-content-center position-relative">
                                    <h5>Blog Post</h5>
                                </div>
                                <div className="title text-center">
                                    <h2>Read Our Latest Blog Post</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        {
                            props.data.map((item, index) => (
                                <div className="col-xxl-4 col-xl-4 col-lg-4" key={index}>
                                    <div className="blog-single-post">
                                        <div className="blog-post-thumb">
                                            <img src={item['img_url']} alt={item['alt_text']}/>
                                        </div>
                                        <div className="blog-post-content">
                                            <div className="cat">
                                                <span>{item?.category?.['name']}</span>
                                            </div>
                                            <div className="blog-date">
                                                <i><FaRegCalendarAlt/></i>
                                                <span>{moment(item.createdAt).format('LL')}</span>
                                            </div>
                                            <h5>
                                                <Link href={`/blog-details/${item.url_title}`}>{item['heading_title']}</Link>
                                            </h5>
                                            <p>{item.short_des.split(" ").slice(0, 15).join(" ")}...</p>
                                            <div className="blog-btn">
                                                <button>
                                                    <Link href={`/blog-details/${item.url_title}`}>Read more <span><FaArrowRight/></span></Link>
                                                </button>
                                            </div>
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

export default BlogSection;