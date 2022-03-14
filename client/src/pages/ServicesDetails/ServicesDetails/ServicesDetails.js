import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
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