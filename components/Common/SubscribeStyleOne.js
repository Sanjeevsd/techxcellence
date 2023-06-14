import React, { Component } from 'react';

class SubscribeStyleOne extends Component {
    render() {
        return (
            <section className="subscribe-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="subscribe-content">
                                <h2>Sign Up For Newsletter</h2>
                                <span className="sub-title">And Receive 40% Discount On First Project</span>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <form className="newsletter-form">
                                <input type="email" className="input-newsletter" placeholder="Enter your email" name="EMAIL" required />
                                <button type="submit">Subscribe Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SubscribeStyleOne;