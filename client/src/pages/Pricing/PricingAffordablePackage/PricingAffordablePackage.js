import React from 'react';
import AboutSinglePrice from '../../../components/AboutSinglePrice/AboutSinglePrice';


const PricingAffordablePackage = () => {
   return (
      <>
         <section className="tp-pricing-area pt-120 pb-90">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-md-12">
                     <div className="section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".2s">
                        <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">Our Affordable Package</h5>
                        <h2 className="tp-section-title heading-color-black">Special Pricing Package <br/>No Hidden Charge</h2>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <AboutSinglePrice icon_name="mop" title="Residential" price="25.00" />

                  <AboutSinglePrice icon_name="cleaning-1" title="Buildings" price="30.00" />

                  <AboutSinglePrice icon_name="vacuum-cleaner-1" title="Commercial" price="45.00" />

               </div>
            </div>
         </section>
      </>
   );
};

export default PricingAffordablePackage;