import React from 'react';

const HomeThreeContact = () => {
   return (
      <>
         <div className="tp-contact-cta-area position-relative pt-85">
            <div className="container">
               <div className="tp-contact-cta-bg">
                  <div className="row">
                     <div className="col-lg-4 col-sm-6">
                        <div className="tp-contact-cta border-r-1 wow fadeInUp" data-wow-delay=".3s">
                           <div className="tp-contact-cta-inner">
                              <div className="tp-contact-cta-inner-icon">
                                 <i className="flaticon-home"></i>
                              </div>
                              <div className="tp-contact-cta-inner-text">
                                 <span>Office Address</span>
                                 <h5>34/A Palmal, London</h5>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-sm-6">
                        <div className="tp-contact-cta border-r-2 wow fadeInUp" data-wow-delay=".6s">
                           <div className="tp-contact-cta-inner justify-content-center">
                              <div className="tp-contact-cta-inner-icon">
                                 <i className="flaticon-support"></i>
                              </div>
                              <div className="tp-contact-cta-inner-text">
                                 <span>Free Contact</span>
                                 <h5><a href="tel:02(850)2566325">02 (850) 256 6325</a></h5>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6">
                        <div className="tp-contact-cta wow fadeInUp" data-wow-delay=".9s">
                           <div className="tp-contact-cta-inner justify-content-end">
                              <div className="tp-contact-cta-inner-icon">
                                 <i className="flaticon-email-1"></i>
                              </div>
                              <div className="tp-contact-cta-inner-text">
                                 <span>Email Address</span>
                                 <h5><a href="mailto:info@thempure.com">info@thempure.com</a></h5>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeThreeContact;