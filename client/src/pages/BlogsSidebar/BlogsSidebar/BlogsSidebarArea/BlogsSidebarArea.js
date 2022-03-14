import React, { useState } from 'react';
import BlogSidebarWidget from '../../../../components/BlogSidebarWidget/BlogSidebarWidget';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai';
import { FaRegComments, FaPlay } from 'react-icons/fa';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { CgArrowLongRight } from 'react-icons/cg';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import "swiper/css/pagination";
import { Link } from 'react-router-dom';

SwiperCore.use([Navigation, Pagination]);

const BlogsSidebarArea = () => {
   const [isOpen, setOpen] = useState(false);
   return (
      <>

         <ModalVideo channel='youtube' autoplay isOpen={isOpen}
            videoId="o4GuSJYSzrY" onClose={() => setOpen(false)} />

         <section className="blog-sidebar-area pt-120 pb-110">
            <div className="container">
               <div className="tp-custom-container-box">
                  <div className="row">
                     <div className="col-lg-8">
                        <div className="ablog__sidebar--wrapper mr-50">
                           <div className="ablog ablog-4 mb-55 wow fadeInUp" data-wow-delay=".4s">
                              <div className="ablog__img">
                                 <img src="assets/img/blog/b1.jpg" className="img-fluid" alt="img" />
                              </div>
                              <div className="ablog__text ablog__text4">
                                 <div className="ablog__meta ablog__meta4">
                                    <ul>
                                       <li><Link to="/blogDetails">
                                          <i> <AiOutlineCalendar className='blog_icon' /> </i> January 15, 2021 </Link>
                                       </li>
                                       <li><Link to="/blogDetails">
                                          <i > <AiOutlineUser className='blog_icon' /> </i> Klenar </Link>
                                       </li>
                                       <li><Link to="/blogDetails">
                                          <i > <FaRegComments className='blog_icon' /> </i> No Comments</Link>
                                       </li>
                                    </ul>
                                 </div>
                                 <h3 className="ablog__text--title4 mb-20"><Link to="/blogDetails">Businesses Are Thriving, Societies Are Not. Time for Urgent Change</Link></h3>
                                 <p className="mb-30">Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car boot squiffy loo, blimey arse over tit it’s your round cup of char horse play chimney pot old. Chip shop bonnet barney owt to do with me what a plonker hotpot loo.</p>
                                 <div className="ablog__btn4">
                                    <Link to="/blogDetails" className="theme-btn text-white">
                                       <i className="flaticon-enter"></i> Read More</Link>
                                 </div>
                              </div>
                           </div>
                           <div className="ablog ablog-4 mb-55 wow fadeInUp" data-wow-delay=".5s">
                              <div className="ablog__img ablog__img4">
                                 <img src="assets/img/blog/b2.jpg" className="img-fluid" alt="img" />
                                 <div className="avideo-btn-4">
                                    <div className="avideo-btn play_btn">
                                       <button onClick={() => setOpen(true)} className="venobox" data-autoplay="true" data-vbtype="video" href="https://youtu.be/o4GuSJYSzrY">
                                          <i > <FaPlay className="text-white" /> </i> </button>
                                    </div>
                                 </div>
                              </div>
                              <div className="ablog__text ablog__text4">
                                 <div className="ablog__meta ablog__meta4">
                                    <ul>
                                       <li><Link to="/blogDetails">
                                          <i> <AiOutlineCalendar className='blog_icon' /> </i> January 15, 2021 </Link>
                                       </li>
                                       <li><Link to="/blogDetails">
                                          <i > <AiOutlineUser className='blog_icon' /> </i> Klenar </Link>
                                       </li>
                                       <li><Link to="/blogDetails">
                                          <i > <FaRegComments className='blog_icon' /> </i> No Comments</Link>
                                       </li>
                                    </ul>
                                 </div>
                                 <h3 className="ablog__text--title4 mb-20"><Link to="/blogDetails">The Importance of Instagram Metrics and Where to Find Them!</Link></h3>
                                 <p className="mb-30">Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car boot squiffy loo, blimey arse over tit it’s your round cup of char horse play chimney pot old. Chip shop bonnet barney owt to do with me what a plonker hotpot loo.</p>
                                 <div className="ablog__btn4">
                                    <Link to="/blogDetails" className="theme-btn text-white"><i className="flaticon-enter"></i> Read More</Link>
                                 </div>
                              </div>
                           </div>
                           <div className="ablog ablog-4 mb-55 wow fadeInUp" data-wow-delay=".6s">
                              <div className="ablog__img">
                                 <div className="ablog__img--active swiper-container">

                                    <Swiper
                                       spaceBetween={30}
                                       slidesPerView={1}
                                       className='swiper-wrapper'
                                       loop={true}
                                       pagination={{ clickable: true }}
                                       breakpoints={{
                                          640: {
                                             slidesPerView: 1,
                                          },
                                          768: {
                                             slidesPerView: 1,
                                          },
                                          1024: {
                                             slidesPerView: 1,
                                          },
                                       }}
                                       navigation={{ nextEl: '.swiper-blog-button-next', prevEl: '.swiper-blog-button-prev', }}
                                       // onSlideChange={() => console.log('slide change')}
                                       // onSwiper={(swiper) => console.log(swiper)}
                                    >
                                       <SwiperSlide>
                                          <div className="ablog__img--item swiper-slide">
                                             <img src="assets/img/blog/b3.jpg" className="img-fluid" alt="img" />
                                          </div>
                                       </SwiperSlide>

                                       <SwiperSlide>
                                          <div className="ablog__img--item swiper-slide">
                                             <img src="assets/img/blog/b4.jpg" className="img-fluid" alt="img" />
                                          </div>
                                       </SwiperSlide>

                                       <SwiperSlide>
                                          <div className="ablog__img--item swiper-slide">
                                             <img src="assets/img/blog/b5.jpg" className="img-fluid" alt="img" />
                                          </div>
                                       </SwiperSlide>

                                       <div className="swiper-blog-button-prev slide-prev">
                                          <i><BsChevronLeft className='blog_icon' /></i>
                                       </div>
                                       <div className="swiper-blog-button-next slide-next">
                                          <i><BsChevronRight className='blog_icon' /></i>
                                       </div>

                                    </Swiper>


                                 </div>

                              </div>
                              <div className="ablog__text ablog__text4">
                                 <div className="ablog__meta ablog__meta4">
                                    <ul>
                                       <li><Link to="/blogDetails">
                                          <i> <AiOutlineCalendar className='blog_icon' /> </i> January 15, 2021 </Link>
                                       </li>
                                       <li><Link to="/blogDetails">
                                          <i > <AiOutlineUser className='blog_icon' /> </i> Klenar </Link>
                                       </li>
                                       <li><Link to="/blogDetails">
                                          <i > <FaRegComments className='blog_icon' /> </i> No Comments</Link>
                                       </li>
                                    </ul>
                                 </div>
                                 <h3 className="ablog__text--title4 mb-20"><Link to="/blogDetails">TikTok Influencer Marketing: How to Work With Influencers</Link></h3>
                                 <p className="mb-30">Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car boot squiffy loo, blimey arse over tit it’s your round cup of char horse play chimney pot old. Chip shop bonnet barney owt to do with me what a plonker hotpot loo.</p>
                                 <div className="ablog__btn4">
                                    <Link to="/blogDetails" className="theme-btn text-white"><i className="flaticon-enter"></i> Read More</Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4">
                        <div className="ablog__sidebar">
                           <div className="widget wow fadeInUp" data-wow-delay=".3s">
                              <div className="sidebar--widget__search mb-45">
                                 <form action="#">
                                    <input type="text" placeholder="Search" />
                                    <button type="submit"><i> <BiSearch className='search_icon' /> </i></button>
                                 </form>
                              </div>
                           </div>
                           <div className="widget mb-45 wow fadeInUp" data-wow-delay=".5s">
                              <h3 className="sidebar__widget--title mb-30">Recent News </h3>

                              <BlogSidebarWidget widget_img_num="b1"
                                 sidebar_post_title="Businesses Are Thriving Societies Are Not." />

                              <BlogSidebarWidget widget_img_num="b2"
                                 sidebar_post_title="The Importance of Instagram Metrics and" />

                              <BlogSidebarWidget widget_img_num="b7"
                                 sidebar_post_title="TikTok Influencer Marketing How to Work" />


                              <div className="widget mb-40 wow fadeInUp" data-wow-delay=".7s">
                                 <h3 className="sidebar__widget--title mb-25">Categories</h3>
                                 <div className="sidebar--widget__cat mb-20">
                                    <ul>
                                       <li><Link to="/blogDetails">App & Saas</Link></li>
                                       <li><Link to="/blogDetails">Fresh Products</Link></li>
                                       <li><Link to="/blogDetails">Graphics</Link></li>
                                       <li><Link to="/blogDetails">IOS/Android Design</Link></li>
                                       <li><Link to="/blogDetails">Saas Design</Link></li>
                                       <li><Link to="/blogDetails">Web Design</Link></li>
                                       <li><Link to="/blogDetails">Web Development</Link></li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="widget mb-25 wow fadeInUp" data-wow-delay=".9s">
                                 <h3 className="sidebar__widget--title mb-30">Tags</h3>
                                 <div className="sidebar--widget__tag mb-20">
                                    <Link to="/blogDetails">Animation</Link>
                                    <Link to="/blogDetails">Branding</Link>
                                    <Link to="/blogDetails">Design</Link>
                                    <Link to="/blogDetails">Ideas</Link>
                                    <Link to="/blogDetails">Landing</Link>
                                    <Link to="/blogDetails">Pix Saas Blog</Link>
                                    <Link to="/blogDetails">The Saas</Link>
                                    <Link to="/blogDetails">UI/UX</Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-12">
                           <div className="basic-pagination mt-10 wow fadeInUp" data-wow-delay=".5s">
                              <ul>
                                 <li><span aria-current="page" className="page-numbers current">1</span></li>
                                 <li><a className="page-numbers" href="#">2</a></li>
                                 <li><a className="page-numbers" href="#">3</a></li>
                                 <li><a className="next page-numbers" href="#">
                                    <i><CgArrowLongRight /></i></a> </li>
                              </ul>
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

export default BlogsSidebarArea;