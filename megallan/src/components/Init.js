import React, { useState, useEffect } from 'react';
import BIRDS from 'vanta/dist/vanta.fog.min'


function Footer() {

    const [vantaEffect, setVantaEffect] = useState(0)
    
    useEffect(() => {
      const $list = document.querySelector('.List')
      const $listItem = document.querySelectorAll('.List-item')
      const $listLength = $listItem.length
      const $listArray = []
      let i = 1

      $listItem.forEach(e => $listArray.push(e.offsetWidth))

      const widestListWidth = Math.max(...$listArray)

      $list.style.width = widestListWidth + 'px';

      setInterval(_ => {
        $listItem.forEach(e => e.classList.remove('is-active') )
        $listItem[i].classList.add('is-active');
        (i === $listLength - 1 ) ? i = 0 : i++;
      }, 2000)
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
        return () => {
          if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
    <>
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
                      shed light on their secrets, venture into their obscured wilderness,
                      <br></br>
                      dive into the unexplored depths of

                      <ul class="Wording-list List">
                        <li class="List-item is-active">systems</li>
                        <li class="List-item">source code</li>
                        <li class="List-item">datasets</li>
                        <li class="List-item">the human mind</li>
                      </ul>
                      <br></br>

                    </p>
                  <a className="btn-draw btn--white cursor-item mt-3" href="#services"><span className="btn-draw__text"><span>Our services</span></span></a>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Footer;
