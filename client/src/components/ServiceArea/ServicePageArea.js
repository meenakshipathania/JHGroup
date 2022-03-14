import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ApiUrl = 'http://localhost:1337/api/service1s?populate=*';
const ServicePageArea = ({ ser_icon_img, ser_title, colorClass }) => {
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
   function imageurl(atttribute) {
      const baseurl = 'http://localhost:1337';
      const dataurl = atttribute.image.data[0].attributes.url;
      return baseurl + dataurl;
   }
   return (
      <>
         <div className="col-lg-6">
            <div className="tp-service-three tp-service-four mb-30 wow fadeInUp" data-wow-delay="1.2s">
               <div className="tp-service-three-img">
                     {text
                        ? text.map((x) => (
                           <a href="/"><img className="img-fluid" src={x.attributes ? imageurl(x.attributes) : 'hgghtyu'} alt="" /></a>
                        ))
                        : 'hgfhgf'}
                  {/* <img src={`assets/img/service/service-${service_image_num}.jpg`}  alt="img-not-found" /> */}
                  <div className="tp-service-three-img-icon">
                     <i className={`flaticon-${ser_icon_img}`}></i>
                  </div>
                  <div className="tp-service-three-img-overlay">
                     <div className="tp-service-three-img-overlay-icon">
                        <i className={`flaticon-${ser_icon_img}`}></i>
                     </div>
                  </div>
               </div>
               <div className="tp-service-three-text fix">
                  <h4 className={colorClass ? "home_three_title tp-service-three-title mb-20 heading-color-black-with-hover" : "tp-service-three-title mb-20 heading-color-black-with-hover"}>
                     <Link to="/servicesDetails">{ser_title}</Link></h4>
                  <p className="mb-30">Buscipit tincidunt duis antino gravidia nam tellusy nascetur neque vulpuits aenean is scelerisque ultrces muscle mass and matter order commo</p>
                  <div className="tp-service-three-text-btn">
                     <Link to="/servicesDetails" className="yellow-btn service__btn">
                        <i className="flaticon-enter"></i> Learn More</Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ServicePageArea;