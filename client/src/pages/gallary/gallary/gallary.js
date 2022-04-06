import React,{ useEffect, useState} from 'react';
import axios from 'axios';

const HomeThreePopularServices = () => {
   const [text, Settext] = useState([]);
   useEffect(() => {
      const request = axios.CancelToken.source();
      axios.get('http://165.227.11.15:1337/api/galleries?populate=*')
         .then((res) => {
            Settext(res.data.data);
         })
         .catch((error) => {
            console.log(error);
         });
      return () => request.cancel();
   }, []);
   function imageurl1(atttribute) {
      const baseurl = 'http://165.227.11.15:1337';
      const dataurl = atttribute.image1.data[0].attributes.url;
      return baseurl + dataurl;
   }
   function imageurl2(atttribute) {
      const baseurl = 'http://165.227.11.15:1337';
      const dataurl = atttribute.image2.data[0].attributes.url;
      return baseurl + dataurl;
   }
   function imageurl3(atttribute) {
      const baseurl = 'http://165.227.11.15:1337';
      const dataurl = atttribute.image3.data[0].attributes.url;
      return baseurl + dataurl;
   }
   function imageurl4(atttribute) {
      const baseurl = 'http://165.227.11.15:1337';
      const dataurl = atttribute.image4.data[0].attributes.url;
      return baseurl + dataurl;
   }
   function imageurl5(atttribute) {
      const baseurl = 'http://165.227.11.15:1337';
      const dataurl = atttribute.image5.data[0].attributes.url;
      return baseurl + dataurl;
   }
   function imageurl6(atttribute) {
      const baseurl = 'http://165.227.11.15:1337';
      const dataurl = atttribute.image6.data[0].attributes.url;
      return baseurl + dataurl;
   }
   function imageurl7(atttribute) {
      const baseurl = 'http://165.227.11.15:1337';
      const dataurl = atttribute.image7.data[0].attributes.url;
      return baseurl + dataurl;
   }
   function imageurl8(atttribute) {
      const baseurl = 'http://165.227.11.15:1337';
      const dataurl = atttribute.image8.data[0].attributes.url;
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
                  <div className="col-md-4 columns">
                     <div className="serviceimage">
                        {text
                           ? text.map((x) => (
                              <a href="gallery-concrete"><img className="imagebor" src={x.attributes ? imageurl1(x.attributes) : 'hgghtyu'} alt="" /></a>
                           ))
                           : 'hgfhgf'}
                     </div>
                  </div>
                  <div className="col-md-4 columns">
                     <div className="serviceimage">
                     {text
                           ? text.map((x) => (
                              <a href="gallery-demo"><img className="imagebor" src={x.attributes ? imageurl2(x.attributes) : 'hgghtyu'} alt="" /></a>
                           ))
                           : 'hgfhgf'}
                     </div>
                  </div>
                  <div className="col-md-4 columns">
                     <div className="serviceimage">
                     {text
                           ? text.map((x) => (
                              <a href="gallery-drain"><img className="imagebor" src={x.attributes ? imageurl3(x.attributes) : 'hgghtyu'} alt="" /></a>
                           ))
                           : 'hgfhgf'}
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-4 columns">
                     <div className="serviceimage">
                     {text
                           ? text.map((x) => (
                              <a href="gallery-fence"><img className="imagebor" src={x.attributes ? imageurl4(x.attributes) : 'hgghtyu'} alt="" /></a>
                           ))
                           : 'hgfhgf'}
                     </div>
                  </div>
                  <div className="col-md-4 columns">
                     <div className="serviceimage">
                     {text
                           ? text.map((x) => (
                              <a href="gallery-landscaping"><img className="imagebor" src={x.attributes ? imageurl5(x.attributes) : 'hgghtyu'} alt="" /></a>
                           ))
                           : 'hgfhgf'}
                     </div>
                  </div>
                  <div className="col-md-4 columns">
                     <div className="serviceimage">
                     {text
                           ? text.map((x) => (
                              <a href="gallery-lawn"><img className="imagebor" src={x.attributes ? imageurl6(x.attributes) : 'hgghtyu'} alt="" /></a>
                           ))
                           : 'hgfhgf'}
                     </div>
                  </div>
               </div>


               <div className="row">
                  <div className="col-md-4 offset-2 columns">
                     <div className="serviceimage">
                     {text
                           ? text.map((x) => (
                              <a href="gallery-remodeling"><img className="imagebor" src={x.attributes ? imageurl7(x.attributes) : 'hgghtyu'} alt="" /></a>
                           ))
                           : 'hgfhgf'}
                     </div>
                  </div>
                  <div className="col-md-4 columns">
                     <div className="serviceimage">
                     {text
                           ? text.map((x) => (
                              <a href="gallery-retaining"><img className="imagebor" src={x.attributes ? imageurl8(x.attributes) : 'hgghtyu'} alt="" /></a>
                           ))
                           : 'hgfhgf'}
                     </div>
                  </div>

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreePopularServices;