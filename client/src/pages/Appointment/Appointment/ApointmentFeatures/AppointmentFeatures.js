import React from 'react';
import SingleAppointmentFeature from '../../../../components/SingleAppointmentFeature/SingleAppointmentFeature';

const AppointmentFeatures = () => {
   return (
      <>
         <section className="tp-feature-area-three pt-120 pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".2s">
                        <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">Our Working Process</h5>
                        <h2 className="tp-section-title mb-25 heading-color-black">Excellent Techniques For <br/>Effective Cleaning</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                 
                  <SingleAppointmentFeature icon="booking" title="Book Online" />
                  <SingleAppointmentFeature icon="delivery-box" title="Received Data" />
                  <SingleAppointmentFeature icon="boy" title="Ready Cleaner" />
                  <SingleAppointmentFeature icon="cleaning" title="Start Cleaning" />

               </div>
            </div>
         </section>
      </>
   );
};

export default AppointmentFeatures;