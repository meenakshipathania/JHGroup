import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import Collapsible from 'react-collapsible';

const NewUrl = 'http://localhost:1337/api/navbars';
const ApiUrl = 'http://localhost:1337/api/contacts';
const Sidebar = ({ show, handleClose }) => {
   const [nav, Setnav] = useState();
   useEffect(() => {
      const request = axios.CancelToken.source();
      setTimeout(() => {
         axios.get(NewUrl, { cancelToken: request.token })
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


   const Home = <NavLink to="/homeThree">{nav ? nav.map((x) => <a>{x.attributes.tag1}</a>) : 'Home'}</NavLink>
   const Services = <NavLink to="/services">{nav ? nav.map((x) => <a>{x.attributes.tag2}</a>) : 'Services'} </NavLink>
   const Gallary = <NavLink to="/gallary">{nav ? nav.map((x) => <a>{x.attributes.tag3}</a>) : 'Gallary'} </NavLink>
   const About_us = <NavLink to="/about">{nav ? nav.map((x) => <a>{x.attributes.tag4}</a>) : 'About Us'}</NavLink>
   const contact = <NavLink to="/contact">{nav ? nav.map((x) => <a>{x.attributes.tag5}</a>) : 'Contact'}</NavLink>
   return (
      <>

         <div className='side__bar'>
            <Offcanvas show={show} onHide={handleClose} placement='end'>
               <Offcanvas.Header closeButton>
                  {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
               </Offcanvas.Header>
               <Offcanvas.Body>


                  <Collapsible trigger={Home} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     <ul className="sidebar_sub_menu text-white mt-3">
                        <li><NavLink to="/">Home Style 1</NavLink></li>
                        <li><NavLink to="/homeTwo">Home Style 2</NavLink></li>
                        <li><NavLink to="/homeThree">Home Style 3</NavLink></li>
                     </ul>
                  </Collapsible>

                  <Collapsible trigger={Services} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     <ul className="sidebar_sub_menu text-white mt-3">
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/appointment">Appointment</NavLink></li>
                        <li><NavLink to="/pricing">Pricing</NavLink></li>
                        <li><NavLink to="/team">Team</NavLink></li>
                        <li><NavLink to="/teamDetails">Team Details</NavLink></li>
                        <li><NavLink to="/faq">Faq</NavLink></li>
                     </ul>
                  </Collapsible>

                  <Collapsible trigger={Gallary} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     <ul className="sidebar_sub_menu text-white mt-3">
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/servicesDetails">Services Details</NavLink></li>
                     </ul>
                  </Collapsible>

                  <Collapsible trigger={About_us} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     <ul className="sidebar_sub_menu text-white mt-3">
                        <li><NavLink to="/projects">Projects</NavLink></li>
                        <li><NavLink to="/projectsDetails">Projects Details</NavLink></li>
                     </ul>
                  </Collapsible>

                  <Collapsible trigger={contact} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     <ul className="sidebar_sub_menu text-white mt-3">
                        <li><NavLink to="/blogSidebar">Blog Sidebar</NavLink></li>
                        <li><NavLink to="/blogDetails">Blog Details</NavLink></li>
                     </ul>
                  </Collapsible>

                  {/* <div className='contact_nav text-white font-bold'>
                     <NavLink className="font-bold" to="/contact">Contact</NavLink>
                  </div> */}

                  <div className="fix">
                     <div className="side-info">
                        <div className="side-info-content">
                           <div className="tp-mobile-menu"></div>
                           <div className="contact-infos mb-30">
                              <div className="contact-list mb-30">
                                 <h4>Contact Info</h4>
                                 <ul>
                                    <li><i className="flaticon-pin"></i>{text ? text.map((x) => <a>{x.attributes.address}</a>) : 'Home'}</li>
                                    <li><i className="flaticon-email"></i><a href="mailto:info@klenar.com">{text ? text.map((x) => <a>{x.attributes.email}</a>) : 'Email'}</a></li>
                                    <li><i className="flaticon-phone-call"></i><a href="tel:817-991-0254">{text ? text.map((x) => <a>{x.attributes.phone}</a>) : 'Home'}</a></li>
                                 </ul>
                                 <div className="sidebar__menu--social">
                                    <a className="text-white" href="/"><i><FaFacebookF className='icon' /> </i></a>
                                    <a className="text-white" href="/"><i><BsTwitter className='icon' /> </i></a>
                                    <a className="text-white" href="/"><i><BsInstagram className='icon' /> </i></a>
                                    <a className="text-white" href="/"><i><AiOutlineGoogle className='icon' /> </i></a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </Offcanvas.Body>
            </Offcanvas>
         </div>
      </>
   );
};

export default Sidebar;