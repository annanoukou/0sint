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
    };

    return (
        <div className="circular-text">
            <span id="rotated">Magellan • Magellan • Magellan • Magellan • Magellan • Magellan •</span>
        </div>
    );
  
}

export default Scroll;
