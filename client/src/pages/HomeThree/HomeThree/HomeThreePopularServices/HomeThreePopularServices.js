import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServicePageArea from '../../../../components/ServiceArea/ServicePageArea';

const HomeThreePopularServices = () => {
   const [text, Settext] = useState([]);
   useEffect(() => {
      const request = axios.CancelToken.source();
         axios.get('http://localhost:1337/api/services')
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
         <section className="tp-service-area-three pt-115 pb-200 bg-gray-light">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".3s">
                        <h5 className="tp-section-subtitle-three mb-20">{text ? text.map((x) => <h5>{x.attributes.text1}</h5>) : 'Home'}</h5>
                        <h2 className="tp-section-title-two color-theme-blue">{text ? text.map((x) => <a>{x.attributes.text2}</a>) : 'Home'} <br />{text ? text.map((x) => <a>{x.attributes.text3}</a>) : 'Home'}</h2>
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

export default HomeThreePopularServices;