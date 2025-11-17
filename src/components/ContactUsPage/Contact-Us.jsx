"use client";
import React, {useState} from 'react';
import {FaArrowRight} from "react-icons/fa6";
import {IoLocationOutline} from "react-icons/io5";
import {AiOutlineInstagram, AiOutlineMail} from "react-icons/ai";
import {MdPhoneInTalk} from "react-icons/md";
import LoaderButton from '@/components/MasterLayout/LoaderButton';
import { ErrorToast, IsEmpty, SuccessToast,IsEmail,IsMobile } from "@/utility/FormHelper";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {FaFacebookF, FaLinkedinIn, FaTwitter} from "react-icons/fa";
const ContactUs = () => {
    const router=useRouter();
    const [submit, setSubmit] = useState(false);
    let [data, setData] = useState({
        firstName: "",
        lastName:"",
        email:"",
        phone:"",
        subject:"",
        message:""

    });
    const inputOnChange = (name,value) => {
        setData((data)=>({
            ...data,
            [name]:value
        }))
    }
    const formSubmit = async (e) => {
        e.preventDefault();
        if(IsEmpty(data.firstName)){
            ErrorToast("First Name is Required")
        }
        else if (IsEmpty(data.lastName)) {
            ErrorToast("Last Name is Required")
        }
        else if (IsEmail(data.email)) {
            ErrorToast("Email is Required")
        }
        else if (!IsMobile(data.phone)) {
            ErrorToast("Phone Number is Required")
        }
        else if (IsEmpty(data.subject)) {
            ErrorToast("Subject is Required")
        }
        else if (IsEmpty(data.message)) {
            ErrorToast("Massage is Required")
        }
        else{
            setSubmit(true);

            const options = {
                method:'POST',
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            }
            let res=await fetch("/api/contact",options);
            let ResJson=await res.json();
            setSubmit(false);
            if (ResJson['status'] === "success") {
                setData({...data,
                    firstName: "",
                    lastName:"",
                    email:"",
                    phone:"",
                    subject:"",
                    message:""
                })
                router.refresh()
                SuccessToast("Massage Success")
            }
            else {
                ErrorToast("Request Fail")
            }

        }
    }
    return (
        <>
            <div className="contact-us">
                <div className="container container-xl container-xxl">
                    <div className="row">
                        <div className="col-xl-8 col-xxl-8 col-lg-8">
                            <div className="divider">
                                <div className="sub-title-divider d-flex align-items-center position-relative">
                                    <h5>Contact Details</h5>
                                </div>
                                <div className="title">
                                    <h2>Get in Touch.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-6 col-xl-6 col-xxl-6 col-md-6 col-sm-12">
                            <div className="contact-us-left">
                                <p>Gravida vulputate aliquet tempor sit. Neque sed pretium non urna sed etid aenean
                                    haretra quam placerat adipiscing penatibus aliquam adipiscing gravida elementum
                                    aliquet eget senectus felis enim diam molestie.</p>
                                <div className="address">
                                    <ul>
                                        <li>
                                            <span><IoLocationOutline/></span>
                                            <div className="ms-3">
                                                <h6 className="mb-1">Palm Beach:</h6>
                                                <p className="mb-0">980 N Federal Hwy. Suite 110, Boca Raton, FL
                                                    33432</p>
                                            </div>
                                        </li>
                                        <li>
                                            <span><IoLocationOutline/></span>
                                            <div className="ms-3">
                                                <h6 className="mb-1">Treasure Coast:</h6>
                                                <p className="mb-0">789 SW Federal Hwy Suite 201, Stuart, FL 34994</p>
                                            </div>
                                        </li>
                                        <li>
                                            <span><MdPhoneInTalk/></span>
                                            <div className="ms-3">
                                                <h6 className="mb-1">Call Us One:</h6>
                                                <p className="mb-0">+1 (772) 282-0922</p>
                                            </div>
                                        </li>
                                        <li>
                                            <span><MdPhoneInTalk/></span>
                                            <div className="ms-3">
                                                <h6 className="mb-1">Call Us Two:</h6>
                                                <p className="mb-0">+1 (561) 939-2553</p>
                                            </div>
                                        </li>
                                        <li>
                                            <span><AiOutlineMail/></span>
                                            <div className="ms-3">
                                                <h6 className="mb-1">Our Email:</h6>
                                                <p className="mb-0">roxana@fl-accounting.com</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="social-media">
                                    <h3>Follow Us</h3>
                                    <ul>
                                         <li>
                                            <Link
                                                href="https://www.facebook.com/Floridaaccounting"
                                                 target="_blank">
                                                <FaFacebookF/>
                                            </Link>
                                         </li>
                                         <li>
                                         <Link
                                             href="https://www.linkedin.com/in/roxanascaffidi"
                                             target="_blank">
                                             <FaLinkedinIn/>
                                         </Link>
                                         </li>
                                         <li>
                                         <Link
                                             href="https://www.instagram.com/floridaaccounting"
                                             target="_blank">
                                             <AiOutlineInstagram/>
                                         </Link>
                                         </li>
                                        <li>
                                        <Link
                                            href="https://x.com/fl_accounting"
                                            target="_blank">
                                            <FaTwitter/>
                                        </Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6 col-xxl-6 col-md-6 col-sm-12">
                            <div className="contact-us-right">
                                <div className="contact-title">
                                    <h2>Send A Message!</h2>
                                </div>
                                <div className="contact-form">
                                    <form>
                                        <div className="row">
                                            <div className="col-xl-6 col-xxl-6 col-lg-6">
                                                <input value={data.firstName} onChange={(e) => {
                                                    inputOnChange("firstName", e.target.value)
                                                }} type="text" className="form-control mb-4"
                                                       placeholder="First Name"/>
                                            </div>
                                            <div className="col-xl-6 col-xxl-6 col-lg-6">
                                                <input value={data.lastName} onChange={(e) => {
                                                    inputOnChange("lastName", e.target.value)
                                                }} type="text" className="form-control mb-4"
                                                       placeholder="Last Name"/>
                                            </div>
                                            <div className="col-xl-6 col-xxl-6 col-lg-6">
                                                <input value={data.email} onChange={(e) => {
                                                    inputOnChange("email", e.target.value)
                                                }} type="email" className="form-control mb-4" placeholder="Eamil"/>
                                            </div>
                                            <div className="col-xl-6 col-xxl-6 col-lg-6">
                                                <input value={data.phone} onChange={(e) => {
                                                    inputOnChange("phone", e.target.value)
                                                }} type="text" className="form-control mb-4"
                                                       placeholder="Phone Number"/>
                                            </div>
                                            <div className="col-xl-12 col-xxl-12 col-lg-12">
                                                <input value={data.subject} onChange={(e) => {
                                                    inputOnChange("subject", e.target.value)
                                                }} type="text" className="form-control mb-4" placeholder="Subject"/>
                                            </div>
                                            <div className="col-xl-12 col-xxl-12 col-lg-12">
                                                <textarea
                                                    value={data.message} onChange={(e) => {
                                                    inputOnChange("message", e.target.value)
                                                }}
                                                    className="form-control mb-3 textarea"
                                                    placeholder="Write your Message:"
                                                    rows="6"
                                                    cols="10"
                                                >
                                                </textarea>
                                            </div>
                                            <div className="col-xl-12 col-xxl-12 col-lg-12">
                                                <button
                                                    type="submit"
                                                    className="form-btn"
                                                    onClick={formSubmit}
                                                >
                                                    {submit ? <LoaderButton/> : "Send Massage"}
                                                    <span><FaArrowRight/></span>
                                                </button>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                            <div className="card shadow border-0 p-4">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57199.66855624724!2d-80.083088!3d26.359532!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8e1f641097097%3A0xbab436eda337ad38!2s980%20N%20Federal%20Hwy%20%23101%2C%20Boca%20Raton%2C%20FL%2033432%2C%20USA!5e0!3m2!1sen!2sbd!4v1763246692951!5m2!1sen!2sbd"
                                    width="100%" height="450" allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">

                                </iframe>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                            <div className="card shadow border-0 p-4">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56781.47519545861!2d-80.255045!3d27.192696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dedd42053fffff%3A0xe61a7f9fbd30a780!2s789%20SW%20Federal%20Hwy%20Ste%3A%20201%2C%20Stuart%2C%20FL%2034994!5e0!3m2!1sen!2sus!4v1763246975679!5m2!1sen!2sus"
                                    width="100%" height="450" allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">

                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;