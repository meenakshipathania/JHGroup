import React from 'react';
import { Link } from 'react-router-dom';

const AboutArea = () => {
   return (
      <>
         <section className="tp-about-area position-relative pt-120 pb-90 fix">
            <div className="tp-about-shape">
               <img src="assets/img/about/about-shape-1.jpg" className="img-fluid" alt="img not found"/>
            </div>
            <div className="container">
               <div className="row justify-content-xl-between justify-content-md-center">
                  <div className="col-xl-5 col-12">
                     <div className="tp-about-img z-index wow fadeInUp" data-wow-delay=".3s">
                        <img src="assets/img/about/about-img-1.jpg" alt="img not found"/>
                     </div>
                  </div>
                  <div className="col-xl-6 col-md-10">
                     <div className="tp-about-text z-index wow fadeInUp" data-wow-delay=".6s">
                        <div className="section-title-wrapper mb-30">
                           <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20">
                              About our Company</h5>
                           <h2 className="tp-section-title">Our Success Cleaning <br/>Up your Mess</h2>
                        </div>
                        <p className="mb-40">Can consent to the use of such technologies byclosing this notice senectus amet sodales habitant dapibus </p>
                        <div className="row mb-10">
                           <div className="col-sm-6">
                              <div className="tp-about-service mb-30">
                                 <div className="tp-about-service-icon yellow-circle-shape mb-15">
                                    <i className="flaticon-snowfall"></i>
                                 </div>
                                 <div className="tp-about-service-text">
                                    <h4 className="tp-about-service-text-title mb-15 hover-theme-color">
                                       <Link to="/services">Residential Cleaning Services</Link></h4>
                                    <p>Duis congue atend lorem consequat interdum pretium ligula semper</p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-sm-6">
                              <div className="tp-about-service mb-30">
                                 <div className="tp-about-service-icon yellow-circle-shape mb-15">
                                    <i className="flaticon-business-and-trade"></i>
                                 </div>
                                 <div className="tp-about-service-text">
                                    <h4 className="tp-about-service-text-title mb-15 hover-theme-color">
                                       <Link to="/services">Commercial Cleaning Services</Link></h4>
                                    <p>Duis congue atend lorem consequat interdum pretium ligula semper</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-sm-6">
                              <div className="tp-about-author mb-30">
                                 <div className="tp-about-author-img">
                                    <img src="assets/img/about/about-author.png" className="img-fluid" alt="img not found"/>
                                 </div>
                                 <div className="tp-about-author-text">
                                    <h4 className="tp-about-author-text-title">Daniel Martyn</h4>
                                    <span>CEO - Fetoxe</span>
                                 </div>
                              </div>
                           </div>
                           <div className="col-sm-6">
                              <div className="tp-about-number mb-30">
                                 <div className="tp-about-number-icon">
                                    <i className="flaticon-phone-call-1"></i>
                                 </div>
                                 <div className="tp-about-number-text">
                                    <span>Free Consutacy</span>
                                    <a href="tel:02(552)6620808">02 (552) 662 0808</a>
                                 </div>
                              </div>
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

export default AboutArea;