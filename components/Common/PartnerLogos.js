import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: false,
    smartSpeed: 2000,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: false,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
}

class PartnerLogos extends Component {

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
            <div className="partner-section">
                <div className="container">
                    {this.state.display ? <OwlCarousel 
                    className="partner-slider owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="partner-item">
                            <a href="#" target="_blank">
                                <img src="/images/partnar/1.png" alt="partner" />
                            </a>
                        </div>

                        <div className="partner-item">
                            <a href="#" target="_blank">
                                <img src="/images/partnar/2.png" alt="partner" />
                            </a>
                        </div>

                        <div className="partner-item">
                            <a href="#" target="_blank">
                                <img src="/images/partnar/3.png" alt="partner" />
                            </a>
                        </div>

                        <div className="partner-item">
                            <a href="#" target="_blank">
                                <img src="/images/partnar/4.png" alt="partner" />
                            </a>
                        </div>

                        <div className="partner-item">
                            <a href="#" target="_blank">
                                <img src="/images/partnar/5.png" alt="partner" />
                            </a>
                        </div>

                        <div className="partner-item">
                            <a href="#" target="_blank">
                                <img src="/images/partnar/3.png" alt="partner" />
                            </a>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        );
    }
}

export default PartnerLogos;