import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import { FaArrowAltCircleRight,FaPlay } from 'react-icons/fa';
import { CgCheckO } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const ProjectsDetailsArea = () => {
   const [isOpen, setOpen] = useState(false);
   return (
      <>

         <ModalVideo channel='youtube' autoplay isOpen={isOpen}
            videoId="o4GuSJYSzrY" onClose={() => setOpen(false)} />

         <section className="tp-services-details-area pt-120 pb-115">
            <div className="container">
               <div className="row">
                  <div className="col-xl-3 col-lg-4">
                     <div className="tp-faqs-left">
                        <div className="tp-faqs-left-sidebar mb-30">
                           <h4 className="tp-faqs-left-sidebar-title">Project Info</h4>
                           <ul>
                              <li>Name : <span>Daniel Samuels</span></li>
                              <li>Date : <span>25 August, 2021</span></li>
                              <li>Service : <span>Cleaning</span></li>
                              <li>Budget : <span>$350-$420</span></li>
                              <li>Feedback : <span>Happy Client</span></li>
                           </ul>
                        </div>
                        <div className="tp-faqs-left-img mb-30">
                           <img src="assets/img/about/faq-img-1.jpg" className="img" alt="img not found" />
                        </div>
                        <div className="tp-faqs-left-sidebar tp-services-sidebar mb-30">
                           <h4 className="tp-faqs-left-sidebar-title mb-0">Category...</h4>
                           <ul>
                              <li><Link to="/servicesDetails">Carpet Cleaning
                                 <i> <FaArrowAltCircleRight /> </i> </Link></li>

                              <li><Link to="/servicesDetails">House Cleaning
                                 <i> <FaArrowAltCircleRight /> </i> </Link></li>

                              <li><Link to="/servicesDetails">Road Cleaning
                                 <i> <FaArrowAltCircleRight /> </i> </Link></li>

                              <li><Link to="/servicesDetails">Kitchen Cleaning
                                 <i> <FaArrowAltCircleRight /> </i> </Link></li>

                              <li><Link to="/servicesDetails">Toilet Cleaning
                                 <i> <FaArrowAltCircleRight /> </i> </Link></li>

                              <li><Link to="/servicesDetails">Office Cleaning
                                 <i> <FaArrowAltCircleRight /> </i> </Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-9 col-lg-8">
                     <div className="tp-service-details">
                        <h2 className="tp-section-title heading-color-black translate-y--10 mb-10">Experience The Difference</h2>
                        <p className="mb-30">Fusce fusce ante dis varius iaculis quis penatibus do placerat et convallis ultricies egestas hacker pharetra veile litora nascetur diam dapibus euismod neque sapien siverra nunc nisler fortune litora neque ultrices eros aenean habitant tellus torquent ipsum, commodo Ligula curae; auctor ultricies laoreet metus cubilia enim faucibus litora nibh torquent platea sodales auctor gravida tortor class litora id arcu conubia. Augue suscipit metus ante eu rhoncus cras. Ipsum nulla feugiat nam pede cras a eleifend. Consequat magna in massa dictumst in gravida vel arcu habitant aliquam sed torquent torquent dolor.</p>
                        <div className="tp-service-details-img mb-30 position-relative">
                           <img src="assets/img/project/project-details.png" alt="img not found" />
                        </div>
                        <p className="mb-25">Neque gravida dui fermentum pulvinar fringilla sodales massa hendrerit nascetur. Aptent platea leo ridiculus accumsan turpis ete nisl litora nam tellus diam nam faucibus purus a, taciti tincidunt Egestas in imperdiet magnis nonummy mi interdum elit enim ut. Curabitur quis vitae lobortis quam lacus pharetra mus, arcu. Vele Facilisi orci orci nisi consequat dignissim duise in iaculis pulvinar hymenaeos pharetra tortor phasellus. Consectetuer penatibus id. Eleifend potenti. Elit purus fermentum idev posuere nullam iaculis. Fusce orci co nsectetuer. Metus nonummy turpis sodales vivamus mollis posuere fermentum </p>
                        <h3 className="tp-service-details-subtitle mb-20">First Class Cleaning Services</h3>
                        <p className="mb-30">Quisque maorbi gravida, enim hendrerit nunc feugiat vehicula fringilla. Ridiculus sapien curabitur. Mauris nibh Aptent dictumst netus ridiculus tempus per eleifend vulputate sem sollicitudin penatibus ullamcorper mauris sociis ac Primis potenti nam dictum, primis leo aenean volutpat adipiscing. Metus elit feugiat cras cursus iaculis nulla tortor dictumst sociosqu malesuada nostra scelerisque massa rhoncus torquent pellentesque, primis luctus donec eget vivamus integer.</p>
                        <div className="tp-service-details-img mb-30 position-relative">
                           <img src="assets/img/project/project-details-2.jpg" alt="img not found" />
                           <div className="tp-service-details-img-overlay">
                              <div className="tp-service-details-img-overlay-icon">
                                 {/* <a className="venobox" data-autoplay="true" data-vbtype="video" href="https://youtu.be/o4GuSJYSzrY"><i className="fas fa-play"></i></a> */}
                                 <button onClick={() => setOpen(true)} className="venobox" data-autoplay="true" data-vbtype="video" href="https://youtu.be/o4GuSJYSzrY">
                                    <i > <FaPlay className="text-white" /> </i>
                                 </button>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-sm-6">
                              <div className="tp-service-details-img mb-30">
                                 <img src="assets/img/project/project-details-3.jpg" alt="img not found" />
                              </div>
                           </div>
                           <div className="col-sm-6">
                              <div className="tp-service-details-img mb-30">
                                 <img src="assets/img/project/project-details-4.jpg" alt="img not found" />
                              </div>
                           </div>
                        </div>
                        <p className="mb-25 d-flex"><i > <CgCheckO /> </i> Imperdiet. Iaculis bibendum platea feugiat erat commodo maecenas sociosqu varius nunc litora fringilla Tincidunt ad neque vitae duis mus phasellus pede rutrum rutrum massa dis purus magnis senectus ridiculus vestibulum. Cursus accumsan praes tesque massa consectetuer etiam laoreet velit sagittis erat Inceptos</p>
                        <p className="d-flex m-0"><i > <CgCheckO /> </i> Commodo maecenas sociosqu, varius nunc litora fringilla Tincidunt ad neque vitae duis mus phasellus pede rutrum rutrum massa  purus magnis senectus ridiculus vestibulum praes tesque massa consectetuer</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ProjectsDetailsArea;