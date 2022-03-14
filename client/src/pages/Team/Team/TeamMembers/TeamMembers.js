import React from 'react';
import TeamMember from '../../../../components/TeamMember/TeamMember';

const TeamMembers = () => {
   return (
      <>
         <section className="tp-service-area-two pt-120 pb-70">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wrapper-two mb-55 text-center wow fadeInUp" data-wow-delay=".2s">
                        <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">Our Team Member</h5>
                        <h2 className="tp-section-title heading-color-black">Guranteed Quality Cleaning <br/>Service Everytime</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <TeamMember image_no="1" name="Georgia Mishel" title="Kitchen Cleaner"></TeamMember>
                  <TeamMember image_no="2" name="Himel Akhand" title="House Cleaner"></TeamMember>
                  <TeamMember image_no="3" name="Shane Watson" title="Office Cleaner"></TeamMember>
                  <TeamMember image_no="4" name="Georgia Melinda" title="Office Cleaner"></TeamMember>
                  <TeamMember image_no="5" name="Samual Nandez" title="Kitchen Cleaner"></TeamMember>
                  <TeamMember image_no="6" name="MyrtleMeachin" title="House Cleaner"></TeamMember>
                  <TeamMember image_no="7" name="Connie Fountain" title="Office Cleaner"></TeamMember>
                  <TeamMember image_no="8" name="Georgia Mishel" title="Office Cleaner"></TeamMember>

               </div>
            </div>
         </section>
      </>
   );
};

export default TeamMembers;