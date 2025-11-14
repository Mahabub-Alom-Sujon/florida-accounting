"use client"
import React, { useState, useCallback, useEffect } from 'react';
import {FaRegCalendarAlt} from "react-icons/fa";
import Link from "next/link";
import {FaArrowRight} from "react-icons/fa6";
import {IoSearch} from "react-icons/io5";
import { useRouter } from "next/navigation";
import ReactPaginate from "react-paginate";
import moment from "moment";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";

const BlogList = () => {
    const router = useRouter();
    const [searchKey, setSearchKey] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [perPage, setPerPage] = useState(8);
    const [pageNo, setPageNo] = useState(1);
    const [catID, setCatID] = useState([]);
    const [data, setData] = useState(null);
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCategory = async () => {
        const res = await fetch('/api/category');
        const result = await res.json();
        setCategory(result.data);
    };

    const fetchBlogList = async () => {
        //setLoading(true);
        const res = await fetch(`/api/blog_post?pageNo=${pageNo}&perPage=${perPage}&searchKey=${searchKey}&catID=${catID}`);
        const result = await res.json();
        setData(result);
        //setLoading(false);
    };

    useEffect(() => {
        fetchCategory();
    }, []);

    useEffect(() => {
        fetchBlogList();
    }, [pageNo, searchKey, catID]);

    const searchOnChange = useCallback((e) => {
        setSearchInput(e.target.value);
        if (e.target.value.length === 0) {
            setSearchKey("");
        }
    }, []);

    const searchButtonClick = useCallback(() => {
        setSearchKey(searchInput);
        setPageNo(1);
    }, [searchInput]);

    const handlePageClick = useCallback(({ selected }) => {
        setPageNo(selected + 1);
    }, []);

    const handleCategoryChange = useCallback((e) => {
        const { value, checked } = e.target;
        setCatID(prev => checked ? [...prev, value] : prev.filter(id => id !== value));
        setPageNo(1);
    }, []);
    return (
        <>
            <section className="blog-list py-4">
                {/*{JSON.stringify(data['data'])}*/}
                <div className="container container-xl container-xxl">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                            <div className="row">
                                {
                                    data?.['data']?.map((item, index) => (
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 mb-4" key={index}>
                                            <div className="blog-single-post">
                                                <div className="blog-post-thumb">
                                                    <img src={item['img_url']} alt={item['alt_text']}/>
                                                </div>
                                                <div className="blog-post-content">
                                                    <div className="cat">
                                                        <span>{item['category']['name']}</span>
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
                                                            <Link
                                                                href={`/blog-details/${item.url_title}`}>{item['button_text']}
                                                                <span><FaArrowRight/></span></Link>
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    ))
                                }
                                <div className="col-lg-12 d-flex justify-content-center mt-4">
                                    <nav aria-label="Page navigation example">
                                        {data && (
                                            <ReactPaginate
                                                previousLabel={<AiOutlineLeft/>}
                                                nextLabel={<AiOutlineRight/>}
                                                pageClassName="page-item"
                                                pageLinkClassName="page-link"
                                                previousClassName="page-item"
                                                previousLinkClassName="page-link"
                                                nextClassName="page-item"
                                                nextLinkClassName="page-link"
                                                breakLabel="..."
                                                breakClassName="page-item"
                                                breakLinkClassName="page-link"
                                                pageCount={Math.ceil(data.total / perPage)}
                                                marginPagesDisplayed={2}
                                                pageRangeDisplayed={5}
                                                onPageChange={handlePageClick}
                                                containerClassName="pagination"
                                                activeClassName="active"
                                                forcePage={pageNo - 1}
                                            />
                                        )}
                                    </nav>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-4 col-xl-4 col-lg-4">
                            <div className="blog-right">
                                <div className='Single-widget'>
                                    <div className='Widget-Search'>
                                        <h4>Search</h4>
                                        <div className="Search-form">
                                            <input
                                                onChange={searchOnChange}
                                                type="search"
                                                placeholder="Search.."
                                                value={searchInput}
                                            />
                                            <button
                                                style={!searchInput ? {pointerEvents: 'none', opacity: 0.8} : {}}
                                                onClick={searchButtonClick}
                                                type="button"
                                            >
                                                <IoSearch/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='Single-widget'>
                                    <div className="Widget-category">
                                    <h4>Categories</h4>
                                        <ul className='filter mb-0 ps-0'>
                                            {category.map((item) => (
                                                <li key={item.id}>
                                                    <input
                                                        type="checkbox"
                                                        value={String(item.id)}
                                                        checked={catID.includes(String(item.id))}
                                                        onChange={handleCategoryChange}
                                                    />
                                                    <span>{item.name}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogList;