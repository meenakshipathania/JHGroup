import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaMapMarkerAlt,FaPhoneAlt,FaEnvelopeOpen } from 'react-icons/fa';

const ContactForm = () => {
    const [text, Settext] = useState([]);
    useEffect(() => {
       const request = axios.CancelToken.source();
          axios.get('http://165.227.11.15:1337/api/contacts')
             .then((res) => {
                Settext(res.data.data);
             })
             .catch((error) => {
                console.log(error);
             });
       return () => request.cancel();
    }, []);
    
    return (
        <>
            <section className="tp-contact-area pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="section-title-wrapper-two mb-50 wow fadeInUp" data-wow-delay=".2s">
                                <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">{text ? text.map((x) => <span>{x.attributes.text}</span>) : 'Office Address'}</h5>
                                <h2 className="tp-section-title heading-color-black">{text ? text.map((x) => <span>{x.attributes.text1}</span>) : 'Office Address'}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="row custom-mar-20">
                                <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                                    <div className="tp-contact-info mb-40 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="tp-contact-info-icon">
                                            <i> <FaMapMarkerAlt className='contact_icon'/> </i>
                                        </div>
                                        <div className="tp-contact-info-text">
                                            <h4 className="tp-contact-info-title mb-15">{text ? text.map((x) => <span>{x.attributes.head1}</span>) : 'Office Address'}</h4>
                                            <p>{text ? text.map((x) => <span>{x.attributes.address}</span>) : 'Home'}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                                    <div className="tp-contact-info mb-40 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="tp-contact-info-icon">
                                            <i> <FaPhoneAlt className='contact_icon'/> </i>
                                        </div>
                                        <div className="tp-contact-info-text">
                                            <h4 className="tp-contact-info-title mb-15">{text ? text.map((x) => <span>{x.attributes.head2}</span>) : 'Free Contact'}</h4>
                                            <a href="tel:333888200-55">{text ? text.map((x) => <span>{x.attributes.phone}</span>) : 'Home'}</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                                    <div className="tp-contact-info mb-40 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="tp-contact-info-icon">
                                            <i > <FaEnvelopeOpen className='contact_icon'/> </i>
                                        </div>
                                        <div className="tp-contact-info-text">
                                            <h4 className="tp-contact-info-title mb-15">{text ? text.map((x) => <span>{x.attributes.head3}</span>) : 'Email Address'}</h4>
                                            <a href="mailto:info@themepure.com">{text ? text.map((x) => <span>{x.attributes.email}</span>) : 'Home'}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="tp-contact-form">
                                <div className="row custom-mar-20">
                                    <div className="col-md-6 custom-pad-20">
                                        <div className="tp-contact-form-field mb-20">
                                            <input type="text" placeholder="Full name"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 custom-pad-20">
                                        <div className="tp-contact-form-field mb-20">
                                            <input type="email" placeholder="Email Address"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 custom-pad-20">
                                        <div className="tp-contact-form-field mb-20">
                                            <input type="text" placeholder="Phone"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 custom-pad-20">
                                        <div className="tp-contact-form-field select-field-arrow mb-20">
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
                                    </div>
                                    <div className="col-md-12 custom-pad-20">
                                        <div className="tp-contact-form-field mb-20">
                                            <textarea placeholder="Your Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12 custom-pad-20">
                                        <div className="tp-contact-form-field">
                                            <button type="submit" className="theme-btn text-white">
                                            <i className="flaticon-enter"></i> Send Message</button>
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

export default ContactForm;