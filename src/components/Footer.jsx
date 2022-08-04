import React from "react";

import footer_logo from "../static/img/footer_logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div>
          <img
            src={footer_logo}
            alt="logoipsum"
            style={{ width: "300px", cursor: "pointer", marginLeft: "-15px" }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex-col col-5 pe-5">
            <p style={{ fontSize: "14px", fontWeight: "lighter" }}>
              OurStudio is a digital agency UI / UX Design and Website
              Development located in Ohio, United States of America
            </p>
            <p style={{ fontSize: "14px", fontWeight: "lighter" }}>Copyright</p>
          </div>
          <div className="d-flex-col col-2">
            <p style={{ fontWeight: "700" }}>Our Social Media</p>
            <ul className="footer-links">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Youtube</a>
              </li>
            </ul>
          </div>
          <div className="d-flex-col col-2">
            <p style={{ fontWeight: "bold" }}>Contact</p>
            <ul className="footer-contact">
              <li>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth={2}
                    style={{ width: "20px" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>8819 Ohio St. South Gate, California 90280</div>
              </li>
              <li>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth={2}
                    style={{ width: "20px" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                </div>
                <div>ourstudio@hello.com</div>
              </li>
              <li>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth={2}
                    style={{ width: "20px" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>+271 386-647-3637</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
