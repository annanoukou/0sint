import React from 'react';
import {Link} from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer-bottom d-flex align-items-center">
        <div className="container">
          <div className="d-flex flex-lg-row flex-column align-items-center justify-content-between">
           
            <div>
              <div className="terms-and-policies-links mb-2 d-flex flex-lg-row
                              flex-column align-items-center justify-content-center text-center text-md-right">
                <p className="mb-0 font-weight-bold">
                  <Link to="/terms">Terms & Conditions</Link>
                </p>
                <div className="mx-2 d-lg-block d-none">&middot;</div>
                <p className="mb-0 font-weight-bold">
                  <Link to="/privacy">Privacy Policy</Link>
                </p>
              </div>
              <div className="d-flex flex-lg-row flex-column align-items-center
                              justify-content-center text-center text-md-right">
                <p className="mb-0 mt-md-0 mt-2 font-weight-bold">
                  &copy; {new Date().getFullYear()} TEDxUniversityofPiraeus
                </p>
                <div className="mx-2 d-lg-block d-none">&middot;</div>
                <p className="mb-0">
                  This independent TEDx event is operated under license from TED.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
