import React from 'react';
import { Link } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';

const ProjectItem = ({ project_img_num, project_subtitle, project_title }) => {
   return (
      <>
         <div className="col-lg-4 col-md-6">
            <div className="tp-project z-index mb-30">
               <div className="tp-project-img">
                  <img src={`assets/img/project/project-tab-${project_img_num}.jpg`} className="img-fluid" alt="img not found" />
               </div>
               <div className="tp-project-text">
                  <div className="tp-project-text-content">
                     <span className="tp-project-subtitle">{project_subtitle}</span>
                     <h4 className="tp-project-title"><Link to="/projectsDetails">{project_title}</Link></h4>
                  </div>
                  <div className="tp-project-text-icon">
                     <Link to="/projectsDetails"><i className="text-white"><GoPlus /></i></Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ProjectItem;