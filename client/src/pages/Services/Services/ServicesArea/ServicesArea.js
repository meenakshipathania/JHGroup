import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServicePageArea from '../../../../components/ServiceArea/ServicePageArea';
import ServicePageArea1 from '../../../../components/ServiceArea1/ServicePageArea1';
import ServicePageArea2 from '../../../../components/ServiceArea2/ServicePageArea2';
import ServicePageArea3 from '../../../../components/ServiceArea3/ServicePageArea3';
import ServicePageArea4 from '../../../../components/ServiceArea4/ServicePageArea4';
import ServicePageArea5 from '../../../../components/ServiceArea5/ServicePageArea5';
import ServicePageArea6 from '../../../../components/ServiceArea6/ServicePageArea6';
import ServicePageArea7 from '../../../../components/ServiceArea7/ServicePageArea7';

const ApiUrl = 'http://localhost:1337/api/services';
const ServicesArea = () => {
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
         <section className="tp-service-area-three pt-120 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".3s">
                        <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">Our Best Services</h5>
                        <h2 className="tp-section-title heading-color-black">Quality Cleaning Making <br/>you Much Happy</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
               
               <ServicePageArea ser_icon_img="house-cleaning"
                     ser_title="House Cleaning" colorclassName="home_three_title"></ServicePageArea>

                  <ServicePageArea1 ser_icon_img="cleaning"
                     ser_title="Hospital Cleaning" colorclassName="home_three_title"></ServicePageArea1>

                  <ServicePageArea2 ser_icon_img="pot"
                     ser_title="Kitchen Cleaning" colorclassName="home_three_title"></ServicePageArea2>

                  <ServicePageArea3 ser_icon_img="window"
                     ser_title="Window Cleaning" colorclassName="home_three_title"> </ServicePageArea3>

                  <ServicePageArea4 ser_icon_img="window"
                     ser_title="Window Cleaning" colorclassName="home_three_title"> </ServicePageArea4>
                  <ServicePageArea5 ser_icon_img="window"
                     ser_title="Window Cleaning" colorclassName="home_three_title"> </ServicePageArea5>
                  <ServicePageArea6 ser_icon_img="window"
                     ser_title="Window Cleaning" colorclassName="home_three_title"> </ServicePageArea6>
                  <ServicePageArea7 ser_icon_img="window"
                     ser_title="Window Cleaning" colorclassName="home_three_title"> </ServicePageArea7>

               </div>
            </div>
         </section>
      </>
   );
};

export default ServicesArea;