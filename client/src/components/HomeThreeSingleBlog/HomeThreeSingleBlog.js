import React from 'react';
import { Link } from 'react-router-dom';

const HomeThreeSingleBlog = ({image_num,title}) => {
   return (
      <>
         <div className="col-lg-4 col-md-6">
            <div className="tp-blog-three mb-30 wow fadeInUp" data-wow-delay=".4s">
               <div className="tp-blog-three-img">
                  <Link to="/blogDetails">
                     <img src={`assets/img/blog/blog-img-${image_num}.jpg`} className="img" 
                     alt="img-not-found"/>                        
                  </Link>
               </div>
               <div className="tp-blog-three-text">
                  <div className="tp-blog-three-text-meta text-white">
                     <Link to="/blogDetails">By Jhon Cardo</Link>
                     <span>_ _</span>
                     <Link to="/blogDetails">Jun 02 - 2021</Link>
                  </div>
                  <h4 className="tp-blog-three-title mb-15">
                     <Link to="/blogDetails">{title}</Link>
                  </h4>
                  <div className="tp-blog-three-link">
                     <Link to="/blogDetails"><i className="flaticon-enter"></i> Continue Reading</Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeThreeSingleBlog;