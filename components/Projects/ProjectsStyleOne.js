import React, { Component } from 'react';
import Link from 'next/link';

class ProjectsStyleOne extends Component {
    render() {
        return (
            <section className="project-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Projects</span>
                        <h3>Our Projects For Client</h3>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-project-box">
                                <Link href="/single-project">
                                    <a><img src="/images/project/1.jpg" alt="image" /></a>
                                </Link>
                                <div className="project-hover-content">
                                    <h3>
                                        <Link href="/single-project">
                                            <a>Branding</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div> 

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-project-box">
                                <Link href="/single-project">
                                    <a><img src="/images/project/2.jpg" alt="image" /></a>
                                </Link>
                                <div className="project-hover-content">
                                    <h3>
                                        <Link href="/single-project">
                                            <a>Marketing</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div> 

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-project-box">
                                <Link href="/single-project">
                                    <a><img src="/images/project/3.jpg" alt="image" /></a>
                                </Link>
                                <div className="project-hover-content">
                                    <h3>
                                        <Link href="/single-project">
                                            <a>SEO</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div> 

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-project-box">
                                <Link href="/single-project">
                                    <a><img src="/images/project/4.jpg" alt="image" /></a>
                                </Link>
                                <div className="project-hover-content">
                                    <h3>
                                        <Link href="/single-project">
                                            <a>Web Design</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div> 

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-project-box">
                                <Link href="/single-project">
                                    <a><img src="/images/project/5.jpg" alt="image" /></a>
                                </Link>
                                <div className="project-hover-content">
                                    <h3>
                                        <Link href="/single-project">
                                            <a>Web Development</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div> 

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-project-box">
                                <Link href="/single-project">
                                    <a><img src="/images/project/6.jpg" alt="image" /></a>
                                </Link>
                                <div className="project-hover-content">
                                    <h3>
                                        <Link href="/single-project">
                                            <a>Digital marketing</a>
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

export default ProjectsStyleOne;