import React from 'react';
import Footer from '../../components/shared/Footer/Footer';
import Navigation from '../HomeThree/HomeThree/HomeThreeNavBar/HomeThreeNavBar';
import GallaryBreadcrumb from './GallaryBreadcrumb/GallaryBreadcrumb';
import Gallaryimg from './gallary/gallary';

const Gallary = () => {
    return (
        <>
            <Navigation/>
            <GallaryBreadcrumb />
            <Gallaryimg />
            <Footer/>
        </>
    );
};

export default Gallary;