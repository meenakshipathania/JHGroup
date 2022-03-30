import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const WorkingProcess = () => {
   const [text, Settext] = useState([]);
   useEffect(() => {
      const request = axios.CancelToken.source();
         axios.get('http://165.227.11.15:1337/api/home-work-processes')
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
                  <div className="col-xl-3 col-sm-6">
                     <div className="tp-feature-three text-center mb-30 wow fadeInUp" data-wow-delay=".4s">
                        <div className="tp-feature-three-icon mb-30">
                           <img src="assets/img/icon/feature-bg.png" className="img-fluid" alt="img not found" />
                           <i className={`flaticon-${'booking'}`}></i>
                        </div>
                        <div className="tp-feature-three-text">
                           <h4 className="tp-feature-three-title mb-20">
                              <Link to="/projectsDetails">{text ? text.map((x) => <h5>{x.attributes.head1}</h5>) : 'Home'}</Link></h4>
                           <p>{text ? text.map((x) => <p>{x.attributes.para1}</p>) : 'Home'}</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-sm-6">
                     <div className="tp-feature-three text-center mb-30 wow fadeInUp" data-wow-delay=".4s">
                        <div className="tp-feature-three-icon mb-30">
                           <img src="assets/img/icon/feature-bg.png" className="img-fluid" alt="img not found" />
                           <i className={`flaticon-${"delivery-box"}`}></i>
                        </div>
                        <div className="tp-feature-three-text">
                           <h4 className="tp-feature-three-title mb-20">
                              <Link to="/projectsDetails">{text ? text.map((x) => <h5>{x.attributes.head2}</h5>) : 'Home'}</Link></h4>
                           <p>{text ? text.map((x) => <p>{x.attributes.para2}</p>) : 'Home'}</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-sm-6">
                     <div className="tp-feature-three text-center mb-30 wow fadeInUp" data-wow-delay=".4s">
                        <div className="tp-feature-three-icon mb-30">
                           <img src="assets/img/icon/feature-bg.png" className="img-fluid" alt="img not found" />
                           <i className={`flaticon-${"boy"}`}></i>
                        </div>
                        <div className="tp-feature-three-text">
                           <h4 className="tp-feature-three-title mb-20">
                              <Link to="/projectsDetails">{text ? text.map((x) => <h5>{x.attributes.head3}</h5>) : 'Home'}</Link></h4>
                           <p>{text ? text.map((x) => <p>{x.attributes.para3}</p>) : 'Home'}</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-sm-6">
                     <div className="tp-feature-three text-center mb-30 wow fadeInUp" data-wow-delay=".4s">
                        <div className="tp-feature-three-icon mb-30">
                           <img src="assets/img/icon/feature-bg.png" className="img-fluid" alt="img not found" />
                           <i className={`flaticon-${"cleaning"}`}></i>
                        </div>
                        <div className="tp-feature-three-text">
                           <h4 className="tp-feature-three-title mb-20">
                              <Link to="/projectsDetails">{text ? text.map((x) => <h5>{x.attributes.head4}</h5>) : 'Home'}</Link></h4>
                           <p>{text ? text.map((x) => <p>{x.attributes.para4}</p>) : 'Home'}</p>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>
      </>
   );
};

export default WorkingProcess;