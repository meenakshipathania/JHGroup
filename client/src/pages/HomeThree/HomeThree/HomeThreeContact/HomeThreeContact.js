import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomeThreeContact = () => {
   const [text, Settext] = useState([]);
   useEffect(() => {
      const request = axios.CancelToken.source();
         axios.get('http://165.227.11.15:1337/api/contacts')
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
         <div className="tp-contact-cta-area position-relative pt-85">
            <div className="container">
               <div className="tp-contact-cta-bg">
                  <div className="row">
                     <div className="col-lg-4 col-sm-6">
                        <div className="tp-contact-cta border-r-1 wow fadeInUp" data-wow-delay=".3s">
                           <div className="tp-contact-cta-inner">
                              <div className="tp-contact-cta-inner-icon">
                                 <i className="flaticon-home"></i>
                              </div>
                              <div className="tp-contact-cta-inner-text">
                                 <span>{text ? text.map((x) => <span>{x.attributes.head1}</span>) : 'Home'}</span>
                                 <h5>{text ? text.map((x) => <a>{x.attributes.address}</a>) : 'Home'}</h5>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-sm-6">
                        <div className="tp-contact-cta border-r-2 wow fadeInUp" data-wow-delay=".6s">
                           <div className="tp-contact-cta-inner justify-content-center">
                              <div className="tp-contact-cta-inner-icon">
                                 <i className="flaticon-support"></i>
                              </div>
                              <div className="tp-contact-cta-inner-text">
                                 <span>{text ? text.map((x) => <span>{x.attributes.head2}</span>) : 'Home'}</span>
                                 <h5><a href="tel:817-991-0254">{text ? text.map((x) => <h5>{x.attributes.phone}</h5>) : 'Home'}</a></h5>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6">
                        <div className="tp-contact-cta wow fadeInUp" data-wow-delay=".9s">
                           <div className="tp-contact-cta-inner justify-content-end">
                              <div className="tp-contact-cta-inner-icon">
                                 <i className="flaticon-email-1"></i>
                              </div>
                              <div className="tp-contact-cta-inner-text">
                                 <span>{text ? text.map((x) => <span>{x.attributes.head3}</span>) : 'Home'}</span>
                                 <h5><a href="mailto:info@thempure.com">info@thempure.com</a></h5>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeThreeContact;