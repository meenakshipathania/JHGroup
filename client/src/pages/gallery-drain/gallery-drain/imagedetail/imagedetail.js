import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Lightbox from 'react-image-lightbox';
import { HiPlus } from 'react-icons/hi';
import 'react-image-lightbox/style.css';
// import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
// import { FaArrowAltCircleRight} from 'react-icons/fa';
// import { CgCheckO } from 'react-icons/cg';
// import { Link } from 'react-router-dom';

const ServicesDetailsFaq = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);
  let images = []

  const [text2, Settext2] = useState([]);
  useEffect(() => {
    const request = axios.CancelToken.source();
    axios.get('http://165.227.11.15:1337/api/service1s/7?populate[allimages][populate]=*')
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
    images.push(baseurl + dataurl)
    localStorage.setItem('images', JSON.stringify(images));
    return baseurl + dataurl;
  }

  if (images.length === 0) {
    let data = localStorage.getItem('images');
    if (data) {
      images = JSON.parse(localStorage.getItem('images'));
    }
    // if (open) {
    //   console.log('index', photoIndex)
    //   console.log('images', images[photoIndex])
    // }

  }
  // const [isOpen, setOpen] = useState(false);
  return (
    <>

      {open && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
      {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen}
        videoId="o4GuSJYSzrY" onClose={() => setOpen(false)} /> */}

      <section className='grey'>
        <div className="row">
          <div className='col-md-12'>
            <h1 className="heading1">ARLINGTON / MANSFIELD, TX - JH GROUP DRAINAGE & IRRIGATION PICTURE GALLERY</h1>
          </div>
        </div>

        <div className="gallery">
          <div className="row pb-20 back pt-80">
            <div className=" mb-30 wow fadeInUp" data-wow-delay=".4s">
              <div className="tp-project-three-img row">
                <div class="col-lg-3 col-md-12 col-sm-12 offset-1 posotionRelative tp-project-three">
                  {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                    <a href="/"><img src={x.image1 ? imageurl(x.image1) : 'hgghtyu'} className="img mar" alt="img not found" />
                    </a>
                  ))
                    : 'hgfhgf'}
                  <div className="tp-project-three-img-overlay">
                    <div className="tp-project-three-img-overlay-text">
                      <div onClick={() => setOpen(true)} className="tp-project-three-img-overlay-text-icon">
                        <span><i><HiPlus /></i></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-12 col-sm-12 posotionRelative tp-project-three">
                  {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                    <a href="##"><img src={x.image2 ? imageurl(x.image2) : 'hgghtyu'} className="img mar" alt="img not found" /></a>
                  ))
                    : 'hgfhgf'}
                  <div className="tp-project-three-img-overlay">
                    <div className="tp-project-three-img-overlay-text">
                      <div onClick={() => setOpen(true)} className="tp-project-three-img-overlay-text-icon">
                        <span><i><HiPlus /></i></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-12 col-sm-12 posotionRelative tp-project-three">
                  {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                    <a href="##"><img src={x.image3 ? imageurl(x.image3) : 'hgghtyu'} className="img mar" alt="img not found" /></a>
                  ))
                    : 'hgfhgf'}
                  <div className="tp-project-three-img-overlay">
                    <div className="tp-project-three-img-overlay-text">
                      <div onClick={() => setOpen(true)} className="tp-project-three-img-overlay-text-icon">
                        <span><i><HiPlus /></i></span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* <div className="tp-project-three mb-30 wow fadeInUp" data-wow-delay=".4s">
              
            </div> */}

          </div>

          <div className="row pb-20 back">
            <div className="mb-30 wow fadeInUp" data-wow-delay=".4s">
              <div className="tp-project-three-img row">
                <div class="col-lg-3 col-md-12 col-sm-12 offset-1 posotionRelative tp-project-three">
                  {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                    <a href="/"><img src={x.image4 ? imageurl(x.image4) : 'hgghtyu'} className="img mar" alt="img not found" />
                    </a>
                  ))
                    : 'hgfhgf'}
                  <div className="tp-project-three-img-overlay">
                    <div className="tp-project-three-img-overlay-text">
                      <div onClick={() => setOpen(true)} className="tp-project-three-img-overlay-text-icon">
                        <span><i><HiPlus /></i></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-12 col-sm-12 posotionRelative tp-project-three">
                  {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                    <a href="##"><img src={x.image5 ? imageurl(x.image5) : 'hgghtyu'} className="img mar" alt="img not found" /></a>
                  ))
                    : 'hgfhgf'}
                  <div className="tp-project-three-img-overlay">
                    <div className="tp-project-three-img-overlay-text">
                      <div onClick={() => setOpen(true)} className="tp-project-three-img-overlay-text-icon">
                        <span><i><HiPlus /></i></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-12 col-sm-12 posotionRelative tp-project-three">
                  {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                    <a href="##"><img src={x.image6 ? imageurl(x.image6) : 'hgghtyu'} className="img mar" alt="img not found" /></a>
                  ))
                    : 'hgfhgf'}
                  <div className="tp-project-three-img-overlay">
                    <div className="tp-project-three-img-overlay-text">
                      <div onClick={() => setOpen(true)} className="tp-project-three-img-overlay-text-icon">
                        <span><i><HiPlus /></i></span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* <div className="tp-project-three mb-30 wow fadeInUp" data-wow-delay=".4s">
              
            </div> */}

          </div>

          <div className="row pb-20 back">
            <div className=" mb-30 wow fadeInUp" data-wow-delay=".4s">
              <div className="tp-project-three-img row">
                <div class="col-lg-3 col-md-12 col-sm-12 offset-1 posotionRelative tp-project-three">
                  {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                    <a href="/"><img src={x.image7 ? imageurl(x.image7) : 'hgghtyu'} className="img mar" alt="img not found" />
                    </a>
                  ))
                    : 'hgfhgf'}
                  <div className="tp-project-three-img-overlay">
                    <div className="tp-project-three-img-overlay-text">
                      <div onClick={() => setOpen(true)} className="tp-project-three-img-overlay-text-icon">
                        <span><i><HiPlus /></i></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-12 col-sm-12 posotionRelative tp-project-three">
                  {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                    <a href="##"><img src={x.image8 ? imageurl(x.image8) : 'hgghtyu'} className="img mar" alt="img not found" /></a>
                  ))
                    : 'hgfhgf'}
                  <div className="tp-project-three-img-overlay">
                    <div className="tp-project-three-img-overlay-text">
                      <div onClick={() => setOpen(true)} className="tp-project-three-img-overlay-text-icon">
                        <span><i><HiPlus /></i></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-12 col-sm-12 posotionRelative tp-project-three">
                  {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                    <a href="##"><img src={x.image9 ? imageurl(x.image9) : 'hgghtyu'} className="img mar" alt="img not found" /></a>
                  ))
                    : 'hgfhgf'}
                  <div className="tp-project-three-img-overlay">
                    <div className="tp-project-three-img-overlay-text">
                      <div onClick={() => setOpen(true)} className="tp-project-three-img-overlay-text-icon">
                        <span><i><HiPlus /></i></span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* <div className="tp-project-three mb-30 wow fadeInUp" data-wow-delay=".4s">
              
            </div> */}

          </div>
          <div className="row pb-20 back">
            <div className="tp-project-three mb-30 wow fadeInUp" data-wow-delay=".4s">
              <div className="tp-project-three-img row">
                <div class="col-lg-3 col-md-12 col-sm-12 offset-1 posotionRelative tp-project-three">
                  {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                    <a href="/"><img src={x.image10 ? imageurl(x.image10) : 'hgghtyu'} className="img mar" alt="img not found" />
                    </a>
                  ))
                    : 'hgfhgf'}
                  <div className="tp-project-three-img-overlay">
                    <div className="tp-project-three-img-overlay-text">
                      <div onClick={() => setOpen(true)} className="tp-project-three-img-overlay-text-icon">
                        <span><i><HiPlus /></i></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-12 col-sm-12 posotionRelative tp-project-three">
                  {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                    <a href="##"><img src={x.image11 ? imageurl(x.image11) : 'hgghtyu'} className="img mar" alt="img not found" /></a>
                  ))
                    : 'hgfhgf'}
                  <div className="tp-project-three-img-overlay">
                    <div className="tp-project-three-img-overlay-text">
                      <div onClick={() => setOpen(true)} className="tp-project-three-img-overlay-text-icon">
                        <span><i><HiPlus /></i></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-12 col-sm-12 posotionRelative tp-project-three">
                  {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                    <a href="##"><img src={x.image12 ? imageurl(x.image12) : 'hgghtyu'} className="img mar" alt="img not found" /></a>
                  ))
                    : 'hgfhgf'}
                  <div className="tp-project-three-img-overlay">
                    <div className="tp-project-three-img-overlay-text">
                      <div onClick={() => setOpen(true)} className="tp-project-three-img-overlay-text-icon">
                        <span><i><HiPlus /></i></span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* <div className="tp-project-three mb-30 wow fadeInUp" data-wow-delay=".4s">
              
            </div> */}
          </div>
          <div className="row pb-20 back">
            <div className="tp-project-three mb-30 wow fadeInUp" data-wow-delay=".4s">
              <div className="tp-project-three-img row">
                <div class="col-lg-3 col-md-12 col-sm-12 offset-1 posotionRelative tp-project-three">
                  {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                    <a href="/"><img src={x.image13 ? imageurl(x.image13) : 'hgghtyu'} className="img mar" alt="img not found" />
                    </a>
                  ))
                    : 'hgfhgf'}
                  <div className="tp-project-three-img-overlay">
                    <div className="tp-project-three-img-overlay-text">
                      <div onClick={() => setOpen(true)} className="tp-project-three-img-overlay-text-icon">
                        <span><i><HiPlus /></i></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-12 col-sm-12 posotionRelative tp-project-three">
                  {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                    <a href="##"><img src={x.image14 ? imageurl(x.image14) : 'hgghtyu'} className="img mar" alt="img not found" /></a>
                  ))
                    : 'hgfhgf'}
                  <div className="tp-project-three-img-overlay">
                    <div className="tp-project-three-img-overlay-text">
                      <div onClick={() => setOpen(true)} className="tp-project-three-img-overlay-text-icon">
                        <span><i><HiPlus /></i></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-12 col-sm-12 posotionRelative tp-project-three">
                  {text2['attributes'] ? text2['attributes']['allimages'].map((x) => (
                    <a href="##"><img src={x.image15 ? imageurl(x.image15) : 'hgghtyu'} className="img mar" alt="img not found" /></a>
                  ))
                    : 'hgfhgf'}
                  <div className="tp-project-three-img-overlay">
                    <div className="tp-project-three-img-overlay-text">
                      <div onClick={() => setOpen(true)} className="tp-project-three-img-overlay-text-icon">
                        <span><i><HiPlus /></i></span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* <div className="tp-project-three mb-30 wow fadeInUp" data-wow-delay=".4s">
              
            </div> */}
          </div>

          <div className='row mt-50 back'>
            <div className='col-lg-12 col-md-6 col-sm-12'>
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
