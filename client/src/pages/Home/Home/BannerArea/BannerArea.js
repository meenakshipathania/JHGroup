import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const BannerArea = () => {
   return (
      <>
         <div className="brand-area theme-dark-bg pt-100 pb-100">
            <div className="container">
               <div className="brand-active swiper-container">

                  <Swiper
                     spaceBetween={30}
                     slidesPerView={2}
                     className='swiper-wrapper'
                     autoplay={{ delay: 6000 }}
                     breakpoints={{
                        550: {
                           slidesPerView: 3,
                        },
                        768: {
                           slidesPerView: 4,
                        },
                        1200: {
                           slidesPerView: 5,
                        },
                     }}
                     navigation={{ nextEl: '.brand-button-next', prevEl: '.brand-button-prev', }}
                     // onSlideChange={() => console.log('slide change')}
                     // onSwiper={(swiper) => console.log(swiper)}
                  >
                     <SwiperSlide>
                        <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay=".3s" data-swiper-autoplay="5000">
                           <a href="/"><img src="assets/img/brand/brand-1.png" className="img-fluid" alt="img" /></a>
                        </div>
                     </SwiperSlide>

                     <SwiperSlide>
                        <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay=".6s" data-swiper-autoplay="5000">
                           <a href="/"><img src="assets/img/brand/brand-2.png" className="img-fluid" alt="img" /></a>
                        </div>
                     </SwiperSlide>

                     <SwiperSlide>
                        <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay=".9s" data-swiper-autoplay="5000">
                           <a href="/"><img src="assets/img/brand/brand-3.png" className="img-fluid" alt="img" /></a>
                        </div>
                     </SwiperSlide>

                     <SwiperSlide>
                        <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay="1.2s" data-swiper-autoplay="5000">
                           <a href="/"><img src="assets/img/brand/brand-4.png" className="img-fluid" alt="img" /></a>
                        </div>
                     </SwiperSlide>

                     <SwiperSlide>
                        <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay="1.5s" data-swiper-autoplay="5000">
                           <a href="/"><img src="assets/img/brand/brand-5.png" className="img-fluid" alt="img" /></a>
                        </div>
                     </SwiperSlide>

                     <SwiperSlide>
                        <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay="1.8s" data-swiper-autoplay="5000">
                           <a href="/"><img src="assets/img/brand/brand-1.png" className="img-fluid" alt="img" /></a>
                        </div>
                     </SwiperSlide>
                  </Swiper>
               </div>
            </div>
         </div>
      </>
   );
};

export default BannerArea;