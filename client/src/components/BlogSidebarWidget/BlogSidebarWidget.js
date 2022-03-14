import React from 'react';
import { Link } from 'react-router-dom';

const BlogSidebarWidget = ({widget_img_num,sidebar_post_title}) => {
   return (
      <>
         <div className="sidebar--widget__post mb-20">
            <div className="sidebar__post--thumb">
               <Link to="/blogDetails">
                  <div className="post__img">
                     <img src={`assets/img/blog/${widget_img_num}.jpg`} alt="" />
                  </div>
               </Link>
            </div>
            <div className="sidebar__post--text">
               <h4 className="sidebar__post--title">
                  <Link to="/blogDetails">{sidebar_post_title}</Link></h4>
               <span>January 15, 2021</span>
            </div>
         </div>
      </>
   );
};

export default BlogSidebarWidget;