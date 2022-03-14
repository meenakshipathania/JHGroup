import React from 'react';

const HomeSingleTestimonial = ({image,name,title}) => {
    return (
        <>
            <div className="tp-testimonial-single swiper-slide z-index">
                <p className="mb-45">Erat dapibus interdum consequat eleifend. Porttitor iaculis per lectus ornare dolor pede. Metus urna faucibus montes duis conds imentum congue. Accumsan bibendum pharetra a quisque nulla dictumst quam praesent pharetra cos aptent sociosqu. Imperdiet mattis sociosqu differ frome aliquam.</p>
                <div className="tp-testimonial-author">
                    <div className="tp-testimonial-author-img">
                        <img src={`assets/img/testimonial/testimonial-author-${image}.jpg`} className="img-fluid" alt="img not found" />
                    </div>
                    <div className="tp-testimonial-author-text">
                        <h4 className="tp-testimonial-author-text-name">{name}</h4>
                        <span className="tp-testimonial-author-text-designation">{title}</span>
                    </div>
                </div>
                <div className="tp-testimonial-qoute">
                    <img src="assets/img/icon/test-qoute.png" alt="img not found" />
                </div>
            </div>
        </>
    );
};

export default HomeSingleTestimonial;