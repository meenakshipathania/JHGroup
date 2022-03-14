import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai';
import { BsTwitter, BsInstagram } from 'react-icons/bs';

const HomeThreeFooter = () => {
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
                                 <Link to="/"><img src="assets/img/logo/logo-white.png" className="img-fluid" alt="img not found"/></Link>
                              </div>
                              <p className="text-white mb-35">Pulvinar seneius morbi to quisque nunc a towa faucibus netus a mone lestie nice disease</p>
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
                              <li><a href="#">Carpet Cleaning</a></li>
                              <li><a href="#">Plumbing Serivices</a></li>
                              <li><a href="#">Park Cleaning</a></li>
                              <li><a href="#">Residential Services</a></li>
                              <li><a href="#">Toilet Cleaning</a></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="tp-footer-widget mb-30 wow fadeInUp" data-wow-delay=".9s">
                           <h4 className="tp-footer-widget-title mb-35">Recent News</h4>
                           <div className="tp-footer-news tp-footer-news-three">
                              <div className="tp-footer-news-single tp-footer-news-three-single mb-10">
                                 <div className="tp-footer-news-three-single-img">
                                    <Link to="/blogDetails"><img src="assets/img/footer/footer-blog-1.png" className="img-fluid" alt="img-not-found"/></Link>
                                 </div>
                                 <div className="tp-footer-news-three-single-text">
                                    <h6><Link to="/blogDetails">Feugiat pharetra a ductor nonuy vehicula</Link></h6>
                                    <span>Jun 02, 2021</span>
                                 </div>
                              </div>
                              <div className="tp-footer-news-single tp-footer-news-three-single mb-10">
                                 <div className="tp-footer-news-three-single-img">
                                    <Link to="/blogDetails"><img src="assets/img/footer/footer-blog-2.png" className="img-fluid" alt="img-not-found"/></Link>
                                 </div>
                                 <div className="tp-footer-news-three-single-text">
                                    <h6><Link to="/blogDetails">Curabitur tortor venenatis an scelerisque</Link></h6>
                                    <span>Jun 03, 2021</span>
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
                                    <input type="email" placeholder="Enter Email"/>
                                    <i ><FaPaperPlane/></i>
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
                           <p className="m-0">Copyright ©2021 <span>Theme_pure</span>. All Rights Reserved Copyright</p>
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