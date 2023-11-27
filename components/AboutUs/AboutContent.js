import React, { Component } from "react";

class AboutContent extends Component {
  render() {
    return (
      <section className="about-section pt-100 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/seo_hero.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-area-content">
                <h3>About Us</h3>
                {/* <h3>We are Dynamic Team of SEO Agency</h3> */}
                <strong>
                  TechXcellence Nepal is a full-service digital marketing agency
                  based in Kathmandu, Nepal. It was established in 2023 with the
                  motto of providing quality digital marketing services at an
                  affordable price.
                </strong>
                <p>
                  In today's digital business world, you need a partner who can
                  help you take advantage of marketing opportunities across a
                  variety of channels in real-time.TechXcellence Nepal combines
                  a data-driven approach with knowledge gained from various
                  experience in digital marketing to deliver outstanding results
                  to our clients.
                </p>
              </div>

              {/* <div className="row">
                <div className="col-lg-6 col-6 col--6">
                  <div className="single-fun-facts">
                    <h3>
                      1,165
                      <span className="sign-icon">+</span>
                    </h3>
                    <p>Project Completed</p>
                  </div>
                </div>

                <div className="col-lg-6 col-6 col-6">
                  <div className="single-fun-facts">
                    <h3>
                      2,665
                      <span className="sign-icon">+</span>
                    </h3>
                    <p>Satisfied Clients</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutContent;
