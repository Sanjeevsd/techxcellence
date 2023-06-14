import React, { Component } from 'react'
import Link from 'next/link';

export default class AboutContent extends Component {
    render() {
        return (
            <>
                <div className="about-section pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-warp-image"></div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-warp pl-15">
                                    <span>About Us</span>
                                    <h3>We are Dynamic Team of SEO Agency</h3>

                                    <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore  dolore magna aliqua.</strong>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply dummy text of the printing and typesetting.</p>

                                    <div className="about-btn">
                                        <Link href="/about-us">
                                            <a className="default-btn-one">
                                                Learn More
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </>
        )
    }
}
