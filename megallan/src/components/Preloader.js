import React, { useEffect } from 'react';

import {TweenMax} from 'gsap';
import image from '../assets/images/loading.svg'

const Preloader = () => {

    useEffect(() => {

        TweenMax.to(".loader", 1.8, {
            delay: 1,
            top: "-100%",
        });

    }, []);

    return (
        <div className="loader">
            <div className="intro">
                <div className="intro-title">
                    <img src={image} alt="Loader" title="Loader" />
                </div>
            </div>
        </div>
    );
  
}

export default Preloader;


