import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import TeamDetailsArea from './TeamDetailsArea/TeamDetailsArea';
import TeamDetailsBreadcrumb from './TeamDetailsBreadcrumb/TeamDetailsBreadcrumb';
import TeamDetailsFacts from './TeamDetailsFact/TeamDetailsFacts';
import TeamDetailsProgress from './TeamDetailsProgress/TeamDetailsProgress';

const TeamDetails = () => {
    return (
        <>
            <Navigation/>
            <TeamDetailsBreadcrumb />
            <TeamDetailsArea />
            <TeamDetailsProgress />
            <TeamDetailsFacts />
            <Footer/>
        </>
    );
};

export default TeamDetails;