import React from 'react';
import { Link } from 'react-router-dom';

const WorkingProcess = () => {
   return (
      <>
         <section className="tp-feature-area-three pt-120 pb-80 bg-gray-light">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wrapper text-center mb-45 wow fadeInUp" data-wow-delay=".2s">
                        <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">Our Working Process</h5>
                        <h2 className="tp-section-title mb-25 heading-color-black">Excellent Techniques For <br/>Effective Cleaning</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-3 col-sm-6">
                     <div className="tp-feature-three text-center mb-30 wow fadeInUp" data-wow-delay=".4s">
                        <div className="tp-feature-three-icon mb-30">
                           <img src="assets/img/icon/feature-bg.png" className="img-fluid" alt="img not found"/>
                              <i className="flaticon-booking"></i>
                        </div>
                        <div className="tp-feature-three-text">
                           <h4 className="tp-feature-three-title mb-20 heading-color-black-with-hover">
                              <Link to="/projectsDetails">Book Online</Link></h4>
                           <p>Coingue aten lorem consqua interdum pretium ligaula a semper mauris easy dictuma</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-sm-6">
                     <div className="tp-feature-three text-center mb-30 wow fadeInUp" data-wow-delay=".7s">
                        <div className="tp-feature-three-icon mb-30">
                           <img src="assets/img/icon/feature-bg.png" className="img-fluid" alt="img not found"/>
                              <i className="flaticon-delivery-box"></i>
                        </div>
                        <div className="tp-feature-three-text">
                           <h4 className="tp-feature-three-title mb-20 heading-color-black-with-hover">
                              <Link to="/projectsDetails">Received Data</Link></h4>
                           <p>Coingue aten lorem consqua interdum pretium ligaula a semper mauris easy dictuma</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-sm-6">
                     <div className="tp-feature-three text-center mb-30 wow fadeInUp" data-wow-delay="1s">
                        <div className="tp-feature-three-icon mb-30">
                           <img src="assets/img/icon/feature-bg.png" className="img-fluid" alt="img not found"/>
                              <i className="flaticon-boy"></i>
                        </div>
                        <div className="tp-feature-three-text">
                           <h4 className="tp-feature-three-title mb-20 heading-color-black-with-hover">
                              <Link to="/projectsDetails">Ready Cleaner</Link></h4>
                           <p>Coingue aten lorem consqua interdum pretium ligaula a semper mauris easy dictuma</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-sm-6">
                     <div className="tp-feature-three text-center mb-30 wow fadeInUp" data-wow-delay="1.3s">
                        <div className="tp-feature-three-icon mb-30">
                           <img src="assets/img/icon/feature-bg.png" className="img-fluid" alt="img not found"/>
                              <i className="flaticon-cleaning"></i>
                        </div>
                        <div className="tp-feature-three-text">
                           <h4 className="tp-feature-three-title mb-20 heading-color-black-with-hover">
                              <Link to="/projectsDetails">Start Cleaning</Link></h4>
                           <p>Coingue aten lorem consqua interdum pretium ligaula a semper mauris easy dictuma</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default WorkingProcess;