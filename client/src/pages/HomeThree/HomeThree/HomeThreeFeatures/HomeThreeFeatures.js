import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomeThreeSingleFeature from '../../../../components/HomeThreeSingleFeature/HomeThreeSingleFeature';
import HomeThreeSingleFeature1 from '../../../../components/HomeThreeSingleFeature1/HomeThreeSingleFeature1';
import HomeThreeSingleFeature2 from '../../../../components/HomeThreeSingleFeature2/HomeThreeSingleFeature2';
import HomeThreeSingleFeature3 from '../../../../components/HomeThreeSingleFeature3/HomeThreeSingleFeature3';

const HomeThreeFeatures = () => {
   const [text, Settext] = useState([]);
   useEffect(() => {
      const request = axios.CancelToken.source();
         axios.get('http://165.227.11.15:1337/api/works')
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
                 
                  <HomeThreeSingleFeature icon="booking" />
                  <HomeThreeSingleFeature1 icon="delivery-box" title="Received Data" />
                  <HomeThreeSingleFeature2 icon="boy" title="Ready Cleaner" />
                  <HomeThreeSingleFeature3 icon="cleaning" title="Start Cleaning" />
           
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeFeatures;