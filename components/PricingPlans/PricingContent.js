import React, { Component } from 'react';
import Link from 'next/link';

class PricingContent extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs-item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <section className="pricing-section ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Pricing Plans</span>
                        <h3>The Best Solutions for Our Clients</h3>
                    </div>

                    <div className="tab pricing-tab">
                        {/* Tabs Nav */}
                        <ul className="tabs">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'monthly')}
                            >
                                Monthly
                            </li>
                            <li onClick={(e) => this.openTabSection(e, 'yearly')}>
                                Yearly
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div id="monthly" className="tabs-item">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-box bg-f6f5fb">
                                            <div className="pricing-header">
                                                <h3>Basic Plan</h3>
                                            </div>

                                            <div className="price">
                                                <strong>$</strong>
                                                <span>24</span>
                                            </div>

                                            <ul className="pricing-features">
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    SEO Audits
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    SEO Management
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    SEO Copywriting
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    Link Building
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    Site Migration
                                                </li>
                                            </ul>

                                            <div className="price-btn">
                                                <Link href="/contact">
                                                    <a className="price-btn-one">Get Started</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-box bg-ed0678">
                                            <div className="pricing-header">
                                                <h3>Standard Plan</h3>
                                            </div>

                                            <div className="price">
                                                <strong>$</strong>
                                                <span>59</span>
                                            </div>

                                            <ul className="pricing-features">
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    SEO Audits
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    SEO Management
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    SEO Copywriting
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    Link Building
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    Site Migration
                                                </li>
                                            </ul>

                                            <div className="price-btn">
                                                <Link href="/contact">
                                                    <a className="price-btn-one">Get Started</a>
                                                </Link>
                                            </div>

                                            <div className="pricing-shape">
                                                <img src="/images/pricing-shape.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-box bg-edfbf8">
                                            <div className="pricing-header">
                                                <h3>Premium Plan</h3>
                                            </div>

                                            <div className="price">
                                                <strong>$</strong>
                                                <span>89</span>
                                            </div>

                                            <ul className="pricing-features">
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    SEO Audits
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    SEO Management
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    SEO Copywriting
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    Link Building
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    Site Migration
                                                </li>
                                            </ul>

                                            <div className="price-btn">
                                                <Link href="/contact">
                                                    <a className="price-btn-one">Get Started</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="yearly" className="tabs-item">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-box bg-f6f5fb">
                                            <div className="pricing-header">
                                                <h3>Basic Plan</h3>
                                            </div>

                                            <div className="price">
                                                <strong>$</strong>
                                                <span>199</span>
                                            </div>

                                            <ul className="pricing-features">
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    SEO Audits
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    SEO Management
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    SEO Copywriting
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    Link Building
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    Site Migration
                                                </li>
                                            </ul>

                                            <div className="price-btn">
                                                <Link href="/contact">
                                                    <a className="price-btn-one">Get Started</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-box bg-ed0678">
                                            <div className="pricing-header">
                                                <h3>Standard Plan</h3>
                                            </div>

                                            <div className="price">
                                                <strong>$</strong>
                                                <span>299</span>
                                            </div>

                                            <ul className="pricing-features">
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    SEO Audits
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    SEO Management
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    SEO Copywriting
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    Link Building
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    Site Migration
                                                </li>
                                            </ul>

                                            <div className="price-btn">
                                                <Link href="/contact">
                                                    <a className="price-btn-one">Get Started</a>
                                                </Link>
                                            </div>

                                            <div className="pricing-shape">
                                                <img src="/images/pricing-shape.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-box bg-edfbf8">
                                            <div className="pricing-header">
                                                <h3>Premium Plan</h3>
                                            </div>

                                            <div className="price">
                                                <strong>$</strong>
                                                <span>399</span>
                                            </div>

                                            <ul className="pricing-features">
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    SEO Audits
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    SEO Management
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    SEO Copywriting
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    Link Building
                                                </li>
                                                <li>
                                                    <i className='flaticon-check-mark'></i> 
                                                    Site Migration
                                                </li>
                                            </ul>

                                            <div className="price-btn">
                                                <Link href="/contact">
                                                    <a className="price-btn-one">Get Started</a>
                                                </Link>
                                            </div>
                                        </div>
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

export default PricingContent;