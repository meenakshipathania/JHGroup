import React from 'react';
import { Link } from 'react-router-dom';

const HomeServiceItem = ({icon_name,title}) => {
   return (
      <>
         <div className="col-xl-4 col-sm-6">
            <div className="tp-services white-bg mb-30 wow fadeInUp" data-wow-delay=".2s">
               <div className="tp-services-icon yellow-circle-shape">
                  <i className={`flaticon-${icon_name}`}></i>
               </div>
               <div className="tp-services-text fix">
                  <h4 className="tp-services-text-title mb-15 hover-theme-color">
                     <Link to="/servicesDetails">{title}</Link></h4>
                  <p className="mb-20">Bras fringilla conubia odios uira metus torquent commodo quam praesent torna pede</p>
                  <div className="tp-services-text-link">
                     <Link to="/servicesDetails"><i className="flaticon-enter"></i> Read Details</Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeServiceItem;