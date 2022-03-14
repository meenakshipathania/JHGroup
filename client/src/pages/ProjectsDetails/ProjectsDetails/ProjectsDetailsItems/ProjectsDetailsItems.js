import React from 'react';
import ProjectItem from '../../../../components/ProjectItem/ProjectItem';

const ProjectsDetailsItems = () => {
   return (
      <>
         <section className="tp-project-details-area tp-prjects-tab-content pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wrapper-two mb-55 text-center wow fadeInUp" data-wow-delay=".2s">
                        <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">Some Completed Project</h5>
                        <h2 className="tp-section-title heading-color-black">Every Project is Different <br/>Every Client special</h2>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <ProjectItem project_img_num="1" project_subtitle="Residential Service"
                  project_title="Window Cleaning"></ProjectItem>

                  <ProjectItem project_img_num="2" project_subtitle="Residential Service"
                  project_title="Kitchen Cleaning"></ProjectItem>

                  <ProjectItem project_img_num="3" project_subtitle="Residential Service"
                  project_title="Exterior Cleaning"></ProjectItem>

               </div>
            </div>
         </section>
      </>
   );
};

export default ProjectsDetailsItems;