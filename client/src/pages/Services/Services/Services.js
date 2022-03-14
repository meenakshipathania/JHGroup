import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import ServicesArea from './ServicesArea/ServicesArea';
import ServicesBrandLogos from './ServicesBrandLogo/ServicesBrandLogos';
import ServicesBreadcrumb from './ServicesBreadcrumb/ServicesBreadcrumb';
import ServicesPricing from './ServicesPricing/ServicesPricing';
import ServicesTestimonials from './ServicesTestimonial/ServicesTestimonials';

const Services = () => {
    return (
        <>
            <Navigation/>
            <ServicesBreadcrumb />
            <ServicesArea />
            <ServicesTestimonials />
            <ServicesBrandLogos />
            <ServicesPricing />
            <Footer/>
        </>
    );
};

export default Services;