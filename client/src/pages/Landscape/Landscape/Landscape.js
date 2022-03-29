import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../HomeThree/HomeThree/HomeThreeNavBar/HomeThreeNavBar';
import ServiceDetailsBreadcrumb5 from './ServiceDetailsBreadcrumb5/ServiceDetailsBreadcrumb5';
import ServiceDetailsFaq5 from './ServiceDetailsFaq5/ServiceDetailsFaq5';

const Landscape = () => {
    return (
        <>
            <Navigation />
            <ServiceDetailsBreadcrumb5 />
            <ServiceDetailsFaq5 />
            <Footer />
        </>
    );
};

export default Landscape;