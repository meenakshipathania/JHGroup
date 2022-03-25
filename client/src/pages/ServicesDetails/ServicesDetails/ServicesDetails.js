import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../HomeThree/HomeThree/HomeThreeNavBar/HomeThreeNavBar';
import ServicesDetailsBreadcrumb from './ServicesDetailsBreadcrumb/ServicesDetailsBreadcrumb';
import ServicesDetailsFaq from './ServicesDetailsFaq/ServicesDetailsFaq';

const ServicesDetails = () => {
    return (
        <>
            <Navigation />
            <ServicesDetailsBreadcrumb />
            <ServicesDetailsFaq />
            <Footer />
        </>
    );
};

export default ServicesDetails;