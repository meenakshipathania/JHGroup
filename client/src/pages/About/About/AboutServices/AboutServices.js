import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from 'axios';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
import "swiper/css/pagination";
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter,BsInstagram } from 'react-icons/bs';
import { RiShareLine} from 'react-icons/ri';
import { Link } from 'react-router-dom';
// import AboutServiceItem from '../../../../components/AboutServiceItem/AboutServiceItem';

SwiperCore.use([Navigation, Pagination]);

const AboutServices = () => {
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
      axios.get('http://165.227.11.15:1337/api/teams?populate=*')
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
         <section className="tp-service-area-two pt-120 pb-80 bg-gray-light">
            <div className="container">
               <div className="row">
                  {text2
                     ? text2.map((x) => (
                        <div className="col-12">
                           <div className="section-title-wrapper-two mb-55 text-center wow fadeInUp" data-wow-delay=".2s">
                              <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">{x.attributes.head}</h5>
                              <h2 className="tp-section-title heading-color-black">{x.attributes.tag1} <br />{x.attributes.tag2}</h2>
                           </div>
                        </div>
                     ))
                     : 'hgfhgf'}
               </div>
               <div className="tp-service-active swiper-container common-dots">

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
                           slidesPerView: 2,
                        },
                        992: {
                           slidesPerView: 3,
                        },
                        1200: {
                           slidesPerView: 4,
                        },
                     }}
                     navigation={{ nextEl: '.service-button-next', prevEl: '.service-button-prev', }}
                  // onSlideChange={() => console.log('slide change')}
                  // onSwiper={(swiper) => console.log(swiper)}
                  >
                     {text ? text.map((x) => (
                        <SwiperSlide>
                           <div className="tp-service-two text-center swiper-slide mb-30 wow fadeInUp"
data-wow-delay=".4s">
   <div className="tp-service-two-img mb-35">
      <div className="tp-service-two-img-box">
         <img src={x.attributes ? imageurl(x.attributes) : 'hgghtyu'}
         className="img-fluid" alt="img not found" />
      </div>
      <div className="tp-service-two-icon-wrapper">
         <div className="tp-service-two-icon">
            <ul>
               <li><a href="/"><i> <BsInstagram/> </i></a></li>
               <li><a href="/"><i> <BsTwitter/> </i></a></li>
               <li><a href="/"><i> <FaFacebookF/> </i></a></li>
            </ul>
            <a href="##" className="share-icon">
               <i><RiShareLine className='share_icon' /></i>
            </a>
         </div>
      </div>
   </div>
   <div className="tp-service-two-content">
      <h4 className="tp-service-two-title"><Link to="/teamDetails">{x.attributes.name}</Link></h4>
      <span>{x.attributes.title}</span>
   </div>
</div>
                        </SwiperSlide>
                     ))
                        : 'hgfhgf'}
                     {/* // <SwiperSlide>
                     //    <AboutServiceItem servicer_img="2" name="Stuart Broad" title="House Cleaner" />
                     // </SwiperSlide>

                     // <SwiperSlide>
                     //    <AboutServiceItem servicer_img="3" name="Shane Watson" title="Office Cleaner" />
                     // </SwiperSlide>

                     // <SwiperSlide>
                     //    <AboutServiceItem servicer_img="4" name="Georgia Melinda" title="Office Cleaner" />
                     // </SwiperSlide>

                     // <SwiperSlide>
                     //    <AboutServiceItem servicer_img="1" name="Georgia Mishel" title="Kitchen Cleaner" />
                     // </SwiperSlide> */}

                     <div className="swiper-service-pagination slide-dots"></div>
                  </Swiper>


               </div>
            </div>
         </section>
      </>
   );
};

export default AboutServices;