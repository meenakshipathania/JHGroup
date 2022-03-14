import React from 'react';
import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';

const HomeTwoSingleService = ({image_num,icon,title}) => {
   return (
      <>
         <div className="col-xl-3 col-md-6">
            <div className="tp-quality mb-30 wow fadeInUp" data-wow-delay=".5s">
               <div className="tp-quality-img">
                  <img src={`assets/img/service/service-${image_num}.png`} className="img-fluid" alt="img not found"/>
               </div>
               <div className="tp-quality-text text-center">
                  <div className="tp-quality-text-icon mb-10">
                     <Link to="/servicesDetails">
                        <i className={`flaticon-${icon} tp-quality-text-icon1`}></i>
                        <i className="tp-quality-text-icon2"><HiPlus className="text-white" /></i>
                     </Link>
                  </div>
                  <span>Commercial</span>
                  <h4 className="tp-quality-text-title m-0"><Link to="/servicesDetails">{title}</Link></h4>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeTwoSingleService;