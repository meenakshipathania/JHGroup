import React from 'react';

const TeamDetailsFact = ({icon_name,fact_number,fact_name}) => {
    return (
        <>
            <div className="col-lg-3 col-sm-6">
                <div className="tp-fact tp-team-fact mb-50 text-center wow fadeInUp" data-wow-delay=".2s">
                    <div className="tp-fact-icon mb-40">
                        <img src="assets/img/icon/fact-bg.png" className="img-fluid" alt="img not found"/>
                            <i className={`flaticon-${icon_name} heading-color-black`}></i>
                    </div>
                    <div className="tp-fact-text">
                        <h2 className="tp-fact-text-title white-color mb-20 heading-color-black">{fact_number}</h2>
                        <h5 className="tp-fact-text-subtitle white-color">{fact_name}</h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamDetailsFact;