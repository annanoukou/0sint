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

  function openNav(e) {
    e.preventDefault();
    
    var body = document.querySelector('body');
    if (body.classList.contains('offcanvas')) {

      body.classList.remove('offcanvas');
      document.querySelector('.js-menu-toggle').classList.remove('active');
      
    } else {

      body.classList.add('offcanvas');
      document.querySelector('.js-menu-toggle').classList.add('active');

    }
  }

  function closeMobileNav() {
    var body = document.querySelector('body');
    
    body.classList.remove('offcanvas');
    document.querySelector('.js-menu-toggle').classList.remove('active');
  }



  return (
    <>
      <nav class="site-mobile-menu">
         <div class="close-wrap d-flex">
            <a href="#" class="d-flex ml-auto js-menu-toggle">
               <span class="close-label" onClick={closeMobileNav}>Close</span>
               <div class="close-times">
                  <span class="bar1"></span>
                  <span class="bar2"></span>
               </div>
            </a>
         </div>
         <div class="site-mobile-inner">
            <ul class="site-nav-wrap">
              <li><a href="#" class="nav-link cursor-item">Home</a></li>
              <li><a href="#" class="nav-link cursor-item">About</a></li>
              <li><a href="#" class="nav-link cursor-item">Services</a></li>
              <li><a href="#" class="nav-link cursor-item">Team</a></li>
              <li><a href="#" class="nav-link cursor-item">Contact</a></li>
            </ul>
         </div>
      </nav>

      <nav className="site-nav site-nav-target navbar-fixed-top">
        <div className="container">
            <div className="row align-items-center justify-content-between text-left">
              <div className="col-3">
                  <div className="site-logo">
                    <a href="#" className="site-logo main-logo"><img src="images/logo.png" className="logo-img light-logo img-fluid" alt="" /><span></span></a>
                  </div>
              </div>
              <div className="col text-right">
                  <ul className="site-nav-ul js-clone-nav text-left d-none d-lg-inline-block">
                    <li><a href="#home" className="nav-link cursor-item">Home</a></li>
                    <li><a href="#about" className="nav-link cursor-item" >About</a></li>
                    <li><a href="#services" className="nav-link cursor-item">Services</a></li>
                    <li><a href="#team" className="nav-link cursor-item">Team</a></li>
                    <li><a href="#contact" className="nav-link cursor-item">Contact</a></li>
                  </ul>
                  <ul className="site-nav-ul-none-onepage text-right d-inline-block d-lg-none">
                    <li><a href="#" className="js-menu-toggle" onClick={openNav}>Menu</a></li>
                  </ul>
              </div>
            </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
