import React from 'react';
import { Link } from 'react-router-dom';

const AboutArea = () => {
   return (
      <>
         <section className="tp-about-area tp-abouts-area position-relative pt-120 pb-100 fix">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-8 col-md-10">
                     <div className="tp-about-img-two tp-abouts-img-two position-relative mr-80 wow fadeInUp" data-wow-delay=".4s">
                        <img src="assets/img/about/about-img-2.jpg" className="img-fluid" alt="img not found" />
                        <img src="assets/img/about/about-img-3.png" className="img-fluid img-second" alt="img not found" />
                        <div className="tp-about-img-two-badge">
                           <h3>20</h3>
                           <h5>years <br />Experience</h5>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-md-10">
                     <div className="tp-about-text tp-about-inner-page-text z-index wow fadeInUp" data-wow-delay=".6s">
                        <div className="section-title-wrapper mb-30">
                           <h5 className="tp-section-subtitle common-yellow-shape mb-20 heading-color-black">About our Company</h5>
                           <h2 className="tp-section-title heading-color-black">Our Success Cleaning <br />Up your Mess</h2>
                        </div>
                        <p className="mb-40">Can consent to the use of such technologies byclosing this notice senectus amet sodales habitant dapibus </p>
                        <div className="row mb-10">
                           <div className="col-sm-6">
                              <div className="tp-about-service mb-30">
                                 <div className="tp-about-service-icon yellow-circle-shape mb-15">
                                    <i className="flaticon-snowfall"></i>
                                 </div>
                                 <div className="tp-about-service-text">
                                    <h4 className="tp-about-service-text-title mb-15 heading-color-black-with-hover">
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
                                    <h4 className="tp-about-service-text-title mb-15 heading-color-black-with-hover">
                                       <Link to="/services">Commercial Cleaning Services</Link></h4>
                                    <p>Duis congue atend lorem consequat interdum pretium ligula semper</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-sm-6">
                              <div className="tp-about-number mb-30">
                                 <div className="tp-about-number-icon">
                                    <i className="flaticon-phone-call-1"></i>
                                 </div>
                                 <div className="tp-about-number-text">
                                    <span className="heading-color-black">Free Consutacy</span>
                                    <a href="tel:02(552)6620808" className="heading-color-black">02 (552) 662 0808</a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-sm-6">
                              <div className="tp-about-author mb-30">
                                 <div className="tp-about-author-img">
                                    <img src="assets/img/about/about-author.png" className="img-fluid" alt="img not found" />
                                 </div>
                                 <div className="tp-about-author-text">
                                    <h4 className="tp-about-author-text-title heading-color-black">Daniel Martyn</h4>
                                    <span className="heading-color-black">CEO - Fetoxe</span>
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