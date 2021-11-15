import './App.css';

import "./assets/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/aos.css";
import "./assets/css/font-awesome.min.css";
import "./assets/scss/style.scss";
import "./assets/css/style.css";

import React, {Fragment, useEffect } from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Navbar from './components/Navbar';

import AOS from 'aos';

function App() {
  require('dotenv').config()
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease',
      once: true,
      offset: -100,
      disable: 'mobile'
    });

  },)

  return (
    <Router>
      <Fragment>
          <Navbar />
            <div className="site-wrap">
              <div className="site-inner">
                <Switch>
                  <Route exact path="/" component={HomePage}/>
                  <Route path="/home">
                    <Redirect to="/"/>
                  </Route>
                </Switch>
              </div>
            </div>
          <Footer />
      </Fragment>
    </Router>
  );

}

export default App;
