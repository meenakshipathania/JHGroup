import React, { useState, useRef } from 'react';
// import axios from 'axios';

const HomeThreeCta = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('');

    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const apponitment = { name, phone, service };
        setName("");
        setPhone("");
        setService("");

        fetch('http://165.227.11.15:1337/api/online-appointments', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: apponitment })
        }).then(() => {
            console.log("new contact added")
        })
    }
    return (
        <>
            <section className="tp-appoint-cta-area blue-dark-bg pt-80 pb-65">
                <div className="container">
                    <form id="contactForm" ref={form} onSubmit={handleSubmit}>
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
                                        <input type="text" placeholder="Full Name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="col-lg-4 custom-pad-20">
                                    <div className="tp-appoint tp-appoint-three wow fadeInUp" data-wow-delay=".6s">
                                        <input type="tel" pattern="[0-9]{10}" placeholder="Phone Number" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="col-lg-4 custom-pad-20">
                                    <div className="tp-appoint tp-appoint-three select-field-arrow wow fadeInUp" data-wow-delay=".8s">
                                        <select value={service} onChange={(e) => setService(e.target.value)}>
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
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 custom-pad-20">
                            <div className="tp-appoint tp-appoint-three text-end wow fadeInUp" data-wow-delay="1s">
                                <button type="submit" className="theme-btn text-white">
                                <i className="flaticon-enter"></i> Submit Now</button>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default HomeThreeCta;