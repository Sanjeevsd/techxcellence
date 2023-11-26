import React, { Component } from "react";

class AboutContent extends Component {
  render() {
    return (
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img
                  src="/images/about-us3.jpg"
                  alt="image"
                  style={{ borderRadius: "8px" }}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-area-content">
                <span>We are here to help</span>
                <h3>Why Choose Digital Marketing For Your Business?</h3>
                <strong>
                  By investing in digital marketing strategies long-term, your
                  business can increase brand awareness and even brand loyalty
                  of your clients and target audience. A few examples of digital
                  marketing services that boost brand awareness and loyalty
                  include content marketing and social media marketing.
                </strong>
                <p>
                  Each service focuses on offering your target audience value,
                  whether by creating original content that answers user
                  questions or by engaging users across the different types of
                  social platforms. By focusing on your clients, rather than
                  your sales goals, you improve your online brand. That
                  reputation can build loyalty among shoppers, encouraging them
                  to choose and stick with your company for the long-term. Their
                  commitment later contributes to your sales goals.
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
