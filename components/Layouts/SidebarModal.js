import React, { Component } from "react";

class SidebarModal extends Component {
  state = {
    modal: false,
  };
  closeModal = () => {
    this.props.onClick(this.state.modal);
  };
  render() {
    return (
      <div className={`sidebar-modal ${this.props.active}`}>
        <div className="sidebar-modal-inner">
          <div className="sidebar-about-area">
            <div className="title">
              <h2>About Us</h2>
              <p>
                TechXcellence Nepal is a full-service digital marketing agency
                based in Kathmandu, Nepal. It was established in 2023 with the
                motto of providing quality digital marketing services at an
                affordable price.
              </p>
            </div>
          </div>

          {/* Instagram feed */}
          <div className="sidebar-instagram-feed">
            <h2>Instagram</h2>
            <ul>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <img src="/images/instagram-image/1.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <img src="/images/instagram-image/2.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <img src="/images/instagram-image/3.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <img src="/images/instagram-image/4.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <img src="/images/instagram-image/5.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <img src="/images/instagram-image/6.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <img src="/images/instagram-image/7.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <img src="/images/instagram-image/8.jpg" alt="image" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sidebar-contact-area">
            <div className="contact-info">
              <div className="contact-info-content">
                <h2>
                  <span className="info">
                    +977-9864490609 | +977-9843438126
                  </span>
                  <span className="or">OR</span>
                  <span className="info">support@techxcellencenpl.com</span>
                </h2>

                <ul className="social">
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin-in"></i>
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

          {/* Close Modal */}
          <span
            onClick={this.closeModal}
            className="close-btn sidebar-modal-close-btn"
          >
            <i className="fas fa-times"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default SidebarModal;

// v=DKIM1; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhnLmYhHrqXt8lsnG4VdFCprgnHPGw+99S6QQ0Crp78kkdyZ6intssqn19UbYtAnxjmNhIF+eOYhKZVkw/eWSqQ3F4dER8/gkX3EXI7S9oZ4C3GS+O0fo+7BLO/gwOijiB/tqaP5M+0VY0t2k5qDZTGtBthl87mdA4xC8sUGW0wJw+jvNRAhtHeicdJDOwu6pdQ8pGSo9VXiq8uTxklV98iKtWidiEcsWWRVHAE/+ooCY2KcCmEN7rjovCPAE/g5v0cwWZixTZLJqkpKtOCik/t9eDQOAgJjtVOsTFXFXwBTMu1ubMYilr7VcIQZ2nLoCFo2ZNoE3A4dZUmqFO9SWXwIDAQAB
