import React from 'react';

import image from '../assets/images/test.jpg';


function Services() {
  return (
    <>
      <div id="services" class="section-page bg-primary">
         <div class="container">
            <div class="row">
               <div class="col-lg-12">
                  <div class="content-hero text-center" data-aos="fade-left" data-aos-duration="1000">
                     <h2 class="h-title">
                        Services
                     </h2>
                     <p className="text-primary">Our products</p>
                  </div>
               </div>
            </div>
         </div>
      <div class="section bg-primary" id="services-section">
         <div class="container">
            <div class="content mb-100" data-aos="fade-up" data-aos-duration="1000">
               <div class="row">
                  <div class="cardd col-lg-4 card1 cursor-item mb-4 mb-lg-0 text-center text-lg-left">
                     <img src={image} className="img-fluid" alt="Service" title="Service" />
                     <h5>PinataHub</h5>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                     <a class="btn-draw btn--dark cursor-item mt-0 mb-4 mb-lg-0 mt-lg-4" href="#contact">
                        <span class="btn-draw__text">
                           <span>Learn more</span>
                        </span>
                     </a>
                  </div>
                  <div class="cardd col-lg-4 card2 cursor-item mb-4 mb-lg-0 text-center text-lg-left">
                     <img src={image} className="img-fluid" alt="Service" title="Service" />
                     <h5>ScriptaManent</h5>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                     <a class="btn-draw btn--dark cursor-item mt-0 mb-4 mb-lg-0 mt-lg-4" href="#contact">
                        <span class="btn-draw__text">
                           <span>Learn more</span>
                        </span>
                     </a>
                  </div>
                  <div class="cardd col-lg-4 card3 cursor-item mb-4 mb-lg-0 text-center text-lg-left">
                     <img src={image} className="img-fluid" alt="Service" title="Service" />
                     <h5>Magellan</h5>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                     <a class="btn-draw btn--dark cursor-item mt-0 mb-4 mb-lg-0 mt-lg-4" href="#contact">
                        <span class="btn-draw__text">
                           <span>Learn more</span>
                        </span>
                     </a>
                  </div>
               </div>
            </div>
            </div>
         </div>
      </div>
    </>
  );
}

export default Services;
