import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
// import { Swiper, SwiperSlide } from "swiper/react";
import { CgArrowLongRight,CgArrowLongLeft } from 'react-icons/cg';
import "swiper/css";
import "swiper/css/pagination"
// import Fade from 'react-reveal/Fade';
import SwiperCore, { Pagination,Navigation, Autoplay, A11y, EffectFade, EffectCards } from 'swiper';
import HomeTwoHeroSectionSingleSlide from '../../../../components/HomeTwoHeroSectionSingleSlide/HomeTwoHeroSectionSingleSlide';
import { Carousel } from 'react-bootstrap';

// install Swiper modules
SwiperCore.use([Pagination,Navigation, Autoplay, A11y, EffectFade, EffectCards]);

const HomeTwoHeroSection = () => {
   const [isOpen, setOpen] = useState(false);
   return (
      <>

         <ModalVideo channel='youtube' autoplay isOpen={isOpen}
            videoId="o4GuSJYSzrY" onClose={() => setOpen(false)} />

         <section className="tp-slider-area fix">
            <div className="tp-slider-active swiper-container">

            <Carousel indicators={false}
               nextIcon={<div className="swiper-button-next slide-next">
               <i><CgArrowLongRight className="long_arrow" /></i> </div>}
               prevIcon={<div className="swiper-button-prev slide-prev">
               <i><CgArrowLongLeft className="long_arrow" /></i> </div>}
               >
                  <Carousel.Item>
                    <HomeTwoHeroSectionSingleSlide openVideo={setOpen} />
                  </Carousel.Item>

                  <Carousel.Item>
                     <HomeTwoHeroSectionSingleSlide openVideo={setOpen} />
                  </Carousel.Item>

                  <Carousel.Item>
                     <HomeTwoHeroSectionSingleSlide openVideo={setOpen} />
                  </Carousel.Item>

               </Carousel>

            </div>
         </section>
      </>
   );
};

export default HomeTwoHeroSection;