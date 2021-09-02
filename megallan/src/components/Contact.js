import React, { useEffect } from 'react';

import CircleType from 'circletype';
import ScrollTrigger from 'gsap/ScrollTrigger'

function Contact() {
  return (
    <>
    <div id="contact" class="section-page">
       <div class="container">
          <div class="row">
             <div class="col-lg-12">
                <div class="content-hero text-center" data-aos="fade-left" data-aos-duration="1000">
                   <h1 class="h-title" id="quote">
                      Contact
                   </h1>
                   <p>Get in touch</p>
                </div>
             </div>
          </div>
       </div>
    </div>

    <div class="section" id="contact-section">
       <div class="container">
          <div class="row justify-content-between">

             <div class="col-md-4">
                <img src="images/contact.jpg" class="img-fluid" alt="" />
             </div>
             <div class="col-md-3">
                <div class="contact-info-v1">
                   <div class="d-block">
                      <span class="d-block contact-info-label">Email</span>
                      <a href="#" class="contact-info-val">info@example.com</a>
                   </div>
                   <div class="d-block">
                      <span class="d-block contact-info-label">Phone</span>
                      <a href="#" class="contact-info-val">+12 345 6789 012</a>
                   </div>
                   <div class="d-block">
                      <span class="d-block contact-info-label">Address</span>
                      <address class="contact-info-val">273 South Riverview Rd. <br/> New York, NY 10011</address>
                   </div>

                   <div class="d-block">
                      <span class="d-block contact-info-label">Follow us</span>
                      <div class="social">
                         <a href="#" class="mr-3"><i class="fa fa-facebook"></i></a>
                         <a href="#" class="mr-3"><i class="fa fa-twitter"></i></a>
                         <a href="#" class="mr-3"><i class="fa fa-google-plus"></i></a>
                         <a href="#" class="mr-3"><i class="fa fa-linkedin"></i></a>
                      </div>
                   </div>
                </div>
             </div>
             <div class="col-md-5">
                <form method="post" class="form-outline-style-v1 mb-5" id="contactForm">
                   <div class="form-group row mb-0">
                      <div class="col-lg-6 form-group">
                         <label for="name">Name</label>
                         <input name="name" type="text" class="form-control" id="name" />
                      </div>
                      <div class="col-lg-6 form-group">
                         <label for="email">Email</label>
                         <input name="email" type="email" class="form-control" id="email" />
                      </div>
                      <div class="col-lg-12 form-group gsap-reveal">
                         <label for="message">Write your message...</label>
                         <textarea name="message" id="message" cols="30" rows="7" class="form-control"></textarea>
                      </div>
                   </div>
                   <div class="form-group row">
                      <div class="col-md-12 d-flex align-items-center">
                         <a class="btn-draw btn--white cursor-item mt-3" href="contact.html" data-aos="fade-right" data-aos-duration="1800"><span class="btn-draw__text"><span>Send message</span></span></a>
                         <span class="submitting"></span>
                      </div>
                   </div>
                </form>
                <div id="form-message-warning" class="mt-4"></div>
                <div id="form-message-success">
                   Your message was sent, thank you!
                </div>
             </div>
          </div>
       </div>
    </div>
    </>
  );
}

export default Contact;
