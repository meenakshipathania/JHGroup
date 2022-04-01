import React from 'react';

const ContactMap = () => {
   return (
      <>
         <div className="tp-map-area pt-120 pb-115">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-contact-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d430039.72098857!2d-97.43954473704666!3d32.64120253601547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e619b8bedc723%3A0xda66823403183d39!2sJH%20Group%2C%20LLC!5e0!3m2!1sen!2sin!4v1647845839222!5m2!1sen!2sin"  style={{ border: 0 }} allowfullscreen="" loading="lazy" title="map"></iframe>
                           </div>
                    </div>
                </div>
            </div>
        </div>
      </>

   );
};

export default ContactMap;