import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AboutArea = () => {
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
                        <img src="assets/img/about/the-girl-in-the-glasses.jpg" className="tp-about-img z-index wow fadeInUp" alt="img-not-found" />
                        {/* <img src="assets/img/about/box-flowers-green-garden.jpg" className="img-fluid tp-about-img-three-second" alt="img-not-found" /> */}
                     </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-md-10">
                     <div className="tp-about-text tp-about-text-three mb-30 wow fadeInUp" data-wow-delay=".6s">
                        <div className="section-title-wrapper mb-25">
                           <h5 className="tp-section-subtitle-three mb-20">{logo ? logo.map((x) => <span>{x.attributes.text1}</span>) : 'Home'}</h5>
                           <h2 className="tp-section-title-two color-theme-blue">{logo ? logo.map((x) => <span>{x.attributes.text2}</span>) : 'Home'}<br />{logo ? logo.map((x) => <span>{x.attributes.text3}</span>) : 'Home'}</h2>
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
                                 <Link to="/services" className="theme-btn text-white">
                                    <i className="flaticon-enter"></i> Learn More</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>


         {/* <section className="tp-about-area tp-abouts-area position-relative pt-120 pb-100 fix">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-8 col-md-10">
                     <div className="tp-about-img-two tp-abouts-img-two position-relative mr-80 wow fadeInUp" data-wow-delay=".4s">
                        <img src="assets/img/about/about-img-2.jpg" className="img-fluid" alt="img not found" />
                        <img src="assets/img/about/about-img-3.png" className="img-fluid img-second" alt="img not found" />
                        {/* <div className="tp-about-img-two-badge">
                           <h3>20</h3>
                           <h5>years <br />Experience</h5>
                        </div> */}
                     {/* </div>
                  </div>
                  <div className="col-xl-6 col-md-10">
                     <div className="tp-about-text tp-about-inner-page-text z-index wow fadeInUp" data-wow-delay=".6s">
                        <div className="section-title-wrapper mb-30">
                           <h5 className="tp-section-subtitle common-yellow-shape mb-20 heading-color-black">{logo ? logo.map((x) => <p>{x.attributes.text1}</p>) : 'Home'}</h5>
                           <h2 className="tp-section-title heading-color-black">Our Success sdfgCleaning <br />upto</h2>
                        </div>
                        <p className="mb-40">Can consent to the use of such byclosing this notice senectus amet sodales habitant dapibus </p>
                        <div className="row mb-10">
                           <div className="col-sm-6">
                              <div className="tp-about-service mb-30">
                                 <div className="tp-about-service-icon yellow-circle-shape mb-15">
                                    <i className="flaticon-snowfall"></i>
                                 </div>
                                 <div className="tp-about-service-text">
                                    <h4 className="tp-about-service-text-title mb-15 heading-color-black-with-hover">
                                       <Link to="/services">Residential Cleaning Services</Link></h4>
                                    <p>Duis congue atend lorem consequat interdum pretium ligula semper</p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-sm-6">
                              <div className="tp-about-service mb-30">
                                 <div className="tp-about-service-icon yellow-circle-shape mb-15">
                                    <i className="flaticon-business-and-trade"></i>
                                 </div>
                                 <div className="tp-about-service-text">
                                    <h4 className="tp-about-service-text-title mb-15 heading-color-black-with-hover">
                                       <Link to="/services">Commercial Cleaning Services</Link></h4>
                                    <p>Duis congue atend lorem conyfhfghsequat interdum pretium ligula semper</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-sm-6">
                              <div className="tp-about-number mb-30">
                                 <div className="tp-about-number-icon">
                                    <i className="flaticon-phone-call-1"></i>
                                 </div>
                                 <div className="tp-about-number-text">
                                    <span className="heading-color-black">Free Consutacy</span>
                                    <a href="tel:02(552)6620808" className="heading-color-black">02 (552) 662 0808</a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-sm-6">
                              <div className="tp-about-author mb-30">
                                 <div className="tp-about-author-img">
                                    <img src="assets/img/about/about-author.png" className="img-fluid" alt="img not found" />
                                 </div>
                                 <div className="tp-about-author-text">
                                    <h4 className="tp-about-author-text-title heading-color-black">Daniel Martyn</h4>
                                    <span className="heading-color-black">CEO - Fetoxe</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section> */} 
      </>
   );
};

export default AboutArea;