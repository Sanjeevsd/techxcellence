import React, { useState } from "react";
import ContactInfo from "./ContactInfo";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";
import Loader from "../Layouts/Loader";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const [loading, setloading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    setloading(true);
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  return (
    <section className="contact-area ptb-100">
      {/* Contact Info */}
      <ContactInfo />
      <Loader loading={loading} />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="contact-text">
              <h3>Get in Touch</h3>
              <p style={{ fontSize: "20px" }}>
                Ready to elevate your online presence?
              </p>
              <p>
                Get in touch now and Contact us today to kickstart your journey
                toward online success.
              </p>

              <ul className="social-links">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100093043455729&mibextid=LQQJ4d"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                {/* <li>
                  <a href="https://twitter.com/" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li> */}
                <li>
                  <a
                    href="https://www.instagram.com/techexcellencenepal/"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                {/* <li>
                  <a href="https://www.linkedin.com/" target="_blank">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li> */}
                {/* <li>
                  <a href="https://www.pinterest.com/" target="_blank">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      value={contact.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="number"
                      placeholder="Phone number"
                      className="form-control"
                      value={contact.number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="form-control"
                      value={contact.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="text"
                      cols="30"
                      rows="6"
                      placeholder="Write your message..."
                      className="form-control"
                      value={contact.text}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <div className="send-btn">
                    <button type="submit" className="send-btn-one">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
