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
                                        <input type="text" placeholder="Your Name"/>
                                    </div>
                                    <div className="input-field select-field-arrow mb-15">
                                        <select>
                                            <option defaultValue="">Choose Service</option>
                                            <option defaultValue="">House Cleaning</option>
                                            <option defaultValue="">Office Cleaning</option>
                                            <option defaultValue="">Kitchen Cleaning</option>
                                            <option defaultValue="">Club Cleaning</option>
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