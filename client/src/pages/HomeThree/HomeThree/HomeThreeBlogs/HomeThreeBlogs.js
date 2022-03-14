import React from 'react';
import HomeThreeSingleBlog from '../../../../components/HomeThreeSingleBlog/HomeThreeSingleBlog';

const HomeThreeBlogs = () => {
   return (
      <>
         <section className="tp-blog-area-three bg-gray-light pt-115">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wrapper mb-55 text-center wow fadeInUp" data-wow-delay=".2s">
                        <h5 className="tp-section-subtitle-three mb-20">_ _ Recent Article_ _</h5>
                        <h2 className="tp-section-title-two color-theme-blue">Stay Connect Our Journal <br/>Every Moment</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
         
                  <HomeThreeSingleBlog image_num="7" title="Baoreet and placerat amet class rempus manusp curpise" />
                  <HomeThreeSingleBlog image_num="8" title="Felis dictumst imperdiet quiseg primis ligula volutpat" />
                  <HomeThreeSingleBlog image_num="9" title="Senectus facilisid luctus Pulvinar potenti platea" />
       
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeBlogs;