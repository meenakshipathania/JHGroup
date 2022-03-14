import React from 'react';
import { Link } from 'react-router-dom';

const HomeTwoCtaSingleItem = ({icon,title}) => {
    return (
        <>
            <div className="col-lg-4 col-md-4">
                <div className="tp-cta-two mb-30 wow fadeInUp" data-wow-delay=".2s">
                    <div className="tp-cta-two-icon">
                        <i className={`flaticon-${icon}`}></i>
                    </div>
                    <div className="tp-cta-two-text fix">
                        <h4 className="tp-cta-two-text-title">
                          <Link to="/servicesDetails">{title}</Link></h4>
                        <p>Coingue atend lorem consequas interdum pretium ligula semper mauris is dictuma</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeTwoCtaSingleItem;