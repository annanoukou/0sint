import './App.css';
import "./assets/scss/style.scss";
import * as THREE from "three";

import React, {Fragment} from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";


function App() {

  return (
    <Router>
      <Fragment>
        <div className="main-wrapper">
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/home">
              <Redirect to="/"/>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Fragment>
    </Router>
  );

}

export default App;
