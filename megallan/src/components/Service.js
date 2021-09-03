import React from 'react';

import image1 from '../assets/images/pinata.gif';

function Service() {
   return (
      <>
         <div className="section" id="services-section">
            <div className="container">
              <div className="row mb-80 border-section">
                  <div className="col-lg-6">
                    <h3 className="section-title text-primary">PinataHub</h3>
                  </div>
                  <div className="col-lg-6">
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-6">
                    <div className="project-list">
                        <div className="project">
                          <div className="project-title">
                              <h5>Information</h5>
                              <p>
                              GitHub has become an indispensable part of DevOps teams. It enables various automations along with being a secure and robust code repository, enabling the collaboration of millions of developers. But people are not always cautious and developers often leave sensitive information behind.
                              </p>
                              <p>PinataHub explores the world of GitHub to extract sensitive information that has been committed in public repositories.</p>
                          </div>
                          <div className="project-categ"></div>
                        </div>
                        <div className="project">
                          <div className="project-title">
                              <h5>Test Pinata</h5>
                              <p>
                              Despite the recent measures from GitHub and DevOps teams to prevent secrets leakage, people are still committing secrets on GitHub. <span class="hit-pinata">Hit the Pinata to see a random result</span>.
                              </p>
                          </div>
                          <div className="project-categ"></div>
                        </div>
                        <div className="project">
                          <div className="project-title">
                              <h5>Access</h5>
                              <p>
                                If you want to explore this further, you can register for free to access 1% of the labelled dataset.
                                Paid accounts will be available on XXX to access 10% of the dataset.
                                Full access to the dataset can be provided to CERTs, CSIRTs, and threat intelligence teams upon request.
                              </p>
                          </div>
                          <div className="project-categ"></div>
                        </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="services_active owl-carousel">
                        <div className="single_testmonial">
                          <div className="testmonial_info">
                              <img src={image1} className="img-fluid" alt="" />
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


export default Service;
