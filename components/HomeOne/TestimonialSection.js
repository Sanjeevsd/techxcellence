import React, { Component } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 2000,
  margin: 30,
  autoplayHoverPause: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 2,
    },
  },
};

class TestimonialSection extends Component {
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
      <section className="testimonial-section ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="testimonial-content-area">
                <span>Testimonial</span>
                <h3>What Our Client Say</h3>
                <p>
                  Read what our clients have to say about the services we
                  provide at{" "}
                  <a href="https://techxcellencenpl.com">TechXcellence Nepal</a>
                  .
                </p>
              </div>
            </div>

            <div className="col-lg-8">
              {this.state.display ? (
                <OwlCarousel
                  className="testimonial-slides owl-carousel owl-theme"
                  {...options}
                >
                  <div className="testimonial-single-item">
                    <div className="testimonial-image">
                      <img src="/images/sneakersbysuyug.jpeg" alt="image" />
                    </div>
                    <div className="testimonial-content-text">
                      <h3>Sneakers By Suyug</h3>
                      <span>Arman Bhandari</span>
                      <div className="icon">
                        <i className="flaticon-quote"></i>
                      </div>
                      <p>
                        Excellent Service by TechXcellence to boost my shoes and
                        sneakers sales. I am very happy with the service and
                        would recommend to everyone who wants digital marketing
                        and seo services.
                      </p>
                    </div>
                  </div>

                  <div className="testimonial-single-item">
                    <div className="testimonial-image">
                      <img src="/images/momo.png" alt="image" />
                    </div>
                    <div className="testimonial-content-text">
                      <h3>Momo Galli</h3>
                      <span>Prakash Dhakal</span>
                      <div className="icon">
                        <i className="flaticon-quote"></i>
                      </div>
                      <p>
                        TechXcellence Nepal helped us to boost our sales and
                        increase our brand awareness. They are very professional
                        and dedicated in their work.
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-single-item">
                    <div className="testimonial-image">
                      <img src="/images/uhschool.jpg" alt="image" />
                    </div>
                    <div className="testimonial-content-text">
                      <h3>Universal Higher Secondary School</h3>
                      <span>Bijay Kharel</span>
                      <div className="icon">
                        <i className="flaticon-quote"></i>
                      </div>
                      <p>
                        The website and ad campaigns brought students and
                        parents closer to exceptional education. Very
                        Professional and time bound services. Highly
                        recommended.
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-single-item">
                    <div className="testimonial-image">
                      <img src="/images/burger.jpg" alt="image" />
                    </div>
                    <div className="testimonial-content-text">
                      <h3>Classic Burger & Chicken King</h3>
                      <span>Roshan Shrestha</span>
                      <div className="icon">
                        <i className="flaticon-quote"></i>
                      </div>
                      <p>
                        Outstanding social media management and captivating
                        content! Their designs, flyers, and menus truly elevated
                        our service, attracting an influx of delighted
                        customers.
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-single-item">
                    <div className="testimonial-image">
                      <img src="/images/jayanita.jpg" alt="image" />
                    </div>
                    <div className="testimonial-content-text">
                      <h3>Jaya Nita Hardware Center</h3>
                      <span>Bijay Karki</span>
                      <div className="icon">
                        <i className="flaticon-quote"></i>
                      </div>
                      <p>
                        Exceptional content creation and savvy social media
                        management! Their expertise brought our brand to life,
                        engaging audiences and driving remarkable growth.
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-single-item">
                    <div className="testimonial-image">
                      <img src="/images/fineart.jpg" alt="image" />
                    </div>
                    <div className="testimonial-content-text">
                      <h3>Rabi’s Fine Art Studio</h3>
                      <span>Rabi Basnet</span>
                      <div className="icon">
                        <i className="flaticon-quote"></i>
                      </div>
                      <p>
                        From content creation to strategic marketing, their
                        social media prowess was unparalleled. They transformed
                        our online presence, capturing attention and fostering
                        meaningful connections
                      </p>
                    </div>
                  </div>
                </OwlCarousel>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TestimonialSection;
