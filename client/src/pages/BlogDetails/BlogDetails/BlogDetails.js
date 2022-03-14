import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import BlogDetailsArea from './BlogDetailsArea/BlogDetailsArea';
import BlogDetailsBreadcrumb from './BlogDetailsBreadcrumb/BlogDetailsBreadcrumb';

const BlogDetails = () => {
    return (
        <>
            <Navigation />
            <BlogDetailsBreadcrumb />
            <BlogDetailsArea />
            <Footer />
        </>
    );
};

export default BlogDetails;