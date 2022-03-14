import React from 'react';
import HomeTwoCtaSingleItem from '../../../../components/HomeTwoCtaSingleItem/HomeTwoCtaSingleItem';

const HomeTwoCtaArea = () => {
   return (
      <>
         <section className="tp-cta-area-two">
            <div className="tp-cta-area-two-bg">
               <div className="row">
                  <HomeTwoCtaSingleItem icon="network" title="Expert Cleaner" />
                  <HomeTwoCtaSingleItem icon="happy" title="Satisfied Services" />
                  <HomeTwoCtaSingleItem icon="24-hours-support" title="Support Center" />
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTwoCtaArea;