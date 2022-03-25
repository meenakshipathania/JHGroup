import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../HomeThree/HomeThree/HomeThreeNavBar/HomeThreeNavBar';
import ServiceDetailsBreadcrumb1 from './ServiceDetailsBreadcrumb1/ServiceDetailsBreadcrumb1';
import ServiceDetailsFaq1 from './ServiceDetailsFaq1/ServiceDetailsFaq1';

const Demo = () => {
    return (
        <>
            <Navigation />
            <ServiceDetailsBreadcrumb1 />
            <ServiceDetailsFaq1 />
            <Footer />
        </>
    );
};

export default Demo;