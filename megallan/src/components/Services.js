import React, { useEffect } from 'react';

import CircleType from 'circletype';

function Services() {
  return (
    <>
    <div id="services" class="section-page">
       <div class="container">
          <div class="row">
             <div class="col-lg-12">
                <div class="content-hero text-center" data-aos="fade-left" data-aos-duration="1000">
                   <h1 class="h-title" id="quote">
                      Services
                   </h1>
                   <p>What we do</p>
                </div>
             </div>
          </div>
       </div>
    </div>

    <div class="section" id="services-section">
       <div class="container">


          <div class="content mb-100" data-aos="fade-up" data-aos-duration="1000">
             <div class="row">
                <div class="cardd col-lg-4 card1 cursor-item">
                   <div class="num">01</div>
                   <h5>Branding</h5>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                   <a class="btn-draw btn--white cursor-item mt-4" href="contact.html">
                      <span class="btn-draw__text">
                        <span>Learn more</span>
                      </span>
                    </a>
                </div>
                <div class="cardd col-lg-4 card2 cursor-item">
                   <div class="num">02</div>
                   <h5>UI/UX</h5>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                   <a class="btn-draw btn--white cursor-item mt-4" href="contact.html">
                      <span class="btn-draw__text">
                        <span>Learn more</span>
                      </span>
                    </a>
                </div>
                <div class="cardd col-lg-4 card3 cursor-item">
                   <div class="num">03</div>
                   <h5>Development</h5>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                   <a class="btn-draw btn--white cursor-item mt-4" href="contact.html">
                      <span class="btn-draw__text">
                        <span>Learn more</span>
                      </span>
                    </a>
                </div>
             </div>
          </div>

       </div>
    </div>
    </>
  );
}

export default Services;
