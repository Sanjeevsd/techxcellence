import React, { Component } from 'react';
import Link from 'next/link';

class ProjectsStyleTwo extends Component {
    render() {
        return (
            <section className="portfolio-section">
                <div className="container">
                    <div className="section-title">
                        <span>Portfolio</span>
                        <h3>Our Project For Client</h3>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-portfolio-box">
                                <div className="portfolio-image">
                                    <Link href="/single-project">
                                        <a><img src="/images/portfolio/1.png" alt="image" /></a>
                                    </Link>
                                </div>
                                <div className="portfolio-hover-content">
                                    <h3>
                                        <Link href="/single-project/#">
                                            <a>Branding</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>    

                            <div className="single-portfolio-box">
                                <div className="portfolio-image">
                                    <Link href="/single-project">
                                        <a><img src="/images/portfolio/2.png" alt="image" /></a>
                                    </Link>
                                </div>
                                <div className="portfolio-hover-content">
                                    <h3>
                                        <Link href="/single-project">
                                            <a>Marketing</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>  
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-portfolio-box">
                                <div className="portfolio-image">
                                    <Link href="/single-project">
                                        <a><img src="/images/portfolio/3.png" alt="image" /></a>
                                    </Link>
                                </div>
                                <div className="portfolio-hover-content">
                                    <h3>
                                        <Link href="/single-project">
                                            <a>SEO</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>  

                            <div className="single-portfolio-box">
                                <div className="portfolio-image">
                                    <Link href="/single-project">
                                        <a><img src="/images/portfolio/4.png" alt="image" /></a>
                                    </Link>
                                </div>
                                <div className="portfolio-hover-content">
                                    <h3>
                                        <Link href="/single-project">
                                            <a>Web Design</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>  

                            <div className="single-portfolio-box">
                                <div className="portfolio-image">
                                    <Link href="/single-project">
                                        <a><img src="/images/portfolio/5.png" alt="image" /></a>
                                    </Link>
                                </div>
                                <div className="portfolio-hover-content">
                                    <h3>
                                        <Link href="/single-project">
                                            <a>Web Development</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>  
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="single-portfolio-box">
                                <div className="portfolio-image">
                                    <Link href="/single-project">
                                        <a><img src="/images/portfolio/6.png" alt="image" /></a>
                                    </Link>
                                </div>
                                <div className="portfolio-hover-content">
                                    <h3>
                                        <Link href="/single-project">
                                            <a>Digital Marketing</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>  

                            <div className="single-portfolio-box">
                                <div className="portfolio-image">
                                    <Link href="/single-project">
                                        <a><img src="/images/portfolio/7.png" alt="image" /></a>
                                    </Link>
                                </div>
                                <div className="portfolio-hover-content">
                                    <h3>
                                        <Link href="/single-project">
                                            <a>IT Marketing</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProjectsStyleTwo;