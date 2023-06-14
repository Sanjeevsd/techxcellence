import React, { Component } from 'react';
import Link from 'next/link';

class ServicesContent extends Component {
    render() {
        return (
            <section className="services-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Services</span>
                        <h3>How We Can Help?</h3>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-faddd4">
                                    <i className="flaticon-landing-page"></i>
                                </div>
                                <h3>
                                    <Link href="/single-service/">
                                        <a>Search Engine Optimization</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-cafbf1">
                                    <i className="flaticon-goal"></i>
                                </div>
                                <h3>
                                    <Link href="/single-service/">
                                        <a>Social Media Strategy</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-ddd5fb">
                                    <i className="flaticon-contract"></i>
                                </div>
                                <h3>
                                    <Link href="/single-service/">
                                        <a>Real Time and Data</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-fcdeee">
                                    <i className="flaticon-application"></i>
                                </div>
                                <h3>
                                    <Link href="/single-service/">
                                        <a>Online Media Management</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-c5ebf9">
                                    <i className="flaticon-seo"></i>
                                </div>
                                <h3>
                                    <Link href="/single-service/">
                                        <a>Reporting & Analysis</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-f8fbd5">
                                    <i className="flaticon-data-recovery"></i>
                                </div>
                                <h3>
                                    <Link href="/single-service/">
                                        <a>Penalty Recovery</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu  labore et dolore magna aliqua.</p>
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
            </section>
        );
    }
}

export default ServicesContent;