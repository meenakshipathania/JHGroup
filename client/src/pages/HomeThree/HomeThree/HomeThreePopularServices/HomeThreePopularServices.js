import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import ServicePageArea from '../../../../components/ServiceArea/ServicePageArea';

const HomeThreePopularServices = ({ colorClass }) => {
   const [text, Settext] = useState([]);
   useEffect(() => {
      const request = axios.CancelToken.source();
      axios.get('http://165.227.11.15:1337/api/services')
         .then((res) => {
            Settext(res.data.data);
         })
         .catch((error) => {
            console.log(error);
         });
      return () => request.cancel();
   }, []);
   const [text1, Settext1] = useState([]);
   useEffect(() => {
      const request = axios.CancelToken.source();
      axios.get('http://165.227.11.15:1337/api/service1s?populate=*')
         .then((res) => {
            Settext1(res.data.data);
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
         <section className="tp-service-area-three pt-115 pb-200 bg-gray-light">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".3s">
                        <h5 className="tp-section-subtitle-three mb-20">{text ? text.map((x) => <h5>{x.attributes.text1}</h5>) : 'Home'}</h5>
                        <h2 className="tp-section-title-two color-theme-blue">{text ? text.map((x) => <span>{x.attributes.text2}</span>) : 'Home'} <br />{text ? text.map((x) => <span>{x.attributes.text3}</span>) : 'Home'}</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {text1
                     ? text1.slice(0, 4).map((x) => (
                        <div className="col-lg-6">
                           <div className="tp-service-three tp-service-four mb-30 wow fadeInUp" data-wow-delay="1.2s">
                              <div className="tp-service-three-img">
                                 <a href="/"><img className="img-fluid" src={x.attributes ? imageurl(x.attributes) : 'hgghtyu'} alt="" /></a>
                                 <div className="tp-service-three-img-icon">
                                    <i className={`flaticon-${'house-cleaning'}`}></i>
                                 </div>
                                 <div className="tp-service-three-img-overlay">
                                    <div className="tp-service-three-img-overlay-icon">
                                       <i className={`flaticon-${'house-cleaning'}`}></i>
                                    </div>
                                 </div>
                              </div>
                              <div className='col-lg-6'>
                                 <div className="tp-service-three-text fix">
                                    <h4 className={colorClass ? "home_three_title tp-service-three-title mb-20 heading-color-black-with-hover" : "tp-service-three-title mb-20 heading-color-black-with-hover"}>
                                       <Link to="/concrete"> <span>{x.attributes.heading}</span></Link></h4>
                                    <p className="mb-30"><span>{x.attributes.para}</span></p>
                                    <div className="tp-service-three-text-btn">
                                       <Link to="/concrete" className="yellow-btn service__btn">
                                          <i className="flaticon-enter"></i><span>{x.attributes.text}</span></Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))
                     : 'hgfhgf'}
               </div>
               <div className="row">
                           <div className="col-12">
                              <div className="tp-about-three-btn cen">
                                 <Link to="/services" className="theme-btn text-white">
                                    <i className="flaticon-enter"></i> See More Services</Link>
                              </div>
                           </div>
                        </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreePopularServices;