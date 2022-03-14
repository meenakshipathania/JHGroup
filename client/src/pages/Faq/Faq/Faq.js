import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import FaqArea from './FaqArea/FaqArea';
import FaqBreadcrumb from './FaqBreadcrumb/FaqBreadcrumb';

const Faq = () => {
   return (
      <>
         <Navigation />
         <FaqBreadcrumb />
         <FaqArea />
         <Footer />
      </>
   );
};

export default Faq;