import React, { Component } from 'react'
import Link from 'next/link'

export default class Features extends Component {
    render() {
        return (
            <>
                <div className="features-section bg-color">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-features-item-two">
                                    <div className="icon">
                                        <i className="flaticon-seo"></i>
                                    </div>
                                    <h3>
                                        <Link href="/single-service">
                                            <a>Seo Consultancy</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-features-item-two">
                                    <div className="icon">
                                        <i className="flaticon-analytics"></i>
                                    </div>
                                    <h3>
                                        <Link href="/single-service">
                                            <a>Competitor Analysis</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-features-item-two">
                                    <div className="icon">
                                        <i className="flaticon-laptop"></i>
                                    </div>
                                    <h3>
                                        <Link href="/single-service">
                                            <a>Social Media Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
