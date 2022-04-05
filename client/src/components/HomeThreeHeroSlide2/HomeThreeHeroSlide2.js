import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

const HomeThreeHeroSlide = () => {
    const [slider, Setslider] = useState([]);
   useEffect(() => {
      const request = axios.CancelToken.source();
         axios.get('http://165.227.11.15:1337/api/sliders')
            .then((res) => {
               Setslider(res.data.data);
            })
            .catch((error) => {
               console.log(error);
            });
      return () => request.cancel();
   }, []);

    return (
        <>
            <div className="tp-single-slider-three tp-slider-height-three d-flex align-items-center swiper-slide" data-swiper-autoplay="5000">
                <div className="slide-bg slide_bg_three1"></div>
                {/* <div className="slider-img-three">
                    {slider
                        ? slider.map((x) => (
                            <a href="/">
                                <img
                                    src={
                                        x.attributes
                                            ? imageurl(x.attributes)
                                            : 'hgghtyu'
                                    }
                                    alt=""
                                />
                            </a>
                        ))
                        : 'hgfhgf'}
                </div> */}
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-slider-three z-index">

                                <Fade left>
                                    <h6 className="tp-slider-three-subtitle" ><img src="assets/img/icon/slider-icon-1.png" className="img-fluid" alt="img not found" /> {slider ? slider.map((x) => <span>{x.attributes.text1}</span>) : 'Home'}</h6>
                                </Fade>

                                <Fade right>
                                    <h1 className="tp-slider-three-title">{slider ? slider.map((x) => <span>{x.attributes.text6}</span>) : 'Home'}
                                        <br />{slider ? slider.map((x) => <span>{x.attributes.text7}</span>) : 'Home'}</h1>
                                </Fade>

                                <Fade bottom>
                                    <div className="tp-slider-three-btn">
                                        <Link to="/about" className="yellow-btn">
                                            <i className="flaticon-enter"></i>{slider ? slider.map((x) => <span>{x.attributes.text5}</span>) : 'Home'}</Link>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeThreeHeroSlide;