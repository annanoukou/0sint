import React, { useEffect } from 'react';

import CircleType from 'circletype';

const Scroll = () => {

    useEffect(() => {
        const circleType = new CircleType(
            document.getElementById("rotated")
        )
        circleType.radius(50);

        let scroll_element = document.querySelector(".circular-text");
        scroll_element.classList.add("d-none")
    }, []);
   

    window.onscroll = function() {
        let offset = window.scrollY
        offset = offset * 0.4

        let scroll_element = document.querySelector(".circular-text");
        scroll_element.style.transform = "rotate(" + offset + "deg)";
 
        let nav = document.querySelector(".site-nav");

        if(offset === 0){
            nav.classList.remove("nav-scroll");
            scroll_element.classList.add("d-none")
        }else{
            nav.classList.add("nav-scroll");
            scroll_element.classList.remove("d-none")
        }
    };

    return (
      
        <>
            <div className="circular-text">
                <span id="rotated">0sint • 0sint • 0sint • 0sint • 0sint • 0sint •</span>
            </div>

            <footer className="footer section">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="go-top cursor-item" id="go-to-top"><a href="#home" className="main-logo"><i className="fa fa-chevron-up"></i></a></div>
                        <div className="hr-footer"></div>
                        <ul className="footer-site-social">
                            <li><a href="#" className="cursor-item">Facebook</a></li>
                            <li><a href="#" className="cursor-item">Twitter</a></li>
                            <li><a href="#" className="cursor-item">GitHub</a></li>
                            <li><a href="#" className="cursor-item">Linkedin</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </footer>
        </>
        
    );
  
}

export default Scroll;
