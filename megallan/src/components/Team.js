import React from 'react';

import team from '../assets/images/test.jpg';

function Team() {
  return (
    <div>
      <div id="team">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="content-hero text-center" data-aos="fade-left" data-aos-duration="1000">
                     <h2 className="h-title">
                        Team
                     </h2>
                     <p className="text-primary">Who we are</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="section">
         <div className="container">
            <div className="row portfolio-items">
               <div className="col-lg-12 p-0">
                  <div className="row team-gallery team-group">
                     <div class="col-md-6 single-item brand apps mobile team-member">
                        <div class="portfolio-wrap gsap-reveal">
                           <img src={team} alt="" class="portfolio-item img-fluid team-img" />
                           <div class="portfolio-content">
                              <p>Lorem ipsum dolor sit amet</p>
                              <h3 class="text-white">Team member</h3>
                              <a href="single-portfolio.html" class="portfolio-link"></a>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-6 single-item web mobile team-member">
                        <div class="portfolio-wrap gsap-reveal">
                           <img src={team} alt="" class="portfolio-item img-fluid team-img" />
                           <div class="portfolio-content">
                              <p>Lorem ipsum dolor sit amet</p>
                              <h3 class="text-white">Team member</h3>
                              <a href="single-portfolio.html" class="portfolio-link"></a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

   </div>
  );
}

export default Team;
