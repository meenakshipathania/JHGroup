import React from 'react';
import HomeThreeSingleChoseArea from '../../../../components/HomeThreeSingleChoseArea/HomeThreeSingleChoseArea';

const HomeThreeChoseArea = () => {
   return (
      <>
         <section className="tp-choose-area-three position-relative mt-120 pb-50">
            <div className="tp-choose-area-three-img">
               <img src="assets/img/about/about-img-5.jpg" alt="img-not-found"/>
                  <div className="tp-choose-three-year tp-choose-three-year-responsive mb-50">
                     <div className="tp-choose-three-year-inner">
                        <h3>20 Years</h3>
                        <h4>Succesfully <br/>Provide Service</h4>
                     </div>
                  </div>
            </div>
            <div className="container">
               <div className="row align-items-end justify-content-center">
                  <div className="col-xl-6 text-end d-xl-block d-none">
                     <div className="tp-choose-three-year mb-50">
                        <div className="tp-choose-three-year-inner">
                           <h3>20 Years</h3>
                           <h4>Succesfully <br/>Provide Service</h4>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-10">
                     <div className="tp-choose-three">
                        <div className="section-title-wrapper mb-25">
                           <h5 className="tp-section-subtitle-three mb-20">Why Choose Us _ _</h5>
                           <h2 className="tp-section-title-two color-theme-blue">Find Standard Cleaning <br/>with Personal Touch</h2>
                        </div>
                        <p className="mb-45">Sed nteger porta vel placerat cra torquent dolor site habitasse elementum disign proin pulvinar class quam socis quam cum quisque ennim praesent anest amet fermentum proin donec massa augue in neque sapien</p>
                        <div className="row mb-10">

                           <HomeThreeSingleChoseArea icon="delivery-box" title="Online Estimation" />
                           <HomeThreeSingleChoseArea icon="gift-box" title="Project Discount" />
                           <HomeThreeSingleChoseArea icon="video-camera" title="Work Monitoring" />
                           <HomeThreeSingleChoseArea icon="snowfall" title="Satisfied Service" />

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeChoseArea;