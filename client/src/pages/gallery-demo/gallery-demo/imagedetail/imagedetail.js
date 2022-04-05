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
    axios.get('http://165.227.11.15:1337/api/gallaries/2?populate[allimages][populate]=*')
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

      <section className='mt-2'>
        <div className="row">
          <div className='col-md-12'>
            <h1 className="heading1">ARLINGTON / MANSFIELD, TX - JH GROUP DEMOLITION AND GRADING PICTURE GALLERY</h1>
          </div>
        </div>
        <div className="gallery">

          <div className="row pb-20">
            <div class="col-md-3 offset-1">
              {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                <a href="##"><img src={x.image1 ? imageurl(x.image1) : 'hgghtyu'} className="img" alt="img not found" /></a>
              ))
                : 'hgfhgf'}
            </div>
            <div class="col-md-3">
              {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                <a href="##"><img src={x.image2 ? imageurl(x.image2) : 'hgghtyu'} className="img" alt="img not found" /></a>
              ))
                : 'hgfhgf'}
            </div>

            <div class="col-md-3">
              {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                <a href="##"><img src={x.image3 ? imageurl(x.image3) : 'hgghtyu'} className="img" alt="img not found" /></a>
              ))
                : 'hgfhgf'}
            </div>
          </div>

          <div className="row pb-20">
            <div class="col-md-3 offset-1">
              {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                <a href="##"><img src={x.image4 ? imageurl(x.image4) : 'hgghtyu'} className="img" alt="img not found" /></a>
              ))
                : 'hgfhgf'}
            </div>
            <div class="col-md-3">
              {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                <a href="##"><img src={x.image5 ? imageurl(x.image5) : 'hgghtyu'} className="img" alt="img not found" /></a>
              ))
                : 'hgfhgf'}
            </div>

            <div class="col-md-3">
              {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                <a href="##"><img src={x.image6 ? imageurl(x.image6) : 'hgghtyu'} className="img" alt="img not found" /></a>
              ))
                : 'hgfhgf'}
            </div>
          </div>
        

        </div>
      </section>
    </>
  );
};

export default ServicesDetailsFaq;
