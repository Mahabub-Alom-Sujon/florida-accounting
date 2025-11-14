// import React from 'react';
// import { FaFacebookF } from "react-icons/fa6";
// import { MdPhoneInTalk } from "react-icons/md";
// import {FaLinkedinIn, FaTwitter } from "react-icons/fa";
// import { FaArrowRightLong } from "react-icons/fa6";
// import {AiOutlineInstagram, AiOutlineMail} from "react-icons/ai";
// import Link from "next/link";
// import Image from "next/image";
// import {IoLocationOutline} from "react-icons/io5";
// const Footer = () => {
//     const currentYear = new Date().getFullYear();
//     return (
//         <>
//             <div className="footer">
//                 <div className="container container-xl container-xxl">
//                     <div className="row">
//                         <div className="col-xxl-3 col-xl-3 col-lg-3">
//                             <div className="single-widget">
//                                 <div className="footer-img">
//                                     <Image
//                                         src="/images/FAA.png"
//                                         alt="logo"
//                                         width={150}
//                                         height={70}
//                                         sizes="100vw"
//                                         //priority
//                                     />
//                                 </div>
//                                 <div className="content-text">
//                                     <p>Our Company Provides A Full Range Of Accounting Services, From Tax Preparation To
//                                         Payroll To Consulting And Everything In Between.</p>
//                                 </div>
//                                 <div className="social-media">
//                                     <ul>
//                                         <li>
//                                             <Link href="https://www.facebook.com/Floridaaccounting" target="_blank"><FaFacebookF/></Link>
//                                         </li>
//                                         <li>
//                                             <Link href="https://www.linkedin.com/in/roxanascaffidi" target="_blank"><FaLinkedinIn/></Link>
//                                         </li>
//                                         <li>
//                                             <Link href="https://www.instagram.com/floridaaccounting" target="_blank"><AiOutlineInstagram/></Link>
//                                         </li>
//                                         <li>
//                                             <Link href="https://x.com/fl_accounting" target="_blank"><FaTwitter/></Link>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-xxl-3 col-xl-3 col-lg-3">
//                             <div className="single-widget">
//                                 <h4>Quick Menu</h4>
//                                 <ul>
//                                     <li>
//                                         <Link href="/"><span><FaArrowRightLong /></span> Client Portal</Link>
//                                     </li>
//                                     <li>
//                                         <Link href="/"><span><FaArrowRightLong/></span> Tax Tips</Link>
//                                     </li>
//                                     <li>
//                                         <Link href="/"><span><FaArrowRightLong /></span> Specials</Link>
//                                     </li>
//                                     <li>
//                                         <Link href="/"> <span><FaArrowRightLong /></span> Client Resources</Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="col-xxl-3 col-xl-3 col-lg-3">
//                             <div className="single-widget">
//                                 <h4>Our Services</h4>
//                                 <ul>
//                                     <li>
//                                         <Link href="/"><span><FaArrowRightLong /></span> Accounting & Bookkeeping</Link>
//                                     </li>
//                                     <li>
//                                         <Link href="/"><span><FaArrowRightLong /></span> Payroll Services</Link>
//                                     </li>
//                                     <li>
//                                         <Link href="/"><span><FaArrowRightLong /></span> Tax Preparation &
//                                             Planning</Link>
//                                     </li>
//                                     <li>
//                                         <Link href="/"><span><FaArrowRightLong /></span> New Business Formation</Link>
//                                     </li>
//                                     <li>
//                                         <Link href="/"> <span><FaArrowRightLong/></span> Strategic Business Planning</Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="col-xxl-3 col-xl-3 col-lg-3">
//                             <div className="single-widget">
//                                 <h4>Contact Us</h4>
//                                 <ul>
//                                     <li>
//                                         <span><MdPhoneInTalk/></span>
//                                         <p>+1 (772) 282-0922</p>
//                                     </li>
//                                     <li>
//                                         <span><MdPhoneInTalk/></span>
//                                         <p>+1 (561) 939-2553</p>
//                                     </li>
//                                     <li>
//                                         <span><AiOutlineMail/></span>
//                                         <Link href="mailto:roxana@fl-accounting.com"> roxana@fl-accounting.com</Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="footer-bottom">
//             <div className="container container-xl container-xxl">
//                     <div className="row">
//                         <div className="col-xxl-12 col-xl-12 col-lg-12">
//                             <p>Copyright &copy; {currentYear} Florida Accounting & Advisers </p>
//                             <p className="design-credit">Design & Development by <Link href="" target="_blank">Your Name</Link></p>
//                         </div>
//                     </div>
//             </div>
//             </div>
//         </>
//     );
// };
//
// export default Footer;

