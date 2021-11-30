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

  validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad() {
    var element = document.querySelector('#newsletter button')
    element.disabled = true;
    element.classList.add("disabled");
  }

  render() {

    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    window.addEventListener('keydown', function (evt) {

      // console.log(evt.target.value);
      // console.log(evt.target.value + evt.key)
      // console.log(evt.target.value);
    
      if(evt.keyCode === 8){

        let str = evt.target.value;
        let currValue = str.substring(0, str.length - 1);

        let element = document.querySelector('#newsletter button')
        if(validateEmail(currValue)){
          element.disabled = true;
          element.classList.add("disabled");
        }else{
          element.disabled = true;
          element.classList.add("disabled");
        }

      }else{
        if (evt.keyCode >= 65 && evt.keyCode <= 90) {

          let currValue = evt.target.value + evt.key;

          let element = document.querySelector('#newsletter button')
          if(validateEmail(currValue)){
            element.disabled = false;
            element.classList.remove("disabled");
          }else{
            element.disabled = true;
            element.classList.add("disabled");
          }

        }
      }

    });


    const { email } = this.state;

    const url = "https://gmail.us20.list-manage.com/subscribe/post?u=0406acbf3b606bc5157416a0b&amp;id=f01e2dbf7a";
   
    return (
      <section id="newsletter" >
        <div className="container text-center">
          <p className="mb-40">Sign up for our newsletter to receive product news, updates and special invites.</p>
          <div className="input-group newsletter-input" data-aos="fade-up" data-aos-duration="1200">
            <MailchimpSubscribe url={url} />
          </div>
        </div>
      </section>
    );
  }
}

export default Newsletter;