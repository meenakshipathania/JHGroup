import React from 'react';
import { Link } from 'react-router-dom';
import HomeTwoSingleService from '../../../../components/HomeTwoSingleService/HomeTwoSingleService';

const HomeTwoServices = () => {
    return (
        <>
            <section className="tp-quality-service-area pt-110 bg-gray-light pb-115">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title-wrapper text-center mb-55" data-wow-delay=".2s">
                                <h2 className="tp-section-title-two">Guranteed <span>Quality</span> Cleaning
                                    <br />Service Everytime</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-35">

                        <HomeTwoSingleService image_num="5" icon="cleaning" title="Window Cleaning" />
                        <HomeTwoSingleService image_num="6" icon="vacuum-cleaner" title="Carpet Cleaning" />
                        <HomeTwoSingleService image_num="7" icon="pot" title="Kitchen Cleaning" />
                        <HomeTwoSingleService image_num="8" icon="house-cleaning" title="House Cleaning" />

                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-quality-btn text-center">
                                <Link to="/servicesDetails" className="theme-btn radius-50 text-white">More Services +</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeTwoServices;