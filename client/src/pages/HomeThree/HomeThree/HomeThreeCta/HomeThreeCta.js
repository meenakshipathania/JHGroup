import React from 'react';

const HomeThreeCta = () => {
    return (
        <>
            <section className="tp-appoint-cta-area blue-dark-bg pt-80 pb-65">
                <div className="container">
                    <div className="row align-items-center custom-mar-20">
                        <div className="col-xl-2 col-lg-12 custom-pad-20">
                            <div className="tp-appoint wow fadeInUp" data-wow-delay=".2s">
                                <h4 className="tp-appoint-title text-white">Online <br/> Appointment </h4>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-9 custom-pad-20">
                            <div className="row align-items-center custom-mar-20">
                                <div className="col-lg-4 custom-pad-20">
                                    <div className="tp-appoint tp-appoint-three wow fadeInUp" data-wow-delay=".4s">
                                        <input type="text" placeholder="Full Name"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 custom-pad-20">
                                    <div className="tp-appoint tp-appoint-three wow fadeInUp" data-wow-delay=".6s">
                                        <input type="text" placeholder="Phone Number"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 custom-pad-20">
                                    <div className="tp-appoint tp-appoint-three select-field-arrow wow fadeInUp" data-wow-delay=".8s">
                                        <select>
                                            <option defaultValue="1">Service Name</option>
                                            <option defaultValue="2">Commercial Service</option>
                                            <option defaultValue="3">Residential Service</option>
                                            <option defaultValue="4">Industrial Service</option>
                                            <option defaultValue="5">Commercial Service</option>
                                            <option defaultValue="6">Residential Service</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 custom-pad-20">
                            <div className="tp-appoint tp-appoint-three text-end wow fadeInUp" data-wow-delay="1s">
                                <button type="submit" className="theme-btn text-white">
                                <i className="flaticon-enter"></i> Submit Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeThreeCta;