import React from 'react';
import { Link } from 'react-router-dom';
import BlogSidebarWidget from '../../../../components/BlogSidebarWidget/BlogSidebarWidget';
import { BiSearch } from 'react-icons/bi';
import { BsReply } from 'react-icons/bs';
import { AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai';
import { FaRegComments } from 'react-icons/fa';

const BlogDetailsArea = () => {
   return (
      <>
         <section className="blog-details-area pt-120 pb-70">
            <div className="container">
               <div className="tp-custom-container-box">
                  <div className="row">
                     <div className="col-lg-8">
                        <div className="blog__details--wrapper mr-50 mb-50">
                           <div className="ablog ablog-4 mb-55">
                              <div className="ablog__img wow fadeInUp">
                                 <img src="assets/img/blog/b6.jpg" className="img-fluid" alt="img" />
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
                                 <p className="mb-30">Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car boot squiffy loo, blimey arse over tit it’s your round cup of char horse play chimney pot old. Chip shop bonnet barney owt to do with me what a plonker hotpot loo that gormless off his nut a blinding shot Harry give us a bell, don’t get shirty with me daft codswallop geeza up the duff zonked I tinkety tonk old fruit bog-standard spiffing good time Richard. Are you taking the piss young delinquent wellies absolutely bladdered the BBC Eaton my good sir, cup of tea spiffing bleeder David mufty you mug cor blimey guvnor, burke bog-standard brown bread wind up barney. Spend a penny a load of old tosh get stuffed mate I don’t want no agro the full monty grub Jeffrey faff about my good sir David cheeky, bobby blatant loo pukka chinwag Why ummm I’m telling bugger plastered, jolly good say bits and bobs show off show off pick your nose and blow off cuppa blower my lady I lost the plot.</p>
                                 <blockquote className="wow fadeInUp">
                                    <p>Tosser argy-bargy mush loo at public school Elizabeth up the duff buggered chinwag on your bike mate don’t get shirty with me super, Jeffrey bobby Richard cheesed off spend a penny a load of old tosh blag horse.</p>
                                    <p><cite>Shane Watson</cite></p>
                                 </blockquote>
                                 <p className="mb-30 wow fadeInUp">Cheeky bugger cracking goal starkers lemon squeezy lost the plot pardon me no biggie the BBC burke gosh boot so I said wellies, zonked a load of old tosh bodge barmy skive off he legged it morish spend a penny my good sir wind up hunky-dory. Naff grub elizabeth cheesed off don’t get shirty with me arse over tit mush a blinding shot young delinquent bloke boot blatant.</p>
                                 <div className="blog__details--thumb mb-30 wow fadeInUp">
                                    <img src="assets/img/blog/b7.jpg" className="img-fluid" alt="img" />
                                 </div>
                                 <h4 className="blog__details--subtitle wow fadeInUp">Klenar is the only theme you will ever need</h4>
                                 <p className="mb-30 wow fadeInUp">Are you taking the piss young delinquent wellies absolutely bladdered the Eaton my good sir, cup of tea spiffing bleeder David mufty you mug cor blimey guvnor, burke bog-standard brown bread wind up barney. Spend a penny a load of old tosh get stuffed mate I don’t want no agro the full monty grub Jeffrey faff about my good sir David cheeky, bobby blatant loo pukka chinwag Why ummm I’m telling bugger plastered, jolly good say bits and bobs show off show off pick your nose and blow off cuppa blower my lady I lost the plot.</p>
                                 <p className="mb-40 wow fadeInUp">Cheeky bugger cracking goal starkers lemon squeezy lost the plot pardon me no biggie the BBC burke gosh boot so I said wellies, zonked a load of old tosh bodge barmy skive off he legged it morish spend a penny my good sir wind up hunky-dory. Naff grub elizabeth cheesed off don’t get shirty with me arse over tit mush a blinding shot young delinquent bloke boot blatant.</p>
                                 <div className="blog__deatails--tag wow fadeInUp">
                                    <span>Post Tags : </span>
                                    <a href="#">Landing</a>
                                    <a href="#">Pix Saas Blog</a>
                                    <a href="#">The Saas</a>
                                 </div>
                              </div>
                           </div>

                           <div className="blog__author mb-95 d-md-flex wow fadeInUp">
                              <div className="blog__author-img mr-30">
                                 <img src="assets/img/blog/b10.jpg" className="img-fluid" alt="img" />
                              </div>
                              <div className="blog__author-content">
                                 <h5>Sophie Ianiro</h5>
                                 <span>Author</span>
                                 <p>I said cracking goal down the pub blag cheeky bugger at public school A bit of how's your father boot.!</p>
                              </div>
                           </div>

                           <div className="post-comments mb-95 wow fadeInUp">
                              <div className="post-comment-title mb-40">
                                 <h3>3 Comments</h3>
                              </div>
                              <div className="latest-comments">
                                 <ul>
                                    <li>
                                       <div className="comments-box">
                                          <div className="comments-avatar">
                                             <img src="assets/img/blog/b11.jpg" className="img-fluid" alt="img" />
                                          </div>
                                          <div className="comments-text">
                                             <div className="avatar-name">
                                                <h5>David Angel Makel</h5>
                                                <span className="post-meta">October 26, 2020</span>
                                             </div>
                                             <p>The bee's knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nut argy bargy vagabond buggered dropped.</p>
                                             <a href="#" className="comment-reply">
                                                <i > <BsReply className='blog_icon' /> </i> Reply</a>
                                          </div>
                                       </div>
                                    </li>
                                    <li className="children">
                                       <div className="comments-box">
                                          <div className="comments-avatar">
                                             <img src="assets/img/blog/b12.jpg" className="img-fluid" alt="img" />
                                          </div>
                                          <div className="comments-text">
                                             <div className="avatar-name">
                                                <h5>Bailey Wonger</h5>
                                                <span className="post-meta">October 27, 2020</span>
                                             </div>
                                             <p>Do one say wind up buggered bobby bite your arm off gutted mate, David victoria sponge cup of char chap fanny around.</p>
                                             <a href="#" className="comment-reply">
                                                <i > <BsReply className='blog_icon' /> </i> Reply</a>
                                          </div>
                                       </div>
                                    </li>
                                    <li className="children">
                                       <div className="comments-box">
                                          <div className="comments-avatar">
                                             <img src="assets/img/blog/b13.jpg" className="img-fluid" alt="img" />
                                          </div>
                                          <div className="comments-text">
                                             <div className="avatar-name">
                                                <h5>Hilary Ouse</h5>
                                                <span className="post-meta">October 28, 2020</span>
                                             </div>
                                             <p>Baking cakes is cobblers wellies William geeza bits and bobs what a plonker it's your round,</p>
                                             <a href="#" className="comment-reply">
                                                <i > <BsReply className='blog_icon' /> </i> Reply</a>
                                          </div>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                           </div>

                           <div className="post-comment-form wow fadeInUp">
                              <h4>Leave a Reply </h4>
                              <span>Your email address will not be published.</span>
                              <form action="#">
                                 <div className="row">
                                    <div className="col-xl-12">
                                       <div className="post-input">
                                          <textarea placeholder="Your message..."></textarea>
                                       </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6">
                                       <div className="post-input">
                                          <input type="text" placeholder="Your Name" />
                                       </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6">
                                       <div className="post-input">
                                          <input type="email" placeholder="Your Email" />
                                       </div>
                                    </div>
                                    <div className="col-xl-12">
                                       <div className="post-input">
                                          <input type="text" placeholder="Website" />
                                       </div>
                                    </div>
                                    <div className="col-xl-12">
                                       <div className="post-check mb-40">
                                          <input type="checkbox" />
                                          <span>Save my name, email, and website in this browser for the next time I comment.</span>
                                       </div>
                                    </div>
                                 </div>

                                 <button type="submit" className="theme-btn text-white">
                                    <i className="flaticon-enter"></i> Send Message</button>
                              </form>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4">
                        <div className="ablog__sidebar mb-50">
                           <div className="widget wow fadeInUp">
                              <div className="sidebar--widget__search mb-45">
                                 <form action="#">
                                    <input type="text" placeholder="Search" />
                                    <button type="submit"> <i> <BiSearch className='search_icon' /> </i> </button>
                                 </form>
                              </div>
                           </div>
                           <div className="widget mb-45 wow fadeInUp">
                              <h3 className="sidebar__widget--title mb-30">Recent News </h3>

                              <BlogSidebarWidget widget_img_num="b1"
                                 sidebar_post_title="Businesses Are Thriving Societies Are Not." />

                              <BlogSidebarWidget widget_img_num="b2"
                                 sidebar_post_title="The Importance of Instagram Metrics and" />

                              <BlogSidebarWidget widget_img_num="b7"
                                 sidebar_post_title="TikTok Influencer Marketing How to Work" />
                           </div>

                           <div className="widget mb-40 wow fadeInUp">
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
                           <div className="widget mb-25 wow fadeInUp">
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
               </div>
            </div>
         </section>
      </>
   );
};

export default BlogDetailsArea;