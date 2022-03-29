import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import { FaArrowAltCircleRight, FaPlay} from 'react-icons/fa';
import { CgCheckO } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const ServicesDetailsFaq = () => {
  const [text, Settext] = useState([]);
  useEffect(() => {
     const request = axios.CancelToken.source();
        axios.get('http://165.227.11.15:1337/api/categories')
           .then((res) => {
              Settext(res.data.data);
           })
           .catch((error) => {
              console.log(error);
           });
     return () => request.cancel();
  }, []);

  const [text2, Settext2] = useState([]);
  useEffect(() => {
     const request = axios.CancelToken.source();
        axios.get('http://165.227.11.15:1337/api/demos?populate=*')
           .then((res) => {
              Settext2(res.data.data);
           })
           .catch((error) => {
              console.log(error);
           });
     return () => request.cancel();
  }, []);
  function imageurl(atttribute) {
    const baseurl = 'http://165.227.11.15:1337';
    const dataurl = atttribute.image.data[0].attributes.url;
    return baseurl + dataurl;
 }
 function imageurl1(atttribute) {
  const baseurl = 'http://165.227.11.15:1337';
  const dataurl = atttribute.image1.data[0].attributes.url;
  return baseurl + dataurl;
}
function imageurl2(atttribute) {
  const baseurl = 'http://165.227.11.15:1337';
  const dataurl = atttribute.image2.data[0].attributes.url;
  return baseurl + dataurl;
}
function imageurl3(atttribute) {
  const baseurl = 'http://165.227.11.15:1337';
  const dataurl = atttribute.image3.data[0].attributes.url;
  return baseurl + dataurl;
}
const [text1, Settext1] = useState([]);
  useEffect(() => {
     const request = axios.CancelToken.source();
        axios.get('http://165.227.11.15:1337/api/servicechooses')
           .then((res) => {
              Settext1(res.data.data);
           })
           .catch((error) => {
              console.log(error);
           });
     return () => request.cancel();
  }, []);
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen}
        videoId="o4GuSJYSzrY" onClose={() => setOpen(false)} />

      <section className="tp-service-details-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="tp-faqs-left">
                <div className="tp-faqs-left-sidebar tp-services-sidebar mb-30">
                  <h4 className="tp-faqs-left-sidebar-title">{text ? text.map((x) => <h4>{x.attributes.heading}</h4>) : 'Home'}</h4>
                  <ul>
                    <li><a href="#">{text ? text.map((x) => <a>{x.attributes.test}</a>) : 'Home'} <i> <FaArrowAltCircleRight /> </i> </a></li>
                    <li><a href="demo">{text ? text.map((x) => <a>{x.attributes.text1}</a>) : 'Home'} <i> <FaArrowAltCircleRight /> </i> </a></li>
                    <li><a href="drain">{text ? text.map((x) => <a>{x.attributes.text2}</a>) : 'Home'} <i> <FaArrowAltCircleRight /> </i> </a></li>
                    <li><a href="landscape">{text ? text.map((x) => <a>{x.attributes.text3}</a>) : 'Home'}<i> <FaArrowAltCircleRight /> </i> </a></li>
                    <li><a href="lawn">{text ? text.map((x) => <a>{x.attributes.text4}</a>) : 'Home'} <i> <FaArrowAltCircleRight /> </i> </a></li>
                    <li><a href="retaining">{text ? text.map((x) => <a>{x.attributes.text5}</a>) : 'Home'} <i> <FaArrowAltCircleRight /> </i> </a></li>
                    <li><a href="remodel">{text ? text.map((x) => <a>{x.attributes.text6}</a>) : 'Home'} <i> <FaArrowAltCircleRight /> </i> </a></li>
                    <li><a href="fence">{text ? text.map((x) => <a>{x.attributes.text7}</a>) : 'Home'} <i> <FaArrowAltCircleRight /> </i> </a></li>
                  </ul>
                </div>
                <div className="tp-faqs-left-img mb-30">
                {text2 ? text2.map((x) => (
                  <a href="#"><img src={x.attributes ? imageurl(x.attributes) : 'hgghtyu'} className="img" alt="img not found" /></a>
                  ))
               : 'hgfhgf'}
                </div>
                <div className="tp-faqs-left-sidebar tp-services-sidebar mb-30">
                  <h4 className="tp-faqs-left-sidebar-title mb-30">{text ? text.map((x) => <h4>{x.attributes.heading}</h4>) : 'Home'}</h4>
                  <div className="tp-services-sidebar-btn">
                    <a href="#" className="mb-15 text-white"><i className="flaticon-pdf-file"></i> {text ? text.map((x) => <a>{x.attributes.pres}</a>) : 'Home'}</a>
                    <a href="#" className="mb-10 text-white"><i className="flaticon-file"></i> {text ? text.map((x) => <a>{x.attributes.down}</a>) : 'Home'}</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="tp-service-details">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="tp-service-details-img mb-30">
                    {text2 ? text2.map((x) => (
                  <a href="#"><img src={x.attributes ? imageurl1(x.attributes) : 'hgghtyu'} alt="img not found" /></a>
                  ))
               : 'hgfhgf'}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="tp-service-details-img mb-30">
                    {text2 ? text2.map((x) => (
                  <a href="#"><img src={x.attributes ? imageurl2(x.attributes) : 'hgghtyu'} alt="img not found" /></a>
                  ))
               : 'hgfhgf'}
                    </div>
                  </div>
                </div>
                {/* <h2 className="tp-section-title heading-color-black pt-10 mb-20">Making A Clean Difference</h2>
                <p className="mb-20">Fusce fusce ante dis varius iaculis quis penatibus do placerat et convallis ultricies egestas hacker pharetra veile litora nascetur diam dapibus euismod neque sapien siverra nunc nisler fortune litora neque ultrices eros aenean habitant tellus torquent ipsum, commodo Ligula curae; auctor ultricies laoreet metus cubilia enim faucibus litora nibh torquent platea sodales auctor gravida tortor class litora id arcu conubia. Augue suscipit metus ante eu rhoncus cras. Ipsum nulla feugiat nam pede cras a eleifend. Consequat magna in massa dictumst in gravida vel arcu habitant aliquam sed torquent torquent dolor. Diam tortor. Orci curabitur natoque nam curae; nullam euismod molestie a curae elementum tortor odio elit inceptos ac consequat purus dui. Ad mollis eget nullam. Nulla neque turpis interdum hymenaeos pretium blandit. Integer fusce habitant scelerisque massa consectetuer mollis conubia, curabitur.</p>
                <p className="mb-35">Neque gravida dui fermentum pulvinar fringilla sodales massa hendrerit nascetur. Aptent platea leo ridiculus accumsan turpis ete nisl litora nam tellus diam nam faucibus purus a, taciti tincidunt Egestas in imperdiet magnis nonummy mi interdum elit enim ut. Curabitur quis vitae lobortis quam lacus pharetra mus, arcu. Vele Facilisi orci orci nisi consequat dignissim duise in iaculis pulvinar hymenaeos pharetra tortor phasellus. Consectetuer penatibus id. Eleifend potenti. Elit purus fermentum idev posuere nullam iaculis. Fusce orci co nsectetuer. Metus nonummy turpis sodales vivamus mollis posuere fermentum </p> */}
                <h3 className="tp-service-details-subtitle">Service Overview</h3>
                <p className="mb-40">{text2 ? text2.map((x) => <p>{x.attributes.para1}</p>) : 'Home'}</p>
                {/* <div className="tp-service-details-img mb-30 position-relative">
                  <img src="assets/img/service/service-details-3.jpg" alt="img not found" />
                  <div className="tp-service-details-img-overlay">
                    <div className="tp-service-details-img-overlay-icon">
                      <button onClick={() => setOpen(true)} className="venobox" data-autoplay="true" data-vbtype="video" href="https://youtu.be/o4GuSJYSzrY">
                        <i > <FaPlay className="text-white" /> </i>
                      </button>
                    </div>
                  </div>
                </div> */}
                {/* <p className="d-flex"> <i > <CgCheckO /> </i> {text ? text.map((x) => <p>{x.attributes.t1}</p>) : 'Home'}</p>
                <p className="d-flex"> <i > <CgCheckO /> </i> {text ? text.map((x) => <p>{x.attributes.t2}</p>) : 'Home'} </p>
                <p className="d-flex"> <i > <CgCheckO /> </i> {text ? text.map((x) => <p>{x.attributes.t3}</p>) : 'Home'} </p>
                <p className="d-flex"> <i > <CgCheckO /> </i> {text ? text.map((x) => <p>{x.attributes.t4}</p>) : 'Home'} </p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> {text ? text.map((x) => <p>{x.attributes.t5}</p>) : 'Home'} </p> */}
                <h3 className="tp-service-details-subtitle mb-20">{text1 ? text1.map((x) => <a>{x.attributes.heading}</a>) : 'Home'}</h3>
                <p className="mb-35">{text1 ? text1.map((x) => <a>{x.attributes.tagline}</a>) : 'Home'}</p>
                <div className="row mb-35">
                  <div className="col-xl-4 col-md-6">
                    <div className="tp-service-details-feature text-center bg-gray-light mb-40">
                      <div className="tp-feature-three-icon mb-25">
                        <img src="assets/img/icon/service-feature.png" className="img-fluid" alt="img not found" />
                        <i className="flaticon-booking"></i>
                      </div>
                      <h4 className="tp-service-details-feature-title">
                        <Link to="/servicesDetails">{text1 ? text1.map((x) => <a>{x.attributes.text1}</a>) : 'Home'}</Link></h4>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="tp-service-details-feature text-center bg-gray-light mb-40">
                      <div className="tp-feature-three-icon mb-25">
                        <img src="assets/img/icon/service-feature.png" className="img-fluid" alt="img not found" />
                        <i className="flaticon-delivery-box"></i>
                      </div>
                      <h4 className="tp-service-details-feature-title">
                        <Link to="/servicesDetails">{text1 ? text1.map((x) => <a>{x.attributes.text2}</a>) : 'Home'}</Link></h4>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="tp-service-details-feature text-center bg-gray-light mb-40">
                      <div className="tp-feature-three-icon mb-25">
                        <img src="assets/img/icon/service-feature.png" className="img-fluid" alt="img not found" />
                        <i className="flaticon-boy"></i>
                      </div>
                      <h4 className="tp-service-details-feature-title">
                        <Link to="/servicesDetails">{text1 ? text1.map((x) => <a>{x.attributes.text3}</a>) : 'Home'}</Link></h4>
                    </div>
                  </div>
                </div>
                {/* <h3 className="tp-service-details-subtitle mb-20">For Sparkling Results</h3>
                <p className="mb-40">Curae tincidunt posuere ad tristique fusce nam quisque in pretium morbi risus orci volutpat non in quam cum praesent auctor tellus penatibus orci litora donec posuere etiam commodo fermentum ultricies habitant scelerisque. Ipsum torquent venenatis congue biben dum mauris. A egestas primis convallis dictum phasellus laoreet magnis felis iaculis vel parturient interdum conubia adse accumsan pharetra enim dictumst. Tincidunt massa amet magna facilisi quis convallis congue. Fringilla aliquet dolor gravida class libero cubilia pulvinar etiam platea ace. Elementum eu eget vulputate curabitur vestibulum feugiat sociosqu lacinia porta viverra mollis magnis rutrum bibendum proin facilisi duis consequat risus sociosqu volutpat proin.</p> */}
                <div className="row">
                  <div className="col-xl-6">
                    <div className="tp-service-details-img mb-30">
                    {text2 ? text2.map((x) => (
                  <a href="#"><img src={x.attributes ? imageurl3(x.attributes) : 'hgghtyu'} alt="img not found" /></a>
                  ))
               : 'hgfhgf'}
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <p className="mb-20">{text2 ? text2.map((x) => <p>{x.attributes.para2}</p>) : 'Home'}</p>
                    {/* <p>Habitasse sed orci lorem lorem quis conubia nam amet lobortis hymenaeos tellus ad nunc senectus auctor varius lamcorper neque faucibus nam ridiculus posuere. Sollici tudin nullam sociis molestie vestibulum to commodo dui tellus eget quam, natoque et. Nonummy bes vehicula leo sollicitudin cras Sociis pretium ligula donec sagittis inter dum aptent nam penatibus dolormagna eu pharetra.</p> */}
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

export default ServicesDetailsFaq;