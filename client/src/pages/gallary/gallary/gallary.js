import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import ServicePageArea from '../../../../components/ServiceArea/ServicePageArea';



const ApiUrl = 'http://localhost:1337/api/gallaries?populate=*';
const HomeThreePopularServices = () => {
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
         <section className="tp-service-area-three pt-115 pb-200 bg-gray-light">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".3s">
                        <h2 className="tp-section-title-two color-theme-blue">Our Picture Gallary</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
            {text
               ? text.map((x) => (
                  <div className="col-lg-6">
                     <div className="tp-service-three tp-service-four mb-30 wow fadeInUp" data-wow-delay="1.2s">
                        <div className="gallary">
                           <a href="/"><img className="image" src={x.attributes ? imageurl(x.attributes) : 'hgghtyu'} alt="" /></a>
                        </div>
                        {/* <div className='col-lg-6'>
                           <div className="tp-service-three-text fix">
                              <h4 className={colorClass ? "home_three_title tp-service-three-title mb-20 heading-color-black-with-hover" : "tp-service-three-title mb-20 heading-color-black-with-hover"}>
                                 <Link to="/servicesDetails"> <a>{x.attributes.heading}</a></Link></h4>
                              <p className="mb-30"><a>{x.attributes.para}</a></p>
                              <div className="tp-service-three-text-btn">
                                 <Link to="/servicesDetails" className="yellow-btn service__btn">
                                    <i className="flaticon-enter"></i><a>{x.attributes.text}</a></Link>
                              </div>
                           </div>
                        </div> */}
                     </div>
                  </div>
               ))
               : 'hgfhgf'}
         </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreePopularServices;