import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  items: 1,
  smartSpeed: 750,
  autoplay: true,
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>",
  ],
};

export default class MainBanner extends Component {
  _isMounted = false;
  state = {
    display: false,
  };
  componentDidMount() {
    this._isMounted = true;
    this.setState({ display: true });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <>
        {this.state.display ? (
          <OwlCarousel
            className="home-slides owl-carousel owl-theme"
            {...options}
          >
            <div className="main-banner-item">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="main-banner-content">
                      <h1>
                        Digital Agency with <span>Xcellence</span> Service
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        eiusmod tempor incididunt ut labore.
                      </p>
                      <div className="banner-btn">
                        <Link href="/about-us">
                          <a className="default-btn-one">More About Us</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-banner-item item-two">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="main-banner-content">
                      <h1>Exquisite of Digital Marketing</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        eiusmod tempor incididunt ut labore.
                      </p>
                      <div className="banner-btn">
                        <Link href="/about-us">
                          <a className="default-btn-one">More About Us</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        ) : (
          ""
        )}
      </>
    );
  }
}
