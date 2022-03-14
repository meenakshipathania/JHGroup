import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import PricingAffordablePackage from '../PricingAffordablePackage/PricingAffordablePackage';
import SpecialPricingPackage from '../SpecialPricingPackage/SpecialPricingPackage';
import PricingBreadcrumb from './PricingBreadcrumb/PricingBreadcrumb';

const Pricing = () => {
   return (
      <>
         <Navigation/>
         <PricingBreadcrumb />
         <PricingAffordablePackage />
         <SpecialPricingPackage />
         <Footer/>
      </>
   );
};

export default Pricing;