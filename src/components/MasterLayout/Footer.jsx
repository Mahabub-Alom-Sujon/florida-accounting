
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

export default function Footer(props) {
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
            {/*{JSON.stringify(props?.data?.[0]?.submenus)}*/}
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
                        <Link href="https://fl-accounting.com">
                            <div className="logo-premium">
                                <span className="logo-glow">F</span>
                                <span className="logo-accent">A</span>
                                <span className="logo-accent">A</span>
                            </div>
                            <div>
                                <p className="logo-text">Florida Accounting & Advisers</p>
                            </div>
                        </Link>
                    </div>

                    <p className="tagline-premium">
                        Our Company Provides A Full Range Of Accounting Services, From Tax Preparation To Payroll To
                        Consulting And Everything In Between.
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
                        <motion.li
                            whileHover={{x: 5, color: "#ff9900"}}
                            transition={{type: "spring", stiffness: 400}}
                        >
                            <Link href="/">Home</Link>
                        </motion.li>
                        <motion.li
                            whileHover={{x: 5, color: "#ff9900"}}
                            transition={{type: "spring", stiffness: 400}}
                        >
                            <Link href="/about">About</Link>
                        </motion.li>
                        <motion.li
                            whileHover={{x: 5, color: "#ff9900"}}
                            transition={{type: "spring", stiffness: 400}}
                        >
                            <Link href="https://app.taxdome.com/login">Client Portal</Link>
                        </motion.li>
                        <motion.li
                            whileHover={{x: 5, color: "#ff9900"}}
                            transition={{type: "spring", stiffness: 400}}
                        >
                            <Link href="/contact">Contact</Link>
                        </motion.li>
                    </ul>
                </motion.div>

                {/* Services */}
                <motion.div
                    className="footer-col"
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.4 }}
                >
                    <h3>Our Services</h3>
                    <ul className="link-list">
                        {
                            props?.data?.[0]?.submenus.map((item, index) => (
                                <motion.li key={index} transition={{ type: "spring", stiffness: 400 }}>
                                    <Link href={`/${item.urlName}`}>{item['name']}</Link>
                                </motion.li>

                            ))
                        }
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
                            <span><FaPhone className="cicon"/></span>
                            <p>+1 (772) 323-4397</p>
                        </div>
                        <div>
                            <span><FaMapMarkerAlt className="map-pin"/></span>
                            <p className="address-premium">980 N Federal Hwy. Suite 110, Boca Raton, FL 33432</p>
                        </div>
                        <div>
                            <span><FaMapMarkerAlt className="map-pin"/></span>
                            <p className="address-premium">789 SW Federal Hwy Suite 201, Stuart, FL 34994</p>
                        </div>

                    </div>
                    <motion.div
                        className="map-pin-animation"
                        animate={{y: [0, -10, 0]}}
                        transition={{repeat: Number.POSITIVE_INFINITY, duration: 2}}
                    >
                        <FaMapMarkerAlt className="floating-pin" />
                    </motion.div>
                </motion.div>
            </div>
            {/* Social Bar */}
            <div className="footer-bar">
                <div className="container bar-content">
                    <div className="social-premium">
                        {[
                            {Icon: FaFacebookF, url: "https://www.facebook.com/Floridaaccounting"},
                            {Icon: FaTwitter, url: "https://x.com/fl_accounting"},
                            {Icon: FaLinkedinIn, url: "https://www.linkedin.com/in/roxanascaffidi"},
                            {Icon: FaInstagram, url: "https://www.instagram.com/floridaaccounting"},
                        ].map(({Icon, url}, i) => (
                            <motion.a
                                key={i}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                whileHover={{scale: 1.2, rotate: 360}}
                                whileTap={{scale: 0.9}}
                                className="social-ball"
                            >
                                <Icon/>
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
                            <circle className="ring-bg" cx="30" cy="30" r="28"/>
                        </svg>
                        <FaArrowUp className="arrow-up"/>
                    </button>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom-premium">
                <div className="container bottom-flex-premium">
                    <div>
                        <p className="mb-0">
                            © {new Date().getFullYear()}
                            <Link className="text-white"
                                  href="https://fl-accounting.com"> <strong>fl-accounting.com</strong></Link>
                            — Florida Accounting & Advisers
                        </p>
                        <p className="design-credit mb-0">
                            Design & Development by
                            <Link href="https://deedbangladesh.com" target="_blank">Deed Bangladesh IT Limited</Link>
                        </p>
                    </div>
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
