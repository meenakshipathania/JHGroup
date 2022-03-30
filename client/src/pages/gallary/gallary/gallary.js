import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomeThreePopularServices = () => {
   const [text, Settext] = useState([]);
   useEffect(() => {
      const request = axios.CancelToken.source();
         axios.get('http://165.227.11.15:1337/api/gallaries?populate=*')
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
                        <div className="gallary" style={{width: "100%"}}>
                           <a href="/"><img style={{width: "100%"}} src={x.attributes ? imageurl(x.attributes) : 'hgghtyu'} alt="" /></a>
                        </div>
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