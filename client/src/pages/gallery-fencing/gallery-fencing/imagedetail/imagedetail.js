import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
// import { FaArrowAltCircleRight} from 'react-icons/fa';
// import { CgCheckO } from 'react-icons/cg';
// import { Link } from 'react-router-dom';

const ServicesDetailsFaq = () => {
  const [text2, Settext2] = useState([]);
  useEffect(() => {
    const request = axios.CancelToken.source();
    axios.get('http://165.227.11.15:1337/api/service1s/5?populate[allimages][populate]=*')
      .then((res) => {
        Settext2(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => request.cancel();
  }, []);
  function imageurl(data) {
    const baseurl = 'http://165.227.11.15:1337';
    const dataurl = data.data[0].attributes.url;
    return baseurl + dataurl;
  }

  // const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen}
        videoId="o4GuSJYSzrY" onClose={() => setOpen(false)} /> */}

      <section className='grey'>
        <div className="row">
          <div className='col-md-12'>
            <h1 className="heading1">ARLINGTON / MANSFIELD, TX - JH GROUP FENCING PICTURE GALLERY</h1>
          </div>
        </div>
        <div className="gallery">

          <div className="row pb-20 back pt-80">
            <div class="col-md-3 offset-1">
              {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                <a href="##"><img src={x.image1 ? imageurl(x.image1) : 'hgghtyu'} className="img mar" alt="img not found" /></a>
              ))
                : 'hgfhgf'}
            </div>
            <div class="col-md-3">
              {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                <a href="##"><img src={x.image2 ? imageurl(x.image2) : 'hgghtyu'} className="img mar" alt="img not found" /></a>
              ))
                : 'hgfhgf'}
            </div>

            <div class="col-md-3">
              {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                <a href="##"><img src={x.image3 ? imageurl(x.image3) : 'hgghtyu'} className="img mar" alt="img not found" /></a>
              ))
                : 'hgfhgf'}
            </div>
          </div>

          <div className="row pb-20 back">
            <div class="col-md-3 offset-1">
              {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                <a href="##"><img src={x.image4 ? imageurl(x.image4) : 'hgghtyu'} className="img mar" alt="img not found" /></a>
              ))
                : 'hgfhgf'}
            </div>
            <div class="col-md-3">
              {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                <a href="##"><img src={x.image5 ? imageurl(x.image5) : 'hgghtyu'} className="img mar" alt="img not found" /></a>
              ))
                : 'hgfhgf'}
            </div>

            <div class="col-md-3">
              {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                <a href="##"><img src={x.image6 ? imageurl(x.image6) : 'hgghtyu'} className="img mar" alt="img not found" /></a>
              ))
                : 'hgfhgf'}
            </div>
          </div>
        
          <div className="row pb-20 back">
            <div class="col-md-3 offset-1">
              {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                <a href="##"><img src={x.image7 ? imageurl(x.image7) : 'hgghtyu'} className="img mar" alt="img not found" /></a>
              ))
                : 'hgfhgf'}
            </div>
            <div class="col-md-3">
              {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                <a href="##"><img src={x.image8 ? imageurl(x.image8) : 'hgghtyu'} className="img mar" alt="img not found" /></a>
              ))
                : 'hgfhgf'}
            </div>

            <div class="col-md-3">
              {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                <a href="##"><img src={x.image9 ? imageurl(x.image9) : 'hgghtyu'} className="img mar" alt="img not found" /></a>
              ))
                : 'hgfhgf'}
            </div>
          </div>
          <div className="row pb-20 back">
            <div class="col-md-3 offset-1">
              {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                <a href="##"><img src={x.image10 ? imageurl(x.image10) : 'hgghtyu'} className="img mar" alt="img not found" /></a>
              ))
                : 'hgfhgf'}
            </div>
            <div class="col-md-3">
              {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                <a href="##"><img src={x.image11 ? imageurl(x.image11) : 'hgghtyu'} className="img mar" alt="img not found" /></a>
              ))
                : 'hgfhgf'}
            </div>

            <div class="col-md-3">
              {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                <a href="##"><img src={x.image12 ? imageurl(x.image12) : 'hgghtyu'} className="img mar" alt="img not found" /></a>
              ))
                : 'hgfhgf'}
            </div>
          </div>
          <div className="row pb-80 back">
            <div class="col-md-3 offset-1">
              {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                <a href="##"><img src={x.image13 ? imageurl(x.image13) : 'hgghtyu'} className="img mar" alt="img not found" /></a>
              ))
                : 'hgfhgf'}
            </div>
          
          </div>
          <div className='row mt-50 back'>
            <div className='col-md-12'>
              <h2 class="area">Our Landscaping, Lawn, Tree, Fencing, Concrete &amp; Irrigation Service Areas in North Texas</h2>
              <p className='paragraph'>Arlington TX, Burleson TX, Cedar Hill TX, Dalworthington Gardens TX, Grand Prairie TX, Kennedale TX, Mansfield TX, Midlothian TX, Pantego TX, Rendon TX, and Surrounding Areas</p>
            </div>
          </div>



        </div>
      </section>
    </>
  );
};

export default ServicesDetailsFaq;
