import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../HomeThree/HomeThree/HomeThreeNavBar/HomeThreeNavBar';
import ServiceDetailsBreadcrumb7 from './ServiceDetailsBreadcrumb7/ServiceDetailsBreadcrumb7';
import ServiceDetailsFaq7 from './ServiceDetailsFaq7/ServiceDetailsFaq7';

const Lawn = () => {
    return (
        <>
            <Navigation />
            <ServiceDetailsBreadcrumb7 />
            <ServiceDetailsFaq7 />
            <Footer />
        </>
    );
};

export default Lawn;