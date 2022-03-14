import React from 'react';
import { Link } from 'react-router-dom';

const ChoseArea = () => {
    return (
        <>
            <section className="tp-choose-area position-relative pt-120 pb-90">
            <div className="tp-choose-yellow-bg"></div>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-6 col-lg-8">
                        <div className="tp-choose z-index">
                            <div className="tp-section-title-wrapper mb-105 wow fadeInUp" data-wow-delay=".2s">
                                <h5 className="tp-section-subtitle common-yellow-shape common-white-shape section__sm__title">Why Choose Klenar</h5>
                                <h2 className="tp-section-title">Expert House Cleaning Service Can Trust</h2>
                            </div>
                            <div className="tp-choose-img mb-40 z-index d-block d-xl-none">
                                <img src="assets/img/about/choose-img-1.jpg" alt="img not found"/>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="tp-choose-timeline ml-15 mb-30">
                                        <div className="tp-choose-timeline-single mb-55 pl-35 wow fadeInUp" data-wow-delay=".4s">
                                            <h4 className="tp-choose-timeline-single-title mb-15 hover-theme-color">
                                              <Link to="/servicesDetails">Every Customer <br/>is Special</Link>
                                             </h4>
                                            <p>Bras fringilla conubia odios metus torquent commodo quam </p>
                                        </div>
                                        <div className="tp-choose-timeline-single mb-55 pl-35 wow fadeInUp" data-wow-delay=".6s">
                                            <h4 className="tp-choose-timeline-single-title mb-15 hover-theme-color">
                                                <Link to="/servicesDetails">Customer Support <br/>Live Chat</Link>
                                                </h4>
                                            <p>Bras fringilla conubia odios metus torquent commodo quam </p>
                                        </div>
                                        <div className="tp-choose-timeline-single pl-35 wow fadeInUp" data-wow-delay=".8s">
                                            <h4 className="tp-choose-timeline-single-title mb-15 hover-theme-color"><Link to="/servicesDetails">Enjoy Discounts <br/>in Fees</Link></h4>
                                            <p>Bras fringilla conubia odios metus torquent commodo quam </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="tp-choose-timeline ml-15 mb-30">
                                        <div className="tp-choose-timeline-single mb-55 pl-35 wow fadeInUp" data-wow-delay="1s">
                                            <h4 className="tp-choose-timeline-single-title mb-15 hover-theme-color"><Link to="/servicesDetails">Book Appointment <br/>in online</Link></h4>
                                            <p>Bras fringilla conubia odios metus torquent commodo quam </p>
                                        </div>
                                        <div className="tp-choose-timeline-single mb-55 pl-35 wow fadeInUp" data-wow-delay="1.2s">
                                            <h4 className="tp-choose-timeline-single-title mb-15 hover-theme-color"><Link to="/servicesDetails">Information for Any <br/>Services</Link></h4>
                                            <p>Bras fringilla conubia odios metus torquent commodo quam </p>
                                        </div>
                                        <div className="tp-choose-timeline-single pl-35 wow fadeInUp" data-wow-delay="1.4s">
                                            <h4 className="tp-choose-timeline-single-title mb-15 hover-theme-color"><Link to="/servicesDetails">We Give 24/7 <br/>Support</Link></h4>
                                            <p>Bras fringilla conubia odios metus torquent commodo quam </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-12">
                        <div className="tp-choose-img mb-30 z-index d-none d-xl-block wow fadeInUp" data-wow-delay=".6s">
                            <img src="assets/img/about/choose-img-1.jpg" alt="img not found"/>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        </>
    );
};

export default ChoseArea;