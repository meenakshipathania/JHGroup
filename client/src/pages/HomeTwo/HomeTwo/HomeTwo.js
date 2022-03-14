import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import ServicesBrandLogos from '../../Services/Services/ServicesBrandLogo/ServicesBrandLogos';
import HomeTwoAbout from './HomeTwoAbout/HomeTwoAbout';
import HomeTwoBlogs from './HomeTwoBlogs/HomeTwoBlogs';
import HomeTwoCtaArea from './HomeTwoCtaArea/HomeTwoCtaArea';
import HomeTwoFaq from './HomeTwoFaq/HomeTwoFaq';
import HomeTwoFeatures from './HomeTwoFeatures/HomeTwoFeatures';
import HomeTwoHeroSection from './HomeTwoHeroSection/HomeTwoHeroSection';
import HomeTwoNavbar from './HomeTwoNavbar/HomeTwoNavbar';
import HomeTwoPricing from './HomeTwoPricing/HomeTwoPricing';
import HomeTwoServices from './HomeTwoServices/HomeTwoServices';
import HomeTwoServicesDetails from './HomeTwoServicesDetails/HomeTwoServicesDetails';
import HomeTwoTestimonials from './HomeTwoTestimonials/HomeTwoTestimonials';

const HomeTwo = () => {
    return (
        <>
            <HomeTwoNavbar/>
            <HomeTwoHeroSection/>
            <HomeTwoCtaArea/>
            <HomeTwoAbout/>
            <HomeTwoServices/>
            <HomeTwoFeatures/>
            <HomeTwoPricing/>
            <HomeTwoTestimonials/>
            <ServicesBrandLogos/>
            <HomeTwoServicesDetails/>
            <HomeTwoFaq/>
            <HomeTwoBlogs/>
            <Footer/>
        </>
    );
};

export default HomeTwo;