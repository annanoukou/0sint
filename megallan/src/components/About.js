import React, { useState, useEffect, useMemo } from 'react';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const About = () => {

    const [isVisible, setVisibility] = useState(false);
    const timeline = useMemo(() => gsap.timeline({ paused: true, repeat: false, repeatDelay: 2, yoyo: true, delay: 0 }), []);

    useEffect(() => {
        if(isVisible){

            let quote = document.querySelectorAll('.highlight')

            // let tl = gsap.timeline({
            //     scrollTrigger: {
            //       trigger: quote,
            //       pin: true,   // pin the trigger element while active
            //       start: "top top", // when the top of the trigger hits the top of the viewport
            //       end: "+=500", // end after scrolling 500px beyond the start
            //       scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            //       snap: {
            //         snapTo: "labels", // snap to the closest label in the timeline
            //         duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            //         delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            //         ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
            //       }
            //     }
            //   });

            // tl.addLabel("start")
            // .from(quote, {scale: 0.3, rotation:45, autoAlpha: 0})
            // .addLabel("color")
            // .from(quote, {color: "#96a2e6"})
            // .addLabel("spin")
            // .to(quote, {rotation: 360})
            // .addLabel("end");

            // timeline.play();

        }
    }, [isVisible]);


    useEffect(() => {
        let highlight = document.querySelector('.highlight')

        document.addEventListener('scroll', function () {
            if(isInViewport(highlight)){
                setVisibility(true)
            }else{
                setVisibility(false)
            }
        })
    }, [])


    return (
        <div>
           <div id="about" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <h3 className="section-title text-primary">Modus <br></br>Operandi</h3>
                        </div>
                        <div className="col-lg-5" data-aos="fade-up" data-aos-duration="500">
                            <p>
                            We leverage our proprietary Magellan pipeline to crawl, collect and analyse massive amounts of data from practically any internet-facing and interfaceable system. Our data collection approach goes beyond what is considered “publicly available” data, allowing us to acquire “publicly accessible” data, which were not intended to be readily reachable by everyone. We achieve this without compromising the hosting infrastructures’ integrity. Thus, our methodology is not subject to the limitations of “open-source” intelligence.
                            </p>
                            <a className="btn-draw btn--white cursor-item mt-4" href="#services"><span className="btn-draw__text"><span>Let's Talk!</span></span></a>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up" data-aos-duration="1000">
                            <p>
                            We have already published novel large-scale datasets facilitating research on hard problems such as fighting sexual grooming targeting minors and understanding human emotions.
                            Once we have the data, we apply our expertise of
                                <span class="highlight font-weight-bold"> machine learning </span>,
                                <span class="highlight font-weight-bold"> cybersecurity </span>,
                                <span class="highlight font-weight-bold"> data mining </span>,
                                <span class="highlight font-weight-bold"> computational social science </span>
                                to tackle complex problems and extract actionable intelligence, revealing
                                <span class="highlight font-weight-bold"> secrets</span>,
                                <span class="highlight font-weight-bold"> vulnerabilities</span>,
                                <span class="highlight font-weight-bold"> misconfigurations</span>,
                                <span class="highlight font-weight-bold"> insights</span>,
                                <span class="highlight font-weight-bold"> behavioral patterns</span>,
                                <span class="highlight font-weight-bold"> REDACTED</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
