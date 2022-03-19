import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HomeThreeSingleProject from '../../../../components/HomeThreeSingleProject/HomeThreeSingleProject';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ApiUrl = 'http://localhost:1337/api/projects';
const HomeThreeProjects = () => {
   const [text, Settext] = useState();
   useEffect(() => {
      const request = axios.CancelToken.source();
      setTimeout(() => {
         axios
            .get(ApiUrl, { cancelToken: request.token })
            .then((res) => {
               Settext(res.data.data);
            })
            .catch((error) => {
               console.log(error);
            });
      }, 2000);
      return () => request.cancel();
   });

   return (
      <>
         <section className="tp-project-area-three pb-90">
            <div className="tp-newsletter-area-three position-relative pb-115">
               <div className="container">
                  <div className="tp-newsletter-area-three-bg">
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
                        <h5 className="tp-section-subtitle-three mb-20">{text ? text.map((x) => <h5>{x.attributes.heading}</h5>) : 'Home'}</h5>
                        <h2 className="tp-section-title-two color-theme-blue mb-45">{text ? text.map((x) => <h2>{x.attributes.para}</h2>) : 'Home'}</h2>
                        <div className="tp-project-title-btn">
                           <Link to="/projectsDetails" className="yellow-btn"><i className="flaticon-enter"></i> {text ? text.map((x) => <a>{x.attributes.text}</a>) : 'Home'}</Link>
                        </div>
                     </div>
                  </div>


                  <HomeThreeSingleProject column="4" columnTwo="6" image_num="5"
                  title="Washroom Remodeling" subTitle="Residential Service" />

                  <HomeThreeSingleProject column="4" columnTwo="6" image_num="6"
                  title="Kitchen Remodeling" subTitle="Residential Service" />

                  <HomeThreeSingleProject column="4" columnTwo="6" image_num="7"
                  title="Retaining Walls" subTitle="Residential & commericial Service" />

                  <HomeThreeSingleProject column="8" columnTwo="12" image_num="8"
                  title="Landscaping" subTitle="Residential & commericial Service" />

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeProjects;