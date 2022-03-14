import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import { HiPlus } from 'react-icons/hi';
import 'react-image-lightbox/style.css';


const HomeThreeSingleProject = ({ column, columnTwo, image_num, title, subTitle }) => {
   const [photoIndex, setPhotoIndex] = useState(0);
   const [open, setOpen] = useState(false);
   const images = [
      'assets/img/project/project-5.jpg',
      'assets/img/project/project-6.jpg',
      'assets/img/project/project-7.jpg',
      'assets/img/project/project-8.jpg',
   ]
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


         <div className={`col-xl-${column} col-lg-${column} col-md-${columnTwo}`}>
            <div className="tp-project-three mb-30 wow fadeInUp" data-wow-delay=".4s">
               <div className="tp-project-three-img">
                  <img src={`assets/img/project/project-${image_num}.jpg`} className="img" alt="img-not-found" />
                  <div className="tp-project-three-img-overlay">
                     <div className="tp-project-three-img-overlay-text">
                        <div onClick={() => setOpen(true)} className="tp-project-three-img-overlay-text-icon">
                           <span><i><HiPlus/></i></span>
                        </div>
                        <h4 className="tp-project-three-img-overlay-title">
                           <Link to="/projectsDetails">{title}</Link></h4>
                        <span>{subTitle}</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeThreeSingleProject;