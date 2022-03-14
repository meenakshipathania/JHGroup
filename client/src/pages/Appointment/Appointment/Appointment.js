import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import ApointArea from './ApointArea/ApointArea';
import AppointmentFeatures from './ApointmentFeatures/AppointmentFeatures';
import AppointmentBreadcrumb from './AppointmentBreadcrumb/AppointmentBreadcrumb';
import AppointmentFeedback from './AppointmentFeadback/AppointmentFeadback';


const Appointment = () => {
    return (
        <>
            <Navigation/>
            <AppointmentBreadcrumb />
            <AppointmentFeatures />
            <ApointArea />
            <AppointmentFeedback />
            <Footer/>
        </>
    );
};

export default Appointment;