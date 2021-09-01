import React from 'react';

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import image1 from '../assets/images/logos/logo01.png';
import image2 from '../assets/images/logos/logo02.png';
import image3 from '../assets/images/logos/logo05.png';
import image4 from '../assets/images/logos/logo06.png';

function Footer() {
  return (
    <>
      <div className="row mt-100">
            <OwlCarousel className="owl-theme logo-slider" loop margin={10} nav>
                <div className="logo-v1 cursor-item ">
                    <img src={image1} alt="Image" className="img-fluid" />
                </div>
                <div className="logo-v1 cursor-item">
                    <img src={image2} alt="Image" className="img-fluid" />
                </div>
                <div className="logo-v1 cursor-item">
                    <img src={image3} alt="Image" className="img-fluid" />
                </div>
                <div className="logo-v1 cursor-item">
                    <img src={image4} alt="Image" className="img-fluid" />
                </div>
            </OwlCarousel>
        </div>
    </>
  )
}

export default Footer;