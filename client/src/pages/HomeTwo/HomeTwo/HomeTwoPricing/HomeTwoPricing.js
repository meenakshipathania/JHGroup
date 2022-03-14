import React from 'react';
import SpecialSinglePricingPackage from '../../../../components/SpecialSinglePricingPackage/SpecialSinglePricingPackage';

const HomeTwoPricing = () => {
   return (
      <>
         <section className="tp-pricing-area-two position-relative pt-110 pb-90">
            <div className="tp-pricing-two-shape"></div>
            <div className="container z-index">
               <div className="row">
                  <div className="col-md-8">
                     <div className="section-title-wrapper-two mb-55 wow fadeInUp" data-wow-delay=".2s">
                        <h2 className="tp-section-title-two text-white">Cheaf and <span className="theme-yellow">Global Standard</span> <br/>Cleaning Services</h2>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <nav className="text-start text-md-end wow fadeInUp" data-wow-delay=".4s">
                        <div className="nav tp-pricing-tabs tp-pricing-tabs-two mt-10" id="nav-tab" role="tablist">
                           <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Monthly</button>
                           <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Yearly</button>
                        </div>
                     </nav>
                  </div>
               </div>
               <div className="row">
                  <div className="col-12">
                     <div className="tab-content z-index" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                           <div className="row">

                              <SpecialSinglePricingPackage image_num="1" price="25.00" 
                              title="Residential"  />
                              <SpecialSinglePricingPackage image_num="2" price="28.00"
                              activeclassName="active" title="Buildings" activeClass="active" />
                              <SpecialSinglePricingPackage image_num="3" price="32.00" 
                              title="Commercial" />

                           </div>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                           <div className="row">

                              <SpecialSinglePricingPackage image_num="1" price="35.00" 
                              title="Residential"  />
                              <SpecialSinglePricingPackage image_num="2" price="38.00"
                              title="Buildings" activeclassName="active" activeClass="active" />
                              <SpecialSinglePricingPackage image_num="3" price="42.00" 
                              title="Commercial" />

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

export default HomeTwoPricing;