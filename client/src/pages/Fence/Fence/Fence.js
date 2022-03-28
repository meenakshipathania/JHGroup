import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../HomeThree/HomeThree/HomeThreeNavBar/HomeThreeNavBar';
import ServiceDetailsBreadcrumb2 from './ServiceDetailsBreadcrumb2/ServiceDetailsBreadcrumb2';
import ServiceDetailFaq2 from './ServiceDetailFaq2/ServiceDetailFaq2';

const Demo = () => {
    return (
        <>
            <Navigation />
            <ServiceDetailsBreadcrumb2 />
            <ServiceDetailFaq2 />
            <Footer />
        </>
    );
};

export default Demo;