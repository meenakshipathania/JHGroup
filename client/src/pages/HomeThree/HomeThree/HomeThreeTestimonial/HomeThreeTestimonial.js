import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import 'swiper/css';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
import "swiper/css/pagination";
import { FaQuoteLeft } from 'react-icons/fa';

SwiperCore.use([Navigation, Pagination]);

const HomeThreeTestimonial = () => {
   const [text2, Settext2] = useState([]);
   useEffect(() => {
      const request = axios.CancelToken.source();
      axios.get('http://165.227.11.15:1337/api/services')
         .then((res) => {
            Settext2(res.data.data);
         })
         .catch((error) => {
            console.log(error);
         });
      return () => request.cancel();
   }, []);
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


   return (
      <>
         <section className="tp-testimonial-area-three pt-115 pb-190 bg-gray-light">
            <div className="container">
               <div className="row">
                  {text2
                     ? text2.map((x) => (
                        <div className="col-12">
                           <div className="section-title-wrapper text-center mb-55">
                              <h5 className="tp-section-subtitle-three mb-20">{x.attributes.heading}</h5>
                              <h2 className="tp-section-title-two color-theme-blue">{x.attributes.tagline}<br />{x.attributes.tagline1}</h2>
                           </div>
                        </div>
                     ))
                     : 'hgfhgf'}
               </div>
               <div className="tp-testimonial-three-shadow common-dots shadow-0">

                  <div className="tp-testimonial-three-active swiper-container">

                     <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        style={{ paddingBottom: '80px' }}
                        className='swiper-wrapper'
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 6000 }}
                        breakpoints={{
                           550: {
                              slidesPerView: 1,
                           },
                           768: {
                              slidesPerView: 1,
                           },
                           992: {
                              slidesPerView: 2,
                           },
                           1200: {
                              slidesPerView: 3,
                           },
                        }}
                        navigation={{ nextEl: '.service-button-next', prevEl: '.service-button-prev', }}
                     // onSlideChange={() => console.log('slide change')}
                     // onSwiper={(swiper) => console.log(swiper)}
                     >
                        {text ? text.map((x) => (
                           <SwiperSlide>
                              <div className='col-md-12'>

                                 <div className="tp-testimonial-two position-relative swiper-slide">
                                    <div className="tp-testimonial-two-author mb-20">
                                       <div className="tp-testimonial-two-author-img">
                                          <img src={x.attributes ? imageurl(x.attributes) : 'hgghtyu'} className="img-fluid" alt="img not found" />
                                       </div>
                                       <div className="tp-testimonial-two-author-text">
                                          <span>{x.attributes.title}</span>
                                          <h4 className="tp-testimonial-two-name">{x.attributes.name}</h4>
                                       </div>
                                    </div>
                                    <p>{x.attributes.para}</p>
                                    <div className="tp-testimonial-two-qoute">
                                       <i ><FaQuoteLeft /></i>
                                    </div>
                                 </div>

                              </div>

                           </SwiperSlide>
                        ))
                           : 'hgfhgf'}


                        <div className="swiper-service-pagination slide-dots"></div>
                     </Swiper>

                     {/* <!-- If we need pagination --> */}
                     < div className="swiper-pagination-testimonial slide-dots " ></div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeTestimonial;