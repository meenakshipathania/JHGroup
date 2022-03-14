import React from 'react';
import { Link } from 'react-router-dom';
import HomeThreeSingleProject from '../../../../components/HomeThreeSingleProject/HomeThreeSingleProject';
import { FaMapMarkerAlt } from 'react-icons/fa';

const HomeThreeProjects = () => {

   return (
      <>
         <section className="tp-project-area-three pb-90">
            <div className="tp-newsletter-area-three position-relative pb-115">
               <div className="container">
                  <div className="tp-newsletter-area-three-bg" data-background="assets/img/blog/newsletter-bg.jpg">
                     <div className="row justify-content-center align-items-center">
                        <div className="col-xl-4">
                           <div className="tp-newsletter-area-three-text">
                              <h2 className="tp-newsletter-area-three-title mb-20">Check Availability</h2>
                              <div className="tp-newsletter-radio mr-20">
                                 <input type="radio" id="test1" name="radio-group" defaultChecked />
                                    <label htmlFor="test1">Residential</label>
                              </div>
                              <div className="tp-newsletter-radio">
                                 <input type="radio" id="test2" name="radio-group"/>
                                    <label htmlFor="test2">Commercial</label>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-6">
                           <div className="tp-newsletter-area-three">
                              <form action="#">
                                 <input type="email" placeholder="Write your email"/>
                                    <span><i> <FaMapMarkerAlt /> </i> Enter Address</span>
                                    <button type="submit" className="theme-btn">
                                       <i className="flaticon-enter"></i> Subscribe</button>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                     <div className="tp-project-title-wrapper wow fadeInUp" data-wow-delay=".2s">
                        <h5 className="tp-section-subtitle-three mb-20">Recent Project _ _</h5>
                        <h2 className="tp-section-title-two color-theme-blue mb-45">Brightening The Home From Every Side</h2>
                        <div className="tp-project-title-btn">
                           <Link to="/projectsDetails" className="yellow-btn"><i className="flaticon-enter"></i> More Project</Link>
                        </div>
                     </div>
                  </div>


                  <HomeThreeSingleProject column="4" columnTwo="6" image_num="5"
                  title="Room Cleaning" subTitle="Residential Service" />

                  <HomeThreeSingleProject column="4" columnTwo="6" image_num="6"
                  title="Office Cleaning" subTitle="Office Service" />

                  <HomeThreeSingleProject column="4" columnTwo="6" image_num="7"
                  title="Kitchen Cleaning" subTitle="Kitchen Service" />

                  <HomeThreeSingleProject column="8" columnTwo="12" image_num="8"
                  title="Hospital Cleaning" subTitle="Hospital Service" />

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeProjects;