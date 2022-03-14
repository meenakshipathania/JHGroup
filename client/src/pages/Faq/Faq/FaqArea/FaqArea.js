import React from 'react';
import FaqSingleItem from '../../../../components/FaqSingleItem/FaqSingleItem';

const FaqArea = () => {
   return (
      <>
         <section className="tp-faqs-area pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4">
                        <div className="tp-faqs-left">
                            <div className="tp-faqs-left-sidebar mb-30">
                                <h4 className="tp-faqs-left-sidebar-title">Category...</h4>
                                <ul>
                                    <li><a href="#">Carpet Cleaning (02)</a></li>
                                    <li><a href="#">House Cleaning (05)</a></li>
                                    <li><a href="#">Road Cleaning (10)</a></li>
                                    <li><a href="#">Kitchen Cleaning (06)</a></li>
                                    <li><a href="#">Toilet Cleaning (02)</a></li>
                                    <li><a href="#">Office Cleaning (05)</a></li>
                                </ul>
                            </div>
                            <div className="tp-faqs-left-img mb-30">
                                <a href="#">
                                   <img src="assets/img/about/faq-img-1.jpg" className="img" alt="img not found"/>
                                 </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8">
                        <div className="tp-faqs-right mt-10 pb-45">
                            <div className="tp-faq-text">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Should you replace sponges or disinfect them?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Edite per sociosqu felis quam ridiculus laoreet tempus, eleifend faucibus commodo. Laoreet mauris congue sodales interdum lobortis proin laoreet quis arcu nostra et nam primis dolor sagittis duis laoreet, ultrices habitasse diam quisque in auctor porta metus viverra curae maecenas iaculis tempo pulvinar vitae dictum lorem ipsum orci.
                                            </div>
                                        </div>
                                    </div>


                                    <FaqSingleItem according_heading="headingTwo" collapse_num="collapseTwo"
                                    title="How do you get stains off the walls without chipping the paint?" />

                                    <FaqSingleItem according_heading="headingThree" collapse_num="collapseThree"
                                    title="Why doesn’t my vacuum cleaner do a good job?" />

                                    <FaqSingleItem according_heading="headingFour" collapse_num="collapseFour"
                                    title="Is there a way to clean a stopped drain that’s less gross? " />

                                    <FaqSingleItem according_heading="headingFive" collapse_num="collapseFive"
                                    title="How can I clean this neglected area so it looks brand new?" />

                                    <FaqSingleItem according_heading="headingSix" collapse_num="collapseSix"
                                    title="What do you do you have to move heavy furniture to vacuum?" />

                                    <FaqSingleItem according_heading="headingSeven" collapse_num="collapseSeven"
                                    title="How do you treat different materials like marble or granite?" />

                                    <FaqSingleItem according_heading="headingEight" collapse_num="collapseEight"
                                    title="Why do I need reports from all 3 credit bureaus?" />

                                    <FaqSingleItem according_heading="headingNine" collapse_num="collapseNine"
                                    title="Have you ever seen a co-worker What did you do?" />

                                    <FaqSingleItem according_heading="headingTen" collapse_num="collapseTen"
                                    title="How much you need to clean a working space of 10 offices?" />

                                </div>
                            </div>
                        </div>
                        <div className="tp-contact-form">
                            <h3 className="tp-contact-form-title">Have Any Questions</h3>
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
                                <div className="col-md-12 custom-pad-20">
                                    <div className="tp-contact-form-field mb-20">
                                        <textarea placeholder="Your Message"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12 custom-pad-20">
                                    <div className="tp-contact-form-field">
                                        <button type="submit" className="theme-btn text-white"><i className="flaticon-enter"></i> Send Message</button>
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

export default FaqArea;