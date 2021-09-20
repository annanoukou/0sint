import React from 'react';


const Newsletter = () => {

  return (
    <section id="newsletter" >
      <div className="container text-center">
        <p className="mb-40">Sign up for our newsletter to receive product news, updates and special invites.</p>
        <div className="input-group" data-aos="fade-up" data-aos-duration="1200">
          <input type="text" className="form-control newsletter__sub" name="subscribe" placeholder="Enter Your Email" aria-label="Enter Your Email Address" aria-describedby="button" />
          <div className="input-group-append">
            <button className="btn" type="button" id="button-addon2">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;