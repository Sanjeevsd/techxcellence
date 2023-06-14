import React, { Component } from 'react';

class SingleProjectContent extends Component {
    render() {
        return (
            <section className="project-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src="/images/services-details-image/1.jpg" alt="projects" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src="/images/services-details-image/2.jpg" alt="projects" />
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="projects-details-desc">
                                <h3>Competitor Analysis</h3>

                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                                <div className="features-text">
                                    <h4><i className="flaticon-check-mark"></i> Core Development</h4>
                                    <p>No fake products and services. The customer is king, their lives and needs are the inspiration. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                </div>

                                <div className="features-text">
                                    <h4><i className="flaticon-check-mark"></i> Define Your Choices</h4>
                                    <p>No fake products and services. The customer is king, their lives and needs are the inspiration. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                </div>

                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section.</p>

                                <div className="project-details-info">
                                    <div className="single-info-box">
                                        <h4>Client</h4>
                                        <span>James Anderson</span>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Category</h4>
                                        <span>Network, Marketing</span>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Date</h4>
                                        <span>February 28, 2020</span>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Share</h4>
                                        <ul className="social">
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
                                            <li> 
                                                <a href="https://www.linkedin.com/" target="_blank">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a> 
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="single-info-box">
                                        <a href="#" target="_blank" className="default-btn-one">Live Preview</a>
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

export default SingleProjectContent;