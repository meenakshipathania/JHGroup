import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServicePageArea from '../../../../components/ServiceArea/ServicePageArea';

const ServicesArea = () => {
   const [text, Settext] = useState([]);
   useEffect(() => {
      const request = axios.CancelToken.source();
         axios.get('http://localhost:1337/api/newsers')
            .then((res) => {
               Settext(res.data.data);
            })
            .catch((error) => {
               console.log(error);
            });
      return () => request.cancel();
   }, []);
   return (
      <>
         <section className="tp-service-area-three pt-120 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".3s">
                        <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">{text ? text.map((x) => <span>{x.attributes.text}</span>) : 'Services'}</h5>
                        <h2 className="tp-section-title heading-color-black">{text ? text.map((x) => <span>{x.attributes.text1}</span>) : 'Office Address'}<br/>{text ? text.map((x) => <span>{x.attributes.text2}</span>) : 'Office Address'}</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
               
               <ServicePageArea ser_icon_img="house-cleaning"
                     ser_title="House Cleaning" colorclassName="home_three_title"></ServicePageArea>
               </div>
            </div>
         </section>
      </>
   );
};

export default ServicesArea;