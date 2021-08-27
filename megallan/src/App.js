import './App.css';

import "./assets/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
// import "./assets/css/owl.carousel.min.css";
import "./assets/css/aos.css";
import "./assets/css/font-awesome.min.css";
import "./assets/scss/style.scss";
import "./assets/css/style.css";

import * as THREE from "three";
import React, {Fragment} from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Navbar from './components/Navbar';


function App() {

  return (
    <Router>
      <Fragment>
          <Header />
          <Navbar />
            <div class="site-wrap">
              <div class="site-inner">
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
