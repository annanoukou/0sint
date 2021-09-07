import React from 'react';
import '../App.css';

import Scroll from '../components/Scroll'
import About from '../components/About'
import Services from '../components/Services'
import Service from '../components/Service'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Init from '../components/Init'

function HomePage() {

  return (
      <div>
        <Init />
        <About />
        <Services />
        <Team />
        <Contact />
        <Scroll />
      </div>

  );
}


export default HomePage;
