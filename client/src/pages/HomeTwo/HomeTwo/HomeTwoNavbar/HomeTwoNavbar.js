import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaFacebookF,FaBars } from 'react-icons/fa';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import Sidebar from '../../../../components/Sidebar/Sidebar';

const HomeTwoNavbar = () => {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const [sticky, setSticky] = useState(false);
   const stickyNavbar = () => {
      if (window.scrollY > 80) {
         setSticky(true)
      }
      else {
         setSticky(false)
      }
   }
   window.addEventListener('scroll', stickyNavbar);
   return (
      <>
         <header>
            <div className={sticky ? "sticky-menu tp-header-area-two header-sticky" : "tp-header-area-two header-sticky"}>
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-xl-3 col-8">
                        <div className="tp-header-logo-two">
                           <div className="tp-header-logo-two-inner" data-background="assets/img/logo/logo-white-bg.png">
                              <Link to="/"><img src="assets/img/logo/logo-white.png" alt="img not found" />
                              </Link>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-9 col-4">
                        <div className="tp-header-menu-two-wrapper">
                           <div className="row">
                              <div className="col-12">
                                 <div className="tp-header-top-two">
                                    <div className="tp-header-top-two-info">
                                       <ul>
                                          <li><i className="flaticon-pin"></i> 28/5 Palmal, London</li>
                                          <li><i className="flaticon-email"></i><a href="mailto:info@diofex24.com">info@diofex24.com</a></li>
                                          <li><i className="flaticon-phone-call"></i><a href="tel:02(250)3206285">02 (250) 320 6285</a></li>
                                       </ul>
                                    </div>
                                    <div className="tp-header-top-two-social">
                                       <a href="#"> <i><FaFacebookF className='icon' /> </i> </a>
                                       <a href="#"> <i><BsTwitter className='icon' /> </i></a>
                                       <a href="#"> <i><AiOutlineGooglePlus className='icon' /> </i> </a>
                                    </div>
                                 </div>
                                 <div className="tp-header-menu-two">
                                    <div className="tp-main-menu tp-main-menu-two">
                                       <nav id="tp-mobile-menu">
                                          <ul>
                                             <li className="menu-item-has-children">
                                                <NavLink to="/">Home</NavLink>
                                                <ul className="sub-menu">
                                                   <li><NavLink to="/">Home Style 1</NavLink></li>
                                                   <li><NavLink to="/homeTwo">Home Style 2</NavLink></li>
                                                   <li><NavLink to="/homeThree">Home Style 3</NavLink></li>
                                                </ul>
                                             </li>
                                             <li className="menu-item-has-children">
                                                <NavLink to="/about">Pages </NavLink>
                                                <ul className="sub-menu">
                                                   <li><NavLink to="/about">About</NavLink></li>
                                                   <li><NavLink to="/appointment">Appointment</NavLink></li>
                                                   <li><NavLink to="/pricing">Pricing</NavLink></li>
                                                   <li><NavLink to="/team">Team</NavLink></li>
                                                   <li><NavLink to="/teamDetails">Team Details</NavLink></li>
                                                   <li><NavLink to="/faq">Faq</NavLink></li>
                                                </ul>
                                             </li>
                                             <li className="menu-item-has-children">
                                                <NavLink to="/services">Services </NavLink>
                                                <ul className="sub-menu">
                                                   <li><NavLink to="/services">Services</NavLink></li>
                                                   <li><NavLink to="/servicesDetails">Services Details</NavLink></li>
                                                </ul>
                                             </li>
                                             <li className="menu-item-has-children">
                                                <NavLink to="/projects">Projects</NavLink>
                                                <ul className="sub-menu">
                                                   <li><NavLink to="/projects">Projects</NavLink></li>
                                                   <li><NavLink to="/projectsDetails">Projects Details
                                                   </NavLink></li>
                                                </ul>
                                             </li>
                                             <li className="menu-item-has-children">
                                                <NavLink to="/blogSidebar">Blog</NavLink>
                                                <ul className="sub-menu">
                                                   <li><NavLink to="/blogSidebar">Blog Sidebar</NavLink>
                                                   </li>
                                                   <li><NavLink to="/blogDetails">Blog Details</NavLink>
                                                   </li>
                                                </ul>
                                             </li>
                                             <li><NavLink to="/contact">Contact</NavLink></li>
                                          </ul>
                                       </nav>
                                    </div>
                                    <div className="tp-main-menu-two-btn">
                                       <Link to="/contact" className="yellow-btn">Get Quote +</Link>
                                    </div>
                                    {/* <!-- mobile menu activation --> */}
                                    <div className="side-menu-icon d-xl-none text-end">
                                       <button onClick={handleShow} className="side-toggle border-0 bg-transparent">
                                          <i> <FaBars className='bar_icon' /> </i></button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <Sidebar show={show} handleClose={handleClose}></Sidebar>
      </>
   );
};

export default HomeTwoNavbar;