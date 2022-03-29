import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../HomeThree/HomeThree/HomeThreeNavBar/HomeThreeNavBar';
import ServiceDetailsBreadcrumb4 from './ServiceDetailsBreadcrumb4/ServiceDetailsBreadcrumb4';
import ServiceDetailsFaq4 from './ServiceDetailsFaq4/ServiceDetailsFaq4';

const Drain = () => {
    return (
        <>
            <Navigation />
            <ServiceDetailsBreadcrumb4 />
            <ServiceDetailsFaq4 />
            <Footer />
        </>
    );
};

export default Drain;