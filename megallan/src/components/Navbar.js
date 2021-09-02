import React, { useEffect, useMemo } from 'react';
import {gsap} from 'gsap';


const Navbar = () => {

  const timeline = useMemo(() => gsap.timeline({ paused: true, repeat: false, repeatDelay: 2, yoyo: true, delay: 0 }), []);

  useEffect(() => {
    let quote = document.getElementById('quote')
    let arr = quote.innerText.split('')
    let html = '';

    for( let i =0; i < arr.length; i++ ) {
      if (arr[i] !== ' ') {
        html += '<div style="position:relative;display:inline-block;">' + arr[i] + '</div>';
      } else {
        html += arr[i];
      }
    }

    quote.innerHTML = html;

    let chars = quote.getElementsByTagName('div');

    timeline.from(chars, {
      duration: 1.5,
      opacity: 0,
      x: gsap.utils.random(-300,300,true),
      stagger: {
        amout: 3
      }
    });

    timeline.play();
  }, [])


  return (
    <>
      <nav className="site-nav site-nav-target">
        <div className="container">
            <div className="row align-items-center justify-content-between text-left">
              <div className="col-3">
                  <div className="site-logo">
                    <a href="index.html" className="site-logo main-logo"><img src="images/logo.png" className="logo-img light-logo img-fluid" alt="" /><span></span></a>
                  </div>
              </div>
              <div className="col text-right">
                  <ul className="site-nav-ul js-clone-nav text-left d-none d-lg-inline-block">
                    <li><a href="#home" className="nav-link cursor-item">Home</a></li>
                    <li><a href="#about" className="nav-link cursor-item">About</a></li>
                    <li><a href="#services" className="nav-link cursor-item">Services</a></li>
                    <li><a href="#contact" className="nav-link cursor-item">Contact</a></li>
                  </ul>
                  <ul className="site-nav-ul-none-onepage text-right d-inline-block d-lg-none">
                    <li><a href="#" className="js-menu-toggle">Menu</a></li>
                  </ul>
              </div>
            </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
