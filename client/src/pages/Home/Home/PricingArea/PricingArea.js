import React from 'react';
import HomeSinglePrice from '../../../../components/HomeSinglePrice/HomeSinglePrice';

const PricingArea = () => {
   return (
      <>
         <section className="tp-pricing-area pt-120 pb-90">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-md-8">
                     <div className="section-title-wrapper mb-55 wow fadeInUp" data-wow-delay=".2s">
                        <h5 className="tp-section-subtitle common-yellow-shape section__sm__title mb-20">Our Affordable Package</h5>
                        <h2 className="tp-section-title">Special Pricing Package <br/>No Hidden Charge</h2>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <nav className="text-start text-md-end wow fadeInUp" data-wow-delay=".4s">
                        <div className="nav tp-pricing-tabs" id="nav-tab" role="tablist">
                           <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Monthly</button>
                           <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Yearly</button>
                        </div>
                     </nav>
                  </div>
               </div>
               <div className="row">
                  <div className="col-12">
                     <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                           <div className="row">

                              <HomeSinglePrice icon_name="mop" title="Residential" price="25.00" />

                              <HomeSinglePrice icon_name="cleaning-1" title="Buildings" price="30.00" />

                              <HomeSinglePrice icon_name="vacuum-cleaner-1" title="Commercial" price="45.00" />

                           </div>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                           <div className="row">

                              <HomeSinglePrice icon_name="mop" title="Residential" price="55.00" />

                              <HomeSinglePrice icon_name="cleaning-1" title="Buildings" price="75.00" />

                              <HomeSinglePrice icon_name="vacuum-cleaner-1" title="Commercial" price="95.00" />

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

export default PricingArea;