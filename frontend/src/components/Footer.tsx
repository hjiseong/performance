import React, { ReactElement } from "react";

export default function Footer(): ReactElement {
  return (
    <>
      <div className="footer-section">
        <div className="footer-container">
          <div className="footer-index">
            <div className="footer-index-content">
              <span className="footer-logo">P®</span>
              <span className="footer-index-description">
                We collaborate with ambitious brands and people. Let’s connect
                :)
              </span>
            </div>
            <div className="footer-index-content">
              <div className="footer-email-container">
                <span className="footer-index-group">STAY IN THE KNOW</span>
                <div className="footer-email-input-container">
                  <input
                    className="footer-email-input"
                    type="text"
                    placeholder="Email Address"
                  />
                  <span className="footer-email-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
                      <rect x="0.1" y="7.5" width="14" height="2"></rect>
                      <path d="M8.4,0l8.5,8.5l-1.4,1.4L7,1.4L8.4,0z"></path>
                      <path d="M7,15.6l8.5-8.5l1.4,1.4L8.4,17L7,15.6z"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="footer-group-container">
                <div>
                  <span className="footer-index-group">social</span>
                  <ul>
                    <li className="footer-index-item">
                      <a href="#">Instagram</a>
                    </li>
                    <li className="footer-index-item">
                      <a href="#">Twitter</a>
                    </li>
                    <li className="footer-index-item">
                      <a href="#">LinkedIn</a>
                    </li>
                    <li className="footer-index-item">
                      <a href="#">Facebook</a>
                    </li>
                    <li className="footer-index-item">
                      <a href="#">Github</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <span className="footer-index-group">projects</span>
                  <ul>
                    <li className="footer-index-item">
                      <a href="#">Food Manager</a>
                    </li>
                    <li className="footer-index-item">
                      <a href="#">Bookmarker</a>
                    </li>
                    <li className="footer-index-item">
                      <a href="#">Question Maker</a>
                    </li>
                    <li className="footer-index-item">
                      <a href="#">Interaction Editor</a>
                    </li>
                    <li className="footer-index-item">
                      <a href="#">AR Coupon</a>
                    </li>
                    <li className="footer-index-item">
                      <a href="#">POPO®</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <span className="footer-index-group">offices</span>
                  <ul>
                    <li className="footer-index-item">
                      <a href="#">San Diego – CA</a>
                    </li>
                    <li className="footer-index-item">
                      <a href="#">New York – NY</a>
                    </li>
                    <li className="footer-index-item">
                      <a href="#">Bay Area – CA</a>
                    </li>
                    <li className="footer-index-item">
                      <a href="#">St. Louis – MO</a>
                    </li>
                    <li className="footer-index-item">
                      <a href="#">Amsterdam – NL</a>
                    </li>
                    <li className="footer-index-item">
                      <a href="#">London – EN</a>
                    </li>
                    <li className="footer-index-item">
                      <a href="#">Berlin – GE</a>
                    </li>
                    <li className="footer-index-item">
                      <a href="#">Argentina – AR</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-index-content">
              <a className="part-of-dept" href="#">
                (part of dept)
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section bottom">
        <div className="footer-container">
          <div className="footer">
            <span>POPO®, INC 10 - 21© </span>
            <span>PURSUE EFFICIENCY, FIND AN EASIER WAY.™</span>
            <span>TERMS, PRIVACY POLICY</span>
          </div>
        </div>
      </div>
    </>
  );
}
