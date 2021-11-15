import React, { useState, useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.fog.min'

import imageLogo from '../assets/images/3014-Incognita-Logo-SH.svg'

function Init() {

    const [vantaEffect, setVantaEffect] = useState(0)
    const [time, setTime] = useState(0);
    const timer_init = useRef(null);
    
    useEffect(() => {

      // const $listInit = document.querySelector('.List')
      // const $listItemInit = document.querySelectorAll('.List-item')
      // const $listLengthInit = $listItemInit.length
      // const $listArrayInit = []
      // let i = 1

      // $listItemInit.forEach(e => $listArrayInit.push(e.offsetWidth))
      // const widestListWidth = Math.max(...$listArrayInit)
      // $listInit.style.width = widestListWidth + 'px';

      // if (!timer_init.current) {
      //   timer_init.current = setInterval(() => {
      //     $listItemInit.forEach(e => e.classList.remove('is-active') )
      //     $listItemInit[i].classList.add('is-active');
      //     (i === $listLengthInit - 1 ) ? i = 0 : i++;
      //   }, 3000);
      // } else {
      //   clearInterval(timer_init.current);
      //   timer_init.current = null;
      // }

    })


    useEffect(() => {
        if (!vantaEffect) {
          setVantaEffect(BIRDS({
            el: "#vanta",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0xc3050,
            midtoneColor: 0x52d50,
            lowlightColor: 0x7193c,
            baseColor: 0x8182d,
            blurFactor: 0.83,
            speed: 5.00
          }))
        }
        if (vantaEffect) {
          const $listInit = document.querySelector('.List')
          const $listItemInit = document.querySelectorAll('.List-item')
          const $listLengthInit = $listItemInit.length
          const $listArrayInit = []
          let i = 1

          $listItemInit.forEach(e => $listArrayInit.push(e.offsetWidth))
          const widestListWidth = Math.max(...$listArrayInit)
          $listInit.style.width = widestListWidth + 'px';

          if (!timer_init.current) {
            timer_init.current = setInterval(() => {
              $listItemInit.forEach(e => e.classList.remove('is-active') )
              $listItemInit[i].classList.add('is-active');
              (i === $listLengthInit - 1 ) ? i = 0 : i++;
            }, 3000);
          } else {
            clearInterval(timer_init.current);
            timer_init.current = null;
          }
        }

        // return () => {
        //   if (vantaEffect) vantaEffect.destroy()
        // }
    }, [vantaEffect])

    return (
    <>
        <div className="vanta-js">
            <div id="vanta" style={{height: "100vh"}}></div>
        </div>
        <div id="home" className="cover-init">
          <div className="container">
            <div className="row align-items-center pb-0 pb-lg-4">
                <div className="col-12 col-lg-8">
                  <h1 className="heading text-white">Obscured <br></br> <span id="quote">Intelligence</span></h1>
                    <p className="subheading text-white mb-0 mb-md-4">
                      Our mission is to lead a new age of discovery in the Cyber World
                      <br></br>
                      With our tools you will traverse the uncharted seas of the data realm,
                      <br></br>
                      shed light on their secrets, venture into their obscured wilderness,
                      <br></br>
                      dive into the unexplored depths of

                      <ul className="Wording-list List">
                        <li className="List-item is-active">systems</li>
                        <li className="List-item">source code</li>
                        <li className="List-item">datasets</li>
                        <li className="List-item">the human mind</li>
                      </ul>
                      <br></br>

                    </p>
                  <a className="btn-draw btn--white cursor-item mt-3" href="#services"><span className="btn-draw__text"><span>Our services</span></span></a>
                </div>
                <div className="col-12 col-lg-4 ">
                  <img src={imageLogo} className="init__img" alt="Logo image" />
                </div>

            </div>
          </div>
        </div>
    </>
  )
}

export default Init;
