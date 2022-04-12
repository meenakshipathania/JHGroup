import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper';
// import AboutSingleTestimonial from '../../../../components/AboutSingleTestimonial/AboutSingleTestimonial';
SwiperCore.use([Navigation]);

const AboutTestimonial = () => {
   const [text, Settext] = useState([]);
   useEffect(() => {
      const request = axios.CancelToken.source();
      axios.get('http://165.227.11.15:1337/api/testimonials?populate=*')
         .then((res) => {
            Settext(res.data.data);
         })
         .catch((error) => {
            console.log(error);
         });
      return () => request.cancel();
   });
   function imageurl(data) {
      const baseurl = 'http://165.227.11.15:1337';
      const dataurl = data.image.data[0].attributes.url;
      return baseurl + dataurl;
   }

   const [text2, Settext2] = useState([]);
   useEffect(() => {
      const request = axios.CancelToken.source();
      axios.get('http://165.227.11.15:1337/api/service1s/6?populate[feedback][populate]=*')
         .then((res) => {
            Settext2(res.data.data);
         })
         .catch((error) => {
            console.log(error);
         });
      return () => request.cancel();
   }, []);
   function imageurl1(data) {
      const baseurl = 'http://165.227.11.15:1337';
      const dataurl = data.data[0].attributes.url;
      return baseurl + dataurl;
   }

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
                           {text2['attributes'] ? text2['attributes']['feedback'].map((x) => (
                              <a href="/"><img src={x.image ? imageurl1(x.image) : 'hgghtyu'} className="img mar" alt="img not found" />
                              </a>
                           ))
                              : 'hgfhgf'}
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
                                 {text ? text.map((x) => (
                                    <SwiperSlide>
                                       <div className="tp-testimonial-single swiper-slide z-index">
                                          <p className="mb-45">{x.attributes.para}</p>
                                          <div className="tp-testimonial-author">
                                             <div className="tp-testimonial-author-img">
                                                <img src={x.attributes ? imageurl(x.attributes) : 'hgghtyu'} className="img-fluid" alt="img not found" />
                                             </div>
                                             <div className="tp-testimonial-author-text">
                                                <h4 className="tp-testimonial-author-text-name">{x.attributes.name}</h4>
                                                <span className="tp-testimonial-author-text-designation">{x.attributes.title}</span>
                                             </div>
                                          </div>
                                          <div className="tp-testimonial-qoute">
                                             <img src="assets/img/icon/test-qoute.png" alt="img not found" />
                                          </div>
                                       </div>
                                    </SwiperSlide>
                                 ))
                                    : 'hgfhgf'}

                                 {/* <SwiperSlide>
                                    <AboutSingleTestimonial testi_img_num="2" name="Jhon Doe"
                                       title="Chief Web Developer" />
                                 </SwiperSlide>

                                 <SwiperSlide>
                                    <AboutSingleTestimonial testi_img_num="3" name="Shon Toy"
                                       title="Chief Marketing Officer" />
                                 </SwiperSlide> */}

                                 <div ref={prevRef}>Prev</div>
                                 <div ref={nextRef}>Next</div>

                              </Swiper>
                           </div>

                        </div>
                     </div>
                  </div>

                  <div className="tp-testimonial-slider-arrow">
                     <div className="testimonial-button-next slide-next">
                        <i><BsChevronRight /></i>
                     </div>
                     <div className="testimonial-button-prev slide-prev">
                        <i><BsChevronLeft /></i>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tp-testimonial-shape about"></div>
         </section>
      </>
   );
};

export default AboutTestimonial;