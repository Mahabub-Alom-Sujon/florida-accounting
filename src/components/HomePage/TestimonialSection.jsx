"use client";
import React, {useState} from 'react';
import Slider from "react-slick";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
// ✅ Custom arrow components
const PrevArrow = ({ onClick }) => (
    <button type="button" className="slick-prev" onClick={onClick}>
        <LiaAngleLeftSolid />
    </button>
);

const NextArrow = ({ onClick }) => (
    <button type="button" className="slick-next" onClick={onClick}>
        <LiaAngleRightSolid />
    </button>
);
const TestimonialSection = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
        responsive: [
            {
                breakpoint: 1000, // For smaller screens
                settings: {
                    autoplay: true,
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    autoplay: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="testimonials-section" style={{ backgroundImage: `url("/images/customer-bg.jpg")` }}>
                <div className="container container-xl container-xxl">
                    <div className="row d-flex align-items-center">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="testimonials-left">
                                <div className="divider">
                                    <div className="sub-title-divider d-flex align-items-center position-relative">
                                        <h5>Customer Feedback</h5>
                                    </div>
                                    <div className="title">
                                        <h2>What Our Customers Think About Taks.</h2>
                                    </div>
                                </div>
                                <ul style={{position: "relative"}}>
                                    {props.data.map((item, i) => (
                                        <li
                                            key={i}
                                            style={{position: "relative", display: "inline-block", marginRight: "5px"}}
                                        >
                                            <img
                                                className={i === activeIndex ? "active" : ""}
                                                style={{
                                                    border: i === activeIndex ? "3px solid #0AC668" : "3px solid #fff",
                                                    borderRadius: "50%",
                                                    overflow: "hidden",
                                                    transition: "all 0.5s ease",
                                                    zIndex: i === activeIndex ? 10 : 1,
                                                    position: "relative",
                                                }}
                                                src={item.img_url}
                                                alt={item.alt_text}
                                            />
                                        </li>
                                    ))}

                                    <li
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            zIndex: 1,
                                        }}
                                    >
                                        <span>{props?.data?.length}+</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="row g-0">
                                <Slider {...settings}>
                                    {
                                        props.data.map((item, index) => (
                                            <div className="col-xxl-12 col-xl-12 col-lg-12" key={index}>
                                                <div className="testimonials-Single">
                                                    <div className="testimonials-item">
                                                        <div className="testimonials-img">
                                                            <img src={item['img_url']} alt={item['alt_text']}/>
                                                            <div>
                                                            <h4>{item['name']}</h4>
                                                                <span>{item['position']}</span>
                                                            </div>

                                                        </div>
                                                        <div className="testimonials-text">
                                                            <p>{item['feedback']}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialSection;

// "use client";
// import React, { useState } from "react";
// import Slider from "react-slick";
// import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
//
// // ✅ Custom arrow components
// const PrevArrow = ({ onClick }) => (
//     <button type="button" className="slick-prev" onClick={onClick}>
//         <LiaAngleLeftSolid />
//     </button>
// );
//
// const NextArrow = ({ onClick }) => (
//     <button type="button" className="slick-next" onClick={onClick}>
//         <LiaAngleRightSolid />
//     </button>
// );
//
// const TestimonialSection = (props) => {
//     const [activeIndex, setActiveIndex] = useState(0); // Track active slide
//
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 1000,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         prevArrow: <PrevArrow />,
//         nextArrow: <NextArrow />,
//         beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex), // ✅ Update activeIndex
//
//         responsive: [
//             {
//                 breakpoint: 1000,
//                 settings: {
//                     autoplay: true,
//                     arrows: true,
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     autoplay: true,
//                     arrows: false,
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     };
//
//     return (
//         <div
//             className="testimonials-section"
//             style={{ backgroundImage: `url("/images/customer-bg.jpg")` }}
//         >
//             <div className="container container-xl container-xxl">
//                 <div className="row d-flex align-items-center">
//                     {/* Left Side */}
//                     <div className="col-xxl-6 col-xl-6 col-lg-6">
//                         <div className="testimonials-left">
//                             <div className="divider">
//                                 <div className="sub-title-divider d-flex align-items-center position-relative">
//                                     <h5>Customer Feedback</h5>
//                                 </div>
//                                 <div className="title">
//                                     <h2>What Our Customers Think About Taks.</h2>
//                                 </div>
//                             </div>
//                             <ul className="testimonial-thumbs">
//                                 {props.data.map((item, i) => (
//                                     <li
//                                         key={i}
//                                         className={i === activeIndex ? "active" : ""}
//                                         style={{
//                                             border:
//                                                 i === activeIndex ? "2px solid red" : "2px solid transparent",
//                                             borderRadius: "8px",
//                                             overflow: "hidden",
//                                             transition: "border 0.3s ease",
//                                         }}
//                                     >
//                                         <img
//                                             src={item["img_url"]}
//                                             alt={item["alt_text"]}
//                                             style={{
//                                                 width: "60px",
//                                                 height: "60px",
//                                                 objectFit: "cover",
//                                                 borderRadius: "6px",
//                                             }}
//                                         />
//                                     </li>
//                                 ))}
//                                 <li>
//                                     <span>{props?.data?.length}+</span>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//
//                     {/* Right Side */}
//                     <div className="col-xxl-6 col-xl-6 col-lg-6">
//                         <div className="row g-0">
//                             <Slider {...settings}>
//                                 {props.data.map((item, index) => (
//                                     <div
//                                         className="col-xxl-12 col-xl-12 col-lg-12"
//                                         key={index}
//                                     >
//                                         <div className="testimonials-Single">
//                                             <div className="testimonials-item">
//                                                 <div className="testimonials-img">
//                                                     <img
//                                                         src={item["img_url"]}
//                                                         alt={item["alt_text"]}
//                                                     />
//                                                     <div>
//                                                         <h4>{item["name"]}</h4>
//                                                         <span>{item["position"]}</span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="testimonials-text">
//                                                     <p>{item["feedback"]}</p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </Slider>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default TestimonialSection;
