import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HomeThreeSingleFeature from '../../../../components/HomeThreeSingleFeature/HomeThreeSingleFeature';
import HomeThreeSingleFeature1 from '../../../../components/HomeThreeSingleFeature1/HomeThreeSingleFeature1';
import HomeThreeSingleFeature2 from '../../../../components/HomeThreeSingleFeature2/HomeThreeSingleFeature2';
import HomeThreeSingleFeature3 from '../../../../components/HomeThreeSingleFeature3/HomeThreeSingleFeature3';

const ApiUrl = 'http://localhost:1337/api/works';
const WorkingProcess = () => {
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
         <section className="tp-feature-area-three pt-120 pb-80 bg-gray-light">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wrapper text-center mb-45 wow fadeInUp" data-wow-delay=".2s">
                        <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">{text ? text.map((x) => <h5>{x.attributes.heading}</h5>) : 'Home'}</h5>
                        <h2 className="tp-section-title mb-25 heading-color-black">{text ? text.map((x) => <a>{x.attributes.tagline}</a>) : 'Home'} <br/>{text ? text.map((x) => <a>{x.attributes.tagline2}</a>) : 'Home'}</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
               <div className="row">
                 
                 <HomeThreeSingleFeature icon="booking" />
                 <HomeThreeSingleFeature1 icon="delivery-box" title="Received Data" />
                 <HomeThreeSingleFeature2 icon="boy" title="Ready Cleaner" />
                 <HomeThreeSingleFeature3 icon="cleaning" title="Start Cleaning" />
          
              </div>                
               </div>
            </div>
         </section>
      </>
   );
};

export default WorkingProcess;