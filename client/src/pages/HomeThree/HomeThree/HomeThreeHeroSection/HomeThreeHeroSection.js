import React from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
import { CgArrowLongRight, CgArrowLongLeft } from 'react-icons/cg';
import "swiper/css";
import "swiper/css/pagination"
// import Fade from 'react-reveal/Fade';
import SwiperCore, { Pagination, Navigation, Autoplay, A11y, EffectFade, EffectCards } from 'swiper';
import HomeThreeHeroSlide from '../../../../components/HomeThreeHeroSlide/HomeThreeHeroSlide';
import HomeThreeHeroSlide2 from '../../../../components/HomeThreeHeroSlide2/HomeThreeHeroSlide2';
import HomeThreeHeroSlide3 from '../../../../components/HomeThreeHeroSlide3/HomeThreeHeroSlide3';
import { Carousel } from 'react-bootstrap';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay, A11y, EffectFade, EffectCards]);

const HomeThreeHeroSection = () => {

   return (
      <>

         <section className="tp-slider-area-three fix">
            <div className="tp-slider-active swiper-container">
               <Carousel indicators={false}
               nextIcon={<div className="swiper-button-next slide-next">
               <i><CgArrowLongRight className="long_arrow" /></i> </div>}
               prevIcon={<div className="swiper-button-prev slide-prev">
               <i><CgArrowLongLeft className="long_arrow" /></i> </div>}
               >
                  <Carousel.Item>
                     <HomeThreeHeroSlide />
                  </Carousel.Item>

                  <Carousel.Item>
                     <HomeThreeHeroSlide2 />
                  </Carousel.Item>

                  <Carousel.Item>
                     <HomeThreeHeroSlide3 />
                  </Carousel.Item>

               </Carousel>
            </div>
         </section>


      </>
   );
};

export default HomeThreeHeroSection;