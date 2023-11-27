import React, { Component } from "react";
import Link from "next/link";

class ServicesContent extends Component {
  render() {
    return (
      <section className="services-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            {/* <span>How Can we Help?</span> */}
            <h3>Services</h3>
          </div>

          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-faddd4">
                  <i className="flaticon-landing-page"></i>
                </div>
                <h3>
                  <Link href="/service-details/#seo">
                    <a>Search Engine Optimization</a>
                  </Link>
                </h3>
                <p>
                  At TechXcellence Nepal, we specialize in an innovative
                  approach to SEO that uses white-hat tactics to put your
                  website at the top of your target audience's searches
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-cafbf1">
                  <i className="flaticon-goal"></i>
                </div>
                <h3>
                  <Link href="/service-details/#smm">
                    <a>Social Media Marketing</a>
                  </Link>
                </h3>
                <p>
                  We specialize in strategic social media campaigns that focus
                  on building and protecting a positive brand image, creating
                  loyalty among fans, and driving new leads for your business.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-ddd5fb">
                  <i className="flaticon-contract"></i>
                </div>
                <h3>
                  <Link href="/service-details/#cm">
                    <a>Content Marketing</a>
                  </Link>
                </h3>
                <p>
                  We specialize in helping our clients plan, produce, and
                  promote content that drives audience engagement and
                  conversions
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-fcdeee">
                  <i className="flaticon-application"></i>
                </div>
                <h3>
                  <Link href="/service-details/#ppc">
                    <a>Pay Per Click(PPC) Markerting</a>
                  </Link>
                </h3>
                <p>
                  Our approach to PPC is data-driven, which allows us to deploy
                  campaigns that focus on efficiency and constant improvement
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-c5ebf9">
                  <i className="flaticon-seo"></i>
                </div>
                <h3>
                  <Link href="/service-details/#ra">
                    <a>Reporting & Analysis</a>
                  </Link>
                </h3>
                <p>
                  Provide you with a detailed report and analysis of your
                  Business marketing campaign.
                </p>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-f8fbd5">
                  <i className="flaticon-data-recovery"></i>
                </div>
                <h3>
                  <Link href="/service-details/#mfa">
                    <a>Market Feasibility Analysis</a>
                  </Link>
                </h3>
                <p>
                 
                </p>
              </div>
            </div> */}
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
      </section>
    );
  }
}

export default ServicesContent;
