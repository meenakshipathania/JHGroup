import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import BlogsSidebarArea from './BlogsSidebarArea/BlogsSidebarArea';
import BlogsSidebarBreadcrumb from './BlogsSidebarBreadcrumb/BlogsSidebarBreadcrumb';

const BlogsSidebar = () => {
    return (
        <>
            <Navigation/>
            <BlogsSidebarBreadcrumb />
            <BlogsSidebarArea />
            <Footer/>
        </>
    );
};

export default BlogsSidebar;