import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomeThreeSingleFeature from '../../../../components/HomeThreeSingleFeature/HomeThreeSingleFeature';
import HomeThreeSingleFeature1 from '../../../../components/HomeThreeSingleFeature1/HomeThreeSingleFeature1';

const ApiUrl = 'http://localhost:1337/api/work1s';
const HomeThreeFeatures = () => {
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
         <section className="tp-feature-area-three pt-115 pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".2s">
                        <h5 className="tp-section-subtitle-three mb-20">{text ? text.map((x) => <h5>{x.attributes.heading}</h5>) : 'Home'}</h5>
                        <h2 className="tp-section-title-two color-theme-blue">{text ? text.map((x) => <a>{x.attributes.tagline}</a>) : 'Home'} <br/>{text ? text.map((x) => <a>{x.attributes.tagline2}</a>) : 'Home'}</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                 
                  <HomeThreeSingleFeature icon="booking" title="{text ? text.map((x) => <h5>{x.attributes.heading}</h5>) : 'Home'}" />
                  <HomeThreeSingleFeature1 icon="delivery-box" title="Received Data" />
                  <HomeThreeSingleFeature icon="boy" title="Ready Cleaner" />
                  <HomeThreeSingleFeature icon="cleaning" title="Start Cleaning" />
           
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeFeatures;