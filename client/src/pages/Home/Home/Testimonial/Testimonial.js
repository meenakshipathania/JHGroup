import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronRight,BsChevronLeft } from 'react-icons/bs';
import "swiper/css";
import "swiper/css/navigation"
// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper';
import HomeSingleTestimonial from '../../../../components/HomeSingleTestimonial/HomeSingleTestimonial';
SwiperCore.use([Navigation]);

// SwiperCore.use([Pagination]);

const Testimonial = () => {
   const prevRef = useRef(null);
   const nextRef = useRef(null);
   return (
      <>
         <section className="tp-testimonial-area position-relative">
            <div className="container">
               <div className="tp-testimonial-bg white-bg z-index">
                  <div className="row align-items-center">
                     <div className="col-xl-5 col-lg-6">
                        <div className="tp-testimonial-img">
                           <img src="assets/img/testimonial/testimonial-img-1.jpg" alt="img bot found" />
                        </div>
                     </div>
                     <div className="col-xl-7 col-lg-6">
                        <div className="tp-testimonial ml-70">
                           <div className="section-title-wrapper">
                              <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20">Customer Statement</h5>
                              <h2 className="tp-section-title mb-20">Our Client Feedback</h2>
                           </div>
                           <div className="tp-testimonial-active swiper-container">
                              <Swiper
                                 spaceBetween={30}
                                 slidesPerView={1}
                                 className='swiper-wrapper'
                                 autoplay={{ delay: 6000 }}
                                 // pagination={{ clickable: true }}
                                 // navigation={true}
                                 onInit={(swiper) => {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                 }}
                                 breakpoints={{
                                    550: {
                                       slidesPerView: 1,
                                    },
                                    768: {
                                       slidesPerView: 1,
                                    },
                                    1200: {
                                       slidesPerView: 1,
                                    },
                                 }}
                                 navigation={{ nextEl: '.testimonial-button-next', prevEl: '.testimonial-button-prev', }}
                                 // onSlideChange={() => console.log('slide change')}
                                 // onSwiper={(swiper) => console.log(swiper)}
                              >
                                 <SwiperSlide>
                                    <HomeSingleTestimonial image="1" name="Rich Gragory" title="Chief Marketing Manager" />
                                 </SwiperSlide>

                                 <SwiperSlide>
                                    <HomeSingleTestimonial image="2" name="Jhon Doe" title="Chief Web Developer" />
                                 </SwiperSlide>

                                 <SwiperSlide>
                                    <HomeSingleTestimonial image="3" name="Shon Toy" title="Chief Marketing Officer" />
                                 </SwiperSlide>

                                 <div ref={prevRef}>Prev</div>
                                 <div ref={nextRef}>Next</div>

                              </Swiper>
                           </div>

                        </div>
                     </div>
                  </div>

                  <div className="tp-testimonial-slider-arrow">
                     <div className="testimonial-button-next slide-next">
                        <i><BsChevronRight /></i></div>
                     <div className="testimonial-button-prev slide-prev">
                        <i><BsChevronLeft /></i>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tp-testimonial-shape home"></div>
         </section>

      </>
   );
};

export default Testimonial;