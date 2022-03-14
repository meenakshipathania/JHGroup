import React from 'react';
import { Link } from 'react-router-dom';
import { GiCheckMark } from 'react-icons/gi';

const SpecialSinglePricingPackage = ({ image_num, price, title, activeclassName }) => {
   return (
      <>
         <div className="col-xl-4 col-md-6 mb-30">
            <div className="tp-pricing-two text-center bg-gray-light wow fadeInUp" data-wow-delay=".4s">
               <div className="tp-pricing-two-img mb-10">
                  <img src={`assets/img/pricing/pricing-${image_num}.jpg`} className="img" alt="img not found" />
               </div>
               <div className="tp-pricing-two-content">
                  <div className={activeclassName ? `tp-pricing-two-rate ${activeclassName}` : 'tp-pricing-two-rate'}>
                     <h3><span>$</span>{price}</h3>
                  </div>
                  <h4 className="tp-pricing-cat">{title}</h4>
                  <div className="tp-pricing-two-btn mb-30">
                     <Link to="/pricing" className="yellow-btn">Started Now</Link>
                  </div>
                  <div className="tp-pricing-two-list pb-50">
                     <ul>
                        <li><i > <GiCheckMark /> </i> Carpet Cleaning</li>
                        <li><i > <GiCheckMark /> </i> Bathroom Cleaning</li>
                        <li><i > <GiCheckMark /> </i> Floor Cleaning</li>
                        <li><i > <GiCheckMark /> </i> Bedroom Cleaning</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default SpecialSinglePricingPackage;