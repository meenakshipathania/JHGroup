import React from 'react';
import { Link } from 'react-router-dom';

const TeamSIngleBlog = ({image_num,date}) => {
   return (
      <>
         <div className="col-lg-4 col-md-6">
            <div className="tp-blog-two mb-30 position-relative wow fadeInUp" data-wow-delay=".3s">
               <div className="tp-blog-img">
                  <Link to="/blogDetails">
                     <img src={`assets/img/blog/blog-img-${image_num}.jpg`} className="img-fluid" alt="img not found" />
                  </Link>
                  <div className="tp-blog-date">
                     <h4>{date}</h4>
                     <span>Aug</span>
                  </div>
               </div>
               <div className="tp-blog-text-two">
                  <div className="tp-blog-meta-two mb-10">
                     <ul>
                        <li className='me-2'><Link to="/blogDetails">Residential</Link></li>
                        <li><Link to="/blogDetails">{" // 0 Comment"}</Link></li>
                     </ul>
                  </div>
                  <h4 className="tp-blog-title-two mb-15"><Link to="/blogDetails">Fementum pede commodo sceid gone malesua</Link></h4>
                  <div className="tp-blog-link-two">
                     <Link to="/blogDetails">Details Here</Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default TeamSIngleBlog;