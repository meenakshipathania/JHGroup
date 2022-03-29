import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../HomeThree/HomeThree/HomeThreeNavBar/HomeThreeNavBar';
import ServiceDetailsBreadcrumb6 from './ServiceDetailsBreadcrumb6/ServiceDetailsBreadcrumb6';
import ServiceDetailsFaq6 from './ServiceDetailsFaq6/ServiceDetailsFaq6';

const Lawn = () => {
    return (
        <>
            <Navigation />
            <ServiceDetailsBreadcrumb6 />
            <ServiceDetailsFaq6 />
            <Footer />
        </>
    );
};

export default Lawn;