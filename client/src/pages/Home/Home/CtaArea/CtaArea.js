import React from 'react';

const CtaArea = () => {
   return (
      <>
         <section className="tp-appoint-cta-area yellow-dark-bg pt-80 pb-65">
            <div className="container">
               <div className="row align-items-center custom-mar-20">
                  <div className="col-xl-2 col-lg-12 custom-pad-20">
                     <div className="tp-appoint wow fadeInUp" data-wow-delay=".1s">
                        <h4 className="tp-appoint-title">Online <br/> Appointment </h4>
                     </div>
                  </div>
                  <div className="col-xl-8 col-lg-9 custom-pad-20">
                     <div className="row align-items-center custom-mar-20">
                        <div className="col-lg-4 custom-pad-20">
                           <div className="tp-appoint wow fadeInUp" data-wow-delay=".3s">
                              <input type="text" placeholder="Full Name"/>
                           </div>
                        </div>
                        <div className="col-lg-4 custom-pad-20">
                           <div className="tp-appoint wow fadeInUp" data-wow-delay=".5s">
                              <input type="text" placeholder="Phone Number"/>
                           </div>
                        </div>
                        <div className="col-lg-4 custom-pad-20">
                           <div className="tp-appoint select-field-arrow wow fadeInUp" data-wow-delay=".7s">
                              <select>
                                 <option defaultValue="">Service Name</option>
                                 <option defaultValue="">Commercial Service</option>
                                 <option defaultValue="">Residential Service</option>
                                 <option defaultValue="">Industrial Service</option>
                                 <option defaultValue="">Commercial Service</option>
                                 <option defaultValue="">Residential Service</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 custom-pad-20">
                     <div className="tp-appoint text-end wow fadeInUp" data-wow-delay=".9s">
                        <button type="submit" className="theme-btn text-white">
                           <i className="flaticon-enter"></i> Submit Now</button>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default CtaArea;