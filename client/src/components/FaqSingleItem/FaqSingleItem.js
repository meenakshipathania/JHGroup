import React from 'react';

const FaqSingleItem = ({according_heading,collapse_num,title}) => {
   return (
      <>
         <div className="accordion-item">
            <h2 className="accordion-header" id={according_heading}>
               <button className="accordion-button collapsed" type="button" 
               data-bs-toggle="collapse" data-bs-target={`#${collapse_num}`} aria-expanded="false" 
               aria-controls={collapse_num}>
                  {title}
               </button>
            </h2>
            <div id={collapse_num} className="accordion-collapse collapse" aria-labelledby={according_heading}data-bs-parent="#accordionExample">
               <div className="accordion-body">
                  Edite per sociosqu felis quam ridiculus laoreet tempus, eleifend faucibus commodo. Laoreet mauris congue sodales interdum lobortis proin laoreet quis arcu nostra et nam primis dolor sagittis duis laoreet, ultrices habitasse diam quisque in auctor porta metus viverra curae maecenas iaculis tempo pulvinar vitae dictum lorem ipsum orci.
               </div>
            </div>
         </div>
      </>
   );
};

export default FaqSingleItem;