import React, { useEffect } from 'react';

import CircleType from 'circletype';

const Scroll = () => {

    useEffect(() => {
        const circleType = new CircleType(
            document.getElementById("rotated")
        )
        circleType.radius(50);
    }, []);
   

    window.onscroll = function() {
        let offset = window.scrollY
        offset = offset * 0.4

        let scroll_element = document.querySelector(".circular-text");
        scroll_element.style.transform = "rotate(" + offset + "deg)";

        let nav = document.querySelector(".site-nav");

        if(offset == 0){
            nav.classList.remove("nav-scroll");
        }else{
            nav.classList.add("nav-scroll");
        }
    };

    return (
        <div className="circular-text">
            <span id="rotated">0sint • 0sint • 0sint • 0sint • 0sint • 0sint •</span>
        </div>
    );
  
}

export default Scroll;
