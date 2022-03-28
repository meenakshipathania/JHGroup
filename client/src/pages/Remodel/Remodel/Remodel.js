import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../HomeThree/HomeThree/HomeThreeNavBar/HomeThreeNavBar';
import ServiceDetailsBreadcrumb3 from './ServiceDetailsBreadcrumb3/ServiceDetailsBreadcrumb3';
import ServiceDetailsFaq3 from './ServiceDetailsFaq3/ServiceDetailsFaq3';

const Demo = () => {
    return (
        <>
            <Navigation />
            <ServiceDetailsBreadcrumb3 />
            <ServiceDetailsFaq3 />
            <Footer />
        </>
    );
};

export default Demo;