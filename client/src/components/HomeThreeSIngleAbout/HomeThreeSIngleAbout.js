import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ApiUrl = 'http://localhost:1337/api/residentalcles';
const HomeThreeSIngleAbout = ({icon}) => {
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
            <div className="col-sm-6">
                <div className="tp-about-service mb-35">
                    <div className="tp-about-service-icon yellow-circle-shape mb-20">
                        <i className={`flaticon-${icon}`}></i>
                    </div>
                    <div className="tp-about-service-text">
                        <h4 className="tp-about-service-text-title mb-15">
                            <Link to="/services">{text ? text.map((x) => <h4>{x.attributes.text1}</h4>) : 'Home'}</Link></h4>
                        <p>{text ? text.map((x) => <p>{x.attributes.text2}</p>) : 'Home'}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeThreeSIngleAbout;