import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import ContactBreadcrumb from './ContactBreadcrumb/ContactBreadcrumb';
import ContactForm from './ContactForm/ContactForm';
import ContactMap from './ContactMap/ContactMap';

const Contact = () => {
   return (
      <>
         <Navigation />
         <ContactBreadcrumb />
         <ContactMap />
         <ContactForm />
         <Footer />

      </>
   );
};

export default Contact;