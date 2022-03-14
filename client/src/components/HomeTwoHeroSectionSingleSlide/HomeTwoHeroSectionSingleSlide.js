import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { Fade } from 'react-reveal';

const HomeTwoHeroSectionSingleSlide = ({ openVideo }) => {
    return (
        <>
            <div className="tp-single-slider tp-slider-height-two d-flex align-items-center swiper-slide" data-swiper-autoplay="5000">
                <div className="slide-bg home_two_slide_bg" data-background="assets/img/slider/slider-bg-2.jpg"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-slider-wrapper-two text-center mt-35">
                                <div className="tp-slider-video-btn-two mb-10" data-animation="fadeInUp" data-delay=".3s">
                                    <button onClick={() => openVideo(true)} className="venobox" data-autoplay="true" data-vbtype="video" href="https://youtu.be/o4GuSJYSzrY">
                                        <i > <FaPlay className="text-white" /> </i>
                                    </button>
                                </div>
                                <div className="tp-slider-two z-index text-center">

                                    <Fade bottom>
                                        <h1 className="tp-slider-title-two mb-35"><span>Get Professional</span> Cleaning Services</h1>
                                        <h3 className="tp-slider-subtitle-two">Clean up and see the change</h3>
                                    </Fade>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeTwoHeroSectionSingleSlide;