import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import AboutArea from '../../Home/Home/AboutArea/AboutArea';
import AboutBanner from './AboutBanner/AboutBanner';
import AboutFaq from './AboutFaq/AboutFaq';
import AboutServices from './AboutServices/AboutServices';
import AboutTestimonial from './AboutTestimonial/AboutTestimonial';
import AboutBreadcrumb from './Breadcrumb/AboutBreadcrumb';
// import Breadcrumb from './Breadcrumb/AboutBreadcrumb';
import WorkingProcess from './WorkingProcess/WorkingProcess';

const About = () => {
    return (
        <>
            <Navigation/>
            <AboutBreadcrumb />
            <AboutArea />
            <WorkingProcess />
            <AboutFaq />
            <AboutServices />
            <AboutTestimonial />
            <AboutBanner />
            <Footer/>
        </>
    );
};

export default About;