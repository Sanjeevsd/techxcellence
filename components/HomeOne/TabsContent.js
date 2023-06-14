import React, { Component } from 'react';
import Link from 'next/link';

class TabsContent extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
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
            <section className="tab-section">
                <div className="container">
                    <div className="section-title">
                        <span>Boosting</span>
                        <h3>Outstanding Digital Experience</h3>
                    </div>

                    <div className="tab boosting-list-tab">
                        {/* Tabs Nav */}
                        <ul className="tabs">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                <i className="flaticon-analysis-2"></i>
                                <span>Real-Time-Analytics</span>
                            </li>
                            <li onClick={(e) => this.openTabSection(e, 'tab2')} className="bg-eff7e9">
                                <i className="flaticon-hand"></i>
                                <span>Pay-Per-Click</span>
                            </li>
                            <li onClick={(e) => this.openTabSection(e, 'tab3')} className="bg-fff8f0">
                                <i className="flaticon-digital-marketing"></i>
                                <span>Online Marketing</span>
                            </li>
                            <li onClick={(e) => this.openTabSection(e, 'tab4')} className="bg-ecfaf7">
                                <i className="flaticon-email"></i>
                                <span>Email Marketing</span>
                            </li>
                            <li onClick={(e) => this.openTabSection(e, 'tab5')} className="bg-f2f0fb">
                                <i className="flaticon-network"></i>
                                <span>Social Marketing</span>
                            </li>
                            <li onClick={(e) => this.openTabSection(e, 'tab6')} className="bg-c5ebf9">
                                <i className="flaticon-analysis-1"></i>
                                <span>Digital Marketing</span>
                            </li>
                        </ul>

                        <div className="tab_content">
                            {/* Tabs Item 01 */}
                            <div id="tab1" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image">
                                            <img src="/images/tab/1.jpg" alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>Real-Time Analytics</h2>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-btn">
                                            <Link href="/single-service">
                                                <a className="default-btn-one">Discover More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-shape">
                                    <img src="/images/tab/shape.png" alt="image" />
                                </div>
                            </div>

                            {/* Tabs Item 02 */}
                            <div id="tab2" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image">
                                            <img src="/images/tab/2.jpg" alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>Pay-Per Click</h2>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-btn">
                                            <Link href="/single-service">
                                                <a className="default-btn-one">Discover More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-shape">
                                    <div className="tab-shape">
                                        <img src="/images/tab/shape.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        
                            {/* Tabs Item 03 */}
                            <div id="tab3" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image">
                                            <img src="/images/tab/3.jpg" alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>Online Marketting</h2>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-btn">
                                            <Link href="/single-service">
                                                <a className="default-btn-one">Discover More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-shape">
                                    <img src="/images/tab/shape.png" alt="image" />
                                </div>
                            </div>

                            {/* Tabs Item 04 */}
                            <div id="tab4" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image">
                                            <img src="/images/tab/4.jpg" alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>Email Marketting</h2>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-btn">
                                            <Link href="/single-service">
                                                <a className="default-btn-one">Discover More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-shape">
                                    <img src="/images/tab/shape.png" alt="image" />
                                </div>
                            </div>
                        
                            {/* Tabs Item 05 */}
                            <div id="tab5" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image">
                                            <img src="/images/tab/5.jpg" alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>Social Marketting</h2>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-btn">
                                            <Link href="/single-service">
                                                <a className="default-btn-one">Discover More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-shape">
                                    <img src="/images/tab/shape.png" alt="image" />
                                </div>
                            </div>

                            {/* Tabs Item 06 */}
                            <div id="tab6" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image">
                                            <img src="/images/tab/6.jpg" alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>Digital Marketting</h2>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-btn">
                                            <Link href="/single-service">
                                                <a className="default-btn-one">Discover More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-shape">
                                    <img src="/images/tab/shape.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TabsContent;