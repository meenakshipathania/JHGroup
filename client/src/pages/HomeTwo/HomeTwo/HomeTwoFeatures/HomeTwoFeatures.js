import React from 'react';
import HomeTwoSingleFeature from '../../../../components/HomeTwoSingleFeature/HomeTwoSingleFeature';

const HomeTwoFeatures = () => {
   return (
      <>
         <section className="tp-feature-area-two pt-110 pb-90">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6">
                     <div className="section-title-wrapper-two mb-45 wow fadeInUp" data-wow-delay=".2s">
                        <h2 className="tp-section-title-two">Clean Start <span>Alaways</span> Great Begining</h2>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="tp-feature-title-desc mb-45 wow fadeInUp" data-wow-delay=".2s">
                        <p>Buscipit feugiat. Metus molestie nostra sodales eu fringilla habitant non ullamcorpe taciti elementum per dictum luctus nonummy primis volutpat pretium platea pulvina dictumst lacus rutrum nullam laoreet imperdiet ultrices.</p>
                     </div>
                  </div>
               </div>
               <div className="row justify-content-between align-items-xl-center">
                  <div className="col-xl-5 col-lg-6">
                     <div className="tp-feature-img mb-30 wow fadeInUp" data-wow-delay=".4s">
                        <img src="assets/img/feature/feature-img-1.jpg" alt="img not found"/>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                     <div className="row">
                       
                        <HomeTwoSingleFeature icon="delivery-box" title="Online Estimation"/>
                        <HomeTwoSingleFeature icon="gift-box" title="Project Discount"/>
                        <HomeTwoSingleFeature icon="video-camera" title="Work Monitoring"/>
                        <HomeTwoSingleFeature icon="snowfall" title="Satisfied Service"/>
                      
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTwoFeatures;