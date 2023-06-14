import React, { Component } from "react";

class AboutContent extends Component {
  render() {
    return (
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/about-image.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-area-content">
                <span>We are here to help</span>
                <h3>Why Choose Digital Marketing?</h3>
                <strong>
                  Choose digital marketing to harness the power of the online
                  landscape, connect with your target audience, drive meaningful
                  engagement, and achieve your business goals in a
                  cost-effective and measurable way.
                </strong>
                <p>
                  Reach and Engage a Wider Audience: Digital marketing enables
                  you to connect with a vast global audience instantly. Through
                  various online channels such as search engines, social media,
                  and email marketing, you can reach potential customers across
                  geographical boundaries and engage them effectively.
                </p>
              </div>

              <div className="row">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutContent;
