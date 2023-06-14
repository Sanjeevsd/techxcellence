import React, { Component } from 'react';

class TeamCard extends Component {
    render() {
        return (
            <section className="team-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Team</span>
                        <h3>Meet Our Team</h3>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="team-item-area">
                                <div className="team-image">
                                    <img src="/images/team/1.jpg" alt="image" />
                                </div>

                                <div className="team-content">
                                    <h3>Edward Bold</h3>
                                    <span>CEO & Founder</span>

                                    <ul className="team-social">
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="team-item-area">
                                <div className="team-image">
                                    <img src="/images/team/2.jpg" alt="image" />
                                </div>

                                <div className="team-content">
                                    <h3>Calvin Klein</h3>
                                    <span>Marketing Support</span>

                                    <ul className="team-social">
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="team-item-area">
                                <div className="team-image">
                                    <img src="/images/team/3.jpg" alt="image" />
                                </div>

                                <div className="team-content">
                                    <h3>Alastair Cook</h3>
                                    <span>Underwriter</span>

                                    <ul className="team-social">
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="team-animation">
                    <div className="shape-img1">
                        <img src="/images/shape/7.png" alt="image" />
                    </div>
                    <div className="shape-img2">
                        <img src="/images/shape/9.png" alt="image" />
                    </div>
                    <div className="shape-img3">
                        <img src="/images/shape/7.png" alt="image" />
                    </div>
                    <div className="shape-img4">
                        <img src="/images/shape/9.png" alt="image" />
                    </div>
                    <div className="shape-img5">
                        <img src="/images/shape/9.png" alt="image" />
                    </div>
                </div>
            </section>
        );
    }
}

export default TeamCard;