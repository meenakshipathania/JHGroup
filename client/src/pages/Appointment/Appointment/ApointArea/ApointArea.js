import React from 'react';

const ApointArea = () => {
    return (
        <>
            <section className="tp-appoint-contact-area pt-145 appoint_bg" data-background="assets/img/appoint/appoint-bg.jpg">
                <div className="container">
                    <div className="row justify-content-lg-end justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <div className="tp-appoint-contact">
                                <form action="#" className="text-start tp-testimonial-two-form-wrapper">
                                    <h3 className="tp-testimonial-form-title mb-30 text-white">Appointment</h3>
                                    <div className="input-field mb-15">
                                        <input type="text" placeholder="Your Name"/>
                                    </div>
                                    <div className="input-field mb-15">
                                        <input type="text" placeholder="Your Contact"/>
                                    </div>
                                    <div className="input-field select-field-arrow mb-15">
                                        <select>
                                        <option defaultValue="1">Service Name</option>
                                            <option defaultValue="2">Commercial Service</option>
                                            <option defaultValue="3">Residential Service</option>
                                            <option defaultValue="4">Industrial Service</option>
                                            <option defaultValue="5">Retaining Walls Service</option>
                                            <option defaultValue="6">Lawn Care service</option>
                                            <option defaultValue="6">Drining service</option>
                                        </select>
                                    </div>
                                    <div className="input-field mb-15">
                                        <textarea placeholder="Write Message"></textarea>
                                    </div>
                                    <div className="input-field">
                                        <button type="submit" className="yellow-btn">
                                        <i className="flaticon-enter"></i> Submit Request</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ApointArea;