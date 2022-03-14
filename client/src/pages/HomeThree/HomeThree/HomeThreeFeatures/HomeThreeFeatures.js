import React from 'react';
import HomeThreeSingleFeature from '../../../../components/HomeThreeSingleFeature/HomeThreeSingleFeature';

const HomeThreeFeatures = () => {
   return (
      <>
         <section className="tp-feature-area-three pt-115 pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".2s">
                        <h5 className="tp-section-subtitle-three mb-20"> _ _ How We Works _ _</h5>
                        <h2 className="tp-section-title-two color-theme-blue">Excellent Techniques For <br/>Effective Cleaning</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                 
                  <HomeThreeSingleFeature icon="booking" title="Book Online" />
                  <HomeThreeSingleFeature icon="delivery-box" title="Received Data" />
                  <HomeThreeSingleFeature icon="boy" title="Ready Cleaner" />
                  <HomeThreeSingleFeature icon="cleaning" title="Start Cleaning" />
           
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeFeatures;