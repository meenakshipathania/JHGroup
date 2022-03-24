import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AboutFaq = () => {
   const [text, Settext] = useState([]);
   useEffect(() => {
      const request = axios.CancelToken.source();
         axios.get('http://localhost:1337/api/questions?populate=*')
            .then((res) => {
               Settext(res.data.data);
            })
            .catch((error) => {
               console.log(error);
            });
      return () => request.cancel();
   }, []);
   function imageurl(atttribute) {
      const baseurl = 'http://localhost:1337';
      const dataurl = atttribute.image.data[0].attributes.url;
      return baseurl + dataurl;
   }
   return (
      <>
         <section className="tp-faq-area">
            <div className="container">
               <div className="row align-items-end">
                  <div className="col-lg-6 order-2 order-lg-1">
                     <div className="tp-about-faq-img">
                        {text
                           ? text.map((x) => (
                              <a href="/"><img src={x.attributes ? imageurl(x.attributes) : 'hgghtyu'} alt="" /></a>
                           ))
                           : 'hgfhgf'}
                     </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2">
                     <div className="tp-faq-text tp-about-faq-text pt-130 pb-120">
                        <div className="section-title-wrapper-two mb-45">
                           <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">{text ? text.map((x) => <h5>{x.attributes.text}</h5>) : 'Home'}</h5>
                           <h2 className="tp-section-title heading-color-black">{text ? text.map((x) => <a>{x.attributes.heading}</a>) : 'Home'}</h2>
                        </div>
                        <div className="accordion" id="accordionExample">
                           <div className="accordion-item">
                              <h2 className="accordion-header" id="headingOne">
                                 <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    {text ? text.map((x) => <a>{x.attributes.q1}</a>) : 'Home'}
                                 </button>
                              </h2>
                              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                 <div className="accordion-body">
                                    {text ? text.map((x) => <a>{x.attributes.a1}</a>) : 'Home'}
                                 </div>
                              </div>
                           </div>
                           <div className="accordion-item">
                              <h2 className="accordion-header" id="headingTwo">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    {text ? text.map((x) => <a>{x.attributes.q2}</a>) : 'Home'}
                                 </button>
                              </h2>
                              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                 <div className="accordion-body">
                                    {text ? text.map((x) => <a>{x.attributes.a2}</a>) : 'Home'}
                                 </div>
                              </div>
                           </div>
                           <div className="accordion-item m-0">
                              <h2 className="accordion-header" id="headingThree">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    {text ? text.map((x) => <a>{x.attributes.q3}</a>) : 'Home'}
                                 </button>
                              </h2>
                              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                 <div className="accordion-body">
                                    {text ? text.map((x) => <a>{x.attributes.a3}</a>) : 'Home'}
                                 </div>
                              </div>
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default AboutFaq;