import React, { Component } from 'react';

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
                                <span>About Us</span>
                                <h3>We are Dynamic Team of SEO Agency</h3>
                                <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore  dolore magna aliqua.</strong>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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