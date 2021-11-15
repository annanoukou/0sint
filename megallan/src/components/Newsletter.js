import React from 'react';
import * as emailjs from 'emailjs-com';
import MailchimpSubscribe from "react-mailchimp-subscribe"

class Newsletter extends React.Component {

  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
      message: 'A user subscribed to the newsletter',
      subject: 'You have a new message from 0sint',
      notification: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      notification: false
    })

    const { name, email, message, subject } = this.state;
    const templateParams = {
       from_name: email,
       from_email: email,
       to_name: 'anna.noukou@gmail.com',
       subject,
       message_html: message,
    };

    emailjs.send(
      'service_7urnjyw',
      'template_6alxy13',
      templateParams,
      'user_0KL9MIxvcWypVJfzvev8L'
    )
    this.resetForm();
  }

  resetForm() {
    this.setState({
      email: '',
      notification: true
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  

  render() {
    const { email } = this.state;
    const url = "https://gmail.us20.list-manage.com/subscribe/post?u=0406acbf3b606bc5157416a0b&amp;id=f01e2dbf7a";
   
    return (
      <section id="newsletter" >
        <div className="container text-center">
          <p className="mb-40">Sign up for our newsletter to receive product news, updates and special invites.</p>
          <div className="input-group newsletter-input" data-aos="fade-up" data-aos-duration="1200">
            {/* <form onSubmit={this.handleSubmit} method="post" className="newsletter-form" onSubmit={this.handleSubmit}> */}
              {/* <input value={email} onChange={this.handleChange} type="text" className="form-control newsletter__sub" name="email" placeholder="Enter Your Email" aria-label="Enter Your Email Address" aria-describedby="button" />
              <div className="input-group-append">
                <button className="btn" type="submit" id="button-addon2">Subscribe</button>
              </div> */}
              <MailchimpSubscribe url={url}/>
            {/* </form> */}
            {/* { this.state.notification && 
              <div className="form-message-success">
                Your message was sent, thank you!
              </div>
            } */}
          </div>
        </div>
      </section>
    );
  }
}

export default Newsletter;