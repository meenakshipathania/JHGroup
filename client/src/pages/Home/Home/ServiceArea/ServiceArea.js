import React from 'react';
import HomeServiceItem from '../../../../components/HomeServiceItem/HomeServiceItem';

const ServiceArea = () => {
   return (
      <>
         <section className="tp-services-area theme-dark-bg">
            <div className="tp-custom-container">
               <div className="tp-services-bg grey-bg pt-120 pb-90 z-index">
                  <div className="container">
                     <div className="row justify-content-center">
                        <div className="col-lg-8">
                           <div className="tp-section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".1s">
                              <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-25">Our Popular Services</h5>
                              <h2 className="tp-section-title">Our Success Cleaning <br/>Up your Mess</h2>
                           </div>
                        </div>
                     </div>
                     <div className="row">

                        <HomeServiceItem icon_name="pot" title="Kitchen Cleaning" />

                        <HomeServiceItem icon_name="vacuum-cleaner" title="Carpet Cleaning" />

                        <HomeServiceItem icon_name="house-cleaning" title="House Cleaning" />

                        <HomeServiceItem icon_name="desk" title="Office Cleaning" />

                        <HomeServiceItem icon_name="cleaning" title="Road Cleaning" />

                        <HomeServiceItem icon_name="window" title="Window Cleaning" />

                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ServiceArea;