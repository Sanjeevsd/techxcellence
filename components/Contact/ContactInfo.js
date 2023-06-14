import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="contact-box">
                            <div className="icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="content">
                                <h4>Phone / Fax</h4>
                                <p>(882) 569-7565</p>
                                <p>(882) 453-4565</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <div className="contact-box">
                            <div className="icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="content">
                                <h4>E-mail</h4>
                                <p>hello@neemo.com</p>
                                <p>support@neemo.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <div className="contact-box">
                            <div className="icon">
                                <i className="fa fa-map-marker"></i>
                            </div>
                            <div className="content">
                                <h4>Location</h4>
                                <p>123, Western Road, Melbourne <br /> Australia</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default ContactInfo;