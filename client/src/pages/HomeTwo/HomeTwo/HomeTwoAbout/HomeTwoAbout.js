import React from 'react';
import { Link } from 'react-router-dom';

const HomeTwoAbout = () => {
   return (
      <>
         <section className="tp-about-area-two fix pt-120 pb-140">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6 col-md-10">
                     <div className="tp-about-img-two position-relative mr-80 wow fadeInUp" data-wow-delay=".4s">
                        <img src="assets/img/about/about-img-2.jpg" className="img-fluid" alt="img not found"/>
                           <img src="assets/img/about/about-img-3.png" className="img-fluid img-second" alt="img not found"/>
                              <div className="tp-about-img-two-badge">
                                 <h3>20</h3>
                                 <h5>years <br/>Experience</h5>
                              </div>
                           </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="tp-about-text-two wow fadeInUp" data-wow-delay=".7s">
                           <div className="section-title-wrapper mb-20">
                              <h2 className="tp-section-title-two translate-y--10"><span>Brightening</span> The Home From Every Side</h2>
                           </div>
                           <p className="mb-40">Fusce fusce ante dis varius iaculis quis penatibus do placerat et convallis ultricies egestas hacker pharetra veile litora nascetur diam dapibus euismod neque sapien siverra nunc nisler fortune litora neque.</p>
                           <div className="tp-about-text-two-service">
                              <div className="tp-about-text-two-service-single mb-65">
                                 <div className="tp-about-text-two-service-single-icon">
                                    <span><i className="flaticon-boy"></i></span>
                                 </div>
                                 <div className="tp-about-text-two-service-single-text">
                                    <h4 className="tp-about-text-two-service-title">
                                       <Link to="/servicesDetails">Service Monitoring</Link></h4>
                                    <p>Beclosing this notice senectus sodales habitant in dapibus adam</p>
                                 </div>
                              </div>
                              <div className="tp-about-text-two-service-single mb-60">
                                 <div className="tp-about-text-two-service-single-icon">
                                    <span><i className="flaticon-shuttle"></i></span>
                                 </div>
                                 <div className="tp-about-text-two-service-single-text">
                                    <h4 className="tp-about-text-two-service-title">
                                       <Link to="/servicesDetails">Fast Communication</Link></h4>
                                    <p>Museu malesuada nullama aenean conubia euismod diam lectus</p>
                                 </div>
                              </div>
                           </div>
                           <div className="tp-about-text-two-sign pt-10">
                              <div className="tp-about-text-two-sign-img">
                                 <img src="assets/img/about/sign.png" className="img-fluid" alt="img not found"/>
                              </div>
                              <div className="tp-about-text-two-sign-text">
                                 <h4 className="tp-about-text-two-sign-name">Fesus Cameron</h4>
                                 <span>CEO & Founder</span>
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

export default HomeTwoAbout;