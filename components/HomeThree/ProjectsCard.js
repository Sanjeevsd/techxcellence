import React, { Component } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))

const options = {
    loop: true,
    nav: false,
    dots: false,
    smartSpeed: 2000,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 2
        },
        1024: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
}

export default class ProjectsCard extends Component {

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
            <>
                <div className="project-section">
                    <div className="container-fluid">
                        <div className="section-title">
                            <span>Projects</span>
                            <h3>Our Projects For Client</h3>
                        </div>
                        
                        {this.state.display ? <OwlCarousel 
                            className="projects-slider owl-carousel owl-theme"
                            {...options}
                        >  
                            <div className="single-project-box">
                                <img 
                                    src="/images/project/1.jpg" 
                                    alt="image" 
                                />
                                <div className="project-hover-content">
                                    <h3>
                                        <Link href="/single-project">
                                            <a>Search Enginee Optimization</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        
                            <div className="single-project-box">
                                <img 
                                    src="/images/project/2.jpg" 
                                    alt="image" 
                                />
                                <div className="project-hover-content">
                                    <h3>
                                        <Link href="/single-project">
                                            <a>Opertray Division</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        
                            <div className="single-project-box">
                                <img 
                                    src="/images/project/3.jpg" 
                                    alt="image" 
                                />
                                <div className="project-hover-content">
                                    <h3>
                                        <Link href="/single-project">
                                            <a>Tremely Designs</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        
                            <div className="single-project-box">
                                <img 
                                    src="/images/project/4.jpg" 
                                    alt="image" 
                                />
                                <div className="project-hover-content">
                                    <h3>
                                        <Link href="/single-project">
                                            <a>Plainst Tech</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        
                            <div className="single-project-box">
                                <img 
                                    src="/images/project/5.jpg" 
                                    alt="image" 
                                />
                                <div className="project-hover-content">
                                    <h3>
                                        <Link href="/single-project">
                                            <a>Maindex Solutions</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        
                            <div className="single-project-box">
                                <img 
                                    src="/images/project/6.jpg" 
                                    alt="image" 
                                />
                                <div className="project-hover-content">
                                    <h3>
                                        <Link href="/single-project">
                                            <a>Email Campaign Design</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </>
        )
    }
}