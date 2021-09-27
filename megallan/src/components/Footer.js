import React, {useEffect, useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import Cursor from './Cursor'


function Footer() {

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      let offset = window.scrollY
      offset = offset * 0.4

      if(offset === 0){
        setVisible(false)
      } else {
        setVisible(true)
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  function scrollToTop(e) {
    e.preventDefault();
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }


  return (
    <>
      
      <a id="back-to-top" href="#" className={ visible ? 'fadeIn cursor-item' : 'fadeOut cursor-item' } onClick={scrollToTop}>
        <FontAwesomeIcon icon={faChevronUp} />
      </a>

      <Cursor />
    </>
  )
}

export default Footer;
