import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../HomeThree/HomeThree/HomeThreeNavBar/HomeThreeNavBar';
import GalleryBreadcrumb from './galleryBreadcrumb/galleryBreadcrumb';
import ImageDetail from './imagedetail/imagedetail';

const GalleryConcrete = () => {
    return (
        <>
            <Navigation />
            <GalleryBreadcrumb />
            <ImageDetail />
            <Footer />
        </>
    );
};

export default GalleryConcrete;