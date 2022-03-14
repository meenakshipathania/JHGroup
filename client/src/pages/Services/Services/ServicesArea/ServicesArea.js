import React from 'react';
import ServicePageArea from '../../../../components/ServiceArea/ServicePageArea';

const ServicesArea = () => {
   return (
      <>
         <section className="tp-service-area-three pt-120 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".3s">
                        <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">Our Best Services</h5>
                        <h2 className="tp-section-title heading-color-black">Quality Cleaning Making <br/>you Much Happy</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
               
               <ServicePageArea service_image_num="9" ser_icon_img="house-cleaning" 
               ser_title="House Cleaning"></ServicePageArea>

               <ServicePageArea service_image_num="10" ser_icon_img="cleaning" 
               ser_title="Hospital Cleaning"></ServicePageArea>

               <ServicePageArea service_image_num="11" ser_icon_img="pot" 
               ser_title="Kitchen Cleaning"></ServicePageArea>

               <ServicePageArea service_image_num="12" ser_icon_img="window" 
               ser_title="Window Cleaning"></ServicePageArea>

               <ServicePageArea service_image_num="13" ser_icon_img="desk" 
               ser_title="Office Cleaning"></ServicePageArea>

               <ServicePageArea service_image_num="14" ser_icon_img="vacuum-cleaner" 
               ser_title="Carpet Cleaning"></ServicePageArea>

               </div>
            </div>
         </section>
      </>
   );
};

export default ServicesArea;