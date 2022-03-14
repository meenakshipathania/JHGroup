import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import RecentBlogs from './RecentArticles/RecentBlogs';
import TeamArea from './TeamArea/TeamArea';
import TeamBreadcrumb from './TeamBreadcrumb/TeamBreadcrumb';
import TeamMembers from './TeamMembers/TeamMembers';

const Team = () => {
    return (
        <>
            <Navigation />
            <TeamBreadcrumb />
            <TeamMembers />
            <TeamArea />
            <RecentBlogs />
            <Footer />
        </>
    );
};

export default Team;