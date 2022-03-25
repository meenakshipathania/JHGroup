import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai';
import { BsTwitter, BsInstagram } from 'react-icons/bs';

const HomeThreeFooter = () => {
   const [logo, Setlogo] = useState([]);
   useEffect(() => {
      const request = axios.CancelToken.source();
         axios.get('http://165.227.11.15:1337/api/logos?populate=*')
            .then((res) => {
               Setlogo(res.data.data);
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
   return (
      <>
         <footer className="theme-dark-bg2">
            <div className="tp-footer-area-two pt-160 pb-70">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-3 col-sm-6">
                        <div className="tp-footer-widget footer-col-1 mb-30 wow fadeInUp" data-wow-delay=".3s">
                           <div className="tp-footer-info tp-footer-info-three">
                              <div className="tp-footer-info-logo mb-35">
                                 <Link to="/">
                                    {logo
                                       ? logo.map((x) => (
                                          <a href="/"><img src={x.attributes ? imageurl(x.attributes) : 'hgghtyu'} alt="" /></a>
                                       ))
                                       : 'hgfhgf'}
                                 </Link>
                              </div>
                              <p className="text-white mb-35">The Premier Landscape Hardscape Contractor In Arlington, Mansfield & Surrounding areas</p>
                              <div className="tp-footer-info-social tp-footer-info-social-three">
                                 <a href="/"><i><FaFacebookF className='icon' /> </i></a>
                                 <a href="/"><i><BsTwitter className='icon' /> </i></a>
                                 <a href="/"><i><BsInstagram className='icon' /> </i></a>
                                 <a href="/"><i><AiOutlineGoogle className='icon' /> </i></a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="tp-footer-widget footer-col-2 mb-30 wow fadeInUp" data-wow-delay=".6s">
                           <h4 className="tp-footer-widget-title mb-35">Our Services</h4>
                           <ul>
                              <li><a href="#">Concrete Services</a></li>
                              <li><a href="#">Demolition & Grading Services</a></li>
                              <li><a href="#">Drainage, Irrigation, Repair</a></li>
                              <li><a href="#">Fence : New & Repair</a></li>
                              <li><a href="#">Remoeling</a></li>
                              <li><a href="#">Landscping, Trees and sod</a></li>
                              <li><a href="#">Remodeling</a></li>
                              <li><a href="#">Retaining Walls</a></li>
                              <li><a href="#">Lawn Care</a></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="tp-footer-widget mb-30 wow fadeInUp" data-wow-delay=".9s">
                           <h4 className="tp-footer-widget-title mb-35">Recent project</h4>
                           <div className="tp-footer-news tp-footer-news-three">
                              <div className="tp-footer-news-single tp-footer-news-three-single mb-10">
                                 {/* <div className="tp-footer-news-three-single-img">
                                    <Link to="/blogDetails"><img src="assets/img/footer/footer-blog-1.png" className="img-fluid" alt="img-not-found" /></Link>
                                 </div> */}
                                 <div className="tp-footer-news-three-single-text">
                                    <h6><Link to="/">Washroom Remodeling</Link></h6>
                                    {/* <span>Jun 02, 2021</span> */}
                                 </div>
                              </div>
                              <div className="tp-footer-news-single tp-footer-news-three-single mb-10">
                                 {/* <div className="tp-footer-news-three-single-img">
                                    <Link to="/blogDetails"><img src="assets/img/footer/footer-blog-2.png" className="img-fluid" alt="img-not-found" /></Link>
                                 </div> */}
                                 <div className="tp-footer-news-three-single-text">
                                    <h6><Link to="/">Landscaping</Link></h6>
                                    {/* <span>Jun 03, 2021</span> */}
                                 </div>
                              </div>
                              <div className="tp-footer-news-single tp-footer-news-three-single mb-10">
                                 {/* <div className="tp-footer-news-three-single-img">
                                    <Link to="/blogDetails"><img src="assets/img/footer/footer-blog-2.png" className="img-fluid" alt="img-not-found" /></Link>
                                 </div> */}
                                 <div className="tp-footer-news-three-single-text">
                                    <h6><Link to="/">Kitchen Remodeling</Link></h6>
                                    {/* <span>Jun 03, 2021</span> */}
                                 </div>
                              </div>
                              <div className="tp-footer-news-single tp-footer-news-three-single mb-10">
                                 {/* <div className="tp-footer-news-three-single-img">
                                    <Link to="/blogDetails"><img src="assets/img/footer/footer-blog-2.png" className="img-fluid" alt="img-not-found" /></Link>
                                 </div> */}
                                 <div className="tp-footer-news-three-single-text">
                                    <h6><Link to="/">Retaining Walls</Link></h6>
                                    {/* <span>Jun 03, 2021</span> */}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="tp-footer-widget footer-col-4 mb-30 wow fadeInUp" data-wow-delay="1.2s">
                           <h4 className="tp-footer-widget-title mb-40">Newsletter</h4>
                           <div className="tp-footer-newsletter-three">
                              <p className="mb-20">Sign up to get new exclusive offers</p>
                              <form action="#">
                                 <div className="tp-footer-newsletter-three-field position-relative mb-20">
                                    <input type="email" placeholder="Enter Email" />
                                    <i ><FaPaperPlane /></i>
                                 </div>
                                 <button type="submit" className="yellow-btn"><i className="flaticon-enter"></i> Subscribe</button>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tp-copyright-area-two theme-dark-bg3 z-index pt-30 pb-30">
               <div className="container">
                  <div className="row">
                     <div className="col-12">
                        <div className="tp-copyright tp-copyright-two text-center">
                           <p className="m-0">© Copyright 1986 JH Group, LLC. All Rights Reserved. Web Design by Longman Computers</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default HomeThreeFooter;