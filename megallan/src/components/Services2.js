import React, { useEffect } from 'react';

import CircleType from 'circletype';

function Services2() {
  return (
    <>
    <div class="section" id="services-section">
       <div class="container">
          <div class="row mb-80 border-section">
             <div class="col-lg-6">
                <h3 class="section-title">Services</h3>
             </div>
             <div class="col-lg-6">
                <p>Bespoke brand & digital services designed for bussinesses <br/> big and small...</p>
             </div>
          </div>
          <div class="row">
             <div class="col-lg-6">
                <div class="project-list">
                   <div class="project">
                      <div class="project-title">
                         <h5>Branding</h5>
                         <p>Lorem ipsum dolor sit amet consectetur<br/> adipiscing elit sed do eiusmod</p>
                      </div>
                      <div class="project-categ">01</div>
                   </div>
                   <div class="project">
                      <div class="project-title">
                         <h5>Packaging</h5>
                         <p>Lorem ipsum dolor sit amet consectetur<br/>  adipiscing elit sed do eiusmod</p>
                      </div>
                      <div class="project-categ">02</div>
                   </div>
                   <div class="project">
                      <div class="project-title">
                         <h5>UI/UX</h5>
                         <p>Lorem ipsum dolor sit amet consectetur<br/>  adipiscing elit sed do eiusmod</p>
                      </div>
                      <div class="project-categ">03</div>
                   </div>
                   <div class="project">
                      <div class="project-title">
                         <h5>Development</h5>
                         <p>Lorem ipsum dolor sit amet consectetur<br/>  adipiscing elit sed do eiusmod</p>
                      </div>
                      <div class="project-categ">04</div>
                   </div>
                </div>
             </div>
             <div class="col-lg-6">
                <div class="services_active owl-carousel">
                   <div class="single_testmonial">
                      <div class="testmonial_info">
                         <img src="images/services-1.gif" class="img-fluid" alt=""/>
                      </div>
                   </div>
                   <div class="single_testmonial">
                      <div class="testmonial_info">
                         <img src="images/services-2.gif" class="img-fluid" alt=""/>
                      </div>
                   </div>
                   <div class="single_testmonial">
                      <div class="testmonial_info">
                         <img src="images/services-3.gif" class="img-fluid" alt=""/>
                      </div>
                   </div>
                </div>
             </div>
      </>
  );
}


export default Services2;
