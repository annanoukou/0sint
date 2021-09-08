import React from 'react';
import '../App.css';

import Scroll from '../components/Scroll'
import About from '../components/About'
import Services from '../components/Services'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Init from '../components/Init'
import Preloader from '../components/Preloader'
import Newsletter from '../components/Newsletter'

function HomePage() {

  return (
      <>
        <Preloader />
        <Init />
        <About />
        <Services />
        <Team />
        <Newsletter />
        <Contact />
        <Scroll />
      </>

  );
}


export default HomePage;
