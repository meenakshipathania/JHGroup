import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomeThreeSingleChoseArea from '../../../../components/HomeThreeSingleChoseArea/HomeThreeSingleChoseArea';

const HomeThreeChoseArea = () => {
   const [text, Settext] = useState();
   useEffect(() => {
      const request = axios.CancelToken.source();
         axios.get('http://165.227.11.15:1337/api/chooses?populate=*')
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
   const [data, Setdata] = useState([]);
   useEffect(() => {
      const request = axios.CancelToken.source();
         axios.get('http://165.227.11.15:1337/api/choose1s')
            .then((res) => {
               Setdata(res.data.data);
            })
            .catch((error) => {
               console.log(error);
            });
      return () => request.cancel();
   }, []);

   return (
      <>
         <section className="tp-choose-area-three position-relative mt-120 pb-50">
            <div className="tp-choose-area-three-img">
               {text
                  ? text.map((x) => (
                     <a href="/"><img className="img-fluid" src={x.attributes ? imageurl(x.attributes) : 'hgghtyu'} alt="" /></a>
                  ))
                  : 'hgfhgf'}
               {/* <div className="tp-choose-three-year tp-choose-three-year-responsive mb-50">
                  <div className="tp-choose-three-year-inner">
                     <h3>{text ? text.map((x) => <h3>{x.attributes.head1}</h3>) : 'Home'}</h3>
                     <h4>{text ? text.map((x) => <h4>{x.attributes.head2}</h4>) : 'Home'}</h4>
                  </div>
               </div> */}
            </div>
            <div className="container">
               <div className="row align-items-end justify-content-center">
                  <div className="col-xl-6 text-end d-xl-block d-none">
                     <div className="tp-choose-three-year mb-50">
                        <div className="tp-choose-three-year-inner">
                           <h3>{text ? text.map((x) => <h3>{x.attributes.head1}</h3>) : 'Home'}</h3>
                           <h4>{text ? text.map((x) => <h4>{x.attributes.head2}</h4>) : 'Home'}</h4>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-10">
                     <div className="tp-choose-three">
                        <div className="section-title-wrapper mb-25">
                           <h5 className="tp-section-subtitle-three mb-20">{data ? data.map((x) => <h5>{x.attributes.head}</h5>) : 'Home'}</h5>
                           <h2 className="tp-section-title-two color-theme-blue">{data ? data.map((x) => <a>{x.attributes.tagline}</a>) : 'Home'}</h2>
                        </div>
                        <p className="mb-45">{data ? data.map((x) => <p>{x.attributes.para}</p>) : 'Home'}</p>
                        <div className="row mb-10">

                           <HomeThreeSingleChoseArea icon="delivery-box" title="Online Estimation" para="We are responsible for the online estinmation of the project."/>
                           <HomeThreeSingleChoseArea icon="gift-box" title="Project Discount" para="We also give an discount to our customer. We have lots of wonderful offers."/>
                           <HomeThreeSingleChoseArea icon="video-camera" title="Work Monitoring" para="You can monitor our way of work at every stage." />
                           <HomeThreeSingleChoseArea icon="snowfall" title="Satisfied Service" para="We provide a satisfied servie to our customer."/>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeChoseArea;