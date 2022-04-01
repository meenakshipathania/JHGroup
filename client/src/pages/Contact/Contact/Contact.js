import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../HomeThree/HomeThree/HomeThreeNavBar/HomeThreeNavBar';
import ContactBreadcrumb from './ContactBreadcrumb/ContactBreadcrumb';
import ContactForm from './ContactForm/ContactForm';
// import ContactMap from './ContactMap/ContactMap';

const Contact = () => {
   return (
      <>
         <Navigation />
         <ContactBreadcrumb />
         {/* <ContactMap /> */}
         <ContactForm />
         <Footer />

      </>
   );
};

export default Contact;