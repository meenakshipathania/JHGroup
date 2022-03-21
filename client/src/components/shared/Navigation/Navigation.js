import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar';
import { FaBars } from 'react-icons/fa';

const apiUrl = 'http://localhost:1337/api/logos?populate=*';
const ApiUrl = 'http://localhost:1337/api/contacts';
const NewUrl = 'http://localhost:1337/api/navbars';
const Navigation = () => {
   const [logo, Setlogo] = useState();
   useEffect(() => {
      const request = axios.CancelToken.source();
      setTimeout(() => {
         axios
            .get(apiUrl, { cancelToken: request.token })
            .then((res) => {
               Setlogo(res.data.data);
            })
            .catch((error) => {
               console.log(error);
            });
      }, 2000);
      return () => request.cancel();
   });

   function imageurl(atttribute) {
      const baseurl = 'http://localhost:1337';
      const dataurl = atttribute.image.data[0].attributes.url;
      return baseurl + dataurl;
   }

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

   const [nav, Setnav] = useState();
   useEffect(() => {
      const request = axios.CancelToken.source();
      setTimeout(() => {
         axios
            .get(NewUrl, { cancelToken: request.token })
            .then((res) => {
               Setnav(res.data.data);
            })
            .catch((error) => {
               console.log(error);
            });
      }, 2000);
      return () => request.cancel();
   });
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   // sticky state
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
            <div className="tp-header-area">
               <div className="tp-header-top theme-dark-bg pt-20 pb-50 d-none d-xl-block">
                  <div className="tp-custom-container">
                     <div className="row align-items-center">
                        <div className="col-xxl-4 col-xl-5">
                           <div className="tp-header-top-info">
                              <div className="tp-header-top-info-single pr-40 mr-40 border-right-1">
                                 <div className="tp-header-top-info-single-icon mr-10">
                                    <i className="flaticon-pin"></i>
                                 </div>
                                 <div className="tp-header-top-info-single-text">
                                    <span className="tp-header-top-info-single-label">{text ? text.map((x) => <span>{x.attributes.head1}</span>) : 'Home'}</span>
                                    <span className="tp-header-top-info-single-content font-medium">{text ? text.map((x) => <a>{x.attributes.address}</a>) : 'Home'}</span>
                                 </div>
                              </div>
                              <div className="tp-header-top-info-single">
                                 <div className="tp-header-top-info-single-icon mr-15">
                                    <i className="flaticon-email"></i>
                                 </div>
                                 <div className="tp-header-top-info-single-text">
                                    <span className="tp-header-top-info-single-label">{text ? text.map((x) => <span>{x.attributes.head3}</span>) : 'Home'}</span>
                                    <a href="mailto:info@klenar.com" className="tp-header-top-info-single-content font-medium text-white">info@klenar.com</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-4 col-xl-2">
                           <div className="header-logo text-center">
                              <Link to="/">
                                 {logo
                                    ? logo.map((x) => (
                                       <a href="/"><img src={x.attributes ? imageurl(x.attributes) : 'hgghtyu'} alt="" /></a>
                                    ))
                                    : 'hgfhgf'}
                              </Link>
                           </div>
                        </div>
                        <div className="col-xxl-4 col-xl-5">
                           <div className="tp-header-top-info justify-content-end">
                              <div className="tp-header-top-info-single mr-85">
                                 <div className="tp-header-top-info-single-icon tp-header-top-info-single-icon-call mr-10">
                                    <i className="flaticon-phone-call"></i>
                                 </div>
                                 <div className="tp-header-top-info-single-text">
                                    <span className="tp-header-top-info-single-label">{text ? text.map((x) => <span>{x.attributes.head2}</span>) : 'Home'}</span>
                                    <a href="tel:(817) 991-0254" className="tp-header-top-info-single-content font-medium text-white">{text ? text.map((x) => <a>{x.attributes.phone}</a>) : 'Home'}</a>
                                 </div>
                              </div>
                              <div className="tp-header-top-info-single">
                                 <div className="tp-header-top-info-single-btn">
                                    <Link to="/contact" className="yellow-btn"><i className="flaticon-enter"></i> Free Quote</Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className={sticky ? "sticky-menu tp-header-menu-area tp-transparent-header-menu header-sticky" : "tp-header-menu-area tp-transparent-header-menu header-sticky"}>
                  <div className="container">
                     <div className="row justify-content-xl-center align-items-center">
                        <div className="col-xl-2 col-8 tp-sticky-column">
                           <div className="tp-sticky-logo">
                              <Link to="/">
                                 {logo
                                    ? logo.map((x) => (
                                       <a href="/">
                                          <img
                                             src={
                                                x.attributes
                                                   ? imageurl(x.attributes)
                                                   : 'hgghtyu'
                                             }
                                             alt=""
                                          />
                                       </a>
                                    ))
                                    : 'hgfhgf'}
                              </Link>
                           </div>
                        </div>
                        <div className="col-xl-8 col-4">
                           <div className="tp-main-menu-bg">
                              <div className="tp-main-menu">
                                 <nav id="tp-mobile-menu">
                                    <ul className="text-center">
                                       <li className="menu-item-has-children"><NavLink to="/">{nav ? nav.map((x) => <a>{x.attributes.tag1}</a>) : 'Home'}</NavLink>
                                          <ul className="sub-menu">
                                             <li><NavLink to="/">Home Style 1</NavLink></li>
                                             <li><NavLink to="/homeTwo">Home Style 2</NavLink></li>
                                             <li><NavLink to="/homeThree">Home Style 3</NavLink></li>
                                          </ul>
                                       </li>
                                       <li className="menu-item-has-children">
                                          <NavLink to="/services">{nav ? nav.map((x) => <a>{x.attributes.tag2}</a>) : 'Services'}</NavLink>
                                          {/* <ul className="sub-menu">
                                             <li><NavLink to="/about">About</NavLink></li>
                                             <li><NavLink to="/appointment">Appointment</NavLink></li>
                                             <li><NavLink to="/pricing">Pricing</NavLink></li>
                                             <li><NavLink to="/team">Team</NavLink></li>
                                             <li><NavLink to="/teamDetails">Team Details</NavLink>
                                             </li>
                                             <li><NavLink to="/faq">Faq</NavLink></li>
                                          </ul> */}
                                       </li>
                                       <li className="menu-item-has-children">
                                          <NavLink to="/gallary">{nav ? nav.map((x) => <a>{x.attributes.tag3}</a>) : 'Gallary'}</NavLink>
                                          {/* <ul className="sub-menu">
                                             <li><NavLink to="/services">Services</NavLink></li>
                                             <li><NavLink to="/servicesDetails">Services Details</NavLink></li>
                                          </ul> */}
                                       </li>
                                       <li className="menu-item-has-children">
                                          <NavLink to="/about">{nav ? nav.map((x) => <a>{x.attributes.tag4}</a>) : 'About Us'}</NavLink>
                                          {/* <ul className="sub-menu">
                                             <li><NavLink to="/projects">Projects</NavLink></li>
                                             <li><NavLink to="/projectsDetails">Projects Details
                                             </NavLink></li>
                                          </ul> */}
                                       </li>
                                       {/* <li className="menu-item-has-children">
                                          <NavLink to="/blogSidebar">Blog</NavLink>
                                          <ul className="sub-menu">
                                             <li><NavLink to="/blogSidebar">Blog Sidebar</NavLink>
                                             </li>
                                             <li><NavLink to="/blogDetails">Blog Details</NavLink>
                                             </li>
                                          </ul>
                                       </li> */}
                                       <li><NavLink to="/contact">{nav ? nav.map((x) => <a>{x.attributes.tag5}</a>) : 'Contact'}</NavLink></li>
                                    </ul>
                                 </nav>
                              </div>


                              <div className="side-menu-icon d-xl-none text-end">
                                 <button onClick={handleShow} className="side-toggle border-0 bg-transparent">
                                    <i> <FaBars className='bar_icon' /> </i></button>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-2 tp-sticky-column-btn">
                           <div className="tp-sticky-btn text-end">
                              <Link to="/contact" className="theme-btn justify-content-end text-white"><i className="flaticon-enter"></i> Free Quote</Link>
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

export default Navigation;