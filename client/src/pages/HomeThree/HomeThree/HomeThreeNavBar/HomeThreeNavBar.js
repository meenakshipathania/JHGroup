import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Sidebar from '../../../../components/Sidebar/Sidebar';

const apiUrl = 'http://localhost:1337/api/logos?populate=*';
const NewUrl = 'http://localhost:1337/api/navbars';
const NewAPIUrl = 'http://localhost:1337/api/quotes';
const HomeThreeNavBar = () => {
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

   const [text, Settext] = useState();
   useEffect(() => {
      const request = axios.CancelToken.source();
      setTimeout(() => {
         axios
            .get(NewAPIUrl, { cancelToken: request.token })
            .then((res) => {
               Settext(res.data.data);
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
            <div className={sticky ? "sticky-menu tp-header-area-three header-sticky" : "tp-header-area-three header-sticky"}>
               <div className="tp-custom-container">
                  <div className="row justify-content-xl-center align-items-center">
                     <div className="col-xxl-2 col-xl-3 col-8">
                        <div className="tp-header-logo-three">
                           <Link to="/">
                              {logo
                                 ? logo.map((x) => (
                                    <a href="/"><img src={x.attributes ? imageurl(x.attributes) : 'hgghtyu'} alt=""/></a>
                                    ))
                                 : 'hgfhgf'}
                           </Link>
                        </div>
                     </div>
                     <div className="col-xxl-6 col-xl-6 col-4">
                        <div className="tp-main-menu tp-main-menu-three">
                           <nav id="tp-mobile-menu">
                              <ul>
                                 <li className="menu-item-has-children">
                                    <NavLink to="/">{nav ? nav.map((x) => <a>{x.attributes.tag1}</a>) : 'Home'}</NavLink>
                                    <ul className="sub-menu">
                                       <li><NavLink to="/">Home Style 1</NavLink></li>
                                       <li><NavLink to="/homeTwo">Home Style 2</NavLink></li>
                                       <li><NavLink to="/homeThree">Home Style 3</NavLink></li>
                                    </ul>
                                 </li>
                                 <li className="menu-item-has-children">
                                    <NavLink to="/services">{nav ? nav.map((x) => <a>{x.attributes.tag2}</a>) : 'Home'}</NavLink>
                                    {/* <ul className="sub-menu">
                                       <li><NavLink to="/about">About</NavLink></li>
                                       <li><NavLink to="/appointment">Appointment</NavLink></li>
                                       <li><NavLink to="/pricing">Pricing</NavLink></li>
                                       <li><NavLink to="/team">Team</NavLink></li>
                                       <li><NavLink to="/teamDetails">Team Details</NavLink></li>
                                       <li><NavLink to="/faq">Faq</NavLink></li>
                                    </ul> */}
                                 </li>
                                 <li className="menu-item-has-children">
                                    <NavLink to="/services">{nav ? nav.map((x) => <a>{x.attributes.tag3}</a>) : 'Home'}</NavLink>
                                    {/* <ul className="sub-menu">
                                       <li><NavLink to="/services">Services</NavLink></li>
                                       <li><NavLink to="/servicesDetails">Services Details</NavLink></li>
                                    </ul> */}
                                 </li>
                                 <li className="menu-item-has-children">
                                    <NavLink to="/about">{nav ? nav.map((x) => <a>{x.attributes.tag4}</a>) : 'Home'}</NavLink>
                                    {/* <ul className="sub-menu">
                                       <li><NavLink to="/projects">Projects</NavLink></li>
                                       <li><NavLink to="/projectsDetails">Projects Details
                                       </NavLink></li>
                                    </ul> */}
                                 </li>
                                 <li className="menu-item-has-children">
                                    <NavLink to="/contact">{nav ? nav.map((x) => <a>{x.attributes.tag5}</a>) : 'Home'}</NavLink>
                                    {/* <ul className="sub-menu">
                                       <li><NavLink to="/blogSidebar">Blog Sidebar</NavLink>
                                       </li>
                                       <li><NavLink to="/blogDetails">Blog Details</NavLink>
                                       </li>
                                    </ul> */}
                                 </li>
                                 {/* <li><NavLink to="/contact">Contact</NavLink></li> */}
                              </ul>
                           </nav>
                        </div>
                        {/* <!-- mobile menu activation --> */}
                        <div className="side-menu-icon d-xl-none text-end">
                           <button onClick={handleShow} className="side-toggle border-0 bg-transparent">
                              <i> <FaBars className='bar_icon' /> </i></button>
                        </div>
                     </div>
                     <div className="col-xxl-4 col-xl-3 d-none d-xl-block">
                        <div className="tp-header-right-three">
                           <div className="tp-header-number-three">
                              <span>Call Us : <a href="tel:33888200-55">{text ? text.map((x) => <a>{x.attributes.text2}</a>) : 'Home'}</a></span>
                           </div>
                           <div className="tp-header-btn-three">
                              <Link to="/contact" className="yellow-btn">
                                 <i className="flaticon-enter"></i> {text ? text.map((x) => <a>{x.attributes.text3}</a>) : 'Home'}</Link>
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

export default HomeThreeNavBar;