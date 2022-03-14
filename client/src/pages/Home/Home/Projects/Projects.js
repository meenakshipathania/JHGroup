import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"
// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper';
import HomeSingleProject from '../../../../components/HomeSingleProject/HomeSingleProject';
SwiperCore.use([Navigation]);

const Projects = () => {
   return (
      <>
         <section className="tp-project-area white-bg position-relative">
            <div className="tp-project-shape"></div>
            <div className="tp-project-wrapper grey-bg pt-120 wow fadeInUp" data-wow-delay=".2s">
               <div className="section-title-wrapper text-center mb-55 grey-bg">
                  <h5 className="tp-section-subtitle common-yellow-shape section__sm__title mb-20">Some Completed Project</h5>
                  <h2 className="tp-section-title mb-20">Every Project is Different <br />Every Client special</h2>
               </div>
               <div className="tp-project-active swiper-container">
                  <Swiper
                     spaceBetween={30}
                     slidesPerView={1}
                     className='swiper-wrapper'
                     autoplay={{ delay: 6000 }}
                     breakpoints={{
                        550: {
                           slidesPerView: 2,
                        },
                        768: {
                           slidesPerView: 2,
                        },
                        1200: {
                           slidesPerView: 3,
                        },
                        1400: {
                           slidesPerView: 3,
                        },
                        1600: {
                           slidesPerView: 4,
                        },
                     }}
                     // onSlideChange={() => console.log('slide change')}
                     // onSwiper={(swiper) => console.log(swiper)}
                  >

                     <SwiperSlide>
                        <HomeSingleProject project_img_num="1" title="Bathroom Cleaning" />
                     </SwiperSlide>

                     <SwiperSlide>
                        <HomeSingleProject project_img_num="2" title="Kitchen Cleaning" />
                     </SwiperSlide>

                     <SwiperSlide>
                        <HomeSingleProject project_img_num="3" title="Room Cleaning" />
                     </SwiperSlide>

                     <SwiperSlide>
                        <HomeSingleProject project_img_num="4" title="Office Cleaning" />
                     </SwiperSlide>

                     <SwiperSlide>
                         <HomeSingleProject project_img_num="2" title="Kitchen Cleaning" />
                     </SwiperSlide>

                     <SwiperSlide>
                        <HomeSingleProject project_img_num="3" title="Room Cleaning" />
                     </SwiperSlide>

                  </Swiper>

               </div>
            </div>
         </section>
      </>
   );
};

export default Projects;