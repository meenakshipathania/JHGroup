import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomeThreeAbout = () => {
   const [logo, Setlogo] = useState([]);
   useEffect(() => {
      const request = axios.CancelToken.source();
      axios.get('http://165.227.11.15:1337/api/abouts')
         .then((res) => {
            Setlogo(res.data.data);
         })
         .catch((error) => {
            console.log(error);
         });
      return () => request.cancel();
   }, []);
   return (
      <>
         <section className="tp-about-area-two position-relative pt-120 pb-85 bg-gray-light">
            <div className="container">
               <div className="row justify-content-xl-between justify-content-md-center">
                  <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-10">
                     <div className="tp-about-img-three pt-40 position-relative mb-30 wow fadeInUp" data-wow-delay=".3s">
                        <img src="assets/img/about/the-girl-in-the-glasses.jpg" className="img-fluid" alt="img-not-found" />
                        <img src="assets/img/about/box-flowers-green-garden.jpg" className="img-fluid tp-about-img-three-second" alt="img-not-found" />
                     </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-md-10">
                     <div className="tp-about-text tp-about-text-three mb-30 wow fadeInUp" data-wow-delay=".6s">
                        <div className="section-title-wrapper mb-25">
                           <h5 className="tp-section-subtitle-three mb-20">{logo ? logo.map((x) => <a>{x.attributes.text1}</a>) : 'Home'}</h5>
                           <h2 className="tp-section-title-two color-theme-blue">{logo ? logo.map((x) => <a>{x.attributes.text2}</a>) : 'Home'}<br />{logo ? logo.map((x) => <a>{x.attributes.text3}</a>) : 'Home'}</h2>
                        </div>
                        <p className="mb-40">{logo ? logo.map((x) => <p>{x.attributes.text4}</p>) : 'Home'}</p>
                        <div className="row mb-10">
                           <div className="col-sm-6">
                              <div className="tp-about-service mb-35">
                                 <div className="tp-about-service-icon yellow-circle-shape mb-20">
                                    <i className={`flaticon-${"snowfall"}`}></i>
                                 </div>
                                 <div className="tp-about-service-text">
                                    <h4 className="tp-about-service-text-title mb-15">
                                       <Link to="/services">{logo ? logo.map((x) => <h4>{x.attributes.text7}</h4>) : 'Home'}</Link></h4>
                                    <p>{logo ? logo.map((x) => <p>{x.attributes.text8}</p>) : 'Home'}</p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-sm-6">
                              <div className="tp-about-service mb-35">
                                 <div className="tp-about-service-icon yellow-circle-shape mb-20">
                                    <i className={`flaticon-${"business-and-trade"}`}></i>
                                 </div>
                                 <div className="tp-about-service-text">
                                    <h4 className="tp-about-service-text-title mb-15">
                                       <Link to="/services">{logo ? logo.map((x) => <h4>{x.attributes.text5}</h4>) : 'Home'}</Link></h4>
                                    <p>{logo ? logo.map((x) => <p>{x.attributes.text6}</p>) : 'Home'}</p>
                                 </div>
                              </div>
                           </div>

                        </div>
                        <div className="row">
                           <div className="col-12">
                              <div className="tp-about-three-btn">
                                 <Link to="/servicesDetails" className="theme-btn text-white">
                                    <i className="flaticon-enter"></i> Learn More</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeAbout;