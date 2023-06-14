import React, { Component } from 'react';
import Link from 'next/link';

class FeaturesContent extends Component {
    render() {
        return (
            <section className="features-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="features-content-area">
                                <span>Care Features</span>
                                <h3>Create Awesome Service With Our Tools</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                                <div className="features-btn">
                                    <Link href="/features">
                                        <a className="features-btn-one">More Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-features-item bg-f1eff8">
                                        <div className="icon">
                                            <i className="flaticon-seo"></i>
                                        </div>
                                        <h3>Seo Consultancy</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-features-item bg-fbe6d4">
                                        <div className="icon">
                                            <i className="flaticon-analytics"></i>
                                        </div>
                                        <h3>Competitor Analysis</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-features-item bg-f0fffc">
                                        <div className="icon">
                                            <i className="flaticon-laptop"></i>
                                        </div>
                                        <h3>Social Media Marketing</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-features-item bg-f8e1eb">
                                        <div className="icon">
                                            <i className="flaticon-analysis-1"></i>
                                        </div>
                                        <h3>Competitor Analysis</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="features-animation">
                    <div className="shape-img1">
                        <img src="/images/shape/8.png" alt="image" />
                    </div>
                    <div className="shape-img2">
                        <img src="/images/shape/5.png" alt="image" />
                    </div>
                </div>
            </section>
        );
    }
}

export default FeaturesContent;