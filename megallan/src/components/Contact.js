import React from 'react';


function Contact() {
  return (
    <div>
    <div id="contact" class="section-page">
       <div class="container">
          <div class="row">
             <div class="col-lg-12">
                <div class="content-hero text-center" data-aos="fade-left" data-aos-duration="1000">
                   <h1 class="h-title">
                      Contact
                   </h1>
                   <p className="text-primary">Get in touch</p>
                </div>
             </div>
          </div>
       </div>
    </div>

    <div class="section" id="contact-section">
       <div class="container">
          <div class="row justify-content-between">

             <div class="col-md-4">
               <div className="contact-map">
                  <iframe title="googlemaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.525339924691!2d23.650679415108442!3d37.94151791032185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bbe5bb8515a1%3A0x3e0dce8e58812705!2sUniversity%20of%20Piraeus!5e0!3m2!1sen!2sgr!4v1630683018252!5m2!1sen!2sgr" width="100%" height="350" style={{'border':0}} allowfullscreen="" loading="lazy"></iframe>
               </div>
             </div>
             <div class="col-md-3">
                <div class="contact-info-v1">
                   <div class="d-block">
                      <span class="d-block contact-info-label">Email</span>
                      <a href="#" class="contact-info-val">test@test.com</a>
                   </div>
                   <div class="d-block">
                      <span class="d-block contact-info-label">Phone</span>
                      <a href="#" class="contact-info-val">test</a>
                   </div>
                   <div class="d-block">
                      <span class="d-block contact-info-label">Address</span>
                      <address class="contact-info-val">test</address>
                   </div>

                   <div class="d-block">
                      <span class="d-block contact-info-label">Follow us</span>
                      <div class="social">
                         <a href="#" class="mr-3"><i class="fa fa-facebook"></i></a>
                         <a href="#" class="mr-3"><i class="fa fa-twitter"></i></a>
                         <a href="#" class="mr-3"><i class="fa fa-github"></i></a>
                         <a href="#" class="mr-3"><i class="fa fa-linkedin"></i></a>
                      </div>
                   </div>
                </div>
             </div>
             <div class="col-md-5">
                <form method="post" class="form-outline-style-v1 mb-5" id="contactForm">
                   <div class="form-group row mb-0">
                      <div class="col-lg-6 form-group">
                         <input name="name" type="text" class="form-control" id="name" placeholder="Name"/>
                      </div>
                      <div class="col-lg-6 form-group">
                         <input name="email" type="email" class="form-control" id="email" placeholder="Email"/>
                      </div>
                      <div class="col-lg-12 form-group gsap-reveal">
                         <textarea name="message" id="message" cols="30" rows="7" class="form-control" placeholder="Write your message..."></textarea>
                      </div>
                   </div>
                   <div class="form-group row">
                      <div class="col-md-12 d-flex align-items-center">
                         <a class="btn-draw btn--white cursor-item mt-3" href="#contact" data-aos="fade-right" data-aos-duration="1800"><span class="btn-draw__text"><span>Send message</span></span></a>
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
    </div>
  );
}

export default Contact;
