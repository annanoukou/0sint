import React from 'react';


function Contact() {
  return (
    <>
    <div id="contact" className="section-page">
       <div className="container">
          <div className="row">
             <div className="col-lg-12">
                <div className="content-hero text-center" data-aos="fade-left" data-aos-duration="1000">
                   <h1 className="h-title">
                      Contact
                   </h1>
                   <p className="text-primary">Get in touch</p>
                </div>
             </div>
          </div>
       </div>

      <div className="section" id="contact-section">
         <div className="container">
            <div className="row justify-content-between">

               <div className="col-md-4">
                  <div className="contact-map">
                     <iframe title="googlemaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.525339924691!2d23.650679415108442!3d37.94151791032185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bbe5bb8515a1%3A0x3e0dce8e58812705!2sUniversity%20of%20Piraeus!5e0!3m2!1sen!2sgr!4v1630683018252!5m2!1sen!2sgr" width="100%" height="350" style={{'border':0}} allowFullScreen="" loading="lazy"></iframe>
                  </div>
               </div>
               <div className="col-md-3">
                  <div className="contact-info-v1">
                     <div className="d-block">
                        <span className="d-block contact-info-label">Email</span>
                        <a href="#" className="contact-info-val">test@test.com</a>
                     </div>
                     <div className="d-block">
                        <span className="d-block contact-info-label">Phone</span>
                        <a href="#" className="contact-info-val">test</a>
                     </div>
                     <div className="d-block">
                        <span className="d-block contact-info-label">Address</span>
                        <address className="contact-info-val">test</address>
                     </div>

                     <div className="d-block">
                        <span className="d-block contact-info-label">Follow us</span>
                        <div className="social">
                           <a href="#" className="mr-3"><i className="fa fa-facebook"></i></a>
                           <a href="#" className="mr-3"><i className="fa fa-twitter"></i></a>
                           <a href="#" className="mr-3"><i className="fa fa-github"></i></a>
                           <a href="#" className="mr-3"><i className="fa fa-linkedin"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-5">
                  <form method="post" className="form-outline-style-v1 mb-5" id="contactForm">
                     <div className="form-group row mb-0">
                        <div className="col-lg-6 form-group">
                           <input name="name" type="text" className="form-control" id="name" placeholder="Name"/>
                        </div>
                        <div className="col-lg-6 form-group">
                           <input name="email" type="email" className="form-control" id="email" placeholder="Email"/>
                        </div>
                        <div className="col-lg-12 form-group gsap-reveal">
                           <textarea name="message" id="message" cols="30" rows="7" className="form-control" placeholder="Write your message..."></textarea>
                        </div>
                     </div>
                     <div className="form-group row">
                        <div className="col-md-12 d-flex align-items-center">
                           <a className="btn-draw btn--white cursor-item mt-3" href="#contact" data-aos="fade-right" data-aos-duration="1800"><span className="btn-draw__text"><span>Send message</span></span></a>
                           <span className="submitting"></span>
                        </div>
                     </div>
                  </form>
                  <div id="form-message-warning" className="mt-4"></div>
                  <div id="form-message-success">
                     Your message was sent, thank you!
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>

    </>
  );
}

export default Contact;
