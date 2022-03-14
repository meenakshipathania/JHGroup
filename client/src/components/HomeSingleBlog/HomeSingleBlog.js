import React from 'react';
import { Link } from 'react-router-dom';

const HomeSingleBlog = ({blog_img_num,date,title}) => {
    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div className="tp-blog mb-30 wow fadeInUp" data-wow-delay=".4s">
                    <div className="tp-blog-img mb-25">
                        <Link to="/blogDetails"><img src={`assets/img/blog/blog-img-${blog_img_num}.jpg`} className="img-fluid" alt="img not found" /></Link>
                        <span className="tp-blog-badge">Home Cleaning</span>
                    </div>
                    <div className="tp-blog-text">
                        <div className="tp-blog-meta mb-10">
                            <ul>
                                <li><Link to="/blogDetails">{"// By Jhon Cardo"}</Link></li>
                                <li><Link to="/blogDetails">{date}</Link></li>
                            </ul>
                        </div>
                        <h4 className="tp-blog-title mb-20"><Link to="/blogDetails">{title}</Link></h4>
                        <div className="tp-blog-link">
                            <Link to="/blogDetails"><i className="flaticon-enter"></i> Continue Reading</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeSingleBlog;