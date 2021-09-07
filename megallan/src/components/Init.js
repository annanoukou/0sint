import React, { useState, useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.net.min'


function Footer() {

    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
          setVantaEffect(BIRDS({
            el: "#vanta",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x2e4486,
            backgroundColor: 0x0,
            points: 4.00,
            maxDistance: 27.00,
            showDots: false
          }))
        }
        return () => {
          if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return (
    <div>
        <div className="vanta-js">
            <div id="vanta" style={{height: "100vh"}}></div>
        </div>
        <div id="home" className="cover-init">
            <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-8">
                    <h1 className="heading text-white">Obscured <br></br> <span id="quote">Intelligence</span></h1>
                      <p className="subheading text-white">
                        Our mission is to lead a new age of discovery in the Cyber World
                        <br></br>
                        With our tools you will traverse the uncharted seas of the data realm,
                        <br></br>
                        dive into the unexplored depths of
                        <div className="d-inline cursor-item">
                            <span> systems</span>,
                            <span> source code</span>,
                            <span> datasets</span>,
                            <span> the human mind</span>,
                        </div> shed light on their secrets, venture into their obscured wilderness.
                      </p>
                    <a className="btn-draw btn--white cursor-item mt-3" href="#services"><span className="btn-draw__text"><span>Our services</span></span></a>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;
