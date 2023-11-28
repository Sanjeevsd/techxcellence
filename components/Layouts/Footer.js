import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <>
        <footer className="footer-section pt-100 pb-70">
          <div className="container">
            <div className="row" style={{ justifyContent: "space-between" }}>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="footer-area">
                  <div className="footer-heading">
                    <h3>About Us</h3>
                  </div>

                  <p>
                    TechXcellence Nepal is a full-service digital marketing
                    agency based in Kathmandu, Nepal. It was established in 2023
                    with the motto of providing quality digital marketing
                    services at an affordable price.
                  </p>

                  <ul className="footer-social">
                    {/* <li>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        className="bg-3955bc"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li> */}
                    {/* <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        className="bg-1da1f2"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        className="bg-004dff"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://www.instagram.com/techexcellencenepal/"
                        target="_blank"
                        className="bg-0273af"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer-item-area">
                  <div className="footer-heading">
                    <h3>Important Links</h3>
                  </div>

                  <ul className="footer-quick-links">
                    <li>
                      <Link href="/about-us">
                        <a>About Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/projects">
                        <a>Project</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <a>Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/team">
                        <a>Team</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a>Contact</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div> */}

              {/* <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer-item-area">
                  <div className="footer-heading">
                    <h3>Featured Service</h3>
                  </div>

                  <ul className="footer-quick-links">
                    <li>
                      <Link href="/service-details">
                        <a>SEO Marketing</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <a>SEO Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <a>Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <a>Pay-Per-Click</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <a>Social Media</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div> */}

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="mb-30">
                  <div className="footer-heading">
                    <h3>Contact</h3>
                  </div>

                  <div className="footer-info-contact">
                    <i className="flaticon-call-answer"></i>
                    <h3>Phone</h3>
                    <span>+977-9864490609 | +977-9843438126</span>
                  </div>

                  <div className="footer-info-contact">
                    <i className="flaticon-envelope"></i>
                    <h3>Email</h3>
                    <span>support@techxcellencenpl.com</span>
                  </div>

                  <div className="footer-info-contact">
                    <i className="flaticon-placeholder-filled-point"></i>
                    <h3>Address</h3>
                    <span>Budhanilkantha, Kathmandu, Nepal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shape Images */}
          <div className="default-animation">
            <div className="shape-img1">
              <img src="/images/shape/12.svg" alt="image" />
            </div>
            <div className="shape-img2">
              <img src="/images/shape/13.svg" alt="image" />
            </div>
            <div className="shape-img3">
              <img src="/images/shape/14.png" alt="image" />
            </div>
            <div className="shape-img4">
              <img src="/images/shape/15.png" alt="image" />
            </div>
            <div className="shape-img5">
              <img src="/images/shape/2.png" alt="image" />
            </div>
          </div>
        </footer>

        {/* Copyright footer */}
        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <p>
                  © {currentYear} TechXcellence All Rights Reserved by{" "}
                  <a href="https://techxcellencenpl.com/" target="_blank">
                    TechXcellence
                  </a>
                </p>
              </div>

              <div className="col-lg-6">
                <ul>
                  <li>
                    <Link href="/terms-conditions">
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
