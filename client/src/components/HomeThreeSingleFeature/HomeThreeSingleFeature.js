import React from 'react';
import { Link } from 'react-router-dom';

const HomeThreeSingleFeature = ({icon,title}) => {
   return (
      <>
         <div className="col-xl-3 col-sm-6">
            <div className="tp-feature-three text-center mb-30 wow fadeInUp" data-wow-delay=".4s">
               <div className="tp-feature-three-icon mb-30">
                  <img src="assets/img/icon/feature-bg.png" className="img-fluid" alt="img not found"/>
                     <i className={`flaticon-${icon}`}></i>
               </div>
               <div className="tp-feature-three-text">
                  <h4 className="tp-feature-three-title mb-20">
                     <Link to="/projectsDetails">{title}</Link></h4>
                  <p>Coingue aten lorem consqua interdum pretium ligaula a semper mauris easy dictuma</p>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeThreeSingleFeature;