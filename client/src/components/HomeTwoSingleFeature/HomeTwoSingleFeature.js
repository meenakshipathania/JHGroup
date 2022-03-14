import React from 'react';
import { Link } from 'react-router-dom';

const HomeTwoSingleFeature = ({icon,title}) => {
    return (
        <>
            <div className="col-sm-6">
                <div className="tp-feature mb-45 wow fadeInUp" data-wow-delay=".6s">
                    <div className="tp-feature-icon yellow-circle-shape mb-20">
                        <i className={`flaticon-${icon}`}></i>
                    </div>
                    <h4 className="tp-feature-title mb-15">
                       <Link to="servicesDetails">{title}</Link></h4>
                    <p>Duis congue atend lorem consequat interdum pretium ligula</p>
                </div>
            </div>
        </>
    );
};

export default HomeTwoSingleFeature;