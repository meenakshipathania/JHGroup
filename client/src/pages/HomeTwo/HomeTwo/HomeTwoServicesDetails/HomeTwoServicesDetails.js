import React from 'react';
import TeamMember from '../../../../components/TeamMember/TeamMember';

const HomeTwoServicesDetails = () => {
   return (
      <>
         <section className="tp-service-area-two pt-110 pb-85">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wrapper-two mb-55 text-center wow fadeInUp" data-wow-delay=".2s">
                        <h2 className="tp-section-title-two">Guranteed <span>Quality</span> Cleaning <br/>Service Everytime</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <TeamMember image_no="1" name="Georgia Mishel" title="Kitchen Cleaner"></TeamMember>
                  <TeamMember image_no="2" name="Himel Akhand" title="House Cleaner"></TeamMember>
                  <TeamMember image_no="3" name="Shane Watson" title="Office Cleaner"></TeamMember>
                  <TeamMember image_no="4" name="Georgia Melinda" title="Office Cleaner"></TeamMember>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTwoServicesDetails;