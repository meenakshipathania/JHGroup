import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomeThreeSingleFeature = ({icon}) => {
   const [text, Settext] = useState([]);
   useEffect(() => {
      const request = axios.CancelToken.source();
         axios.get('http://localhost:1337/api/work2s')
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
         <div className="col-xl-3 col-sm-6">
            <div className="tp-feature-three text-center mb-30 wow fadeInUp" data-wow-delay=".4s">
               <div className="tp-feature-three-icon mb-30">
                  <img src="assets/img/icon/feature-bg.png" className="img-fluid" alt="img not found"/>
                     <i className={`flaticon-${icon}`}></i>
               </div>
               <div className="tp-feature-three-text">
                  <h4 className="tp-feature-three-title mb-20">
                     <Link to="/projectsDetails">{text ? text.map((x) => <h5>{x.attributes.heading}</h5>) : 'Home'}</Link></h4>
                  <p>{text ? text.map((x) => <p>{x.attributes.para}</p>) : 'Home'}</p>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeThreeSingleFeature;