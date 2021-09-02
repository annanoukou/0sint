import React, { useEffect } from 'react';

import CircleType from 'circletype';
import ScrollTrigger from 'gsap/ScrollTrigger'

function Works() {
  return (
    <>

            <div className="section">
                <div className="container">
                  <div className="row mb-80 border-section">
                      <div className="col-lg-6">
                        <h3 className="section-title">Works</h3>
                      </div>
                      <div className="col-lg-6">
                        <div className="filter-wrap">
                            <ul className="filter-wrapper clearfix">
                              <li><a href="#" data-filter="*" className="selected cursor-item">View all</a></li>
                              <li><a href="#" className="cursor-item" data-filter=".design">Design</a></li>
                              <li><a href="#" className="cursor-item" data-filter=".brand">Branding</a></li>
                              <li><a href="#" className="cursor-item" data-filter=".web">Web</a></li>
                              <li><a href="#" className="cursor-item" data-filter=".mobile">Mobile</a></li>
                            </ul>
                        </div>
                      </div>
                  </div>
                  <div className="row portfolio-items">
                      <div className="col-lg-12 p-0">
                        <div className="work-gallery">
                            <div className="col-md-6 single-item brand apps mobile">
                              <div className="portfolio-wrap gsap-reveal">
                                  <a href="#" className="portfolio-item"><img src="images/portfolio/work_8_md.gif" alt="" className="img-fluid" /></a>
                                  <div className="portfolio-content">
                                    <p>Design, Branding</p>
                                    <h3><a href="#">Smart White Gadget</a></h3>
                                    <a href="#" className="portfolio-link"></a>
                                  </div>
                              </div>
                            </div>
                            <div className="col-md-6 single-item web mobile">
                              <div className="portfolio-wrap gsap-reveal">
                                  <a href="single-portfolio.html" className="portfolio-item"><img src="images/portfolio/work_3_a_full.jpg" alt="" className="img-fluid" /></a>
                                  <div className="portfolio-content">
                                    <p>Web, Design</p>
                                    <h3><a href="single-portfolio.html">Smart Case</a></h3>
                                    <a href="single-portfolio.html" className="portfolio-link"></a>
                                  </div>
                              </div>
                            </div>
                            <div className="col-md-6 single-item design mobile">
                              <div className="portfolio-wrap gsap-reveal">
                                  <a href="single-portfolio.html" className="portfolio-item"><img src="images/portfolio/work_3_full.jpg" alt="" className="img-fluid" /></a>
                                  <div className="portfolio-content">
                                    <p>Web, Design</p>
                                    <h3><a href="single-portfolio.html">Eco Sensors</a></h3>
                                    <a href="single-portfolio.html" className="portfolio-link"></a>
                                  </div>
                              </div>
                            </div>
                            <div className="col-md-6 single-item web mobile">
                              <div className="portfolio-wrap gsap-reveal">
                                  <a href="single-portfolio.html" className="portfolio-item"><img src="images/portfolio/work_4_full.jpg" alt="" className="img-fluid" /></a>
                                  <div className="portfolio-content">
                                    <p>Web, Design</p>
                                    <h3><a href="single-portfolio.html">Watch Design</a></h3>
                                    <a href="single-portfolio.html" className="portfolio-link"></a>
                                  </div>
                              </div>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
      </>

  );
}


export default Works;
