import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import ProjectsArea from './ProjectsArea/ProjectsArea';
import ProjectsBreadcrumb from './ProjectsBreadcrumb/ProjectsBreadcrumb';

const Projects = () => {
    return (
        <>
            <Navigation />
            <ProjectsBreadcrumb />
            <ProjectsArea />
            <Footer />
        </>
    );
};

export default Projects;