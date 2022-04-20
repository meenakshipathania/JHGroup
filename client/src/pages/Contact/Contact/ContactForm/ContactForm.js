import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
// import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen } from 'react-icons/fa';

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

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [interested, setInterested] = useState('');
    const [hear, setHear] = useState('');
    const [message, setMessage] = useState('');
    const [streetaddress, setStreetaddress] = useState('');
    const [streetaddress2, setStreetaddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const contact = { firstname, lastname, email, phone, interested, hear, message, streetaddress, streetaddress2, city, state, zip };
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setInterested("");
        setHear("");
        setMessage("");
        setStreetaddress("");
        setStreetaddress2("");
        setCity("");
        setState("");
        setZip("");

        // important//////////////
        // emailjs.sendForm('service_6o3palp', 'template_58uclcx', form.current, 'pYfziu1Gd30wQSISj')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
        // e.target.reset()

        fetch('http://165.227.11.15:1337/api/contect-datas', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: contact })
        }).then(() => {
            console.log("new contact added")
        })
    }


    return (
        <>
            <section className="tp-contact-area pb-120 mt-80">
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
                                            <i> <FaMapMarkerAlt className='contact_icon' /> </i>
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
                                            <i> <FaPhoneAlt className='contact_icon' /> </i>
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
                                            <i > <FaEnvelopeOpen className='contact_icon' /> </i>
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
                            <form id="contactForm" ref={form} onSubmit={handleSubmit}>
                                <div className="tp-contact-form">
                                    <div className="row custom-mar-20">
                                        <div className="col-md-6 custom-pad-20">
                                            <div className="tp-contact-form-field mb-20">
                                                <input type="text" placeholder="First Name" name="firstname" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 custom-pad-20">
                                            <div className="tp-contact-form-field mb-20">
                                                <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastName(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 custom-pad-20">
                                            <div className="tp-contact-form-field mb-20">
                                                <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 custom-pad-20">
                                            <div className="tp-contact-form-field mb-20">
                                                <input type="tel" pattern="[0-9]{10}" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 custom-pad-20">
                                            <div className="tp-contact-form-field select-field-arrow mb-20">
                                                <select value={interested} onChange={(e) => setInterested(e.target.value)}>
                                                    <option defaultValue="1">Interested In</option>
                                                    <option defaultValue="2" value="Landscaping">Landscaping</option>
                                                    <option defaultValue="3" value="Lawn Care">Lawn Care</option>
                                                    <option defaultValue="4" value="Sod">Sod</option>
                                                    <option defaultValue="5" value="Tree Service">Tree Service</option>
                                                    <option defaultValue="6" value="Mosquito Service">Mosquito Service</option>
                                                    <option defaultValue="7" value="Retaining Walls">Retaining Walls</option>
                                                    <option defaultValue="8" value="Remodeling">Remodeling</option>
                                                    <option defaultValue="9" value="Demolition">Demolition</option>
                                                    <option defaultValue="10" value="Irrigation">Irrigation</option>
                                                    <option defaultValue="11" value="Drainage">Drainage</option>
                                                    <option defaultValue="12" value="Fencing">Fencing</option>
                                                    <option defaultValue="13" value="Concrete">Concrete</option>
                                                    <option defaultValue="14" value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6 custom-pad-20">
                                            <div className="tp-contact-form-field select-field-arrow mb-20">
                                                <select value={hear} onChange={(e) => setHear(e.target.value)}>
                                                    <option defaultValue="1">How did you hear about us ?</option>
                                                    <option defaultValue="2" value="Google">Google</option>
                                                    <option defaultValue="3" value="Good Contractors List">Good Contractors List</option>
                                                    <option defaultValue="4" value="Angie's List">Angie's List</option>
                                                    <option defaultValue="5" value="Facebook">Facebook</option>
                                                    <option defaultValue="6" value="Friend/Neighbour">Friend/Neighbour</option>
                                                    <option defaultValue="7" value="Others">Others</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12 custom-pad-20">
                                            <div className="tp-contact-form-field mb-20">
                                                <textarea name="message" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                            </div>
                                        </div>

                                        <div className="col-md-12 custom-pad-20">
                                            <div className="tp-contact-form-field mb-20">
                                                <label>Address</label>
                                                <div class="row">
                                                    <div className="col-md-12 custom-pad-20">
                                                        <div className="tp-contact-form-field mb-20">
                                                            <input type="text" placeholder="Street Address" value={streetaddress} onChange={(e) => setStreetaddress(e.target.value)} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div className="col-md-12 custom-pad-20">
                                                        <div className="tp-contact-form-field mb-20">
                                                            <input type="text" placeholder="Street Address Line 2" value={streetaddress2} onChange={(e) => setStreetaddress2(e.target.value)} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6 custom-pad-20">
                                                        <div className="tp-contact-form-field mb-20">
                                                            <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 custom-pad-20">
                                                        <div className="tp-contact-form-field mb-20">
                                                            <input type="text" placeholder="State / Province" value={state} onChange={(e) => setState(e.target.value)} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div className="col-md-6 custom-pad-20">
                                                        <div className="tp-contact-form-field mb-20">
                                                            <input type="text" placeholder="Postal / Zip Code" value={zip} onChange={(e) => setZip(e.target.value)} />
                                                        </div>
                                                    </div>
                                                </div>
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
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactForm;