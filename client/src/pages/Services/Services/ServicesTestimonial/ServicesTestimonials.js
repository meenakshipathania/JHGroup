import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import ServiceTestimonial from '../../../../components/ServiceTestimonial/ServiceTestimonial';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { FaQuoteLeft } from 'react-icons/fa';
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

const ServicesTestimonials = () => {
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
         <section className="tp-testimonial-area-two tp-testimonial-area-four position-relative">
            <div className="tp-testimonial-area-two-shape"></div>
            <div className="container position-relative">
               <div className="tp-testimonial-title-wrapper pt-120">
                  <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">Our Popular Services</h5>
                  <h2 className="tp-section-title heading-color-black">Customer Says About <br />Our Service</h2>
               </div>
            </div>
            <div className="tp-testimonial-divide">
               <div className="tp-testimonial-two-wrapper z-index mb-0">
                  <div className="tp-testimonial-two-active swiper-container common-dots pb-40">

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
                           <div className="tp-testimonial-two position-relative swiper-slide mb-30">
                              <div className="tp-testimonial-two-author mb-20">
                                 <div className="tp-testimonial-two-author-img">
                                    <img src={x.attributes ? imageurl(x.attributes) : 'hgghtyu'} className="img-fluid" alt="img not found" />
                                 </div>
                                 <div className="tp-testimonial-two-author-text">
                                    <span>{x.attributes.title}</span>
                                    <h4 className="tp-testimonial-two-name">{x.attributes.name}</h4>
                                 </div>
                              </div>
                              <p>Hymenaeos rhoncus proin aliquam justo sum mauris rutrum nulam semper purus rutru non sociis
                                 libero varius cumer to duine felis enisa porta ridiculus nisl acequis. </p>
                              <div className="tp-testimonial-two-qoute">
                                 <i ><FaQuoteLeft /></i>
                              </div>
                           </div>
                        </SwiperSlide>
                           ))
                           : 'hgfhgf'}

                        {/* <SwiperSlide>
                           <ServiceTestimonial testi_img_num="3" title="Wp Developer"
                              name="Broad Richard"></ServiceTestimonial>
                        </SwiperSlide>

                        <SwiperSlide>
                           <ServiceTestimonial testi_img_num="2" title="Senior Developer"
                              name="Jhon Doe"></ServiceTestimonial>
                        </SwiperSlide>

                        <SwiperSlide>
                           <ServiceTestimonial testi_img_num="3" title="Senior Designer"
                              name="Shane Watson"></ServiceTestimonial>
                        </SwiperSlide> */}

                     </Swiper>

                     <div className="swiper-pagination-testimonial slide-dots "></div>
                  </div>
               </div>
               <div className="tp-testimonial-two-form tp-testimonial-two-form-four pt-120 ser_form_bg z-index">
                  <form action="#" className="text-start tp-testimonial-two-form-wrapper">
                     <h3 className="tp-testimonial-form-title"><span>Free</span> Estimate</h3>
                     <p className="mb-30">Free know your project estimate and recent offer</p>
                     <div className="input-field mb-15">
                        <input type="text" placeholder="Your Name" />
                     </div>
                     <div className="input-field mb-15">
                        <input type="text" placeholder="Your Name" />
                     </div>
                     <div className="input-field select-field-arrow mb-15">
                        <select>
                           <option defaultValue="">Choose Service</option>
                           <option defaultValue="">House Cleaning</option>
                           <option defaultValue="">Office Cleaning</option>
                           <option defaultValue="">Kitchen Cleaning</option>
                           <option defaultValue="">Club Cleaning</option>
                        </select>
                     </div>
                     <div className="input-field mb-15">
                        <textarea placeholder="Write Message"></textarea>
                     </div>
                     <div className="input-field">
                        <button type="submit" className="yellow-btn">Free Estimate +</button>
                     </div>
                  </form>
               </div>
            </div>
         </section>
      </>
   );
};

export default ServicesTestimonials;