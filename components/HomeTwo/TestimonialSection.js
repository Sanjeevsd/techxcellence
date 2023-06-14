import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
}

class TestimonialSection extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <section className="client-section">
                <div className="container">
                    <div className="section-title">
                        <span>Testimonial</span>
                        <h3>What Our Happy Client Say</h3>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="client-image">
                                <img src="/images/testimonial-image.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            {this.state.display ? <OwlCarousel 
                                className="client-slides owl-carousel owl-theme"
                                    {...options}
                                >
                                <div className="testimonial-single-item">
                                    <div className="testimonial-content-text">
                                        <div className="icon">
                                            <i className="flaticon-left-quote"></i>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    </div>
                                    <div className="testimonial-image">
                                        <img src="/images/client-image/1.jpg" alt="image" />
                                        <h3>R.Mortein</h3>
                                        <span>Product Manager</span>
                                    </div>
                                </div>

                                <div className="testimonial-single-item">
                                    <div className="testimonial-content-text">
                                        <div className="icon">
                                            <i className="flaticon-left-quote"></i>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    </div>
                                    <div className="testimonial-image">
                                        <img src="/images/client-image/2.jpg" alt="image" />
                                        <h3>R.Mortein</h3>
                                        <span>Product Manager</span>
                                    </div>
                                </div>
                            </OwlCarousel> : ''}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TestimonialSection;