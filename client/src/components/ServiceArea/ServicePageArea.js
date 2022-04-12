import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ServicePageArea = ({ ser_icon_img, colorClass }) => {
   const [text, Settext] = useState([]);
   useEffect(() => {
      const request = axios.CancelToken.source();
         axios.get('http://165.227.11.15:1337/api/service1s?populate=*')
            .then((res) => {
               Settext(res.data.data);
            })
            .catch((error) => {
               console.log(error);
            });
      return () => request.cancel();
   }, []);
   function imageurl(atttribute) {
      const baseurl = 'http://165.227.11.15:1337';
      const dataurl = atttribute.image.data[0].attributes.url;
      return baseurl + dataurl;
   }
   return (
      <>
         <div className="row">
            {text
               ? text.map((x) => (
                  <div className="col-lg-6">
                     <div className="tp-service-three tp-service-four mb-30 wow fadeInUp" data-wow-delay="1.2s">
                        <div className="tp-service-three-img">
                           <a href="/"><img className="img-fluid" src={x.attributes ? imageurl(x.attributes) : 'hgghtyu'} alt="" /></a>
                           <div className="tp-service-three-img-icon">
                              <i className={`flaticon-${ser_icon_img}`}></i>
                           </div>
                           <div className="tp-service-three-img-overlay">
                              <div className="tp-service-three-img-overlay-icon">
                                 <i className={`flaticon-${ser_icon_img}`}></i>
                              </div>
                           </div>
                        </div>
                        <div className='col-lg-6'>
                           <div className="tp-service-three-text fix">
                              <h4 className={colorClass ? "home_three_title tp-service-three-title mb-20 heading-color-black-with-hover" : "tp-service-three-title mb-20 heading-color-black-with-hover"}>
                                 <Link to={'/'+x.attributes.slug}> <span>{x.attributes.heading}</span></Link></h4>
                              <p className="mb-30"><span>{x.attributes.para}</span></p>
                              <div className="tp-service-three-text-btn">
                                 <Link to={'/'+x.attributes.slug} className="yellow-btn service__btn">
                                    <i className="flaticon-enter"></i><span>{x.attributes.text}</span></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))
               : 'hgfhgf'}
         </div>
      </>
   );
};

export default ServicePageArea;