'use client';
import React, { useState, useEffect } from "react";
import {
    FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram,
    FaArrowUp, FaCheckCircle, FaMapMarkerAlt, FaMoon, FaSun,
    FaUsers, FaBoxOpen, FaTrophy, FaEnvelope, FaPhone
} from "react-icons/fa";
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import Link from "next/link";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle");
    const [darkMode, setDarkMode] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Scroll Progress
    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Email Submit
    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email || !email.includes("@")) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
            return;
        }
        setStatus("success");
        setTimeout(() => {
            setStatus("idle");
            setEmail("");
        }, 3000);
    };

    // Scroll to top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Dark mode toggle class
    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
    }, [darkMode]);

    return (
        <footer className={`footer premium-footer ${darkMode ? 'dark' : ''}`}>

            {/* Waves */}
            <div className="wave-container">
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
            </div>

            <div className="container footer-grid">
                {/* Brand + Stats */}
                <motion.div
                    className="footer-col brand-col"
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                >
                    <div className="logo-prient">
                        <div className="logo-premium">
                            <span className="logo-glow">F</span>
                            <span className="logo-accent">A</span>
                            <span className="logo-accent">A</span>
                        </div>
                        <div>
                            <p className="logo-text">Florida Accounting & Advisers</p>
                        </div>
                    </div>

                    <p className="tagline-premium">
                        Certified Amazon SPN Partner – Global Scaling Experts
                    </p>

                    <div className="stats-grid">
                        <div className="stat-item">
                            <FaUsers className="stat-icon"/>
                            <CountUp end={1250} duration={3} suffix="+" className="stat-number"/>
                            <p>Clients Served</p>
                        </div>
                        <div className="stat-item">
                            <FaBoxOpen className="stat-icon"/>
                            <CountUp end={8900} duration={3} suffix="+" className="stat-number"/>
                            <p>Case solved</p>
                        </div>
                        <div className="stat-item">
                            <FaTrophy className="stat-icon"/>
                            <CountUp end={98} duration={3} suffix="%" className="stat-number"/>
                            <p>Success Rate</p>
                        </div>
                    </div>
                </motion.div>

                {/* Navigation */}
                <motion.div
                    className="footer-col"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3>Navigation</h3>
                    <ul className="link-list">
                        {["Home", "Services", "Blog", "Contact"].map((item) => (
                            <motion.li
                                key={item}
                                whileHover={{ x: 5, color: "#ff9900" }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <a href={`${item.toLowerCase()}`}>{item}</a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Services */}
                <motion.div
                    className="footer-col"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3>Our Services</h3>
                    <ul className="link-list">
                        {[
                            "Accounting & Bookkeeping",
                            "Payroll Services",
                            "Tax Preparation & Planning",
                            "New Business Formation"
                        ].map((item) => (
                            <motion.li
                                key={item}
                                // whileHover={{ x: 5, color: "#ff9900" }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <Link href={`${item.toLowerCase().replace(/ /g, "-")}`}>{item}</Link>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Contact + Map */}
                <motion.div
                    className="footer-col"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3>Visit Us</h3>
                    <div className="contact-card">
                        <div>
                            <span><FaEnvelope className="cicon"/></span>
                            <p> roxana@fl-accounting.com</p>
                        </div>
                        <div>
                            <span><FaPhone className="cicon"/></span>
                            <p>+1 (561) 939-2553</p>
                        </div>
                        <div>
                            <span><FaMapMarkerAlt className="map-pin"/></span>
                            <p className="address-premium">980 N Federal Hwy. Suite 110, Boca Raton, FL 33432</p>
                        </div>

                    </div>
                    <motion.div
                        className="map-pin-animation"
                        animate={{y: [0, -10, 0]}}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                    >
                        <FaMapMarkerAlt className="floating-pin" />
                    </motion.div>
                </motion.div>
            </div>
            {/* Social Bar */}
            <div className="footer-bar">
                <div className="container bar-content">
                    <div className="social-premium">
                        {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                            <motion.a
                                key={i}
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                whileHover={{scale: 1.2, rotate: 360}}
                                whileTap={{scale: 0.9 }}
                                className="social-ball"
                            >
                                <Icon />
                            </motion.a>
                        ))}
                    </div>

                    {/*<motion.button*/}
                    {/*    onClick={() => setDarkMode(!darkMode)}*/}
                    {/*    className="mode-toggle"*/}
                    {/*    whileHover={{ scale: 1.1 }}*/}
                    {/*    whileTap={{ scale: 0.9 }}*/}
                    {/*>*/}
                    {/*    {darkMode ? <FaSun /> : <FaMoon />}*/}
                    {/*</motion.button>*/}

                    {/* Progress Ring */}
                    <button onClick={scrollToTop} className="progress-ring-btn">
                        <svg className="progress-ring" width="60" height="60">
                            <circle
                                className="progress-ring-circle"
                                stroke="url(#ringGradient)"
                                strokeWidth="3"
                                fill="transparent"
                                r="28"
                                cx="30"
                                cy="30"
                                style={{
                                    strokeDasharray: 176,
                                    strokeDashoffset: 176 - (176 * scrollProgress) / 100
                                }}
                            />
                            <circle className="ring-bg" cx="30" cy="30" r="28" />
                        </svg>
                        <FaArrowUp className="arrow-up" />
                    </button>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom-premium">
                <div className="container bottom-flex-premium">
                    <p className="mb-0">
                        © {new Date().getFullYear()} <strong>fl-accounting.com</strong> — Florida Accounting & Advisers
                    </p>
                    <p className="design-credit mb-0">
                        Design & Development by
                        <Link href="https://deedbangladesh.com" target="_blank">Deed Bangladesh IT Limited</Link>
                    </p>
                    <div className="legal-premium">
                        <Link href="/privacy">Privacy</Link>
                        <Link href="/terms">Terms</Link>
                        <Link href="/disclaimer">Disclaimer</Link>
                        <Link href="/sitemap">Sitemap</Link>
                    </div>
                </div>
            </div>

        </footer>
    );
}
