"use client";
import React, {useState} from 'react';
import { Carousel } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
const BlogSlider = (props) => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            {/*{JSON.stringify(props.data)}*/}
            <div className="blog-slider">
                <div className="container container-xl container-xxl">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12">
                            <Carousel activeIndex={index} onSelect={handleSelect} controls={true}>
                                {props?.['slider'] && props?.['slider'].map((item) => (
                                    <Carousel.Item key={item.id}>
                                        <Link href={`/blog/${item?.["url_title"]}`}>
                                            <div style={{ width: "100%", height: "450px", position: "relative" }}>
                                                <Image
                                                    src={item?.img_url}
                                                    alt={item?.alt_text || "Blog Image"}
                                                    fill
                                                    priority
                                                    className="blog-img"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
                                                    style={{ objectFit: "cover" }}
                                                />
                                            </div>
                                            <Carousel.Caption className="caption">
                                                <h4>{item["heading_title"]}</h4>
                                                <p>{item["short_des"]}</p>
                                            </Carousel.Caption>
                                        </Link>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default BlogSlider;