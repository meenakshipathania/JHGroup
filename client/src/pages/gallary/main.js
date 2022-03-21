import React from 'react';
import Footer from '../../components/shared/Footer/Footer';
import Navigation from '../../components/shared/Navigation/Navigation';
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