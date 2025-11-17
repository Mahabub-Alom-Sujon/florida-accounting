"use client"
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import {FaAngleDown, FaArrowRightLong, FaBars, FaBarsStaggered} from "react-icons/fa6";
import Offcanvas from 'react-bootstrap/Offcanvas';
const AppNavBar = (props) => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [show, setShow] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50); // Adjust the scroll trigger value as needed
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            <div className={`AppNavBar ${isSticky ? "sticky" : ""}`}>
                <div className="container container-xxl container-xl">
                    <div className="row d-flex align-items-center">
                        {/* Logo */}
                        <div className="col-6 col-lg-2">
                            <Link className="navbar-brand" href="/">
                                <Image
                                    src="/images/FAA.png"
                                    alt="logo"
                                    width={100}
                                    height={50}
                                    sizes="100vw"
                                />
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="col-lg-7 d-none d-lg-block">
                            <ul className="nav">
                                {props.data?.map((item, i) => (
                                    <li key={i} className="nav-item">
                                        <Link className="nav-link" href="#">
                                            {item.name} <span><FaAngleDown/></span>
                                        </Link>

                                        {item.submenus && item.submenus.length > 0 && (
                                            <div className="Dropdown-menu">
                                                <ul className="ps-0">
                                                    {item.submenus.map((sub, j) => (
                                                        <li key={j}>
                                                            <Link href={`/${sub.urlName}`}>
                                                                <FaArrowRightLong/> {sub.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                ))}

                                <li className="nav-item"><Link className="nav-link" href="/blog">Blog</Link></li>
                                <li className="nav-item"><Link className="nav-link" href="/about">About</Link></li>
                                <li className="nav-item"><Link className="nav-link" href="https://app.taxdome.com/login">Client Portal</Link></li>
                                <li className="nav-item"><Link className="nav-link" href="/">Partnership</Link></li>
                                <li className="nav-item"><Link className="nav-link" href="/contact-us">Contact Us</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Phone (Desktop) */}
                        <div className="col-lg-3 d-none d-lg-block">
                            <div className="nav-right">
                                <div className="phone-item d-flex align-items-center">
                                    <div>
                                        <img src="/images/phone.png" alt="phone"/>
                                    </div>
                                    <div className="phone-number ms-2">
                                        <Link href="tel:+17722820922">
                                            <span>+1 (772) 282-0922</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Hamburger */}
                        <div className="col-6 d-lg-none d-flex align-items-center justify-content-end">
                            <button className="mobile-toggle" onClick={handleShow}>
                                <FaBarsStaggered/>
                            </button>
                        </div>
                    </div>
                </div>

                {/* ------------------ MOBILE MENU ------------------- */}
                <Offcanvas show={show} onHide={handleClose} placement="end">
                    <Offcanvas.Header closeButton />
                    <Offcanvas.Body>
                        <ul className="mobile-menu-list">
                            {props.data?.map((item, i) => (
                                <li className="nav-item" key={i}>
                                    <div
                                        className="mobile-link"
                                        onClick={() =>
                                            setOpenDropdown(openDropdown === i ? null : i)
                                        }
                                    >
                                        {item.name}
                                        <FaAngleDown
                                            className={openDropdown === i ? "rotate" : ""}
                                        />
                                    </div>

                                    {item.submenus && openDropdown === i && (
                                        <ul className="mobile-submenu">
                                            {item.submenus.map((sub, j) => (
                                                <li key={j}>
                                                    <Link href={`/${sub.urlName}`}>
                                                        <FaArrowRightLong /> {sub.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}

                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/">Client Portal</Link></li>
                            <li><Link href="/">Partnership</Link></li>
                            <li><Link href="/contact-us">Contact Us</Link></li>
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </>
    );
};

export default AppNavBar;