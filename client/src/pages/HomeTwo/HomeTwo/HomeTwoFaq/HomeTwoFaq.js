import React from 'react';

const HomeTwoFaq = () => {
    return (
        <>
            <section className="tp-faq-area bg-gray-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tp-faq-img">
                                <img src="assets/img/feature/faq-img-1.png" alt="img not found"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-faq-text pt-120">
                                <div className="section-title-wrapper-two mb-45">
                                    <h2 className="tp-section-title-two">Every <span>Cleaning</span> Related Answer is Here</h2>
                                </div>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                How many years have you been in business?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Enim quisque primis praesent cursus convallis pulvinar phasellus adipiscing nullam ullamcorper pretium accumsan.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Do you bring equipment and cleaning supplies?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Enim quisque primis praesent cursus convallis pulvinar phasellus adipiscing nullam ullamcorper pretium accumsan.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                How many years have you been in business?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Enim quisque primis praesent cursus convallis pulvinar phasellus adipiscing nullam ullamcorper pretium accumsan.
                                            </div>
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

export default HomeTwoFaq;