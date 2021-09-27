import React, { useEffect, useState, useRef } from 'react';


const About = () => {

    const [time, setTime] = useState(0);
    const timer = useRef(null);
    const timer_sec = useRef(null);
    
    useEffect(() => {
        const $list = document.querySelector('.ListAbout__first')
        const $listItem = document.querySelectorAll('.List-item__first')
        const $listLength = $listItem.length
        const $listArray = []
        let i = 1
   
        $listItem.forEach(e => $listArray.push(e.offsetWidth))
        const widestListWidth = Math.max(...$listArray)
        $list.style.width = widestListWidth + 'px';

        if (!timer.current) {
            timer.current = setInterval(() => {
                $listItem.forEach(e => e.classList.remove('is-active') )
                $listItem[i].classList.add('is-active');
                (i === $listLength - 1 ) ? i = 0 : i++;
            }, 2000);
        } else {
            clearInterval(timer.current);
            timer.current = null;
        }

        // Second list
        const $list2 = document.querySelector('.ListAbout__second')
        const $listItem2 = document.querySelectorAll('.List-item__second')
        const $listLength2 = $listItem2.length
        const $listArray2 = []
        let i2 = 1
   
        $listItem2.forEach(e => $listArray2.push(e.offsetWidth))
        const widestListWidth2 = Math.max(...$listArray2)
        $list2.style.width = widestListWidth2 + 'px';
  
        if (!timer_sec.current) {
            timer_sec.current = setInterval(() => {
                $listItem2.forEach(e => e.classList.remove('is-active') )
                $listItem2[i].classList.add('is-active');
                (i2 === $listLength2 - 1 ) ? i2 = 0 : i2++;
            }, 3000);
        } else {
            clearInterval(timer_sec.current);
            timer_sec.current = null;
        }

    })

    return (
        <>
            <div className="divider"></div>
            <div id="about" className="section bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <h3 className="section-title text-primary">Modus <br></br>Operandi</h3>
                        </div>
                        <div className="col-lg-9" data-aos="fade-up" data-aos-duration="700">
                            <p>
                            We leverage our proprietary Magellan pipeline to crawl, collect and analyse massive amounts of data from practically any internet-facing and interfaceable system. Our data collection approach goes beyond what is considered “publicly available” data, allowing us to acquire “publicly accessible” data, which were not intended to be readily reachable by everyone. We achieve this without compromising the hosting infrastructures’ integrity. Thus, our methodology is not subject to the limitations of “open-source” intelligence.
                            </p>

                            <p>
                                We have already published novel large-scale datasets facilitating research on hard problems such as fighting sexual grooming targeting minors and understanding human emotions.
                            </p> 
                            <p>
                                Once we have the data, we apply our expertise of
                                <ul className="Wording-list ListAbout__first">
                                    <li className="List-item__first is-active">machine learning</li>
                                    <li className="List-item__first">cybersecurity</li>
                                    <li className="List-item__first">data mining</li>
                                    <li className="List-item__first">computational social science</li>
                                </ul>
                                <br></br>
                                to tackle complex problems and extract actionable intelligence, revealing
                                <br></br>
                                <ul className="Wording-list ListAbout__second">
                                    <li className="List-item__second is-active">secrets</li>
                                    <li className="List-item__second">vulnerabilities</li>
                                    <li className="List-item__second">misconfigurations</li>
                                    <li className="List-item__second">insights</li>
                                    <li className="List-item__second">behavioral patterns</li>
                                </ul>
                                .
                                
                            </p>
                            <a className="btn-draw btn--dark cursor-item mt-4" href="#services"><span className="btn-draw__text"><span>Let's Talk!</span></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
