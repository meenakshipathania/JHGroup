import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import ProjectsDetailsArea from './ProjectsDetailsArea/ProjectsDetailsArea';
import ProjectsDetailsBreadcrumb from './ProjectsDetailsBreadcrumb/ProjectsDetailsBreadcrumb';
import ProjectsDetailsItems from './ProjectsDetailsItems/ProjectsDetailsItems';

const ProjectsDetails = () => {
   return (
      <>
         <Navigation />
         <ProjectsDetailsBreadcrumb />
         <ProjectsDetailsArea />
         <ProjectsDetailsItems />
         <Footer />
      </>
   );
};

export default ProjectsDetails;